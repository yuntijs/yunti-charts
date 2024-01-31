"use strict";(self.webpackChunk_yuntijs_charts=self.webpackChunk_yuntijs_charts||[]).push([[9304,1296,4432,4138,3279,6429,7153],{1296:function(i,n,e){e.r(n),e.d(n,{default:function(){return u}});var a=e(6362),t=e(59622),s=e(61447),l=e(97854);const r=Object.freeze({displayName:"GraphQL",fileTypes:["graphql","graphqls","gql","graphcool"],name:"graphql",patterns:[{include:"#graphql"}],repository:{graphql:{patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-fragment-definition"},{include:"#graphql-directive-definition"},{include:"#graphql-type-interface"},{include:"#graphql-enum"},{include:"#graphql-scalar"},{include:"#graphql-union"},{include:"#graphql-schema"},{include:"#graphql-operation-def"},{include:"#literal-quasi-embedded"}]},"graphql-ampersand":{captures:{1:{name:"keyword.operator.logical.graphql"}},match:"\\s*(&)"},"graphql-arguments":{begin:"\\s*(\\()",beginCaptures:{1:{name:"meta.brace.round.directive.graphql"}},end:"\\s*(\\))",endCaptures:{1:{name:"meta.brace.round.directive.graphql"}},name:"meta.arguments.graphql",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{begin:"\\s*([_A-Za-z][_0-9A-Za-z]*)(?:\\s*(:))",beginCaptures:{1:{name:"variable.parameter.graphql"},2:{name:"punctuation.colon.graphql"}},end:"(?=\\s*(?:(?:([_A-Za-z][_0-9A-Za-z]*)\\s*(:))|\\)))|\\s*(,)",endCaptures:{3:{name:"punctuation.comma.graphql"}},patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-directive"},{include:"#graphql-value"},{include:"#graphql-skip-newlines"}]},{include:"#literal-quasi-embedded"}]},"graphql-boolean-value":{captures:{1:{name:"constant.language.boolean.graphql"}},match:"\\s*\\b(true|false)\\b"},"graphql-colon":{captures:{1:{name:"punctuation.colon.graphql"}},match:"\\s*(:)"},"graphql-comma":{captures:{1:{name:"punctuation.comma.graphql"}},match:"\\s*(,)"},"graphql-comment":{patterns:[{captures:{1:{name:"punctuation.whitespace.comment.leading.graphql"}},comment:"need to prefix comment space with a scope else Atom's reflow cmd doesn't work",match:"(\\s*)(#).*",name:"comment.line.graphql.js"},{begin:'(""")',beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.graphql"}},end:'(""")',name:"comment.line.graphql.js"},{begin:'(")',beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.graphql"}},end:'(")',name:"comment.line.graphql.js"}]},"graphql-description-docstring":{begin:'"""',end:'"""',name:"comment.block.graphql"},"graphql-description-singleline":{match:'#(?=([^"]*"[^"]*")*[^"]*$).*$',name:"comment.line.number-sign.graphql"},"graphql-directive":{applyEndPatternLast:1,begin:"\\s*((@)\\s*([_A-Za-z][_0-9A-Za-z]*))",beginCaptures:{1:{name:"entity.name.function.directive.graphql"}},end:"(?=.)",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-arguments"},{include:"#literal-quasi-embedded"},{include:"#graphql-skip-newlines"}]},"graphql-directive-definition":{applyEndPatternLast:1,begin:"\\s*(\\bdirective\\b)\\s*(@[_A-Za-z][_0-9A-Za-z]*)",beginCaptures:{1:{name:"keyword.directive.graphql"},2:{name:"entity.name.function.directive.graphql"},3:{name:"keyword.on.graphql"},4:{name:"support.type.graphql"}},end:"(?=.)",patterns:[{include:"#graphql-variable-definitions"},{applyEndPatternLast:1,begin:"\\s*(\\bon\\b)\\s*([_A-Za-z]*)",beginCaptures:{1:{name:"keyword.on.graphql"},2:{name:"support.type.location.graphql"}},end:"(?=.)",patterns:[{include:"#graphql-skip-newlines"},{include:"#graphql-comment"},{include:"#literal-quasi-embedded"},{captures:{2:{name:"support.type.location.graphql"}},match:"\\s*(\\|)\\s*([_A-Za-z]*)"}]},{include:"#graphql-skip-newlines"},{include:"#graphql-comment"},{include:"#literal-quasi-embedded"}]},"graphql-enum":{begin:"\\s*+\\b(enum)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)",beginCaptures:{1:{name:"keyword.enum.graphql"},2:{name:"support.type.enum.graphql"}},end:"(?<=})",name:"meta.enum.graphql",patterns:[{begin:"\\s*({)",beginCaptures:{1:{name:"punctuation.operation.graphql"}},end:"\\s*(})",endCaptures:{1:{name:"punctuation.operation.graphql"}},name:"meta.type.object.graphql",patterns:[{include:"#graphql-object-type"},{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-directive"},{include:"#graphql-enum-value"},{include:"#literal-quasi-embedded"}]},{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-directive"}]},"graphql-enum-value":{match:"\\s*(?!=\\b(true|false|null)\\b)([_A-Za-z][_0-9A-Za-z]*)",name:"constant.character.enum.graphql"},"graphql-field":{patterns:[{captures:{1:{name:"string.unquoted.alias.graphql"},2:{name:"punctuation.colon.graphql"}},match:"\\s*([_A-Za-z][_0-9A-Za-z]*)\\s*(:)"},{captures:{1:{name:"variable.graphql"}},match:"\\s*([_A-Za-z][_0-9A-Za-z]*)"},{include:"#graphql-arguments"},{include:"#graphql-directive"},{include:"#graphql-selection-set"},{include:"#literal-quasi-embedded"},{include:"#graphql-skip-newlines"}]},"graphql-float-value":{captures:{1:{name:"constant.numeric.float.graphql"}},match:"\\s*(-?(0|[1-9][0-9]*)(\\.[0-9]+)?((e|E)(\\+|-)?[0-9]+)?)"},"graphql-fragment-definition":{begin:"\\s*(?:(\\bfragment\\b)\\s*([_A-Za-z][_0-9A-Za-z]*)?\\s*(?:(\\bon\\b)\\s*([_A-Za-z][_0-9A-Za-z]*)))",captures:{1:{name:"keyword.fragment.graphql"},2:{name:"entity.name.fragment.graphql"},3:{name:"keyword.on.graphql"},4:{name:"support.type.graphql"}},end:"(?<=})",name:"meta.fragment.graphql",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-selection-set"},{include:"#graphql-directive"},{include:"#graphql-skip-newlines"},{include:"#literal-quasi-embedded"}]},"graphql-fragment-spread":{applyEndPatternLast:1,begin:"\\s*(\\.\\.\\.)\\s*(?!\\bon\\b)([_A-Za-z][_0-9A-Za-z]*)",captures:{1:{name:"keyword.operator.spread.graphql"},2:{name:"variable.fragment.graphql"}},end:"(?=.)",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-selection-set"},{include:"#graphql-directive"},{include:"#literal-quasi-embedded"},{include:"#graphql-skip-newlines"}]},"graphql-ignore-spaces":{match:"\\s*"},"graphql-inline-fragment":{applyEndPatternLast:1,begin:"\\s*(\\.\\.\\.)\\s*(?:(\\bon\\b)\\s*([_A-Za-z][_0-9A-Za-z]*))?",captures:{1:{name:"keyword.operator.spread.graphql"},2:{name:"keyword.on.graphql"},3:{name:"support.type.graphql"}},end:"(?=.)",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-selection-set"},{include:"#graphql-directive"},{include:"#graphql-skip-newlines"},{include:"#literal-quasi-embedded"}]},"graphql-input-types":{patterns:[{include:"#graphql-scalar-type"},{captures:{1:{name:"support.type.graphql"},2:{name:"keyword.operator.nulltype.graphql"}},match:"\\s*([_A-Za-z][_0-9A-Za-z]*)(?:\\s*(!))?"},{begin:"\\s*(\\[)",captures:{1:{name:"meta.brace.square.graphql"},2:{name:"keyword.operator.nulltype.graphql"}},end:"\\s*(\\])(?:\\s*(!))?",name:"meta.type.list.graphql",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-input-types"},{include:"#graphql-comma"},{include:"#literal-quasi-embedded"}]}]},"graphql-list-value":{patterns:[{begin:"\\s*+(\\[)",beginCaptures:{1:{name:"meta.brace.square.graphql"}},end:"\\s*(\\])",endCaptures:{1:{name:"meta.brace.square.graphql"}},name:"meta.listvalues.graphql",patterns:[{include:"#graphql-value"}]}]},"graphql-name":{captures:{1:{name:"entity.name.function.graphql"}},match:"\\s*([_A-Za-z][_0-9A-Za-z]*)"},"graphql-null-value":{captures:{1:{name:"constant.language.null.graphql"}},match:"\\s*\\b(null)\\b"},"graphql-object-field":{captures:{1:{name:"constant.object.key.graphql"},2:{name:"string.unquoted.graphql"},3:{name:"punctuation.graphql"}},match:"\\s*(([_A-Za-z][_0-9A-Za-z]*))\\s*(:)"},"graphql-object-value":{patterns:[{begin:"\\s*+({)",beginCaptures:{1:{name:"meta.brace.curly.graphql"}},end:"\\s*(})",endCaptures:{1:{name:"meta.brace.curly.graphql"}},name:"meta.objectvalues.graphql",patterns:[{include:"#graphql-object-field"},{include:"#graphql-value"}]}]},"graphql-operation-def":{patterns:[{include:"#graphql-query-mutation"},{include:"#graphql-name"},{include:"#graphql-variable-definitions"},{include:"#graphql-directive"},{include:"#graphql-selection-set"}]},"graphql-query-mutation":{captures:{1:{name:"keyword.operation.graphql"}},match:"\\s*\\b(query|mutation)\\b"},"graphql-scalar":{captures:{1:{name:"keyword.scalar.graphql"},2:{name:"entity.scalar.graphql"}},match:"\\s*\\b(scalar)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)"},"graphql-scalar-type":{captures:{1:{name:"support.type.builtin.graphql"},2:{name:"keyword.operator.nulltype.graphql"}},match:"\\s*\\b(Int|Float|String|Boolean|ID)\\b(?:\\s*(!))?"},"graphql-schema":{begin:"\\s*\\b(schema)\\b",beginCaptures:{1:{name:"keyword.schema.graphql"}},end:"(?<=})",patterns:[{begin:"\\s*({)",beginCaptures:{1:{name:"punctuation.operation.graphql"}},end:"\\s*(})",endCaptures:{1:{name:"punctuation.operation.graphql"}},patterns:[{begin:"\\s*([_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)",beginCaptures:{1:{name:"variable.arguments.graphql"}},end:"(?=\\s*(([_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(})))|\\s*(,)",endCaptures:{5:{name:"punctuation.comma.graphql"}},patterns:[{captures:{1:{name:"support.type.graphql"}},match:"\\s*([_A-Za-z][_0-9A-Za-z]*)"},{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-colon"},{include:"#graphql-skip-newlines"}]},{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-skip-newlines"}]},{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-directive"},{include:"#graphql-skip-newlines"}]},"graphql-selection-set":{begin:"\\s*({)",beginCaptures:{1:{name:"punctuation.operation.graphql"}},end:"\\s*(})",endCaptures:{1:{name:"punctuation.operation.graphql"}},name:"meta.selectionset.graphql",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-field"},{include:"#graphql-fragment-spread"},{include:"#graphql-inline-fragment"},{include:"#graphql-comma"},{include:"#native-interpolation"},{include:"#literal-quasi-embedded"}]},"graphql-skip-newlines":{match:`\\s*
`},"graphql-string-content":{patterns:[{match:`\\\\[/'"\\\\nrtbf]`,name:"constant.character.escape.graphql"},{match:"\\\\u([0-9a-fA-F]{4})",name:"constant.character.escape.graphql"}]},"graphql-string-value":{begin:'\\s*+(("))',beginCaptures:{1:{name:"string.quoted.double.graphql"},2:{name:"punctuation.definition.string.begin.graphql"}},contentName:"string.quoted.double.graphql",end:`\\s*+(?:(("))|(
))`,endCaptures:{1:{name:"string.quoted.double.graphql"},2:{name:"punctuation.definition.string.end.graphql"},3:{name:"invalid.illegal.newline.graphql"}},patterns:[{include:"#graphql-string-content"},{include:"#literal-quasi-embedded"}]},"graphql-type-definition":{begin:"\\s*([_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)",beginCaptures:{1:{name:"variable.graphql"}},comment:"key (optionalArgs): Type",end:"(?=\\s*(([_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(})))|\\s*(,)",endCaptures:{5:{name:"punctuation.comma.graphql"}},patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-directive"},{include:"#graphql-variable-definitions"},{include:"#graphql-type-object"},{include:"#graphql-colon"},{include:"#graphql-input-types"},{include:"#literal-quasi-embedded"}]},"graphql-type-interface":{applyEndPatternLast:1,begin:"\\s*\\b(?:(extends?)?\\b\\s*\\b(type)|(interface)|(input))\\b\\s*([_A-Za-z][_0-9A-Za-z]*)?",captures:{1:{name:"keyword.type.graphql"},2:{name:"keyword.type.graphql"},3:{name:"keyword.interface.graphql"},4:{name:"keyword.input.graphql"},5:{name:"support.type.graphql"}},end:"(?=.)",name:"meta.type.interface.graphql",patterns:[{begin:"\\s*\\b(implements)\\b\\s*",beginCaptures:{1:{name:"keyword.implements.graphql"}},end:"\\s*(?={)",patterns:[{captures:{1:{name:"support.type.graphql"}},match:"\\s*([_A-Za-z][_0-9A-Za-z]*)"},{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-directive"},{include:"#graphql-ampersand"},{include:"#graphql-comma"}]},{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-directive"},{include:"#graphql-type-object"},{include:"#literal-quasi-embedded"},{include:"#graphql-ignore-spaces"}]},"graphql-type-object":{begin:"\\s*({)",beginCaptures:{1:{name:"punctuation.operation.graphql"}},end:"\\s*(})",endCaptures:{1:{name:"punctuation.operation.graphql"}},name:"meta.type.object.graphql",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-object-type"},{include:"#graphql-type-definition"},{include:"#literal-quasi-embedded"}]},"graphql-union":{applyEndPatternLast:1,begin:"\\s*\\b(union)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)",captures:{1:{name:"keyword.union.graphql"},2:{name:"support.type.graphql"}},end:"(?=.)",patterns:[{applyEndPatternLast:1,begin:"\\s*(=)\\s*([_A-Za-z][_0-9A-Za-z]*)",captures:{1:{name:"punctuation.assignment.graphql"},2:{name:"support.type.graphql"}},end:"(?=.)",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-skip-newlines"},{include:"#literal-quasi-embedded"},{captures:{1:{name:"punctuation.or.graphql"},2:{name:"support.type.graphql"}},match:"\\s*(\\|)\\s*([_A-Za-z][_0-9A-Za-z]*)"}]},{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-skip-newlines"},{include:"#literal-quasi-embedded"}]},"graphql-union-mark":{captures:{1:{name:"punctuation.union.graphql"}},match:"\\s*(\\|)"},"graphql-value":{patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-variable-name"},{include:"#graphql-float-value"},{include:"#graphql-string-value"},{include:"#graphql-boolean-value"},{include:"#graphql-null-value"},{include:"#graphql-enum-value"},{include:"#graphql-list-value"},{include:"#graphql-object-value"},{include:"#literal-quasi-embedded"}]},"graphql-variable-assignment":{applyEndPatternLast:1,begin:"\\s(=)",beginCaptures:{1:{name:"punctuation.assignment.graphql"}},end:`(?=[
,)])`,patterns:[{include:"#graphql-value"}]},"graphql-variable-definition":{begin:"\\s*(\\$?[_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)",beginCaptures:{1:{name:"variable.parameter.graphql"}},comment:"variable: type = value,.... which may be a list",end:"(?=\\s*((\\$?[_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(}|\\))))|\\s*(,)",endCaptures:{5:{name:"punctuation.comma.graphql"}},name:"meta.variables.graphql",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-directive"},{include:"#graphql-colon"},{include:"#graphql-input-types"},{include:"#graphql-variable-assignment"},{include:"#literal-quasi-embedded"},{include:"#graphql-skip-newlines"}]},"graphql-variable-definitions":{begin:"\\s*(\\()",captures:{1:{name:"meta.brace.round.graphql"}},end:"\\s*(\\))",patterns:[{include:"#graphql-comment"},{include:"#graphql-description-docstring"},{include:"#graphql-description-singleline"},{include:"#graphql-variable-definition"},{include:"#literal-quasi-embedded"}]},"graphql-variable-name":{captures:{1:{name:"variable.graphql"}},match:"\\s*(\\$[_A-Za-z][_0-9A-Za-z]*)"},"native-interpolation":{begin:"\\s*(\\${)",beginCaptures:{1:{name:"keyword.other.substitution.begin"}},end:"(})",endCaptures:{1:{name:"keyword.other.substitution.end"}},name:"native.interpolation",patterns:[{include:"source.js"},{include:"source.ts"},{include:"source.js.jsx"},{include:"source.tsx"}]}},scopeName:"source.graphql",embeddedLangs:["javascript","typescript","jsx","tsx"],aliases:["gql"]});var u=[...a.default,...t.default,...s.default,...l.default,r]},24432:function(i,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"JSON",name:"json",patterns:[{include:"#value"}],repository:{array:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.json"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.json"}},name:"meta.structure.array.json",patterns:[{include:"#value"},{match:",",name:"punctuation.separator.array.json"},{match:"[^\\s\\]]",name:"invalid.illegal.expected-array-separator.json"}]},comments:{patterns:[{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.documentation.json"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.json"},{captures:{1:{name:"punctuation.definition.comment.json"}},match:"(//).*$\\n?",name:"comment.line.double-slash.js"}]},constant:{match:"\\b(?:true|false|null)\\b",name:"constant.language.json"},number:{match:`(?x)
-?
(?:
0
|
[1-9]
\\d*
)
(?:
(?:
\\.
\\d+
)?
(?:
[eE]
[+-]?
\\d+
)?
)?`,name:"constant.numeric.json"},object:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dictionary.begin.json"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dictionary.end.json"}},name:"meta.structure.dictionary.json",patterns:[{comment:"the JSON object key",include:"#objectkey"},{include:"#comments"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.dictionary.key-value.json"}},end:"(,)|(?=\\})",endCaptures:{1:{name:"punctuation.separator.dictionary.pair.json"}},name:"meta.structure.dictionary.value.json",patterns:[{comment:"the JSON object value",include:"#value"},{match:"[^\\s,]",name:"invalid.illegal.expected-dictionary-separator.json"}]},{match:"[^\\s\\}]",name:"invalid.illegal.expected-dictionary-separator.json"}]},objectkey:{begin:'"',beginCaptures:{0:{name:"punctuation.support.type.property-name.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.support.type.property-name.end.json"}},name:"string.json support.type.property-name.json",patterns:[{include:"#stringcontent"}]},string:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.json"}},name:"string.quoted.double.json",patterns:[{include:"#stringcontent"}]},stringcontent:{patterns:[{match:`(?x)
\\\\
(?:
["\\\\/bfnrt]
|
u
[0-9a-fA-F]{4})`,name:"constant.character.escape.json"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json"}]},value:{patterns:[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"}]}},scopeName:"source.json"})]},94138:function(i,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"JSON5",fileTypes:["json5"],name:"json5",patterns:[{include:"#comments"},{include:"#value"}],repository:{array:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.json5"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.json5"}},name:"meta.structure.array.json5",patterns:[{include:"#comments"},{include:"#value"},{match:",",name:"punctuation.separator.array.json5"},{match:"[^\\s\\]]",name:"invalid.illegal.expected-array-separator.json5"}]},comments:{patterns:[{match:"/{2}.*",name:"comment.single.json5"},{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.json5"}},end:"\\*/",name:"comment.block.documentation.json5"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.json5"}},end:"\\*/",name:"comment.block.json5"}]},constant:{match:"\\b(?:true|false|null|Infinity|NaN)\\b",name:"constant.language.json5"},infinity:{match:"(-)*\\b(?:Infinity|NaN)\\b",name:"constant.language.json5"},key:{name:"string.key.json5",patterns:[{include:"#stringSingle"},{include:"#stringDouble"},{match:"[a-zA-Z0-9_-]",name:"string.key.json5"}]},number:{patterns:[{comment:"handles hexadecimal numbers",match:"(0x)[0-9a-fA-f]*",name:"constant.hex.numeric.json5"},{comment:"handles integer and decimal numbers",match:"[+-.]?(?=[1-9]|0(?!\\d))\\d+(\\.\\d+)?([eE][+-]?\\d+)?",name:"constant.dec.numeric.json5"}]},object:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dictionary.begin.json5"}},comment:"a json5 object",end:"\\}",endCaptures:{0:{name:"punctuation.definition.dictionary.end.json5"}},name:"meta.structure.dictionary.json5",patterns:[{include:"#comments"},{comment:"the json5 object key",include:"#key"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.dictionary.key-value.json5"}},end:"(,)|(?=\\})",endCaptures:{1:{name:"punctuation.separator.dictionary.pair.json5"}},name:"meta.structure.dictionary.value.json5",patterns:[{comment:"the json5 object value",include:"#value"},{match:"[^\\s,]",name:"invalid.illegal.expected-dictionary-separator.json5"}]},{match:"[^\\s\\}]",name:"invalid.illegal.expected-dictionary-separator.json5"}]},stringDouble:{begin:'["]',beginCaptures:{0:{name:"punctuation.definition.string.begin.json5"}},end:'["]',endCaptures:{0:{name:"punctuation.definition.string.end.json5"}},name:"string.quoted.json5",patterns:[{match:`(?x:
\\\\
(?:
["\\\\/bfnrt]
|
u
[0-9a-fA-F]{4}
)
)`,name:"constant.character.escape.json5"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json5"}]},stringSingle:{begin:"[']",beginCaptures:{0:{name:"punctuation.definition.string.begin.json5"}},end:"[']",endCaptures:{0:{name:"punctuation.definition.string.end.json5"}},name:"string.quoted.json5",patterns:[{match:`(?x:
\\\\
(?:
["\\\\/bfnrt]
|
u
[0-9a-fA-F]{4}
)
)`,name:"constant.character.escape.json5"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json5"}]},value:{comment:"the 'value' diagram at http://json.org",patterns:[{include:"#constant"},{include:"#infinity"},{include:"#number"},{include:"#stringSingle"},{include:"#stringDouble"},{include:"#array"},{include:"#object"}]}},scopeName:"source.json5"})]},43279:function(i,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"JSON with Comments",name:"jsonc",patterns:[{include:"#value"}],repository:{array:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.json.comments"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.json.comments"}},name:"meta.structure.array.json.comments",patterns:[{include:"#value"},{match:",",name:"punctuation.separator.array.json.comments"},{match:"[^\\s\\]]",name:"invalid.illegal.expected-array-separator.json.comments"}]},comments:{patterns:[{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.json.comments"}},end:"\\*/",name:"comment.block.documentation.json.comments"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.json.comments"}},end:"\\*/",name:"comment.block.json.comments"},{captures:{1:{name:"punctuation.definition.comment.json.comments"}},match:"(//).*$\\n?",name:"comment.line.double-slash.js"}]},constant:{match:"\\b(?:true|false|null)\\b",name:"constant.language.json.comments"},number:{match:`(?x)
-?
(?:
0
|
[1-9]
\\d*
)
(?:
(?:
\\.
\\d+
)?
(?:
[eE]
[+-]?
\\d+
)?
)?`,name:"constant.numeric.json.comments"},object:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dictionary.begin.json.comments"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dictionary.end.json.comments"}},name:"meta.structure.dictionary.json.comments",patterns:[{comment:"the JSON object key",include:"#objectkey"},{include:"#comments"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.dictionary.key-value.json.comments"}},end:"(,)|(?=\\})",endCaptures:{1:{name:"punctuation.separator.dictionary.pair.json.comments"}},name:"meta.structure.dictionary.value.json.comments",patterns:[{comment:"the JSON object value",include:"#value"},{match:"[^\\s,]",name:"invalid.illegal.expected-dictionary-separator.json.comments"}]},{match:"[^\\s\\}]",name:"invalid.illegal.expected-dictionary-separator.json.comments"}]},objectkey:{begin:'"',beginCaptures:{0:{name:"punctuation.support.type.property-name.begin.json.comments"}},end:'"',endCaptures:{0:{name:"punctuation.support.type.property-name.end.json.comments"}},name:"string.json.comments support.type.property-name.json.comments",patterns:[{include:"#stringcontent"}]},string:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.json.comments"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.json.comments"}},name:"string.quoted.double.json.comments",patterns:[{include:"#stringcontent"}]},stringcontent:{patterns:[{match:`(?x)
\\\\
(?:
["\\\\/bfnrt]
|
u
[0-9a-fA-F]{4})`,name:"constant.character.escape.json.comments"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json.comments"}]},value:{patterns:[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"}]}},scopeName:"source.json.comments"})]},26429:function(i,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"TOML",fileTypes:["toml"],name:"toml",patterns:[{include:"#comments"},{include:"#groups"},{include:"#key_pair"},{include:"#invalid"}],repository:{comments:{begin:"(^[ \\t]+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.toml"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.toml"}},end:"\\n",name:"comment.line.number-sign.toml"}]},groups:{patterns:[{captures:{1:{name:"punctuation.definition.section.begin.toml"},2:{patterns:[{match:"[^\\s.]+",name:"entity.name.section.toml"}]},3:{name:"punctuation.definition.section.begin.toml"}},match:"^\\s*(\\[)([^\\[\\]]*)(\\])",name:"meta.group.toml"},{captures:{1:{name:"punctuation.definition.section.begin.toml"},2:{patterns:[{match:"[^\\s.]+",name:"entity.name.section.toml"}]},3:{name:"punctuation.definition.section.begin.toml"}},match:"^\\s*(\\[\\[)([^\\[\\]]*)(\\]\\])",name:"meta.group.double.toml"}]},invalid:{match:"\\S+(\\s*(?=\\S))?",name:"invalid.illegal.not-allowed-here.toml"},key_pair:{patterns:[{begin:"([A-Za-z0-9_-]+)\\s*(=)\\s*",captures:{1:{name:"variable.other.key.toml"},2:{name:"punctuation.separator.key-value.toml"}},end:"(?<=\\S)(?<!=)|$",patterns:[{include:"#primatives"}]},{begin:'((")(.*?)("))\\s*(=)\\s*',captures:{1:{name:"variable.other.key.toml"},2:{name:"punctuation.definition.variable.begin.toml"},3:{patterns:[{match:'\\\\([btnfr"\\\\]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.toml"},{match:'\\\\[^btnfr"\\\\]',name:"invalid.illegal.escape.toml"},{match:'"',name:"invalid.illegal.not-allowed-here.toml"}]},4:{name:"punctuation.definition.variable.end.toml"},5:{name:"punctuation.separator.key-value.toml"}},end:"(?<=\\S)(?<!=)|$",patterns:[{include:"#primatives"}]},{begin:"((')([^']*)('))\\s*(=)\\s*",captures:{1:{name:"variable.other.key.toml"},2:{name:"punctuation.definition.variable.begin.toml"},4:{name:"punctuation.definition.variable.end.toml"},5:{name:"punctuation.separator.key-value.toml"}},end:"(?<=\\S)(?<!=)|$",patterns:[{include:"#primatives"}]},{begin:`(?x)
(
(
(?:
[A-Za-z0-9_-]+
| "  (?:[^"\\\\]|\\\\.)* "
| ' [^']*          '
)
(?:
\\s* \\. \\s*
| (?= \\s* =)
)
){2,}
)
\\s*(=)\\s*
`,captures:{1:{name:"variable.other.key.toml",patterns:[{match:"\\.",name:"punctuation.separator.variable.toml"},{captures:{1:{name:"punctuation.definition.variable.begin.toml"},2:{patterns:[{match:'\\\\([btnfr"\\\\]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.toml"},{match:'\\\\[^btnfr"\\\\]',name:"invalid.illegal.escape.toml"}]},3:{name:"punctuation.definition.variable.end.toml"}},match:'(")((?:[^"\\\\]|\\\\.)*)(")'},{captures:{1:{name:"punctuation.definition.variable.begin.toml"},2:{name:"punctuation.definition.variable.end.toml"}},match:"(')[^']*(')"}]},3:{name:"punctuation.separator.key-value.toml"}},comment:"Dotted key",end:"(?<=\\S)(?<!=)|$",patterns:[{include:"#primatives"}]}]},primatives:{patterns:[{begin:'\\G"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.toml"}},end:'"{3,5}',endCaptures:{0:{name:"punctuation.definition.string.end.toml"}},name:"string.quoted.triple.double.toml",patterns:[{match:'\\\\([btnfr"\\\\]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.toml"},{match:'\\\\[^btnfr"\\\\\\n]',name:"invalid.illegal.escape.toml"}]},{begin:'\\G"',beginCaptures:{0:{name:"punctuation.definition.string.begin.toml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.toml"}},name:"string.quoted.double.toml",patterns:[{match:'\\\\([btnfr"\\\\]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.toml"},{match:'\\\\[^btnfr"\\\\]',name:"invalid.illegal.escape.toml"}]},{begin:"\\G'''",beginCaptures:{0:{name:"punctuation.definition.string.begin.toml"}},end:"'{3,5}",endCaptures:{0:{name:"punctuation.definition.string.end.toml"}},name:"string.quoted.triple.single.toml"},{begin:"\\G'",beginCaptures:{0:{name:"punctuation.definition.string.begin.toml"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.toml"}},name:"string.quoted.single.toml"},{match:`\\G(?x)
[0-9]{4}
-
(0[1-9]|1[012])
-
(?!00|3[2-9])[0-3][0-9]
(
[Tt ]
(?!2[5-9])[0-2][0-9]
:
[0-5][0-9]
:
(?!6[1-9])[0-6][0-9]
(\\.[0-9]+)?
(
Z
| [+-](?!2[5-9])[0-2][0-9]:[0-5][0-9]
)?
)?
`,name:"constant.other.date.toml"},{match:`\\G(?x)
(?!2[5-9])[0-2][0-9]
:
[0-5][0-9]
:
(?!6[1-9])[0-6][0-9]
(\\.[0-9]+)?
`,name:"constant.other.time.toml"},{match:"\\G(true|false)",name:"constant.language.boolean.toml"},{match:"\\G0x\\h(\\h|_\\h)*",name:"constant.numeric.hex.toml"},{match:"\\G0o[0-7]([0-7]|_[0-7])*",name:"constant.numeric.octal.toml"},{match:"\\G0b[01]([01]|_[01])*",name:"constant.numeric.binary.toml"},{match:"\\G[+-]?(inf|nan)",name:"constant.numeric.toml"},{match:`(?x)
\\G
(
[+-]?
(
0
| ([1-9](([0-9]|_[0-9])+)?)
)
)
(?=[.eE])
(
\\.
([0-9](([0-9]|_[0-9])+)?)
)?
(
[eE]
([+-]?[0-9](([0-9]|_[0-9])+)?)
)?
`,name:"constant.numeric.float.toml"},{match:`(?x)
\\G
(
[+-]?
(
0
| ([1-9](([0-9]|_[0-9])+)?)
)
)
`,name:"constant.numeric.integer.toml"},{begin:"\\G\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.toml"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.toml"}},name:"meta.array.toml",patterns:[{begin:`(?=["'']|[+-]?[0-9]|[+-]?(inf|nan)|true|false|\\[|\\{)`,end:",|(?=])",endCaptures:{0:{name:"punctuation.separator.array.toml"}},patterns:[{include:"#primatives"},{include:"#comments"},{include:"#invalid"}]},{include:"#comments"},{include:"#invalid"}]},{begin:"\\G\\{",beginCaptures:{0:{name:"punctuation.definition.inline-table.begin.toml"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.inline-table.end.toml"}},name:"meta.inline-table.toml",patterns:[{begin:"(?=\\S)",end:",|(?=})",endCaptures:{0:{name:"punctuation.separator.inline-table.toml"}},patterns:[{include:"#key_pair"}]},{include:"#comments"}]}]}},scopeName:"source.toml"})]},99304:function(i,n,e){e.r(n),e.d(n,{default:function(){return z}});var a=e(27181),t=e(65836),s=e(85079),l=e(92479),r=e(19911),u=e(39760),c=e(81719),o=e(55094),m=e(6362),p=e(59622),d=e(61447),g=e(97854),b=e(24432),h=e(43279),y=e(94138),v=e(57153),f=e(26429),q=e(1296),j=[Object.freeze({fileTypes:[],injectTo:["text.html.markdown"],injectionSelector:"L:text.html.markdown",name:"markdown-vue",patterns:[{include:"#vue-code-block"}],repository:{"vue-code-block":{begin:"(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(vue)((\\s+|:|,|\\{|\\?)[^`~]*)?$)",beginCaptures:{3:{name:"punctuation.definition.markdown"},4:{name:"fenced_code.block.language.markdown"},5:{name:"fenced_code.block.language.attributes.markdown"}},end:"(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",endCaptures:{3:{name:"punctuation.definition.markdown"}},name:"markup.fenced_code.block.markdown",patterns:[{include:"source.vue"}]}},scopeName:"markdown.vue.codeblock"})],C=[Object.freeze({fileTypes:[],injectTo:["source.vue","text.html.markdown","text.html.derivative","text.pug"],injectionSelector:"L:meta.tag -meta.attribute -entity.name.tag.pug -attribute_value -source.tsx -source.js.jsx, L:meta.element -meta.attribute",name:"vue-directives",patterns:[{include:"source.vue#vue-directives"}],scopeName:"vue.directives"})],_=[Object.freeze({fileTypes:[],injectTo:["source.vue","text.html.markdown","text.html.derivative","text.pug"],injectionSelector:"L:text.pug -comment -string.comment, L:text.html.derivative -comment.block, L:text.html.markdown -comment.block",name:"vue-interpolations",patterns:[{include:"source.vue#vue-interpolations"}],scopeName:"vue.interpolations"})];const A=Object.freeze({fileTypes:[],injectTo:["source.vue"],injectionSelector:"L:source.css -comment, L:source.postcss -comment, L:source.sass -comment, L:source.stylus -comment",name:"vue-sfc-style-variable-injection",patterns:[{include:"#vue-sfc-style-variable-injection"}],repository:{"vue-sfc-style-variable-injection":{begin:"\\b(v-bind)\\s*\\(",beginCaptures:{1:{name:"entity.name.function"}},end:"\\)",name:"vue.sfc.style.variable.injection.v-bind",patterns:[{begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.tag.end.html"}},name:"source.ts.embedded.html.vue",patterns:[{include:"source.js"}]},{include:"source.js"}]}},scopeName:"vue.sfc.style.variable.injection",embeddedLangs:["javascript"]});var k=[...m.default,A];const w=Object.freeze({displayName:"Vue",name:"vue",patterns:[{include:"text.html.basic#comment"},{include:"#self-closing-tag"},{begin:"(<)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"}},end:"(>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},patterns:[{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)md\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.html.markdown",patterns:[{include:"text.html.markdown"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)html\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.html.derivative",patterns:[{include:"#html-stuff"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)pug\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text.pug",patterns:[{include:"text.pug"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)stylus\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.stylus",patterns:[{include:"source.stylus"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)postcss\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.postcss",patterns:[{include:"source.postcss"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)sass\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.sass",patterns:[{include:"source.sass"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)css\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css",patterns:[{include:"source.css"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)scss\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css.scss",patterns:[{include:"source.css.scss"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)less\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.css.less",patterns:[{include:"source.css.less"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)js\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.js",patterns:[{include:"source.js"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)ts\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.ts",patterns:[{include:"source.ts"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)jsx\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.js.jsx",patterns:[{include:"source.js.jsx"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)tsx\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.tsx",patterns:[{include:"source.tsx"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)json\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json",patterns:[{include:"source.json"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)jsonc\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json.comments",patterns:[{include:"source.json.comments"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)json5\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.json5",patterns:[{include:"source.json5"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)yaml\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.yaml",patterns:[{include:"source.yaml"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)toml\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.toml",patterns:[{include:"source.toml"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)(gql|graphql)\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.graphql",patterns:[{include:"source.graphql"}]}]},{begin:`([a-zA-Z0-9:-]+)\\b(?=[^>]*\\blang\\s*=\\s*(['"]?)vue\\b\\2)`,beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"source.vue",patterns:[{include:"source.vue"}]}]},{begin:"(template)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/template\\b)",name:"text.html.derivative",patterns:[{include:"#html-stuff"}]}]},{begin:"(script)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/script\\b)",name:"source.js",patterns:[{include:"source.js"}]}]},{begin:"(style)\\b",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/style\\b)",name:"source.css",patterns:[{include:"source.css"}]}]},{begin:"([a-zA-Z0-9:-]+)",beginCaptures:{1:{name:"entity.name.tag.$1.html.vue"}},end:"(</)(\\1)\\s*(?=>)",endCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},patterns:[{include:"#tag-stuff"},{begin:"(?<=>)",end:"(?=<\\/)",name:"text"}]}]}],repository:{"html-stuff":{patterns:[{include:"#template-tag"},{include:"text.html.derivative"},{include:"text.html.basic"}]},"self-closing-tag":{begin:"(<)([a-zA-Z0-9:-]+)(?=([^>]+/>))",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},end:"(/>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"self-closing-tag",patterns:[{include:"#tag-stuff"}]},"tag-stuff":{begin:"\\G",end:"(?=/>)|(>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.tag-stuff",patterns:[{include:"#vue-directives"},{include:"text.html.basic#attribute"}]},"template-tag":{patterns:[{include:"#template-tag-1"},{include:"#template-tag-2"}]},"template-tag-1":{begin:"(<)(template)\\b(>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"},3:{name:"punctuation.definition.tag.end.html.vue"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.template-tag.start",patterns:[{begin:"\\G",end:"(?=/>)|((</)(template)\\b)",endCaptures:{2:{name:"punctuation.definition.tag.begin.html.vue"},3:{name:"entity.name.tag.$3.html.vue"}},name:"meta.template-tag.end",patterns:[{include:"#html-stuff"}]}]},"template-tag-2":{begin:"(<)(template)\\b",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html.vue"},2:{name:"entity.name.tag.$2.html.vue"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html.vue"}},name:"meta.template-tag.start",patterns:[{begin:"\\G",end:"(?=/>)|((</)(template)\\b)",endCaptures:{2:{name:"punctuation.definition.tag.begin.html.vue"},3:{name:"entity.name.tag.$3.html.vue"}},name:"meta.template-tag.end",patterns:[{include:"#tag-stuff"},{include:"#html-stuff"}]}]},"vue-directives":{patterns:[{include:"#vue-directives-control"},{include:"#vue-directives-style-attr"},{include:"#vue-directives-original"},{include:"#vue-directives-generic-attr"}]},"vue-directives-control":{begin:"(v-for)|(v-if|v-else-if|v-else)",captures:{1:{name:"keyword.control.loop.vue"},2:{name:"keyword.control.conditional.vue"}},end:"(?=\\s*+[^=\\s])",name:"meta.attribute.directive.control.vue",patterns:[{include:"#vue-directives-expression"}]},"vue-directives-expression":{patterns:[{begin:"(=)\\s*('|\"|`)",beginCaptures:{1:{name:"punctuation.separator.key-value.html.vue"},2:{name:"punctuation.definition.string.begin.html.vue"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},patterns:[{begin:"(?<=('|\"|`))",end:"(?=\\1)",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]},{begin:"(=)\\s*(?=[^'\"`])",beginCaptures:{1:{name:"punctuation.separator.key-value.html.vue"}},end:"(?=(\\s|>|\\/>))",patterns:[{begin:"(?=[^'\"`])",end:"(?=(\\s|>|\\/>))",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]}]},"vue-directives-generic-attr":{begin:"\\b(generic)\\s*(=)",captures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.separator.key-value.html.vue"}},end:`(?<='|")`,name:"meta.attribute.generic.vue",patterns:[{begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.html.vue"}},comment:"https://github.com/microsoft/vscode/blob/fd4346210f59135fad81a8b8c4cea7bf5a9ca6b4/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json#L4002-L4020",end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"meta.type.parameters.vue",patterns:[{include:"source.ts#comment"},{match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",name:"storage.modifier.ts"},{include:"source.ts#type"},{include:"source.ts#punctuation-comma"},{match:"(=)(?!>)",name:"keyword.operator.assignment.ts"}]}]},"vue-directives-original":{begin:"(?:\\b(v-)|([:\\.])|(@)|(#))(\\[?)([\\w\\-]*)(\\]?)(?:\\.([\\w\\-]*))*",beginCaptures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.attribute-shorthand.bind.html.vue"},3:{name:"punctuation.attribute-shorthand.event.html.vue"},4:{name:"punctuation.attribute-shorthand.slot.html.vue"},5:{name:"punctuation.separator.key-value.html.vue"},6:{name:"entity.other.attribute-name.html.vue"},7:{name:"punctuation.separator.key-value.html.vue"},8:{name:"entity.other.attribute-name.html.vue"},9:{name:"punctuation.separator.key-value.html.vue"}},end:"(?=\\s*+[^=\\s])",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"meta.attribute.directive.vue",patterns:[{include:"#vue-directives-expression"}]},"vue-directives-style-attr":{begin:"\\b(style)\\s*(=)",captures:{1:{name:"entity.other.attribute-name.html.vue"},2:{name:"punctuation.separator.key-value.html.vue"}},end:`(?<='|")`,name:"meta.attribute.style.vue",patterns:[{begin:`('|")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.html.vue"}},comment:"Copy from source.css#rule-list-innards",end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.html.vue"}},name:"source.css.embedded.html.vue",patterns:[{include:"source.css#comment-block"},{include:"source.css#escapes"},{include:"source.css#font-features"},{match:`(?x) (?<![\\w-])
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.css"},{begin:"(?<![-a-zA-Z])(?=[-a-zA-Z])",end:"$|(?![-a-zA-Z])",name:"meta.property-name.css",patterns:[{include:"source.css#property-names"}]},{begin:"(:)\\s*",beginCaptures:{1:{name:"punctuation.separator.key-value.css"}},comment:"Modify end to fix #199. TODO: handle ' character.",contentName:"meta.property-value.css",end:`\\s*(;)|\\s*(?='|")`,endCaptures:{1:{name:"punctuation.terminator.rule.css"}},patterns:[{include:"source.css#comment-block"},{include:"source.css#property-values"}]},{match:";",name:"punctuation.terminator.rule.css"}]}]},"vue-interpolations":{patterns:[{begin:"(\\{\\{)",beginCaptures:{1:{name:"punctuation.definition.interpolation.begin.html.vue"}},end:"(\\}\\})",endCaptures:{1:{name:"punctuation.definition.interpolation.end.html.vue"}},name:"expression.embedded.vue",patterns:[{begin:"\\G",end:"(?=\\}\\})",name:"source.ts.embedded.html.vue",patterns:[{include:"source.ts"}]}]}]}},scopeName:"source.vue",embeddedLangs:["html","markdown","pug","stylus","sass","css","scss","less","javascript","typescript","jsx","tsx","json","jsonc","json5","yaml","toml","graphql","markdown-vue","vue-directives","vue-interpolations","vue-sfc-style-variable-injection"]});var z=[...a.default,...t.default,...s.default,...l.default,...r.default,...u.default,...c.default,...o.default,...m.default,...p.default,...d.default,...g.default,...b.default,...h.default,...y.default,...v.default,...f.default,...q.default,...j,...C,..._,...k,w]},57153:function(i,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"YAML",name:"yaml",patterns:[{include:"#comment"},{include:"#property"},{include:"#directive"},{match:"^---",name:"entity.other.document.begin.yaml"},{match:"^\\.{3}",name:"entity.other.document.end.yaml"},{include:"#node"}],repository:{"block-collection":{patterns:[{include:"#block-sequence"},{include:"#block-mapping"}]},"block-mapping":{patterns:[{include:"#block-pair"}]},"block-node":{patterns:[{include:"#prototype"},{include:"#block-scalar"},{include:"#block-collection"},{include:"#flow-scalar-plain-out"},{include:"#flow-node"}]},"block-pair":{patterns:[{begin:"\\?",beginCaptures:{1:{name:"punctuation.definition.key-value.begin.yaml"}},end:"(?=\\?)|^ *(:)|(:)",endCaptures:{1:{name:"punctuation.separator.key-value.mapping.yaml"},2:{name:"invalid.illegal.expected-newline.yaml"}},name:"meta.block-mapping.yaml",patterns:[{include:"#block-node"}]},{begin:`(?x)
(?=
(?x:
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] \\S
)
(
[^\\s:]
| : \\S
| \\s+ (?![#\\s])
)*
\\s*
:
(\\s|$)
)
`,end:`(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
)
`,patterns:[{include:"#flow-scalar-plain-out-implicit-type"},{begin:`(?x)
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] \\S
`,beginCaptures:{0:{name:"entity.name.tag.yaml"}},contentName:"entity.name.tag.yaml",end:`(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
)
`,name:"string.unquoted.plain.out.yaml"}]},{match:":(?=\\s|$)",name:"punctuation.separator.key-value.mapping.yaml"}]},"block-scalar":{begin:"(?:(\\|)|(>))([1-9])?([-+])?(.*\\n?)",beginCaptures:{1:{name:"keyword.control.flow.block-scalar.literal.yaml"},2:{name:"keyword.control.flow.block-scalar.folded.yaml"},3:{name:"constant.numeric.indentation-indicator.yaml"},4:{name:"storage.modifier.chomping-indicator.yaml"},5:{patterns:[{include:"#comment"},{match:".+",name:"invalid.illegal.expected-comment-or-newline.yaml"}]}},end:"^(?=\\S)|(?!\\G)",patterns:[{begin:"^([ ]+)(?! )",end:"^(?!\\1|\\s*$)",name:"string.unquoted.block.yaml"}]},"block-sequence":{match:"(-)(?!\\S)",name:"punctuation.definition.block.sequence.item.yaml"},comment:{begin:"(?:(^[ \\t]*)|[ \\t]+)(?=#\\p{Print}*$)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.yaml"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.yaml"}},end:"\\n",name:"comment.line.number-sign.yaml"}]},directive:{begin:"^%",beginCaptures:{0:{name:"punctuation.definition.directive.begin.yaml"}},end:"(?=$|[ \\t]+($|#))",name:"meta.directive.yaml",patterns:[{captures:{1:{name:"keyword.other.directive.yaml.yaml"},2:{name:"constant.numeric.yaml-version.yaml"}},match:"\\G(YAML)[ \\t]+(\\d+\\.\\d+)"},{captures:{1:{name:"keyword.other.directive.tag.yaml"},2:{name:"storage.type.tag-handle.yaml"},3:{name:"support.type.tag-prefix.yaml"}},match:`(?x)
\\G
(TAG)
(?:[ \\t]+
((?:!(?:[0-9A-Za-z\\-]*!)?))
(?:[ \\t]+ (
!              (?x: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )*
| (?![,!\\[\\]{}]) (?x: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )+
)
)?
)?
`},{captures:{1:{name:"support.other.directive.reserved.yaml"},2:{name:"string.unquoted.directive-name.yaml"},3:{name:"string.unquoted.directive-parameter.yaml"}},match:"(?x) \\G (\\w+) (?:[ \\t]+ (\\w+) (?:[ \\t]+ (\\w+))? )?"},{match:"\\S+",name:"invalid.illegal.unrecognized.yaml"}]},"flow-alias":{captures:{1:{name:"keyword.control.flow.alias.yaml"},2:{name:"punctuation.definition.alias.yaml"},3:{name:"variable.other.alias.yaml"},4:{name:"invalid.illegal.character.anchor.yaml"}},match:"((\\*))([^\\s\\[\\]/{/},]+)([^\\s\\]},]\\S*)?"},"flow-collection":{patterns:[{include:"#flow-sequence"},{include:"#flow-mapping"}]},"flow-mapping":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.mapping.begin.yaml"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.mapping.end.yaml"}},name:"meta.flow-mapping.yaml",patterns:[{include:"#prototype"},{match:",",name:"punctuation.separator.mapping.yaml"},{include:"#flow-pair"}]},"flow-node":{patterns:[{include:"#prototype"},{include:"#flow-alias"},{include:"#flow-collection"},{include:"#flow-scalar"}]},"flow-pair":{patterns:[{begin:"\\?",beginCaptures:{0:{name:"punctuation.definition.key-value.begin.yaml"}},end:"(?=[},\\]])",name:"meta.flow-pair.explicit.yaml",patterns:[{include:"#prototype"},{include:"#flow-pair"},{include:"#flow-node"},{begin:":(?=\\s|$|[\\[\\]{},])",beginCaptures:{0:{name:"punctuation.separator.key-value.mapping.yaml"}},end:"(?=[},\\]])",patterns:[{include:"#flow-value"}]}]},{begin:`(?x)
(?=
(?:
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] [^\\s[\\[\\]{},]]
)
(
[^\\s:[\\[\\]{},]]
| : [^\\s[\\[\\]{},]]
| \\s+ (?![#\\s])
)*
\\s*
:
(\\s|$)
)
`,end:`(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
| \\s* : [\\[\\]{},]
| \\s* [\\[\\]{},]
)
`,name:"meta.flow-pair.key.yaml",patterns:[{include:"#flow-scalar-plain-in-implicit-type"},{begin:`(?x)
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] [^\\s[\\[\\]{},]]
`,beginCaptures:{0:{name:"entity.name.tag.yaml"}},contentName:"entity.name.tag.yaml",end:`(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
| \\s* : [\\[\\]{},]
| \\s* [\\[\\]{},]
)
`,name:"string.unquoted.plain.in.yaml"}]},{include:"#flow-node"},{begin:":(?=\\s|$|[\\[\\]{},])",captures:{0:{name:"punctuation.separator.key-value.mapping.yaml"}},end:"(?=[},\\]])",name:"meta.flow-pair.yaml",patterns:[{include:"#flow-value"}]}]},"flow-scalar":{patterns:[{include:"#flow-scalar-double-quoted"},{include:"#flow-scalar-single-quoted"},{include:"#flow-scalar-plain-in"}]},"flow-scalar-double-quoted":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.yaml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.yaml"}},name:"string.quoted.double.yaml",patterns:[{match:'\\\\([0abtnvfre "/\\\\N_Lp]|x\\d\\d|u\\d{4}|U\\d{8})',name:"constant.character.escape.yaml"},{match:"\\\\\\n",name:"constant.character.escape.double-quoted.newline.yaml"}]},"flow-scalar-plain-in":{patterns:[{include:"#flow-scalar-plain-in-implicit-type"},{begin:`(?x)
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] [^\\s[\\[\\]{},]]
`,end:`(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
| \\s* : [\\[\\]{},]
| \\s* [\\[\\]{},]
)
`,name:"string.unquoted.plain.in.yaml"}]},"flow-scalar-plain-in-implicit-type":{patterns:[{captures:{1:{name:"constant.language.null.yaml"},2:{name:"constant.language.boolean.yaml"},3:{name:"constant.numeric.integer.yaml"},4:{name:"constant.numeric.float.yaml"},5:{name:"constant.other.timestamp.yaml"},6:{name:"constant.language.value.yaml"},7:{name:"constant.language.merge.yaml"}},match:`(?x)
(?x:
(null|Null|NULL|~)
| (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)
| (
(?:
[-+]? 0b [0-1_]+
| [-+]? 0  [0-7_]+
| [-+]? (?: 0|[1-9][0-9_]*)
| [-+]? 0x [0-9a-fA-F_]+
| [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+
)
)
| (
(?x:
[-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)?
| [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]*
| [-+]? \\. (?: inf|Inf|INF)
|       \\. (?: nan|NaN|NAN)
)
)
| (
(?x:
\\d{4} - \\d{2} - \\d{2}
| \\d{4}
- \\d{1,2}
- \\d{1,2}
(?: [Tt] | [ \\t]+) \\d{1,2}
: \\d{2}
: \\d{2}
(?: \\.\\d*)?
(?:
(?:[ \\t]*) Z
| [-+] \\d{1,2} (?: :\\d{1,2})?
)?
)
)
| (=)
| (<<)
)
(?:
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
| \\s* : [\\[\\]{},]
| \\s* [\\[\\]{},]
)
)
`}]},"flow-scalar-plain-out":{patterns:[{include:"#flow-scalar-plain-out-implicit-type"},{begin:`(?x)
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] \\S
`,end:`(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
)
`,name:"string.unquoted.plain.out.yaml"}]},"flow-scalar-plain-out-implicit-type":{patterns:[{captures:{1:{name:"constant.language.null.yaml"},2:{name:"constant.language.boolean.yaml"},3:{name:"constant.numeric.integer.yaml"},4:{name:"constant.numeric.float.yaml"},5:{name:"constant.other.timestamp.yaml"},6:{name:"constant.language.value.yaml"},7:{name:"constant.language.merge.yaml"}},match:`(?x)
(?x:
(null|Null|NULL|~)
| (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)
| (
(?:
[-+]? 0b [0-1_]+
| [-+]? 0  [0-7_]+
| [-+]? (?: 0|[1-9][0-9_]*)
| [-+]? 0x [0-9a-fA-F_]+
| [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+
)
)
| (
(?x:
[-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)?
| [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]*
| [-+]? \\. (?: inf|Inf|INF)
|       \\. (?: nan|NaN|NAN)
)
)
| (
(?x:
\\d{4} - \\d{2} - \\d{2}
| \\d{4}
- \\d{1,2}
- \\d{1,2}
(?: [Tt] | [ \\t]+) \\d{1,2}
: \\d{2}
: \\d{2}
(?: \\.\\d*)?
(?:
(?:[ \\t]*) Z
| [-+] \\d{1,2} (?: :\\d{1,2})?
)?
)
)
| (=)
| (<<)
)
(?x:
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
)
)
`}]},"flow-scalar-single-quoted":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.yaml"}},end:"'(?!')",endCaptures:{0:{name:"punctuation.definition.string.end.yaml"}},name:"string.quoted.single.yaml",patterns:[{match:"''",name:"constant.character.escape.single-quoted.yaml"}]},"flow-sequence":{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.sequence.begin.yaml"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.sequence.end.yaml"}},name:"meta.flow-sequence.yaml",patterns:[{include:"#prototype"},{match:",",name:"punctuation.separator.sequence.yaml"},{include:"#flow-pair"},{include:"#flow-node"}]},"flow-value":{patterns:[{begin:"\\G(?![},\\]])",end:"(?=[},\\]])",name:"meta.flow-pair.value.yaml",patterns:[{include:"#flow-node"}]}]},node:{patterns:[{include:"#block-node"}]},property:{begin:"(?=!|&)",end:"(?!\\G)",name:"meta.property.yaml",patterns:[{captures:{1:{name:"keyword.control.property.anchor.yaml"},2:{name:"punctuation.definition.anchor.yaml"},3:{name:"entity.name.type.anchor.yaml"},4:{name:"invalid.illegal.character.anchor.yaml"}},match:"\\G((&))([^\\s\\[\\]/{/},]+)(\\S+)?"},{match:`(?x)
\\G
(?:
! < (?: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )+ >
| (?:!(?:[0-9A-Za-z\\-]*!)?) (?: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$_.~*'()] )+
| !
)
(?=\\ |\\t|$)
`,name:"storage.type.tag-handle.yaml"},{match:"\\S+",name:"invalid.illegal.tag-handle.yaml"}]},prototype:{patterns:[{include:"#comment"},{include:"#property"}]}},scopeName:"source.yaml",aliases:["yml"]})]}}]);
