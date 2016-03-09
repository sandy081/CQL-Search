var ParserUtils= require("./ParserUtils");
var CqlParser = require('./generated/grammar/flights/CqlParser').CqlParser;
var Proposal = require('./../shared/models/proposals/Proposal');

var SelectionHelper= function(input) {
    this._input= input;
    this._tokens= ParserUtils.getAllTokens(input);
};

SelectionHelper.prototype.createSelection= function(parserRuleContext) {
    var startToken= parserRuleContext.start;
    var stopToken= parserRuleContext.stop;
    if (stopToken === null || startToken.type === CqlParser.EOF) {
        stopToken= startToken;
    }

    var stop= stopToken.stop;
    return this._hasTrailingSpaceAfter(stop) ? this._createAfterSelectionWithStartAndStop(stop + 2, stop) : this._createSelection(startToken.start, stop);
}

SelectionHelper.prototype._createAfterSelectionWithStartAndStop= function(start, stop) {
    var trailingSpace= this._getTrailingSpaceAfter(stop);
    var additionalOffset= this._isWhitespaceStr(trailingSpace) ? trailingSpace.length() : 0;
    return this._createSelection(start, stop + additionalOffset);
}

SelectionHelper.prototype._createAfterSelectionWithContext= function(parserRuleContext) {
    var stop= (parserRuleContext.stop != null ? parserRuleContext.stop : parserRuleContext.start).stop;
    return this._createAfterSelection(stop + 1, stop);
}

SelectionHelper.prototype._hasTrailingSpaceAfter= function(stop) {
    return this._isWhitespaceStr(this._getTrailingSpaceAfter(stop));
}

SelectionHelper.prototype._isWhitespaceStr= function(remaining) {
     return remaining.length > 0 && remaining.trim();
}

SelectionHelper.prototype._getTrailingSpaceAfter= function(stop) {
     return this._input.substring(stop + 1);
}

SelectionHelper.prototype._createSelection= function(start, end) {
    var selection= {};
    selection[Proposal.propSelectionFrom]= start;
    selection[Proposal.propSelectionTill]= end;
    return selection;
}

SelectionHelper.prototype.hasTrailingSpace= function(ctx) {
    var token= ctx.stop !== null ? ctx.stop : ctx.start;
    return this._hasTrailingSpaceAfter(token.stop);
}

SelectionHelper.prototype.needsLeadingSpace= function(ctx) {
    var token= ctx.start;
    var index= token.tokenIndex;
    if(index === 0) {
        return false;
    }
    var previousToken= this._tokens[index - 1];
    return this._input.substring(previousToken.stop + 1, token.start).isEmpty();
}

module.exports = SelectionHelper;