"use strict";(self.webpackChunk_yuntijs_charts=self.webpackChunk_yuntijs_charts||[]).push([[3971],{33971:function(D,e,u){u.r(e),u.d(e,{default:function(){return r}});var n=u(73764),t=u(26308),a=u(6362),i=u(50637),o=u(79013);const p=Object.freeze({displayName:"Julia",name:"julia",patterns:[{include:"#operator"},{include:"#array"},{include:"#string"},{include:"#parentheses"},{include:"#bracket"},{include:"#function_decl"},{include:"#function_call"},{include:"#for_block"},{include:"#keyword"},{include:"#number"},{include:"#comment"},{include:"#type_decl"},{include:"#symbol"}],repository:{array:{patterns:[{begin:"\\[",beginCaptures:{0:{name:"meta.bracket.julia"}},end:"(\\])((?:\\.)?'*)",endCaptures:{1:{name:"meta.bracket.julia"},2:{name:"keyword.operator.transpose.julia"}},name:"meta.array.julia",patterns:[{match:"\\bbegin\\b",name:"constant.numeric.julia"},{match:"\\bend\\b",name:"constant.numeric.julia"},{include:"#self_no_for_block"}]}]},bracket:{patterns:[{begin:"\\{",beginCaptures:{0:{name:"meta.bracket.julia"}},end:"(\\})((?:\\.)?'*)",endCaptures:{1:{name:"meta.bracket.julia"},2:{name:"keyword.operator.transpose.julia"}},patterns:[{include:"#self_no_for_block"}]}]},comment:{patterns:[{include:"#comment_block"},{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.julia"}},end:"\\n",name:"comment.line.number-sign.julia",patterns:[{include:"#comment_tags"}]}]},comment_block:{patterns:[{begin:"#=",beginCaptures:{0:{name:"punctuation.definition.comment.begin.julia"}},end:"=#",endCaptures:{0:{name:"punctuation.definition.comment.end.julia"}},name:"comment.block.number-sign-equals.julia",patterns:[{include:"#comment_tags"},{include:"#comment_block"}]}]},comment_tags:{patterns:[{match:"\\bTODO\\b",name:"keyword.other.comment-annotation.julia"},{match:"\\bFIXME\\b",name:"keyword.other.comment-annotation.julia"},{match:"\\bCHANGED\\b",name:"keyword.other.comment-annotation.julia"},{match:"\\bXXX\\b",name:"keyword.other.comment-annotation.julia"}]},for_block:{comment:"for blocks need to be special-cased to support tokenizing 'outer' properly",patterns:[{begin:"\\b(for)\\b",beginCaptures:{0:{name:"keyword.control.julia"}},end:"(?<!,|\\s)(\\s*\\n)",patterns:[{match:"\\bouter\\b",name:"keyword.other.julia"},{include:"$self"}]}]},function_call:{patterns:[{begin:"((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()",beginCaptures:{1:{name:"support.function.julia"},2:{name:"support.type.julia"},3:{name:"meta.bracket.julia"}},end:"\\)(('|(\\.'))*\\.?')?",endCaptures:{0:{name:"meta.bracket.julia"},1:{name:"keyword.operator.transposed-func.julia"}},patterns:[{include:"#self_no_for_block"}]}]},function_decl:{patterns:[{captures:{1:{name:"entity.name.function.julia"},2:{name:"support.type.julia"}},comment:`first group is function name
Second group is type parameters (e.g. {T<:Number, S})
Then open parens
Then a lookahead ensures that we are followed by:
  - anything (function arguments)
  - 0 or more spaces
  - Finally an equal sign
Negative lookahead ensures we don't have another equal sign (not \`==\`)`,match:"((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?(?=\\([^#]*\\)(::[^\\s]+)?(\\s*\\bwhere\\b\\s+.+?)?\\s*?=(?![=>]))"},{captures:{1:{name:"keyword.other.julia"},2:{name:"keyword.operator.dots.julia"},3:{name:"entity.name.function.julia"},4:{name:"support.type.julia"}},comment:"similar regex to previous, but with keyword not 1-line syntax",match:"\\b(function|macro)(?:\\s+(?:(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*(\\.))?((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?|\\s*)(?=\\()"}]},keyword:{patterns:[{match:"\\b(?<![:_\\.])(?:function|mutable\\s+struct|struct|macro|quote|abstract\\s+type|primitive\\s+type|module|baremodule|where)\\b",name:"keyword.other.julia"},{match:"\\b(?<![:_])(?:if|else|elseif|for|while|begin|let|do|try|catch|finally|return|break|continue)\\b",name:"keyword.control.julia"},{match:"\\b(?<![:_])end\\b",name:"keyword.control.end.julia"},{match:"\\b(?<![:_])(?:global|local|const)\\b",name:"keyword.storage.modifier.julia"},{match:"\\b(?<![:_])(?:export)\\b",name:"keyword.control.export.julia"},{match:"\\b(?<![:_])(?:import)\\b",name:"keyword.control.import.julia"},{match:"\\b(?<![:_])(?:using)\\b",name:"keyword.control.using.julia"},{match:"(?<=\\w\\s)\\b(as)\\b(?=\\s\\w)",name:"keyword.control.as.julia"},{match:"(@(\\.|(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*))",name:"support.function.macro.julia"}]},number:{patterns:[{captures:{1:{name:"constant.numeric.julia"},2:{name:"keyword.operator.conjugate-number.julia"}},match:"((?<!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF]))(?:(?:\\b0(?:x|X)[0-9a-fA-F](?:_?[0-9a-fA-F])*)|(?:\\b0o[0-7](?:_?[0-7])*)|(?:\\b0b[0-1](?:_?[0-1])*)|(?:(?:\\b[0-9](?:_?[0-9])*\\.?(?!\\.)(?:[_0-9]*))|(?:\\b\\.[0-9](?:_?[0-9])*))(?:[efE][+-]?[0-9](?:_?[0-9])*)?(?:im\\b|Inf(?:16|32|64)?\\b|NaN(?:16|32|64)?\\b|\u03C0\\b|pi\\b|\u212F\\b)?|\\b[0-9]+|\\bInf(?:16|32|64)?\\b|\\bNaN(?:16|32|64)?\\b|\\b\u03C0\\b|\\bpi\\b|\\b\u212F\\b))('*)"},{match:"\\bARGS\\b|\\bC_NULL\\b|\\bDEPOT_PATH\\b|\\bENDIAN_BOM\\b|\\bENV\\b|\\bLOAD_PATH\\b|\\bPROGRAM_FILE\\b|\\bstdin\\b|\\bstdout\\b|\\bstderr\\b|\\bVERSION\\b|\\bdevnull\\b",name:"constant.global.julia"},{match:"\\btrue\\b|\\bfalse\\b|\\bnothing\\b|\\bmissing\\b",name:"constant.language.julia"}]},operator:{patterns:[{match:"(?:->|<-|-->|=>)",name:"keyword.operator.arrow.julia"},{match:"(?::=|\\+=|-=|\\*=|//=|/=|\\.//=|\\./=|\\.\\*=|\\\\=|\\.\\\\=|\\^=|\\.\\^=|%=|\\.%=|\xF7=|\\.\xF7=|\\|=|&=|\\.&=|\u22BB=|\\.\u22BB=|\\$=|<<=|>>=|>>>=|=(?!=))",name:"keyword.operator.update.julia"},{match:"(?:<<|>>>|>>|\\.>>>|\\.>>|\\.<<)",name:"keyword.operator.shift.julia"},{captures:{1:{name:"keyword.operator.relation.types.julia"},2:{name:"support.type.julia"},3:{name:"keyword.operator.transpose.julia"}},match:`(?:\\s*(::|>:|<:)\\s*((?:(?:Union)?\\([^)]*\\)|[[:alpha:]_$\u2207][[:word:]\u207A-\u209C!\u2032\\.]*(?:(?:{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})|(?:".+?(?<!\\\\)"))?)))(?:\\.\\.\\.)?((?:\\.)?'*)`},{match:"(?:===|\u2208|\\.\u2208|\u2209|\\.\u2209|\u220B|\\.\u220B|\u220C|\\.\u220C|\u2248|\\.\u2248|\u2249|\\.\u2249|\u2260|\\.\u2260|\u2261|\\.\u2261|\u2262|\\.\u2262|\u2286|\\.\u2286|\u2287|\\.\u2287|\u2288|\\.\u2288|\u2289|\\.\u2289|\u228A|\\.\u228A|\u228B|\\.\u228B|\\.==|!==|!=|\\.>=|\\.>|\\.<=|\\.<|\\.\u2264|\\.\u2265|==|\\.!=|\\.=|\\.!|<:|>:|:>|(?<!>)>=|(?<!<)<=|>|<|\u2265|\u2264)",name:"keyword.operator.relation.julia"},{match:"(?<=\\s)(?:\\?)(?=\\s)",name:"keyword.operator.ternary.julia"},{match:"(?<=\\s)(?:\\:)(?=\\s)",name:"keyword.operator.ternary.julia"},{match:"(?:\\|\\||&&|(?<!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF]))!)",name:"keyword.operator.boolean.julia"},{match:"(?<=[[:word:]\u207A-\u209C!\u2032\u2207\\)\\]\\}])(?::)",name:"keyword.operator.range.julia"},{match:"(?:\\|>)",name:"keyword.operator.applies.julia"},{match:"(?:\\||\\.\\||\\&|\\.\\&|~|\\.~|\u22BB|\\.\u22BB)",name:"keyword.operator.bitwise.julia"},{match:"(?:\\+\\+|--|\\+|\\.\\+|-|\\.\\-|\\*|\\.\\*|//(?!=)|\\.//(?!=)|/|\\./|%|\\.%|\\\\|\\.\\\\|\\^|\\.\\^|\xF7|\\.\xF7|\u22C5|\\.\u22C5|\u2229|\\.\u2229|\u222A|\\.\u222A|\xD7|\u221A|\u221B)",name:"keyword.operator.arithmetic.julia"},{match:"(?:\u2218)",name:"keyword.operator.compose.julia"},{match:"(?:::|(?<=\\s)isa(?=\\s))",name:"keyword.operator.isa.julia"},{match:"(?:(?<=\\s)in(?=\\s))",name:"keyword.operator.relation.in.julia"},{match:"(?:\\.(?=(?:@|_|\\p{L}))|\\.\\.+)",name:"keyword.operator.dots.julia"},{match:"(?:\\$)(?=.+)",name:"keyword.operator.interpolation.julia"},{captures:{2:{name:"keyword.operator.transposed-variable.julia"}},match:"((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)(('|(\\.'))*\\.?')"},{captures:{1:{name:"bracket.end.julia"},2:{name:"keyword.operator.transposed-matrix.julia"}},match:"(\\])((?:'|(?:\\.'))*\\.?')"},{captures:{1:{name:"bracket.end.julia"},2:{name:"keyword.operator.transposed-parens.julia"}},match:"(\\))((?:'|(?:\\.'))*\\.?')"}]},parentheses:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"meta.bracket.julia"}},end:"(\\))((?:\\.)?'*)",endCaptures:{1:{name:"meta.bracket.julia"},2:{name:"keyword.operator.transpose.julia"}},patterns:[{include:"#self_no_for_block"}]}]},self_no_for_block:{comment:"Same as $self, but does not contain #for_block. 'outer' is not valid in some contexts (e.g. generators, comprehensions, indexing), so use this when matching those in begin/end patterns. Keep this up-to-date with $self!",patterns:[{include:"#operator"},{include:"#array"},{include:"#string"},{include:"#parentheses"},{include:"#bracket"},{include:"#function_decl"},{include:"#function_call"},{include:"#keyword"},{include:"#number"},{include:"#comment"},{include:"#type_decl"},{include:"#symbol"}]},string:{patterns:[{begin:'(?:(@doc)\\s((?:doc)?""")|(doc"""))',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},end:'(""") ?(->)?',endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"keyword.operator.arrow.julia"}},name:"string.docstring.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(i?cxx)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.cpp",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"embed.cxx.julia",patterns:[{include:"source.cpp#root_context"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(py)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.python",end:'([\\s\\w]*)(""")',endCaptures:{2:{name:"punctuation.definition.string.end.julia"}},name:"embed.python.julia",patterns:[{include:"source.python"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(js)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.javascript",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"embed.js.julia",patterns:[{include:"source.js"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(R)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.r",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"embed.R.julia",patterns:[{include:"source.r"},{include:"#string_dollar_sign_interpolate"}]},{begin:'(raw)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"string.quoted.other.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'(raw)(")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"string.quoted.other.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'(sql)(""")',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},contentName:"meta.embedded.inline.sql",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"embed.sql.julia",patterns:[{include:"source.sql"},{include:"#string_dollar_sign_interpolate"}]},{begin:'var"""',end:'"""',name:"constant.other.symbol.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'var"',end:'"',name:"constant.other.symbol.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'^\\s?(doc)?(""")\\s?$',beginCaptures:{1:{name:"support.function.macro.julia"},2:{name:"punctuation.definition.string.begin.julia"}},comment:`This only matches docstrings that start and end with triple quotes on
their own line in the void`,end:'(""")',endCaptures:{1:{name:"punctuation.definition.string.end.julia"}},name:"string.docstring.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"}},end:"'(?!')",endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"string.quoted.single.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.multiline.begin.julia"}},comment:"multi-line string with triple double quotes",end:'"""',endCaptures:{0:{name:"punctuation.definition.string.multiline.end.julia"}},name:"string.quoted.triple.double.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:'"(?!"")',beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"}},comment:"String with single pair of double quotes. Regex matches isolated double quote",end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.julia"}},name:"string.quoted.double.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:'r"""',beginCaptures:{0:{name:"punctuation.definition.string.regexp.begin.julia"}},end:'(""")([imsx]{0,4})?',endCaptures:{1:{name:"punctuation.definition.string.regexp.end.julia"},2:{comment:"I took this scope name from python regex grammar",name:"keyword.other.option-toggle.regexp.julia"}},name:"string.regexp.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'r"',beginCaptures:{0:{name:"punctuation.definition.string.regexp.begin.julia"}},end:'(")([imsx]{0,4})?',endCaptures:{1:{name:"punctuation.definition.string.regexp.end.julia"},2:{comment:"I took this scope name from python regex grammar",name:"keyword.other.option-toggle.regexp.julia"}},name:"string.regexp.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'(?<!")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"},1:{name:"support.function.macro.julia"}},end:'(""")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)?',endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"support.function.macro.julia"}},name:"string.quoted.other.julia",patterns:[{include:"#string_escaped_char"}]},{begin:'(?<!")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)"',beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"},1:{name:"support.function.macro.julia"}},end:'(?<![^\\\\]\\\\)(")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)?',endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"support.function.macro.julia"}},name:"string.quoted.other.julia",patterns:[{include:"#string_escaped_char"}]},{begin:"(?<!`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)?```",beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"},1:{name:"support.function.macro.julia"}},end:"(```)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)?",endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"support.function.macro.julia"}},name:"string.interpolated.backtick.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]},{begin:"(?<!`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)?`",beginCaptures:{0:{name:"punctuation.definition.string.begin.julia"},1:{name:"support.function.macro.julia"}},end:"(?<![^\\\\]\\\\)(`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)?",endCaptures:{1:{name:"punctuation.definition.string.end.julia"},2:{name:"support.function.macro.julia"}},name:"string.interpolated.backtick.julia",patterns:[{include:"#string_escaped_char"},{include:"#string_dollar_sign_interpolate"}]}]},string_dollar_sign_interpolate:{patterns:[{match:"\\$(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF]|[^\\p{^Sc}$])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF]|[^\\p{^Sc}$])*",name:"variable.interpolation.julia"},{begin:"\\$(\\()",beginCaptures:{1:{name:"meta.bracket.julia"}},comment:"`punctuation.section.embedded`, `constant.escape`,\n& `meta.embedded.line` were considered but appear to have even spottier\nsupport among popular syntaxes.",end:"\\)",endCaptures:{0:{name:"meta.bracket.julia"}},name:"variable.interpolation.julia",patterns:[{include:"#self_no_for_block"}]}]},string_escaped_char:{patterns:[{match:"\\\\(\\\\|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8}|.)",name:"constant.character.escape.julia"}]},symbol:{patterns:[{comment:"This is string.quoted.symbol.julia in tpoisot's package",match:'(?<![[:word:]\u207A-\u209C!\u2032\u2207\\)\\]\\}]):(?:(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)(?!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF]))(?!["`])',name:"constant.other.symbol.julia"}]},type_decl:{patterns:[{captures:{1:{name:"entity.name.type.julia"},2:{name:"entity.other.inherited-class.julia"},3:{name:"punctuation.separator.inheritance.julia"}},match:"(?>!:_)(?:struct|mutable\\s+struct|abstract\\s+type|primitive\\s+type)\\s+((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*)(\\s*(<:)\\s*(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{So}\u2190-\u21FF])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}\u2140-\u2144\u223F\u22BE\u22BF\u22A4\u22A5\u2202\u2205-\u2207\u220E\u220F\u2210\u2211\u221E\u221F\u222B-\u2233\u22C0-\u22C3\u25F8-\u25FF\u266F\u27D8\u27D9\u27C0\u27C1\u29B0-\u29B4\u2A00-\u2A06\u2A09-\u2A16\u2A1B\u2A1C\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u2071-\u207E\u2081-\u208E\u2220-\u2222\u299B-\u29AF\u2118\u212E\u309B-\u309C\u{1D7CE}-\u{1D7E1}]|[^\\P{Mn}-\xA1]|[^\\P{Mc}-\xA1]|[^\\P{Nd}-\xA1]|[^\\P{Pc}-\xA1]|[^\\P{Sk}-\xA1]|[^\\P{Me}-\xA1]|[^\\P{No}-\xA1]|[\u2032-\u2037\u2057]|[^\\P{So}\u2190-\u21FF])*(?:{.*})?)?",name:"meta.type.julia"}]}},scopeName:"source.julia",embeddedLangs:["cpp","python","javascript","r","sql"]});var r=[...n.default,...t.default,...a.default,...i.default,...o.default,p]}}]);
