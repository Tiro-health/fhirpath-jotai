var ri = Object.defineProperty;
var ui = (f, g, _) => g in f ? ri(f, g, { enumerable: !0, configurable: !0, writable: !0, value: _ }) : f[g] = _;
var se = (f, g, _) => ui(f, typeof g != "symbol" ? g + "" : g, _);
var qn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const ai = "fhirpath", oi = "4.8.2", ci = "A FHIRPath engine", fi = "src/fhirpath.js", mi = "src/fhirpath.d.ts", hi = { "@lhncbc/ucum-lhc": "^5.0.0", "@loxjs/url-join": "^1.0.2", antlr4: "~4.9.3", commander: "^2.18.0", "date-fns": "^1.30.1", "js-yaml": "^4.1.1" }, di = { "@babel/core": "^7.21.4", "@babel/eslint-parser": "^7.17.0", "@babel/preset-env": "^7.16.11", "babel-loader": "^8.2.3", benny: "github:caderek/benny#0ad058d3c7ef0b488a8fe9ae3519159fc7f36bb6", bestzip: "^2.2.0", "copy-webpack-plugin": "^12.0.2", cypress: "^13.7.2", eslint: "^8.10.0", fhir: "^4.10.3", grunt: "^1.5.2", "grunt-cli": "^1.4.3", "grunt-text-replace": "^0.4.0", "jasmine-spec-reporter": "^4.2.1", jest: "^30.2.0", "jit-grunt": "^0.10.0", lodash: "^4.17.21", open: "^8.4.0", rimraf: "^3.0.0", tmp: "^0.2.5", tsd: "^0.31.1", webpack: "^5.102.1", "webpack-bundle-analyzer": "^4.4.2", "webpack-cli": "^4.9.1", xml2js: "^0.5.0", yargs: "^15.1.0" }, pi = { node: ">=8.9.0" }, gi = { directory: "test/typescript" }, yi = { preinstall: "node bin/install-demo.js", postinstall: `echo "Building the Benny package based on a pull request which fixes an issue with 'statusShift'... " && (cd node_modules/benny && npm i && npm run build > /dev/null) || echo "Building the Benny package is completed."`, generateParser: 'cd src/parser; rimraf ./generated/*; java -Xmx500M -cp "../../antlr-4.9.3-complete.jar:$CLASSPATH" org.antlr.v4.Tool -o generated -Dlanguage=JavaScript FHIRPath.g4; grunt updateParserRequirements', build: "cd browser-build && webpack && rimraf fhirpath.zip && bestzip fhirpath.zip LICENSE.md fhirpath.min.js fhirpath.r5.min.js fhirpath.r4.min.js fhirpath.stu3.min.js fhirpath.dstu2.min.js && rimraf  LICENSE.md", "test:unit": "node --use_strict node_modules/.bin/jest && TZ=America/New_York node --use_strict node_modules/.bin/jest && TZ=Europe/Paris node --use_strict node_modules/.bin/jest", "test:unit:debug": "echo 'open chrome chrome://inspect/' && node --inspect node_modules/.bin/jest --runInBand", "build:demo": "npm run build && cd demo && npm run build", "test:e2e": "npm run build:demo && cypress run", "test:tsd": "tsd", test: 'npm run lint && npm run test:tsd && npm run test:unit && npm run test:e2e && echo "For tests specific to IE 11, open browser-build/test/index.html in IE 11, and confirm that the tests on that page pass."', lint: "eslint src/parser/index.js src/*.js converter/", "compare-performance": "node ./test/benchmark.js" }, Ci = { fhirpath: "bin/fhirpath" }, _i = ["CHANGELOG.md", "bin", "fhir-context", "src"], Li = "github:HL7/fhirpath.js", bi = "SEE LICENSE in LICENSE.md", Ti = {
  name: ai,
  version: oi,
  description: ci,
  main: fi,
  types: mi,
  dependencies: hi,
  devDependencies: di,
  engines: pi,
  tsd: gi,
  scripts: yi,
  bin: Ci,
  files: _i,
  repository: Li,
  license: bi
};
var re = {}, Te = {}, et, Bn;
function ce() {
  if (Bn) return et;
  Bn = 1;
  function f(d) {
    return d === null ? "null" : d;
  }
  function g(d) {
    return Array.isArray(d) ? "[" + d.map(f).join(", ") + "]" : "null";
  }
  String.prototype.seed = String.prototype.seed || Math.round(Math.random() * Math.pow(2, 32)), String.prototype.hashCode = function() {
    const d = this.toString();
    let o, h;
    const c = d.length & 3, y = d.length - c;
    let T = String.prototype.seed;
    const N = 3432918353, O = 461845907;
    let P = 0;
    for (; P < y; )
      h = d.charCodeAt(P) & 255 | (d.charCodeAt(++P) & 255) << 8 | (d.charCodeAt(++P) & 255) << 16 | (d.charCodeAt(++P) & 255) << 24, ++P, h = (h & 65535) * N + (((h >>> 16) * N & 65535) << 16) & 4294967295, h = h << 15 | h >>> 17, h = (h & 65535) * O + (((h >>> 16) * O & 65535) << 16) & 4294967295, T ^= h, T = T << 13 | T >>> 19, o = (T & 65535) * 5 + (((T >>> 16) * 5 & 65535) << 16) & 4294967295, T = (o & 65535) + 27492 + (((o >>> 16) + 58964 & 65535) << 16);
    switch (h = 0, c) {
      case 3:
        h ^= (d.charCodeAt(P + 2) & 255) << 16;
      case 2:
        h ^= (d.charCodeAt(P + 1) & 255) << 8;
      case 1:
        h ^= d.charCodeAt(P) & 255, h = (h & 65535) * N + (((h >>> 16) * N & 65535) << 16) & 4294967295, h = h << 15 | h >>> 17, h = (h & 65535) * O + (((h >>> 16) * O & 65535) << 16) & 4294967295, T ^= h;
    }
    return T ^= d.length, T ^= T >>> 16, T = (T & 65535) * 2246822507 + (((T >>> 16) * 2246822507 & 65535) << 16) & 4294967295, T ^= T >>> 13, T = (T & 65535) * 3266489909 + (((T >>> 16) * 3266489909 & 65535) << 16) & 4294967295, T ^= T >>> 16, T >>> 0;
  };
  function _(d, o) {
    return d ? d.equals(o) : d == o;
  }
  function p(d) {
    return d ? d.hashCode() : -1;
  }
  class a {
    constructor(o, h) {
      this.data = {}, this.hashFunction = o || p, this.equalsFunction = h || _;
    }
    add(o) {
      const c = "hash_" + this.hashFunction(o);
      if (c in this.data) {
        const y = this.data[c];
        for (let T = 0; T < y.length; T++)
          if (this.equalsFunction(o, y[T]))
            return y[T];
        return y.push(o), o;
      } else
        return this.data[c] = [o], o;
    }
    contains(o) {
      return this.get(o) != null;
    }
    get(o) {
      const c = "hash_" + this.hashFunction(o);
      if (c in this.data) {
        const y = this.data[c];
        for (let T = 0; T < y.length; T++)
          if (this.equalsFunction(o, y[T]))
            return y[T];
      }
      return null;
    }
    values() {
      let o = [];
      for (const h in this.data)
        h.indexOf("hash_") === 0 && (o = o.concat(this.data[h]));
      return o;
    }
    toString() {
      return g(this.values());
    }
    get length() {
      let o = 0;
      for (const h in this.data)
        h.indexOf("hash_") === 0 && (o = o + this.data[h].length);
      return o;
    }
  }
  class r {
    constructor() {
      this.data = [];
    }
    add(o) {
      this.data[o] = !0;
    }
    or(o) {
      const h = this;
      Object.keys(o.data).map(function(c) {
        h.add(c);
      });
    }
    remove(o) {
      delete this.data[o];
    }
    contains(o) {
      return this.data[o] === !0;
    }
    values() {
      return Object.keys(this.data);
    }
    minValue() {
      return Math.min.apply(null, this.values());
    }
    hashCode() {
      const o = new i();
      return o.update(this.values()), o.finish();
    }
    equals(o) {
      return o instanceof r ? this.hashCode() === o.hashCode() : !1;
    }
    toString() {
      return "{" + this.values().join(", ") + "}";
    }
    get length() {
      return this.values().length;
    }
  }
  class e {
    constructor(o, h) {
      this.data = {}, this.hashFunction = o || p, this.equalsFunction = h || _;
    }
    put(o, h) {
      const c = "hash_" + this.hashFunction(o);
      if (c in this.data) {
        const y = this.data[c];
        for (let T = 0; T < y.length; T++) {
          const N = y[T];
          if (this.equalsFunction(o, N.key)) {
            const O = N.value;
            return N.value = h, O;
          }
        }
        return y.push({ key: o, value: h }), h;
      } else
        return this.data[c] = [{ key: o, value: h }], h;
    }
    containsKey(o) {
      const h = "hash_" + this.hashFunction(o);
      if (h in this.data) {
        const c = this.data[h];
        for (let y = 0; y < c.length; y++) {
          const T = c[y];
          if (this.equalsFunction(o, T.key))
            return !0;
        }
      }
      return !1;
    }
    get(o) {
      const h = "hash_" + this.hashFunction(o);
      if (h in this.data) {
        const c = this.data[h];
        for (let y = 0; y < c.length; y++) {
          const T = c[y];
          if (this.equalsFunction(o, T.key))
            return T.value;
        }
      }
      return null;
    }
    entries() {
      let o = [];
      for (const h in this.data)
        h.indexOf("hash_") === 0 && (o = o.concat(this.data[h]));
      return o;
    }
    getKeys() {
      return this.entries().map(function(o) {
        return o.key;
      });
    }
    getValues() {
      return this.entries().map(function(o) {
        return o.value;
      });
    }
    toString() {
      return "[" + this.entries().map(function(h) {
        return "{" + h.key + ":" + h.value + "}";
      }).join(", ") + "]";
    }
    get length() {
      let o = 0;
      for (const h in this.data)
        h.indexOf("hash_") === 0 && (o = o + this.data[h].length);
      return o;
    }
  }
  class u {
    constructor() {
      this.data = {};
    }
    get(o) {
      return o = "k-" + o, o in this.data ? this.data[o] : null;
    }
    put(o, h) {
      o = "k-" + o, this.data[o] = h;
    }
    values() {
      const o = this.data;
      return Object.keys(this.data).map(function(c) {
        return o[c];
      });
    }
  }
  class s {
    constructor(o) {
      this.defaultMapCtor = o || e, this.cacheMap = new this.defaultMapCtor();
    }
    get(o, h) {
      const c = this.cacheMap.get(o) || null;
      return c === null ? null : c.get(h) || null;
    }
    set(o, h, c) {
      let y = this.cacheMap.get(o) || null;
      y === null && (y = new this.defaultMapCtor(), this.cacheMap.put(o, y)), y.put(h, c);
    }
  }
  class i {
    constructor() {
      this.count = 0, this.hash = 0;
    }
    update() {
      for (let o = 0; o < arguments.length; o++) {
        const h = arguments[o];
        if (h != null)
          if (Array.isArray(h))
            this.update.apply(this, h);
          else {
            let c = 0;
            switch (typeof h) {
              case "undefined":
              case "function":
                continue;
              case "number":
              case "boolean":
                c = h;
                break;
              case "string":
                c = h.hashCode();
                break;
              default:
                h.updateHashCode ? h.updateHashCode(this) : console.log("No updateHashCode for " + h.toString());
                continue;
            }
            c = c * 3432918353, c = c << 15 | c >>> 17, c = c * 461845907, this.count = this.count + 1;
            let y = this.hash ^ c;
            y = y << 13 | y >>> 19, y = y * 5 + 3864292196, this.hash = y;
          }
      }
    }
    finish() {
      let o = this.hash ^ this.count * 4;
      return o = o ^ o >>> 16, o = o * 2246822507, o = o ^ o >>> 13, o = o * 3266489909, o = o ^ o >>> 16, o;
    }
  }
  function n() {
    const d = new i();
    return d.update.apply(d, arguments), d.finish();
  }
  function l(d, o) {
    return d = d.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r"), o && (d = d.replace(/ /g, "·")), d;
  }
  function t(d) {
    return d.replace(/\w\S*/g, function(o) {
      return o.charAt(0).toUpperCase() + o.substr(1);
    });
  }
  function m(d, o) {
    if (!Array.isArray(d) || !Array.isArray(o))
      return !1;
    if (d === o)
      return !0;
    if (d.length !== o.length)
      return !1;
    for (let h = 0; h < d.length; h++)
      if (d[h] !== o[h] && (!d[h].equals || !d[h].equals(o[h])))
        return !1;
    return !0;
  }
  return et = {
    Hash: i,
    Set: a,
    Map: e,
    BitSet: r,
    AltDict: u,
    DoubleDict: s,
    hashStuff: n,
    escapeWhitespace: l,
    arrayToString: g,
    titleCase: t,
    equalArrays: m
  }, et;
}
var tt, Hn;
function ue() {
  if (Hn) return tt;
  Hn = 1;
  class f {
    constructor() {
      this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null;
    }
    getTokenSource() {
      return this.source[0];
    }
    getInputStream() {
      return this.source[1];
    }
    get text() {
      return this._text;
    }
    set text(p) {
      this._text = p;
    }
  }
  f.INVALID_TYPE = 0, f.EPSILON = -2, f.MIN_USER_TOKEN_TYPE = 1, f.EOF = -1, f.DEFAULT_CHANNEL = 0, f.HIDDEN_CHANNEL = 1;
  class g extends f {
    constructor(p, a, r, e, u) {
      super(), this.source = p !== void 0 ? p : g.EMPTY_SOURCE, this.type = a !== void 0 ? a : null, this.channel = r !== void 0 ? r : f.DEFAULT_CHANNEL, this.start = e !== void 0 ? e : -1, this.stop = u !== void 0 ? u : -1, this.tokenIndex = -1, this.source[0] !== null ? (this.line = p[0].line, this.column = p[0].column) : this.column = -1;
    }
    /**
     * Constructs a new {@link CommonToken} as a copy of another {@link Token}.
     *
     * <p>
     * If {@code oldToken} is also a {@link CommonToken} instance, the newly
     * constructed token will share a reference to the {@link //text} field and
     * the {@link Pair} stored in {@link //source}. Otherwise, {@link //text} will
     * be assigned the result of calling {@link //getText}, and {@link //source}
     * will be constructed from the result of {@link Token//getTokenSource} and
     * {@link Token//getInputStream}.</p>
     *
     * @param oldToken The token to copy.
     */
    clone() {
      const p = new g(this.source, this.type, this.channel, this.start, this.stop);
      return p.tokenIndex = this.tokenIndex, p.line = this.line, p.column = this.column, p.text = this.text, p;
    }
    toString() {
      let p = this.text;
      return p !== null ? p = p.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : p = "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + p + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]";
    }
    get text() {
      if (this._text !== null)
        return this._text;
      const p = this.getInputStream();
      if (p === null)
        return null;
      const a = p.size;
      return this.start < a && this.stop < a ? p.getText(this.start, this.stop) : "<EOF>";
    }
    set text(p) {
      this._text = p;
    }
  }
  return g.EMPTY_SOURCE = [null, null], tt = {
    Token: f,
    CommonToken: g
  }, tt;
}
var je = {}, nt, Vn;
function be() {
  if (Vn) return nt;
  Vn = 1;
  class f {
    constructor() {
      this.atn = null, this.stateNumber = f.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = !1, this.transitions = [], this.nextTokenWithinRule = null;
    }
    toString() {
      return this.stateNumber;
    }
    equals(h) {
      return h instanceof f ? this.stateNumber === h.stateNumber : !1;
    }
    isNonGreedyExitState() {
      return !1;
    }
    addTransition(h, c) {
      c === void 0 && (c = -1), this.transitions.length === 0 ? this.epsilonOnlyTransitions = h.isEpsilon : this.epsilonOnlyTransitions !== h.isEpsilon && (this.epsilonOnlyTransitions = !1), c === -1 ? this.transitions.push(h) : this.transitions.splice(c, 1, h);
    }
  }
  f.INVALID_TYPE = 0, f.BASIC = 1, f.RULE_START = 2, f.BLOCK_START = 3, f.PLUS_BLOCK_START = 4, f.STAR_BLOCK_START = 5, f.TOKEN_START = 6, f.RULE_STOP = 7, f.BLOCK_END = 8, f.STAR_LOOP_BACK = 9, f.STAR_LOOP_ENTRY = 10, f.PLUS_LOOP_BACK = 11, f.LOOP_END = 12, f.serializationNames = [
    "INVALID",
    "BASIC",
    "RULE_START",
    "BLOCK_START",
    "PLUS_BLOCK_START",
    "STAR_BLOCK_START",
    "TOKEN_START",
    "RULE_STOP",
    "BLOCK_END",
    "STAR_LOOP_BACK",
    "STAR_LOOP_ENTRY",
    "PLUS_LOOP_BACK",
    "LOOP_END"
  ], f.INVALID_STATE_NUMBER = -1;
  class g extends f {
    constructor() {
      super(), this.stateType = f.BASIC;
    }
  }
  class _ extends f {
    constructor() {
      return super(), this.decision = -1, this.nonGreedy = !1, this;
    }
  }
  class p extends _ {
    constructor() {
      return super(), this.endState = null, this;
    }
  }
  class a extends p {
    constructor() {
      return super(), this.stateType = f.BLOCK_START, this;
    }
  }
  class r extends f {
    constructor() {
      return super(), this.stateType = f.BLOCK_END, this.startState = null, this;
    }
  }
  class e extends f {
    constructor() {
      return super(), this.stateType = f.RULE_STOP, this;
    }
  }
  class u extends f {
    constructor() {
      return super(), this.stateType = f.RULE_START, this.stopState = null, this.isPrecedenceRule = !1, this;
    }
  }
  class s extends _ {
    constructor() {
      return super(), this.stateType = f.PLUS_LOOP_BACK, this;
    }
  }
  class i extends p {
    constructor() {
      return super(), this.stateType = f.PLUS_BLOCK_START, this.loopBackState = null, this;
    }
  }
  class n extends p {
    constructor() {
      return super(), this.stateType = f.STAR_BLOCK_START, this;
    }
  }
  class l extends f {
    constructor() {
      return super(), this.stateType = f.STAR_LOOP_BACK, this;
    }
  }
  class t extends _ {
    constructor() {
      return super(), this.stateType = f.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this;
    }
  }
  class m extends f {
    constructor() {
      return super(), this.stateType = f.LOOP_END, this.loopBackState = null, this;
    }
  }
  class d extends _ {
    constructor() {
      return super(), this.stateType = f.TOKEN_START, this;
    }
  }
  return nt = {
    ATNState: f,
    BasicState: g,
    DecisionState: _,
    BlockStartState: p,
    BlockEndState: r,
    LoopEndState: m,
    RuleStartState: u,
    RuleStopState: e,
    TokensStartState: d,
    PlusLoopbackState: s,
    StarLoopbackState: l,
    StarLoopEntryState: t,
    PlusBlockStartState: i,
    StarBlockStartState: n,
    BasicBlockStartState: a
  }, nt;
}
var lt, Gn;
function Ve() {
  if (Gn) return lt;
  Gn = 1;
  const { Set: f, Hash: g, equalArrays: _ } = ce();
  class p {
    hashCode() {
      const i = new g();
      return this.updateHashCode(i), i.finish();
    }
    /**
     * For context independent predicates, we evaluate them without a local
     * context (i.e., null context). That way, we can evaluate them without
     * having to create proper rule-specific context during prediction (as
     * opposed to the parser, which creates them naturally). In a practical
     * sense, this avoids a cast exception from RuleContext to myruleContext.
     *
     * <p>For context dependent predicates, we must pass in a local context so that
     * references such as $arg evaluate properly as _localctx.arg. We only
     * capture context dependent predicates in the context in which we begin
     * prediction, so we passed in the outer context here in case of context
     * dependent predicate evaluation.</p>
     */
    evaluate(i, n) {
    }
    /**
     * Evaluate the precedence predicates for the context and reduce the result.
     *
     * @param parser The parser instance.
     * @param outerContext The current parser context object.
     * @return The simplified semantic context after precedence predicates are
     * evaluated, which will be one of the following values.
     * <ul>
     * <li>{@link //NONE}: if the predicate simplifies to {@code true} after
     * precedence predicates are evaluated.</li>
     * <li>{@code null}: if the predicate simplifies to {@code false} after
     * precedence predicates are evaluated.</li>
     * <li>{@code this}: if the semantic context is not changed as a result of
     * precedence predicate evaluation.</li>
     * <li>A non-{@code null} {@link SemanticContext}: the new simplified
     * semantic context after precedence predicates are evaluated.</li>
     * </ul>
     */
    evalPrecedence(i, n) {
      return this;
    }
    static andContext(i, n) {
      if (i === null || i === p.NONE)
        return n;
      if (n === null || n === p.NONE)
        return i;
      const l = new e(i, n);
      return l.opnds.length === 1 ? l.opnds[0] : l;
    }
    static orContext(i, n) {
      if (i === null)
        return n;
      if (n === null)
        return i;
      if (i === p.NONE || n === p.NONE)
        return p.NONE;
      const l = new u(i, n);
      return l.opnds.length === 1 ? l.opnds[0] : l;
    }
  }
  class a extends p {
    constructor(i, n, l) {
      super(), this.ruleIndex = i === void 0 ? -1 : i, this.predIndex = n === void 0 ? -1 : n, this.isCtxDependent = l === void 0 ? !1 : l;
    }
    evaluate(i, n) {
      const l = this.isCtxDependent ? n : null;
      return i.sempred(l, this.ruleIndex, this.predIndex);
    }
    updateHashCode(i) {
      i.update(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }
    equals(i) {
      return this === i ? !0 : i instanceof a ? this.ruleIndex === i.ruleIndex && this.predIndex === i.predIndex && this.isCtxDependent === i.isCtxDependent : !1;
    }
    toString() {
      return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
    }
  }
  p.NONE = new a();
  class r extends p {
    constructor(i) {
      super(), this.precedence = i === void 0 ? 0 : i;
    }
    evaluate(i, n) {
      return i.precpred(n, this.precedence);
    }
    evalPrecedence(i, n) {
      return i.precpred(n, this.precedence) ? p.NONE : null;
    }
    compareTo(i) {
      return this.precedence - i.precedence;
    }
    updateHashCode(i) {
      i.update(this.precedence);
    }
    equals(i) {
      return this === i ? !0 : i instanceof r ? this.precedence === i.precedence : !1;
    }
    toString() {
      return "{" + this.precedence + ">=prec}?";
    }
    static filterPrecedencePredicates(i) {
      const n = [];
      return i.values().map(function(l) {
        l instanceof r && n.push(l);
      }), n;
    }
  }
  class e extends p {
    /**
     * A semantic context which is true whenever none of the contained contexts
     * is false
     */
    constructor(i, n) {
      super();
      const l = new f();
      i instanceof e ? i.opnds.map(function(m) {
        l.add(m);
      }) : l.add(i), n instanceof e ? n.opnds.map(function(m) {
        l.add(m);
      }) : l.add(n);
      const t = r.filterPrecedencePredicates(l);
      if (t.length > 0) {
        let m = null;
        t.map(function(d) {
          (m === null || d.precedence < m.precedence) && (m = d);
        }), l.add(m);
      }
      this.opnds = Array.from(l.values());
    }
    equals(i) {
      return this === i ? !0 : i instanceof e ? _(this.opnds, i.opnds) : !1;
    }
    updateHashCode(i) {
      i.update(this.opnds, "AND");
    }
    /**
     * {@inheritDoc}
     *
     * <p>
     * The evaluation of predicates by this context is short-circuiting, but
     * unordered.</p>
     */
    evaluate(i, n) {
      for (let l = 0; l < this.opnds.length; l++)
        if (!this.opnds[l].evaluate(i, n))
          return !1;
      return !0;
    }
    evalPrecedence(i, n) {
      let l = !1;
      const t = [];
      for (let d = 0; d < this.opnds.length; d++) {
        const o = this.opnds[d], h = o.evalPrecedence(i, n);
        if (l |= h !== o, h === null)
          return null;
        h !== p.NONE && t.push(h);
      }
      if (!l)
        return this;
      if (t.length === 0)
        return p.NONE;
      let m = null;
      return t.map(function(d) {
        m = m === null ? d : p.andContext(m, d);
      }), m;
    }
    toString() {
      const i = this.opnds.map((n) => n.toString());
      return (i.length > 3 ? i.slice(3) : i).join("&&");
    }
  }
  class u extends p {
    /**
     * A semantic context which is true whenever at least one of the contained
     * contexts is true
     */
    constructor(i, n) {
      super();
      const l = new f();
      i instanceof u ? i.opnds.map(function(m) {
        l.add(m);
      }) : l.add(i), n instanceof u ? n.opnds.map(function(m) {
        l.add(m);
      }) : l.add(n);
      const t = r.filterPrecedencePredicates(l);
      if (t.length > 0) {
        const m = t.sort(function(o, h) {
          return o.compareTo(h);
        }), d = m[m.length - 1];
        l.add(d);
      }
      this.opnds = Array.from(l.values());
    }
    equals(i) {
      return this === i ? !0 : i instanceof u ? _(this.opnds, i.opnds) : !1;
    }
    updateHashCode(i) {
      i.update(this.opnds, "OR");
    }
    /**
     * <p>
     * The evaluation of predicates by this context is short-circuiting, but
     * unordered.</p>
     */
    evaluate(i, n) {
      for (let l = 0; l < this.opnds.length; l++)
        if (this.opnds[l].evaluate(i, n))
          return !0;
      return !1;
    }
    evalPrecedence(i, n) {
      let l = !1;
      const t = [];
      for (let d = 0; d < this.opnds.length; d++) {
        const o = this.opnds[d], h = o.evalPrecedence(i, n);
        if (l |= h !== o, h === p.NONE)
          return p.NONE;
        h !== null && t.push(h);
      }
      return l ? (t.length === 0, null) : this;
    }
    toString() {
      const i = this.opnds.map((n) => n.toString());
      return (i.length > 3 ? i.slice(3) : i).join("||");
    }
  }
  return lt = {
    SemanticContext: p,
    PrecedencePredicate: r,
    Predicate: a
  }, lt;
}
var zn;
function Ye() {
  if (zn) return je;
  zn = 1;
  const { DecisionState: f } = be(), { SemanticContext: g } = Ve(), { Hash: _ } = ce();
  function p(e, u) {
    if (e === null) {
      const s = { state: null, alt: null, context: null, semanticContext: null };
      return u && (s.reachesIntoOuterContext = 0), s;
    } else {
      const s = {};
      return s.state = e.state || null, s.alt = e.alt === void 0 ? null : e.alt, s.context = e.context || null, s.semanticContext = e.semanticContext || null, u && (s.reachesIntoOuterContext = e.reachesIntoOuterContext || 0, s.precedenceFilterSuppressed = e.precedenceFilterSuppressed || !1), s;
    }
  }
  let a = class Mn {
    /**
     * @param {Object} params A tuple: (ATN state, predicted alt, syntactic, semantic context).
     * The syntactic context is a graph-structured stack node whose
     * path(s) to the root is the rule invocation(s)
     * chain used to arrive at the state.  The semantic context is
     * the tree of semantic predicates encountered before reaching
     * an ATN state
     */
    constructor(u, s) {
      this.checkContext(u, s), u = p(u), s = p(s, !0), this.state = u.state !== null ? u.state : s.state, this.alt = u.alt !== null ? u.alt : s.alt, this.context = u.context !== null ? u.context : s.context, this.semanticContext = u.semanticContext !== null ? u.semanticContext : s.semanticContext !== null ? s.semanticContext : g.NONE, this.reachesIntoOuterContext = s.reachesIntoOuterContext, this.precedenceFilterSuppressed = s.precedenceFilterSuppressed;
    }
    checkContext(u, s) {
      (u.context === null || u.context === void 0) && (s === null || s.context === null || s.context === void 0) && (this.context = null);
    }
    hashCode() {
      const u = new _();
      return this.updateHashCode(u), u.finish();
    }
    updateHashCode(u) {
      u.update(this.state.stateNumber, this.alt, this.context, this.semanticContext);
    }
    /**
     * An ATN configuration is equal to another if both have
     * the same state, they predict the same alternative, and
     * syntactic/semantic contexts are the same
     */
    equals(u) {
      return this === u ? !0 : u instanceof Mn ? this.state.stateNumber === u.state.stateNumber && this.alt === u.alt && (this.context === null ? u.context === null : this.context.equals(u.context)) && this.semanticContext.equals(u.semanticContext) && this.precedenceFilterSuppressed === u.precedenceFilterSuppressed : !1;
    }
    hashCodeForConfigSet() {
      const u = new _();
      return u.update(this.state.stateNumber, this.alt, this.semanticContext), u.finish();
    }
    equalsForConfigSet(u) {
      return this === u ? !0 : u instanceof Mn ? this.state.stateNumber === u.state.stateNumber && this.alt === u.alt && this.semanticContext.equals(u.semanticContext) : !1;
    }
    toString() {
      return "(" + this.state + "," + this.alt + (this.context !== null ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== g.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")";
    }
  };
  class r extends a {
    constructor(u, s) {
      super(u, s);
      const i = u.lexerActionExecutor || null;
      return this.lexerActionExecutor = i || (s !== null ? s.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = s !== null ? this.checkNonGreedyDecision(s, this.state) : !1, this.hashCodeForConfigSet = r.prototype.hashCode, this.equalsForConfigSet = r.prototype.equals, this;
    }
    updateHashCode(u) {
      u.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor);
    }
    equals(u) {
      return this === u || u instanceof r && this.passedThroughNonGreedyDecision === u.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(u.lexerActionExecutor) : !u.lexerActionExecutor) && super.equals(u);
    }
    checkNonGreedyDecision(u, s) {
      return u.passedThroughNonGreedyDecision || s instanceof f && s.nonGreedy;
    }
  }
  return je.ATNConfig = a, je.LexerATNConfig = r, je;
}
var st, $n;
function pe() {
  if ($n) return st;
  $n = 1;
  const { Token: f } = ue();
  class g {
    constructor(a, r) {
      this.start = a, this.stop = r;
    }
    clone() {
      return new g(this.start, this.stop);
    }
    contains(a) {
      return a >= this.start && a < this.stop;
    }
    toString() {
      return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString();
    }
    get length() {
      return this.stop - this.start;
    }
  }
  class _ {
    constructor() {
      this.intervals = null, this.readOnly = !1;
    }
    first(a) {
      return this.intervals === null || this.intervals.length === 0 ? f.INVALID_TYPE : this.intervals[0].start;
    }
    addOne(a) {
      this.addInterval(new g(a, a + 1));
    }
    addRange(a, r) {
      this.addInterval(new g(a, r + 1));
    }
    addInterval(a) {
      if (this.intervals === null)
        this.intervals = [], this.intervals.push(a.clone());
      else {
        for (let r = 0; r < this.intervals.length; r++) {
          const e = this.intervals[r];
          if (a.stop < e.start) {
            this.intervals.splice(r, 0, a);
            return;
          } else if (a.stop === e.start) {
            this.intervals[r] = new g(a.start, e.stop);
            return;
          } else if (a.start <= e.stop) {
            this.intervals[r] = new g(Math.min(e.start, a.start), Math.max(e.stop, a.stop)), this.reduce(r);
            return;
          }
        }
        this.intervals.push(a.clone());
      }
    }
    addSet(a) {
      return a.intervals !== null && a.intervals.forEach((r) => this.addInterval(r), this), this;
    }
    reduce(a) {
      if (a < this.intervals.length - 1) {
        const r = this.intervals[a], e = this.intervals[a + 1];
        r.stop >= e.stop ? (this.intervals.splice(a + 1, 1), this.reduce(a)) : r.stop >= e.start && (this.intervals[a] = new g(r.start, e.stop), this.intervals.splice(a + 1, 1));
      }
    }
    complement(a, r) {
      const e = new _();
      return e.addInterval(new g(a, r + 1)), this.intervals !== null && this.intervals.forEach((u) => e.removeRange(u)), e;
    }
    contains(a) {
      if (this.intervals === null)
        return !1;
      for (let r = 0; r < this.intervals.length; r++)
        if (this.intervals[r].contains(a))
          return !0;
      return !1;
    }
    removeRange(a) {
      if (a.start === a.stop - 1)
        this.removeOne(a.start);
      else if (this.intervals !== null) {
        let r = 0;
        for (let e = 0; e < this.intervals.length; e++) {
          const u = this.intervals[r];
          if (a.stop <= u.start)
            return;
          if (a.start > u.start && a.stop < u.stop) {
            this.intervals[r] = new g(u.start, a.start);
            const s = new g(a.stop, u.stop);
            this.intervals.splice(r, 0, s);
            return;
          } else a.start <= u.start && a.stop >= u.stop ? (this.intervals.splice(r, 1), r = r - 1) : a.start < u.stop ? this.intervals[r] = new g(u.start, a.start) : a.stop < u.stop && (this.intervals[r] = new g(a.stop, u.stop));
          r += 1;
        }
      }
    }
    removeOne(a) {
      if (this.intervals !== null)
        for (let r = 0; r < this.intervals.length; r++) {
          const e = this.intervals[r];
          if (a < e.start)
            return;
          if (a === e.start && a === e.stop - 1) {
            this.intervals.splice(r, 1);
            return;
          } else if (a === e.start) {
            this.intervals[r] = new g(e.start + 1, e.stop);
            return;
          } else if (a === e.stop - 1) {
            this.intervals[r] = new g(e.start, e.stop - 1);
            return;
          } else if (a < e.stop - 1) {
            const u = new g(e.start, a);
            e.start = a + 1, this.intervals.splice(r, 0, u);
            return;
          }
        }
    }
    toString(a, r, e) {
      return a = a || null, r = r || null, e = e || !1, this.intervals === null ? "{}" : a !== null || r !== null ? this.toTokenString(a, r) : e ? this.toCharString() : this.toIndexString();
    }
    toCharString() {
      const a = [];
      for (let r = 0; r < this.intervals.length; r++) {
        const e = this.intervals[r];
        e.stop === e.start + 1 ? e.start === f.EOF ? a.push("<EOF>") : a.push("'" + String.fromCharCode(e.start) + "'") : a.push("'" + String.fromCharCode(e.start) + "'..'" + String.fromCharCode(e.stop - 1) + "'");
      }
      return a.length > 1 ? "{" + a.join(", ") + "}" : a[0];
    }
    toIndexString() {
      const a = [];
      for (let r = 0; r < this.intervals.length; r++) {
        const e = this.intervals[r];
        e.stop === e.start + 1 ? e.start === f.EOF ? a.push("<EOF>") : a.push(e.start.toString()) : a.push(e.start.toString() + ".." + (e.stop - 1).toString());
      }
      return a.length > 1 ? "{" + a.join(", ") + "}" : a[0];
    }
    toTokenString(a, r) {
      const e = [];
      for (let u = 0; u < this.intervals.length; u++) {
        const s = this.intervals[u];
        for (let i = s.start; i < s.stop; i++)
          e.push(this.elementName(a, r, i));
      }
      return e.length > 1 ? "{" + e.join(", ") + "}" : e[0];
    }
    elementName(a, r, e) {
      return e === f.EOF ? "<EOF>" : e === f.EPSILON ? "<EPSILON>" : a[e] || r[e];
    }
    get length() {
      return this.intervals.map((a) => a.length).reduce((a, r) => a + r);
    }
  }
  return st = {
    Interval: g,
    IntervalSet: _
  }, st;
}
var it, Kn;
function Ge() {
  if (Kn) return it;
  Kn = 1;
  const { Token: f } = ue(), { IntervalSet: g } = pe(), { Predicate: _, PrecedencePredicate: p } = Ve();
  class a {
    constructor(c) {
      if (c == null)
        throw "target cannot be null.";
      this.target = c, this.isEpsilon = !1, this.label = null;
    }
  }
  a.EPSILON = 1, a.RANGE = 2, a.RULE = 3, a.PREDICATE = 4, a.ATOM = 5, a.ACTION = 6, a.SET = 7, a.NOT_SET = 8, a.WILDCARD = 9, a.PRECEDENCE = 10, a.serializationNames = [
    "INVALID",
    "EPSILON",
    "RANGE",
    "RULE",
    "PREDICATE",
    "ATOM",
    "ACTION",
    "SET",
    "NOT_SET",
    "WILDCARD",
    "PRECEDENCE"
  ], a.serializationTypes = {
    EpsilonTransition: a.EPSILON,
    RangeTransition: a.RANGE,
    RuleTransition: a.RULE,
    PredicateTransition: a.PREDICATE,
    AtomTransition: a.ATOM,
    ActionTransition: a.ACTION,
    SetTransition: a.SET,
    NotSetTransition: a.NOT_SET,
    WildcardTransition: a.WILDCARD,
    PrecedencePredicateTransition: a.PRECEDENCE
  };
  class r extends a {
    constructor(c, y) {
      super(c), this.label_ = y, this.label = this.makeLabel(), this.serializationType = a.ATOM;
    }
    makeLabel() {
      const c = new g();
      return c.addOne(this.label_), c;
    }
    matches(c, y, T) {
      return this.label_ === c;
    }
    toString() {
      return this.label_;
    }
  }
  class e extends a {
    constructor(c, y, T, N) {
      super(c), this.ruleIndex = y, this.precedence = T, this.followState = N, this.serializationType = a.RULE, this.isEpsilon = !0;
    }
    matches(c, y, T) {
      return !1;
    }
  }
  class u extends a {
    constructor(c, y) {
      super(c), this.serializationType = a.EPSILON, this.isEpsilon = !0, this.outermostPrecedenceReturn = y;
    }
    matches(c, y, T) {
      return !1;
    }
    toString() {
      return "epsilon";
    }
  }
  class s extends a {
    constructor(c, y, T) {
      super(c), this.serializationType = a.RANGE, this.start = y, this.stop = T, this.label = this.makeLabel();
    }
    makeLabel() {
      const c = new g();
      return c.addRange(this.start, this.stop), c;
    }
    matches(c, y, T) {
      return c >= this.start && c <= this.stop;
    }
    toString() {
      return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'";
    }
  }
  class i extends a {
    constructor(c) {
      super(c);
    }
  }
  class n extends i {
    constructor(c, y, T, N) {
      super(c), this.serializationType = a.PREDICATE, this.ruleIndex = y, this.predIndex = T, this.isCtxDependent = N, this.isEpsilon = !0;
    }
    matches(c, y, T) {
      return !1;
    }
    getPredicate() {
      return new _(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }
    toString() {
      return "pred_" + this.ruleIndex + ":" + this.predIndex;
    }
  }
  class l extends a {
    constructor(c, y, T, N) {
      super(c), this.serializationType = a.ACTION, this.ruleIndex = y, this.actionIndex = T === void 0 ? -1 : T, this.isCtxDependent = N === void 0 ? !1 : N, this.isEpsilon = !0;
    }
    matches(c, y, T) {
      return !1;
    }
    toString() {
      return "action_" + this.ruleIndex + ":" + this.actionIndex;
    }
  }
  class t extends a {
    constructor(c, y) {
      super(c), this.serializationType = a.SET, y != null ? this.label = y : (this.label = new g(), this.label.addOne(f.INVALID_TYPE));
    }
    matches(c, y, T) {
      return this.label.contains(c);
    }
    toString() {
      return this.label.toString();
    }
  }
  class m extends t {
    constructor(c, y) {
      super(c, y), this.serializationType = a.NOT_SET;
    }
    matches(c, y, T) {
      return c >= y && c <= T && !super.matches(c, y, T);
    }
    toString() {
      return "~" + super.toString();
    }
  }
  class d extends a {
    constructor(c) {
      super(c), this.serializationType = a.WILDCARD;
    }
    matches(c, y, T) {
      return c >= y && c <= T;
    }
    toString() {
      return ".";
    }
  }
  class o extends i {
    constructor(c, y) {
      super(c), this.serializationType = a.PRECEDENCE, this.precedence = y, this.isEpsilon = !0;
    }
    matches(c, y, T) {
      return !1;
    }
    getPredicate() {
      return new p(this.precedence);
    }
    toString() {
      return this.precedence + " >= _p";
    }
  }
  return it = {
    Transition: a,
    AtomTransition: r,
    SetTransition: t,
    NotSetTransition: m,
    RuleTransition: e,
    ActionTransition: l,
    EpsilonTransition: u,
    RangeTransition: s,
    WildcardTransition: d,
    PredicateTransition: n,
    PrecedencePredicateTransition: o,
    AbstractPredicateTransition: i
  }, it;
}
var rt, jn;
function Me() {
  if (jn) return rt;
  jn = 1;
  const { Token: f } = ue(), { Interval: g } = pe(), _ = new g(-1, -2);
  class p {
  }
  class a extends p {
    constructor() {
      super();
    }
  }
  class r extends a {
    constructor() {
      super();
    }
  }
  class e extends r {
    constructor() {
      super();
    }
    getRuleContext() {
      throw new Error("missing interface implementation");
    }
  }
  class u extends r {
    constructor() {
      super();
    }
  }
  class s extends u {
    constructor() {
      super();
    }
  }
  class i {
    visit(o) {
      return Array.isArray(o) ? o.map(function(h) {
        return h.accept(this);
      }, this) : o.accept(this);
    }
    visitChildren(o) {
      return o.children ? this.visit(o.children) : null;
    }
    visitTerminal(o) {
    }
    visitErrorNode(o) {
    }
  }
  class n {
    visitTerminal(o) {
    }
    visitErrorNode(o) {
    }
    enterEveryRule(o) {
    }
    exitEveryRule(o) {
    }
  }
  class l extends u {
    constructor(o) {
      super(), this.parentCtx = null, this.symbol = o;
    }
    getChild(o) {
      return null;
    }
    getSymbol() {
      return this.symbol;
    }
    getParent() {
      return this.parentCtx;
    }
    getPayload() {
      return this.symbol;
    }
    getSourceInterval() {
      if (this.symbol === null)
        return _;
      const o = this.symbol.tokenIndex;
      return new g(o, o);
    }
    getChildCount() {
      return 0;
    }
    accept(o) {
      return o.visitTerminal(this);
    }
    getText() {
      return this.symbol.text;
    }
    toString() {
      return this.symbol.type === f.EOF ? "<EOF>" : this.symbol.text;
    }
  }
  class t extends l {
    constructor(o) {
      super(o);
    }
    isErrorNode() {
      return !0;
    }
    accept(o) {
      return o.visitErrorNode(this);
    }
  }
  class m {
    /**
     * Performs a walk on the given parse tree starting at the root and going down recursively
     * with depth-first search. On each node, {@link ParseTreeWalker//enterRule} is called before
     * recursively walking down into child nodes, then
     * {@link ParseTreeWalker//exitRule} is called after the recursive call to wind up.
     * @param listener The listener used by the walker to process grammar rules
     * @param t The parse tree to be walked on
     */
    walk(o, h) {
      if (h instanceof s || h.isErrorNode !== void 0 && h.isErrorNode())
        o.visitErrorNode(h);
      else if (h instanceof u)
        o.visitTerminal(h);
      else {
        this.enterRule(o, h);
        for (let y = 0; y < h.getChildCount(); y++) {
          const T = h.getChild(y);
          this.walk(o, T);
        }
        this.exitRule(o, h);
      }
    }
    /**
     * Enters a grammar rule by first triggering the generic event {@link ParseTreeListener//enterEveryRule}
     * then by triggering the event specific to the given parse tree node
     * @param listener The listener responding to the trigger events
     * @param r The grammar rule containing the rule context
     */
    enterRule(o, h) {
      const c = h.getRuleContext();
      o.enterEveryRule(c), c.enterRule(o);
    }
    /**
     * Exits a grammar rule by first triggering the event specific to the given parse tree node
     * then by triggering the generic event {@link ParseTreeListener//exitEveryRule}
     * @param listener The listener responding to the trigger events
     * @param r The grammar rule containing the rule context
     */
    exitRule(o, h) {
      const c = h.getRuleContext();
      c.exitRule(o), o.exitEveryRule(c);
    }
  }
  return m.DEFAULT = new m(), rt = {
    RuleNode: e,
    ErrorNode: s,
    TerminalNode: u,
    ErrorNodeImpl: t,
    TerminalNodeImpl: l,
    ParseTreeListener: n,
    ParseTreeVisitor: i,
    ParseTreeWalker: m,
    INVALID_INTERVAL: _
  }, rt;
}
var ut, Wn;
function Ds() {
  if (Wn) return ut;
  Wn = 1;
  const f = ce(), { Token: g } = ue(), { ErrorNode: _, TerminalNode: p, RuleNode: a } = Me(), r = {
    /**
     * Print out a whole tree in LISP form. {@link //getNodeText} is used on the
     *  node payloads to get the text for the nodes.  Detect
     *  parse trees and extract data appropriately.
     */
    toStringTree: function(e, u, s) {
      u = u || null, s = s || null, s !== null && (u = s.ruleNames);
      let i = r.getNodeText(e, u);
      i = f.escapeWhitespace(i, !1);
      const n = e.getChildCount();
      if (n === 0)
        return i;
      let l = "(" + i + " ";
      n > 0 && (i = r.toStringTree(e.getChild(0), u), l = l.concat(i));
      for (let t = 1; t < n; t++)
        i = r.toStringTree(e.getChild(t), u), l = l.concat(" " + i);
      return l = l.concat(")"), l;
    },
    getNodeText: function(e, u, s) {
      if (u = u || null, s = s || null, s !== null && (u = s.ruleNames), u !== null)
        if (e instanceof a) {
          const l = e.getRuleContext().getAltNumber();
          return l != 0 ? u[e.ruleIndex] + ":" + l : u[e.ruleIndex];
        } else {
          if (e instanceof _)
            return e.toString();
          if (e instanceof p && e.symbol !== null)
            return e.symbol.text;
        }
      const i = e.getPayload();
      return i instanceof g ? i.text : e.getPayload().toString();
    },
    /**
     * Return ordered list of all children of this node
     */
    getChildren: function(e) {
      const u = [];
      for (let s = 0; s < e.getChildCount(); s++)
        u.push(e.getChild(s));
      return u;
    },
    /**
     * Return a list of all ancestors of this node.  The first node of
     * list is the root and the last is the parent of this node.
     */
    getAncestors: function(e) {
      let u = [];
      for (e = e.getParent(); e !== null; )
        u = [e].concat(u), e = e.getParent();
      return u;
    },
    findAllTokenNodes: function(e, u) {
      return r.findAllNodes(e, u, !0);
    },
    findAllRuleNodes: function(e, u) {
      return r.findAllNodes(e, u, !1);
    },
    findAllNodes: function(e, u, s) {
      const i = [];
      return r._findAllNodes(e, u, s, i), i;
    },
    _findAllNodes: function(e, u, s, i) {
      s && e instanceof p ? e.symbol.type === u && i.push(e) : !s && e instanceof a && e.ruleIndex === u && i.push(e);
      for (let n = 0; n < e.getChildCount(); n++)
        r._findAllNodes(e.getChild(n), u, s, i);
    },
    descendants: function(e) {
      let u = [e];
      for (let s = 0; s < e.getChildCount(); s++)
        u = u.concat(r.descendants(e.getChild(s)));
      return u;
    }
  };
  return ut = r, ut;
}
var at, Jn;
function On() {
  if (Jn) return at;
  Jn = 1;
  const { RuleNode: f } = Me(), { INVALID_INTERVAL: g } = Me(), _ = Ds();
  class p extends f {
    /** A rule context is a record of a single rule invocation. It knows
     * which context invoked it, if any. If there is no parent context, then
     * naturally the invoking state is not valid.  The parent link
     * provides a chain upwards from the current rule invocation to the root
     * of the invocation tree, forming a stack. We actually carry no
     * information about the rule associated with this context (except
     * when parsing). We keep only the state number of the invoking state from
     * the ATN submachine that invoked this. Contrast this with the s
     * pointer inside ParserRuleContext that tracks the current state
     * being "executed" for the current rule.
     *
     * The parent contexts are useful for computing lookahead sets and
     * getting error information.
     *
     * These objects are used during parsing and prediction.
     * For the special case of parsers, we use the subclass
     * ParserRuleContext.
     *
     * @see ParserRuleContext
     */
    constructor(r, e) {
      super(), this.parentCtx = r || null, this.invokingState = e || -1;
    }
    depth() {
      let r = 0, e = this;
      for (; e !== null; )
        e = e.parentCtx, r += 1;
      return r;
    }
    /**
     * A context is empty if there is no invoking state; meaning nobody call
     * current context.
     */
    isEmpty() {
      return this.invokingState === -1;
    }
    // satisfy the ParseTree / SyntaxTree interface
    getSourceInterval() {
      return g;
    }
    getRuleContext() {
      return this;
    }
    getPayload() {
      return this;
    }
    /**
     * Return the combined text of all child nodes. This method only considers
     * tokens which have been added to the parse tree.
     * <p>
     * Since tokens on hidden channels (e.g. whitespace or comments) are not
     * added to the parse trees, they will not appear in the output of this
     * method.
     */
    getText() {
      return this.getChildCount() === 0 ? "" : this.children.map(function(r) {
        return r.getText();
      }).join("");
    }
    /**
     * For rule associated with this parse tree internal node, return
     * the outer alternative number used to match the input. Default
     * implementation does not compute nor store this alt num. Create
     * a subclass of ParserRuleContext with backing field and set
     * option contextSuperClass.
     * to set it.
     */
    getAltNumber() {
      return 0;
    }
    /**
     * Set the outer alternative number for this context node. Default
     * implementation does nothing to avoid backing field overhead for
     * trees that don't need it.  Create
     * a subclass of ParserRuleContext with backing field and set
     * option contextSuperClass.
     */
    setAltNumber(r) {
    }
    getChild(r) {
      return null;
    }
    getChildCount() {
      return 0;
    }
    accept(r) {
      return r.visitChildren(this);
    }
    /**
     * Print out a whole tree, not just a node, in LISP format
     * (root child1 .. childN). Print just a node if this is a leaf.
     */
    toStringTree(r, e) {
      return _.toStringTree(this, r, e);
    }
    toString(r, e) {
      r = r || null, e = e || null;
      let u = this, s = "[";
      for (; u !== null && u !== e; ) {
        if (r === null)
          u.isEmpty() || (s += u.invokingState);
        else {
          const i = u.ruleIndex, n = i >= 0 && i < r.length ? r[i] : "" + i;
          s += n;
        }
        u.parentCtx !== null && (r !== null || !u.parentCtx.isEmpty()) && (s += " "), u = u.parentCtx;
      }
      return s += "]", s;
    }
  }
  return at = p, at;
}
var ot, Yn;
function Le() {
  if (Yn) return ot;
  Yn = 1;
  const f = On(), { Hash: g, Map: _, equalArrays: p } = ce();
  class a {
    constructor(c) {
      this.cachedHashCode = c;
    }
    /**
     * Stores the computed hash code of this {@link PredictionContext}. The hash
     * code is computed in parts to match the following reference algorithm.
     *
     * <pre>
     * private int referenceHashCode() {
     * int hash = {@link MurmurHash//initialize MurmurHash.initialize}({@link
     * //INITIAL_HASH});
     *
     * for (int i = 0; i &lt; {@link //size()}; i++) {
     * hash = {@link MurmurHash//update MurmurHash.update}(hash, {@link //getParent
     * getParent}(i));
     * }
     *
     * for (int i = 0; i &lt; {@link //size()}; i++) {
     * hash = {@link MurmurHash//update MurmurHash.update}(hash, {@link
     * //getReturnState getReturnState}(i));
     * }
     *
     * hash = {@link MurmurHash//finish MurmurHash.finish}(hash, 2// {@link
     * //size()});
     * return hash;
     * }
     * </pre>
     * This means only the {@link //EMPTY} context is in set.
     */
    isEmpty() {
      return this === a.EMPTY;
    }
    hasEmptyPath() {
      return this.getReturnState(this.length - 1) === a.EMPTY_RETURN_STATE;
    }
    hashCode() {
      return this.cachedHashCode;
    }
    updateHashCode(c) {
      c.update(this.cachedHashCode);
    }
  }
  a.EMPTY = null, a.EMPTY_RETURN_STATE = 2147483647, a.globalNodeCount = 1, a.id = a.globalNodeCount;
  class r {
    constructor() {
      this.cache = new _();
    }
    /**
     * Add a context to the cache and return it. If the context already exists,
     * return that one instead and do not add a new context to the cache.
     * Protect shared cache from unsafe thread access.
     */
    add(c) {
      if (c === a.EMPTY)
        return a.EMPTY;
      const y = this.cache.get(c) || null;
      return y !== null ? y : (this.cache.put(c, c), c);
    }
    get(c) {
      return this.cache.get(c) || null;
    }
    get length() {
      return this.cache.length;
    }
  }
  class e extends a {
    constructor(c, y) {
      let T = 0;
      const N = new g();
      c !== null ? N.update(c, y) : N.update(1), T = N.finish(), super(T), this.parentCtx = c, this.returnState = y;
    }
    getParent(c) {
      return this.parentCtx;
    }
    getReturnState(c) {
      return this.returnState;
    }
    equals(c) {
      return this === c ? !0 : c instanceof e ? this.hashCode() !== c.hashCode() || this.returnState !== c.returnState ? !1 : this.parentCtx == null ? c.parentCtx == null : this.parentCtx.equals(c.parentCtx) : !1;
    }
    toString() {
      const c = this.parentCtx === null ? "" : this.parentCtx.toString();
      return c.length === 0 ? this.returnState === a.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : "" + this.returnState + " " + c;
    }
    get length() {
      return 1;
    }
    static create(c, y) {
      return y === a.EMPTY_RETURN_STATE && c === null ? a.EMPTY : new e(c, y);
    }
  }
  class u extends e {
    constructor() {
      super(null, a.EMPTY_RETURN_STATE);
    }
    isEmpty() {
      return !0;
    }
    getParent(c) {
      return null;
    }
    getReturnState(c) {
      return this.returnState;
    }
    equals(c) {
      return this === c;
    }
    toString() {
      return "$";
    }
  }
  a.EMPTY = new u();
  class s extends a {
    constructor(c, y) {
      const T = new g();
      T.update(c, y);
      const N = T.finish();
      return super(N), this.parents = c, this.returnStates = y, this;
    }
    isEmpty() {
      return this.returnStates[0] === a.EMPTY_RETURN_STATE;
    }
    getParent(c) {
      return this.parents[c];
    }
    getReturnState(c) {
      return this.returnStates[c];
    }
    equals(c) {
      return this === c ? !0 : c instanceof s ? this.hashCode() !== c.hashCode() ? !1 : p(this.returnStates, c.returnStates) && p(this.parents, c.parents) : !1;
    }
    toString() {
      if (this.isEmpty())
        return "[]";
      {
        let c = "[";
        for (let y = 0; y < this.returnStates.length; y++) {
          if (y > 0 && (c = c + ", "), this.returnStates[y] === a.EMPTY_RETURN_STATE) {
            c = c + "$";
            continue;
          }
          c = c + this.returnStates[y], this.parents[y] !== null ? c = c + " " + this.parents[y] : c = c + "null";
        }
        return c + "]";
      }
    }
    get length() {
      return this.returnStates.length;
    }
  }
  function i(h, c) {
    if (c == null && (c = f.EMPTY), c.parentCtx === null || c === f.EMPTY)
      return a.EMPTY;
    const y = i(h, c.parentCtx), N = h.states[c.invokingState].transitions[0];
    return e.create(y, N.followState.stateNumber);
  }
  function n(h, c, y, T) {
    if (h === c)
      return h;
    if (h instanceof e && c instanceof e)
      return l(h, c, y, T);
    if (y) {
      if (h instanceof u)
        return h;
      if (c instanceof u)
        return c;
    }
    return h instanceof e && (h = new s([h.getParent()], [h.returnState])), c instanceof e && (c = new s([c.getParent()], [c.returnState])), m(h, c, y, T);
  }
  function l(h, c, y, T) {
    if (T !== null) {
      let O = T.get(h, c);
      if (O !== null || (O = T.get(c, h), O !== null))
        return O;
    }
    const N = t(h, c, y);
    if (N !== null)
      return T !== null && T.set(h, c, N), N;
    if (h.returnState === c.returnState) {
      const O = n(h.parentCtx, c.parentCtx, y, T);
      if (O === h.parentCtx)
        return h;
      if (O === c.parentCtx)
        return c;
      const P = e.create(O, h.returnState);
      return T !== null && T.set(h, c, P), P;
    } else {
      let O = null;
      if ((h === c || h.parentCtx !== null && h.parentCtx === c.parentCtx) && (O = h.parentCtx), O !== null) {
        const F = [h.returnState, c.returnState];
        h.returnState > c.returnState && (F[0] = c.returnState, F[1] = h.returnState);
        const B = [O, O], $ = new s(B, F);
        return T !== null && T.set(h, c, $), $;
      }
      const P = [h.returnState, c.returnState];
      let z = [h.parentCtx, c.parentCtx];
      h.returnState > c.returnState && (P[0] = c.returnState, P[1] = h.returnState, z = [c.parentCtx, h.parentCtx]);
      const D = new s(z, P);
      return T !== null && T.set(h, c, D), D;
    }
  }
  function t(h, c, y) {
    if (y) {
      if (h === a.EMPTY || c === a.EMPTY)
        return a.EMPTY;
    } else {
      if (h === a.EMPTY && c === a.EMPTY)
        return a.EMPTY;
      if (h === a.EMPTY) {
        const T = [
          c.returnState,
          a.EMPTY_RETURN_STATE
        ], N = [c.parentCtx, null];
        return new s(N, T);
      } else if (c === a.EMPTY) {
        const T = [h.returnState, a.EMPTY_RETURN_STATE], N = [h.parentCtx, null];
        return new s(N, T);
      }
    }
    return null;
  }
  function m(h, c, y, T) {
    if (T !== null) {
      let B = T.get(h, c);
      if (B !== null || (B = T.get(c, h), B !== null))
        return B;
    }
    let N = 0, O = 0, P = 0, z = [], D = [];
    for (; N < h.returnStates.length && O < c.returnStates.length; ) {
      const B = h.parents[N], $ = c.parents[O];
      if (h.returnStates[N] === c.returnStates[O]) {
        const I = h.returnStates[N];
        I === a.EMPTY_RETURN_STATE && B === null && $ === null || B !== null && $ !== null && B === $ ? (D[P] = B, z[P] = I) : (D[P] = n(B, $, y, T), z[P] = I), N += 1, O += 1;
      } else h.returnStates[N] < c.returnStates[O] ? (D[P] = B, z[P] = h.returnStates[N], N += 1) : (D[P] = $, z[P] = c.returnStates[O], O += 1);
      P += 1;
    }
    if (N < h.returnStates.length)
      for (let B = N; B < h.returnStates.length; B++)
        D[P] = h.parents[B], z[P] = h.returnStates[B], P += 1;
    else
      for (let B = O; B < c.returnStates.length; B++)
        D[P] = c.parents[B], z[P] = c.returnStates[B], P += 1;
    if (P < D.length) {
      if (P === 1) {
        const B = e.create(
          D[0],
          z[0]
        );
        return T !== null && T.set(h, c, B), B;
      }
      D = D.slice(0, P), z = z.slice(0, P);
    }
    const F = new s(D, z);
    return F === h ? (T !== null && T.set(h, c, h), h) : F === c ? (T !== null && T.set(h, c, c), c) : (d(D), T !== null && T.set(h, c, F), F);
  }
  function d(h) {
    const c = new _();
    for (let y = 0; y < h.length; y++) {
      const T = h[y];
      c.containsKey(T) || c.put(T, T);
    }
    for (let y = 0; y < h.length; y++)
      h[y] = c.get(h[y]);
  }
  function o(h, c, y) {
    if (h.isEmpty())
      return h;
    let T = y.get(h) || null;
    if (T !== null)
      return T;
    if (T = c.get(h), T !== null)
      return y.put(h, T), T;
    let N = !1, O = [];
    for (let z = 0; z < O.length; z++) {
      const D = o(h.getParent(z), c, y);
      if (N || D !== h.getParent(z)) {
        if (!N) {
          O = [];
          for (let F = 0; F < h.length; F++)
            O[F] = h.getParent(F);
          N = !0;
        }
        O[z] = D;
      }
    }
    if (!N)
      return c.add(h), y.put(h, h), h;
    let P = null;
    return O.length === 0 ? P = a.EMPTY : O.length === 1 ? P = e.create(O[0], h.getReturnState(0)) : P = new s(O, h.returnStates), c.add(P), y.put(P, P), y.put(h, P), P;
  }
  return ot = {
    merge: n,
    PredictionContext: a,
    PredictionContextCache: r,
    SingletonPredictionContext: e,
    predictionContextFromRuleContext: i,
    getCachedPredictionContext: o
  }, ot;
}
var ct, Zn;
function qs() {
  if (Zn) return ct;
  Zn = 1;
  const { Set: f, BitSet: g } = ce(), { Token: _ } = ue(), { ATNConfig: p } = Ye(), { IntervalSet: a } = pe(), { RuleStopState: r } = be(), { RuleTransition: e, NotSetTransition: u, WildcardTransition: s, AbstractPredicateTransition: i } = Ge(), { predictionContextFromRuleContext: n, PredictionContext: l, SingletonPredictionContext: t } = Le();
  class m {
    constructor(o) {
      this.atn = o;
    }
    /**
     * Calculates the SLL(1) expected lookahead set for each outgoing transition
     * of an {@link ATNState}. The returned array has one element for each
     * outgoing transition in {@code s}. If the closure from transition
     * <em>i</em> leads to a semantic predicate before matching a symbol, the
     * element at index <em>i</em> of the result will be {@code null}.
     *
     * @param s the ATN state
     * @return the expected symbols for each outgoing transition of {@code s}.
     */
    getDecisionLookahead(o) {
      if (o === null)
        return null;
      const h = o.transitions.length, c = [];
      for (let y = 0; y < h; y++) {
        c[y] = new a();
        const T = new f();
        this._LOOK(
          o.transition(y).target,
          null,
          l.EMPTY,
          c[y],
          T,
          new g(),
          !1,
          !1
        ), (c[y].length === 0 || c[y].contains(m.HIT_PRED)) && (c[y] = null);
      }
      return c;
    }
    /**
     * Compute set of tokens that can follow {@code s} in the ATN in the
     * specified {@code ctx}.
     *
     * <p>If {@code ctx} is {@code null} and the end of the rule containing
     * {@code s} is reached, {@link Token//EPSILON} is added to the result set.
     * If {@code ctx} is not {@code null} and the end of the outermost rule is
     * reached, {@link Token//EOF} is added to the result set.</p>
     *
     * @param s the ATN state
     * @param stopState the ATN state to stop at. This can be a
     * {@link BlockEndState} to detect epsilon paths through a closure.
     * @param ctx the complete parser context, or {@code null} if the context
     * should be ignored
     *
     * @return The set of tokens that can follow {@code s} in the ATN in the
     * specified {@code ctx}.
     */
    LOOK(o, h, c) {
      const y = new a(), T = !0;
      c = c || null;
      const N = c !== null ? n(o.atn, c) : null;
      return this._LOOK(o, h, N, y, new f(), new g(), T, !0), y;
    }
    /**
     * Compute set of tokens that can follow {@code s} in the ATN in the
     * specified {@code ctx}.
     *
     * <p>If {@code ctx} is {@code null} and {@code stopState} or the end of the
     * rule containing {@code s} is reached, {@link Token//EPSILON} is added to
     * the result set. If {@code ctx} is not {@code null} and {@code addEOF} is
     * {@code true} and {@code stopState} or the end of the outermost rule is
     * reached, {@link Token//EOF} is added to the result set.</p>
     *
     * @param s the ATN state.
     * @param stopState the ATN state to stop at. This can be a
     * {@link BlockEndState} to detect epsilon paths through a closure.
     * @param ctx The outer context, or {@code null} if the outer context should
     * not be used.
     * @param look The result lookahead set.
     * @param lookBusy A set used for preventing epsilon closures in the ATN
     * from causing a stack overflow. Outside code should pass
     * {@code new Set<ATNConfig>} for this argument.
     * @param calledRuleStack A set used for preventing left recursion in the
     * ATN from causing a stack overflow. Outside code should pass
     * {@code new BitSet()} for this argument.
     * @param seeThruPreds {@code true} to true semantic predicates as
     * implicitly {@code true} and "see through them", otherwise {@code false}
     * to treat semantic predicates as opaque and add {@link //HIT_PRED} to the
     * result if one is encountered.
     * @param addEOF Add {@link Token//EOF} to the result if the end of the
     * outermost context is reached. This parameter has no effect if {@code ctx}
     * is {@code null}.
     */
    _LOOK(o, h, c, y, T, N, O, P) {
      const z = new p({ state: o, alt: 0, context: c }, null);
      if (!T.contains(z)) {
        if (T.add(z), o === h) {
          if (c === null) {
            y.addOne(_.EPSILON);
            return;
          } else if (c.isEmpty() && P) {
            y.addOne(_.EOF);
            return;
          }
        }
        if (o instanceof r) {
          if (c === null) {
            y.addOne(_.EPSILON);
            return;
          } else if (c.isEmpty() && P) {
            y.addOne(_.EOF);
            return;
          }
          if (c !== l.EMPTY) {
            const D = N.contains(o.ruleIndex);
            try {
              N.remove(o.ruleIndex);
              for (let F = 0; F < c.length; F++) {
                const B = this.atn.states[c.getReturnState(F)];
                this._LOOK(B, h, c.getParent(F), y, T, N, O, P);
              }
            } finally {
              D && N.add(o.ruleIndex);
            }
            return;
          }
        }
        for (let D = 0; D < o.transitions.length; D++) {
          const F = o.transitions[D];
          if (F.constructor === e) {
            if (N.contains(F.target.ruleIndex))
              continue;
            const B = t.create(c, F.followState.stateNumber);
            try {
              N.add(F.target.ruleIndex), this._LOOK(F.target, h, B, y, T, N, O, P);
            } finally {
              N.remove(F.target.ruleIndex);
            }
          } else if (F instanceof i)
            O ? this._LOOK(F.target, h, c, y, T, N, O, P) : y.addOne(m.HIT_PRED);
          else if (F.isEpsilon)
            this._LOOK(F.target, h, c, y, T, N, O, P);
          else if (F.constructor === s)
            y.addRange(_.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
          else {
            let B = F.label;
            B !== null && (F instanceof u && (B = B.complement(_.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), y.addSet(B));
          }
        }
      }
    }
  }
  return m.HIT_PRED = _.INVALID_TYPE, ct = m, ct;
}
var ft, Qn;
function Ee() {
  if (Qn) return ft;
  Qn = 1;
  const f = qs(), { IntervalSet: g } = pe(), { Token: _ } = ue();
  class p {
    constructor(r, e) {
      this.grammarType = r, this.maxTokenType = e, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = [];
    }
    /**
     * Compute the set of valid tokens that can occur starting in state {@code s}.
     * If {@code ctx} is null, the set of tokens will not include what can follow
     * the rule surrounding {@code s}. In other words, the set will be
     * restricted to tokens reachable staying within {@code s}'s rule
     */
    nextTokensInContext(r, e) {
      return new f(this).LOOK(r, null, e);
    }
    /**
     * Compute the set of valid tokens that can occur starting in {@code s} and
     * staying in same rule. {@link Token//EPSILON} is in set if we reach end of
     * rule
     */
    nextTokensNoContext(r) {
      return r.nextTokenWithinRule !== null || (r.nextTokenWithinRule = this.nextTokensInContext(r, null), r.nextTokenWithinRule.readOnly = !0), r.nextTokenWithinRule;
    }
    nextTokens(r, e) {
      return e === void 0 ? this.nextTokensNoContext(r) : this.nextTokensInContext(r, e);
    }
    addState(r) {
      r !== null && (r.atn = this, r.stateNumber = this.states.length), this.states.push(r);
    }
    removeState(r) {
      this.states[r.stateNumber] = null;
    }
    defineDecisionState(r) {
      return this.decisionToState.push(r), r.decision = this.decisionToState.length - 1, r.decision;
    }
    getDecisionState(r) {
      return this.decisionToState.length === 0 ? null : this.decisionToState[r];
    }
    /**
     * Computes the set of input symbols which could follow ATN state number
     * {@code stateNumber} in the specified full {@code context}. This method
     * considers the complete parser context, but does not evaluate semantic
     * predicates (i.e. all predicates encountered during the calculation are
     * assumed true). If a path in the ATN exists from the starting state to the
     * {@link RuleStopState} of the outermost context without matching any
     * symbols, {@link Token//EOF} is added to the returned set.
     *
     * <p>If {@code context} is {@code null}, it is treated as
     * {@link ParserRuleContext//EMPTY}.</p>
     *
     * @param stateNumber the ATN state number
     * @param ctx the full parse context
     *
     * @return {IntervalSet} The set of potentially valid input symbols which could follow the
     * specified state in the specified context.
     *
     * @throws IllegalArgumentException if the ATN does not contain a state with
     * number {@code stateNumber}
     */
    getExpectedTokens(r, e) {
      if (r < 0 || r >= this.states.length)
        throw "Invalid state number.";
      const u = this.states[r];
      let s = this.nextTokens(u);
      if (!s.contains(_.EPSILON))
        return s;
      const i = new g();
      for (i.addSet(s), i.removeOne(_.EPSILON); e !== null && e.invokingState >= 0 && s.contains(_.EPSILON); ) {
        const l = this.states[e.invokingState].transitions[0];
        s = this.nextTokens(l.followState), i.addSet(s), i.removeOne(_.EPSILON), e = e.parentCtx;
      }
      return s.contains(_.EPSILON) && i.addOne(_.EOF), i;
    }
  }
  return p.INVALID_ALT_NUMBER = 0, ft = p, ft;
}
var mt, Xn;
function Ui() {
  return Xn || (Xn = 1, mt = {
    LEXER: 0,
    PARSER: 1
  }), mt;
}
var ht, el;
function Bs() {
  if (el) return ht;
  el = 1;
  class f {
    constructor(_) {
      _ === void 0 && (_ = null), this.readOnly = !1, this.verifyATN = _ === null ? !0 : _.verifyATN, this.generateRuleBypassTransitions = _ === null ? !1 : _.generateRuleBypassTransitions;
    }
  }
  return f.defaultOptions = new f(), f.defaultOptions.readOnly = !0, ht = f, ht;
}
var dt, tl;
function Hs() {
  if (tl) return dt;
  tl = 1;
  const f = {
    // The type of a {@link LexerChannelAction} action.
    CHANNEL: 0,
    // The type of a {@link LexerCustomAction} action
    CUSTOM: 1,
    // The type of a {@link LexerModeAction} action.
    MODE: 2,
    //The type of a {@link LexerMoreAction} action.
    MORE: 3,
    //The type of a {@link LexerPopModeAction} action.
    POP_MODE: 4,
    //The type of a {@link LexerPushModeAction} action.
    PUSH_MODE: 5,
    //The type of a {@link LexerSkipAction} action.
    SKIP: 6,
    //The type of a {@link LexerTypeAction} action.
    TYPE: 7
  };
  class g {
    constructor(t) {
      this.actionType = t, this.isPositionDependent = !1;
    }
    hashCode() {
      const t = new Hash();
      return this.updateHashCode(t), t.finish();
    }
    updateHashCode(t) {
      t.update(this.actionType);
    }
    equals(t) {
      return this === t;
    }
  }
  class _ extends g {
    constructor() {
      super(f.SKIP);
    }
    execute(t) {
      t.skip();
    }
    toString() {
      return "skip";
    }
  }
  _.INSTANCE = new _();
  class p extends g {
    constructor(t) {
      super(f.TYPE), this.type = t;
    }
    execute(t) {
      t.type = this.type;
    }
    updateHashCode(t) {
      t.update(this.actionType, this.type);
    }
    equals(t) {
      return this === t ? !0 : t instanceof p ? this.type === t.type : !1;
    }
    toString() {
      return "type(" + this.type + ")";
    }
  }
  class a extends g {
    constructor(t) {
      super(f.PUSH_MODE), this.mode = t;
    }
    /**
     * <p>This action is implemented by calling {@link Lexer//pushMode} with the
     * value provided by {@link //getMode}.</p>
     */
    execute(t) {
      t.pushMode(this.mode);
    }
    updateHashCode(t) {
      t.update(this.actionType, this.mode);
    }
    equals(t) {
      return this === t ? !0 : t instanceof a ? this.mode === t.mode : !1;
    }
    toString() {
      return "pushMode(" + this.mode + ")";
    }
  }
  class r extends g {
    constructor() {
      super(f.POP_MODE);
    }
    /**
     * <p>This action is implemented by calling {@link Lexer//popMode}.</p>
     */
    execute(t) {
      t.popMode();
    }
    toString() {
      return "popMode";
    }
  }
  r.INSTANCE = new r();
  class e extends g {
    constructor() {
      super(f.MORE);
    }
    /**
     * <p>This action is implemented by calling {@link Lexer//popMode}.</p>
     */
    execute(t) {
      t.more();
    }
    toString() {
      return "more";
    }
  }
  e.INSTANCE = new e();
  class u extends g {
    constructor(t) {
      super(f.MODE), this.mode = t;
    }
    /**
     * <p>This action is implemented by calling {@link Lexer//mode} with the
     * value provided by {@link //getMode}.</p>
     */
    execute(t) {
      t.mode(this.mode);
    }
    updateHashCode(t) {
      t.update(this.actionType, this.mode);
    }
    equals(t) {
      return this === t ? !0 : t instanceof u ? this.mode === t.mode : !1;
    }
    toString() {
      return "mode(" + this.mode + ")";
    }
  }
  class s extends g {
    /**
     * Constructs a custom lexer action with the specified rule and action
     * indexes.
     *
     * @param ruleIndex The rule index to use for calls to
     * {@link Recognizer//action}.
     * @param actionIndex The action index to use for calls to
     * {@link Recognizer//action}.
     */
    constructor(t, m) {
      super(f.CUSTOM), this.ruleIndex = t, this.actionIndex = m, this.isPositionDependent = !0;
    }
    /**
     * <p>Custom actions are implemented by calling {@link Lexer//action} with the
     * appropriate rule and action indexes.</p>
     */
    execute(t) {
      t.action(null, this.ruleIndex, this.actionIndex);
    }
    updateHashCode(t) {
      t.update(this.actionType, this.ruleIndex, this.actionIndex);
    }
    equals(t) {
      return this === t ? !0 : t instanceof s ? this.ruleIndex === t.ruleIndex && this.actionIndex === t.actionIndex : !1;
    }
  }
  class i extends g {
    constructor(t) {
      super(f.CHANNEL), this.channel = t;
    }
    /**
     * <p>This action is implemented by calling {@link Lexer//setChannel} with the
     * value provided by {@link //getChannel}.</p>
     */
    execute(t) {
      t._channel = this.channel;
    }
    updateHashCode(t) {
      t.update(this.actionType, this.channel);
    }
    equals(t) {
      return this === t ? !0 : t instanceof i ? this.channel === t.channel : !1;
    }
    toString() {
      return "channel(" + this.channel + ")";
    }
  }
  class n extends g {
    constructor(t, m) {
      super(m.actionType), this.offset = t, this.action = m, this.isPositionDependent = !0;
    }
    /**
     * <p>This method calls {@link //execute} on the result of {@link //getAction}
     * using the provided {@code lexer}.</p>
     */
    execute(t) {
      this.action.execute(t);
    }
    updateHashCode(t) {
      t.update(this.actionType, this.offset, this.action);
    }
    equals(t) {
      return this === t ? !0 : t instanceof n ? this.offset === t.offset && this.action === t.action : !1;
    }
  }
  return dt = {
    LexerActionType: f,
    LexerSkipAction: _,
    LexerChannelAction: i,
    LexerCustomAction: s,
    LexerIndexedCustomAction: n,
    LexerMoreAction: e,
    LexerTypeAction: p,
    LexerPushModeAction: a,
    LexerPopModeAction: r,
    LexerModeAction: u
  }, dt;
}
var pt, nl;
function Vs() {
  if (nl) return pt;
  nl = 1;
  const { Token: f } = ue(), g = Ee(), _ = Ui(), {
    ATNState: p,
    BasicState: a,
    DecisionState: r,
    BlockStartState: e,
    BlockEndState: u,
    LoopEndState: s,
    RuleStartState: i,
    RuleStopState: n,
    TokensStartState: l,
    PlusLoopbackState: t,
    StarLoopbackState: m,
    StarLoopEntryState: d,
    PlusBlockStartState: o,
    StarBlockStartState: h,
    BasicBlockStartState: c
  } = be(), {
    Transition: y,
    AtomTransition: T,
    SetTransition: N,
    NotSetTransition: O,
    RuleTransition: P,
    RangeTransition: z,
    ActionTransition: D,
    EpsilonTransition: F,
    WildcardTransition: B,
    PredicateTransition: $,
    PrecedencePredicateTransition: I
  } = Ge(), { IntervalSet: S } = pe(), C = Bs(), {
    LexerActionType: b,
    LexerSkipAction: v,
    LexerChannelAction: M,
    LexerCustomAction: A,
    LexerMoreAction: q,
    LexerTypeAction: H,
    LexerPushModeAction: Y,
    LexerPopModeAction: Z,
    LexerModeAction: Q
  } = Hs(), ee = "AADB8D7E-AEEF-4415-AD2B-8204D6CF042E", te = "59627784-3BE5-417A-B9EB-8131A7286089", ie = [ee, te], oe = 3, he = te;
  function de(W, E) {
    const k = [];
    return k[W - 1] = E, k.map(function(R) {
      return E;
    });
  }
  class G {
    constructor(E) {
      E == null && (E = C.defaultOptions), this.deserializationOptions = E, this.stateFactories = null, this.actionFactories = null;
    }
    /**
     * Determines if a particular serialized representation of an ATN supports
     * a particular feature, identified by the {@link UUID} used for serializing
     * the ATN at the time the feature was first introduced.
     *
     * @param feature The {@link UUID} marking the first time the feature was
     * supported in the serialized ATN.
     * @param actualUuid The {@link UUID} of the actual serialized ATN which is
     * currently being deserialized.
     * @return {@code true} if the {@code actualUuid} value represents a
     * serialized ATN at or after the feature identified by {@code feature} was
     * introduced; otherwise, {@code false}.
    */
    isFeatureSupported(E, k) {
      const R = ie.indexOf(E);
      return R < 0 ? !1 : ie.indexOf(k) >= R;
    }
    deserialize(E) {
      this.reset(E), this.checkVersion(), this.checkUUID();
      const k = this.readATN();
      this.readStates(k), this.readRules(k), this.readModes(k);
      const R = [];
      return this.readSets(k, R, this.readInt.bind(this)), this.isFeatureSupported(te, this.uuid) && this.readSets(k, R, this.readInt32.bind(this)), this.readEdges(k, R), this.readDecisions(k), this.readLexerActions(k), this.markPrecedenceDecisions(k), this.verifyATN(k), this.deserializationOptions.generateRuleBypassTransitions && k.grammarType === _.PARSER && (this.generateRuleBypassTransitions(k), this.verifyATN(k)), k;
    }
    reset(E) {
      const k = function(J) {
        const x = J.charCodeAt(0);
        return x > 1 ? x - 2 : x + 65534;
      }, R = E.split("").map(k);
      R[0] = E.charCodeAt(0), this.data = R, this.pos = 0;
    }
    checkVersion() {
      const E = this.readInt();
      if (E !== oe)
        throw "Could not deserialize ATN with version " + E + " (expected " + oe + ").";
    }
    checkUUID() {
      const E = this.readUUID();
      if (ie.indexOf(E) < 0)
        throw he;
      this.uuid = E;
    }
    readATN() {
      const E = this.readInt(), k = this.readInt();
      return new g(E, k);
    }
    readStates(E) {
      let k, R, J;
      const x = [], K = [], L = this.readInt();
      for (let X = 0; X < L; X++) {
        const ae = this.readInt();
        if (ae === p.INVALID_TYPE) {
          E.addState(null);
          continue;
        }
        let le = this.readInt();
        le === 65535 && (le = -1);
        const ne = this.stateFactory(ae, le);
        if (ae === p.LOOP_END) {
          const ye = this.readInt();
          x.push([ne, ye]);
        } else if (ne instanceof e) {
          const ye = this.readInt();
          K.push([ne, ye]);
        }
        E.addState(ne);
      }
      for (k = 0; k < x.length; k++)
        R = x[k], R[0].loopBackState = E.states[R[1]];
      for (k = 0; k < K.length; k++)
        R = K[k], R[0].endState = E.states[R[1]];
      let U = this.readInt();
      for (k = 0; k < U; k++)
        J = this.readInt(), E.states[J].nonGreedy = !0;
      let w = this.readInt();
      for (k = 0; k < w; k++)
        J = this.readInt(), E.states[J].isPrecedenceRule = !0;
    }
    readRules(E) {
      let k;
      const R = this.readInt();
      for (E.grammarType === _.LEXER && (E.ruleToTokenType = de(R, 0)), E.ruleToStartState = de(R, 0), k = 0; k < R; k++) {
        const J = this.readInt();
        if (E.ruleToStartState[k] = E.states[J], E.grammarType === _.LEXER) {
          let x = this.readInt();
          x === 65535 && (x = f.EOF), E.ruleToTokenType[k] = x;
        }
      }
      for (E.ruleToStopState = de(R, 0), k = 0; k < E.states.length; k++) {
        const J = E.states[k];
        J instanceof n && (E.ruleToStopState[J.ruleIndex] = J, E.ruleToStartState[J.ruleIndex].stopState = J);
      }
    }
    readModes(E) {
      const k = this.readInt();
      for (let R = 0; R < k; R++) {
        let J = this.readInt();
        E.modeToStartState.push(E.states[J]);
      }
    }
    readSets(E, k, R) {
      const J = this.readInt();
      for (let x = 0; x < J; x++) {
        const K = new S();
        k.push(K);
        const L = this.readInt();
        this.readInt() !== 0 && K.addOne(-1);
        for (let w = 0; w < L; w++) {
          const X = R(), ae = R();
          K.addRange(X, ae);
        }
      }
    }
    readEdges(E, k) {
      let R, J, x, K, L;
      const U = this.readInt();
      for (R = 0; R < U; R++) {
        const w = this.readInt(), X = this.readInt(), ae = this.readInt(), le = this.readInt(), ne = this.readInt(), ye = this.readInt();
        K = this.edgeFactory(E, ae, w, X, le, ne, ye, k), E.states[w].addTransition(K);
      }
      for (R = 0; R < E.states.length; R++)
        for (x = E.states[R], J = 0; J < x.transitions.length; J++) {
          const w = x.transitions[J];
          if (!(w instanceof P))
            continue;
          let X = -1;
          E.ruleToStartState[w.target.ruleIndex].isPrecedenceRule && w.precedence === 0 && (X = w.target.ruleIndex), K = new F(w.followState, X), E.ruleToStopState[w.target.ruleIndex].addTransition(K);
        }
      for (R = 0; R < E.states.length; R++) {
        if (x = E.states[R], x instanceof e) {
          if (x.endState === null || x.endState.startState !== null)
            throw "IllegalState";
          x.endState.startState = x;
        }
        if (x instanceof t)
          for (J = 0; J < x.transitions.length; J++)
            L = x.transitions[J].target, L instanceof o && (L.loopBackState = x);
        else if (x instanceof m)
          for (J = 0; J < x.transitions.length; J++)
            L = x.transitions[J].target, L instanceof d && (L.loopBackState = x);
      }
    }
    readDecisions(E) {
      const k = this.readInt();
      for (let R = 0; R < k; R++) {
        const J = this.readInt(), x = E.states[J];
        E.decisionToState.push(x), x.decision = R;
      }
    }
    readLexerActions(E) {
      if (E.grammarType === _.LEXER) {
        const k = this.readInt();
        E.lexerActions = de(k, null);
        for (let R = 0; R < k; R++) {
          const J = this.readInt();
          let x = this.readInt();
          x === 65535 && (x = -1);
          let K = this.readInt();
          K === 65535 && (K = -1), E.lexerActions[R] = this.lexerActionFactory(J, x, K);
        }
      }
    }
    generateRuleBypassTransitions(E) {
      let k;
      const R = E.ruleToStartState.length;
      for (k = 0; k < R; k++)
        E.ruleToTokenType[k] = E.maxTokenType + k + 1;
      for (k = 0; k < R; k++)
        this.generateRuleBypassTransition(E, k);
    }
    generateRuleBypassTransition(E, k) {
      let R, J;
      const x = new c();
      x.ruleIndex = k, E.addState(x);
      const K = new u();
      K.ruleIndex = k, E.addState(K), x.endState = K, E.defineDecisionState(x), K.startState = x;
      let L = null, U = null;
      if (E.ruleToStartState[k].isPrecedenceRule) {
        for (U = null, R = 0; R < E.states.length; R++)
          if (J = E.states[R], this.stateIsEndStateFor(J, k)) {
            U = J, L = J.loopBackState.transitions[0];
            break;
          }
        if (L === null)
          throw "Couldn't identify final state of the precedence rule prefix section.";
      } else
        U = E.ruleToStopState[k];
      for (R = 0; R < E.states.length; R++) {
        J = E.states[R];
        for (let le = 0; le < J.transitions.length; le++) {
          const ne = J.transitions[le];
          ne !== L && ne.target === U && (ne.target = K);
        }
      }
      const w = E.ruleToStartState[k], X = w.transitions.length;
      for (; X > 0; )
        x.addTransition(w.transitions[X - 1]), w.transitions = w.transitions.slice(-1);
      E.ruleToStartState[k].addTransition(new F(x)), K.addTransition(new F(U));
      const ae = new a();
      E.addState(ae), ae.addTransition(new T(K, E.ruleToTokenType[k])), x.addTransition(new F(ae));
    }
    stateIsEndStateFor(E, k) {
      if (E.ruleIndex !== k || !(E instanceof d))
        return null;
      const R = E.transitions[E.transitions.length - 1].target;
      return R instanceof s && R.epsilonOnlyTransitions && R.transitions[0].target instanceof n ? E : null;
    }
    /**
     * Analyze the {@link StarLoopEntryState} states in the specified ATN to set
     * the {@link StarLoopEntryState//isPrecedenceDecision} field to the
     * correct value.
     * @param atn The ATN.
     */
    markPrecedenceDecisions(E) {
      for (let k = 0; k < E.states.length; k++) {
        const R = E.states[k];
        if (R instanceof d && E.ruleToStartState[R.ruleIndex].isPrecedenceRule) {
          const J = R.transitions[R.transitions.length - 1].target;
          J instanceof s && J.epsilonOnlyTransitions && J.transitions[0].target instanceof n && (R.isPrecedenceDecision = !0);
        }
      }
    }
    verifyATN(E) {
      if (this.deserializationOptions.verifyATN)
        for (let k = 0; k < E.states.length; k++) {
          const R = E.states[k];
          if (R !== null)
            if (this.checkCondition(R.epsilonOnlyTransitions || R.transitions.length <= 1), R instanceof o)
              this.checkCondition(R.loopBackState !== null);
            else if (R instanceof d)
              if (this.checkCondition(R.loopBackState !== null), this.checkCondition(R.transitions.length === 2), R.transitions[0].target instanceof h)
                this.checkCondition(R.transitions[1].target instanceof s), this.checkCondition(!R.nonGreedy);
              else if (R.transitions[0].target instanceof s)
                this.checkCondition(R.transitions[1].target instanceof h), this.checkCondition(R.nonGreedy);
              else
                throw "IllegalState";
            else R instanceof m ? (this.checkCondition(R.transitions.length === 1), this.checkCondition(R.transitions[0].target instanceof d)) : R instanceof s ? this.checkCondition(R.loopBackState !== null) : R instanceof i ? this.checkCondition(R.stopState !== null) : R instanceof e ? this.checkCondition(R.endState !== null) : R instanceof u ? this.checkCondition(R.startState !== null) : R instanceof r ? this.checkCondition(R.transitions.length <= 1 || R.decision >= 0) : this.checkCondition(R.transitions.length <= 1 || R instanceof n);
        }
    }
    checkCondition(E, k) {
      if (!E)
        throw k == null && (k = "IllegalState"), k;
    }
    readInt() {
      return this.data[this.pos++];
    }
    readInt32() {
      const E = this.readInt(), k = this.readInt();
      return E | k << 16;
    }
    readLong() {
      const E = this.readInt32(), k = this.readInt32();
      return E & 4294967295 | k << 32;
    }
    readUUID() {
      const E = [];
      for (let k = 7; k >= 0; k--) {
        const R = this.readInt();
        E[2 * k + 1] = R & 255, E[2 * k] = R >> 8 & 255;
      }
      return V[E[0]] + V[E[1]] + V[E[2]] + V[E[3]] + "-" + V[E[4]] + V[E[5]] + "-" + V[E[6]] + V[E[7]] + "-" + V[E[8]] + V[E[9]] + "-" + V[E[10]] + V[E[11]] + V[E[12]] + V[E[13]] + V[E[14]] + V[E[15]];
    }
    edgeFactory(E, k, R, J, x, K, L, U) {
      const w = E.states[J];
      switch (k) {
        case y.EPSILON:
          return new F(w);
        case y.RANGE:
          return L !== 0 ? new z(w, f.EOF, K) : new z(w, x, K);
        case y.RULE:
          return new P(E.states[x], K, L, w);
        case y.PREDICATE:
          return new $(w, x, K, L !== 0);
        case y.PRECEDENCE:
          return new I(w, x);
        case y.ATOM:
          return L !== 0 ? new T(w, f.EOF) : new T(w, x);
        case y.ACTION:
          return new D(w, x, K, L !== 0);
        case y.SET:
          return new N(w, U[x]);
        case y.NOT_SET:
          return new O(w, U[x]);
        case y.WILDCARD:
          return new B(w);
        default:
          throw "The specified transition type: " + k + " is not valid.";
      }
    }
    stateFactory(E, k) {
      if (this.stateFactories === null) {
        const R = [];
        R[p.INVALID_TYPE] = null, R[p.BASIC] = () => new a(), R[p.RULE_START] = () => new i(), R[p.BLOCK_START] = () => new c(), R[p.PLUS_BLOCK_START] = () => new o(), R[p.STAR_BLOCK_START] = () => new h(), R[p.TOKEN_START] = () => new l(), R[p.RULE_STOP] = () => new n(), R[p.BLOCK_END] = () => new u(), R[p.STAR_LOOP_BACK] = () => new m(), R[p.STAR_LOOP_ENTRY] = () => new d(), R[p.PLUS_LOOP_BACK] = () => new t(), R[p.LOOP_END] = () => new s(), this.stateFactories = R;
      }
      if (E > this.stateFactories.length || this.stateFactories[E] === null)
        throw "The specified state type " + E + " is not valid.";
      {
        const R = this.stateFactories[E]();
        if (R !== null)
          return R.ruleIndex = k, R;
      }
    }
    lexerActionFactory(E, k, R) {
      if (this.actionFactories === null) {
        const J = [];
        J[b.CHANNEL] = (x, K) => new M(x), J[b.CUSTOM] = (x, K) => new A(x, K), J[b.MODE] = (x, K) => new Q(x), J[b.MORE] = (x, K) => q.INSTANCE, J[b.POP_MODE] = (x, K) => Z.INSTANCE, J[b.PUSH_MODE] = (x, K) => new Y(x), J[b.SKIP] = (x, K) => v.INSTANCE, J[b.TYPE] = (x, K) => new H(x), this.actionFactories = J;
      }
      if (E > this.actionFactories.length || this.actionFactories[E] === null)
        throw "The specified lexer action type " + E + " is not valid.";
      return this.actionFactories[E](k, R);
    }
  }
  function j() {
    const W = [];
    for (let E = 0; E < 256; E++)
      W[E] = (E + 256).toString(16).substr(1).toUpperCase();
    return W;
  }
  const V = j();
  return pt = G, pt;
}
var gt, ll;
function We() {
  if (ll) return gt;
  ll = 1;
  class f {
    syntaxError(a, r, e, u, s, i) {
    }
    reportAmbiguity(a, r, e, u, s, i, n) {
    }
    reportAttemptingFullContext(a, r, e, u, s, i) {
    }
    reportContextSensitivity(a, r, e, u, s, i) {
    }
  }
  class g extends f {
    constructor() {
      super();
    }
    syntaxError(a, r, e, u, s, i) {
      console.error("line " + e + ":" + u + " " + s);
    }
  }
  g.INSTANCE = new g();
  class _ extends f {
    constructor(a) {
      if (super(), a === null)
        throw "delegates";
      return this.delegates = a, this;
    }
    syntaxError(a, r, e, u, s, i) {
      this.delegates.map((n) => n.syntaxError(a, r, e, u, s, i));
    }
    reportAmbiguity(a, r, e, u, s, i, n) {
      this.delegates.map((l) => l.reportAmbiguity(a, r, e, u, s, i, n));
    }
    reportAttemptingFullContext(a, r, e, u, s, i) {
      this.delegates.map((n) => n.reportAttemptingFullContext(a, r, e, u, s, i));
    }
    reportContextSensitivity(a, r, e, u, s, i) {
      this.delegates.map((n) => n.reportContextSensitivity(a, r, e, u, s, i));
    }
  }
  return gt = { ErrorListener: f, ConsoleErrorListener: g, ProxyErrorListener: _ }, gt;
}
var yt, sl;
function Gs() {
  if (sl) return yt;
  sl = 1;
  const { Token: f } = ue(), { ConsoleErrorListener: g } = We(), { ProxyErrorListener: _ } = We();
  class p {
    constructor() {
      this._listeners = [g.INSTANCE], this._interp = null, this._stateNumber = -1;
    }
    checkVersion(r) {
      const e = "4.9.3";
      e !== r && console.log("ANTLR runtime and generated code versions disagree: " + e + "!=" + r);
    }
    addErrorListener(r) {
      this._listeners.push(r);
    }
    removeErrorListeners() {
      this._listeners = [];
    }
    getLiteralNames() {
      return Object.getPrototypeOf(this).constructor.literalNames || [];
    }
    getSymbolicNames() {
      return Object.getPrototypeOf(this).constructor.symbolicNames || [];
    }
    getTokenNames() {
      if (!this.tokenNames) {
        const r = this.getLiteralNames(), e = this.getSymbolicNames(), u = r.length > e.length ? r.length : e.length;
        this.tokenNames = [];
        for (let s = 0; s < u; s++)
          this.tokenNames[s] = r[s] || e[s] || "<INVALID";
      }
      return this.tokenNames;
    }
    getTokenTypeMap() {
      const r = this.getTokenNames();
      if (r === null)
        throw "The current recognizer does not provide a list of token names.";
      let e = this.tokenTypeMapCache[r];
      return e === void 0 && (e = r.reduce(function(u, s, i) {
        u[s] = i;
      }), e.EOF = f.EOF, this.tokenTypeMapCache[r] = e), e;
    }
    /**
     * Get a map from rule names to rule indexes.
     * <p>Used for XPath and tree pattern compilation.</p>
     */
    getRuleIndexMap() {
      const r = this.ruleNames;
      if (r === null)
        throw "The current recognizer does not provide a list of rule names.";
      let e = this.ruleIndexMapCache[r];
      return e === void 0 && (e = r.reduce(function(u, s, i) {
        u[s] = i;
      }), this.ruleIndexMapCache[r] = e), e;
    }
    getTokenType(r) {
      const e = this.getTokenTypeMap()[r];
      return e !== void 0 ? e : f.INVALID_TYPE;
    }
    // What is the error header, normally line/character position information?
    getErrorHeader(r) {
      const e = r.getOffendingToken().line, u = r.getOffendingToken().column;
      return "line " + e + ":" + u;
    }
    /**
     * How should a token be displayed in an error message? The default
     * is to display just the text, but during development you might
     * want to have a lot of information spit out.  Override in that case
     * to use t.toString() (which, for CommonToken, dumps everything about
     * the token). This is better than forcing you to override a method in
     * your token objects because you don't have to go modify your lexer
     * so that it creates a new Java type.
     *
     * @deprecated This method is not called by the ANTLR 4 Runtime. Specific
     * implementations of {@link ANTLRErrorStrategy} may provide a similar
     * feature when necessary. For example, see
     * {@link DefaultErrorStrategy//getTokenErrorDisplay}.*/
    getTokenErrorDisplay(r) {
      if (r === null)
        return "<no token>";
      let e = r.text;
      return e === null && (r.type === f.EOF ? e = "<EOF>" : e = "<" + r.type + ">"), e = e.replace(`
`, "\\n").replace("\r", "\\r").replace("	", "\\t"), "'" + e + "'";
    }
    getErrorListenerDispatch() {
      return new _(this._listeners);
    }
    /**
     * subclass needs to override these if there are sempreds or actions
     * that the ATN interp needs to execute
     */
    sempred(r, e, u) {
      return !0;
    }
    precpred(r, e) {
      return !0;
    }
    get state() {
      return this._stateNumber;
    }
    set state(r) {
      this._stateNumber = r;
    }
  }
  return p.tokenTypeMapCache = {}, p.ruleIndexMapCache = {}, yt = p, yt;
}
var Ct, il;
function xi() {
  if (il) return Ct;
  il = 1;
  const f = ue().CommonToken;
  class g {
  }
  class _ extends g {
    constructor(a) {
      super(), this.copyText = a === void 0 ? !1 : a;
    }
    create(a, r, e, u, s, i, n, l) {
      const t = new f(a, r, u, s, i);
      return t.line = n, t.column = l, e !== null ? t.text = e : this.copyText && a[1] !== null && (t.text = a[1].getText(s, i)), t;
    }
    createThin(a, r) {
      const e = new f(null, a);
      return e.text = r, e;
    }
  }
  return _.DEFAULT = new _(), Ct = _, Ct;
}
var _t, rl;
function Ce() {
  if (rl) return _t;
  rl = 1;
  const { PredicateTransition: f } = Ge(), { Interval: g } = pe().Interval;
  class _ extends Error {
    constructor(n) {
      super(n.message), Error.captureStackTrace ? Error.captureStackTrace(this, _) : new Error().stack, this.message = n.message, this.recognizer = n.recognizer, this.input = n.input, this.ctx = n.ctx, this.offendingToken = null, this.offendingState = -1, this.recognizer !== null && (this.offendingState = this.recognizer.state);
    }
    /**
     * Gets the set of input symbols which could potentially follow the
     * previously matched symbol at the time this exception was thrown.
     *
     * <p>If the set of expected tokens is not known and could not be computed,
     * this method returns {@code null}.</p>
     *
     * @return The set of token types that could potentially follow the current
     * state in the ATN, or {@code null} if the information is not available.
     */
    getExpectedTokens() {
      return this.recognizer !== null ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null;
    }
    // <p>If the state number is not known, this method returns -1.</p>
    toString() {
      return this.message;
    }
  }
  class p extends _ {
    constructor(n, l, t, m) {
      super({ message: "", recognizer: n, input: l, ctx: null }), this.startIndex = t, this.deadEndConfigs = m;
    }
    toString() {
      let n = "";
      return this.startIndex >= 0 && this.startIndex < this.input.size && (n = this.input.getText(new g(this.startIndex, this.startIndex))), "LexerNoViableAltException" + n;
    }
  }
  class a extends _ {
    constructor(n, l, t, m, d, o) {
      o = o || n._ctx, m = m || n.getCurrentToken(), t = t || n.getCurrentToken(), l = l || n.getInputStream(), super({ message: "", recognizer: n, input: l, ctx: o }), this.deadEndConfigs = d, this.startToken = t, this.offendingToken = m;
    }
  }
  class r extends _ {
    constructor(n) {
      super({ message: "", recognizer: n, input: n.getInputStream(), ctx: n._ctx }), this.offendingToken = n.getCurrentToken();
    }
  }
  function e(i, n) {
    return n !== null ? n : "failed predicate: {" + i + "}?";
  }
  class u extends _ {
    constructor(n, l, t) {
      super({
        message: e(l, t || null),
        recognizer: n,
        input: n.getInputStream(),
        ctx: n._ctx
      });
      const d = n._interp.atn.states[n.state].transitions[0];
      d instanceof f ? (this.ruleIndex = d.ruleIndex, this.predicateIndex = d.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = l, this.offendingToken = n.getCurrentToken();
    }
  }
  class s extends Error {
    constructor() {
      super(), Error.captureStackTrace(this, s);
    }
  }
  return _t = {
    RecognitionException: _,
    NoViableAltException: a,
    LexerNoViableAltException: p,
    InputMismatchException: r,
    FailedPredicateException: u,
    ParseCancellationException: s
  }, _t;
}
var Lt, ul;
function Ze() {
  if (ul) return Lt;
  ul = 1;
  const { Token: f } = ue(), g = Gs(), _ = xi(), { RecognitionException: p } = Ce(), { LexerNoViableAltException: a } = Ce();
  class r extends g {
    constructor(u) {
      super(), this._input = u, this._factory = _.DEFAULT, this._tokenFactorySourcePair = [this, u], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = !1, this._channel = f.DEFAULT_CHANNEL, this._type = f.INVALID_TYPE, this._modeStack = [], this._mode = r.DEFAULT_MODE, this._text = null;
    }
    reset() {
      this._input !== null && this._input.seek(0), this._token = null, this._type = f.INVALID_TYPE, this._channel = f.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = !1, this._mode = r.DEFAULT_MODE, this._modeStack = [], this._interp.reset();
    }
    // Return a token from this source; i.e., match a token on the char stream.
    nextToken() {
      if (this._input === null)
        throw "nextToken requires a non-null input stream.";
      const u = this._input.mark();
      try {
        for (; ; ) {
          if (this._hitEOF)
            return this.emitEOF(), this._token;
          this._token = null, this._channel = f.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
          let s = !1;
          for (; ; ) {
            this._type = f.INVALID_TYPE;
            let i = r.SKIP;
            try {
              i = this._interp.match(this._input, this._mode);
            } catch (n) {
              if (n instanceof p)
                this.notifyListeners(n), this.recover(n);
              else
                throw console.log(n.stack), n;
            }
            if (this._input.LA(1) === f.EOF && (this._hitEOF = !0), this._type === f.INVALID_TYPE && (this._type = i), this._type === r.SKIP) {
              s = !0;
              break;
            }
            if (this._type !== r.MORE)
              break;
          }
          if (!s)
            return this._token === null && this.emit(), this._token;
        }
      } finally {
        this._input.release(u);
      }
    }
    /**
     * Instruct the lexer to skip creating a token for current lexer rule
     * and look for another token. nextToken() knows to keep looking when
     * a lexer rule finishes with token set to SKIP_TOKEN. Recall that
     * if token==null at end of any token rule, it creates one for you
     * and emits it.
     */
    skip() {
      this._type = r.SKIP;
    }
    more() {
      this._type = r.MORE;
    }
    mode(u) {
      this._mode = u;
    }
    pushMode(u) {
      this._interp.debug && console.log("pushMode " + u), this._modeStack.push(this._mode), this.mode(u);
    }
    popMode() {
      if (this._modeStack.length === 0)
        throw "Empty Stack";
      return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.mode(this._modeStack.pop()), this._mode;
    }
    /**
     * By default does not support multiple emits per nextToken invocation
     * for efficiency reasons. Subclass and override this method, nextToken,
     * and getToken (to push tokens into a list and pull from that list
     * rather than a single variable as this implementation does).
     */
    emitToken(u) {
      this._token = u;
    }
    /**
     * The standard method called to automatically emit a token at the
     * outermost lexical rule. The token object should point into the
     * char buffer start..stop. If there is a text override in 'text',
     * use that to set the token's text. Override this method to emit
     * custom Token objects or provide a new factory.
     */
    emit() {
      const u = this._factory.create(
        this._tokenFactorySourcePair,
        this._type,
        this._text,
        this._channel,
        this._tokenStartCharIndex,
        this.getCharIndex() - 1,
        this._tokenStartLine,
        this._tokenStartColumn
      );
      return this.emitToken(u), u;
    }
    emitEOF() {
      const u = this.column, s = this.line, i = this._factory.create(
        this._tokenFactorySourcePair,
        f.EOF,
        null,
        f.DEFAULT_CHANNEL,
        this._input.index,
        this._input.index - 1,
        s,
        u
      );
      return this.emitToken(i), i;
    }
    // What is the index of the current character of lookahead?///
    getCharIndex() {
      return this._input.index;
    }
    /**
     * Return a list of all Token objects in input char stream.
     * Forces load of all tokens. Does not include EOF token.
     */
    getAllTokens() {
      const u = [];
      let s = this.nextToken();
      for (; s.type !== f.EOF; )
        u.push(s), s = this.nextToken();
      return u;
    }
    notifyListeners(u) {
      const s = this._tokenStartCharIndex, i = this._input.index, n = this._input.getText(s, i), l = "token recognition error at: '" + this.getErrorDisplay(n) + "'";
      this.getErrorListenerDispatch().syntaxError(
        this,
        null,
        this._tokenStartLine,
        this._tokenStartColumn,
        l,
        u
      );
    }
    getErrorDisplay(u) {
      const s = [];
      for (let i = 0; i < u.length; i++)
        s.push(u[i]);
      return s.join("");
    }
    getErrorDisplayForChar(u) {
      return u.charCodeAt(0) === f.EOF ? "<EOF>" : u === `
` ? "\\n" : u === "	" ? "\\t" : u === "\r" ? "\\r" : u;
    }
    getCharErrorDisplay(u) {
      return "'" + this.getErrorDisplayForChar(u) + "'";
    }
    /**
     * Lexers can normally match any char in it's vocabulary after matching
     * a token, so do the easy thing and just kill a character and hope
     * it all works out. You can instead use the rule invocation stack
     * to do sophisticated error recovery if you are in a fragment rule.
     */
    recover(u) {
      this._input.LA(1) !== f.EOF && (u instanceof a ? this._interp.consume(this._input) : this._input.consume());
    }
    get inputStream() {
      return this._input;
    }
    set inputStream(u) {
      this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = u, this._tokenFactorySourcePair = [this, this._input];
    }
    get sourceName() {
      return this._input.sourceName;
    }
    get type() {
      return this._type;
    }
    set type(u) {
      this._type = u;
    }
    get line() {
      return this._interp.line;
    }
    set line(u) {
      this._interp.line = u;
    }
    get column() {
      return this._interp.column;
    }
    set column(u) {
      this._interp.column = u;
    }
    get text() {
      return this._text !== null ? this._text : this._interp.getText(this._input);
    }
    set text(u) {
      this._text = u;
    }
  }
  return r.DEFAULT_MODE = 0, r.MORE = -2, r.SKIP = -3, r.DEFAULT_TOKEN_CHANNEL = f.DEFAULT_CHANNEL, r.HIDDEN = f.HIDDEN_CHANNEL, r.MIN_CHAR_VALUE = 0, r.MAX_CHAR_VALUE = 1114111, Lt = r, Lt;
}
var bt, al;
function Ne() {
  if (al) return bt;
  al = 1;
  const f = Ee(), g = ce(), { SemanticContext: _ } = Ve(), { merge: p } = Le();
  function a(s) {
    return s.hashCodeForConfigSet();
  }
  function r(s, i) {
    return s === i ? !0 : s === null || i === null ? !1 : s.equalsForConfigSet(i);
  }
  class e {
    constructor(i) {
      this.configLookup = new g.Set(a, r), this.fullCtx = i === void 0 ? !0 : i, this.readOnly = !1, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = !1, this.dipsIntoOuterContext = !1, this.cachedHashCode = -1;
    }
    /**
     * Adding a new config means merging contexts with existing configs for
     * {@code (s, i, pi, _)}, where {@code s} is the
     * {@link ATNConfig//state}, {@code i} is the {@link ATNConfig//alt}, and
     * {@code pi} is the {@link ATNConfig//semanticContext}. We use
     * {@code (s,i,pi)} as key.
     *
     * <p>This method updates {@link //dipsIntoOuterContext} and
     * {@link //hasSemanticContext} when necessary.</p>
     */
    add(i, n) {
      if (n === void 0 && (n = null), this.readOnly)
        throw "This set is readonly";
      i.semanticContext !== _.NONE && (this.hasSemanticContext = !0), i.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = !0);
      const l = this.configLookup.add(i);
      if (l === i)
        return this.cachedHashCode = -1, this.configs.push(i), !0;
      const t = !this.fullCtx, m = p(l.context, i.context, t, n);
      return l.reachesIntoOuterContext = Math.max(l.reachesIntoOuterContext, i.reachesIntoOuterContext), i.precedenceFilterSuppressed && (l.precedenceFilterSuppressed = !0), l.context = m, !0;
    }
    getStates() {
      const i = new g.Set();
      for (let n = 0; n < this.configs.length; n++)
        i.add(this.configs[n].state);
      return i;
    }
    getPredicates() {
      const i = [];
      for (let n = 0; n < this.configs.length; n++) {
        const l = this.configs[n].semanticContext;
        l !== _.NONE && i.push(l.semanticContext);
      }
      return i;
    }
    optimizeConfigs(i) {
      if (this.readOnly)
        throw "This set is readonly";
      if (this.configLookup.length !== 0)
        for (let n = 0; n < this.configs.length; n++) {
          const l = this.configs[n];
          l.context = i.getCachedContext(l.context);
        }
    }
    addAll(i) {
      for (let n = 0; n < i.length; n++)
        this.add(i[n]);
      return !1;
    }
    equals(i) {
      return this === i || i instanceof e && g.equalArrays(this.configs, i.configs) && this.fullCtx === i.fullCtx && this.uniqueAlt === i.uniqueAlt && this.conflictingAlts === i.conflictingAlts && this.hasSemanticContext === i.hasSemanticContext && this.dipsIntoOuterContext === i.dipsIntoOuterContext;
    }
    hashCode() {
      const i = new g.Hash();
      return i.update(this.configs), i.finish();
    }
    updateHashCode(i) {
      this.readOnly ? (this.cachedHashCode === -1 && (this.cachedHashCode = this.hashCode()), i.update(this.cachedHashCode)) : i.update(this.hashCode());
    }
    isEmpty() {
      return this.configs.length === 0;
    }
    contains(i) {
      if (this.configLookup === null)
        throw "This method is not implemented for readonly sets.";
      return this.configLookup.contains(i);
    }
    containsFast(i) {
      if (this.configLookup === null)
        throw "This method is not implemented for readonly sets.";
      return this.configLookup.containsFast(i);
    }
    clear() {
      if (this.readOnly)
        throw "This set is readonly";
      this.configs = [], this.cachedHashCode = -1, this.configLookup = new g.Set();
    }
    setReadonly(i) {
      this.readOnly = i, i && (this.configLookup = null);
    }
    toString() {
      return g.arrayToString(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== f.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (this.conflictingAlts !== null ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "");
    }
    get items() {
      return this.configs;
    }
    get length() {
      return this.configs.length;
    }
  }
  class u extends e {
    constructor() {
      super(), this.configLookup = new g.Set();
    }
  }
  return bt = {
    ATNConfigSet: e,
    OrderedATNConfigSet: u
  }, bt;
}
var Tt, ol;
function ze() {
  if (ol) return Tt;
  ol = 1;
  const { ATNConfigSet: f } = Ne(), { Hash: g, Set: _ } = ce();
  class p {
    constructor(e, u) {
      this.alt = u, this.pred = e;
    }
    toString() {
      return "(" + this.pred + ", " + this.alt + ")";
    }
  }
  class a {
    constructor(e, u) {
      return e === null && (e = -1), u === null && (u = new f()), this.stateNumber = e, this.configs = u, this.edges = null, this.isAcceptState = !1, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = !1, this.predicates = null, this;
    }
    /**
     * Get the set of all alts mentioned by all ATN configurations in this
     * DFA state.
     */
    getAltSet() {
      const e = new _();
      if (this.configs !== null)
        for (let u = 0; u < this.configs.length; u++) {
          const s = this.configs[u];
          e.add(s.alt);
        }
      return e.length === 0 ? null : e;
    }
    /**
     * Two {@link DFAState} instances are equal if their ATN configuration sets
     * are the same. This method is used to see if a state already exists.
     *
     * <p>Because the number of alternatives and number of ATN configurations are
     * finite, there is a finite number of DFA states that can be processed.
     * This is necessary to show that the algorithm terminates.</p>
     *
     * <p>Cannot test the DFA state numbers here because in
     * {@link ParserATNSimulator//addDFAState} we need to know if any other state
     * exists that has this exact set of ATN configurations. The
     * {@link //stateNumber} is irrelevant.</p>
     */
    equals(e) {
      return this === e || e instanceof a && this.configs.equals(e.configs);
    }
    toString() {
      let e = "" + this.stateNumber + ":" + this.configs;
      return this.isAcceptState && (e = e + "=>", this.predicates !== null ? e = e + this.predicates : e = e + this.prediction), e;
    }
    hashCode() {
      const e = new g();
      return e.update(this.configs), e.finish();
    }
  }
  return Tt = { DFAState: a, PredPrediction: p }, Tt;
}
var Ut, cl;
function zs() {
  if (cl) return Ut;
  cl = 1;
  const { DFAState: f } = ze(), { ATNConfigSet: g } = Ne(), { getCachedPredictionContext: _ } = Le(), { Map: p } = ce();
  class a {
    constructor(e, u) {
      return this.atn = e, this.sharedContextCache = u, this;
    }
    getCachedContext(e) {
      if (this.sharedContextCache === null)
        return e;
      const u = new p();
      return _(e, this.sharedContextCache, u);
    }
  }
  return a.ERROR = new f(2147483647, new g()), Ut = a, Ut;
}
var xt, fl;
function Si() {
  if (fl) return xt;
  fl = 1;
  const { hashStuff: f } = ce(), { LexerIndexedCustomAction: g } = Hs();
  class _ {
    /**
     * Represents an executor for a sequence of lexer actions which traversed during
     * the matching operation of a lexer rule (token).
     *
     * <p>The executor tracks position information for position-dependent lexer actions
     * efficiently, ensuring that actions appearing only at the end of the rule do
     * not cause bloating of the {@link DFA} created for the lexer.</p>
     */
    constructor(a) {
      return this.lexerActions = a === null ? [] : a, this.cachedHashCode = f(a), this;
    }
    /**
     * Creates a {@link LexerActionExecutor} which encodes the current offset
     * for position-dependent lexer actions.
     *
     * <p>Normally, when the executor encounters lexer actions where
     * {@link LexerAction//isPositionDependent} returns {@code true}, it calls
     * {@link IntStream//seek} on the input {@link CharStream} to set the input
     * position to the <em>end</em> of the current token. This behavior provides
     * for efficient DFA representation of lexer actions which appear at the end
     * of a lexer rule, even when the lexer rule matches a variable number of
     * characters.</p>
     *
     * <p>Prior to traversing a match transition in the ATN, the current offset
     * from the token start index is assigned to all position-dependent lexer
     * actions which have not already been assigned a fixed offset. By storing
     * the offsets relative to the token start index, the DFA representation of
     * lexer actions which appear in the middle of tokens remains efficient due
     * to sharing among tokens of the same length, regardless of their absolute
     * position in the input stream.</p>
     *
     * <p>If the current executor already has offsets assigned to all
     * position-dependent lexer actions, the method returns {@code this}.</p>
     *
     * @param offset The current offset to assign to all position-dependent
     * lexer actions which do not already have offsets assigned.
     *
     * @return {LexerActionExecutor} A {@link LexerActionExecutor} which stores input stream offsets
     * for all position-dependent lexer actions.
     */
    fixOffsetBeforeMatch(a) {
      let r = null;
      for (let e = 0; e < this.lexerActions.length; e++)
        this.lexerActions[e].isPositionDependent && !(this.lexerActions[e] instanceof g) && (r === null && (r = this.lexerActions.concat([])), r[e] = new g(
          a,
          this.lexerActions[e]
        ));
      return r === null ? this : new _(r);
    }
    /**
     * Execute the actions encapsulated by this executor within the context of a
     * particular {@link Lexer}.
     *
     * <p>This method calls {@link IntStream//seek} to set the position of the
     * {@code input} {@link CharStream} prior to calling
     * {@link LexerAction//execute} on a position-dependent action. Before the
     * method returns, the input position will be restored to the same position
     * it was in when the method was invoked.</p>
     *
     * @param lexer The lexer instance.
     * @param input The input stream which is the source for the current token.
     * When this method is called, the current {@link IntStream//index} for
     * {@code input} should be the start of the following token, i.e. 1
     * character past the end of the current token.
     * @param startIndex The token start index. This value may be passed to
     * {@link IntStream//seek} to set the {@code input} position to the beginning
     * of the token.
     */
    execute(a, r, e) {
      let u = !1;
      const s = r.index;
      try {
        for (let i = 0; i < this.lexerActions.length; i++) {
          let n = this.lexerActions[i];
          if (n instanceof g) {
            const l = n.offset;
            r.seek(e + l), n = n.action, u = e + l !== s;
          } else n.isPositionDependent && (r.seek(s), u = !1);
          n.execute(a);
        }
      } finally {
        u && r.seek(s);
      }
    }
    hashCode() {
      return this.cachedHashCode;
    }
    updateHashCode(a) {
      a.update(this.cachedHashCode);
    }
    equals(a) {
      if (this === a)
        return !0;
      if (a instanceof _) {
        if (this.cachedHashCode != a.cachedHashCode)
          return !1;
        if (this.lexerActions.length != a.lexerActions.length)
          return !1;
        {
          const r = this.lexerActions.length;
          for (let e = 0; e < r; ++e)
            if (!this.lexerActions[e].equals(a.lexerActions[e]))
              return !1;
          return !0;
        }
      } else return !1;
    }
    /**
     * Creates a {@link LexerActionExecutor} which executes the actions for
     * the input {@code lexerActionExecutor} followed by a specified
     * {@code lexerAction}.
     *
     * @param lexerActionExecutor The executor for actions already traversed by
     * the lexer while matching a token within a particular
     * {@link LexerATNConfig}. If this is {@code null}, the method behaves as
     * though it were an empty executor.
     * @param lexerAction The lexer action to execute after the actions
     * specified in {@code lexerActionExecutor}.
     *
     * @return {LexerActionExecutor} A {@link LexerActionExecutor} for executing the combine actions
     * of {@code lexerActionExecutor} and {@code lexerAction}.
     */
    static append(a, r) {
      if (a === null)
        return new _([r]);
      const e = a.lexerActions.concat([r]);
      return new _(e);
    }
  }
  return xt = _, xt;
}
var St, ml;
function vi() {
  if (ml) return St;
  ml = 1;
  const { Token: f } = ue(), g = Ze(), _ = Ee(), p = zs(), { DFAState: a } = ze(), { OrderedATNConfigSet: r } = Ne(), { PredictionContext: e } = Le(), { SingletonPredictionContext: u } = Le(), { RuleStopState: s } = be(), { LexerATNConfig: i } = Ye(), { Transition: n } = Ge(), l = Si(), { LexerNoViableAltException: t } = Ce();
  function m(h) {
    h.index = -1, h.line = 0, h.column = -1, h.dfaState = null;
  }
  class d {
    constructor() {
      m(this);
    }
    reset() {
      m(this);
    }
  }
  class o extends p {
    /**
     * When we hit an accept state in either the DFA or the ATN, we
     * have to notify the character stream to start buffering characters
     * via {@link IntStream//mark} and record the current state. The current sim state
     * includes the current index into the input, the current line,
     * and current character position in that line. Note that the Lexer is
     * tracking the starting line and characterization of the token. These
     * variables track the "state" of the simulator when it hits an accept state.
     *
     * <p>We track these variables separately for the DFA and ATN simulation
     * because the DFA simulation often has to fail over to the ATN
     * simulation. If the ATN simulation fails, we need the DFA to fall
     * back to its previously accepted state, if any. If the ATN succeeds,
     * then the ATN does the accept and the DFA simulator that invoked it
     * can simply return the predicted token type.</p>
     */
    constructor(c, y, T, N) {
      super(y, N), this.decisionToDFA = T, this.recog = c, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = g.DEFAULT_MODE, this.prevAccept = new d();
    }
    copyState(c) {
      this.column = c.column, this.line = c.line, this.mode = c.mode, this.startIndex = c.startIndex;
    }
    match(c, y) {
      this.match_calls += 1, this.mode = y;
      const T = c.mark();
      try {
        this.startIndex = c.index, this.prevAccept.reset();
        const N = this.decisionToDFA[y];
        return N.s0 === null ? this.matchATN(c) : this.execATN(c, N.s0);
      } finally {
        c.release(T);
      }
    }
    reset() {
      this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = g.DEFAULT_MODE;
    }
    matchATN(c) {
      const y = this.atn.modeToStartState[this.mode];
      o.debug && console.log("matchATN mode " + this.mode + " start: " + y);
      const T = this.mode, N = this.computeStartState(c, y), O = N.hasSemanticContext;
      N.hasSemanticContext = !1;
      const P = this.addDFAState(N);
      O || (this.decisionToDFA[this.mode].s0 = P);
      const z = this.execATN(c, P);
      return o.debug && console.log("DFA after matchATN: " + this.decisionToDFA[T].toLexerString()), z;
    }
    execATN(c, y) {
      o.debug && console.log("start state closure=" + y.configs), y.isAcceptState && this.captureSimState(this.prevAccept, c, y);
      let T = c.LA(1), N = y;
      for (; ; ) {
        o.debug && console.log("execATN loop starting closure: " + N.configs);
        let O = this.getExistingTargetState(N, T);
        if (O === null && (O = this.computeTargetState(c, N, T)), O === p.ERROR || (T !== f.EOF && this.consume(c), O.isAcceptState && (this.captureSimState(this.prevAccept, c, O), T === f.EOF)))
          break;
        T = c.LA(1), N = O;
      }
      return this.failOrAccept(this.prevAccept, c, N.configs, T);
    }
    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns {@code null}.
     *
     * @param s The current DFA state
     * @param t The next input symbol
     * @return The existing target DFA state for the given input symbol
     * {@code t}, or {@code null} if the target state for this edge is not
     * already cached
     */
    getExistingTargetState(c, y) {
      if (c.edges === null || y < o.MIN_DFA_EDGE || y > o.MAX_DFA_EDGE)
        return null;
      let T = c.edges[y - o.MIN_DFA_EDGE];
      return T === void 0 && (T = null), o.debug && T !== null && console.log("reuse state " + c.stateNumber + " edge to " + T.stateNumber), T;
    }
    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param input The input stream
     * @param s The current DFA state
     * @param t The next input symbol
     *
     * @return The computed target DFA state for the given input symbol
     * {@code t}. If {@code t} does not lead to a valid DFA state, this method
     * returns {@link //ERROR}.
     */
    computeTargetState(c, y, T) {
      const N = new r();
      return this.getReachableConfigSet(c, y.configs, N, T), N.items.length === 0 ? (N.hasSemanticContext || this.addDFAEdge(y, T, p.ERROR), p.ERROR) : this.addDFAEdge(y, T, null, N);
    }
    failOrAccept(c, y, T, N) {
      if (this.prevAccept.dfaState !== null) {
        const O = c.dfaState.lexerActionExecutor;
        return this.accept(
          y,
          O,
          this.startIndex,
          c.index,
          c.line,
          c.column
        ), c.dfaState.prediction;
      } else {
        if (N === f.EOF && y.index === this.startIndex)
          return f.EOF;
        throw new t(this.recog, y, this.startIndex, T);
      }
    }
    /**
     * Given a starting configuration set, figure out all ATN configurations
     * we can reach upon input {@code t}. Parameter {@code reach} is a return
     * parameter.
     */
    getReachableConfigSet(c, y, T, N) {
      let O = _.INVALID_ALT_NUMBER;
      for (let P = 0; P < y.items.length; P++) {
        const z = y.items[P], D = z.alt === O;
        if (!(D && z.passedThroughNonGreedyDecision)) {
          o.debug && console.log(`testing %s at %s
`, this.getTokenName(N), z.toString(this.recog, !0));
          for (let F = 0; F < z.state.transitions.length; F++) {
            const B = z.state.transitions[F], $ = this.getReachableTarget(B, N);
            if ($ !== null) {
              let I = z.lexerActionExecutor;
              I !== null && (I = I.fixOffsetBeforeMatch(c.index - this.startIndex));
              const S = N === f.EOF, C = new i({ state: $, lexerActionExecutor: I }, z);
              this.closure(
                c,
                C,
                T,
                D,
                !0,
                S
              ) && (O = z.alt);
            }
          }
        }
      }
    }
    accept(c, y, T, N, O, P) {
      o.debug && console.log(`ACTION %s
`, y), c.seek(N), this.line = O, this.column = P, y !== null && this.recog !== null && y.execute(this.recog, c, T);
    }
    getReachableTarget(c, y) {
      return c.matches(y, 0, g.MAX_CHAR_VALUE) ? c.target : null;
    }
    computeStartState(c, y) {
      const T = e.EMPTY, N = new r();
      for (let O = 0; O < y.transitions.length; O++) {
        const P = y.transitions[O].target, z = new i({ state: P, alt: O + 1, context: T }, null);
        this.closure(c, z, N, !1, !1, !1);
      }
      return N;
    }
    /**
     * Since the alternatives within any lexer decision are ordered by
     * preference, this method stops pursuing the closure as soon as an accept
     * state is reached. After the first accept state is reached by depth-first
     * search from {@code config}, all other (potentially reachable) states for
     * this rule would have a lower priority.
     *
     * @return {Boolean} {@code true} if an accept state is reached, otherwise
     * {@code false}.
     */
    closure(c, y, T, N, O, P) {
      let z = null;
      if (o.debug && console.log("closure(" + y.toString(this.recog, !0) + ")"), y.state instanceof s) {
        if (o.debug && (this.recog !== null ? console.log(`closure at %s rule stop %s
`, this.recog.ruleNames[y.state.ruleIndex], y) : console.log(`closure at rule stop %s
`, y)), y.context === null || y.context.hasEmptyPath()) {
          if (y.context === null || y.context.isEmpty())
            return T.add(y), !0;
          T.add(new i({ state: y.state, context: e.EMPTY }, y)), N = !0;
        }
        if (y.context !== null && !y.context.isEmpty()) {
          for (let D = 0; D < y.context.length; D++)
            if (y.context.getReturnState(D) !== e.EMPTY_RETURN_STATE) {
              const F = y.context.getParent(D), B = this.atn.states[y.context.getReturnState(D)];
              z = new i({ state: B, context: F }, y), N = this.closure(
                c,
                z,
                T,
                N,
                O,
                P
              );
            }
        }
        return N;
      }
      y.state.epsilonOnlyTransitions || (!N || !y.passedThroughNonGreedyDecision) && T.add(y);
      for (let D = 0; D < y.state.transitions.length; D++) {
        const F = y.state.transitions[D];
        z = this.getEpsilonTarget(c, y, F, T, O, P), z !== null && (N = this.closure(
          c,
          z,
          T,
          N,
          O,
          P
        ));
      }
      return N;
    }
    // side-effect: can alter configs.hasSemanticContext
    getEpsilonTarget(c, y, T, N, O, P) {
      let z = null;
      if (T.serializationType === n.RULE) {
        const D = u.create(y.context, T.followState.stateNumber);
        z = new i({ state: T.target, context: D }, y);
      } else {
        if (T.serializationType === n.PRECEDENCE)
          throw "Precedence predicates are not supported in lexers.";
        if (T.serializationType === n.PREDICATE)
          o.debug && console.log("EVAL rule " + T.ruleIndex + ":" + T.predIndex), N.hasSemanticContext = !0, this.evaluatePredicate(c, T.ruleIndex, T.predIndex, O) && (z = new i({ state: T.target }, y));
        else if (T.serializationType === n.ACTION)
          if (y.context === null || y.context.hasEmptyPath()) {
            const D = l.append(
              y.lexerActionExecutor,
              this.atn.lexerActions[T.actionIndex]
            );
            z = new i({ state: T.target, lexerActionExecutor: D }, y);
          } else
            z = new i({ state: T.target }, y);
        else T.serializationType === n.EPSILON ? z = new i({ state: T.target }, y) : (T.serializationType === n.ATOM || T.serializationType === n.RANGE || T.serializationType === n.SET) && P && T.matches(f.EOF, 0, g.MAX_CHAR_VALUE) && (z = new i({ state: T.target }, y));
      }
      return z;
    }
    /**
     * Evaluate a predicate specified in the lexer.
     *
     * <p>If {@code speculative} is {@code true}, this method was called before
     * {@link //consume} for the matched character. This method should call
     * {@link //consume} before evaluating the predicate to ensure position
     * sensitive values, including {@link Lexer//getText}, {@link Lexer//getLine},
     * and {@link Lexer//getcolumn}, properly reflect the current
     * lexer state. This method should restore {@code input} and the simulator
     * to the original state before returning (i.e. undo the actions made by the
     * call to {@link //consume}.</p>
     *
     * @param input The input stream.
     * @param ruleIndex The rule containing the predicate.
     * @param predIndex The index of the predicate within the rule.
     * @param speculative {@code true} if the current index in {@code input} is
     * one character before the predicate's location.
     *
     * @return {@code true} if the specified predicate evaluates to
     * {@code true}.
     */
    evaluatePredicate(c, y, T, N) {
      if (this.recog === null)
        return !0;
      if (!N)
        return this.recog.sempred(null, y, T);
      const O = this.column, P = this.line, z = c.index, D = c.mark();
      try {
        return this.consume(c), this.recog.sempred(null, y, T);
      } finally {
        this.column = O, this.line = P, c.seek(z), c.release(D);
      }
    }
    captureSimState(c, y, T) {
      c.index = y.index, c.line = this.line, c.column = this.column, c.dfaState = T;
    }
    addDFAEdge(c, y, T, N) {
      if (T === void 0 && (T = null), N === void 0 && (N = null), T === null && N !== null) {
        const O = N.hasSemanticContext;
        if (N.hasSemanticContext = !1, T = this.addDFAState(N), O)
          return T;
      }
      return y < o.MIN_DFA_EDGE || y > o.MAX_DFA_EDGE || (o.debug && console.log("EDGE " + c + " -> " + T + " upon " + y), c.edges === null && (c.edges = []), c.edges[y - o.MIN_DFA_EDGE] = T), T;
    }
    /**
     * Add a new DFA state if there isn't one with this set of
     * configurations already. This method also detects the first
     * configuration containing an ATN rule stop state. Later, when
     * traversing the DFA, we will know which rule to accept.
     */
    addDFAState(c) {
      const y = new a(null, c);
      let T = null;
      for (let z = 0; z < c.items.length; z++) {
        const D = c.items[z];
        if (D.state instanceof s) {
          T = D;
          break;
        }
      }
      T !== null && (y.isAcceptState = !0, y.lexerActionExecutor = T.lexerActionExecutor, y.prediction = this.atn.ruleToTokenType[T.state.ruleIndex]);
      const N = this.decisionToDFA[this.mode], O = N.states.get(y);
      if (O !== null)
        return O;
      const P = y;
      return P.stateNumber = N.states.length, c.setReadonly(!0), P.configs = c, N.states.add(P), P;
    }
    getDFA(c) {
      return this.decisionToDFA[c];
    }
    // Get the text matched so far for the current token.
    getText(c) {
      return c.getText(this.startIndex, c.index - 1);
    }
    consume(c) {
      c.LA(1) === 10 ? (this.line += 1, this.column = 0) : this.column += 1, c.consume();
    }
    getTokenName(c) {
      return c === -1 ? "EOF" : "'" + String.fromCharCode(c) + "'";
    }
  }
  return o.debug = !1, o.dfa_debug = !1, o.MIN_DFA_EDGE = 0, o.MAX_DFA_EDGE = 127, o.match_calls = 0, St = o, St;
}
var vt, hl;
function $s() {
  if (hl) return vt;
  hl = 1;
  const { Map: f, BitSet: g, AltDict: _, hashStuff: p } = ce(), a = Ee(), { RuleStopState: r } = be(), { ATNConfigSet: e } = Ne(), { ATNConfig: u } = Ye(), { SemanticContext: s } = Ve(), i = {
    /**
     * The SLL(*) prediction mode. This prediction mode ignores the current
     * parser context when making predictions. This is the fastest prediction
     * mode, and provides correct results for many grammars. This prediction
     * mode is more powerful than the prediction mode provided by ANTLR 3, but
     * may result in syntax errors for grammar and input combinations which are
     * not SLL.
     *
     * <p>
     * When using this prediction mode, the parser will either return a correct
     * parse tree (i.e. the same parse tree that would be returned with the
     * {@link //LL} prediction mode), or it will report a syntax error. If a
     * syntax error is encountered when using the {@link //SLL} prediction mode,
     * it may be due to either an actual syntax error in the input or indicate
     * that the particular combination of grammar and input requires the more
     * powerful {@link //LL} prediction abilities to complete successfully.</p>
     *
     * <p>
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.</p>
     */
    SLL: 0,
    /**
     * The LL(*) prediction mode. This prediction mode allows the current parser
     * context to be used for resolving SLL conflicts that occur during
     * prediction. This is the fastest prediction mode that guarantees correct
     * parse results for all combinations of grammars with syntactically correct
     * inputs.
     *
     * <p>
     * When using this prediction mode, the parser will make correct decisions
     * for all syntactically-correct grammar and input combinations. However, in
     * cases where the grammar is truly ambiguous this prediction mode might not
     * report a precise answer for <em>exactly which</em> alternatives are
     * ambiguous.</p>
     *
     * <p>
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.</p>
     */
    LL: 1,
    /**
     *
     * The LL(*) prediction mode with exact ambiguity detection. In addition to
     * the correctness guarantees provided by the {@link //LL} prediction mode,
     * this prediction mode instructs the prediction algorithm to determine the
     * complete and exact set of ambiguous alternatives for every ambiguous
     * decision encountered while parsing.
     *
     * <p>
     * This prediction mode may be used for diagnosing ambiguities during
     * grammar development. Due to the performance overhead of calculating sets
     * of ambiguous alternatives, this prediction mode should be avoided when
     * the exact results are not necessary.</p>
     *
     * <p>
     * This prediction mode does not provide any guarantees for prediction
     * behavior for syntactically-incorrect inputs.</p>
     */
    LL_EXACT_AMBIG_DETECTION: 2,
    /**
     *
     * Computes the SLL prediction termination condition.
     *
     * <p>
     * This method computes the SLL prediction termination condition for both of
     * the following cases.</p>
     *
     * <ul>
     * <li>The usual SLL+LL fallback upon SLL conflict</li>
     * <li>Pure SLL without LL fallback</li>
     * </ul>
     *
     * <p><strong>COMBINED SLL+LL PARSING</strong></p>
     *
     * <p>When LL-fallback is enabled upon SLL conflict, correct predictions are
     * ensured regardless of how the termination condition is computed by this
     * method. Due to the substantially higher cost of LL prediction, the
     * prediction should only fall back to LL when the additional lookahead
     * cannot lead to a unique SLL prediction.</p>
     *
     * <p>Assuming combined SLL+LL parsing, an SLL configuration set with only
     * conflicting subsets should fall back to full LL, even if the
     * configuration sets don't resolve to the same alternative (e.g.
     * {@code {1,2}} and {@code {3,4}}. If there is at least one non-conflicting
     * configuration, SLL could continue with the hopes that more lookahead will
     * resolve via one of those non-conflicting configurations.</p>
     *
     * <p>Here's the prediction termination rule them: SLL (for SLL+LL parsing)
     * stops when it sees only conflicting configuration subsets. In contrast,
     * full LL keeps going when there is uncertainty.</p>
     *
     * <p><strong>HEURISTIC</strong></p>
     *
     * <p>As a heuristic, we stop prediction when we see any conflicting subset
     * unless we see a state that only has one alternative associated with it.
     * The single-alt-state thing lets prediction continue upon rules like
     * (otherwise, it would admit defeat too soon):</p>
     *
     * <p>{@code [12|1|[], 6|2|[], 12|2|[]]. s : (ID | ID ID?) ';' ;}</p>
     *
     * <p>When the ATN simulation reaches the state before {@code ';'}, it has a
     * DFA state that looks like: {@code [12|1|[], 6|2|[], 12|2|[]]}. Naturally
     * {@code 12|1|[]} and {@code 12|2|[]} conflict, but we cannot stop
     * processing this node because alternative to has another way to continue,
     * via {@code [6|2|[]]}.</p>
     *
     * <p>It also let's us continue for this rule:</p>
     *
     * <p>{@code [1|1|[], 1|2|[], 8|3|[]] a : A | A | A B ;}</p>
     *
     * <p>After matching input A, we reach the stop state for rule A, state 1.
     * State 8 is the state right before B. Clearly alternatives 1 and 2
     * conflict and no amount of further lookahead will separate the two.
     * However, alternative 3 will be able to continue and so we do not stop
     * working on this state. In the previous example, we're concerned with
     * states associated with the conflicting alternatives. Here alt 3 is not
     * associated with the conflicting configs, but since we can continue
     * looking for input reasonably, don't declare the state done.</p>
     *
     * <p><strong>PURE SLL PARSING</strong></p>
     *
     * <p>To handle pure SLL parsing, all we have to do is make sure that we
     * combine stack contexts for configurations that differ only by semantic
     * predicate. From there, we can do the usual SLL termination heuristic.</p>
     *
     * <p><strong>PREDICATES IN SLL+LL PARSING</strong></p>
     *
     * <p>SLL decisions don't evaluate predicates until after they reach DFA stop
     * states because they need to create the DFA cache that works in all
     * semantic situations. In contrast, full LL evaluates predicates collected
     * during start state computation so it can ignore predicates thereafter.
     * This means that SLL termination detection can totally ignore semantic
     * predicates.</p>
     *
     * <p>Implementation-wise, {@link ATNConfigSet} combines stack contexts but not
     * semantic predicate contexts so we might see two configurations like the
     * following.</p>
     *
     * <p>{@code (s, 1, x, {}), (s, 1, x', {p})}</p>
     *
     * <p>Before testing these configurations against others, we have to merge
     * {@code x} and {@code x'} (without modifying the existing configurations).
     * For example, we test {@code (x+x')==x''} when looking for conflicts in
     * the following configurations.</p>
     *
     * <p>{@code (s, 1, x, {}), (s, 1, x', {p}), (s, 2, x'', {})}</p>
     *
     * <p>If the configuration set has predicates (as indicated by
     * {@link ATNConfigSet//hasSemanticContext}), this algorithm makes a copy of
     * the configurations to strip out all of the predicates so that a standard
     * {@link ATNConfigSet} will merge everything ignoring predicates.</p>
     */
    hasSLLConflictTerminatingPrediction: function(n, l) {
      if (i.allConfigsInRuleStopStates(l))
        return !0;
      if (n === i.SLL && l.hasSemanticContext) {
        const m = new e();
        for (let d = 0; d < l.items.length; d++) {
          let o = l.items[d];
          o = new u({ semanticContext: s.NONE }, o), m.add(o);
        }
        l = m;
      }
      const t = i.getConflictingAltSubsets(l);
      return i.hasConflictingAltSet(t) && !i.hasStateAssociatedWithOneAlt(l);
    },
    /**
     * Checks if any configuration in {@code configs} is in a
     * {@link RuleStopState}. Configurations meeting this condition have reached
     * the end of the decision rule (local context) or end of start rule (full
     * context).
     *
     * @param configs the configuration set to test
     * @return {@code true} if any configuration in {@code configs} is in a
     * {@link RuleStopState}, otherwise {@code false}
     */
    hasConfigInRuleStopState: function(n) {
      for (let l = 0; l < n.items.length; l++)
        if (n.items[l].state instanceof r)
          return !0;
      return !1;
    },
    /**
     * Checks if all configurations in {@code configs} are in a
     * {@link RuleStopState}. Configurations meeting this condition have reached
     * the end of the decision rule (local context) or end of start rule (full
     * context).
     *
     * @param configs the configuration set to test
     * @return {@code true} if all configurations in {@code configs} are in a
     * {@link RuleStopState}, otherwise {@code false}
     */
    allConfigsInRuleStopStates: function(n) {
      for (let l = 0; l < n.items.length; l++)
        if (!(n.items[l].state instanceof r))
          return !1;
      return !0;
    },
    /**
     *
     * Full LL prediction termination.
     *
     * <p>Can we stop looking ahead during ATN simulation or is there some
     * uncertainty as to which alternative we will ultimately pick, after
     * consuming more input? Even if there are partial conflicts, we might know
     * that everything is going to resolve to the same minimum alternative. That
     * means we can stop since no more lookahead will change that fact. On the
     * other hand, there might be multiple conflicts that resolve to different
     * minimums. That means we need more look ahead to decide which of those
     * alternatives we should predict.</p>
     *
     * <p>The basic idea is to split the set of configurations {@code C}, into
     * conflicting subsets {@code (s, _, ctx, _)} and singleton subsets with
     * non-conflicting configurations. Two configurations conflict if they have
     * identical {@link ATNConfig//state} and {@link ATNConfig//context} values
     * but different {@link ATNConfig//alt} value, e.g. {@code (s, i, ctx, _)}
     * and {@code (s, j, ctx, _)} for {@code i!=j}.</p>
     *
     * <p>Reduce these configuration subsets to the set of possible alternatives.
     * You can compute the alternative subsets in one pass as follows:</p>
     *
     * <p>{@code A_s,ctx = {i | (s, i, ctx, _)}} for each configuration in
     * {@code C} holding {@code s} and {@code ctx} fixed.</p>
     *
     * <p>Or in pseudo-code, for each configuration {@code c} in {@code C}:</p>
     *
     * <pre>
     * map[c] U= c.{@link ATNConfig//alt alt} // map hash/equals uses s and x, not
     * alt and not pred
     * </pre>
     *
     * <p>The values in {@code map} are the set of {@code A_s,ctx} sets.</p>
     *
     * <p>If {@code |A_s,ctx|=1} then there is no conflict associated with
     * {@code s} and {@code ctx}.</p>
     *
     * <p>Reduce the subsets to singletons by choosing a minimum of each subset. If
     * the union of these alternative subsets is a singleton, then no amount of
     * more lookahead will help us. We will always pick that alternative. If,
     * however, there is more than one alternative, then we are uncertain which
     * alternative to predict and must continue looking for resolution. We may
     * or may not discover an ambiguity in the future, even if there are no
     * conflicting subsets this round.</p>
     *
     * <p>The biggest sin is to terminate early because it means we've made a
     * decision but were uncertain as to the eventual outcome. We haven't used
     * enough lookahead. On the other hand, announcing a conflict too late is no
     * big deal; you will still have the conflict. It's just inefficient. It
     * might even look until the end of file.</p>
     *
     * <p>No special consideration for semantic predicates is required because
     * predicates are evaluated on-the-fly for full LL prediction, ensuring that
     * no configuration contains a semantic context during the termination
     * check.</p>
     *
     * <p><strong>CONFLICTING CONFIGS</strong></p>
     *
     * <p>Two configurations {@code (s, i, x)} and {@code (s, j, x')}, conflict
     * when {@code i!=j} but {@code x=x'}. Because we merge all
     * {@code (s, i, _)} configurations together, that means that there are at
     * most {@code n} configurations associated with state {@code s} for
     * {@code n} possible alternatives in the decision. The merged stacks
     * complicate the comparison of configuration contexts {@code x} and
     * {@code x'}. Sam checks to see if one is a subset of the other by calling
     * merge and checking to see if the merged result is either {@code x} or
     * {@code x'}. If the {@code x} associated with lowest alternative {@code i}
     * is the superset, then {@code i} is the only possible prediction since the
     * others resolve to {@code min(i)} as well. However, if {@code x} is
     * associated with {@code j>i} then at least one stack configuration for
     * {@code j} is not in conflict with alternative {@code i}. The algorithm
     * should keep going, looking for more lookahead due to the uncertainty.</p>
     *
     * <p>For simplicity, I'm doing a equality check between {@code x} and
     * {@code x'} that lets the algorithm continue to consume lookahead longer
     * than necessary. The reason I like the equality is of course the
     * simplicity but also because that is the test you need to detect the
     * alternatives that are actually in conflict.</p>
     *
     * <p><strong>CONTINUE/STOP RULE</strong></p>
     *
     * <p>Continue if union of resolved alternative sets from non-conflicting and
     * conflicting alternative subsets has more than one alternative. We are
     * uncertain about which alternative to predict.</p>
     *
     * <p>The complete set of alternatives, {@code [i for (_,i,_)]}, tells us which
     * alternatives are still in the running for the amount of input we've
     * consumed at this point. The conflicting sets let us to strip away
     * configurations that won't lead to more states because we resolve
     * conflicts to the configuration with a minimum alternate for the
     * conflicting set.</p>
     *
     * <p><strong>CASES</strong></p>
     *
     * <ul>
     *
     * <li>no conflicts and more than 1 alternative in set =&gt; continue</li>
     *
     * <li> {@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s, 3, z)},
     * {@code (s', 1, y)}, {@code (s', 2, y)} yields non-conflicting set
     * {@code {3}} U conflicting sets {@code min({1,2})} U {@code min({1,2})} =
     * {@code {1,3}} =&gt; continue
     * </li>
     *
     * <li>{@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s', 1, y)},
     * {@code (s', 2, y)}, {@code (s'', 1, z)} yields non-conflicting set
     * {@code {1}} U conflicting sets {@code min({1,2})} U {@code min({1,2})} =
     * {@code {1}} =&gt; stop and predict 1</li>
     *
     * <li>{@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s', 1, y)},
     * {@code (s', 2, y)} yields conflicting, reduced sets {@code {1}} U
     * {@code {1}} = {@code {1}} =&gt; stop and predict 1, can announce
     * ambiguity {@code {1,2}}</li>
     *
     * <li>{@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s', 2, y)},
     * {@code (s', 3, y)} yields conflicting, reduced sets {@code {1}} U
     * {@code {2}} = {@code {1,2}} =&gt; continue</li>
     *
     * <li>{@code (s, 1, x)}, {@code (s, 2, x)}, {@code (s', 3, y)},
     * {@code (s', 4, y)} yields conflicting, reduced sets {@code {1}} U
     * {@code {3}} = {@code {1,3}} =&gt; continue</li>
     *
     * </ul>
     *
     * <p><strong>EXACT AMBIGUITY DETECTION</strong></p>
     *
     * <p>If all states report the same conflicting set of alternatives, then we
     * know we have the exact ambiguity set.</p>
     *
     * <p><code>|A_<em>i</em>|&gt;1</code> and
     * <code>A_<em>i</em> = A_<em>j</em></code> for all <em>i</em>, <em>j</em>.</p>
     *
     * <p>In other words, we continue examining lookahead until all {@code A_i}
     * have more than one alternative and all {@code A_i} are the same. If
     * {@code A={{1,2}, {1,3}}}, then regular LL prediction would terminate
     * because the resolved set is {@code {1}}. To determine what the real
     * ambiguity is, we have to know whether the ambiguity is between one and
     * two or one and three so we keep going. We can only stop prediction when
     * we need exact ambiguity detection when the sets look like
     * {@code A={{1,2}}} or {@code {{1,2},{1,2}}}, etc...</p>
     */
    resolvesToJustOneViableAlt: function(n) {
      return i.getSingleViableAlt(n);
    },
    /**
     * Determines if every alternative subset in {@code altsets} contains more
     * than one alternative.
     *
     * @param altsets a collection of alternative subsets
     * @return {@code true} if every {@link BitSet} in {@code altsets} has
     * {@link BitSet//cardinality cardinality} &gt; 1, otherwise {@code false}
     */
    allSubsetsConflict: function(n) {
      return !i.hasNonConflictingAltSet(n);
    },
    /**
     * Determines if any single alternative subset in {@code altsets} contains
     * exactly one alternative.
     *
     * @param altsets a collection of alternative subsets
     * @return {@code true} if {@code altsets} contains a {@link BitSet} with
     * {@link BitSet//cardinality cardinality} 1, otherwise {@code false}
     */
    hasNonConflictingAltSet: function(n) {
      for (let l = 0; l < n.length; l++)
        if (n[l].length === 1)
          return !0;
      return !1;
    },
    /**
     * Determines if any single alternative subset in {@code altsets} contains
     * more than one alternative.
     *
     * @param altsets a collection of alternative subsets
     * @return {@code true} if {@code altsets} contains a {@link BitSet} with
     * {@link BitSet//cardinality cardinality} &gt; 1, otherwise {@code false}
     */
    hasConflictingAltSet: function(n) {
      for (let l = 0; l < n.length; l++)
        if (n[l].length > 1)
          return !0;
      return !1;
    },
    /**
     * Determines if every alternative subset in {@code altsets} is equivalent.
     *
     * @param altsets a collection of alternative subsets
     * @return {@code true} if every member of {@code altsets} is equal to the
     * others, otherwise {@code false}
     */
    allSubsetsEqual: function(n) {
      let l = null;
      for (let t = 0; t < n.length; t++) {
        const m = n[t];
        if (l === null)
          l = m;
        else if (m !== l)
          return !1;
      }
      return !0;
    },
    /**
     * Returns the unique alternative predicted by all alternative subsets in
     * {@code altsets}. If no such alternative exists, this method returns
     * {@link ATN//INVALID_ALT_NUMBER}.
     *
     * @param altsets a collection of alternative subsets
     */
    getUniqueAlt: function(n) {
      const l = i.getAlts(n);
      return l.length === 1 ? l.minValue() : a.INVALID_ALT_NUMBER;
    },
    /**
     * Gets the complete set of represented alternatives for a collection of
     * alternative subsets. This method returns the union of each {@link BitSet}
     * in {@code altsets}.
     *
     * @param altsets a collection of alternative subsets
     * @return the set of represented alternatives in {@code altsets}
     */
    getAlts: function(n) {
      const l = new g();
      return n.map(function(t) {
        l.or(t);
      }), l;
    },
    /**
     * This function gets the conflicting alt subsets from a configuration set.
     * For each configuration {@code c} in {@code configs}:
     *
     * <pre>
     * map[c] U= c.{@link ATNConfig//alt alt} // map hash/equals uses s and x, not
     * alt and not pred
     * </pre>
     */
    getConflictingAltSubsets: function(n) {
      const l = new f();
      return l.hashFunction = function(t) {
        p(t.state.stateNumber, t.context);
      }, l.equalsFunction = function(t, m) {
        return t.state.stateNumber === m.state.stateNumber && t.context.equals(m.context);
      }, n.items.map(function(t) {
        let m = l.get(t);
        m === null && (m = new g(), l.put(t, m)), m.add(t.alt);
      }), l.getValues();
    },
    /**
     * Get a map from state to alt subset from a configuration set. For each
     * configuration {@code c} in {@code configs}:
     *
     * <pre>
     * map[c.{@link ATNConfig//state state}] U= c.{@link ATNConfig//alt alt}
     * </pre>
     */
    getStateToAltMap: function(n) {
      const l = new _();
      return n.items.map(function(t) {
        let m = l.get(t.state);
        m === null && (m = new g(), l.put(t.state, m)), m.add(t.alt);
      }), l;
    },
    hasStateAssociatedWithOneAlt: function(n) {
      const l = i.getStateToAltMap(n).values();
      for (let t = 0; t < l.length; t++)
        if (l[t].length === 1)
          return !0;
      return !1;
    },
    getSingleViableAlt: function(n) {
      let l = null;
      for (let t = 0; t < n.length; t++) {
        const d = n[t].minValue();
        if (l === null)
          l = d;
        else if (l !== d)
          return a.INVALID_ALT_NUMBER;
      }
      return l;
    }
  };
  return vt = i, vt;
}
var It, dl;
function Ks() {
  if (dl) return It;
  dl = 1;
  const f = On(), g = Me(), _ = g.INVALID_INTERVAL, p = g.TerminalNode, a = g.TerminalNodeImpl, r = g.ErrorNodeImpl, e = pe().Interval;
  class u extends f {
    constructor(i, n) {
      i = i || null, n = n || null, super(i, n), this.ruleIndex = -1, this.children = null, this.start = null, this.stop = null, this.exception = null;
    }
    // COPY a ctx (I'm deliberately not using copy constructor)
    copyFrom(i) {
      this.parentCtx = i.parentCtx, this.invokingState = i.invokingState, this.children = null, this.start = i.start, this.stop = i.stop, i.children && (this.children = [], i.children.map(function(n) {
        n instanceof r && (this.children.push(n), n.parentCtx = this);
      }, this));
    }
    // Double dispatch methods for listeners
    enterRule(i) {
    }
    exitRule(i) {
    }
    // Does not set parent link; other add methods do that
    addChild(i) {
      return this.children === null && (this.children = []), this.children.push(i), i;
    }
    /** Used by enterOuterAlt to toss out a RuleContext previously added as
     * we entered a rule. If we have // label, we will need to remove
     * generic ruleContext object.
     */
    removeLastChild() {
      this.children !== null && this.children.pop();
    }
    addTokenNode(i) {
      const n = new a(i);
      return this.addChild(n), n.parentCtx = this, n;
    }
    addErrorNode(i) {
      const n = new r(i);
      return this.addChild(n), n.parentCtx = this, n;
    }
    getChild(i, n) {
      if (n = n || null, this.children === null || i < 0 || i >= this.children.length)
        return null;
      if (n === null)
        return this.children[i];
      for (let l = 0; l < this.children.length; l++) {
        const t = this.children[l];
        if (t instanceof n) {
          if (i === 0)
            return t;
          i -= 1;
        }
      }
      return null;
    }
    getToken(i, n) {
      if (this.children === null || n < 0 || n >= this.children.length)
        return null;
      for (let l = 0; l < this.children.length; l++) {
        const t = this.children[l];
        if (t instanceof p && t.symbol.type === i) {
          if (n === 0)
            return t;
          n -= 1;
        }
      }
      return null;
    }
    getTokens(i) {
      if (this.children === null)
        return [];
      {
        const n = [];
        for (let l = 0; l < this.children.length; l++) {
          const t = this.children[l];
          t instanceof p && t.symbol.type === i && n.push(t);
        }
        return n;
      }
    }
    getTypedRuleContext(i, n) {
      return this.getChild(n, i);
    }
    getTypedRuleContexts(i) {
      if (this.children === null)
        return [];
      {
        const n = [];
        for (let l = 0; l < this.children.length; l++) {
          const t = this.children[l];
          t instanceof i && n.push(t);
        }
        return n;
      }
    }
    getChildCount() {
      return this.children === null ? 0 : this.children.length;
    }
    getSourceInterval() {
      return this.start === null || this.stop === null ? _ : new e(this.start.tokenIndex, this.stop.tokenIndex);
    }
  }
  return f.EMPTY = new u(), It = u, It;
}
var Mt, pl;
function Ii() {
  if (pl) return Mt;
  pl = 1;
  const f = ce(), { Set: g, BitSet: _, DoubleDict: p } = f, a = Ee(), { ATNState: r, RuleStopState: e } = be(), { ATNConfig: u } = Ye(), { ATNConfigSet: s } = Ne(), { Token: i } = ue(), { DFAState: n, PredPrediction: l } = ze(), t = zs(), m = $s(), d = On();
  Ks();
  const { SemanticContext: o } = Ve(), { PredictionContext: h } = Le(), { Interval: c } = pe(), { Transition: y, SetTransition: T, NotSetTransition: N, RuleTransition: O, ActionTransition: P } = Ge(), { NoViableAltException: z } = Ce(), { SingletonPredictionContext: D, predictionContextFromRuleContext: F } = Le();
  class B extends t {
    constructor(I, S, C, b) {
      super(S, b), this.parser = I, this.decisionToDFA = C, this.predictionMode = m.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this.debug = !1, this.debug_closure = !1, this.debug_add = !1, this.debug_list_atn_decisions = !1, this.dfa_debug = !1, this.retry_debug = !1;
    }
    reset() {
    }
    adaptivePredict(I, S, C) {
      (this.debug || this.debug_list_atn_decisions) && console.log("adaptivePredict decision " + S + " exec LA(1)==" + this.getLookaheadName(I) + " line " + I.LT(1).line + ":" + I.LT(1).column), this._input = I, this._startIndex = I.index, this._outerContext = C;
      const b = this.decisionToDFA[S];
      this._dfa = b;
      const v = I.mark(), M = I.index;
      try {
        let A;
        if (b.precedenceDfa ? A = b.getPrecedenceStartState(this.parser.getPrecedence()) : A = b.s0, A === null) {
          C === null && (C = d.EMPTY), (this.debug || this.debug_list_atn_decisions) && console.log("predictATN decision " + b.decision + " exec LA(1)==" + this.getLookaheadName(I) + ", outerContext=" + C.toString(this.parser.ruleNames));
          let Y = this.computeStartState(b.atnStartState, d.EMPTY, !1);
          b.precedenceDfa ? (b.s0.configs = Y, Y = this.applyPrecedenceFilter(Y), A = this.addDFAState(b, new n(null, Y)), b.setPrecedenceStartState(this.parser.getPrecedence(), A)) : (A = this.addDFAState(b, new n(null, Y)), b.s0 = A);
        }
        const q = this.execATN(b, A, I, M, C);
        return this.debug && console.log("DFA after predictATN: " + b.toString(this.parser.literalNames, this.parser.symbolicNames)), q;
      } finally {
        this._dfa = null, this.mergeCache = null, I.seek(M), I.release(v);
      }
    }
    /**
     * Performs ATN simulation to compute a predicted alternative based
     *  upon the remaining input, but also updates the DFA cache to avoid
     *  having to traverse the ATN again for the same input sequence.
     *
     * There are some key conditions we're looking for after computing a new
     * set of ATN configs (proposed DFA state):
     *       if the set is empty, there is no viable alternative for current symbol
     *       does the state uniquely predict an alternative?
     *       does the state have a conflict that would prevent us from
     *         putting it on the work list?
     *
     * We also have some key operations to do:
     *       add an edge from previous DFA state to potentially new DFA state, D,
     *         upon current symbol but only if adding to work list, which means in all
     *         cases except no viable alternative (and possibly non-greedy decisions?)
     *       collecting predicates and adding semantic context to DFA accept states
     *       adding rule context to context-sensitive DFA accept states
     *       consuming an input symbol
     *       reporting a conflict
     *       reporting an ambiguity
     *       reporting a context sensitivity
     *       reporting insufficient predicates
     *
     * cover these cases:
     *    dead end
     *    single alt
     *    single alt + preds
     *    conflict
     *    conflict + preds
     *
     */
    execATN(I, S, C, b, v) {
      (this.debug || this.debug_list_atn_decisions) && console.log("execATN decision " + I.decision + " exec LA(1)==" + this.getLookaheadName(C) + " line " + C.LT(1).line + ":" + C.LT(1).column);
      let M, A = S;
      this.debug && console.log("s0 = " + S);
      let q = C.LA(1);
      for (; ; ) {
        let H = this.getExistingTargetState(A, q);
        if (H === null && (H = this.computeTargetState(I, A, q)), H === t.ERROR) {
          const Y = this.noViableAlt(C, v, A.configs, b);
          if (C.seek(b), M = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(A.configs, v), M !== a.INVALID_ALT_NUMBER)
            return M;
          throw Y;
        }
        if (H.requiresFullContext && this.predictionMode !== m.SLL) {
          let Y = null;
          if (H.predicates !== null) {
            this.debug && console.log("DFA state has preds in DFA sim LL failover");
            const ee = C.index;
            if (ee !== b && C.seek(b), Y = this.evalSemanticContext(H.predicates, v, !0), Y.length === 1)
              return this.debug && console.log("Full LL avoided"), Y.minValue();
            ee !== b && C.seek(ee);
          }
          this.dfa_debug && console.log("ctx sensitive state " + v + " in " + H);
          const Q = this.computeStartState(I.atnStartState, v, !0);
          return this.reportAttemptingFullContext(I, Y, H.configs, b, C.index), M = this.execATNWithFullContext(I, H, Q, C, b, v), M;
        }
        if (H.isAcceptState) {
          if (H.predicates === null)
            return H.prediction;
          const Y = C.index;
          C.seek(b);
          const Z = this.evalSemanticContext(H.predicates, v, !0);
          if (Z.length === 0)
            throw this.noViableAlt(C, v, H.configs, b);
          return Z.length === 1 || this.reportAmbiguity(I, H, b, Y, !1, Z, H.configs), Z.minValue();
        }
        A = H, q !== i.EOF && (C.consume(), q = C.LA(1));
      }
    }
    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns {@code null}.
     *
     * @param previousD The current DFA state
     * @param t The next input symbol
     * @return The existing target DFA state for the given input symbol
     * {@code t}, or {@code null} if the target state for this edge is not
     * already cached
     */
    getExistingTargetState(I, S) {
      const C = I.edges;
      return C === null ? null : C[S + 1] || null;
    }
    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param dfa The DFA
     * @param previousD The current DFA state
     * @param t The next input symbol
     *
     * @return The computed target DFA state for the given input symbol
     * {@code t}. If {@code t} does not lead to a valid DFA state, this method
     * returns {@link //ERROR
     */
    computeTargetState(I, S, C) {
      const b = this.computeReachSet(S.configs, C, !1);
      if (b === null)
        return this.addDFAEdge(I, S, C, t.ERROR), t.ERROR;
      let v = new n(null, b);
      const M = this.getUniqueAlt(b);
      if (this.debug) {
        const A = m.getConflictingAltSubsets(b);
        console.log("SLL altSubSets=" + f.arrayToString(A) + /*", previous=" + previousD.configs + */
        ", configs=" + b + ", predict=" + M + ", allSubsetsConflict=" + m.allSubsetsConflict(A) + ", conflictingAlts=" + this.getConflictingAlts(b));
      }
      return M !== a.INVALID_ALT_NUMBER ? (v.isAcceptState = !0, v.configs.uniqueAlt = M, v.prediction = M) : m.hasSLLConflictTerminatingPrediction(this.predictionMode, b) && (v.configs.conflictingAlts = this.getConflictingAlts(b), v.requiresFullContext = !0, v.isAcceptState = !0, v.prediction = v.configs.conflictingAlts.minValue()), v.isAcceptState && v.configs.hasSemanticContext && (this.predicateDFAState(v, this.atn.getDecisionState(I.decision)), v.predicates !== null && (v.prediction = a.INVALID_ALT_NUMBER)), v = this.addDFAEdge(I, S, C, v), v;
    }
    predicateDFAState(I, S) {
      const C = S.transitions.length, b = this.getConflictingAltsOrUniqueAlt(I.configs), v = this.getPredsForAmbigAlts(b, I.configs, C);
      v !== null ? (I.predicates = this.getPredicatePredictions(b, v), I.prediction = a.INVALID_ALT_NUMBER) : I.prediction = b.minValue();
    }
    // comes back with reach.uniqueAlt set to a valid alt
    execATNWithFullContext(I, S, C, b, v, M) {
      (this.debug || this.debug_list_atn_decisions) && console.log("execATNWithFullContext " + C);
      const A = !0;
      let q = !1, H, Y = C;
      b.seek(v);
      let Z = b.LA(1), Q = -1;
      for (; ; ) {
        if (H = this.computeReachSet(Y, Z, A), H === null) {
          const te = this.noViableAlt(b, M, Y, v);
          b.seek(v);
          const ie = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(Y, M);
          if (ie !== a.INVALID_ALT_NUMBER)
            return ie;
          throw te;
        }
        const ee = m.getConflictingAltSubsets(H);
        if (this.debug && console.log("LL altSubSets=" + ee + ", predict=" + m.getUniqueAlt(ee) + ", resolvesToJustOneViableAlt=" + m.resolvesToJustOneViableAlt(ee)), H.uniqueAlt = this.getUniqueAlt(H), H.uniqueAlt !== a.INVALID_ALT_NUMBER) {
          Q = H.uniqueAlt;
          break;
        } else if (this.predictionMode !== m.LL_EXACT_AMBIG_DETECTION) {
          if (Q = m.resolvesToJustOneViableAlt(ee), Q !== a.INVALID_ALT_NUMBER)
            break;
        } else if (m.allSubsetsConflict(ee) && m.allSubsetsEqual(ee)) {
          q = !0, Q = m.getSingleViableAlt(ee);
          break;
        }
        Y = H, Z !== i.EOF && (b.consume(), Z = b.LA(1));
      }
      return H.uniqueAlt !== a.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(I, Q, H, v, b.index), Q) : (this.reportAmbiguity(I, S, v, b.index, q, null, H), Q);
    }
    computeReachSet(I, S, C) {
      this.debug && console.log("in computeReachSet, starting closure: " + I), this.mergeCache === null && (this.mergeCache = new p());
      const b = new s(C);
      let v = null;
      for (let A = 0; A < I.items.length; A++) {
        const q = I.items[A];
        if (this.debug && console.log("testing " + this.getTokenName(S) + " at " + q), q.state instanceof e) {
          (C || S === i.EOF) && (v === null && (v = []), v.push(q), this.debug_add && console.log("added " + q + " to skippedStopStates"));
          continue;
        }
        for (let H = 0; H < q.state.transitions.length; H++) {
          const Y = q.state.transitions[H], Z = this.getReachableTarget(Y, S);
          if (Z !== null) {
            const Q = new u({ state: Z }, q);
            b.add(Q, this.mergeCache), this.debug_add && console.log("added " + Q + " to intermediate");
          }
        }
      }
      let M = null;
      if (v === null && S !== i.EOF && (b.items.length === 1 || this.getUniqueAlt(b) !== a.INVALID_ALT_NUMBER) && (M = b), M === null) {
        M = new s(C);
        const A = new g(), q = S === i.EOF;
        for (let H = 0; H < b.items.length; H++)
          this.closure(b.items[H], M, A, !1, C, q);
      }
      if (S === i.EOF && (M = this.removeAllConfigsNotInRuleStopState(M, M === b)), v !== null && (!C || !m.hasConfigInRuleStopState(M)))
        for (let A = 0; A < v.length; A++)
          M.add(v[A], this.mergeCache);
      return M.items.length === 0 ? null : M;
    }
    /**
     * Return a configuration set containing only the configurations from
     * {@code configs} which are in a {@link RuleStopState}. If all
     * configurations in {@code configs} are already in a rule stop state, this
     * method simply returns {@code configs}.
     *
     * <p>When {@code lookToEndOfRule} is true, this method uses
     * {@link ATN//nextTokens} for each configuration in {@code configs} which is
     * not already in a rule stop state to see if a rule stop state is reachable
     * from the configuration via epsilon-only transitions.</p>
     *
     * @param configs the configuration set to update
     * @param lookToEndOfRule when true, this method checks for rule stop states
     * reachable by epsilon-only transitions from each configuration in
     * {@code configs}.
     *
     * @return {@code configs} if all configurations in {@code configs} are in a
     * rule stop state, otherwise return a new configuration set containing only
     * the configurations from {@code configs} which are in a rule stop state
     */
    removeAllConfigsNotInRuleStopState(I, S) {
      if (m.allConfigsInRuleStopStates(I))
        return I;
      const C = new s(I.fullCtx);
      for (let b = 0; b < I.items.length; b++) {
        const v = I.items[b];
        if (v.state instanceof e) {
          C.add(v, this.mergeCache);
          continue;
        }
        if (S && v.state.epsilonOnlyTransitions && this.atn.nextTokens(v.state).contains(i.EPSILON)) {
          const A = this.atn.ruleToStopState[v.state.ruleIndex];
          C.add(new u({ state: A }, v), this.mergeCache);
        }
      }
      return C;
    }
    computeStartState(I, S, C) {
      const b = F(this.atn, S), v = new s(C);
      for (let M = 0; M < I.transitions.length; M++) {
        const A = I.transitions[M].target, q = new u({ state: A, alt: M + 1, context: b }, null), H = new g();
        this.closure(q, v, H, !0, C, !1);
      }
      return v;
    }
    /**
     * This method transforms the start state computed by
     * {@link //computeStartState} to the special start state used by a
     * precedence DFA for a particular precedence value. The transformation
     * process applies the following changes to the start state's configuration
     * set.
     *
     * <ol>
     * <li>Evaluate the precedence predicates for each configuration using
     * {@link SemanticContext//evalPrecedence}.</li>
     * <li>Remove all configurations which predict an alternative greater than
     * 1, for which another configuration that predicts alternative 1 is in the
     * same ATN state with the same prediction context. This transformation is
     * valid for the following reasons:
     * <ul>
     * <li>The closure block cannot contain any epsilon transitions which bypass
     * the body of the closure, so all states reachable via alternative 1 are
     * part of the precedence alternatives of the transformed left-recursive
     * rule.</li>
     * <li>The "primary" portion of a left recursive rule cannot contain an
     * epsilon transition, so the only way an alternative other than 1 can exist
     * in a state that is also reachable via alternative 1 is by nesting calls
     * to the left-recursive rule, with the outer calls not being at the
     * preferred precedence level.</li>
     * </ul>
     * </li>
     * </ol>
     *
     * <p>
     * The prediction context must be considered by this filter to address
     * situations like the following.
     * </p>
     * <code>
     * <pre>
     * grammar TA;
     * prog: statement* EOF;
     * statement: letterA | statement letterA 'b' ;
     * letterA: 'a';
     * </pre>
     * </code>
     * <p>
     * If the above grammar, the ATN state immediately before the token
     * reference {@code 'a'} in {@code letterA} is reachable from the left edge
     * of both the primary and closure blocks of the left-recursive rule
     * {@code statement}. The prediction context associated with each of these
     * configurations distinguishes between them, and prevents the alternative
     * which stepped out to {@code prog} (and then back in to {@code statement}
     * from being eliminated by the filter.
     * </p>
     *
     * @param configs The configuration set computed by
     * {@link //computeStartState} as the start state for the DFA.
     * @return The transformed configuration set representing the start state
     * for a precedence DFA at a particular precedence level (determined by
     * calling {@link Parser//getPrecedence})
     */
    applyPrecedenceFilter(I) {
      let S;
      const C = [], b = new s(I.fullCtx);
      for (let v = 0; v < I.items.length; v++) {
        if (S = I.items[v], S.alt !== 1)
          continue;
        const M = S.semanticContext.evalPrecedence(this.parser, this._outerContext);
        M !== null && (C[S.state.stateNumber] = S.context, M !== S.semanticContext ? b.add(new u({ semanticContext: M }, S), this.mergeCache) : b.add(S, this.mergeCache));
      }
      for (let v = 0; v < I.items.length; v++)
        if (S = I.items[v], S.alt !== 1) {
          if (!S.precedenceFilterSuppressed) {
            const M = C[S.state.stateNumber] || null;
            if (M !== null && M.equals(S.context))
              continue;
          }
          b.add(S, this.mergeCache);
        }
      return b;
    }
    getReachableTarget(I, S) {
      return I.matches(S, 0, this.atn.maxTokenType) ? I.target : null;
    }
    getPredsForAmbigAlts(I, S, C) {
      let b = [];
      for (let M = 0; M < S.items.length; M++) {
        const A = S.items[M];
        I.contains(A.alt) && (b[A.alt] = o.orContext(b[A.alt] || null, A.semanticContext));
      }
      let v = 0;
      for (let M = 1; M < C + 1; M++) {
        const A = b[M] || null;
        A === null ? b[M] = o.NONE : A !== o.NONE && (v += 1);
      }
      return v === 0 && (b = null), this.debug && console.log("getPredsForAmbigAlts result " + f.arrayToString(b)), b;
    }
    getPredicatePredictions(I, S) {
      const C = [];
      let b = !1;
      for (let v = 1; v < S.length; v++) {
        const M = S[v];
        I !== null && I.contains(v) && C.push(new l(M, v)), M !== o.NONE && (b = !0);
      }
      return b ? C : null;
    }
    /**
     * This method is used to improve the localization of error messages by
     * choosing an alternative rather than throwing a
     * {@link NoViableAltException} in particular prediction scenarios where the
     * {@link //ERROR} state was reached during ATN simulation.
     *
     * <p>
     * The default implementation of this method uses the following
     * algorithm to identify an ATN configuration which successfully parsed the
     * decision entry rule. Choosing such an alternative ensures that the
     * {@link ParserRuleContext} returned by the calling rule will be complete
     * and valid, and the syntax error will be reported later at a more
     * localized location.</p>
     *
     * <ul>
     * <li>If a syntactically valid path or paths reach the end of the decision rule and
     * they are semantically valid if predicated, return the min associated alt.</li>
     * <li>Else, if a semantically invalid but syntactically valid path exist
     * or paths exist, return the minimum associated alt.
     * </li>
     * <li>Otherwise, return {@link ATN//INVALID_ALT_NUMBER}.</li>
     * </ul>
     *
     * <p>
     * In some scenarios, the algorithm described above could predict an
     * alternative which will result in a {@link FailedPredicateException} in
     * the parser. Specifically, this could occur if the <em>only</em> configuration
     * capable of successfully parsing to the end of the decision rule is
     * blocked by a semantic predicate. By choosing this alternative within
     * {@link //adaptivePredict} instead of throwing a
     * {@link NoViableAltException}, the resulting
     * {@link FailedPredicateException} in the parser will identify the specific
     * predicate which is preventing the parser from successfully parsing the
     * decision rule, which helps developers identify and correct logic errors
     * in semantic predicates.
     * </p>
     *
     * @param configs The ATN configurations which were valid immediately before
     * the {@link //ERROR} state was reached
     * @param outerContext The is the \gamma_0 initial parser context from the paper
     * or the parser stack at the instant before prediction commences.
     *
     * @return The value to return from {@link //adaptivePredict}, or
     * {@link ATN//INVALID_ALT_NUMBER} if a suitable alternative was not
     * identified and {@link //adaptivePredict} should report an error instead
     */
    getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(I, S) {
      const C = this.splitAccordingToSemanticValidity(I, S), b = C[0], v = C[1];
      let M = this.getAltThatFinishedDecisionEntryRule(b);
      return M !== a.INVALID_ALT_NUMBER || v.items.length > 0 && (M = this.getAltThatFinishedDecisionEntryRule(v), M !== a.INVALID_ALT_NUMBER) ? M : a.INVALID_ALT_NUMBER;
    }
    getAltThatFinishedDecisionEntryRule(I) {
      const S = [];
      for (let C = 0; C < I.items.length; C++) {
        const b = I.items[C];
        (b.reachesIntoOuterContext > 0 || b.state instanceof e && b.context.hasEmptyPath()) && S.indexOf(b.alt) < 0 && S.push(b.alt);
      }
      return S.length === 0 ? a.INVALID_ALT_NUMBER : Math.min.apply(null, S);
    }
    /**
     * Walk the list of configurations and split them according to
     * those that have preds evaluating to true/false.  If no pred, assume
     * true pred and include in succeeded set.  Returns Pair of sets.
     *
     * Create a new set so as not to alter the incoming parameter.
     *
     * Assumption: the input stream has been restored to the starting point
     * prediction, which is where predicates need to evaluate.*/
    splitAccordingToSemanticValidity(I, S) {
      const C = new s(I.fullCtx), b = new s(I.fullCtx);
      for (let v = 0; v < I.items.length; v++) {
        const M = I.items[v];
        M.semanticContext !== o.NONE ? M.semanticContext.evaluate(this.parser, S) ? C.add(M) : b.add(M) : C.add(M);
      }
      return [C, b];
    }
    /**
     * Look through a list of predicate/alt pairs, returning alts for the
     * pairs that win. A {@code NONE} predicate indicates an alt containing an
     * unpredicated config which behaves as "always true." If !complete
     * then we stop at the first predicate that evaluates to true. This
     * includes pairs with null predicates.
     */
    evalSemanticContext(I, S, C) {
      const b = new _();
      for (let v = 0; v < I.length; v++) {
        const M = I[v];
        if (M.pred === o.NONE) {
          if (b.add(M.alt), !C)
            break;
          continue;
        }
        const A = M.pred.evaluate(this.parser, S);
        if ((this.debug || this.dfa_debug) && console.log("eval pred " + M + "=" + A), A && ((this.debug || this.dfa_debug) && console.log("PREDICT " + M.alt), b.add(M.alt), !C))
          break;
      }
      return b;
    }
    // TODO: If we are doing predicates, there is no point in pursuing
    //     closure operations if we reach a DFA state that uniquely predicts
    //     alternative. We will not be caching that DFA state and it is a
    //     waste to pursue the closure. Might have to advance when we do
    //     ambig detection thought :(
    //
    closure(I, S, C, b, v, M) {
      this.closureCheckingStopState(
        I,
        S,
        C,
        b,
        v,
        0,
        M
      );
    }
    closureCheckingStopState(I, S, C, b, v, M, A) {
      if ((this.debug || this.debug_closure) && (console.log("closure(" + I.toString(this.parser, !0) + ")"), I.reachesIntoOuterContext > 50))
        throw "problem";
      if (I.state instanceof e)
        if (I.context.isEmpty())
          if (v) {
            S.add(I, this.mergeCache);
            return;
          } else
            this.debug && console.log("FALLING off rule " + this.getRuleName(I.state.ruleIndex));
        else {
          for (let q = 0; q < I.context.length; q++) {
            if (I.context.getReturnState(q) === h.EMPTY_RETURN_STATE) {
              if (v) {
                S.add(new u({ state: I.state, context: h.EMPTY }, I), this.mergeCache);
                continue;
              } else
                this.debug && console.log("FALLING off rule " + this.getRuleName(I.state.ruleIndex)), this.closure_(
                  I,
                  S,
                  C,
                  b,
                  v,
                  M,
                  A
                );
              continue;
            }
            const H = this.atn.states[I.context.getReturnState(q)], Y = I.context.getParent(q), Z = { state: H, alt: I.alt, context: Y, semanticContext: I.semanticContext }, Q = new u(Z, null);
            Q.reachesIntoOuterContext = I.reachesIntoOuterContext, this.closureCheckingStopState(Q, S, C, b, v, M - 1, A);
          }
          return;
        }
      this.closure_(I, S, C, b, v, M, A);
    }
    // Do the actual work of walking epsilon edges//
    closure_(I, S, C, b, v, M, A) {
      const q = I.state;
      q.epsilonOnlyTransitions || S.add(I, this.mergeCache);
      for (let H = 0; H < q.transitions.length; H++) {
        if (H === 0 && this.canDropLoopEntryEdgeInLeftRecursiveRule(I))
          continue;
        const Y = q.transitions[H], Z = b && !(Y instanceof P), Q = this.getEpsilonTarget(I, Y, Z, M === 0, v, A);
        if (Q !== null) {
          let ee = M;
          if (I.state instanceof e) {
            if (this._dfa !== null && this._dfa.precedenceDfa && Y.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (Q.precedenceFilterSuppressed = !0), Q.reachesIntoOuterContext += 1, C.add(Q) !== Q)
              continue;
            S.dipsIntoOuterContext = !0, ee -= 1, this.debug && console.log("dips into outer ctx: " + Q);
          } else {
            if (!Y.isEpsilon && C.add(Q) !== Q)
              continue;
            Y instanceof O && ee >= 0 && (ee += 1);
          }
          this.closureCheckingStopState(Q, S, C, Z, v, ee, A);
        }
      }
    }
    canDropLoopEntryEdgeInLeftRecursiveRule(I) {
      const S = I.state;
      if (S.stateType !== r.STAR_LOOP_ENTRY || S.stateType !== r.STAR_LOOP_ENTRY || !S.isPrecedenceDecision || I.context.isEmpty() || I.context.hasEmptyPath())
        return !1;
      const C = I.context.length;
      for (let A = 0; A < C; A++)
        if (this.atn.states[I.context.getReturnState(A)].ruleIndex !== S.ruleIndex)
          return !1;
      const v = S.transitions[0].target.endState.stateNumber, M = this.atn.states[v];
      for (let A = 0; A < C; A++) {
        const q = I.context.getReturnState(A), H = this.atn.states[q];
        if (H.transitions.length !== 1 || !H.transitions[0].isEpsilon)
          return !1;
        const Y = H.transitions[0].target;
        if (!(H.stateType === r.BLOCK_END && Y === S) && H !== M && Y !== M && !(Y.stateType === r.BLOCK_END && Y.transitions.length === 1 && Y.transitions[0].isEpsilon && Y.transitions[0].target === S))
          return !1;
      }
      return !0;
    }
    getRuleName(I) {
      return this.parser !== null && I >= 0 ? this.parser.ruleNames[I] : "<rule " + I + ">";
    }
    getEpsilonTarget(I, S, C, b, v, M) {
      switch (S.serializationType) {
        case y.RULE:
          return this.ruleTransition(I, S);
        case y.PRECEDENCE:
          return this.precedenceTransition(I, S, C, b, v);
        case y.PREDICATE:
          return this.predTransition(I, S, C, b, v);
        case y.ACTION:
          return this.actionTransition(I, S);
        case y.EPSILON:
          return new u({ state: S.target }, I);
        case y.ATOM:
        case y.RANGE:
        case y.SET:
          return M && S.matches(i.EOF, 0, 1) ? new u({ state: S.target }, I) : null;
        default:
          return null;
      }
    }
    actionTransition(I, S) {
      if (this.debug) {
        const C = S.actionIndex === -1 ? 65535 : S.actionIndex;
        console.log("ACTION edge " + S.ruleIndex + ":" + C);
      }
      return new u({ state: S.target }, I);
    }
    precedenceTransition(I, S, C, b, v) {
      this.debug && (console.log("PRED (collectPredicates=" + C + ") " + S.precedence + ">=_p, ctx dependent=true"), this.parser !== null && console.log("context surrounding pred is " + f.arrayToString(this.parser.getRuleInvocationStack())));
      let M = null;
      if (C && b)
        if (v) {
          const A = this._input.index;
          this._input.seek(this._startIndex);
          const q = S.getPredicate().evaluate(this.parser, this._outerContext);
          this._input.seek(A), q && (M = new u({ state: S.target }, I));
        } else {
          const A = o.andContext(I.semanticContext, S.getPredicate());
          M = new u({ state: S.target, semanticContext: A }, I);
        }
      else
        M = new u({ state: S.target }, I);
      return this.debug && console.log("config from pred transition=" + M), M;
    }
    predTransition(I, S, C, b, v) {
      this.debug && (console.log("PRED (collectPredicates=" + C + ") " + S.ruleIndex + ":" + S.predIndex + ", ctx dependent=" + S.isCtxDependent), this.parser !== null && console.log("context surrounding pred is " + f.arrayToString(this.parser.getRuleInvocationStack())));
      let M = null;
      if (C && (S.isCtxDependent && b || !S.isCtxDependent))
        if (v) {
          const A = this._input.index;
          this._input.seek(this._startIndex);
          const q = S.getPredicate().evaluate(this.parser, this._outerContext);
          this._input.seek(A), q && (M = new u({ state: S.target }, I));
        } else {
          const A = o.andContext(I.semanticContext, S.getPredicate());
          M = new u({ state: S.target, semanticContext: A }, I);
        }
      else
        M = new u({ state: S.target }, I);
      return this.debug && console.log("config from pred transition=" + M), M;
    }
    ruleTransition(I, S) {
      this.debug && console.log("CALL rule " + this.getRuleName(S.target.ruleIndex) + ", ctx=" + I.context);
      const C = S.followState, b = D.create(I.context, C.stateNumber);
      return new u({ state: S.target, context: b }, I);
    }
    getConflictingAlts(I) {
      const S = m.getConflictingAltSubsets(I);
      return m.getAlts(S);
    }
    /**
     * Sam pointed out a problem with the previous definition, v3, of
     * ambiguous states. If we have another state associated with conflicting
     * alternatives, we should keep going. For example, the following grammar
     *
     * s : (ID | ID ID?) ';' ;
     *
     * When the ATN simulation reaches the state before ';', it has a DFA
     * state that looks like: [12|1|[], 6|2|[], 12|2|[]]. Naturally
     * 12|1|[] and 12|2|[] conflict, but we cannot stop processing this node
     * because alternative to has another way to continue, via [6|2|[]].
     * The key is that we have a single state that has config's only associated
     * with a single alternative, 2, and crucially the state transitions
     * among the configurations are all non-epsilon transitions. That means
     * we don't consider any conflicts that include alternative 2. So, we
     * ignore the conflict between alts 1 and 2. We ignore a set of
     * conflicting alts when there is an intersection with an alternative
     * associated with a single alt state in the state&rarr;config-list map.
     *
     * It's also the case that we might have two conflicting configurations but
     * also a 3rd nonconflicting configuration for a different alternative:
     * [1|1|[], 1|2|[], 8|3|[]]. This can come about from grammar:
     *
     * a : A | A | A B ;
     *
     * After matching input A, we reach the stop state for rule A, state 1.
     * State 8 is the state right before B. Clearly alternatives 1 and 2
     * conflict and no amount of further lookahead will separate the two.
     * However, alternative 3 will be able to continue and so we do not
     * stop working on this state. In the previous example, we're concerned
     * with states associated with the conflicting alternatives. Here alt
     * 3 is not associated with the conflicting configs, but since we can continue
     * looking for input reasonably, I don't declare the state done. We
     * ignore a set of conflicting alts when we have an alternative
     * that we still need to pursue
     */
    getConflictingAltsOrUniqueAlt(I) {
      let S = null;
      return I.uniqueAlt !== a.INVALID_ALT_NUMBER ? (S = new _(), S.add(I.uniqueAlt)) : S = I.conflictingAlts, S;
    }
    getTokenName(I) {
      if (I === i.EOF)
        return "EOF";
      if (this.parser !== null && this.parser.literalNames !== null)
        if (I >= this.parser.literalNames.length && I >= this.parser.symbolicNames.length)
          console.log("" + I + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens());
        else
          return (this.parser.literalNames[I] || this.parser.symbolicNames[I]) + "<" + I + ">";
      return "" + I;
    }
    getLookaheadName(I) {
      return this.getTokenName(I.LA(1));
    }
    /**
     * Used for debugging in adaptivePredict around execATN but I cut
     * it out for clarity now that alg. works well. We can leave this
     * "dead" code for a bit
     */
    dumpDeadEndConfigs(I) {
      console.log("dead end configs: ");
      const S = I.getDeadEndConfigs();
      for (let C = 0; C < S.length; C++) {
        const b = S[C];
        let v = "no edges";
        if (b.state.transitions.length > 0) {
          const M = b.state.transitions[0];
          M instanceof AtomTransition ? v = "Atom " + this.getTokenName(M.label) : M instanceof T && (v = (M instanceof N ? "~" : "") + "Set " + M.set);
        }
        console.error(b.toString(this.parser, !0) + ":" + v);
      }
    }
    noViableAlt(I, S, C, b) {
      return new z(this.parser, I, I.get(b), I.LT(1), C, S);
    }
    getUniqueAlt(I) {
      let S = a.INVALID_ALT_NUMBER;
      for (let C = 0; C < I.items.length; C++) {
        const b = I.items[C];
        if (S === a.INVALID_ALT_NUMBER)
          S = b.alt;
        else if (b.alt !== S)
          return a.INVALID_ALT_NUMBER;
      }
      return S;
    }
    /**
     * Add an edge to the DFA, if possible. This method calls
     * {@link //addDFAState} to ensure the {@code to} state is present in the
     * DFA. If {@code from} is {@code null}, or if {@code t} is outside the
     * range of edges that can be represented in the DFA tables, this method
     * returns without adding the edge to the DFA.
     *
     * <p>If {@code to} is {@code null}, this method returns {@code null}.
     * Otherwise, this method returns the {@link DFAState} returned by calling
     * {@link //addDFAState} for the {@code to} state.</p>
     *
     * @param dfa The DFA
     * @param from_ The source state for the edge
     * @param t The input symbol
     * @param to The target state for the edge
     *
     * @return If {@code to} is {@code null}, this method returns {@code null};
     * otherwise this method returns the result of calling {@link //addDFAState}
     * on {@code to}
     */
    addDFAEdge(I, S, C, b) {
      if (this.debug && console.log("EDGE " + S + " -> " + b + " upon " + this.getTokenName(C)), b === null)
        return null;
      if (b = this.addDFAState(I, b), S === null || C < -1 || C > this.atn.maxTokenType)
        return b;
      if (S.edges === null && (S.edges = []), S.edges[C + 1] = b, this.debug) {
        const v = this.parser === null ? null : this.parser.literalNames, M = this.parser === null ? null : this.parser.symbolicNames;
        console.log(`DFA=
` + I.toString(v, M));
      }
      return b;
    }
    /**
     * Add state {@code D} to the DFA if it is not already present, and return
     * the actual instance stored in the DFA. If a state equivalent to {@code D}
     * is already in the DFA, the existing state is returned. Otherwise this
     * method returns {@code D} after adding it to the DFA.
     *
     * <p>If {@code D} is {@link //ERROR}, this method returns {@link //ERROR} and
     * does not change the DFA.</p>
     *
     * @param dfa The dfa
     * @param D The DFA state to add
     * @return The state stored in the DFA. This will be either the existing
     * state if {@code D} is already in the DFA, or {@code D} itself if the
     * state was not already present
     */
    addDFAState(I, S) {
      if (S === t.ERROR)
        return S;
      const C = I.states.get(S);
      return C !== null ? C : (S.stateNumber = I.states.length, S.configs.readOnly || (S.configs.optimizeConfigs(this), S.configs.setReadonly(!0)), I.states.add(S), this.debug && console.log("adding new DFA state: " + S), S);
    }
    reportAttemptingFullContext(I, S, C, b, v) {
      if (this.debug || this.retry_debug) {
        const M = new c(b, v + 1);
        console.log("reportAttemptingFullContext decision=" + I.decision + ":" + C + ", input=" + this.parser.getTokenStream().getText(M));
      }
      this.parser !== null && this.parser.getErrorListenerDispatch().reportAttemptingFullContext(this.parser, I, b, v, S, C);
    }
    reportContextSensitivity(I, S, C, b, v) {
      if (this.debug || this.retry_debug) {
        const M = new c(b, v + 1);
        console.log("reportContextSensitivity decision=" + I.decision + ":" + C + ", input=" + this.parser.getTokenStream().getText(M));
      }
      this.parser !== null && this.parser.getErrorListenerDispatch().reportContextSensitivity(this.parser, I, b, v, S, C);
    }
    // If context sensitive parsing, we know it's ambiguity not conflict//
    reportAmbiguity(I, S, C, b, v, M, A) {
      if (this.debug || this.retry_debug) {
        const q = new c(C, b + 1);
        console.log("reportAmbiguity " + M + ":" + A + ", input=" + this.parser.getTokenStream().getText(q));
      }
      this.parser !== null && this.parser.getErrorListenerDispatch().reportAmbiguity(this.parser, I, C, b, v, M, A);
    }
  }
  return Mt = B, Mt;
}
var gl;
function Mi() {
  return gl || (gl = 1, Te.ATN = Ee(), Te.ATNDeserializer = Vs(), Te.LexerATNSimulator = vi(), Te.ParserATNSimulator = Ii(), Te.PredictionMode = $s()), Te;
}
var yl = {};
/*! https://mths.be/codepointat v0.2.0 by @mathias */
var Cl;
function js() {
  return Cl || (Cl = 1, String.prototype.codePointAt || function() {
    var f = function() {
      let _;
      try {
        const p = {}, a = Object.defineProperty;
        _ = a(p, p, p) && a;
      } catch {
      }
      return _;
    }();
    const g = function(_) {
      if (this == null)
        throw TypeError();
      const p = String(this), a = p.length;
      let r = _ ? Number(_) : 0;
      if (r !== r && (r = 0), r < 0 || r >= a)
        return;
      const e = p.charCodeAt(r);
      let u;
      return (
        // check if it’s the start of a surrogate pair
        e >= 55296 && e <= 56319 && // high surrogate
        a > r + 1 && (u = p.charCodeAt(r + 1), u >= 56320 && u <= 57343) ? (e - 55296) * 1024 + u - 56320 + 65536 : e
      );
    };
    f ? f(String.prototype, "codePointAt", {
      value: g,
      configurable: !0,
      writable: !0
    }) : String.prototype.codePointAt = g;
  }()), yl;
}
var ve = {}, Et, _l;
function Je() {
  if (_l) return Et;
  _l = 1;
  const f = ce();
  class g {
    constructor(a, r, e) {
      this.dfa = a, this.literalNames = r || [], this.symbolicNames = e || [];
    }
    toString() {
      if (this.dfa.s0 === null)
        return null;
      let a = "";
      const r = this.dfa.sortedStates();
      for (let e = 0; e < r.length; e++) {
        const u = r[e];
        if (u.edges !== null) {
          const s = u.edges.length;
          for (let i = 0; i < s; i++) {
            const n = u.edges[i] || null;
            n !== null && n.stateNumber !== 2147483647 && (a = a.concat(this.getStateString(u)), a = a.concat("-"), a = a.concat(this.getEdgeLabel(i)), a = a.concat("->"), a = a.concat(this.getStateString(n)), a = a.concat(`
`));
          }
        }
      }
      return a.length === 0 ? null : a;
    }
    getEdgeLabel(a) {
      return a === 0 ? "EOF" : this.literalNames !== null || this.symbolicNames !== null ? this.literalNames[a - 1] || this.symbolicNames[a - 1] : String.fromCharCode(a - 1);
    }
    getStateString(a) {
      const r = (a.isAcceptState ? ":" : "") + "s" + a.stateNumber + (a.requiresFullContext ? "^" : "");
      return a.isAcceptState ? a.predicates !== null ? r + "=>" + f.arrayToString(a.predicates) : r + "=>" + a.prediction.toString() : r;
    }
  }
  class _ extends g {
    constructor(a) {
      super(a, null);
    }
    getEdgeLabel(a) {
      return "'" + String.fromCharCode(a) + "'";
    }
  }
  return Et = { DFASerializer: g, LexerDFASerializer: _ }, Et;
}
var Nt, Ll;
function Ei() {
  if (Ll) return Nt;
  Ll = 1;
  const { Set: f } = ce(), { DFAState: g } = ze(), { StarLoopEntryState: _ } = be(), { ATNConfigSet: p } = Ne(), { DFASerializer: a } = Je(), { LexerDFASerializer: r } = Je();
  class e {
    constructor(s, i) {
      if (i === void 0 && (i = 0), this.atnStartState = s, this.decision = i, this._states = new f(), this.s0 = null, this.precedenceDfa = !1, s instanceof _ && s.isPrecedenceDecision) {
        this.precedenceDfa = !0;
        const n = new g(null, new p());
        n.edges = [], n.isAcceptState = !1, n.requiresFullContext = !1, this.s0 = n;
      }
    }
    /**
     * Get the start state for a specific precedence value.
     *
     * @param precedence The current precedence.
     * @return The start state corresponding to the specified precedence, or
     * {@code null} if no start state exists for the specified precedence.
     *
     * @throws IllegalStateException if this is not a precedence DFA.
     * @see //isPrecedenceDfa()
     */
    getPrecedenceStartState(s) {
      if (!this.precedenceDfa)
        throw "Only precedence DFAs may contain a precedence start state.";
      return s < 0 || s >= this.s0.edges.length ? null : this.s0.edges[s] || null;
    }
    /**
     * Set the start state for a specific precedence value.
     *
     * @param precedence The current precedence.
     * @param startState The start state corresponding to the specified
     * precedence.
     *
     * @throws IllegalStateException if this is not a precedence DFA.
     * @see //isPrecedenceDfa()
     */
    setPrecedenceStartState(s, i) {
      if (!this.precedenceDfa)
        throw "Only precedence DFAs may contain a precedence start state.";
      s < 0 || (this.s0.edges[s] = i);
    }
    /**
     * Sets whether this is a precedence DFA. If the specified value differs
     * from the current DFA configuration, the following actions are taken;
     * otherwise no changes are made to the current DFA.
     *
     * <ul>
     * <li>The {@link //states} map is cleared</li>
     * <li>If {@code precedenceDfa} is {@code false}, the initial state
     * {@link //s0} is set to {@code null}; otherwise, it is initialized to a new
     * {@link DFAState} with an empty outgoing {@link DFAState//edges} array to
     * store the start states for individual precedence values.</li>
     * <li>The {@link //precedenceDfa} field is updated</li>
     * </ul>
     *
     * @param precedenceDfa {@code true} if this is a precedence DFA; otherwise,
     * {@code false}
     */
    setPrecedenceDfa(s) {
      if (this.precedenceDfa !== s) {
        if (this._states = new f(), s) {
          const i = new g(null, new p());
          i.edges = [], i.isAcceptState = !1, i.requiresFullContext = !1, this.s0 = i;
        } else
          this.s0 = null;
        this.precedenceDfa = s;
      }
    }
    /**
     * Return a list of all states in this DFA, ordered by state number.
     */
    sortedStates() {
      return this._states.values().sort(function(i, n) {
        return i.stateNumber - n.stateNumber;
      });
    }
    toString(s, i) {
      return s = s || null, i = i || null, this.s0 === null ? "" : new a(this, s, i).toString();
    }
    toLexerString() {
      return this.s0 === null ? "" : new r(this).toString();
    }
    get states() {
      return this._states;
    }
  }
  return Nt = e, Nt;
}
var bl;
function Ni() {
  return bl || (bl = 1, ve.DFA = Ei(), ve.DFASerializer = Je().DFASerializer, ve.LexerDFASerializer = Je().LexerDFASerializer, ve.PredPrediction = ze().PredPrediction), ve;
}
var Tl = {};
/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
var Ul;
function Ws() {
  return Ul || (Ul = 1, String.fromCodePoint || function() {
    const f = function() {
      let a;
      try {
        const r = {}, e = Object.defineProperty;
        a = e(r, r, r) && e;
      } catch {
      }
      return a;
    }(), g = String.fromCharCode, _ = Math.floor, p = function(a) {
      const e = [];
      let u, s, i = -1;
      const n = arguments.length;
      if (!n)
        return "";
      let l = "";
      for (; ++i < n; ) {
        let t = Number(arguments[i]);
        if (!isFinite(t) || // `NaN`, `+Infinity`, or `-Infinity`
        t < 0 || // not a valid Unicode code point
        t > 1114111 || // not a valid Unicode code point
        _(t) !== t)
          throw RangeError("Invalid code point: " + t);
        t <= 65535 ? e.push(t) : (t -= 65536, u = (t >> 10) + 55296, s = t % 1024 + 56320, e.push(u, s)), (i + 1 === n || e.length > 16384) && (l += g.apply(null, e), e.length = 0);
      }
      return l;
    };
    f ? f(String, "fromCodePoint", {
      value: p,
      configurable: !0,
      writable: !0
    }) : String.fromCodePoint = p;
  }()), Tl;
}
var Ot, xl;
function Oi() {
  if (xl) return Ot;
  xl = 1;
  const f = Me(), g = Ds();
  return Ot = { ...f, Trees: g }, Ot;
}
var ge = {}, At, Sl;
function Ai() {
  if (Sl) return At;
  Sl = 1;
  const { BitSet: f } = ce(), { ErrorListener: g } = We(), { Interval: _ } = pe();
  class p extends g {
    constructor(r) {
      super(), r = r || !0, this.exactOnly = r;
    }
    reportAmbiguity(r, e, u, s, i, n, l) {
      if (this.exactOnly && !i)
        return;
      const t = "reportAmbiguity d=" + this.getDecisionDescription(r, e) + ": ambigAlts=" + this.getConflictingAlts(n, l) + ", input='" + r.getTokenStream().getText(new _(u, s)) + "'";
      r.notifyErrorListeners(t);
    }
    reportAttemptingFullContext(r, e, u, s, i, n) {
      const l = "reportAttemptingFullContext d=" + this.getDecisionDescription(r, e) + ", input='" + r.getTokenStream().getText(new _(u, s)) + "'";
      r.notifyErrorListeners(l);
    }
    reportContextSensitivity(r, e, u, s, i, n) {
      const l = "reportContextSensitivity d=" + this.getDecisionDescription(r, e) + ", input='" + r.getTokenStream().getText(new _(u, s)) + "'";
      r.notifyErrorListeners(l);
    }
    getDecisionDescription(r, e) {
      const u = e.decision, s = e.atnStartState.ruleIndex, i = r.ruleNames;
      if (s < 0 || s >= i.length)
        return "" + u;
      const n = i[s] || null;
      return n === null || n.length === 0 ? "" + u : `${u} (${n})`;
    }
    /**
     * Computes the set of conflicting or ambiguous alternatives from a
     * configuration set, if that information was not already provided by the
     * parser.
     *
     * @param reportedAlts The set of conflicting or ambiguous alternatives, as
     * reported by the parser.
     * @param configs The conflicting or ambiguous configuration set.
     * @return Returns {@code reportedAlts} if it is not {@code null}, otherwise
     * returns the set of alternatives represented in {@code configs}.
        */
    getConflictingAlts(r, e) {
      if (r !== null)
        return r;
      const u = new f();
      for (let s = 0; s < e.items.length; s++)
        u.add(e.items[s].alt);
      return `{${u.values().join(", ")}}`;
    }
  }
  return At = p, At;
}
var Rt, vl;
function En() {
  if (vl) return Rt;
  vl = 1;
  const { Token: f } = ue(), { NoViableAltException: g, InputMismatchException: _, FailedPredicateException: p, ParseCancellationException: a } = Ce(), { ATNState: r } = be(), { Interval: e, IntervalSet: u } = pe();
  class s {
    reset(t) {
    }
    recoverInline(t) {
    }
    recover(t, m) {
    }
    sync(t) {
    }
    inErrorRecoveryMode(t) {
    }
    reportError(t) {
    }
  }
  class i extends s {
    constructor() {
      super(), this.errorRecoveryMode = !1, this.lastErrorIndex = -1, this.lastErrorStates = null, this.nextTokensContext = null, this.nextTokenState = 0;
    }
    /**
     * <p>The default implementation simply calls {@link //endErrorCondition} to
     * ensure that the handler is not in error recovery mode.</p>
    */
    reset(t) {
      this.endErrorCondition(t);
    }
    /**
     * This method is called to enter error recovery mode when a recognition
     * exception is reported.
     *
     * @param recognizer the parser instance
    */
    beginErrorCondition(t) {
      this.errorRecoveryMode = !0;
    }
    inErrorRecoveryMode(t) {
      return this.errorRecoveryMode;
    }
    /**
     * This method is called to leave error recovery mode after recovering from
     * a recognition exception.
     * @param recognizer
     */
    endErrorCondition(t) {
      this.errorRecoveryMode = !1, this.lastErrorStates = null, this.lastErrorIndex = -1;
    }
    /**
     * {@inheritDoc}
     * <p>The default implementation simply calls {@link //endErrorCondition}.</p>
     */
    reportMatch(t) {
      this.endErrorCondition(t);
    }
    /**
     * {@inheritDoc}
     *
     * <p>The default implementation returns immediately if the handler is already
     * in error recovery mode. Otherwise, it calls {@link //beginErrorCondition}
     * and dispatches the reporting task based on the runtime type of {@code e}
     * according to the following table.</p>
     *
     * <ul>
     * <li>{@link NoViableAltException}: Dispatches the call to
     * {@link //reportNoViableAlternative}</li>
     * <li>{@link InputMismatchException}: Dispatches the call to
     * {@link //reportInputMismatch}</li>
     * <li>{@link FailedPredicateException}: Dispatches the call to
     * {@link //reportFailedPredicate}</li>
     * <li>All other types: calls {@link Parser//notifyErrorListeners} to report
     * the exception</li>
     * </ul>
     */
    reportError(t, m) {
      this.inErrorRecoveryMode(t) || (this.beginErrorCondition(t), m instanceof g ? this.reportNoViableAlternative(t, m) : m instanceof _ ? this.reportInputMismatch(t, m) : m instanceof p ? this.reportFailedPredicate(t, m) : (console.log("unknown recognition error type: " + m.constructor.name), console.log(m.stack), t.notifyErrorListeners(m.getOffendingToken(), m.getMessage(), m)));
    }
    /**
     *
     * {@inheritDoc}
     *
     * <p>The default implementation resynchronizes the parser by consuming tokens
     * until we find one in the resynchronization set--loosely the set of tokens
     * that can follow the current rule.</p>
     *
     */
    recover(t, m) {
      this.lastErrorIndex === t.getInputStream().index && this.lastErrorStates !== null && this.lastErrorStates.indexOf(t.state) >= 0 && t.consume(), this.lastErrorIndex = t._input.index, this.lastErrorStates === null && (this.lastErrorStates = []), this.lastErrorStates.push(t.state);
      const d = this.getErrorRecoverySet(t);
      this.consumeUntil(t, d);
    }
    /**
     * The default implementation of {@link ANTLRErrorStrategy//sync} makes sure
     * that the current lookahead symbol is consistent with what were expecting
     * at this point in the ATN. You can call this anytime but ANTLR only
     * generates code to check before subrules/loops and each iteration.
     *
     * <p>Implements Jim Idle's magic sync mechanism in closures and optional
     * subrules. E.g.,</p>
     *
     * <pre>
     * a : sync ( stuff sync )* ;
     * sync : {consume to what can follow sync} ;
     * </pre>
     *
     * At the start of a sub rule upon error, {@link //sync} performs single
     * token deletion, if possible. If it can't do that, it bails on the current
     * rule and uses the default error recovery, which consumes until the
     * resynchronization set of the current rule.
     *
     * <p>If the sub rule is optional ({@code (...)?}, {@code (...)*}, or block
     * with an empty alternative), then the expected set includes what follows
     * the subrule.</p>
     *
     * <p>During loop iteration, it consumes until it sees a token that can start a
     * sub rule or what follows loop. Yes, that is pretty aggressive. We opt to
     * stay in the loop as long as possible.</p>
     *
     * <p><strong>ORIGINS</strong></p>
     *
     * <p>Previous versions of ANTLR did a poor job of their recovery within loops.
     * A single mismatch token or missing token would force the parser to bail
     * out of the entire rules surrounding the loop. So, for rule</p>
     *
     * <pre>
     * classDef : 'class' ID '{' member* '}'
     * </pre>
     *
     * input with an extra token between members would force the parser to
     * consume until it found the next class definition rather than the next
     * member definition of the current class.
     *
     * <p>This functionality cost a little bit of effort because the parser has to
     * compare token set at the start of the loop and at each iteration. If for
     * some reason speed is suffering for you, you can turn off this
     * functionality by simply overriding this method as a blank { }.</p>
     *
     */
    sync(t) {
      if (this.inErrorRecoveryMode(t))
        return;
      const m = t._interp.atn.states[t.state], d = t.getTokenStream().LA(1), o = t.atn.nextTokens(m);
      if (o.contains(d)) {
        this.nextTokensContext = null, this.nextTokenState = r.INVALID_STATE_NUMBER;
        return;
      } else if (o.contains(f.EPSILON)) {
        this.nextTokensContext === null && (this.nextTokensContext = t._ctx, this.nextTokensState = t._stateNumber);
        return;
      }
      switch (m.stateType) {
        case r.BLOCK_START:
        case r.STAR_BLOCK_START:
        case r.PLUS_BLOCK_START:
        case r.STAR_LOOP_ENTRY:
          if (this.singleTokenDeletion(t) !== null)
            return;
          throw new _(t);
        case r.PLUS_LOOP_BACK:
        case r.STAR_LOOP_BACK:
          this.reportUnwantedToken(t);
          const h = new u();
          h.addSet(t.getExpectedTokens());
          const c = h.addSet(this.getErrorRecoverySet(t));
          this.consumeUntil(t, c);
          break;
      }
    }
    /**
     * This is called by {@link //reportError} when the exception is a
     * {@link NoViableAltException}.
     *
     * @see //reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportNoViableAlternative(t, m) {
      const d = t.getTokenStream();
      let o;
      d !== null ? m.startToken.type === f.EOF ? o = "<EOF>" : o = d.getText(new e(m.startToken.tokenIndex, m.offendingToken.tokenIndex)) : o = "<unknown input>";
      const h = "no viable alternative at input " + this.escapeWSAndQuote(o);
      t.notifyErrorListeners(h, m.offendingToken, m);
    }
    /**
     * This is called by {@link //reportError} when the exception is an
     * {@link InputMismatchException}.
     *
     * @see //reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportInputMismatch(t, m) {
      const d = "mismatched input " + this.getTokenErrorDisplay(m.offendingToken) + " expecting " + m.getExpectedTokens().toString(t.literalNames, t.symbolicNames);
      t.notifyErrorListeners(d, m.offendingToken, m);
    }
    /**
     * This is called by {@link //reportError} when the exception is a
     * {@link FailedPredicateException}.
     *
     * @see //reportError
     *
     * @param recognizer the parser instance
     * @param e the recognition exception
     */
    reportFailedPredicate(t, m) {
      const o = "rule " + t.ruleNames[t._ctx.ruleIndex] + " " + m.message;
      t.notifyErrorListeners(o, m.offendingToken, m);
    }
    /**
     * This method is called to report a syntax error which requires the removal
     * of a token from the input stream. At the time this method is called, the
     * erroneous symbol is current {@code LT(1)} symbol and has not yet been
     * removed from the input stream. When this method returns,
     * {@code recognizer} is in error recovery mode.
     *
     * <p>This method is called when {@link //singleTokenDeletion} identifies
     * single-token deletion as a viable recovery strategy for a mismatched
     * input error.</p>
     *
     * <p>The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link //beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser//notifyErrorListeners}.</p>
     *
     * @param recognizer the parser instance
     *
     */
    reportUnwantedToken(t) {
      if (this.inErrorRecoveryMode(t))
        return;
      this.beginErrorCondition(t);
      const m = t.getCurrentToken(), d = this.getTokenErrorDisplay(m), o = this.getExpectedTokens(t), h = "extraneous input " + d + " expecting " + o.toString(t.literalNames, t.symbolicNames);
      t.notifyErrorListeners(h, m, null);
    }
    /**
     * This method is called to report a syntax error which requires the
     * insertion of a missing token into the input stream. At the time this
     * method is called, the missing token has not yet been inserted. When this
     * method returns, {@code recognizer} is in error recovery mode.
     *
     * <p>This method is called when {@link //singleTokenInsertion} identifies
     * single-token insertion as a viable recovery strategy for a mismatched
     * input error.</p>
     *
     * <p>The default implementation simply returns if the handler is already in
     * error recovery mode. Otherwise, it calls {@link //beginErrorCondition} to
     * enter error recovery mode, followed by calling
     * {@link Parser//notifyErrorListeners}.</p>
     *
     * @param recognizer the parser instance
     */
    reportMissingToken(t) {
      if (this.inErrorRecoveryMode(t))
        return;
      this.beginErrorCondition(t);
      const m = t.getCurrentToken(), o = "missing " + this.getExpectedTokens(t).toString(t.literalNames, t.symbolicNames) + " at " + this.getTokenErrorDisplay(m);
      t.notifyErrorListeners(o, m, null);
    }
    /**
     * <p>The default implementation attempts to recover from the mismatched input
     * by using single token insertion and deletion as described below. If the
     * recovery attempt fails, this method throws an
     * {@link InputMismatchException}.</p>
     *
     * <p><strong>EXTRA TOKEN</strong> (single token deletion)</p>
     *
     * <p>{@code LA(1)} is not what we are looking for. If {@code LA(2)} has the
     * right token, however, then assume {@code LA(1)} is some extra spurious
     * token and delete it. Then consume and return the next token (which was
     * the {@code LA(2)} token) as the successful result of the match operation.</p>
     *
     * <p>This recovery strategy is implemented by {@link
     * //singleTokenDeletion}.</p>
     *
     * <p><strong>MISSING TOKEN</strong> (single token insertion)</p>
     *
     * <p>If current token (at {@code LA(1)}) is consistent with what could come
     * after the expected {@code LA(1)} token, then assume the token is missing
     * and use the parser's {@link TokenFactory} to create it on the fly. The
     * "insertion" is performed by returning the created token as the successful
     * result of the match operation.</p>
     *
     * <p>This recovery strategy is implemented by {@link
     * //singleTokenInsertion}.</p>
     *
     * <p><strong>EXAMPLE</strong></p>
     *
     * <p>For example, Input {@code i=(3;} is clearly missing the {@code ')'}. When
     * the parser returns from the nested call to {@code expr}, it will have
     * call chain:</p>
     *
     * <pre>
     * stat &rarr; expr &rarr; atom
     * </pre>
     *
     * and it will be trying to match the {@code ')'} at this point in the
     * derivation:
     *
     * <pre>
     * =&gt; ID '=' '(' INT ')' ('+' atom)* ';'
     * ^
     * </pre>
     *
     * The attempt to match {@code ')'} will fail when it sees {@code ';'} and
     * call {@link //recoverInline}. To recover, it sees that {@code LA(1)==';'}
     * is in the set of tokens that can follow the {@code ')'} token reference
     * in rule {@code atom}. It can assume that you forgot the {@code ')'}.
     */
    recoverInline(t) {
      const m = this.singleTokenDeletion(t);
      if (m !== null)
        return t.consume(), m;
      if (this.singleTokenInsertion(t))
        return this.getMissingSymbol(t);
      throw new _(t);
    }
    /**
     * This method implements the single-token insertion inline error recovery
     * strategy. It is called by {@link //recoverInline} if the single-token
     * deletion strategy fails to recover from the mismatched input. If this
     * method returns {@code true}, {@code recognizer} will be in error recovery
     * mode.
     *
     * <p>This method determines whether or not single-token insertion is viable by
     * checking if the {@code LA(1)} input symbol could be successfully matched
     * if it were instead the {@code LA(2)} symbol. If this method returns
     * {@code true}, the caller is responsible for creating and inserting a
     * token with the correct type to produce this behavior.</p>
     *
     * @param recognizer the parser instance
     * @return {@code true} if single-token insertion is a viable recovery
     * strategy for the current mismatched input, otherwise {@code false}
     */
    singleTokenInsertion(t) {
      const m = t.getTokenStream().LA(1), d = t._interp.atn, h = d.states[t.state].transitions[0].target;
      return d.nextTokens(h, t._ctx).contains(m) ? (this.reportMissingToken(t), !0) : !1;
    }
    /**
     * This method implements the single-token deletion inline error recovery
     * strategy. It is called by {@link //recoverInline} to attempt to recover
     * from mismatched input. If this method returns null, the parser and error
     * handler state will not have changed. If this method returns non-null,
     * {@code recognizer} will <em>not</em> be in error recovery mode since the
     * returned token was a successful match.
     *
     * <p>If the single-token deletion is successful, this method calls
     * {@link //reportUnwantedToken} to report the error, followed by
     * {@link Parser//consume} to actually "delete" the extraneous token. Then,
     * before returning {@link //reportMatch} is called to signal a successful
     * match.</p>
     *
     * @param recognizer the parser instance
     * @return the successfully matched {@link Token} instance if single-token
     * deletion successfully recovers from the mismatched input, otherwise
     * {@code null}
     */
    singleTokenDeletion(t) {
      const m = t.getTokenStream().LA(2);
      if (this.getExpectedTokens(t).contains(m)) {
        this.reportUnwantedToken(t), t.consume();
        const o = t.getCurrentToken();
        return this.reportMatch(t), o;
      } else
        return null;
    }
    /**
     * Conjure up a missing token during error recovery.
     *
     * The recognizer attempts to recover from single missing
     * symbols. But, actions might refer to that missing symbol.
     * For example, x=ID {f($x);}. The action clearly assumes
     * that there has been an identifier matched previously and that
     * $x points at that token. If that token is missing, but
     * the next token in the stream is what we want we assume that
     * this token is missing and we keep going. Because we
     * have to return some token to replace the missing token,
     * we have to conjure one up. This method gives the user control
     * over the tokens returned for missing tokens. Mostly,
     * you will want to create something special for identifier
     * tokens. For literals such as '{' and ',', the default
     * action in the parser or tree parser works. It simply creates
     * a CommonToken of the appropriate type. The text will be the token.
     * If you change what tokens must be created by the lexer,
     * override this method to create the appropriate tokens.
     *
     */
    getMissingSymbol(t) {
      const m = t.getCurrentToken(), o = this.getExpectedTokens(t).first();
      let h;
      o === f.EOF ? h = "<missing EOF>" : h = "<missing " + t.literalNames[o] + ">";
      let c = m;
      const y = t.getTokenStream().LT(-1);
      return c.type === f.EOF && y !== null && (c = y), t.getTokenFactory().create(
        c.source,
        o,
        h,
        f.DEFAULT_CHANNEL,
        -1,
        -1,
        c.line,
        c.column
      );
    }
    getExpectedTokens(t) {
      return t.getExpectedTokens();
    }
    /**
     * How should a token be displayed in an error message? The default
     * is to display just the text, but during development you might
     * want to have a lot of information spit out. Override in that case
     * to use t.toString() (which, for CommonToken, dumps everything about
     * the token). This is better than forcing you to override a method in
     * your token objects because you don't have to go modify your lexer
     * so that it creates a new Java type.
     */
    getTokenErrorDisplay(t) {
      if (t === null)
        return "<no token>";
      let m = t.text;
      return m === null && (t.type === f.EOF ? m = "<EOF>" : m = "<" + t.type + ">"), this.escapeWSAndQuote(m);
    }
    escapeWSAndQuote(t) {
      return t = t.replace(/\n/g, "\\n"), t = t.replace(/\r/g, "\\r"), t = t.replace(/\t/g, "\\t"), "'" + t + "'";
    }
    /**
     * Compute the error recovery set for the current rule. During
     * rule invocation, the parser pushes the set of tokens that can
     * follow that rule reference on the stack; this amounts to
     * computing FIRST of what follows the rule reference in the
     * enclosing rule. See LinearApproximator.FIRST().
     * This local follow set only includes tokens
     * from within the rule; i.e., the FIRST computation done by
     * ANTLR stops at the end of a rule.
     *
     * EXAMPLE
     *
     * When you find a "no viable alt exception", the input is not
     * consistent with any of the alternatives for rule r. The best
     * thing to do is to consume tokens until you see something that
     * can legally follow a call to r//or* any rule that called r.
     * You don't want the exact set of viable next tokens because the
     * input might just be missing a token--you might consume the
     * rest of the input looking for one of the missing tokens.
     *
     * Consider grammar:
     *
     * a : '[' b ']'
     * | '(' b ')'
     * ;
     * b : c '^' INT ;
     * c : ID
     * | INT
     * ;
     *
     * At each rule invocation, the set of tokens that could follow
     * that rule is pushed on a stack. Here are the various
     * context-sensitive follow sets:
     *
     * FOLLOW(b1_in_a) = FIRST(']') = ']'
     * FOLLOW(b2_in_a) = FIRST(')') = ')'
     * FOLLOW(c_in_b) = FIRST('^') = '^'
     *
     * Upon erroneous input "[]", the call chain is
     *
     * a -> b -> c
     *
     * and, hence, the follow context stack is:
     *
     * depth follow set start of rule execution
     * 0 <EOF> a (from main())
     * 1 ']' b
     * 2 '^' c
     *
     * Notice that ')' is not included, because b would have to have
     * been called from a different context in rule a for ')' to be
     * included.
     *
     * For error recovery, we cannot consider FOLLOW(c)
     * (context-sensitive or otherwise). We need the combined set of
     * all context-sensitive FOLLOW sets--the set of all tokens that
     * could follow any reference in the call chain. We need to
     * resync to one of those tokens. Note that FOLLOW(c)='^' and if
     * we resync'd to that token, we'd consume until EOF. We need to
     * sync to context-sensitive FOLLOWs for a, b, and c: {']','^'}.
     * In this case, for input "[]", LA(1) is ']' and in the set, so we would
     * not consume anything. After printing an error, rule c would
     * return normally. Rule b would not find the required '^' though.
     * At this point, it gets a mismatched token error and throws an
     * exception (since LA(1) is not in the viable following token
     * set). The rule exception handler tries to recover, but finds
     * the same recovery set and doesn't consume anything. Rule b
     * exits normally returning to rule a. Now it finds the ']' (and
     * with the successful match exits errorRecovery mode).
     *
     * So, you can see that the parser walks up the call chain looking
     * for the token that was a member of the recovery set.
     *
     * Errors are not generated in errorRecovery mode.
     *
     * ANTLR's error recovery mechanism is based upon original ideas:
     *
     * "Algorithms + Data Structures = Programs" by Niklaus Wirth
     *
     * and
     *
     * "A note on error recovery in recursive descent parsers":
     * http://portal.acm.org/citation.cfm?id=947902.947905
     *
     * Later, Josef Grosch had some good ideas:
     *
     * "Efficient and Comfortable Error Recovery in Recursive Descent
     * Parsers":
     * ftp://www.cocolab.com/products/cocktail/doca4.ps/ell.ps.zip
     *
     * Like Grosch I implement context-sensitive FOLLOW sets that are combined
     * at run-time upon error to avoid overhead during parsing.
     */
    getErrorRecoverySet(t) {
      const m = t._interp.atn;
      let d = t._ctx;
      const o = new u();
      for (; d !== null && d.invokingState >= 0; ) {
        const c = m.states[d.invokingState].transitions[0], y = m.nextTokens(c.followState);
        o.addSet(y), d = d.parentCtx;
      }
      return o.removeOne(f.EPSILON), o;
    }
    // Consume tokens until one matches the given token set.//
    consumeUntil(t, m) {
      let d = t.getTokenStream().LA(1);
      for (; d !== f.EOF && !m.contains(d); )
        t.consume(), d = t.getTokenStream().LA(1);
    }
  }
  class n extends i {
    constructor() {
      super();
    }
    /**
     * Instead of recovering from exception {@code e}, re-throw it wrapped
     * in a {@link ParseCancellationException} so it is not caught by the
     * rule function catches. Use {@link Exception//getCause()} to get the
     * original {@link RecognitionException}.
     */
    recover(t, m) {
      let d = t._ctx;
      for (; d !== null; )
        d.exception = m, d = d.parentCtx;
      throw new a(m);
    }
    /**
     * Make sure we don't attempt to recover inline; if the parser
     * successfully recovers, it won't throw an exception.
     */
    recoverInline(t) {
      this.recover(t, new _(t));
    }
    // Make sure we don't attempt to recover from problems in subrules.//
    sync(t) {
    }
  }
  return Rt = { BailErrorStrategy: n, DefaultErrorStrategy: i }, Rt;
}
var Il;
function Ri() {
  return Il || (Il = 1, ge.RecognitionException = Ce().RecognitionException, ge.NoViableAltException = Ce().NoViableAltException, ge.LexerNoViableAltException = Ce().LexerNoViableAltException, ge.InputMismatchException = Ce().InputMismatchException, ge.FailedPredicateException = Ce().FailedPredicateException, ge.DiagnosticErrorListener = Ai(), ge.BailErrorStrategy = En().BailErrorStrategy, ge.DefaultErrorStrategy = En().DefaultErrorStrategy, ge.ErrorListener = We().ErrorListener), ge;
}
var wt, Ml;
function wi() {
  if (Ml) return wt;
  Ml = 1;
  const { Token: f } = ue();
  js(), Ws();
  class g {
    constructor(p, a) {
      if (this.name = "<empty>", this.strdata = p, this.decodeToUnicodeCodePoints = a || !1, this._index = 0, this.data = [], this.decodeToUnicodeCodePoints)
        for (let r = 0; r < this.strdata.length; ) {
          const e = this.strdata.codePointAt(r);
          this.data.push(e), r += e <= 65535 ? 1 : 2;
        }
      else {
        this.data = new Array(this.strdata.length);
        for (let r = 0; r < this.strdata.length; r++) {
          const e = this.strdata.charCodeAt(r);
          this.data[r] = e;
        }
      }
      this._size = this.data.length;
    }
    /**
     * Reset the stream so that it's in the same state it was
     * when the object was created *except* the data array is not
     * touched.
     */
    reset() {
      this._index = 0;
    }
    consume() {
      if (this._index >= this._size)
        throw "cannot consume EOF";
      this._index += 1;
    }
    LA(p) {
      if (p === 0)
        return 0;
      p < 0 && (p += 1);
      const a = this._index + p - 1;
      return a < 0 || a >= this._size ? f.EOF : this.data[a];
    }
    LT(p) {
      return this.LA(p);
    }
    // mark/release do nothing; we have entire buffer
    mark() {
      return -1;
    }
    release(p) {
    }
    /**
     * consume() ahead until p==_index; can't just set p=_index as we must
     * update line and column. If we seek backwards, just set p
     */
    seek(p) {
      if (p <= this._index) {
        this._index = p;
        return;
      }
      this._index = Math.min(p, this._size);
    }
    getText(p, a) {
      if (a >= this._size && (a = this._size - 1), p >= this._size)
        return "";
      if (this.decodeToUnicodeCodePoints) {
        let r = "";
        for (let e = p; e <= a; e++)
          r += String.fromCodePoint(this.data[e]);
        return r;
      } else
        return this.strdata.slice(p, a + 1);
    }
    toString() {
      return this.strdata;
    }
    get index() {
      return this._index;
    }
    get size() {
      return this._size;
    }
  }
  return wt = g, wt;
}
var kt, El;
function ki() {
  if (El) return kt;
  El = 1;
  const { Token: f } = ue(), g = Ze(), { Interval: _ } = pe();
  class p {
  }
  class a extends p {
    constructor(e) {
      super(), this.tokenSource = e, this.tokens = [], this.index = -1, this.fetchedEOF = !1;
    }
    mark() {
      return 0;
    }
    release(e) {
    }
    reset() {
      this.seek(0);
    }
    seek(e) {
      this.lazyInit(), this.index = this.adjustSeekIndex(e);
    }
    get(e) {
      return this.lazyInit(), this.tokens[e];
    }
    consume() {
      let e = !1;
      if (this.index >= 0 ? this.fetchedEOF ? e = this.index < this.tokens.length - 1 : e = this.index < this.tokens.length : e = !1, !e && this.LA(1) === f.EOF)
        throw "cannot consume EOF";
      this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1));
    }
    /**
     * Make sure index {@code i} in tokens has a token.
     *
     * @return {Boolean} {@code true} if a token is located at index {@code i}, otherwise
     * {@code false}.
     * @see //get(int i)
     */
    sync(e) {
      const u = e - this.tokens.length + 1;
      return u > 0 ? this.fetch(u) >= u : !0;
    }
    /**
     * Add {@code n} elements to buffer.
     *
     * @return {Number} The actual number of elements added to the buffer.
     */
    fetch(e) {
      if (this.fetchedEOF)
        return 0;
      for (let u = 0; u < e; u++) {
        const s = this.tokenSource.nextToken();
        if (s.tokenIndex = this.tokens.length, this.tokens.push(s), s.type === f.EOF)
          return this.fetchedEOF = !0, u + 1;
      }
      return e;
    }
    // Get all tokens from start..stop inclusively///
    getTokens(e, u, s) {
      if (s === void 0 && (s = null), e < 0 || u < 0)
        return null;
      this.lazyInit();
      const i = [];
      u >= this.tokens.length && (u = this.tokens.length - 1);
      for (let n = e; n < u; n++) {
        const l = this.tokens[n];
        if (l.type === f.EOF)
          break;
        (s === null || s.contains(l.type)) && i.push(l);
      }
      return i;
    }
    LA(e) {
      return this.LT(e).type;
    }
    LB(e) {
      return this.index - e < 0 ? null : this.tokens[this.index - e];
    }
    LT(e) {
      if (this.lazyInit(), e === 0)
        return null;
      if (e < 0)
        return this.LB(-e);
      const u = this.index + e - 1;
      return this.sync(u), u >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[u];
    }
    /**
     * Allowed derived classes to modify the behavior of operations which change
     * the current stream position by adjusting the target token index of a seek
     * operation. The default implementation simply returns {@code i}. If an
     * exception is thrown in this method, the current stream index should not be
     * changed.
     *
     * <p>For example, {@link CommonTokenStream} overrides this method to ensure
     * that
     * the seek target is always an on-channel token.</p>
     *
     * @param {Number} i The target token index.
     * @return {Number} The adjusted target token index.
     */
    adjustSeekIndex(e) {
      return e;
    }
    lazyInit() {
      this.index === -1 && this.setup();
    }
    setup() {
      this.sync(0), this.index = this.adjustSeekIndex(0);
    }
    // Reset this token stream by setting its token source.///
    setTokenSource(e) {
      this.tokenSource = e, this.tokens = [], this.index = -1, this.fetchedEOF = !1;
    }
    /**
     * Given a starting index, return the index of the next token on channel.
     * Return i if tokens[i] is on channel. Return -1 if there are no tokens
     * on channel between i and EOF.
     */
    nextTokenOnChannel(e, u) {
      if (this.sync(e), e >= this.tokens.length)
        return -1;
      let s = this.tokens[e];
      for (; s.channel !== this.channel; ) {
        if (s.type === f.EOF)
          return -1;
        e += 1, this.sync(e), s = this.tokens[e];
      }
      return e;
    }
    /**
     * Given a starting index, return the index of the previous token on channel.
     * Return i if tokens[i] is on channel. Return -1 if there are no tokens
     * on channel between i and 0.
     */
    previousTokenOnChannel(e, u) {
      for (; e >= 0 && this.tokens[e].channel !== u; )
        e -= 1;
      return e;
    }
    /**
     * Collect all tokens on specified channel to the right of
     * the current token up until we see a token on DEFAULT_TOKEN_CHANNEL or
     * EOF. If channel is -1, find any non default channel token.
     */
    getHiddenTokensToRight(e, u) {
      if (u === void 0 && (u = -1), this.lazyInit(), e < 0 || e >= this.tokens.length)
        throw "" + e + " not in 0.." + this.tokens.length - 1;
      const s = this.nextTokenOnChannel(e + 1, g.DEFAULT_TOKEN_CHANNEL), i = e + 1, n = s === -1 ? this.tokens.length - 1 : s;
      return this.filterForChannel(i, n, u);
    }
    /**
     * Collect all tokens on specified channel to the left of
     * the current token up until we see a token on DEFAULT_TOKEN_CHANNEL.
     * If channel is -1, find any non default channel token.
     */
    getHiddenTokensToLeft(e, u) {
      if (u === void 0 && (u = -1), this.lazyInit(), e < 0 || e >= this.tokens.length)
        throw "" + e + " not in 0.." + this.tokens.length - 1;
      const s = this.previousTokenOnChannel(e - 1, g.DEFAULT_TOKEN_CHANNEL);
      if (s === e - 1)
        return null;
      const i = s + 1, n = e - 1;
      return this.filterForChannel(i, n, u);
    }
    filterForChannel(e, u, s) {
      const i = [];
      for (let n = e; n < u + 1; n++) {
        const l = this.tokens[n];
        s === -1 ? l.channel !== g.DEFAULT_TOKEN_CHANNEL && i.push(l) : l.channel === s && i.push(l);
      }
      return i.length === 0 ? null : i;
    }
    getSourceName() {
      return this.tokenSource.getSourceName();
    }
    // Get the text of all tokens in this buffer.///
    getText(e) {
      this.lazyInit(), this.fill(), e == null && (e = new _(0, this.tokens.length - 1));
      let u = e.start;
      u instanceof f && (u = u.tokenIndex);
      let s = e.stop;
      if (s instanceof f && (s = s.tokenIndex), u === null || s === null || u < 0 || s < 0)
        return "";
      s >= this.tokens.length && (s = this.tokens.length - 1);
      let i = "";
      for (let n = u; n < s + 1; n++) {
        const l = this.tokens[n];
        if (l.type === f.EOF)
          break;
        i = i + l.text;
      }
      return i;
    }
    // Get all tokens from lexer until EOF///
    fill() {
      for (this.lazyInit(); this.fetch(1e3) === 1e3; )
        ;
    }
  }
  return kt = a, kt;
}
var Pt, Nl;
function Pi() {
  if (Nl) return Pt;
  Nl = 1;
  const f = ue().Token, g = ki();
  class _ extends g {
    constructor(a, r) {
      super(a), this.channel = r === void 0 ? f.DEFAULT_CHANNEL : r;
    }
    adjustSeekIndex(a) {
      return this.nextTokenOnChannel(a, this.channel);
    }
    LB(a) {
      if (a === 0 || this.index - a < 0)
        return null;
      let r = this.index, e = 1;
      for (; e <= a; )
        r = this.previousTokenOnChannel(r - 1, this.channel), e += 1;
      return r < 0 ? null : this.tokens[r];
    }
    LT(a) {
      if (this.lazyInit(), a === 0)
        return null;
      if (a < 0)
        return this.LB(-a);
      let r = this.index, e = 1;
      for (; e < a; )
        this.sync(r + 1) && (r = this.nextTokenOnChannel(r + 1, this.channel)), e += 1;
      return this.tokens[r];
    }
    // Count EOF just once.
    getNumberOfOnChannelTokens() {
      let a = 0;
      this.fill();
      for (let r = 0; r < this.tokens.length; r++) {
        const e = this.tokens[r];
        if (e.channel === this.channel && (a += 1), e.type === f.EOF)
          break;
      }
      return a;
    }
  }
  return Pt = _, Pt;
}
var Ft, Ol;
function Fi() {
  if (Ol) return Ft;
  Ol = 1;
  const { Token: f } = ue(), { ParseTreeListener: g, TerminalNode: _, ErrorNode: p } = Me(), a = Gs(), { DefaultErrorStrategy: r } = En(), e = Vs(), u = Bs(), s = Ze();
  class i extends g {
    constructor(t) {
      super(), this.parser = t;
    }
    enterEveryRule(t) {
      console.log("enter   " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
    }
    visitTerminal(t) {
      console.log("consume " + t.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
    }
    exitEveryRule(t) {
      console.log("exit    " + this.parser.ruleNames[t.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
    }
  }
  class n extends a {
    /**
     * this is all the parsing support code essentially; most of it is error
     * recovery stuff.
     */
    constructor(t) {
      super(), this._input = null, this._errHandler = new r(), this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = !0, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(t);
    }
    // reset the parser's state
    reset() {
      this._input !== null && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(!1), this._precedenceStack = [], this._precedenceStack.push(0), this._interp !== null && this._interp.reset();
    }
    /**
     * Match current input symbol against {@code ttype}. If the symbol type
     * matches, {@link ANTLRErrorStrategy//reportMatch} and {@link //consume} are
     * called to complete the match process.
     *
     * <p>If the symbol type does not match,
     * {@link ANTLRErrorStrategy//recoverInline} is called on the current error
     * strategy to attempt recovery. If {@link //getBuildParseTree} is
     * {@code true} and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy//recoverInline} is -1, the symbol is added to
     * the parse tree by calling {@link ParserRuleContext//addErrorNode}.</p>
     *
     * @param ttype the token type to match
     * @return the matched symbol
     * @throws RecognitionException if the current input symbol did not match
     * {@code ttype} and the error strategy could not recover from the
     * mismatched symbol
     */
    match(t) {
      let m = this.getCurrentToken();
      return m.type === t ? (this._errHandler.reportMatch(this), this.consume()) : (m = this._errHandler.recoverInline(this), this.buildParseTrees && m.tokenIndex === -1 && this._ctx.addErrorNode(m)), m;
    }
    /**
     * Match current input symbol as a wildcard. If the symbol type matches
     * (i.e. has a value greater than 0), {@link ANTLRErrorStrategy//reportMatch}
     * and {@link //consume} are called to complete the match process.
     *
     * <p>If the symbol type does not match,
     * {@link ANTLRErrorStrategy//recoverInline} is called on the current error
     * strategy to attempt recovery. If {@link //getBuildParseTree} is
     * {@code true} and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy//recoverInline} is -1, the symbol is added to
     * the parse tree by calling {@link ParserRuleContext//addErrorNode}.</p>
     *
     * @return the matched symbol
     * @throws RecognitionException if the current input symbol did not match
     * a wildcard and the error strategy could not recover from the mismatched
     * symbol
     */
    matchWildcard() {
      let t = this.getCurrentToken();
      return t.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (t = this._errHandler.recoverInline(this), this._buildParseTrees && t.tokenIndex === -1 && this._ctx.addErrorNode(t)), t;
    }
    getParseListeners() {
      return this._parseListeners || [];
    }
    /**
     * Registers {@code listener} to receive events during the parsing process.
     *
     * <p>To support output-preserving grammar transformations (including but not
     * limited to left-recursion removal, automated left-factoring, and
     * optimized code generation), calls to listener methods during the parse
     * may differ substantially from calls made by
     * {@link ParseTreeWalker//DEFAULT} used after the parse is complete. In
     * particular, rule entry and exit events may occur in a different order
     * during the parse than after the parser. In addition, calls to certain
     * rule entry methods may be omitted.</p>
     *
     * <p>With the following specific exceptions, calls to listener events are
     * <em>deterministic</em>, i.e. for identical input the calls to listener
     * methods will be the same.</p>
     *
     * <ul>
     * <li>Alterations to the grammar used to generate code may change the
     * behavior of the listener calls.</li>
     * <li>Alterations to the command line options passed to ANTLR 4 when
     * generating the parser may change the behavior of the listener calls.</li>
     * <li>Changing the version of the ANTLR Tool used to generate the parser
     * may change the behavior of the listener calls.</li>
     * </ul>
     *
     * @param listener the listener to add
     *
     * @throws NullPointerException if {@code} listener is {@code null}
     */
    addParseListener(t) {
      if (t === null)
        throw "listener";
      this._parseListeners === null && (this._parseListeners = []), this._parseListeners.push(t);
    }
    /**
     * Remove {@code listener} from the list of parse listeners.
     *
     * <p>If {@code listener} is {@code null} or has not been added as a parse
     * listener, this method does nothing.</p>
     * @param listener the listener to remove
     */
    removeParseListener(t) {
      if (this._parseListeners !== null) {
        const m = this._parseListeners.indexOf(t);
        m >= 0 && this._parseListeners.splice(m, 1), this._parseListeners.length === 0 && (this._parseListeners = null);
      }
    }
    // Remove all parse listeners.
    removeParseListeners() {
      this._parseListeners = null;
    }
    // Notify any parse listeners of an enter rule event.
    triggerEnterRuleEvent() {
      if (this._parseListeners !== null) {
        const t = this._ctx;
        this._parseListeners.forEach(function(m) {
          m.enterEveryRule(t), t.enterRule(m);
        });
      }
    }
    /**
     * Notify any parse listeners of an exit rule event.
     * @see //addParseListener
     */
    triggerExitRuleEvent() {
      if (this._parseListeners !== null) {
        const t = this._ctx;
        this._parseListeners.slice(0).reverse().forEach(function(m) {
          t.exitRule(m), m.exitEveryRule(t);
        });
      }
    }
    getTokenFactory() {
      return this._input.tokenSource._factory;
    }
    // Tell our token source and error strategy about a new way to create tokens.
    setTokenFactory(t) {
      this._input.tokenSource._factory = t;
    }
    /**
     * The ATN with bypass alternatives is expensive to create so we create it
     * lazily.
     *
     * @throws UnsupportedOperationException if the current parser does not
     * implement the {@link //getSerializedATN()} method.
     */
    getATNWithBypassAlts() {
      const t = this.getSerializedATN();
      if (t === null)
        throw "The current parser does not support an ATN with bypass alternatives.";
      let m = this.bypassAltsAtnCache[t];
      if (m === null) {
        const d = new u();
        d.generateRuleBypassTransitions = !0, m = new e(d).deserialize(t), this.bypassAltsAtnCache[t] = m;
      }
      return m;
    }
    /**
     * The preferred method of getting a tree pattern. For example, here's a
     * sample use:
     *
     * <pre>
     * ParseTree t = parser.expr();
     * ParseTreePattern p = parser.compileParseTreePattern("&lt;ID&gt;+0",
     * MyParser.RULE_expr);
     * ParseTreeMatch m = p.match(t);
     * String id = m.get("ID");
     * </pre>
     */
    compileParseTreePattern(t, m, d) {
      if (d = d || null, d === null && this.getTokenStream() !== null) {
        const h = this.getTokenStream().tokenSource;
        h instanceof s && (d = h);
      }
      if (d === null)
        throw "Parser can't discover a lexer to use";
      return new ParseTreePatternMatcher(d, this).compile(t, m);
    }
    getInputStream() {
      return this.getTokenStream();
    }
    setInputStream(t) {
      this.setTokenStream(t);
    }
    getTokenStream() {
      return this._input;
    }
    // Set the token stream and reset the parser.
    setTokenStream(t) {
      this._input = null, this.reset(), this._input = t;
    }
    /**
     * Match needs to return the current input symbol, which gets put
     * into the label for the associated token ref; e.g., x=ID.
     */
    getCurrentToken() {
      return this._input.LT(1);
    }
    notifyErrorListeners(t, m, d) {
      m = m || null, d = d || null, m === null && (m = this.getCurrentToken()), this._syntaxErrors += 1;
      const o = m.line, h = m.column;
      this.getErrorListenerDispatch().syntaxError(this, m, o, h, t, d);
    }
    /**
     * Consume and return the {@linkplain //getCurrentToken current symbol}.
     *
     * <p>E.g., given the following input with {@code A} being the current
     * lookahead symbol, this function moves the cursor to {@code B} and returns
     * {@code A}.</p>
     *
     * <pre>
     * A B
     * ^
     * </pre>
     *
     * If the parser is not in error recovery mode, the consumed symbol is added
     * to the parse tree using {@link ParserRuleContext//addChild(Token)}, and
     * {@link ParseTreeListener//visitTerminal} is called on any parse listeners.
     * If the parser <em>is</em> in error recovery mode, the consumed symbol is
     * added to the parse tree using
     * {@link ParserRuleContext//addErrorNode(Token)}, and
     * {@link ParseTreeListener//visitErrorNode} is called on any parse
     * listeners.
     */
    consume() {
      const t = this.getCurrentToken();
      t.type !== f.EOF && this.getInputStream().consume();
      const m = this._parseListeners !== null && this._parseListeners.length > 0;
      if (this.buildParseTrees || m) {
        let d;
        this._errHandler.inErrorRecoveryMode(this) ? d = this._ctx.addErrorNode(t) : d = this._ctx.addTokenNode(t), d.invokingState = this.state, m && this._parseListeners.forEach(function(o) {
          d instanceof p || d.isErrorNode !== void 0 && d.isErrorNode() ? o.visitErrorNode(d) : d instanceof _ && o.visitTerminal(d);
        });
      }
      return t;
    }
    addContextToParseTree() {
      this._ctx.parentCtx !== null && this._ctx.parentCtx.addChild(this._ctx);
    }
    /**
     * Always called by generated parsers upon entry to a rule. Access field
     * {@link //_ctx} get the current context.
     */
    enterRule(t, m, d) {
      this.state = m, this._ctx = t, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), this.triggerEnterRuleEvent();
    }
    exitRule() {
      this._ctx.stop = this._input.LT(-1), this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx;
    }
    enterOuterAlt(t, m) {
      t.setAltNumber(m), this.buildParseTrees && this._ctx !== t && this._ctx.parentCtx !== null && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(t)), this._ctx = t;
    }
    /**
     * Get the precedence level for the top-most precedence rule.
     *
     * @return The precedence level for the top-most precedence rule, or -1 if
     * the parser context is not nested within a precedence rule.
     */
    getPrecedence() {
      return this._precedenceStack.length === 0 ? -1 : this._precedenceStack[this._precedenceStack.length - 1];
    }
    enterRecursionRule(t, m, d, o) {
      this.state = m, this._precedenceStack.push(o), this._ctx = t, this._ctx.start = this._input.LT(1), this.triggerEnterRuleEvent();
    }
    // Like {@link //enterRule} but for recursive rules.
    pushNewRecursionContext(t, m, d) {
      const o = this._ctx;
      o.parentCtx = t, o.invokingState = m, o.stop = this._input.LT(-1), this._ctx = t, this._ctx.start = o.start, this.buildParseTrees && this._ctx.addChild(o), this.triggerEnterRuleEvent();
    }
    unrollRecursionContexts(t) {
      this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1);
      const m = this._ctx, d = this.getParseListeners();
      if (d !== null && d.length > 0)
        for (; this._ctx !== t; )
          this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
      else
        this._ctx = t;
      m.parentCtx = t, this.buildParseTrees && t !== null && t.addChild(m);
    }
    getInvokingContext(t) {
      let m = this._ctx;
      for (; m !== null; ) {
        if (m.ruleIndex === t)
          return m;
        m = m.parentCtx;
      }
      return null;
    }
    precpred(t, m) {
      return m >= this._precedenceStack[this._precedenceStack.length - 1];
    }
    inContext(t) {
      return !1;
    }
    /**
     * Checks whether or not {@code symbol} can follow the current state in the
     * ATN. The behavior of this method is equivalent to the following, but is
     * implemented such that the complete context-sensitive follow set does not
     * need to be explicitly constructed.
     *
     * <pre>
     * return getExpectedTokens().contains(symbol);
     * </pre>
     *
     * @param symbol the symbol type to check
     * @return {@code true} if {@code symbol} can follow the current state in
     * the ATN, otherwise {@code false}.
     */
    isExpectedToken(t) {
      const m = this._interp.atn;
      let d = this._ctx;
      const o = m.states[this.state];
      let h = m.nextTokens(o);
      if (h.contains(t))
        return !0;
      if (!h.contains(f.EPSILON))
        return !1;
      for (; d !== null && d.invokingState >= 0 && h.contains(f.EPSILON); ) {
        const y = m.states[d.invokingState].transitions[0];
        if (h = m.nextTokens(y.followState), h.contains(t))
          return !0;
        d = d.parentCtx;
      }
      return !!(h.contains(f.EPSILON) && t === f.EOF);
    }
    /**
     * Computes the set of input symbols which could follow the current parser
     * state and context, as given by {@link //getState} and {@link //getContext},
     * respectively.
     *
     * @see ATN//getExpectedTokens(int, RuleContext)
     */
    getExpectedTokens() {
      return this._interp.atn.getExpectedTokens(this.state, this._ctx);
    }
    getExpectedTokensWithinCurrentRule() {
      const t = this._interp.atn, m = t.states[this.state];
      return t.nextTokens(m);
    }
    // Get a rule's index (i.e., {@code RULE_ruleName} field) or -1 if not found.
    getRuleIndex(t) {
      const m = this.getRuleIndexMap()[t];
      return m !== null ? m : -1;
    }
    /**
     * Return List&lt;String&gt; of the rule names in your parser instance
     * leading up to a call to the current rule. You could override if
     * you want more details such as the file/line info of where
     * in the ATN a rule is invoked.
     *
     * this is very useful for error messages.
     */
    getRuleInvocationStack(t) {
      t = t || null, t === null && (t = this._ctx);
      const m = [];
      for (; t !== null; ) {
        const d = t.ruleIndex;
        d < 0 ? m.push("n/a") : m.push(this.ruleNames[d]), t = t.parentCtx;
      }
      return m;
    }
    // For debugging and other purposes.
    getDFAStrings() {
      return this._interp.decisionToDFA.toString();
    }
    // For debugging and other purposes.
    dumpDFA() {
      let t = !1;
      for (let m = 0; m < this._interp.decisionToDFA.length; m++) {
        const d = this._interp.decisionToDFA[m];
        d.states.length > 0 && (t && console.log(), this.printer.println("Decision " + d.decision + ":"), this.printer.print(d.toString(this.literalNames, this.symbolicNames)), t = !0);
      }
    }
    /*
    	"			printer = function() {\r\n" +
    	"				this.println = function(s) { document.getElementById('output') += s + '\\n'; }\r\n" +
    	"				this.print = function(s) { document.getElementById('output') += s; }\r\n" +
    	"			};\r\n" +
    	*/
    getSourceName() {
      return this._input.sourceName;
    }
    /**
     * During a parse is sometimes useful to listen in on the rule entry and exit
     * events as well as token matches. this is for quick and dirty debugging.
     */
    setTrace(t) {
      t ? (this._tracer !== null && this.removeParseListener(this._tracer), this._tracer = new i(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null);
    }
  }
  return n.bypassAltsAtnCache = {}, Ft = n, Ft;
}
var Al;
function $e() {
  if (Al) return re;
  Al = 1, re.atn = Mi(), re.codepointat = js(), re.dfa = Ni(), re.fromcodepoint = Ws(), re.tree = Oi(), re.error = Ri(), re.Token = ue().Token, re.CommonToken = ue().CommonToken, re.InputStream = wi(), re.CommonTokenStream = Pi(), re.Lexer = Ze(), re.Parser = Fi();
  var f = Le();
  return re.PredictionContextCache = f.PredictionContextCache, re.ParserRuleContext = Ks(), re.Interval = pe().Interval, re.IntervalSet = pe().IntervalSet, re.Utils = ce(), re.LL1Analyzer = qs().LL1Analyzer, re;
}
var Dt, Rl;
function Di() {
  if (Rl) return Dt;
  Rl = 1;
  const f = $e(), g = [
    "悋Ꜫ脳맭䅼㯧瞆",
    "奤Cȗ\b		",
    "			\x07",
    `	\x07\b	\b			
	
\v	\v`,
    "\f	\f\r	\r		",
    "				",
    "			",
    "				",
    "\x1B	\x1B		",
    '		 	 !	!"	"#',
    "	#$	$%	%&	&'	'(	()	)",
    "*	*+	+,	,-	-.	./	/0	0",
    "1	12	23	34	45	56	67	7",
    "8	89	9:	:;	;<	<=	=>	>",
    "?	?@	@A	AB	BC	CD	DE	E",
    "F	FG	GH	H",
    "",
    "\x07\x07\b\b			",
    `	



\v\v\f`,
    "\f\f\r\r\r",
    "",
    "",
    "",
    "",
    "",
    "",
    "\x1B\x1B\x1B\x1B",
    "",
    "",
    "  !!!!",
    '!""""""##',
    "$$$$$$%%%%",
    "%%%&&&&&&&",
    "''((((()))",
    ")))*****++",
    "++,,,,,---",
    "----......",
    "./////////",
    "///0000001",
    "1111112222",
    "2233333444",
    "4445555555",
    "5666666667",
    "7777777777",
    "7788899999",
    `9Ɔ
99ƈ
9::::;`,
    ";;;;;;;;;;Ƙ",
    `
;;ƚ
;<<<<<<`,
    `<<<<<Ʀ
<\r<<Ƨ<ƪ`,
    `
<<Ƭ
<<Ʈ
<====`,
    `====Ʒ
=>>ƺ
>>\x07`,
    `>ƽ
>\f>>ǀ\v>???\x07?ǅ`,
    `
?\f??ǈ\v???@@@\x07`,
    `@Ǐ
@\f@@ǒ\v@@@AAǗ`,
    `
A\rAAǘAAAǝ
A\rAAǞ`,
    `Aǡ
ABBǤ
B\rBBǥBBǩ`,
    `
BCCǬ
C\rCCǭCCD`,
    `DDD\x07DǶ
D\fDDǹ\vDD`,
    `DDDDEEEE\x07EȄ
E\f`,
    "EEȇ\vEEEFFFFȎ",
    `
FGGGGGGHHǆ`,
    "ǐǷI\x07	\v",
    `\x07\r\b	
\v\f\r\x1B`,
    "!#%')+",
    "-/13\x1B579;= ?!A",
    `"C#E$G%I&K'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;uw`,
    "y{<}=>?@ABC",
    `
2;--//`,
    'C\\aac|2;C\\aac|\v\f"',
    `"\f\f
))11^^bbhhppttvv2`,
    ";CHchȧ",
    "\x07	",
    "\v\r",
    "",
    "",
    "",
    "\x1B",
    "!",
    "#%",
    "')",
    "+-",
    "/1",
    "357",
    "9;",
    "=?",
    "AC",
    "EG",
    "IKM",
    "OQ",
    "SU",
    "WY",
    "[]",
    "_ac",
    "eg",
    "ik",
    "mo",
    "qs",
    "{}",
    "",
    "",
    "",
    "\x07",
    "	\v",
    "\r",
    "£",
    "§©",
    "¬\x1B¯",
    "±´",
    "!¶#¸",
    "%»'½",
    ")¿+Â",
    "-Å/È",
    "1Ñ3Õ5Ø",
    "7Ü9ä",
    ";æ=è",
    "?êAì",
    "CñE÷",
    "GùIÿKĆ",
    "MčOď",
    "QĔSĚ",
    "UğWģ",
    "YĨ[į",
    "]Ķ_łaň",
    "cŏeŕ",
    "gŚiŠ",
    "kŨmŰ",
    "oŽqƀ",
    "sƉuƍwƛ",
    "yƶ{ƹ",
    "}ǁǋ",
    "ǖǣ",
    "ǫǱ",
    "ǿȊ",
    "ȏȕ",
    "\x070",
    "\x07]",
    "\x07_\b",
    `\x07-
`,
    "\x07/\f",
    "\x07,",
    "\x071",
    " \x07f ¡\x07k¡",
    "¢\x07x¢£",
    "¤\x07o¤¥\x07q¥¦",
    "\x07f¦§¨",
    "\x07(¨©ª",
    "\x07kª«\x07u«",
    "¬­\x07c­®\x07",
    "u®¯°\x07",
    "~°±²\x07",
    ">²³\x07?³",
    "´µ\x07>µ ",
    '¶·\x07@·"',
    "¸¹\x07@¹º\x07?º",
    "$»¼\x07?¼&",
    "½¾\x07¾(",
    "¿À\x07#ÀÁ\x07",
    "?Á*ÂÃ\x07#",
    "ÃÄ\x07Ä,",
    "ÅÆ\x07kÆÇ\x07p",
    "Ç.ÈÉ\x07eÉ",
    "Ê\x07qÊË\x07pËÌ",
    "\x07vÌÍ\x07cÍÎ\x07",
    "kÎÏ\x07pÏÐ\x07u",
    "Ð0ÑÒ\x07c",
    "ÒÓ\x07pÓÔ\x07fÔ",
    "2ÕÖ\x07qÖ×",
    "\x07t×4ØÙ\x07",
    "zÙÚ\x07qÚÛ\x07t",
    "Û6ÜÝ\x07k",
    "ÝÞ\x07oÞß\x07rß",
    "à\x07nàá\x07káâ",
    "\x07gâã\x07uã8",
    "äå\x07*å:",
    "æç\x07+ç<",
    "èé\x07}é>ê",
    "ë\x07ë@ì",
    "í\x07víî\x07tîï",
    "\x07wïð\x07gðB",
    "ñò\x07hòó\x07c",
    "óô\x07nôõ\x07u",
    "õö\x07göD÷",
    "ø\x07'øFùú",
    "\x07&úû\x07vûü\x07",
    "jüý\x07kýþ\x07u",
    "þHÿĀ\x07&",
    "Āā\x07kāĂ\x07pĂ",
    "ă\x07făĄ\x07gĄą",
    "\x07ząJĆć\x07",
    "&ćĈ\x07vĈĉ\x07q",
    "ĉĊ\x07vĊċ\x07c",
    "ċČ\x07nČLč",
    "Ď\x07.ĎNďĐ",
    "\x07{Đđ\x07gđĒ\x07",
    "cĒē\x07tēP",
    "Ĕĕ\x07oĕĖ\x07q",
    "Ėė\x07pėĘ\x07vĘ",
    "ę\x07jęRĚě",
    "\x07yěĜ\x07gĜĝ\x07",
    "gĝĞ\x07mĞT",
    "ğĠ\x07fĠġ\x07c",
    "ġĢ\x07{ĢVģ",
    "Ĥ\x07jĤĥ\x07qĥĦ",
    "\x07wĦħ\x07tħX",
    "Ĩĩ\x07oĩĪ\x07k",
    "Īī\x07pīĬ\x07w",
    "Ĭĭ\x07vĭĮ\x07gĮ",
    "Zįİ\x07uİı",
    "\x07gıĲ\x07eĲĳ\x07",
    "qĳĴ\x07pĴĵ\x07f",
    "ĵ\\Ķķ\x07o",
    "ķĸ\x07kĸĹ\x07nĹ",
    "ĺ\x07nĺĻ\x07kĻļ",
    "\x07uļĽ\x07gĽľ\x07",
    "eľĿ\x07qĿŀ\x07p",
    "ŀŁ\x07fŁ^",
    "łŃ\x07{Ńń\x07gń",
    "Ņ\x07cŅņ\x07tņŇ",
    "\x07uŇ`ňŉ\x07",
    "oŉŊ\x07qŊŋ\x07p",
    "ŋŌ\x07vŌō\x07j",
    "ōŎ\x07uŎbŏ",
    "Ő\x07yŐő\x07gőŒ",
    "\x07gŒœ\x07mœŔ\x07",
    "uŔdŕŖ\x07f",
    "Ŗŗ\x07cŗŘ\x07{",
    "Řř\x07uřfŚ",
    "ś\x07jśŜ\x07qŜŝ",
    "\x07wŝŞ\x07tŞş\x07",
    "uşhŠš\x07o",
    "šŢ\x07kŢţ\x07p",
    "ţŤ\x07wŤť\x07vť",
    "Ŧ\x07gŦŧ\x07uŧj",
    "Ũũ\x07uũŪ\x07",
    "gŪū\x07eūŬ\x07q",
    "Ŭŭ\x07pŭŮ\x07f",
    "Ůů\x07uůlŰ",
    "ű\x07oűŲ\x07kŲų",
    "\x07nųŴ\x07nŴŵ\x07",
    "kŵŶ\x07uŶŷ\x07g",
    "ŷŸ\x07eŸŹ\x07q",
    "Źź\x07pźŻ\x07fŻ",
    "ż\x07użnŽž",
    "\x07Bžſu;ſp",
    "ƀƁ\x07BƁƂu;Ƃ",
    "Ƈ\x07Vƃƅw<ƄƆ",
    "y=ƅƄƅƆ",
    "ƆƈƇƃ",
    "Ƈƈƈr",
    "ƉƊ\x07BƊƋ\x07V",
    "Ƌƌw<ƌtƍ",
    "Ǝ	ƎƏ	ƏƐ",
    "	Ɛƙ	Ƒƒ\x07",
    "/ƒƓ	ƓƗ	",
    "Ɣƕ\x07/ƕƖ	",
    "ƖƘ	ƗƔ",
    "ƗƘƘƚ",
    "ƙƑƙƚ",
    "ƚvƛƜ	Ɯ",
    "ƭ	Ɲƞ\x07<ƞƟ",
    "	Ɵƫ	Ơơ\x07",
    "<ơƢ	ƢƩ	",
    "ƣƥ\x070ƤƦ	",
    "ƥƤƦƧ",
    "ƧƥƧƨ",
    "ƨƪƩƣ",
    "ƩƪƪƬ",
    "ƫƠƫƬ",
    "ƬƮƭƝ",
    "ƭƮƮx",
    "ƯƷ\x07\\ưƱ	Ʊ",
    "Ʋ	ƲƳ	Ƴƴ",
    "\x07<ƴƵ	ƵƷ	",
    "ƶƯƶư",
    "ƷzƸƺ	",
    "ƹƸƺƾ",
    "ƻƽ	Ƽƻ",
    "ƽǀƾƼ",
    "ƾƿƿ|",
    "ǀƾǁǆ\x07b",
    "ǂǅFǃǅ\v",
    "ǄǂǄǃ",
    "ǅǈǆǇ",
    "ǆǄǇǉ",
    "ǈǆǉǊ\x07b",
    "Ǌ~ǋǐ\x07)",
    "ǌǏFǍǏ\v",
    "ǎǌǎǍ",
    "ǏǒǐǑ",
    "ǐǎǑǓ",
    "ǒǐǓǔ\x07)",
    "ǔǕǗ	",
    "ǖǕǗǘ",
    "ǘǖǘǙ",
    "ǙǠǚǜ\x070",
    "Ǜǝ	ǜǛ",
    "ǝǞǞǜ",
    "Ǟǟǟǡ",
    "ǠǚǠǡ",
    "ǡǢǤ	",
    "ǣǢǤǥ",
    "ǥǣǥǦ",
    "ǦǨǧǩ\x07N",
    "ǨǧǨǩ",
    "ǩǪǬ	",
    "ǫǪǬǭ",
    "ǭǫǭǮ",
    "Ǯǯǯǰ\bCǰ",
    "Ǳǲ\x071ǲ",
    "ǳ\x07,ǳǷǴ",
    "Ƕ\vǵǴǶ",
    "ǹǷǸǷ",
    "ǵǸǺǹ",
    "ǷǺǻ\x07,ǻ",
    "Ǽ\x071Ǽǽǽ",
    "Ǿ\bDǾǿȀ",
    "\x071Ȁȁ\x071ȁȅ",
    `ȂȄ
\x07ȃȂ`,
    "Ȅȇȅȃ",
    "ȅȆȆȈ",
    "ȇȅȈȉ\b",
    "EȉȊȍ\x07",
    "^ȋȎ	\bȌȎG",
    "ȍȋȍȌ",
    "ȎȏȐ\x07w",
    "ȐȑHȑȒHȒ",
    "ȓHȓȔHȔ",
    "ȕȖ		Ȗ",
    "ƅƇƗƙƧƩƫ",
    "ƭƶƹƼƾǄǆǎǐǘǞǠ",
    "ǥǨǭǷȅȍ"
  ].join(""), _ = new f.atn.ATNDeserializer().deserialize(g), p = _.decisionToState.map((r, e) => new f.dfa.DFA(r, e));
  class a extends f.Lexer {
    constructor(e) {
      super(e), this._interp = new f.atn.LexerATNSimulator(this, _, p, new f.PredictionContextCache());
    }
    get atn() {
      return _;
    }
  }
  return se(a, "grammarFileName", "FHIRPath.g4"), se(a, "channelNames", ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"]), se(a, "modeNames", ["DEFAULT_MODE"]), se(a, "literalNames", [
    null,
    "'.'",
    "'['",
    "']'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'div'",
    "'mod'",
    "'&'",
    "'is'",
    "'as'",
    "'|'",
    "'<='",
    "'<'",
    "'>'",
    "'>='",
    "'='",
    "'~'",
    "'!='",
    "'!~'",
    "'in'",
    "'contains'",
    "'and'",
    "'or'",
    "'xor'",
    "'implies'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'true'",
    "'false'",
    "'%'",
    "'$this'",
    "'$index'",
    "'$total'",
    "','",
    "'year'",
    "'month'",
    "'week'",
    "'day'",
    "'hour'",
    "'minute'",
    "'second'",
    "'millisecond'",
    "'years'",
    "'months'",
    "'weeks'",
    "'days'",
    "'hours'",
    "'minutes'",
    "'seconds'",
    "'milliseconds'"
  ]), se(a, "symbolicNames", [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "DATE",
    "DATETIME",
    "TIME",
    "IDENTIFIER",
    "DELIMITEDIDENTIFIER",
    "STRING",
    "NUMBER",
    "LONGNUMBER",
    "WS",
    "COMMENT",
    "LINE_COMMENT"
  ]), se(a, "ruleNames", [
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "T__5",
    "T__6",
    "T__7",
    "T__8",
    "T__9",
    "T__10",
    "T__11",
    "T__12",
    "T__13",
    "T__14",
    "T__15",
    "T__16",
    "T__17",
    "T__18",
    "T__19",
    "T__20",
    "T__21",
    "T__22",
    "T__23",
    "T__24",
    "T__25",
    "T__26",
    "T__27",
    "T__28",
    "T__29",
    "T__30",
    "T__31",
    "T__32",
    "T__33",
    "T__34",
    "T__35",
    "T__36",
    "T__37",
    "T__38",
    "T__39",
    "T__40",
    "T__41",
    "T__42",
    "T__43",
    "T__44",
    "T__45",
    "T__46",
    "T__47",
    "T__48",
    "T__49",
    "T__50",
    "T__51",
    "T__52",
    "T__53",
    "DATE",
    "DATETIME",
    "TIME",
    "DATEFORMAT",
    "TIMEFORMAT",
    "TIMEZONEOFFSETFORMAT",
    "IDENTIFIER",
    "DELIMITEDIDENTIFIER",
    "STRING",
    "NUMBER",
    "LONGNUMBER",
    "WS",
    "COMMENT",
    "LINE_COMMENT",
    "ESC",
    "UNICODE",
    "HEX"
  ]), a.EOF = f.Token.EOF, a.T__0 = 1, a.T__1 = 2, a.T__2 = 3, a.T__3 = 4, a.T__4 = 5, a.T__5 = 6, a.T__6 = 7, a.T__7 = 8, a.T__8 = 9, a.T__9 = 10, a.T__10 = 11, a.T__11 = 12, a.T__12 = 13, a.T__13 = 14, a.T__14 = 15, a.T__15 = 16, a.T__16 = 17, a.T__17 = 18, a.T__18 = 19, a.T__19 = 20, a.T__20 = 21, a.T__21 = 22, a.T__22 = 23, a.T__23 = 24, a.T__24 = 25, a.T__25 = 26, a.T__26 = 27, a.T__27 = 28, a.T__28 = 29, a.T__29 = 30, a.T__30 = 31, a.T__31 = 32, a.T__32 = 33, a.T__33 = 34, a.T__34 = 35, a.T__35 = 36, a.T__36 = 37, a.T__37 = 38, a.T__38 = 39, a.T__39 = 40, a.T__40 = 41, a.T__41 = 42, a.T__42 = 43, a.T__43 = 44, a.T__44 = 45, a.T__45 = 46, a.T__46 = 47, a.T__47 = 48, a.T__48 = 49, a.T__49 = 50, a.T__50 = 51, a.T__51 = 52, a.T__52 = 53, a.T__53 = 54, a.DATE = 55, a.DATETIME = 56, a.TIME = 57, a.IDENTIFIER = 58, a.DELIMITEDIDENTIFIER = 59, a.STRING = 60, a.NUMBER = 61, a.LONGNUMBER = 62, a.WS = 63, a.COMMENT = 64, a.LINE_COMMENT = 65, Dt = a, Dt;
}
var qt, wl;
function Js() {
  if (wl) return qt;
  wl = 1;
  const f = $e();
  class g extends f.tree.ParseTreeListener {
    // Enter a parse tree produced by FHIRPathParser#entireExpression.
    enterEntireExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#entireExpression.
    exitEntireExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#indexerExpression.
    enterIndexerExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#indexerExpression.
    exitIndexerExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#polarityExpression.
    enterPolarityExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#polarityExpression.
    exitPolarityExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#additiveExpression.
    enterAdditiveExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#additiveExpression.
    exitAdditiveExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#multiplicativeExpression.
    enterMultiplicativeExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#multiplicativeExpression.
    exitMultiplicativeExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#unionExpression.
    enterUnionExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#unionExpression.
    exitUnionExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#orExpression.
    enterOrExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#orExpression.
    exitOrExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#andExpression.
    enterAndExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#andExpression.
    exitAndExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#membershipExpression.
    enterMembershipExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#membershipExpression.
    exitMembershipExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#inequalityExpression.
    enterInequalityExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#inequalityExpression.
    exitInequalityExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#invocationExpression.
    enterInvocationExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#invocationExpression.
    exitInvocationExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#equalityExpression.
    enterEqualityExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#equalityExpression.
    exitEqualityExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#impliesExpression.
    enterImpliesExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#impliesExpression.
    exitImpliesExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#termExpression.
    enterTermExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#termExpression.
    exitTermExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#typeExpression.
    enterTypeExpression(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#typeExpression.
    exitTypeExpression(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#invocationTerm.
    enterInvocationTerm(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#invocationTerm.
    exitInvocationTerm(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#literalTerm.
    enterLiteralTerm(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#literalTerm.
    exitLiteralTerm(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#externalConstantTerm.
    enterExternalConstantTerm(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#externalConstantTerm.
    exitExternalConstantTerm(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#parenthesizedTerm.
    enterParenthesizedTerm(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#parenthesizedTerm.
    exitParenthesizedTerm(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#nullLiteral.
    enterNullLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#nullLiteral.
    exitNullLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#booleanLiteral.
    enterBooleanLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#booleanLiteral.
    exitBooleanLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#stringLiteral.
    enterStringLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#stringLiteral.
    exitStringLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#numberLiteral.
    enterNumberLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#numberLiteral.
    exitNumberLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#longNumberLiteral.
    enterLongNumberLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#longNumberLiteral.
    exitLongNumberLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#dateLiteral.
    enterDateLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#dateLiteral.
    exitDateLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#dateTimeLiteral.
    enterDateTimeLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#dateTimeLiteral.
    exitDateTimeLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#timeLiteral.
    enterTimeLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#timeLiteral.
    exitTimeLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#quantityLiteral.
    enterQuantityLiteral(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#quantityLiteral.
    exitQuantityLiteral(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#externalConstant.
    enterExternalConstant(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#externalConstant.
    exitExternalConstant(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#memberInvocation.
    enterMemberInvocation(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#memberInvocation.
    exitMemberInvocation(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#functionInvocation.
    enterFunctionInvocation(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#functionInvocation.
    exitFunctionInvocation(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#thisInvocation.
    enterThisInvocation(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#thisInvocation.
    exitThisInvocation(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#indexInvocation.
    enterIndexInvocation(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#indexInvocation.
    exitIndexInvocation(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#totalInvocation.
    enterTotalInvocation(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#totalInvocation.
    exitTotalInvocation(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#functn.
    enterFunctn(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#functn.
    exitFunctn(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#paramList.
    enterParamList(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#paramList.
    exitParamList(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#quantity.
    enterQuantity(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#quantity.
    exitQuantity(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#unit.
    enterUnit(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#unit.
    exitUnit(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#dateTimePrecision.
    enterDateTimePrecision(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#dateTimePrecision.
    exitDateTimePrecision(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#pluralDateTimePrecision.
    enterPluralDateTimePrecision(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#pluralDateTimePrecision.
    exitPluralDateTimePrecision(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#typeSpecifier.
    enterTypeSpecifier(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#typeSpecifier.
    exitTypeSpecifier(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#qualifiedIdentifier.
    enterQualifiedIdentifier(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#qualifiedIdentifier.
    exitQualifiedIdentifier(p) {
    }
    // Enter a parse tree produced by FHIRPathParser#identifier.
    enterIdentifier(p) {
    }
    // Exit a parse tree produced by FHIRPathParser#identifier.
    exitIdentifier(p) {
    }
  }
  return qt = g, qt;
}
var Bt, kl;
function Ys() {
  if (kl) return Bt;
  kl = 1;
  const f = $e(), g = Js(), _ = [
    "悋Ꜫ脳맭䅼㯧瞆",
    "奤C		",
    "			\x07	\x07",
    `\b	\b			
	
\v	\v\f	\f`,
    "\r	\r			",
    "",
    `(
`,
    "",
    "",
    "",
    "",
    "",
    "\x07",
    `P
\fS\v`,
    "\\",
    `
`,
    "",
    `h
m
`,
    "\x07\x07\x07\x07\x07\x07t",
    `
\x07\b\b\b\by
\b\b\b`,
    `			\x07	
	\f		\v	`,
    `




\v\v\v`,
    `\v
\v\f\f\r\r`,
    `\x07
`,
    "\f\v",
    `\b
\f`,
    "\x07",
    "\b\v\x07\f\f",
    "\x1B",
    '\r"#)018',
    "\r<=± ",
    "'[\bg",
    `
i\fs`,
    "u|",
    "",
    "",
    "",
    ' !!"\x07',
    '"#$\b$',
    "(%&	&(",
    "\r'#'%(Q",
    ")*\f\f*+	+P",
    "\r,-\f\v-.	.P\f",
    `/0\f	01\x071P
2`,
    "3\f\b34	4P	56\f\x07",
    "67	7P\b89\f",
    "9:	\x07:P\x07;<\f",
    "<=\x07=P>?\f",
    "?@	\b@PAB\f",
    "BC\x07CPDE\f",
    "EF\x07FP\f\x07GH\f",
    "HI\x07IJJK\x07",
    `KPLM\f
MN		`,
    "NPO)O,",
    "O/O2",
    "O5O8O;",
    "O>OAOD",
    "OGOLPS",
    "QOQR",
    "RSQT\\\f",
    `\x07U\\\bV\\
WX\x07`,
    "XYYZ\x07Z\\",
    "[T[U",
    "[V[W\\\x07",
    `]^\x07 ^h\x07!_h	
`,
    "`h\x07>ah\x07?bh\x07@",
    "ch\x079dh\x07:eh\x07;fh",
    `
g]g_g`,
    "`gagb",
    "gcgdge",
    "gfh	il",
    "\x07$jmkm\x07>l",
    "jlkm\v",
    "ntot\bpt\x07",
    "%qt\x07&rt\x07'sn",
    "sospsq",
    "srt\r",
    "uvvx\x07wy	",
    "xwxyyz",
    "z{\x07{",
    "|}~\x07(~",
    "}",
    "",
    "",
    "\x07?",
    "\v",
    "",
    "\f\r\x07>",
    "",
    "",
    "	\v",
    "	\f",
    "\x1B",
    "\x07",
    "",
    "",
    "",
    "	\r",
    "'OQ[glsx"
  ].join(""), p = new f.atn.ATNDeserializer().deserialize(_), a = p.decisionToState.map((K, L) => new f.dfa.DFA(K, L)), r = new f.PredictionContextCache(), x = class x extends f.Parser {
    constructor(L) {
      super(L), this._interp = new f.atn.ParserATNSimulator(this, p, a, r), this.ruleNames = x.ruleNames, this.literalNames = x.literalNames, this.symbolicNames = x.symbolicNames;
    }
    get atn() {
      return p;
    }
    sempred(L, U, w) {
      switch (U) {
        case 1:
          return this.expression_sempred(L, w);
        default:
          throw "No predicate with index:" + U;
      }
    }
    expression_sempred(L, U) {
      switch (U) {
        case 0:
          return this.precpred(this._ctx, 10);
        case 1:
          return this.precpred(this._ctx, 9);
        case 2:
          return this.precpred(this._ctx, 7);
        case 3:
          return this.precpred(this._ctx, 6);
        case 4:
          return this.precpred(this._ctx, 5);
        case 5:
          return this.precpred(this._ctx, 4);
        case 6:
          return this.precpred(this._ctx, 3);
        case 7:
          return this.precpred(this._ctx, 2);
        case 8:
          return this.precpred(this._ctx, 1);
        case 9:
          return this.precpred(this._ctx, 13);
        case 10:
          return this.precpred(this._ctx, 12);
        case 11:
          return this.precpred(this._ctx, 8);
        default:
          throw "No predicate with index:" + U;
      }
    }
    entireExpression() {
      let L = new u(this, this._ctx, this.state);
      this.enterRule(L, 0, x.RULE_entireExpression);
      try {
        this.enterOuterAlt(L, 1), this.state = 30, this.expression(0), this.state = 31, this.match(x.EOF);
      } catch (U) {
        if (U instanceof f.error.RecognitionException)
          L.exception = U, this._errHandler.reportError(this, U), this._errHandler.recover(this, U);
        else
          throw U;
      } finally {
        this.exitRule();
      }
      return L;
    }
    expression(L) {
      L === void 0 && (L = 0);
      const U = this._ctx, w = this.state;
      let X = new s(this, this._ctx, w), ae = X;
      const le = 2;
      this.enterRecursionRule(X, 2, x.RULE_expression, L);
      var ne = 0;
      try {
        switch (this.enterOuterAlt(X, 1), this.state = 37, this._errHandler.sync(this), this._input.LA(1)) {
          case x.T__10:
          case x.T__11:
          case x.T__21:
          case x.T__22:
          case x.T__27:
          case x.T__29:
          case x.T__31:
          case x.T__32:
          case x.T__33:
          case x.T__34:
          case x.T__35:
          case x.T__36:
          case x.DATE:
          case x.DATETIME:
          case x.TIME:
          case x.IDENTIFIER:
          case x.DELIMITEDIDENTIFIER:
          case x.STRING:
          case x.NUMBER:
          case x.LONGNUMBER:
            X = new O(this, X), this._ctx = X, ae = X, this.state = 34, this.term();
            break;
          case x.T__3:
          case x.T__4:
            X = new n(this, X), this._ctx = X, ae = X, this.state = 35, ne = this._input.LA(1), ne === x.T__3 || ne === x.T__4 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 36, this.expression(11);
            break;
          default:
            throw new f.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1), this.state = 79, this._errHandler.sync(this);
        for (var ye = this._interp.adaptivePredict(this._input, 2, this._ctx); ye != 2 && ye != f.atn.ATN.INVALID_ALT_NUMBER; ) {
          if (ye === 1) {
            this._parseListeners !== null && this.triggerExitRuleEvent(), ae = X, this.state = 77, this._errHandler.sync(this);
            var Dn = this._interp.adaptivePredict(this._input, 1, this._ctx);
            switch (Dn) {
              case 1:
                if (X = new t(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 39, !this.precpred(this._ctx, 10))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                this.state = 40, ne = this._input.LA(1), !(ne & -32) && 1 << ne & (1 << x.T__5 | 1 << x.T__6 | 1 << x.T__7 | 1 << x.T__8) ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 41, this.expression(11);
                break;
              case 2:
                if (X = new l(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 42, !this.precpred(this._ctx, 9))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                this.state = 43, ne = this._input.LA(1), !(ne & -32) && 1 << ne & (1 << x.T__3 | 1 << x.T__4 | 1 << x.T__9) ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 44, this.expression(10);
                break;
              case 3:
                if (X = new m(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 45, !this.precpred(this._ctx, 7))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                this.state = 46, this.match(x.T__12), this.state = 47, this.expression(8);
                break;
              case 4:
                if (X = new c(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 48, !this.precpred(this._ctx, 6))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                this.state = 49, ne = this._input.LA(1), !(ne & -32) && 1 << ne & (1 << x.T__13 | 1 << x.T__14 | 1 << x.T__15 | 1 << x.T__16) ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 50, this.expression(7);
                break;
              case 5:
                if (X = new T(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 51, !this.precpred(this._ctx, 5))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                this.state = 52, ne = this._input.LA(1), !(ne & -32) && 1 << ne & (1 << x.T__17 | 1 << x.T__18 | 1 << x.T__19 | 1 << x.T__20) ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 53, this.expression(6);
                break;
              case 6:
                if (X = new h(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 54, !this.precpred(this._ctx, 4))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                this.state = 55, ne = this._input.LA(1), ne === x.T__21 || ne === x.T__22 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 56, this.expression(5);
                break;
              case 7:
                if (X = new o(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 57, !this.precpred(this._ctx, 3))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                this.state = 58, this.match(x.T__23), this.state = 59, this.expression(4);
                break;
              case 8:
                if (X = new d(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 60, !this.precpred(this._ctx, 2))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                this.state = 61, ne = this._input.LA(1), ne === x.T__24 || ne === x.T__25 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 62, this.expression(3);
                break;
              case 9:
                if (X = new N(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 63, !this.precpred(this._ctx, 1))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                this.state = 64, this.match(x.T__26), this.state = 65, this.expression(2);
                break;
              case 10:
                if (X = new y(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 66, !this.precpred(this._ctx, 13))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                this.state = 67, this.match(x.T__0), this.state = 68, this.invocation();
                break;
              case 11:
                if (X = new i(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 69, !this.precpred(this._ctx, 12))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                this.state = 70, this.match(x.T__1), this.state = 71, this.expression(0), this.state = 72, this.match(x.T__2);
                break;
              case 12:
                if (X = new P(this, new s(this, U, w)), this.pushNewRecursionContext(X, le, x.RULE_expression), this.state = 74, !this.precpred(this._ctx, 8))
                  throw new f.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                this.state = 75, ne = this._input.LA(1), ne === x.T__10 || ne === x.T__11 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this), this.state = 76, this.typeSpecifier();
                break;
            }
          }
          this.state = 81, this._errHandler.sync(this), ye = this._interp.adaptivePredict(this._input, 2, this._ctx);
        }
      } catch (Ae) {
        if (Ae instanceof f.error.RecognitionException)
          X.exception = Ae, this._errHandler.reportError(this, Ae), this._errHandler.recover(this, Ae);
        else
          throw Ae;
      } finally {
        this.unrollRecursionContexts(U);
      }
      return X;
    }
    term() {
      let L = new z(this, this._ctx, this.state);
      this.enterRule(L, 4, x.RULE_term);
      try {
        switch (this.state = 89, this._errHandler.sync(this), this._input.LA(1)) {
          case x.T__10:
          case x.T__11:
          case x.T__21:
          case x.T__22:
          case x.T__34:
          case x.T__35:
          case x.T__36:
          case x.IDENTIFIER:
          case x.DELIMITEDIDENTIFIER:
            L = new $(this, L), this.enterOuterAlt(L, 1), this.state = 82, this.invocation();
            break;
          case x.T__29:
          case x.T__31:
          case x.T__32:
          case x.DATE:
          case x.DATETIME:
          case x.TIME:
          case x.STRING:
          case x.NUMBER:
          case x.LONGNUMBER:
            L = new F(this, L), this.enterOuterAlt(L, 2), this.state = 83, this.literal();
            break;
          case x.T__33:
            L = new D(this, L), this.enterOuterAlt(L, 3), this.state = 84, this.externalConstant();
            break;
          case x.T__27:
            L = new B(this, L), this.enterOuterAlt(L, 4), this.state = 85, this.match(x.T__27), this.state = 86, this.expression(0), this.state = 87, this.match(x.T__28);
            break;
          default:
            throw new f.error.NoViableAltException(this);
        }
      } catch (U) {
        if (U instanceof f.error.RecognitionException)
          L.exception = U, this._errHandler.reportError(this, U), this._errHandler.recover(this, U);
        else
          throw U;
      } finally {
        this.exitRule();
      }
      return L;
    }
    literal() {
      let L = new I(this, this._ctx, this.state);
      this.enterRule(L, 6, x.RULE_literal);
      var U = 0;
      try {
        this.state = 101, this._errHandler.sync(this);
        var w = this._interp.adaptivePredict(this._input, 4, this._ctx);
        switch (w) {
          case 1:
            L = new C(this, L), this.enterOuterAlt(L, 1), this.state = 91, this.match(x.T__29), this.state = 92, this.match(x.T__30);
            break;
          case 2:
            L = new A(this, L), this.enterOuterAlt(L, 2), this.state = 93, U = this._input.LA(1), U === x.T__31 || U === x.T__32 ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
            break;
          case 3:
            L = new v(this, L), this.enterOuterAlt(L, 3), this.state = 94, this.match(x.STRING);
            break;
          case 4:
            L = new q(this, L), this.enterOuterAlt(L, 4), this.state = 95, this.match(x.NUMBER);
            break;
          case 5:
            L = new H(this, L), this.enterOuterAlt(L, 5), this.state = 96, this.match(x.LONGNUMBER);
            break;
          case 6:
            L = new M(this, L), this.enterOuterAlt(L, 6), this.state = 97, this.match(x.DATE);
            break;
          case 7:
            L = new b(this, L), this.enterOuterAlt(L, 7), this.state = 98, this.match(x.DATETIME);
            break;
          case 8:
            L = new S(this, L), this.enterOuterAlt(L, 8), this.state = 99, this.match(x.TIME);
            break;
          case 9:
            L = new Y(this, L), this.enterOuterAlt(L, 9), this.state = 100, this.quantity();
            break;
        }
      } catch (X) {
        if (X instanceof f.error.RecognitionException)
          L.exception = X, this._errHandler.reportError(this, X), this._errHandler.recover(this, X);
        else
          throw X;
      } finally {
        this.exitRule();
      }
      return L;
    }
    externalConstant() {
      let L = new Z(this, this._ctx, this.state);
      this.enterRule(L, 8, x.RULE_externalConstant);
      try {
        switch (this.enterOuterAlt(L, 1), this.state = 103, this.match(x.T__33), this.state = 106, this._errHandler.sync(this), this._input.LA(1)) {
          case x.T__10:
          case x.T__11:
          case x.T__21:
          case x.T__22:
          case x.IDENTIFIER:
          case x.DELIMITEDIDENTIFIER:
            this.state = 104, this.identifier();
            break;
          case x.STRING:
            this.state = 105, this.match(x.STRING);
            break;
          default:
            throw new f.error.NoViableAltException(this);
        }
      } catch (U) {
        if (U instanceof f.error.RecognitionException)
          L.exception = U, this._errHandler.reportError(this, U), this._errHandler.recover(this, U);
        else
          throw U;
      } finally {
        this.exitRule();
      }
      return L;
    }
    invocation() {
      let L = new Q(this, this._ctx, this.state);
      this.enterRule(L, 10, x.RULE_invocation);
      try {
        this.state = 113, this._errHandler.sync(this);
        var U = this._interp.adaptivePredict(this._input, 6, this._ctx);
        switch (U) {
          case 1:
            L = new he(this, L), this.enterOuterAlt(L, 1), this.state = 108, this.identifier();
            break;
          case 2:
            L = new oe(this, L), this.enterOuterAlt(L, 2), this.state = 109, this.functn();
            break;
          case 3:
            L = new te(this, L), this.enterOuterAlt(L, 3), this.state = 110, this.match(x.T__34);
            break;
          case 4:
            L = new ie(this, L), this.enterOuterAlt(L, 4), this.state = 111, this.match(x.T__35);
            break;
          case 5:
            L = new ee(this, L), this.enterOuterAlt(L, 5), this.state = 112, this.match(x.T__36);
            break;
        }
      } catch (w) {
        if (w instanceof f.error.RecognitionException)
          L.exception = w, this._errHandler.reportError(this, w), this._errHandler.recover(this, w);
        else
          throw w;
      } finally {
        this.exitRule();
      }
      return L;
    }
    functn() {
      let L = new de(this, this._ctx, this.state);
      this.enterRule(L, 12, x.RULE_functn);
      var U = 0;
      try {
        this.enterOuterAlt(L, 1), this.state = 115, this.identifier(), this.state = 116, this.match(x.T__27), this.state = 118, this._errHandler.sync(this), U = this._input.LA(1), (!(U & -32) && 1 << U & (1 << x.T__3 | 1 << x.T__4 | 1 << x.T__10 | 1 << x.T__11 | 1 << x.T__21 | 1 << x.T__22 | 1 << x.T__27 | 1 << x.T__29) || !(U - 32 & -32) && 1 << U - 32 & (1 << x.T__31 - 32 | 1 << x.T__32 - 32 | 1 << x.T__33 - 32 | 1 << x.T__34 - 32 | 1 << x.T__35 - 32 | 1 << x.T__36 - 32 | 1 << x.DATE - 32 | 1 << x.DATETIME - 32 | 1 << x.TIME - 32 | 1 << x.IDENTIFIER - 32 | 1 << x.DELIMITEDIDENTIFIER - 32 | 1 << x.STRING - 32 | 1 << x.NUMBER - 32 | 1 << x.LONGNUMBER - 32)) && (this.state = 117, this.paramList()), this.state = 120, this.match(x.T__28);
      } catch (w) {
        if (w instanceof f.error.RecognitionException)
          L.exception = w, this._errHandler.reportError(this, w), this._errHandler.recover(this, w);
        else
          throw w;
      } finally {
        this.exitRule();
      }
      return L;
    }
    paramList() {
      let L = new G(this, this._ctx, this.state);
      this.enterRule(L, 14, x.RULE_paramList);
      var U = 0;
      try {
        for (this.enterOuterAlt(L, 1), this.state = 122, this.expression(0), this.state = 127, this._errHandler.sync(this), U = this._input.LA(1); U === x.T__37; )
          this.state = 123, this.match(x.T__37), this.state = 124, this.expression(0), this.state = 129, this._errHandler.sync(this), U = this._input.LA(1);
      } catch (w) {
        if (w instanceof f.error.RecognitionException)
          L.exception = w, this._errHandler.reportError(this, w), this._errHandler.recover(this, w);
        else
          throw w;
      } finally {
        this.exitRule();
      }
      return L;
    }
    quantity() {
      let L = new j(this, this._ctx, this.state);
      this.enterRule(L, 16, x.RULE_quantity);
      try {
        this.enterOuterAlt(L, 1), this.state = 130, this.match(x.NUMBER), this.state = 132, this._errHandler.sync(this);
        var U = this._interp.adaptivePredict(this._input, 9, this._ctx);
        U === 1 && (this.state = 131, this.unit());
      } catch (w) {
        if (w instanceof f.error.RecognitionException)
          L.exception = w, this._errHandler.reportError(this, w), this._errHandler.recover(this, w);
        else
          throw w;
      } finally {
        this.exitRule();
      }
      return L;
    }
    unit() {
      let L = new V(this, this._ctx, this.state);
      this.enterRule(L, 18, x.RULE_unit);
      try {
        switch (this.state = 137, this._errHandler.sync(this), this._input.LA(1)) {
          case x.T__38:
          case x.T__39:
          case x.T__40:
          case x.T__41:
          case x.T__42:
          case x.T__43:
          case x.T__44:
          case x.T__45:
            this.enterOuterAlt(L, 1), this.state = 134, this.dateTimePrecision();
            break;
          case x.T__46:
          case x.T__47:
          case x.T__48:
          case x.T__49:
          case x.T__50:
          case x.T__51:
          case x.T__52:
          case x.T__53:
            this.enterOuterAlt(L, 2), this.state = 135, this.pluralDateTimePrecision();
            break;
          case x.STRING:
            this.enterOuterAlt(L, 3), this.state = 136, this.match(x.STRING);
            break;
          default:
            throw new f.error.NoViableAltException(this);
        }
      } catch (U) {
        if (U instanceof f.error.RecognitionException)
          L.exception = U, this._errHandler.reportError(this, U), this._errHandler.recover(this, U);
        else
          throw U;
      } finally {
        this.exitRule();
      }
      return L;
    }
    dateTimePrecision() {
      let L = new W(this, this._ctx, this.state);
      this.enterRule(L, 20, x.RULE_dateTimePrecision);
      var U = 0;
      try {
        this.enterOuterAlt(L, 1), this.state = 139, U = this._input.LA(1), !(U - 39 & -32) && 1 << U - 39 & (1 << x.T__38 - 39 | 1 << x.T__39 - 39 | 1 << x.T__40 - 39 | 1 << x.T__41 - 39 | 1 << x.T__42 - 39 | 1 << x.T__43 - 39 | 1 << x.T__44 - 39 | 1 << x.T__45 - 39) ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (w) {
        if (w instanceof f.error.RecognitionException)
          L.exception = w, this._errHandler.reportError(this, w), this._errHandler.recover(this, w);
        else
          throw w;
      } finally {
        this.exitRule();
      }
      return L;
    }
    pluralDateTimePrecision() {
      let L = new E(this, this._ctx, this.state);
      this.enterRule(L, 22, x.RULE_pluralDateTimePrecision);
      var U = 0;
      try {
        this.enterOuterAlt(L, 1), this.state = 141, U = this._input.LA(1), !(U - 47 & -32) && 1 << U - 47 & (1 << x.T__46 - 47 | 1 << x.T__47 - 47 | 1 << x.T__48 - 47 | 1 << x.T__49 - 47 | 1 << x.T__50 - 47 | 1 << x.T__51 - 47 | 1 << x.T__52 - 47 | 1 << x.T__53 - 47) ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (w) {
        if (w instanceof f.error.RecognitionException)
          L.exception = w, this._errHandler.reportError(this, w), this._errHandler.recover(this, w);
        else
          throw w;
      } finally {
        this.exitRule();
      }
      return L;
    }
    typeSpecifier() {
      let L = new k(this, this._ctx, this.state);
      this.enterRule(L, 24, x.RULE_typeSpecifier);
      try {
        this.enterOuterAlt(L, 1), this.state = 143, this.qualifiedIdentifier();
      } catch (U) {
        if (U instanceof f.error.RecognitionException)
          L.exception = U, this._errHandler.reportError(this, U), this._errHandler.recover(this, U);
        else
          throw U;
      } finally {
        this.exitRule();
      }
      return L;
    }
    qualifiedIdentifier() {
      let L = new R(this, this._ctx, this.state);
      this.enterRule(L, 26, x.RULE_qualifiedIdentifier);
      try {
        this.enterOuterAlt(L, 1), this.state = 145, this.identifier(), this.state = 150, this._errHandler.sync(this);
        for (var U = this._interp.adaptivePredict(this._input, 11, this._ctx); U != 2 && U != f.atn.ATN.INVALID_ALT_NUMBER; )
          U === 1 && (this.state = 146, this.match(x.T__0), this.state = 147, this.identifier()), this.state = 152, this._errHandler.sync(this), U = this._interp.adaptivePredict(this._input, 11, this._ctx);
      } catch (w) {
        if (w instanceof f.error.RecognitionException)
          L.exception = w, this._errHandler.reportError(this, w), this._errHandler.recover(this, w);
        else
          throw w;
      } finally {
        this.exitRule();
      }
      return L;
    }
    identifier() {
      let L = new J(this, this._ctx, this.state);
      this.enterRule(L, 28, x.RULE_identifier);
      var U = 0;
      try {
        this.enterOuterAlt(L, 1), this.state = 153, U = this._input.LA(1), !(U & -32) && 1 << U & (1 << x.T__10 | 1 << x.T__11 | 1 << x.T__21 | 1 << x.T__22) || U === x.IDENTIFIER || U === x.DELIMITEDIDENTIFIER ? (this._errHandler.reportMatch(this), this.consume()) : this._errHandler.recoverInline(this);
      } catch (w) {
        if (w instanceof f.error.RecognitionException)
          L.exception = w, this._errHandler.reportError(this, w), this._errHandler.recover(this, w);
        else
          throw w;
      } finally {
        this.exitRule();
      }
      return L;
    }
  };
  se(x, "grammarFileName", "FHIRPath.g4"), se(x, "literalNames", [
    null,
    "'.'",
    "'['",
    "']'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'div'",
    "'mod'",
    "'&'",
    "'is'",
    "'as'",
    "'|'",
    "'<='",
    "'<'",
    "'>'",
    "'>='",
    "'='",
    "'~'",
    "'!='",
    "'!~'",
    "'in'",
    "'contains'",
    "'and'",
    "'or'",
    "'xor'",
    "'implies'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'true'",
    "'false'",
    "'%'",
    "'$this'",
    "'$index'",
    "'$total'",
    "','",
    "'year'",
    "'month'",
    "'week'",
    "'day'",
    "'hour'",
    "'minute'",
    "'second'",
    "'millisecond'",
    "'years'",
    "'months'",
    "'weeks'",
    "'days'",
    "'hours'",
    "'minutes'",
    "'seconds'",
    "'milliseconds'"
  ]), se(x, "symbolicNames", [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "DATE",
    "DATETIME",
    "TIME",
    "IDENTIFIER",
    "DELIMITEDIDENTIFIER",
    "STRING",
    "NUMBER",
    "LONGNUMBER",
    "WS",
    "COMMENT",
    "LINE_COMMENT"
  ]), se(x, "ruleNames", [
    "entireExpression",
    "expression",
    "term",
    "literal",
    "externalConstant",
    "invocation",
    "functn",
    "paramList",
    "quantity",
    "unit",
    "dateTimePrecision",
    "pluralDateTimePrecision",
    "typeSpecifier",
    "qualifiedIdentifier",
    "identifier"
  ]);
  let e = x;
  e.EOF = f.Token.EOF, e.T__0 = 1, e.T__1 = 2, e.T__2 = 3, e.T__3 = 4, e.T__4 = 5, e.T__5 = 6, e.T__6 = 7, e.T__7 = 8, e.T__8 = 9, e.T__9 = 10, e.T__10 = 11, e.T__11 = 12, e.T__12 = 13, e.T__13 = 14, e.T__14 = 15, e.T__15 = 16, e.T__16 = 17, e.T__17 = 18, e.T__18 = 19, e.T__19 = 20, e.T__20 = 21, e.T__21 = 22, e.T__22 = 23, e.T__23 = 24, e.T__24 = 25, e.T__25 = 26, e.T__26 = 27, e.T__27 = 28, e.T__28 = 29, e.T__29 = 30, e.T__30 = 31, e.T__31 = 32, e.T__32 = 33, e.T__33 = 34, e.T__34 = 35, e.T__35 = 36, e.T__36 = 37, e.T__37 = 38, e.T__38 = 39, e.T__39 = 40, e.T__40 = 41, e.T__41 = 42, e.T__42 = 43, e.T__43 = 44, e.T__44 = 45, e.T__45 = 46, e.T__46 = 47, e.T__47 = 48, e.T__48 = 49, e.T__49 = 50, e.T__50 = 51, e.T__51 = 52, e.T__52 = 53, e.T__53 = 54, e.DATE = 55, e.DATETIME = 56, e.TIME = 57, e.IDENTIFIER = 58, e.DELIMITEDIDENTIFIER = 59, e.STRING = 60, e.NUMBER = 61, e.LONGNUMBER = 62, e.WS = 63, e.COMMENT = 64, e.LINE_COMMENT = 65, e.RULE_entireExpression = 0, e.RULE_expression = 1, e.RULE_term = 2, e.RULE_literal = 3, e.RULE_externalConstant = 4, e.RULE_invocation = 5, e.RULE_functn = 6, e.RULE_paramList = 7, e.RULE_quantity = 8, e.RULE_unit = 9, e.RULE_dateTimePrecision = 10, e.RULE_pluralDateTimePrecision = 11, e.RULE_typeSpecifier = 12, e.RULE_qualifiedIdentifier = 13, e.RULE_identifier = 14;
  class u extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_entireExpression;
    }
    expression() {
      return this.getTypedRuleContext(s, 0);
    }
    EOF() {
      return this.getToken(e.EOF, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterEntireExpression(this);
    }
    exitRule(L) {
      L instanceof g && L.exitEntireExpression(this);
    }
  }
  class s extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_expression;
    }
    copyFrom(L) {
      super.copyFrom(L);
    }
  }
  class i extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterIndexerExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitIndexerExpression(this);
    }
  }
  e.IndexerExpressionContext = i;
  class n extends s {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    expression() {
      return this.getTypedRuleContext(s, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterPolarityExpression(this);
    }
    exitRule(L) {
      L instanceof g && L.exitPolarityExpression(this);
    }
  }
  e.PolarityExpressionContext = n;
  class l extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterAdditiveExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitAdditiveExpression(this);
    }
  }
  e.AdditiveExpressionContext = l;
  class t extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterMultiplicativeExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitMultiplicativeExpression(this);
    }
  }
  e.MultiplicativeExpressionContext = t;
  class m extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterUnionExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitUnionExpression(this);
    }
  }
  e.UnionExpressionContext = m;
  class d extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterOrExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitOrExpression(this);
    }
  }
  e.OrExpressionContext = d;
  class o extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterAndExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitAndExpression(this);
    }
  }
  e.AndExpressionContext = o;
  class h extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterMembershipExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitMembershipExpression(this);
    }
  }
  e.MembershipExpressionContext = h;
  class c extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterInequalityExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitInequalityExpression(this);
    }
  }
  e.InequalityExpressionContext = c;
  class y extends s {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    expression() {
      return this.getTypedRuleContext(s, 0);
    }
    invocation() {
      return this.getTypedRuleContext(Q, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterInvocationExpression(this);
    }
    exitRule(L) {
      L instanceof g && L.exitInvocationExpression(this);
    }
  }
  e.InvocationExpressionContext = y;
  class T extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterEqualityExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitEqualityExpression(this);
    }
  }
  e.EqualityExpressionContext = T;
  class N extends s {
    constructor(U, w) {
      super(U);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      super.copyFrom(w);
    }
    enterRule(U) {
      U instanceof g && U.enterImpliesExpression(this);
    }
    exitRule(U) {
      U instanceof g && U.exitImpliesExpression(this);
    }
  }
  e.ImpliesExpressionContext = N;
  class O extends s {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    term() {
      return this.getTypedRuleContext(z, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterTermExpression(this);
    }
    exitRule(L) {
      L instanceof g && L.exitTermExpression(this);
    }
  }
  e.TermExpressionContext = O;
  class P extends s {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    expression() {
      return this.getTypedRuleContext(s, 0);
    }
    typeSpecifier() {
      return this.getTypedRuleContext(k, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterTypeExpression(this);
    }
    exitRule(L) {
      L instanceof g && L.exitTypeExpression(this);
    }
  }
  e.TypeExpressionContext = P;
  class z extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_term;
    }
    copyFrom(L) {
      super.copyFrom(L);
    }
  }
  class D extends z {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    externalConstant() {
      return this.getTypedRuleContext(Z, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterExternalConstantTerm(this);
    }
    exitRule(L) {
      L instanceof g && L.exitExternalConstantTerm(this);
    }
  }
  e.ExternalConstantTermContext = D;
  class F extends z {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    literal() {
      return this.getTypedRuleContext(I, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterLiteralTerm(this);
    }
    exitRule(L) {
      L instanceof g && L.exitLiteralTerm(this);
    }
  }
  e.LiteralTermContext = F;
  class B extends z {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    expression() {
      return this.getTypedRuleContext(s, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterParenthesizedTerm(this);
    }
    exitRule(L) {
      L instanceof g && L.exitParenthesizedTerm(this);
    }
  }
  e.ParenthesizedTermContext = B;
  class $ extends z {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    invocation() {
      return this.getTypedRuleContext(Q, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterInvocationTerm(this);
    }
    exitRule(L) {
      L instanceof g && L.exitInvocationTerm(this);
    }
  }
  e.InvocationTermContext = $;
  class I extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_literal;
    }
    copyFrom(L) {
      super.copyFrom(L);
    }
  }
  class S extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    TIME() {
      return this.getToken(e.TIME, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterTimeLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitTimeLiteral(this);
    }
  }
  e.TimeLiteralContext = S;
  class C extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    enterRule(L) {
      L instanceof g && L.enterNullLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitNullLiteral(this);
    }
  }
  e.NullLiteralContext = C;
  class b extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    DATETIME() {
      return this.getToken(e.DATETIME, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterDateTimeLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitDateTimeLiteral(this);
    }
  }
  e.DateTimeLiteralContext = b;
  class v extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    STRING() {
      return this.getToken(e.STRING, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterStringLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitStringLiteral(this);
    }
  }
  e.StringLiteralContext = v;
  class M extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    DATE() {
      return this.getToken(e.DATE, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterDateLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitDateLiteral(this);
    }
  }
  e.DateLiteralContext = M;
  class A extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    enterRule(L) {
      L instanceof g && L.enterBooleanLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitBooleanLiteral(this);
    }
  }
  e.BooleanLiteralContext = A;
  class q extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    NUMBER() {
      return this.getToken(e.NUMBER, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterNumberLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitNumberLiteral(this);
    }
  }
  e.NumberLiteralContext = q;
  class H extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    LONGNUMBER() {
      return this.getToken(e.LONGNUMBER, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterLongNumberLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitLongNumberLiteral(this);
    }
  }
  e.LongNumberLiteralContext = H;
  class Y extends I {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    quantity() {
      return this.getTypedRuleContext(j, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterQuantityLiteral(this);
    }
    exitRule(L) {
      L instanceof g && L.exitQuantityLiteral(this);
    }
  }
  e.QuantityLiteralContext = Y;
  class Z extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_externalConstant;
    }
    identifier() {
      return this.getTypedRuleContext(J, 0);
    }
    STRING() {
      return this.getToken(e.STRING, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterExternalConstant(this);
    }
    exitRule(L) {
      L instanceof g && L.exitExternalConstant(this);
    }
  }
  class Q extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_invocation;
    }
    copyFrom(L) {
      super.copyFrom(L);
    }
  }
  class ee extends Q {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    enterRule(L) {
      L instanceof g && L.enterTotalInvocation(this);
    }
    exitRule(L) {
      L instanceof g && L.exitTotalInvocation(this);
    }
  }
  e.TotalInvocationContext = ee;
  class te extends Q {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    enterRule(L) {
      L instanceof g && L.enterThisInvocation(this);
    }
    exitRule(L) {
      L instanceof g && L.exitThisInvocation(this);
    }
  }
  e.ThisInvocationContext = te;
  class ie extends Q {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    enterRule(L) {
      L instanceof g && L.enterIndexInvocation(this);
    }
    exitRule(L) {
      L instanceof g && L.exitIndexInvocation(this);
    }
  }
  e.IndexInvocationContext = ie;
  class oe extends Q {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    functn() {
      return this.getTypedRuleContext(de, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterFunctionInvocation(this);
    }
    exitRule(L) {
      L instanceof g && L.exitFunctionInvocation(this);
    }
  }
  e.FunctionInvocationContext = oe;
  class he extends Q {
    constructor(L, U) {
      super(L), super.copyFrom(U);
    }
    identifier() {
      return this.getTypedRuleContext(J, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterMemberInvocation(this);
    }
    exitRule(L) {
      L instanceof g && L.exitMemberInvocation(this);
    }
  }
  e.MemberInvocationContext = he;
  class de extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_functn;
    }
    identifier() {
      return this.getTypedRuleContext(J, 0);
    }
    paramList() {
      return this.getTypedRuleContext(G, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterFunctn(this);
    }
    exitRule(L) {
      L instanceof g && L.exitFunctn(this);
    }
  }
  class G extends f.ParserRuleContext {
    constructor(U, w, X) {
      w === void 0 && (w = null), X == null && (X = -1);
      super(w, X);
      se(this, "expression", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(s) : this.getTypedRuleContext(s, U);
      });
      this.parser = U, this.ruleIndex = e.RULE_paramList;
    }
    enterRule(U) {
      U instanceof g && U.enterParamList(this);
    }
    exitRule(U) {
      U instanceof g && U.exitParamList(this);
    }
  }
  class j extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_quantity;
    }
    NUMBER() {
      return this.getToken(e.NUMBER, 0);
    }
    unit() {
      return this.getTypedRuleContext(V, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterQuantity(this);
    }
    exitRule(L) {
      L instanceof g && L.exitQuantity(this);
    }
  }
  class V extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_unit;
    }
    dateTimePrecision() {
      return this.getTypedRuleContext(W, 0);
    }
    pluralDateTimePrecision() {
      return this.getTypedRuleContext(E, 0);
    }
    STRING() {
      return this.getToken(e.STRING, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterUnit(this);
    }
    exitRule(L) {
      L instanceof g && L.exitUnit(this);
    }
  }
  class W extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_dateTimePrecision;
    }
    enterRule(L) {
      L instanceof g && L.enterDateTimePrecision(this);
    }
    exitRule(L) {
      L instanceof g && L.exitDateTimePrecision(this);
    }
  }
  class E extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_pluralDateTimePrecision;
    }
    enterRule(L) {
      L instanceof g && L.enterPluralDateTimePrecision(this);
    }
    exitRule(L) {
      L instanceof g && L.exitPluralDateTimePrecision(this);
    }
  }
  class k extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_typeSpecifier;
    }
    qualifiedIdentifier() {
      return this.getTypedRuleContext(R, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterTypeSpecifier(this);
    }
    exitRule(L) {
      L instanceof g && L.exitTypeSpecifier(this);
    }
  }
  class R extends f.ParserRuleContext {
    constructor(U, w, X) {
      w === void 0 && (w = null), X == null && (X = -1);
      super(w, X);
      se(this, "identifier", function(U) {
        return U === void 0 && (U = null), U === null ? this.getTypedRuleContexts(J) : this.getTypedRuleContext(J, U);
      });
      this.parser = U, this.ruleIndex = e.RULE_qualifiedIdentifier;
    }
    enterRule(U) {
      U instanceof g && U.enterQualifiedIdentifier(this);
    }
    exitRule(U) {
      U instanceof g && U.exitQualifiedIdentifier(this);
    }
  }
  class J extends f.ParserRuleContext {
    constructor(L, U, w) {
      U === void 0 && (U = null), w == null && (w = -1), super(U, w), this.parser = L, this.ruleIndex = e.RULE_identifier;
    }
    IDENTIFIER() {
      return this.getToken(e.IDENTIFIER, 0);
    }
    DELIMITEDIDENTIFIER() {
      return this.getToken(e.DELIMITEDIDENTIFIER, 0);
    }
    enterRule(L) {
      L instanceof g && L.enterIdentifier(this);
    }
    exitRule(L) {
      L instanceof g && L.exitIdentifier(this);
    }
  }
  return e.EntireExpressionContext = u, e.ExpressionContext = s, e.TermContext = z, e.LiteralContext = I, e.ExternalConstantContext = Z, e.InvocationContext = Q, e.FunctnContext = de, e.ParamListContext = G, e.QuantityContext = j, e.UnitContext = V, e.DateTimePrecisionContext = W, e.PluralDateTimePrecisionContext = E, e.TypeSpecifierContext = k, e.QualifiedIdentifierContext = R, e.IdentifierContext = J, Bt = e, Bt;
}
var Ht, Pl;
function qi() {
  if (Pl) return Ht;
  Pl = 1;
  const f = $e(), g = Js(), _ = Ys();
  class p extends f.error.ErrorListener {
    /**
     * @param {Array} errors - Array to store error details.
     */
    constructor(e) {
      super(), this.errors = e;
    }
    /**
     * Called on syntax error.
     * @param {*} rec - Recognizer
     * @param {*} sym - Offending symbol
     * @param {number} line - Line number
     * @param {number} col - Column number
     * @param {string} msg - Error message
     * @param {*} e - Exception
     */
    syntaxError(e, u, s, i, n, l) {
      this.errors.push([e, u, s, i, n, l]);
    }
  }
  class a extends g {
    /**
     * Initializes AST and parent stack.
     */
    constructor() {
      super(), this.ast = { type: "EntireExpression", children: [] }, this.parentStack = [this.ast];
    }
    /**
     * Returns the constructed AST.
     * @returns {Object} AST root node.
     */
    getAST() {
      return this.ast;
    }
    /**
     * Creates and enters a new AST node.
     * @param {*} ctx - ANTLR context.
     * @param {string} nodeType - Type of node.
     * @returns {Object} The new AST node.
     */
    enterNode(e, u) {
      let s = this.parentStack[this.parentStack.length - 1], i = { type: u };
      return s.children || (s.children = []), s.children.push(i), this.parentStack.push(i), i;
    }
  }
  for (let r of Object.getOwnPropertyNames(g.prototype))
    if (r.startsWith("enter")) {
      const e = r.slice(5);
      switch (r) {
        // Operators
        case "enterMultiplicativeExpression":
        case "enterAdditiveExpression":
        case "enterTypeExpression":
        case "enterUnionExpression":
        case "enterInequalityExpression":
        case "enterEqualityExpression":
        case "enterMembershipExpression":
        case "enterAndExpression":
        case "enterOrExpression":
        case "enterImpliesExpression":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            const i = u.children[1].symbol;
            s.text = i.text, s.start = { line: i.line, column: i.column + 1 }, s.length = i.text.length;
          };
          break;
        case "enterPolarityExpression":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            const i = u.children[0].symbol;
            s.text = i.text, s.start = { line: i.line, column: i.column + 1 }, s.length = i.text.length;
          };
          break;
        case "enterMemberInvocation":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            const i = u.children[0].children[0].symbol;
            s.text = i.text, s.start = { line: i.line, column: i.column + 1 }, s.length = s.text.length;
          };
          break;
        case "enterFunctionInvocation":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            const i = u.children[0].children[0];
            s.text = i.getText(), s.start = { line: i.start.line, column: i.start.column + 1 }, s.length = s.text.length;
          };
          break;
        case "enterThisInvocation":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            s.start = { line: u.start.line, column: u.start.column + 1 }, s.length = 5;
          };
          break;
        case "enterIndexInvocation":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            s.start = { line: u.start.line, column: u.start.column + 1 }, s.length = 6;
          };
          break;
        case "enterTotalInvocation":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            s.start = { line: u.start.line, column: u.start.column + 1 }, s.length = 6;
          };
          break;
        case "enterIdentifier":
        case "enterLiteralTerm":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            s.text = u.getText(), s.start = { line: u.start.line, column: u.start.column + 1 }, s.length = s.text.length;
          };
          break;
        case "enterIndexerExpression":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            const i = u.children[1].symbol, n = u.children[3].symbol;
            s.start = { line: i.line, column: i.column + 1 }, i.line === n.line ? s.length = n.column - i.column + 1 : (s.end = { line: n.line, column: n.column + 1 }, s.length = n.stop - i.start + 1);
          };
          break;
        case "enterBooleanLiteral":
        case "enterStringLiteral":
        case "enterNumberLiteral":
        case "enterLongNumberLiteral":
        case "enterDateLiteral":
        case "enterDateTimeLiteral":
        case "enterTimeLiteral":
        case "enterTypeSpecifier":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            s.text = u.getText();
          };
          break;
        case "enterQuantityLiteral":
          a.prototype[r] = function(u) {
            let s = this.enterNode(u, e);
            s.text = u.getText(), s.start = { line: u.start.line, column: u.start.column + 1 }, s.length = s.text.length;
            const i = u.children[0];
            s.value = i.children[0].getText();
            const n = i.children ? i.children[1] : null;
            n && (s.unit = n.getText());
          };
          break;
        case "enterExternalConstantTerm":
          a.prototype[r] = function(u) {
            var l, t;
            let s = this.enterNode(u, e);
            const n = u.children[0].children[1];
            if (n.ruleIndex === _.RULE_identifier) {
              const d = n.children[0].symbol;
              d.type === _.DELIMITEDIDENTIFIER ? s.delimitedText = d.text.slice(1, -1) : (d.type, _.IDENTIFIER, s.text = d.text);
            }
            if (n.ruleIndex === void 0) {
              const m = n.symbol;
              m.type === _.STRING && (s.delimitedText = m.text);
            }
            s.start = { line: u.start.line, column: u.start.column + 1 }, s.length = ((l = s.text) == null ? void 0 : l.length) ?? ((t = s.delimitedText) == null ? void 0 : t.length);
          };
          break;
        default:
          a.prototype[r] = function(u) {
            this.enterNode(u, e);
          };
          break;
      }
    } else if (r.startsWith("exit"))
      switch (r) {
        case "exitTermExpression":
          a.prototype[r] = function(e) {
            var s;
            let u = this.parentStack.pop();
            u && e.ruleIndex === _.RULE_expression && ((s = e.parentCtx) == null ? void 0 : s.ruleIndex) === _.RULE_paramList && (u.text = e.getText());
          };
          break;
        case "exitInvocationExpression":
          a.prototype[r] = function(e) {
            var s;
            let u = this.parentStack.pop();
            u && e.ruleIndex === _.RULE_expression && ((s = e.parentCtx) == null ? void 0 : s.ruleIndex) === _.RULE_paramList && u.type === "InvocationExpression" && (u.text = e.getText());
          };
          break;
        default:
          a.prototype[r] = function() {
            this.parentStack.pop();
          };
          break;
      }
  return Ht = {
    ErrorListener: p,
    PathListener: a
  }, Ht;
}
var Vt, Fl;
function Bi() {
  if (Fl) return Vt;
  Fl = 1;
  const f = $e(), g = Di(), _ = Ys(), { ErrorListener: p, PathListener: a } = qi();
  function r(e) {
    const u = new f.InputStream(e), s = new g(u), i = new f.CommonTokenStream(s), n = new _(i);
    n.buildParseTrees = !0;
    const l = [], t = new p(l);
    s.removeErrorListeners(), s.addErrorListener(t), n.removeErrorListeners(), n.addErrorListener(t);
    const m = n.entireExpression(), d = new a();
    if (f.tree.ParseTreeWalker.DEFAULT.walk(d, m), l.length > 0) {
      let o = [];
      for (let c = 0, y = l.length; c < y; ++c) {
        let T = l[c], N = "line: " + T[2] + "; column: " + T[3] + "; message: " + T[4];
        o.push(N);
      }
      const h = new Error(o.join(`
`));
      throw h.errors = l, h;
    }
    return d.getAST();
  }
  return Vt = {
    parse: r
  }, Vt;
}
var Gt, Dl;
function Hi() {
  if (Dl) return Gt;
  Dl = 1;
  var f = 6e4;
  return Gt = function(_) {
    var p = new Date(_.getTime()), a = p.getTimezoneOffset();
    p.setSeconds(0, 0);
    var r = p.getTime() % f;
    return a * f + r;
  }, Gt;
}
var zt, ql;
function Vi() {
  if (ql) return zt;
  ql = 1;
  function f(g) {
    return g instanceof Date;
  }
  return zt = f, zt;
}
var $t, Bl;
function Qe() {
  if (Bl) return $t;
  Bl = 1;
  var f = Hi(), g = Vi(), _ = 36e5, p = 6e4, a = 2, r = /[T ]/, e = /:/, u = /^(\d{2})$/, s = [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ], i = /^(\d{4})/, n = [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ], l = /^-(\d{2})$/, t = /^-?(\d{3})$/, m = /^-?(\d{2})-?(\d{2})$/, d = /^-?W(\d{2})$/, o = /^-?W(\d{2})-?(\d{1})$/, h = /^(\d{2}([.,]\d*)?)$/, c = /^(\d{2}):?(\d{2}([.,]\d*)?)$/, y = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/, T = /([Z+-].*)$/, N = /^(Z)$/, O = /^([+-])(\d{2})$/, P = /^([+-])(\d{2}):?(\d{2})$/;
  function z(C, b) {
    if (g(C))
      return new Date(C.getTime());
    if (typeof C != "string")
      return new Date(C);
    var v = b || {}, M = v.additionalDigits;
    M == null ? M = a : M = Number(M);
    var A = D(C), q = F(A.date, M), H = q.year, Y = q.restDateString, Z = B(Y, H);
    if (Z) {
      var Q = Z.getTime(), ee = 0, te;
      if (A.time && (ee = $(A.time)), A.timezone)
        te = I(A.timezone) * p;
      else {
        var ie = Q + ee, oe = new Date(ie);
        te = f(oe);
        var he = new Date(ie);
        he.setDate(oe.getDate() + 1);
        var de = f(he) - f(oe);
        de > 0 && (te += de);
      }
      return new Date(Q + ee + te);
    } else
      return new Date(C);
  }
  function D(C) {
    var b = {}, v = C.split(r), M;
    if (e.test(v[0]) ? (b.date = null, M = v[0]) : (b.date = v[0], M = v[1]), M) {
      var A = T.exec(M);
      A ? (b.time = M.replace(A[1], ""), b.timezone = A[1]) : b.time = M;
    }
    return b;
  }
  function F(C, b) {
    var v = s[b], M = n[b], A;
    if (A = i.exec(C) || M.exec(C), A) {
      var q = A[1];
      return {
        year: parseInt(q, 10),
        restDateString: C.slice(q.length)
      };
    }
    if (A = u.exec(C) || v.exec(C), A) {
      var H = A[1];
      return {
        year: parseInt(H, 10) * 100,
        restDateString: C.slice(H.length)
      };
    }
    return {
      year: null
    };
  }
  function B(C, b) {
    if (b === null)
      return null;
    var v, M, A, q;
    if (C.length === 0)
      return M = /* @__PURE__ */ new Date(0), M.setUTCFullYear(b), M;
    if (v = l.exec(C), v)
      return M = /* @__PURE__ */ new Date(0), A = parseInt(v[1], 10) - 1, M.setUTCFullYear(b, A), M;
    if (v = t.exec(C), v) {
      M = /* @__PURE__ */ new Date(0);
      var H = parseInt(v[1], 10);
      return M.setUTCFullYear(b, 0, H), M;
    }
    if (v = m.exec(C), v) {
      M = /* @__PURE__ */ new Date(0), A = parseInt(v[1], 10) - 1;
      var Y = parseInt(v[2], 10);
      return M.setUTCFullYear(b, A, Y), M;
    }
    if (v = d.exec(C), v)
      return q = parseInt(v[1], 10) - 1, S(b, q);
    if (v = o.exec(C), v) {
      q = parseInt(v[1], 10) - 1;
      var Z = parseInt(v[2], 10) - 1;
      return S(b, q, Z);
    }
    return null;
  }
  function $(C) {
    var b, v, M;
    if (b = h.exec(C), b)
      return v = parseFloat(b[1].replace(",", ".")), v % 24 * _;
    if (b = c.exec(C), b)
      return v = parseInt(b[1], 10), M = parseFloat(b[2].replace(",", ".")), v % 24 * _ + M * p;
    if (b = y.exec(C), b) {
      v = parseInt(b[1], 10), M = parseInt(b[2], 10);
      var A = parseFloat(b[3].replace(",", "."));
      return v % 24 * _ + M * p + A * 1e3;
    }
    return null;
  }
  function I(C) {
    var b, v;
    return b = N.exec(C), b ? 0 : (b = O.exec(C), b ? (v = parseInt(b[2], 10) * 60, b[1] === "+" ? -v : v) : (b = P.exec(C), b ? (v = parseInt(b[2], 10) * 60 + parseInt(b[3], 10), b[1] === "+" ? -v : v) : 0));
  }
  function S(C, b, v) {
    b = b || 0, v = v || 0;
    var M = /* @__PURE__ */ new Date(0);
    M.setUTCFullYear(C, 0, 4);
    var A = M.getUTCDay() || 7, q = b * 7 + v + 1 - A;
    return M.setUTCDate(M.getUTCDate() + q), M;
  }
  return $t = z, $t;
}
var Kt, Hl;
function Xe() {
  if (Hl) return Kt;
  Hl = 1;
  var f = Qe();
  function g(_, p) {
    var a = f(_).getTime(), r = Number(p);
    return new Date(a + r);
  }
  return Kt = g, Kt;
}
var jt, Vl;
function Gl() {
  if (Vl) return jt;
  Vl = 1;
  var f = Xe(), g = 6e4;
  function _(p, a) {
    var r = Number(a);
    return f(p, r * g);
  }
  return jt = _, jt;
}
var _e = {}, Re = {}, zl;
function Se() {
  if (zl) return Re;
  zl = 1, Object.defineProperty(Re, "__esModule", {
    value: !0
  }), Re.Ucum = void 0;
  var f = {
    /**
     *  Flag indicating whether or not we're using case sensitive labels
     *  I don't think we need this.  I think we're just going with
     *  case sensitive, per Clem.   Gunther's code has this flag, but I
     *  am removing it, at least for now.  lm, 6/2016
     */
    //caseSensitive_: true ,
    /**
     *  The number of elements in a Dimension array.   Currently this
     *  is set as a configuration variable, but when we get to the point
     *  of loading the unit definitions from a file, this value will be
     *  set from that.
     */
    dimLen_: 7,
    /**
     *  The characters used as valid operators in a UCUM unit expression,
     *  where '.' is for multiplication and '/' is for division.
     */
    validOps_: [".", "/"],
    /**
     * The string used to separate a unit code and unit name when they
     * are displayed together
     */
    codeSep_: ": ",
    // Message text variations for validation methods and conversion methods
    valMsgStart_: "Did you mean ",
    valMsgEnd_: "?",
    cnvMsgStart_: "We assumed you meant ",
    cnvMsgEnd_: ".",
    /**
       * Default opening string used to emphasize portions of error messages.
       * Used when NOT displaying messages on a web site, i.e., for output
       * from the library methods or to a file.
       */
    openEmph_: " ->",
    /**
     * Default closing string used to emphasize portions of error messages.
     * Used when NOT displaying messages on a web site, i.e., for output
     * from the library methods or to a file.
     */
    closeEmph_: "<- ",
    /**
     * Opening HTML used to emphasize portions of error messages.  Used when
     * displaying messages on a web site; should be blank when output is
     * to a file.
     */
    openEmphHTML_: ' <span class="emphSpan">',
    /**
     * Closing HTML used to emphasize portions of error messages.  Used when
     * displaying messages on a web site; should be blank when output is
     * to a file.
     */
    closeEmphHTML_: "</span> ",
    /**
     * Message that is displayed when annotations are included in a unit
     * string, to let the user know how they are interpreted.
     */
    bracesMsg_: "FYI - annotations (text in curly braces {}) are ignored, except that an annotation without a leading symbol implies the default unit 1 (the unity).",
    /**
     * Message that is displayed or returned when a conversion is requested
     * for two units where (only) a mass<->moles conversion is appropriate
     * but no molecular weight was specified.
     */
    needMoleWeightMsg_: "Did you wish to convert between mass and moles?  The molecular weight of the substance represented by the units is required to perform the conversion.",
    /**
     * Hash that matches unit column names to names used in the csv file
     * that is submitted to the data updater.
     */
    csvCols_: {
      "case-sensitive code": "csCode_",
      "LOINC property": "loincProperty_",
      "name (display)": "name_",
      synonyms: "synonyms_",
      source: "source_",
      category: "category_",
      Guidance: "guidance_"
    },
    /**
     * Name of the column in the csv file that serves as the key
     */
    inputKey_: "case-sensitive code",
    /**
     * Special codes that contain operators within brackets.  The operator
     * within these codes causes them to parse incorrectly if they are preceded
     * by a prefix, because the parsing algorithm splits them up on the operator.
     * So we use this object to identify them and substitute placeholders to
     * avoid that.
     */
    specUnits_: {
      "B[10.nV]": "specialUnitOne",
      "[m/s2/Hz^(1/2)]": "specialUnitTwo"
    }
  };
  return Re.Ucum = f, Re;
}
var we = {}, Ue = {}, ke = {}, $l;
function Gi() {
  if ($l) return ke;
  $l = 1, Object.defineProperty(ke, "__esModule", {
    value: !0
  }), ke.Prefix = void 0, Se();
  class f {
    /**
     * Creates a single prefix object.
     *
     * @param attrs a hash of the values to use in creating the prefix object.
     *  They should be:
     *   code_ - which is the case-sensitive code used for the prefix,
     *    e.g., k for kilo
     *   ciCode_ - which is the case-insensitive code used for the prefix,
     *    e.g., K for kilo
     *   name_ - which is the name of the prefix, e.g., kilo
     *   printSymbol_ - which is the print symbol for the prefix, e.g., k for kilo
     *   value_ - which is teh value to use in multiplying the magnitude of
     *    a unit, e.g., for a prefix of c the value will be .01.
     *   exp_ - which is the exponent used to get the value. For decimal based
     *    prefixes the base is 10 and the exp_ is applied to 10, e.g., for a
     *    prefix of c, the exponent will be -2.  For prefixes that are not
     *    decimal based, this will be null (but must not be undefined).
     *
     * @throws an error if the not all required parameters are provided
     */
    constructor(_) {
      if (_.code_ === void 0 || _.code_ === null || _.name_ === void 0 || _.name_ === null || _.value_ === void 0 || _.value_ === null || _.exp_ === void 0)
        throw new Error("Prefix constructor called missing one or more parameters.  Prefix codes (cs or ci), name, value and exponent must all be specified and all but the exponent must not be null.");
      this.code_ = _.code_, this.ciCode_ = _.ciCode_, this.name_ = _.name_, this.printSymbol_ = _.printSymbol_, typeof _.value_ == "string" ? this.value_ = parseFloat(_.value_) : this.value_ = _.value_, this.exp_ = _.exp_;
    }
    // end constructor
    /**
     * Returns the value for the current prefix object
     * @return the value for the prefix object with the specified code
     * */
    getValue() {
      return this.value_;
    }
    /**
     * Returns the prefix code for the current prefix object
     * @return the code for the current prefix object
     */
    getCode() {
      return this.code_;
    }
    /**
     * Returns the case-insensitive code for the current prefix object
     * @return the case_insensitive code for the current prefix object
     */
    getCiCode() {
      return this.ciCode_;
    }
    /**
     * Returns the prefix name for the current prefix object
     * @return the name for the current prefix object
     */
    getName() {
      return this.name_;
    }
    /**
     * Returns the print symbol for the current prefix object
     * @return the print symbol for the current prefix object
     */
    getPrintSymbol() {
      return this.printSymbol_;
    }
    /**
     * Returns the exponent for the current prefix object
     * @return the exponent for the current prefix object
     */
    getExp() {
      return this.exp_;
    }
    /**
     * Provides way to tell if one prefix equals another.  The second prefix
     * must match all attribute values.
     *
     * @param prefix2 prefix object to check for a match
     * @return true for a match; false if one or more attributes don't match
     */
    equals(_) {
      return this.code_ === _.code_ && this.ciCode_ === _.ciCode_ && this.name_ === _.name_ && this.printSymbol_ === _.printSymbol_ && this.value_ === _.value_ && this.exp_ === _.exp_;
    }
  }
  return ke.Prefix = f, ke;
}
var xe = {}, Kl;
function Zs() {
  if (Kl) return xe;
  Kl = 1, Object.defineProperty(xe, "__esModule", {
    value: !0
  }), xe.PrefixTables = xe.PrefixTablesFactory = void 0;
  class f {
    /**
     * Constructor.  This creates the empty PrefixTable hashes once.
     * There is one hash whose key is the prefix code and one whose
     * key is the prefix value.
     *
     * Implementation of this as a singleton is based on the UnitTables
     * implementation.  See that class for details.
     */
    constructor() {
      this.byCode_ = {}, this.byValue_ = {};
    }
    /**
     * Provides the number of prefix objects in each table
     * @returns count of the number of prefix objects in each table
     */
    prefixCount() {
      return Object.keys(this.byCode_).length;
    }
    /**
     * This is used to get all prefix objects by value.  Currently it is used
     * to create a csv file with all prefixes and units.
     * @returns csv string containing all prefix objects, ordered by value.
     */
    allPrefixesByValue() {
      let a = "", r = Object.keys(this.byValue_), e = r.length;
      for (let u = 0; u < e; u++) {
        let s = this.getPrefixByValue(r[u]);
        a += s.code_ + "," + s.name_ + ",," + s.value_ + `\r
`;
      }
      return a;
    }
    /**
     * This is used to get all prefix objects.  Currently it is used
     * to get the objects to write to the json ucum definitions file
     * that is used to provide prefix and unit definition objects for
     * conversions and validations.
     *
     * @returns an array containing all prefix objects, ordered by code.
     */
    allPrefixesByCode() {
      let a = [], r = Object.keys(this.byCode_);
      r.sort();
      let e = r.length;
      for (let u = 0; u < e; u++)
        a.push(this.getPrefixByCode(r[u]));
      return a;
    }
    /**
     * Adds a prefix object to the tables
     *
     * @param prefixObj the object to be added to the tables
     */
    add(a) {
      this.byCode_[a.getCode()] = a, this.byValue_[a.getValue()] = a;
    }
    /**
     * Tests whether a prefix object is found for a specified code.  This
     * is used to determine whether or not a prefix object has been created
     * for the code.
     *
     * @param code the code to be used to find the prefix object
     * @return boolean indicating whether or not a prefix object was found
     *  for the specified code
     */
    isDefined(a) {
      return this.byCode_[a] !== null && this.byCode_[a] !== void 0;
    }
    /**
     * Obtains a prefix object for a specified code.
     *
     * @param code the code to be used to find the prefix object
     * @return the prefix object found, or null if nothing was found
     */
    getPrefixByCode(a) {
      return this.byCode_[a];
    }
    /**
     * Obtains a prefix object for a specified value.
     *
     * @param value the value to be used to find the prefix object
     * @return the prefix object found, or null if nothing was found
     */
    getPrefixByValue(a) {
      return this.byValue_[a];
    }
  }
  xe.PrefixTablesFactory = f;
  var g = new f();
  const _ = {
    getInstance: function() {
      return g;
    }
  };
  return xe.PrefixTables = _, xe;
}
var Pe = {}, Fe = {}, jl;
function zi() {
  if (jl) return Fe;
  jl = 1, Object.defineProperty(Fe, "__esModule", {
    value: !0
  }), Fe.default = void 0;
  class f {
    /**
     * Constructor
     *
     * Creates the singleton object that contains the list of functions used
     * to convert special units.
     */
    constructor() {
      this.funcs = {}, this.funcs.cel = {
        cnvTo: function(p) {
          return p - 273.15;
        },
        cnvFrom: function(p) {
          return p + 273.15;
        }
      }, this.funcs.degf = {
        cnvTo: function(p) {
          return p - 459.67;
        },
        cnvFrom: function(p) {
          return p + 459.67;
        }
      }, this.funcs.degre = {
        cnvTo: function(p) {
          return p - 273.15;
        },
        cnvFrom: function(p) {
          return p + 273.15;
        }
      }, this.funcs.ph = {
        cnvTo: function(p) {
          return -Math.log(p) / Math.LN10;
        },
        cnvFrom: function(p) {
          return Math.pow(10, -p);
        }
      }, this.funcs.ln = {
        cnvTo: function(p) {
          return Math.log(p);
        },
        cnvFrom: function(p) {
          return Math.exp(p);
        }
      }, this.funcs["2ln"] = {
        cnvTo: function(p) {
          return 2 * Math.log(p);
        },
        cnvFrom: function(p) {
          return Math.exp(p / 2);
        }
      }, this.funcs.lg = {
        cnvTo: function(p) {
          return Math.log(p) / Math.LN10;
        },
        cnvFrom: function(p) {
          return Math.pow(10, p);
        }
      }, this.funcs["10lg"] = {
        cnvTo: function(p) {
          return 10 * Math.log(p) / Math.LN10;
        },
        cnvFrom: function(p) {
          return Math.pow(10, p / 10);
        }
      }, this.funcs["20lg"] = {
        cnvTo: function(p) {
          return 20 * Math.log(p) / Math.LN10;
        },
        cnvFrom: function(p) {
          return Math.pow(10, p / 20);
        }
      }, this.funcs["2lg"] = {
        cnvTo: function(p) {
          return 2 * Math.log(p) / Math.LN10;
        },
        cnvFrom: function(p) {
          return Math.pow(10, p / 2);
        }
      }, this.funcs.lgtimes2 = this.funcs["2lg"], this.funcs.ld = {
        cnvTo: function(p) {
          return Math.log(p) / Math.LN2;
        },
        cnvFrom: function(p) {
          return Math.pow(2, p);
        }
      }, this.funcs["100tan"] = {
        cnvTo: function(p) {
          return Math.tan(p) * 100;
        },
        cnvFrom: function(p) {
          return Math.atan(p / 100);
        }
      }, this.funcs.tanTimes100 = this.funcs["100tan"], this.funcs.sqrt = {
        cnvTo: function(p) {
          return Math.sqrt(p);
        },
        cnvFrom: function(p) {
          return p * p;
        }
      }, this.funcs.inv = {
        cnvTo: function(p) {
          return 1 / p;
        },
        cnvFrom: function(p) {
          return 1 / p;
        }
      }, this.funcs.hpX = {
        cnvTo: function(p) {
          return -this.funcs.lg(p);
        },
        cnvFrom: function(p) {
          return Math.pow(10, -p);
        }
      }, this.funcs.hpC = {
        cnvTo: function(p) {
          return -this.func.ln(p) / this.funcs.ln(100);
        },
        cnvFrom: function(p) {
          return Math.pow(100, -p);
        }
      }, this.funcs.hpM = {
        cnvTo: function(p) {
          return -this.funcs.ln(p) / this.funcs.ln(1e3);
        },
        cnvFrom: function(p) {
          return Math.pow(1e3, -p);
        }
      }, this.funcs.hpQ = {
        cnvTo: function(p) {
          return -this.funcs.ln(p) / this.funcs.ln(5e4);
        },
        cnvFrom: function(p) {
          return Math.pow(5e4, -p);
        }
      };
    }
    // end of constructor
    /**
     * Returns the function with the name specified
     *
     * @param fname name of the function to be returned
     * @return the function with the specified name
     * @throws an error message if the function is not found
     */
    forName(p) {
      p = p.toLowerCase();
      let a = this.funcs[p];
      if (a === null) throw new Error(`Requested function ${p} is not defined`);
      return a;
    }
    /**
     * Returns a flag indicating whether or not the function has been
     * defined.
     *
     * @param fname name of the function in question
     * @return true if it has been defined; false if not
     */
    isDefined(p) {
      return p = p.toLowerCase(), this.funcs[p] !== null;
    }
  }
  var g = new f();
  return Fe.default = g, Fe;
}
var Ie = {}, De = {}, Wl;
function Oe() {
  if (Wl) return De;
  Wl = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.UnitTables = void 0;
  var f = Se().Ucum;
  class g {
    /**
     * Constructor.  This creates the empty unit tables (hashes) once. After the
     * tables are created, it redefines this constructor to throw an error
     * stating that the constructor is no longer available and that the
     * getInstance function must be used.   Here's a description of the first
     * and then all subsequent calls to this constructor.
     *
     * First call to constructor:
     * 1. creates  OBJECT1
     * 2. initializes attributes of OBJECT1
     * 3. stores reference to OBJECT1.prototype in holdthis local variable
     * 4. redefines OBJECT1 as a function that throws an error
     * 5. defines the getInstance function (which is also defined outside of
     *    the class definition - see below).
     *
     * All subsequent calls to constructor:
     * 1. throw error message referring to getInstance
     * 2. call getInstance, returns this - which is OBJECT1.
     */
    constructor() {
      this.unitNames_ = {}, this.unitCodes_ = {}, this.codeOrder_ = [], this.unitStrings_ = {}, this.unitDimensions_ = {}, this.unitSynonyms_ = {}, this.massDimIndex_ = 0, this.dimVecIndexToBaseUnit_ = {};
    }
    /**
     * Provides the number of unit objects written to the tables, using the
     * codes table since codes must be unique.
     *
     * @returns count of the number of unit objects in the unitCodes_ table.
     */
    unitsCount() {
      return Object.keys(this.unitCodes_).length;
    }
    /**
     * Adds a Unit object to the tables.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws passes on an error if one is thrown by the called functions for
     *  a problem with the unit code or unit name
     */
    addUnit(r) {
      r.name_ && this.addUnitName(r), this.addUnitCode(r), this.addUnitString(r);
      try {
        r.dim_.getProperty("dimVec_") && this.addUnitDimension(r);
      } catch {
      }
      if (r.isBase_) {
        const u = r.dim_.dimVec_;
        let s;
        for (let i = 0, n = u.length; s == null && i < n; ++i)
          u[i] != 0 && (s = i);
        this.dimVecIndexToBaseUnit_[s] = r.csCode_;
      }
    }
    // end addUnit
    /**
     * Adds a Unit object to the unitNames_ table.  More than one unit
     * can have the same name, e.g., the two units with the name "second",
     * where the code for one of them is 's' and the code for the other is
     * "'".  Because of this, an array of unit objects is stored for the
     * name.  In most cases it will be an array of one object, but this
     * clarifies that there may be more than one.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if the unit has no name
     */
    addUnitName(r) {
      let e = r.name_;
      if (e)
        this.unitNames_[e] ? this.unitNames_[e].push(r) : this.unitNames_[e] = [r];
      else throw new Error(`UnitTables.addUnitName called for a unit with no name.  Unit code = ${r.csCode_}.`);
    }
    // end addUnitName
    /**
     * Adds a Unit object to the unitCodes_, unitUcCodes_, unitLcCodes_ and
     * codeOrder_ tables.  This also sets the mass dimension index when the
     * base mass unit (gram) is read.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if the unitCodes_ table already contains a unit with
     *  the code
     */
    addUnitCode(r) {
      let e = r.csCode_;
      if (e) {
        if (this.unitCodes_[e]) throw new Error(`UnitTables.addUnitCode called, already contains entry for unit with code = ${e}`);
        if (this.unitCodes_[e] = r, this.codeOrder_.push(e), e == "g") {
          let u = r.dim_.dimVec_, s = 0;
          for (; s < u.length && u[s] < 1; s++) ;
          this.massDimIndex_ = s;
        }
      } else throw new Error("UnitTables.addUnitCode called for unit that has no code.");
    }
    // end addUnitCode
    /**
     * Adds a unit object to the unitStrings_ table.  More than one unit
     * can have the same string, so an array of unit objects is stored
     * for the string.  The unit string is the string that creates a non-base
     * unit, e.g., a Newton has a unit code of N, a name of Newton, and a
     * unitString of kg.m/s2.
     *
     * If the unit has no string, nothing is stored and no error is reported.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     */
    addUnitString(r) {
      let e = null;
      if (f.caseSensitive_ == !0 ? e = r.csUnitString_ : e = r.ciUnitString_, e) {
        let u = {
          mag: r.baseFactorStr_,
          unit: r
        };
        this.unitStrings_[e] ? this.unitStrings_[e].push(u) : this.unitStrings_[e] = [u];
      }
    }
    // end addUnitString
    /**
     * Adds a Unit object to the unitDimensions_ table.  More than one unit
     * can have the same dimension (commensurable units have the same dimension).
     * Because of this, an array of unit objects is stored for the
     * dimension.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if the unit has no dimension
     */
    addUnitDimension(r) {
      let e = r.dim_.getProperty("dimVec_");
      if (e)
        this.unitDimensions_[e] ? this.unitDimensions_[e].push(r) : this.unitDimensions_[e] = [r];
      else throw new Error(`UnitTables.addUnitDimension called for a unit with no dimension.  Unit code = ${r.csCode_}.`);
    }
    // end addUnitDimension
    /**
     * Builds the unitSynonyms_ table. This is called the first time the
     * getUnitsBySynonym method is called.  The table/hash contains each word
     * (once) from each synonym as well as each word from each unit name.
     *
     * Hash keys are the words.  Hash values are an array of unit codes for
     * each unit that has that word in its synonyms or name.
     *
     * @returns nothing
     */
    buildUnitSynonyms() {
      for (let r in this.unitCodes_) {
        let e = this.unitCodes_[r], u = e.synonyms_;
        if (u) {
          let s = u.split(";");
          if (s[0] !== "") {
            let i = s.length;
            for (let n = 0; n < i; n++) {
              let l = s[n].trim();
              this.addSynonymCodes(r, l);
            }
          }
        }
        this.addSynonymCodes(r, e.name_);
      }
    }
    // end buildUnitSynonyms
    /**
     * Adds unit code entries to the synonyms table for a string containing
     * one or more words to be considered as synonyms.
     *
     * @param theCode the unit code to be connected to the synonyms
     * @param theSynonyms a string containing one or more words to be
     *  considered synonyms (and thus to be added to the unitSynonyms hash).
     */
    addSynonymCodes(r, e) {
      let u = e.split(" "), s = u.length;
      for (let i = 0; i < s; i++) {
        let n = u[i];
        this.unitSynonyms_[n] ? this.unitSynonyms_[n].indexOf(r) === -1 && this.unitSynonyms_[n].push(r) : this.unitSynonyms_[n] = [r];
      }
    }
    // end addSynonymCodes
    /**
     *  Returns a unit object with a case-sensitive code matching the
     *  uCode parameter, or null if no unit is found with that code.
     *
     *  @param uCode the code of the unit to be returned
     *  @returns the unit object or null if it is not found
     */
    getUnitByCode(r) {
      let e = null;
      return r && (e = this.unitCodes_[r]), e;
    }
    /**
     *  Returns a array of unit objects based on the unit's name.  Usually this
     *  will be an array of one, but there may be more, since unit names are
     *  not necessarily unique.
     *
     *  @param uName the name of the unit to be returned.  If more than one
     *  unit has the same name and you only want one specific unit, append the
     *  csCode of the unit you want to the end of the name, separated by the
     *  Ucum.codeSep_ value, e.g., inch - [in_i] vs. inch - [in_us].
     *  @returns null if no unit was found for the specified name OR an array of
     *  unit objects with the specified name.  Normally this will be an array
     *  of one object.
     *  @throws an error if no name is provided to search on
     */
    getUnitByName(r) {
      if (r == null)
        throw new Error("Unable to find unit by name because no name was provided.");
      let e = r.indexOf(f.codeSep_), u = null;
      e >= 1 && (u = r.substr(e + f.codeSep_.length), r = r.substr(0, e));
      let s = this.unitNames_[r];
      if (s) {
        let i = s.length;
        if (u && i > 1) {
          let n = 0;
          for (; s[n].csCode_ !== u && n < i; n++) ;
          n < i ? s = [s[n]] : s = null;
        }
      }
      return s;
    }
    // end getUnitByName
    /**
     *  Returns an array of unit objects with the specified unit string.
     *  The array may contain one or more unit reference objects.
     *  Or none, if no units have a matching unit string (which is not
     *  considered an error)
     *
     *  @param name the name of the unit to be returned
     *  @returns the array of unit references or null if none were found
     */
    getUnitByString(r) {
      let e = null;
      return r && (e = this.unitStrings_[r], e === void 0 && (e = null)), e;
    }
    /**
     *  Returns a array of unit objects based on the unit's dimension vector.
     *
     *  @param uName the dimension vector of the units to be returned.
     *
     *  @returns null if no unit was found for the specified vector OR an array of
     *  one or more unit objects with the specified vector.
     *  @throws an error if no vector is provided to search on
     *  logs an error to the console if no unit is found
     */
    getUnitsByDimension(r) {
      let e = null;
      if (r == null)
        throw new Error("Unable to find unit by because no dimension vector was provided.");
      return e = this.unitDimensions_[r], e == null && console.log(`Unable to find unit with dimension = ${r}`), e;
    }
    // end getUnitsByDimension
    /**
     *  Returns a array of unit objects that include the specified synonym.
     *
     *  @param uSyn the synonym of the units to be returned.
     *
     *  @returns an object with two of the following three elements:
     *   'status' will be error, failed or succeeded
     *   'msg' will be included for returns with status = error or failed and
     *     will explain why the request did not return any units
     *   'units' any array of unit objects with the specified synonym will be
     *     returned for requests with status = succeeded
     */
    getUnitBySynonym(r) {
      let e = {}, u = [];
      try {
        if (r == null)
          throw e.status = "error", new Error("Unable to find unit by synonym because no synonym was provided.");
        Object.keys(this.unitSynonyms_).length === 0 && this.buildUnitSynonyms();
        let s = [];
        if (s = this.unitSynonyms_[r], s) {
          e.status = "succeeded";
          let i = s.length;
          for (let n = 0; n < i; n++)
            u.push(this.unitCodes_[s[n]]);
          e.units = u;
        }
        u.length === 0 && (e.status = "failed", e.msg = `Unable to find any units with synonym = ${r}`);
      } catch (s) {
        e.msg = s.message;
      }
      return e;
    }
    // end getUnitBySynonym
    /**
     * Gets a list of all unit names in the Unit tables
     *
     * @returns an array of the unit names
     */
    getAllUnitNames() {
      return Object.keys(this.unitNames_);
    }
    // end getAllUnitNames
    /**
     * Gets a list of all unit names in the tables.  Where more than one
     * unit has the same name, the unit code, in parentheses, is appended
     * to the end of the name.
     *
     * @returns {Array}
     */
    getUnitNamesList() {
      let r = [], e = Object.keys(this.unitCodes_);
      e.sort(this.compareCodes);
      let u = e.length;
      for (let s = 0; s < u; s++)
        r[s] = e[s] + f.codeSep_ + this.unitCodes_[e[s]].name_;
      return r;
    }
    /*
     * Returns the mass dimension index
     * @returns this.massDimIndex_
     */
    getMassDimensionIndex() {
      return this.massDimIndex_;
    }
    /**
     * This provides a sort function for unit codes so that sorting ignores
     * square brackets and case.
     *
     * @param a first value
     * @param b second value
     * @returns -1 if a is should fall before b; otherwise 1.
     */
    compareCodes(r, e) {
      return r = r.replace(/[\[\]]/g, ""), r = r.toLowerCase(), e = e.replace(/[\[\]]/g, ""), e = e.toLowerCase(), r < e ? -1 : 1;
    }
    /**
     * Gets a list of all unit codes in the Unit tables
     *
     * @returns an array of the unit names
     */
    getAllUnitCodes() {
      return Object.keys(this.unitCodes_);
    }
    // end getAllUnitNames
    /**
     * This is used to get all unit objects.  Currently it is used
     * to get the objects to write to the json ucum definitions file
     * that is used to provide prefix and unit definition objects for
     * conversions and validations.
     *
     * @returns an array containing all unit objects, ordered by definition
     * order
     */
    allUnitsByDef() {
      let r = [], e = this.codeOrder_.length;
      for (let u = 0; u < e; u++)
        r.push(this.getUnitByCode(this.codeOrder_[u]));
      return r;
    }
    // end allUnitsByDef
    /**
     * This is used to get all unit objects, ordered by unit name.  Currently it
     * is used to create a csv list of all units.
     * @param sep separator character (or string) to be used to separate each
     *  column in the output.  Optional, defaults to '|' if not specified.
     *  (Used to use ; but the synonyms use that extensively).  Don't use a
     *  comma or any other punctuation found in the output data.
     * @returns a buffer containing all unit objects, ordered by name
     * order
     */
    allUnitsByName(r, e) {
      e == null && (e = "|");
      let u = "", s = this.getAllUnitNames(), i = s.length, n = r.length;
      for (let l = 0; l < i; l++) {
        let t = this.getUnitByName(s[l]);
        for (let m = 0; m < t.length; m++) {
          let d = t[m];
          for (let o = 0; o < n; o++)
            if (o > 0 && (u += e), r[o] === "dim_")
              d.dim_ !== null && d.dim_ !== void 0 && d.dim_.dimVec_ instanceof Array ? u += "[" + d.dim_.dimVec_.join(",") + "]" : u += "";
            else {
              let h = d[r[o]];
              typeof h == "string" ? u += h.replace(/[\n\r]/g, " ") : u += h;
            }
          u += `\r
`;
        }
      }
      return u;
    }
    // end allUnitsByName
    /**
     * This creates a list of all units in the tables.  It uses the byCode
     * table, and uses the codeOrder_ array to determine the order in which
     * the units are listed.
     *
     * @param doLong boolean indicating how much to output.  If true, all data
     *  from the unit objects is included.   If false, only a few major values
     *  are included.
     * @param sep separator character (or string) to be used to separate each
     *  column in the output.  Optional, defaults to '|' if not specified.
     *  (Used to use ; but the synonyms use that extensively).
     * @returns {string} buffer containing all the listings
     */
    printUnits(r, e) {
      r === void 0 && (r = !1), e === void 0 && (e = "|");
      let u = "", s = this.codeOrder_.length, i = "csCode" + e;
      r && (i += "ciCode" + e), i += "name" + e, r && (i += "isBase" + e), i += "magnitude" + e + "dimension" + e + "from unit(s)" + e + "value" + e + "function" + e, r && (i += "property" + e + "printSymbol" + e + "synonyms" + e + "source" + e + "class" + e + "isMetric" + e + "variable" + e + "isSpecial" + e + "isAbitrary" + e), i += "comment", u = i + `
`;
      for (let n = 0; n < s; n++) {
        let l = this.getUnitByCode(this.codeOrder_[n]);
        i = this.codeOrder_[n] + e, r && (i += l.getProperty("ciCode_") + e), i += l.getProperty("name_") + e, r && (l.getProperty("isBase_") ? i += "true" + e : i += "false" + e), i += l.getProperty("magnitude_") + e;
        let t = l.getProperty("dim_");
        t ? i += t.dimVec_ + e : i += "null" + e, l.csUnitString_ ? i += l.csUnitString_ + e + l.baseFactor_ + e : i += "null" + e + "null" + e, l.cnv_ ? i += l.cnv_ + e : i += "null" + e, r && (i += l.getProperty("property_") + e + l.getProperty("printSymbol_") + e + l.getProperty("synonyms_") + e + l.getProperty("source_") + e + l.getProperty("class_") + e + l.getProperty("isMetric_") + e + l.getProperty("variable_") + e + l.getProperty("isSpecial_") + e + l.getProperty("isArbitrary_") + e), l.defError_ && (i += "problem parsing this one, deferred to later."), u += i + `
`;
      }
      return u;
    }
  }
  var _ = new g();
  const p = {
    getInstance: function() {
      return _;
    }
  };
  return De.UnitTables = p, De;
}
var Jl;
function An() {
  if (Jl) return Ie;
  Jl = 1, Object.defineProperty(Ie, "__esModule", {
    value: !0
  }), Ie.isNumericString = g, Ie.isIntegerUnit = _, Ie.getSynonyms = p;
  var f = Oe().UnitTables;
  function g(a) {
    let r = "" + a;
    return !isNaN(r) && !isNaN(parseFloat(r));
  }
  function _(a) {
    return /^\d+$/.test(a);
  }
  function p(a) {
    let r = {}, e = f.getInstance(), u = {};
    if (u = e.getUnitBySynonym(a), !u.units)
      r.status = u.status, r.msg = u.msg;
    else {
      r.status = "succeeded";
      let s = u.units.length;
      r.units = [];
      for (let i = 0; i < s; i++) {
        let n = u.units[i];
        r.units[i] = {
          code: n.csCode_,
          name: n.name_,
          guidance: n.guidance_
        };
      }
    }
    return r;
  }
  return Ie;
}
var qe = {}, Wt, Yl;
function $i() {
  return Yl || (Yl = 1, Wt = Number.isFinite || function(f) {
    return !(typeof f != "number" || f !== f || f === 1 / 0 || f === -1 / 0);
  }), Wt;
}
var Jt, Zl;
function Qs() {
  if (Zl) return Jt;
  Zl = 1;
  var f = $i();
  return Jt = Number.isInteger || function(g) {
    return typeof g == "number" && f(g) && Math.floor(g) === g;
  }, Jt;
}
var Ql;
function Ki() {
  if (Ql) return qe;
  Ql = 1, Object.defineProperty(qe, "__esModule", {
    value: !0
  }), qe.Dimension = void 0;
  var f = Se(), g = Qs();
  class _ {
    /**
     * Constructor.
     *
     * @param dimSetting an optional parameter that may be:
     *  null, which means that the dimVec_ attribute for this object will be null; or
     *  an array, which must be the length defined by Ucum.dimLen_, and
     *    whose contents will be copied to this new object's vector; or
     *  an integer, which must be between 0 and 1 less than the vector length
     *    defined by Ucum.dimLen_.  This new object's vector will be
     *    initialized to zero for all elements except the one whose index
     *    matches the number passed in.  That element will be set to one.
      * @throws an error if the dimSetting parameter does not meet the types
     *  listed above.
     *  An error will also be thrown if Ucum.dimLen_ has not been set yet,
     *  i.e., is still zero.   Currently that won't happen, because the
     *  value is set in the config.js file.  But further down the road
     *  the setting will come from a definitions input file, so we check
     *  here anyway.
     *
     */
    constructor(a) {
      if (f.Ucum.dimLen_ === 0)
        throw new Error("Dimension.setDimensionLen must be called before Dimension constructor");
      if (a == null)
        this.assignZero();
      else if (a instanceof Array) {
        if (a.length !== f.Ucum.dimLen_)
          throw new Error(`Parameter error, incorrect length of vector passed to Dimension constructor, vector = ${JSON.stringify(a)}`);
        this.dimVec_ = [];
        for (let r = 0; r < f.Ucum.dimLen_; r++) this.dimVec_.push(a[r]);
      } else if (g(a)) {
        if (a < 0 || a >= f.Ucum.dimLen_)
          throw new Error("Parameter error, invalid element number specified for Dimension constructor");
        this.assignZero(), this.dimVec_[a] = 1;
      }
    }
    // end constructor
    /**
     * Sets the element at the specified position to a specified value.  The
     * default value is 1.  If the dimension vector is null when this is called
     * a zero-filled vector is created and then the indicated position is set.
     *
     * @param indexPos the index of the element to be set
     * @param value the value to assign to the specified element; optional,
     *  default value is 1
     * @throws an exception if the specified position is invalid, i.e., not a
     *   number or is less than 0 or greater than Ucum.dimLen_
     **/
    setElementAt(a, r) {
      if (!g(a) || a < 0 || a >= f.Ucum.dimLen_)
        throw new Error(`Dimension.setElementAt called with an invalid index position (${a})`);
      this.dimVec_ || this.assignZero(), r == null && (r = 1), this.dimVec_[a] = r;
    }
    /**
     * Gets the value of the element at the specified position
     *
     * @param indexPos the index of the element whose value is to be returned
     * @return the value of the element at indexPos, or null if the dimension
     *  vector is null
     * @throws an exception if the specified position is invalid, i.e., not a
     *   number or is less than 0 or greater than Ucum.dimLen_
     **/
    getElementAt(a) {
      if (!g(a) || a < 0 || a >= f.Ucum.dimLen_)
        throw new Error(`Dimension.getElementAt called with an invalid index position (${a})`);
      let r = null;
      return this.dimVec_ && (r = this.dimVec_[a]), r;
    }
    /**
     * This returns the value of the property named by the parameter
     * passed in.  Although we currently only have one property, dimVec_,
     * that this will get, it's possible that we'll have additional
     * properties.   If we don't this could just be replaced by a
     * getVector function.
     *
     * @param propertyName name of the property to be returned, with
     *        or without the trailing underscore.
     * @return the requested property, if found for this Dimension
     * @throws an error if the property is not found for this Dimension
     */
    getProperty(a) {
      let r = a.charAt(a.length - 1) === "_" ? a : a + "_";
      return this[r];
    }
    // end getProperty
    /**
     * Return a string that represents the dimension vector.  Returns null if
     * the dimension vector is null.
     *
     * @return the string that represents the dimension vector.  The
     *         values are enclosed in square brackets, each separated
     *         by a comma and a space
     **/
    toString() {
      let a = null;
      return this.dimVec_ && (a = "[" + this.dimVec_.join(", ") + "]"), a;
    }
    /**
     * Adds the vector of the dimension object passed in to this
     * dimension object's vector.  This object's vector is changed.
     * If either dimension vector is null, no changes are made to this object.
     *
     *
     * @param dim2 the dimension whose vector is to be added to this one
     * @return this object
     * @throws an exception if dim2 is not a Dimension object
     **/
    add(a) {
      if (!a instanceof _)
        throw new Error(`Dimension.add called with an invalid parameter - ${typeof a} instead of a Dimension object`);
      if (this.dimVec_ && a.dimVec_)
        for (let r = 0; r < f.Ucum.dimLen_; r++) this.dimVec_[r] += a.dimVec_[r];
      return this;
    }
    /**
     * Subtracts the vector of the dimension object passed in from this
     * dimension object's vector.  This object's vector is changed.
     * If either dimension vector is null, no changes are made to this object.
     *
     * @param dim2 the dimension whose vector is to be subtracted from this one
     * @return this object
     * @throws an exception if dim2 is not a Dimension object
     **/
    sub(a) {
      if (!a instanceof _)
        throw new Error(`Dimension.sub called with an invalid parameter - ${typeof a} instead of a Dimension object`);
      if (this.dimVec_ && a.dimVec_)
        for (let r = 0; r < f.Ucum.dimLen_; r++) this.dimVec_[r] -= a.dimVec_[r];
      return this;
    }
    /**
     * Inverts this dimension object's vector (by multiplying each element
     * by negative 1).  This object's vector is changed - unless it is null,
     * in which case it stays that way.
     *
     * @return this object
     **/
    minus() {
      if (this.dimVec_)
        for (let a = 0; a < f.Ucum.dimLen_; a++) this.dimVec_[a] = -this.dimVec_[a];
      return this;
    }
    /**
     * Multiplies this dimension object's vector with a scalar.  This is used
     * when a unit is raised to a power.  This object's vector is changed unless
     * the vector is null, in which case it stays that way.
     *
     * @param s the scalar to use
     * @return this object
     * @throws an exception if s is not a number
     */
    mul(a) {
      if (!g(a))
        throw new Error(`Dimension.sub called with an invalid parameter - ${typeof dim2} instead of a number`);
      if (this.dimVec_)
        for (let r = 0; r < f.Ucum.dimLen_; r++) this.dimVec_[r] *= a;
      return this;
    }
    /**
     * Tests for equality of this dimension object's vector and that of
     * the dimension object passed in.  If the dimension vector for one of
     * the objects is null, the dimension vector for the other object must
     * also be null for the two to be equal.  (I know - duh.  still)
     *
     * @param dim2 the dimension object whose vector is to be compared to this one
     * @return true if the two vectors are equal; false otherwise.
     * @throws an exception if dim2 is not a Dimension object
     */
    equals(a) {
      if (!a instanceof _)
        throw new Error(`Dimension.equals called with an invalid parameter - ${typeof a} instead of a Dimension object`);
      let r = !0, e = a.dimVec_;
      if (this.dimVec_ && e)
        for (let u = 0; r && u < f.Ucum.dimLen_; u++) r = this.dimVec_[u] === e[u];
      else
        r = this.dimVec_ === null && e === null;
      return r;
    }
    /**
     * Assigns the contents of the vector belonging to the dimension object
     * passed in to this dimension's vector.  If this dimension vector is null
     * and the other is not, this one will get the contents of the other.  If
     * this dimension vector is not null but the one passed in is null, this
     * one will be set to null.
     *
     * @param dim2 the dimension object with the vector whose contents are
     *  to be assigned to this dimension's vector
     * @return this object (not sure why)
     * @throws an exception if dim2 is not a Dimension object
     */
    assignDim(a) {
      if (!a instanceof _)
        throw new Error(`Dimension.assignDim called with an invalid parameter - ${typeof a} instead of a Dimension object`);
      if (a.dimVec_ === null) this.dimVec_ = null;
      else {
        this.dimVec_ === null && (this.dimVec_ = []);
        for (let r = 0; r < f.Ucum.dimLen_; r++) this.dimVec_[r] = a.dimVec_[r];
      }
      return this;
    }
    /**
     * Sets all elements of this dimension object's vector to zero.
     * If this object's vector is null, it is created as a zero-filled vector.
     *
     * @return this object (not sure why)
     */
    assignZero() {
      (this.dimVec_ === null || this.dimVec_ === void 0) && (this.dimVec_ = []);
      for (let a = 0; a < f.Ucum.dimLen_; a++)
        this.dimVec_.push(0);
      return this;
    }
    /**
     * Tests for a dimension vector set to all zeroes.
     *
     * @return true if exponents (elements) of this dimension's vector are all
     * zero; false otherwise (including if the current vector is null).
     *
     */
    isZero() {
      let a = this.dimVec_ !== null;
      if (this.dimVec_)
        for (let r = 0; a && r < f.Ucum.dimLen_; r++) a = this.dimVec_[r] === 0;
      return a;
    }
    /**
     * Tests for a Dimension object with no dimension vector (dimVec_ is null).
     *
     * @return true the dimension vector is null; false if it is not
     *
     */
    isNull() {
      return this.dimVec_ === null;
    }
    /**
     * Creates and returns a clone of this Dimension object
     *
     * @return the clone
     */
    clone() {
      let a = new _();
      return a.assignDim(this), a;
    }
  }
  return qe.Dimension = _, qe;
}
var Xl;
function Xs() {
  if (Xl) return Pe;
  Xl = 1, Object.defineProperty(Pe, "__esModule", {
    value: !0
  }), Pe.Unit = void 0;
  var f = a(zi()), g = p(An());
  function _() {
    if (typeof WeakMap != "function") return null;
    var n = /* @__PURE__ */ new WeakMap();
    return _ = function() {
      return n;
    }, n;
  }
  function p(n) {
    if (n && n.__esModule)
      return n;
    if (n === null || typeof n != "object" && typeof n != "function")
      return { default: n };
    var l = _();
    if (l && l.has(n))
      return l.get(n);
    var t = {}, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var d in n)
      if (Object.prototype.hasOwnProperty.call(n, d)) {
        var o = m ? Object.getOwnPropertyDescriptor(n, d) : null;
        o && (o.get || o.set) ? Object.defineProperty(t, d, o) : t[d] = n[d];
      }
    return t.default = n, l && l.set(n, t), t;
  }
  function a(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var r = Se().Ucum, e = Ki().Dimension, u, s = Qs();
  class i {
    /**
     * Constructor.
     *
     * @param attrs an optional parameter that may be:
     *  a string, which is parsed by the unit parser, which creates
     *  the unit from the parsed string; or
     *  a hash containing all or some values for the attributes of
     *  the unit, where the keys are the attribute names, without a
     *  trailing underscore, e.g., name instead of name_; or
     *  null, in which case an empty hash is created and used to
     *  set the values forthe attributes.
     *  If a hash (empty or not) is used, attributes for which no value
     *  is specified are assigned a default value.
     *
     */
    constructor(l = {}) {
      this.isBase_ = l.isBase_ || !1, this.name_ = l.name_ || "", this.csCode_ = l.csCode_ || "", this.ciCode_ = l.ciCode_ || "", this.property_ = l.property_ || "", this.magnitude_ = l.magnitude_ || 1, l.dim_ === void 0 || l.dim_ === null ? this.dim_ = new e() : l.dim_.dimVec_ !== void 0 ? this.dim_ = new e(l.dim_.dimVec_) : l.dim_ instanceof e ? this.dim_ = l.dim_ : l.dim_ instanceof Array || s(l.dim_) ? this.dim_ = new e(l.dim_) : this.dim_ = new e(), this.printSymbol_ = l.printSymbol_ || null, this.class_ = l.class_ || null, this.isMetric_ = l.isMetric_ || !1, this.variable_ = l.variable_ || null, this.cnv_ = l.cnv_ || null, this.cnvPfx_ = l.cnvPfx_ || 1, this.isSpecial_ = l.isSpecial_ || !1, this.isArbitrary_ = l.isArbitrary_ || !1, this.moleExp_ = l.moleExp_ || 0, this.synonyms_ = l.synonyms_ || null, this.source_ = l.source_ || null, this.loincProperty_ = l.loincProperty_ || null, this.category_ = l.category_ || null, this.guidance_ = l.guidance_ || null, this.csUnitString_ = l.csUnitString_ || null, this.ciUnitString_ = l.ciUnitString_ || null, this.baseFactorStr_ = l.baseFactorStr_ || null, this.baseFactor_ = l.baseFactor_ || null, this.defError_ = l.defError_ || !1;
    }
    // end constructor
    /**
     * Assign the unity (= dimensionless unit 1) to this unit.
     *
     * @return this unit
     */
    assignUnity() {
      return this.name_ = "", this.magnitude_ = 1, this.dim_ || (this.dim_ = new e()), this.dim_.assignZero(), this.cnv_ = null, this.cnvPfx_ = 1, this;
    }
    // end assignUnity
    /**
     * This assigns one or more values, as provided in the hash passed in,
     * to this unit.
     *
     * @param vals hash of values to be assigned to the attributes
     *        specified by the key(s), which should be the attribute
     *        name without the trailing underscore, e.g., name instead
     *        of name_.
     * @return nothing
     */
    assignVals(l) {
      for (let t in l) {
        let m = !t.charAt(t.length - 1) === "_" ? t + "_" : t;
        if (this.hasOwnProperty(m)) this[m] = l[t];
        else throw new Error(`Parameter error; ${t} is not a property of a Unit`);
      }
    }
    // end assignVals
    /**
     * This creates a clone of this unit.
     *
     * @return the clone
     */
    clone() {
      let l = new i();
      return Object.getOwnPropertyNames(this).forEach((t) => {
        t === "dim_" ? this.dim_ ? l.dim_ = this.dim_.clone() : l.dim_ = null : l[t] = this[t];
      }), l;
    }
    // end clone
    /**
     * This assigns all properties of a unit passed to it to this unit.
     *
     * @param unit2 the unit whose properties are to be assigned to this one.
     * @return nothing; this unit is updated
     */
    assign(l) {
      Object.getOwnPropertyNames(l).forEach((t) => {
        t === "dim_" ? l.dim_ ? this.dim_ = l.dim_.clone() : this.dim_ = null : this[t] = l[t];
      });
    }
    // end assign
    /**
     * This determines whether or not object properties of the unit
     * passed in are equal to the corresponding properties in this unit.
     * The following properties are the only ones checked:
     *   magnitude_, dim_, cnv_ and cnvPfx_
     *
     * @param unit2 the unit whose properties are to be checked.
     * @return boolean indicating whether or not they match
     */
    equals(l) {
      return this.magnitude_ === l.magnitude_ && this.cnv_ === l.cnv_ && this.cnvPfx_ === l.cnvPfx_ && (this.dim_ === null && l.dim_ === null || this.dim_.equals(l.dim_));
    }
    // end equals
    /**
     * This method compares every attribute of two objects to determine
     * if they all match.
     *
     * @param unit2 the unit that is to be compared to this unit
     * @return boolean indicating whether or not every attribute matches
     */
    fullEquals(l) {
      let t = Object.keys(this).sort(), m = Object.keys(l).sort(), d = t.length, o = d === m.length;
      for (let h = 0; h < d && o; h++)
        t[h] === m[h] ? t[h] === "dim_" ? o = this.dim_.equals(l.dim_) : o = this[t[h]] === l[t[h]] : o = !1;
      return o;
    }
    // end of fullEquals
    /**
     * This returns the value of the property named by the parameter
     * passed in.
     *
     * @param propertyName name of the property to be returned, with
     *        or without the trailing underscore.
     * @return the requested property, if found for this unit
     * @throws an error if the property is not found for this unit
     */
    getProperty(l) {
      let t = l.charAt(l.length - 1) === "_" ? l : l + "_";
      return this[t];
    }
    // end getProperty
    /**
     * Takes a measurement consisting of a number of units and a unit and returns
     * the equivalent number of this unit.  So, 15 mL would translate
     * to 1 tablespoon if this object is a tablespoon.
     *
     * Note that the number returned may not be what is normally expected.
     * For example, converting 10 Celsius units to Fahrenheit would "normally"
     * return a value of 50.   But in this case you'll get back something like
     * 49.99999999999994.
     *
     * If either unit is an arbitrary unit an exception is raised.
     *
     * @param num the magnitude for the unit to be translated (e.g. 15 for 15 mL)
     * @param fromUnit the unit to be translated to one of this type (e.g. a mL unit)
     *
     * @return the number of converted units (e.g. 1 for 1 tablespoon)
     * @throws an error if the dimension of the fromUnit differs from this unit's
     * dimension
     */
    convertFrom(l, t) {
      let m = 0;
      if (this.isArbitrary_) throw new Error(`Attempt to convert to arbitrary unit "${this.csCode_}"`);
      if (t.isArbitrary_) throw new Error(`Attempt to convert arbitrary unit "${t.csCode_}"`);
      if (t.dim_ && this.dim_ && !t.dim_.equals(this.dim_))
        throw this.isMoleMassCommensurable(t) ? new Error(r.needMoleWeightMsg_) : new Error(`Sorry.  ${t.csCode_} cannot be converted to ${this.csCode_}.`);
      if (t.dim_ && (!this.dim_ || this.dim_.isNull()))
        throw new Error(`Sorry.  ${t.csCode_} cannot be converted to ${this.csCode_}.`);
      if (this.dim_ && (!t.dim_ || t.dim_.isNull()))
        throw new Error(`Sorry.  ${t.csCode_} cannot be converted to ${this.csCode_}.`);
      let d = t.cnv_, o = t.magnitude_, h;
      return d != null ? h = f.default.forName(d).cnvFrom(l * t.cnvPfx_) * o : h = l * o, this.cnv_ != null ? m = f.default.forName(this.cnv_).cnvTo(h / this.magnitude_) / this.cnvPfx_ : m = h / this.magnitude_, m;
    }
    // end convertFrom
    /**
     * Takes a number and a target unit and returns the number for a measurement
     * of this unit that corresponds to the number of the target unit passed in.
     * So, 1 tablespoon (where this unit represents a tablespoon) would translate
     * to 15 mL.
     *
     * See the note on convertFrom about return values.
     *
     * @param mag the magnitude for this unit (e.g. 1 for 1 tablespoon)
     * @param toUnit the unit to which this unit is to be translated
     *  (e.g. an mL unit)
     *
     * @return the converted number value (e.g. 15 mL)
     * @throws an error if the dimension of the toUnit differs from this unit's
     *   dimension
     */
    convertTo(l, t) {
      return t.convertFrom(l, this);
    }
    // end convertTo
    /**
     * Takes a given number of this unit returns the number of this unit
     * if it is converted into a coherent unit.  Does not change this unit.
     *
     * If this is a coherent unit already, just gives back the number
     * passed in.
     *
     * @param num the number for the coherent version of this unit
     * @return the number for the coherent version of this unit
     */
    convertCoherent(l) {
      return this.cnv_ !== null && (l = this.cnv_.f_from(l / this.cnvPfx_) * this.magnitude_), l;
    }
    // end convertCoherent
    /**
     * Mutates this unit into a coherent unit and converts a given number of
     * units to the appropriate value for this unit as a coherent unit
     *
     * @param num the number for this unit before conversion
     * @return the number of this unit after conversion
     * @throws an error if the dimensions differ
     */
    mutateCoherent(l) {
      l = this.convertCoherent(l), this.magnitude_ = 1, this.cnv_ = null, this.cnvPfx_ = 1, this.name_ = "";
      for (let t = 0, m = e.getMax(); t < m; t++) {
        let d = this.dim_.getElementAt(t), h = this._getUnitTables().getUnitsByDimension(new e(t));
        if (h == null) throw new Error(`Can't find base unit for dimension ${t}`);
        this.name_ = h.name + d;
      }
      return l;
    }
    // end mutateCoherent
    /**
     * Calculates the number of units that would result from converting a unit
     * expressed in mass/grams to a unit expressed in moles.  The "this" unit is
     * the unit expressed in some form of mass (g, mg, mmg, kg, whatever) and the
     * target or "to" unit - the molUnit parameter - is a unit expressed in moles
     * - mol, umol, mmol, etc.  The unit expressions surrounding the moles and
     * mass must be convertible.  No validation of this requirement is performed.
     *
     * @param amt the quantity of this unit to be converted
     * @param molUnit the target/to unit for which the converted # is wanted
     * @param molecularWeight the molecular weight of the substance for which the
     *  conversion is being made
     * @return the equivalent amount in molUnit
     */
    convertMassToMol(l, t, m) {
      let d = this.magnitude_ * l / m, h = this._getUnitTables().getUnitByCode("mol").magnitude_, c = t.magnitude_ / h;
      return d / c;
    }
    /**
     * Calculates the number of units that would result from converting a unit
     * expressed in moles to a unit expressed in mass (grams).  The "this" unit
     * is the unit expressed in some form of moles, e.g., mol, umol, mmol, etc.,
     * and the target or "to" unit is a unit expressed in some form of mass, e.g.,
     * g, mg, mmg, kg, etc.  Any unit expressions surrounding the moles and mass
     * must be convertible. No validation of this requirement is performed.
     *
     * @param amt the quantity of this unit to be converted
     * @param massUnit the target/to unit for which the converted # is wanted
     * @param molecularWeight the molecular weight of the substance for which the
     *  conversion is being made
     * @return the equivalent amount in massUnit
     */
    convertMolToMass(l, t, m) {
      let o = this._getUnitTables().getUnitByCode("mol").magnitude_;
      return this.magnitude_ / o * l * m / t.magnitude_;
    }
    /**
     * Mutates this unit into a unit on a ratio scale and converts a specified
     * number of units to an appropriate value for this converted unit
     *
     * @param num the number of this unit before it's converted
     * @return the magnitude of this unit after it's converted
     * @throw an error if the dimensions differ
     */
    mutateRatio(l) {
      return this.cnv_ == null ? this.mutateCoherent(l) : l;
    }
    // end mutateRatio
    /**
     * Multiplies this unit with a scalar. Special meaning for
     * special units so that (0.1*B) is 1 dB.
     *
     * This function DOES NOT modify this unit.
     *
     * @param s the value by which this unit is to be multiplied
     * @return a copy this unit multiplied by s
     * */
    multiplyThis(l) {
      let t = this.clone();
      t.cnv_ != null ? t.cnvPfx_ *= l : t.magnitude_ *= l;
      let m = l.toString();
      return t.name_ = this._concatStrs(m, "*", this.name_, "[", "]"), t.csCode_ = this._concatStrs(m, ".", this.csCode_, "(", ")"), t.ciCode_ = this._concatStrs(m, ".", this.ciCode_, "(", ")"), t.printSymbol_ = this._concatStrs(m, ".", this.printSymbol_, "(", ")"), t;
    }
    // end multiplyThis
    /**
     * Multiplies this unit with another unit. If one of the
     * units is a non-ratio unit the other must be dimensionless or
     * else an exception is thrown.
     *
     * This function does NOT modify this unit
     * @param unit2 the unit to be multiplied with this one
     * @return this unit after it is multiplied
     * @throws an error if one of the units is not on a ratio-scale
     *         and the other is not dimensionless.
     */
    multiplyThese(l) {
      var t = this.clone();
      if (t.cnv_ != null)
        if (l.cnv_ == null && (!l.dim_ || l.dim_.isZero())) t.cnvPfx_ *= l.magnitude_;
        else throw new Error(`Attempt to multiply non-ratio unit ${t.name_} failed.`);
      else if (l.cnv_ != null)
        if (!t.dim_ || t.dim_.isZero())
          t.cnvPfx_ = l.cnvPfx_ * t.magnitude_, t.magnitude_ = l.magnitude_, t.cnv_ = l.cnv_;
        else throw new Error(`Attempt to multiply non-ratio unit ${l.name_}`);
      else
        t.magnitude_ *= l.magnitude_;
      return !t.dim_ || t.dim_ && !t.dim_.dimVec_ ? l.dim_ ? t.dim_ = l.dim_.clone() : t.dim_ = l.dim_ : l.dim_ && l.dim_ instanceof e && t.dim_.add(l.dim_), t.name_ = this._concatStrs(t.name_, "*", l.name_, "[", "]"), t.csCode_ = this._concatStrs(t.csCode_, ".", l.csCode_, "(", ")"), t.ciCode_ && l.ciCode_ ? t.ciCode_ = this._concatStrs(t.ciCode_, ".", l.ciCode_, "(", ")") : l.ciCode_ && (t.ciCode_ = l.ciCode_), t.resetFieldsForDerivedUnit(), t.printSymbol_ && l.printSymbol_ ? t.printSymbol_ = this._concatStrs(t.printSymbol_, ".", l.printSymbol_, "(", ")") : l.printSymbol_ && (t.printSymbol_ = l.printSymbol_), t.moleExp_ = t.moleExp_ + l.moleExp_, t.isArbitrary_ || (t.isArbitrary_ = l.isArbitrary_), t.isSpecial_ || (t.isSpecial_ = l.isSpecial_), t;
    }
    // end multiplyThese
    /**
     *  Clears fields like isBase_, synonyms_, etc. when a unit has been cloned
     *  from a known unit but it being used to construct a derived unit.
     */
    resetFieldsForDerivedUnit() {
      this.guidance_ = "", this.synonyms_ = null, this.isBase_ = !1;
    }
    /**
     * Divides this unit by another unit. If this unit is not on a ratio
     * scale an exception is raised. Mutating to a ratio scale unit
     * is not possible for a unit, only for a measurement.
     *
     * This unit is NOT modified by this function.
     * @param unit2 the unit by which to divide this one
     * @return this unit after it is divided by unit2
     * @throws an error if either of the units is not on a ratio scale.
     * */
    divide(l) {
      var t = this.clone();
      if (t.cnv_ != null) throw new Error(`Attempt to divide non-ratio unit ${t.name_}`);
      if (l.cnv_ != null) throw new Error(`Attempt to divide by non-ratio unit ${l.name_}`);
      return t.name_ && l.name_ ? t.name_ = this._concatStrs(t.name_, "/", l.name_, "[", "]") : l.name_ && (t.name_ = l.invertString(l.name_)), t.csCode_ = this._concatStrs(t.csCode_, "/", l.csCode_, "(", ")"), t.ciCode_ && l.ciCode_ ? t.ciCode_ = this._concatStrs(t.ciCode_, "/", l.ciCode_, "(", ")") : l.ciCode_ && (t.ciCode_ = l.invertString(l.ciCode_)), t.resetFieldsForDerivedUnit(), t.magnitude_ /= l.magnitude_, t.printSymbol_ && l.printSymbol_ ? t.printSymbol_ = this._concatStrs(t.printSymbol_, "/", l.printSymbol_, "(", ")") : l.printSymbol_ && (t.printSymbol_ = l.invertString(l.printSymbol_)), l.dim_ && (t.dim_ ? (t.dim_.isNull() && t.dim_.assignZero(), t.dim_ = t.dim_.sub(l.dim_)) : t.dim_ = l.dim_.clone().minus()), t.moleExp_ = t.moleExp_ - l.moleExp_, t.isArbitrary_ || (t.isArbitrary_ = l.isArbitrary_), t;
    }
    // end divide
    /**
     * Invert this unit with respect to multiplication. If this unit is not
     * on a ratio scale an exception is thrown. Mutating to a ratio scale unit
     * is not possible for a unit, only for a measurement (the magnitude and
     * dimension).
     *
     *  This unit is modified by this function.
     * @return this unit after being inverted
     * @throws and error if this unit is not on a ratio scale
     */
    invert() {
      if (this.cnv_ != null) throw new Error(`Attempt to invert a non-ratio unit - ${this.name_}`);
      return this.name_ = this.invertString(this.name_), this.magnitude_ = 1 / this.magnitude_, this.dim_.minus(), this;
    }
    // end invert
    /**
     * Inverts a string, where the string is assumed to be a code or a name
     * of a division operation where the string is the divisor and the dividend
     * is blank.
     *
     * @param the string to be inverted
     * @return the inverted string
     */
    invertString(l) {
      if (l.length > 0) {
        let t = l.replace("/", "!").replace(".", "/").replace("<!", "</").replace("!", ".");
        switch (t.charAt(0)) {
          case ".":
            l = t.substr(1);
            break;
          case "/":
            l = t;
            break;
          default:
            l = "/" + t;
        }
      }
      return l;
    }
    // end invertString
    /**
     * This function handles concatenation of two strings and an operator.
     * It's called to build unit data, e.g., unit name, unit code, etc., from
     * two different units, joined by the specified operator.
     *
     * @param str1 the first string to appear in the result
     * @param operator the operator ('*', '.' or '/') to appear between the strings
     * @param str2 the second string to appear in the result
     * @param startChar the starting character to be used, when needed, to
     *  enclose a string
     * @param endChar the ending character to be used, when needed, to enclose
     *  a string
     * @returns the built string
     */
    _concatStrs(l, t, m, d, o) {
      return this._buildOneString(l, d, o) + t + this._buildOneString(m, d, o);
    }
    /**
     * This function handles creation of one string to be included in a
     * concatenated string.   Basically it checks to see if the string
     * needs to be enclosed either in parentheses or square brackets.
     *
     * The string is enclosed if it is not a number, is not already enclosed in a pair of
     * parentheses or square brackets, and includes a period, and asterisk,
     * a slash or a blank space.
     *
     * @param str the string
     * @param startChar starting enclosing character
     * @param endChar ending enclosing character
     * @returns the string
     */
    _buildOneString(l, t, m) {
      let d = "";
      return g.isNumericString(l) || l.charAt(0) === "(" && l.endsWith(")") || l.charAt(0) === "[" && l.endsWith("]") ? d = l : /[./* ]/.test(l) ? d = t + l + m : d = l, d;
    }
    /**
     * Raises the unit to a power.  For example
     *  kg.m/s2 raised to the -2 power would be kg-2.m-2/s-4
     *
     * If this unit is not on a ratio scale an error is thrown. Mutating
     * to a ratio scale unit is not possible for a unit, only for a
     * measurement (magnitude and dimension).
     *
     * This is based on the pow method in Gunter Schadow's java version,
     * although it uses javascript capabilities to simplify the processing.
     *
     * This unit is modified by this function
     *
     * @param p the power to with this unit is to be raise
     * @return this unit after it is raised
     * @throws an error if this unit is not on a ratio scale.
     */
    power(l) {
      if (this.cnv_ != null) throw new Error(`Attempt to raise a non-ratio unit, ${this.name_}, to a power.`);
      let m = this.csCode_.match(/([./]|[^./]+)/g), d = m.length;
      for (let o = 0; o < d; o++) {
        let h = m[o];
        if (h !== "/" && h !== ".") {
          let c = parseInt(h);
          if (s(c)) m[o] = Math.pow(c, l).toString();
          else {
            let y = h.length;
            for (let T = y - 1; T >= 0; T--) {
              let N = parseInt(h[T]);
              if (!s(N)) {
                if ((h[T] === "-" || h[T] === "+") && T--, T < y - 1) {
                  let O = parseInt(h.substr(T));
                  O = Math.pow(O, l), m[o] = h.substr(0, T) + O.toString(), T = -1;
                } else
                  m[o] += l.toString(), T = -1;
                T = -1;
              }
            }
          }
        }
      }
      return this.csCode_ = m.join(""), this.magnitude_ = Math.pow(this.magnitude_, l), this.dim_ && this.dim_.mul(l), this;
    }
    // end power
    /*
     * This function tests this unit against the unit passed in to see if the
     * two are mole to mass commensurable.  It assumes that one of the units
     * is a mole-based unit and the other is a mass-based unit.  It also assumes
     * that the mole-based unit has a single mole unit in the numerator and that
     * the mass-based unit has a single mass unit in the numerator.  It does NOT
     * check to validate those assumptions.
     *
     * The check is made by setting the dimension vector element corresponding
     * to the base mass unit (gram) in the mole unit, and then comparing the
     * two dimension vectors.  If they match, the units are commensurable.
     * Otherwise they are not.
     *
     * @param unit2 the unit to be compared to this one
     * @returns boolean indicating commensurability
     */
    isMoleMassCommensurable(l) {
      let m = this._getUnitTables().getMassDimensionIndex(), d = !1;
      if (this.moleExp_ === 1 && l.moleExp_ === 0) {
        let o = this.dim_.clone(), h = o.getElementAt(m);
        o.setElementAt(m, h + this.moleExp_), d = o.equals(l.dim_);
      } else if (l.moleExp_ === 1 && this.moleExp_ === 0) {
        let o = l.dim_.clone(), h = o.getElementAt(m);
        o.setElementAt(m, h + l.moleExp_), d = o.equals(this.dim_);
      }
      return d;
    }
    /**
     * This returns the UnitTables singleton object.  Including the require
     * statement included here causes a circular dependency condition that
     * resulted in the UnitTables object not being defined for the Unit object.
     * sigh.  Thanks, Paul, for figuring this out.
     *
     * @private
     */
    _getUnitTables() {
      return u || (u = Oe().UnitTables), u.getInstance();
    }
  }
  return Pe.Unit = i, Pe;
}
var Be = {}, es;
function ji() {
  if (es) return Be;
  es = 1, Object.defineProperty(Be, "__esModule", {
    value: !0
  }), Be.packArray = e, Be.unpackArray = u;
  const f = Array.prototype.push;
  function g(s) {
    return Object.prototype.toString.call(s) === "[object Object]";
  }
  function _(s) {
    return Object.keys(s).reduce((i, n) => (g(s[n]) ? f.apply(i, _(s[n]).map((l) => [n, ...[].concat(l)])) : i.push(n), i), []);
  }
  function p(s) {
    return s.map((i) => Array.isArray(i) ? i : [i]);
  }
  function a(s, i) {
    if (s.join() !== p(_(i)).join())
      throw new Error("Object of unusual structure");
    return s.map((n) => {
      let l = i;
      return n.forEach((t) => {
        if (l = l[t], l === void 0)
          throw new Error("Object of unusual structure");
      }), l;
    });
  }
  function r(s, i) {
    let n = {};
    return s.forEach((l, t) => {
      let m = n;
      for (let d = 0; d < l.length - 1; d++)
        m = m[l[d]] = m[l[d]] || {};
      m[l[l.length - 1]] = i[t];
    }), n;
  }
  function e(s) {
    if (s && s.length) {
      const i = _(s[0]), n = p(i);
      if (i.length)
        return {
          config: i,
          data: s.map(a.bind(null, n))
        };
    }
    return {
      config: [],
      data: s
    };
  }
  function u(s) {
    const i = s && s.config;
    if (i)
      if (i.length && s.data) {
        const n = p(i);
        return s.data.map(r.bind(null, n));
      } else
        return s.data;
    return s;
  }
  return Be;
}
const Wi = "The following data (prefixes and units) was generated by the UCUM LHC code from the UCUM data and selected LOINC combinations of UCUM units.  The license for the UCUM LHC code (demo and library code as well as the combined units) is located at https://github.com/lhncbc/ucum-lhc/blob/LICENSE.md.", Ji = { config: ["code_", "ciCode_", "name_", "printSymbol_", "value_", "exp_"], data: [["E", "EX", "exa", "E", 1e18, "18"], ["G", "GA", "giga", "G", 1e9, "9"], ["Gi", "GIB", "gibi", "Gi", 1073741824, null], ["Ki", "KIB", "kibi", "Ki", 1024, null], ["M", "MA", "mega", "M", 1e6, "6"], ["Mi", "MIB", "mebi", "Mi", 1048576, null], ["P", "PT", "peta", "P", 1e15, "15"], ["T", "TR", "tera", "T", 1e12, "12"], ["Ti", "TIB", "tebi", "Ti", 1099511627776, null], ["Y", "YA", "yotta", "Y", 1e24, "24"], ["Z", "ZA", "zetta", "Z", 1e21, "21"], ["a", "A", "atto", "a", 1e-18, "-18"], ["c", "C", "centi", "c", 0.01, "-2"], ["d", "D", "deci", "d", 0.1, "-1"], ["da", "DA", "deka", "da", 10, "1"], ["f", "F", "femto", "f", 1e-15, "-15"], ["h", "H", "hecto", "h", 100, "2"], ["k", "K", "kilo", "k", 1e3, "3"], ["m", "M", "milli", "m", 1e-3, "-3"], ["n", "N", "nano", "n", 1e-9, "-9"], ["p", "P", "pico", "p", 1e-12, "-12"], ["u", "U", "micro", "μ", 1e-6, "-6"], ["y", "YO", "yocto", "y", 1e-24, "-24"], ["z", "ZO", "zepto", "z", 1e-21, "-21"]] }, Yi = JSON.parse(`{"config":["isBase_","name_","csCode_","ciCode_","property_","magnitude_",["dim_","dimVec_"],"printSymbol_","class_","isMetric_","variable_","cnv_","cnvPfx_","isSpecial_","isArbitrary_","moleExp_","synonyms_","source_","loincProperty_","category_","guidance_","csUnitString_","ciUnitString_","baseFactorStr_","baseFactor_","defError_"],"data":[[true,"meter","m","M","length",1,[1,0,0,0,0,0,0],"m",null,false,"L",null,1,false,false,0,"meters; metres; distance","UCUM","Len","Clinical","unit of length = 1.09361 yards",null,null,null,null,false],[true,"second - time","s","S","time",1,[0,1,0,0,0,0,0],"s",null,false,"T",null,1,false,false,0,"seconds","UCUM","Time","Clinical","",null,null,null,null,false],[true,"gram","g","G","mass",1,[0,0,1,0,0,0,0],"g",null,false,"M",null,1,false,false,0,"grams; gm","UCUM","Mass","Clinical","",null,null,null,null,false],[true,"radian","rad","RAD","plane angle",1,[0,0,0,1,0,0,0],"rad",null,false,"A",null,1,false,false,0,"radians","UCUM","Angle","Clinical","unit of angular measure where 1 radian = 1/2π turn =  57.296 degrees. ",null,null,null,null,false],[true,"degree Kelvin","K","K","temperature",1,[0,0,0,0,1,0,0],"K",null,false,"C",null,1,false,false,0,"Kelvin; degrees","UCUM","Temp","Clinical","absolute, thermodynamic temperature scale ",null,null,null,null,false],[true,"coulomb","C","C","electric charge",1,[0,0,0,0,0,1,0],"C",null,false,"Q",null,1,false,false,0,"coulombs","UCUM","","Clinical","defined as amount of 1 electron charge = 6.2415093×10^18 e, and equivalent to 1 Ampere-second",null,null,null,null,false],[true,"candela","cd","CD","luminous intensity",1,[0,0,0,0,0,0,1],"cd",null,false,"F",null,1,false,false,0,"candelas","UCUM","","Clinical","SI base unit of luminous intensity",null,null,null,null,false],[false,"the number ten for arbitrary powers","10*","10*","number",10,[0,0,0,0,0,0,0],"10","dimless",false,null,null,1,false,false,0,"10^; 10 to the arbitrary powers","UCUM","Num","Clinical","10* by itself is the same as 10, but users can add digits after the *. For example, 10*3 = 1000.","1","1","10",10,false],[false,"the number ten for arbitrary powers","10^","10^","number",10,[0,0,0,0,0,0,0],"10","dimless",false,null,null,1,false,false,0,"10*; 10 to the arbitrary power","UCUM","Num","Clinical","10* by itself is the same as 10, but users can add digits after the *. For example, 10*3 = 1000.","1","1","10",10,false],[false,"the number pi","[pi]","[PI]","number",3.141592653589793,[0,0,0,0,0,0,0],"π","dimless",false,null,null,1,false,false,0,"π","UCUM","","Constant","a mathematical constant; the ratio of a circle's circumference to its diameter ≈ 3.14159","1","1","3.1415926535897932384626433832795028841971693993751058209749445923",3.141592653589793,false],[false,"","%","%","fraction",0.01,[0,0,0,0,0,0,0],"%","dimless",false,null,null,1,false,false,0,"percents","UCUM","FR; NFR; MFR; CFR; SFR Rto; etc. ","Clinical","","10*-2","10*-2","1",1,false],[false,"parts per thousand","[ppth]","[PPTH]","fraction",0.001,[0,0,0,0,0,0,0],"ppth","dimless",false,null,null,1,false,false,0,"ppth; 10^-3","UCUM","MCnc; MCnt","Clinical","[ppth] is often used in solution concentrations as 1 g/L or 1 g/kg.\\n\\nCan be ambigous and would be better if the metric units was used directly. ","10*-3","10*-3","1",1,false],[false,"parts per million","[ppm]","[PPM]","fraction",0.000001,[0,0,0,0,0,0,0],"ppm","dimless",false,null,null,1,false,false,0,"ppm; 10^-6","UCUM","MCnt; MCnc; SFr","Clinical","[ppm] is often used in solution concentrations as 1 mg/L  or 1 mg/kg. Also used to express mole fractions as 1 mmol/mol.\\n\\n[ppm] is also used in nuclear magnetic resonance (NMR) to represent chemical shift - the difference of a measured frequency in parts per million from the reference frequency.\\n\\nCan be ambigous and would be better if the metric units was used directly. ","10*-6","10*-6","1",1,false],[false,"parts per billion","[ppb]","[PPB]","fraction",1e-9,[0,0,0,0,0,0,0],"ppb","dimless",false,null,null,1,false,false,0,"ppb; 10^-9","UCUM","MCnt; MCnc; SFr","Clinical","[ppb] is often used in solution concentrations as 1 ug/L  or 1 ug/kg. Also used to express mole fractions as 1 umol/mol.\\n\\nCan be ambigous and would be better if the metric units was used directly. ","10*-9","10*-9","1",1,false],[false,"parts per trillion","[pptr]","[PPTR]","fraction",1e-12,[0,0,0,0,0,0,0],"pptr","dimless",false,null,null,1,false,false,0,"pptr; 10^-12","UCUM","MCnt; MCnc; SFr","Clinical","[pptr] is often used in solution concentrations as 1 ng/L or 1 ng/kg. Also used to express mole fractions as 1 nmol/mol.\\n\\nCan be ambigous and would be better if the metric units was used directly. ","10*-12","10*-12","1",1,false],[false,"mole","mol","MOL","amount of substance",6.0221367e+23,[0,0,0,0,0,0,0],"mol","si",true,null,null,1,false,false,1,"moles","UCUM","Sub","Clinical","Measure the number of molecules ","10*23","10*23","6.0221367",6.0221367,false],[false,"steradian - solid angle","sr","SR","solid angle",1,[0,0,0,2,0,0,0],"sr","si",true,null,null,1,false,false,0,"square radian; rad2; rad^2","UCUM","Angle","Clinical","unit of solid angle in three-dimensional geometry analagous to radian; used in photometry which measures the perceived brightness of object by human eye (e.g. radiant intensity = watt/steradian)","rad2","RAD2","1",1,false],[false,"hertz","Hz","HZ","frequency",1,[0,-1,0,0,0,0,0],"Hz","si",true,null,null,1,false,false,0,"Herz; frequency; frequencies","UCUM","Freq; Num","Clinical","equal to one cycle per second","s-1","S-1","1",1,false],[false,"newton","N","N","force",1000,[1,-2,1,0,0,0,0],"N","si",true,null,null,1,false,false,0,"Newtons","UCUM","Force","Clinical","unit of force with base units kg.m/s2","kg.m/s2","KG.M/S2","1",1,false],[false,"pascal","Pa","PAL","pressure",1000,[-1,-2,1,0,0,0,0],"Pa","si",true,null,null,1,false,false,0,"pascals","UCUM","Pres","Clinical","standard unit of pressure equal to 1 newton per square meter (N/m2)","N/m2","N/M2","1",1,false],[false,"joule","J","J","energy",1000,[2,-2,1,0,0,0,0],"J","si",true,null,null,1,false,false,0,"joules","UCUM","Enrg","Clinical","unit of energy defined as the work required to move an object 1 m with a force of 1 N (N.m) or an electric charge of 1 C through 1 V (C.V), or to produce 1 W for 1 s (W.s) ","N.m","N.M","1",1,false],[false,"watt","W","W","power",1000,[2,-3,1,0,0,0,0],"W","si",true,null,null,1,false,false,0,"watts","UCUM","EngRat","Clinical","unit of power equal to 1 Joule per second (J/s) =  kg⋅m2⋅s−3","J/s","J/S","1",1,false],[false,"Ampere","A","A","electric current",1,[0,-1,0,0,0,1,0],"A","si",true,null,null,1,false,false,0,"Amperes","UCUM","ElpotRat","Clinical","unit of electric current equal to flow rate of electrons equal to 6.2415×10^18 elementary charges moving past a boundary in one second or 1 Coulomb/second","C/s","C/S","1",1,false],[false,"volt","V","V","electric potential",1000,[2,-2,1,0,0,-1,0],"V","si",true,null,null,1,false,false,0,"volts","UCUM","Elpot","Clinical","unit of electric potential (voltage) = 1 Joule per Coulomb (J/C)","J/C","J/C","1",1,false],[false,"farad","F","F","electric capacitance",0.001,[-2,2,-1,0,0,2,0],"F","si",true,null,null,1,false,false,0,"farads; electric capacitance","UCUM","","Clinical","CGS unit of electric capacitance with base units C/V (Coulomb per Volt)","C/V","C/V","1",1,false],[false,"ohm","Ohm","OHM","electric resistance",1000,[2,-1,1,0,0,-2,0],"Ω","si",true,null,null,1,false,false,0,"Ω; resistance; ohms","UCUM","","Clinical","unit of electrical resistance with units of Volt per Ampere","V/A","V/A","1",1,false],[false,"siemens","S","SIE","electric conductance",0.001,[-2,1,-1,0,0,2,0],"S","si",true,null,null,1,false,false,0,"Reciprocal ohm; mho; Ω−1; conductance","UCUM","","Clinical","unit of electric conductance (the inverse of electrical resistance) equal to ohm^-1","Ohm-1","OHM-1","1",1,false],[false,"weber","Wb","WB","magnetic flux",1000,[2,-1,1,0,0,-1,0],"Wb","si",true,null,null,1,false,false,0,"magnetic flux; webers","UCUM","","Clinical","unit of magnetic flux equal to Volt second","V.s","V.S","1",1,false],[false,"degree Celsius","Cel","CEL","temperature",1,[0,0,0,0,1,0,0],"°C","si",true,null,"Cel",1,true,false,0,"°C; degrees","UCUM","Temp","Clinical","","K",null,null,1,false],[false,"tesla","T","T","magnetic flux density",1000,[0,-1,1,0,0,-1,0],"T","si",true,null,null,1,false,false,0,"Teslas; magnetic field","UCUM","","Clinical","SI unit of magnetic field strength for magnetic field B equal to 1 Weber/square meter =  1 kg/(s2*A)","Wb/m2","WB/M2","1",1,false],[false,"henry","H","H","inductance",1000,[2,0,1,0,0,-2,0],"H","si",true,null,null,1,false,false,0,"henries; inductance","UCUM","","Clinical","unit of electrical inductance; usually expressed in millihenrys (mH) or microhenrys (uH).","Wb/A","WB/A","1",1,false],[false,"lumen","lm","LM","luminous flux",1,[0,0,0,2,0,0,1],"lm","si",true,null,null,1,false,false,0,"luminous flux; lumens","UCUM","","Clinical","unit of luminous flux defined as 1 lm = 1 cd⋅sr (candela times sphere)","cd.sr","CD.SR","1",1,false],[false,"lux","lx","LX","illuminance",1,[-2,0,0,2,0,0,1],"lx","si",true,null,null,1,false,false,0,"illuminance; luxes","UCUM","","Clinical","unit of illuminance equal to one lumen per square meter. ","lm/m2","LM/M2","1",1,false],[false,"becquerel","Bq","BQ","radioactivity",1,[0,-1,0,0,0,0,0],"Bq","si",true,null,null,1,false,false,0,"activity; radiation; becquerels","UCUM","","Clinical","measure of the atomic radiation rate with units s^-1","s-1","S-1","1",1,false],[false,"gray","Gy","GY","energy dose",1,[2,-2,0,0,0,0,0],"Gy","si",true,null,null,1,false,false,0,"absorbed doses; ionizing radiation doses; kerma; grays","UCUM","EngCnt","Clinical","unit of ionizing radiation dose with base units of 1 joule of radiation energy per kilogram of matter","J/kg","J/KG","1",1,false],[false,"sievert","Sv","SV","dose equivalent",1,[2,-2,0,0,0,0,0],"Sv","si",true,null,null,1,false,false,0,"sieverts; radiation dose quantities; equivalent doses; effective dose; operational dose; committed dose","UCUM","","Clinical","SI unit for radiation dose equivalent equal to 1 Joule/kilogram.","J/kg","J/KG","1",1,false],[false,"degree - plane angle","deg","DEG","plane angle",0.017453292519943295,[0,0,0,1,0,0,0],"°","iso1000",false,null,null,1,false,false,0,"°; degree of arc; arc degree; arcdegree; angle","UCUM","Angle","Clinical","one degree is equivalent to π/180 radians.","[pi].rad/360","[PI].RAD/360","2",2,false],[false,"gon","gon","GON","plane angle",0.015707963267948967,[0,0,0,1,0,0,0],"□<sup>g</sup>","iso1000",false,null,null,1,false,false,0,"gon (grade); gons","UCUM","Angle","Nonclinical","unit of plane angle measurement equal to 1/400 circle","deg","DEG","0.9",0.9,false],[false,"arc minute","'","'","plane angle",0.0002908882086657216,[0,0,0,1,0,0,0],"'","iso1000",false,null,null,1,false,false,0,"arcminutes; arcmin; arc minutes; arc mins","UCUM","Angle","Clinical","equal to 1/60 degree; used in optometry and opthamology (e.g. visual acuity tests)","deg/60","DEG/60","1",1,false],[false,"arc second","''","''","plane angle",0.00000484813681109536,[0,0,0,1,0,0,0],"''","iso1000",false,null,null,1,false,false,0,"arcseconds; arcsecs","UCUM","Angle","Clinical","equal to 1/60 arcminute = 1/3600 degree; used in optometry and opthamology (e.g. visual acuity tests)","'/60","'/60","1",1,false],[false,"Liters","l","L","volume",0.001,[3,0,0,0,0,0,0],"l","iso1000",true,null,null,1,false,false,0,"cubic decimeters; decimeters cubed; decimetres; dm3; dm^3; litres; liters, LT ","UCUM","Vol","Clinical","Because lower case \\"l\\" can be read as the number \\"1\\", though this is a valid UCUM units. UCUM strongly reccomends using  \\"L\\"","dm3","DM3","1",1,false],[false,"Liters","L","L","volume",0.001,[3,0,0,0,0,0,0],"L","iso1000",true,null,null,1,false,false,0,"cubic decimeters; decimeters cubed; decimetres; dm3; dm^3; litres; liters, LT ","UCUM","Vol","Clinical","Because lower case \\"l\\" can be read as the number \\"1\\", though this is a valid UCUM units. UCUM strongly reccomends using  \\"L\\"","l",null,"1",1,false],[false,"are","ar","AR","area",100,[2,0,0,0,0,0,0],"a","iso1000",true,null,null,1,false,false,0,"100 m2; 100 m^2; 100 square meter; meters squared; metres","UCUM","Area","Clinical","metric base unit for area defined as 100 m^2","m2","M2","100",100,false],[false,"minute","min","MIN","time",60,[0,1,0,0,0,0,0],"min","iso1000",false,null,null,1,false,false,0,"minutes","UCUM","Time","Clinical","","s","S","60",60,false],[false,"hour","h","HR","time",3600,[0,1,0,0,0,0,0],"h","iso1000",false,null,null,1,false,false,0,"hours; hrs; age","UCUM","Time","Clinical","","min","MIN","60",60,false],[false,"day","d","D","time",86400,[0,1,0,0,0,0,0],"d","iso1000",false,null,null,1,false,false,0,"days; age; dy; 24 hours; 24 hrs","UCUM","Time","Clinical","","h","HR","24",24,false],[false,"tropical year","a_t","ANN_T","time",31556925.216,[0,1,0,0,0,0,0],"a<sub>t</sub>","iso1000",false,null,null,1,false,false,0,"solar years; a tropical; years","UCUM","Time","Clinical","has an average of 365.242181 days but is constantly changing.","d","D","365.24219",365.24219,false],[false,"mean Julian year","a_j","ANN_J","time",31557600,[0,1,0,0,0,0,0],"a<sub>j</sub>","iso1000",false,null,null,1,false,false,0,"mean Julian yr; a julian; years","UCUM","Time","Clinical","has an average of 365.25 days, and in everyday use, has been replaced by the Gregorian year. However, this unit is used in astronomy to calculate light year. ","d","D","365.25",365.25,false],[false,"mean Gregorian year","a_g","ANN_G","time",31556952,[0,1,0,0,0,0,0],"a<sub>g</sub>","iso1000",false,null,null,1,false,false,0,"mean Gregorian yr; a gregorian; years","UCUM","Time","Clinical","has an average of 365.2425 days and is the most internationally used civil calendar.","d","D","365.2425",365.2425,false],[false,"year","a","ANN","time",31557600,[0,1,0,0,0,0,0],"a","iso1000",false,null,null,1,false,false,0,"years; a; yr, yrs; annum","UCUM","Time","Clinical","","a_j","ANN_J","1",1,false],[false,"week","wk","WK","time",604800,[0,1,0,0,0,0,0],"wk","iso1000",false,null,null,1,false,false,0,"weeks; wks","UCUM","Time","Clinical","","d","D","7",7,false],[false,"synodal month","mo_s","MO_S","time",2551442.976,[0,1,0,0,0,0,0],"mo<sub>s</sub>","iso1000",false,null,null,1,false,false,0,"Moon; synodic month; lunar month; mo-s; mo s; months; moons","UCUM","Time","Nonclinical","has an average of 29.53 days per month, unit used in astronomy","d","D","29.53059",29.53059,false],[false,"mean Julian month","mo_j","MO_J","time",2629800,[0,1,0,0,0,0,0],"mo<sub>j</sub>","iso1000",false,null,null,1,false,false,0,"mo-julian; mo Julian; months","UCUM","Time","Clinical","has an average of 30.435 days per month","a_j/12","ANN_J/12","1",1,false],[false,"mean Gregorian month","mo_g","MO_G","time",2629746,[0,1,0,0,0,0,0],"mo<sub>g</sub>","iso1000",false,null,null,1,false,false,0,"months; month-gregorian; mo-gregorian","UCUM","Time","Clinical","has an average 30.436875 days per month and is from the most internationally used civil calendar.","a_g/12","ANN_G/12","1",1,false],[false,"month","mo","MO","time",2629800,[0,1,0,0,0,0,0],"mo","iso1000",false,null,null,1,false,false,0,"months; duration","UCUM","Time","Clinical","based on Julian calendar which has an average of 30.435 days per month (this unit is used in astronomy but not in everyday life - see mo_g)","mo_j","MO_J","1",1,false],[false,"metric ton","t","TNE","mass",1000000,[0,0,1,0,0,0,0],"t","iso1000",true,null,null,1,false,false,0,"tonnes; megagrams; tons","UCUM","Mass","Nonclinical","equal to 1000 kg used in the US (recognized by NIST as metric ton), and internationally (recognized as tonne)","kg","KG","1e3",1000,false],[false,"bar","bar","BAR","pressure",100000000,[-1,-2,1,0,0,0,0],"bar","iso1000",true,null,null,1,false,false,0,"bars","UCUM","Pres","Nonclinical","unit of pressure equal to 10^5 Pascals, primarily used by meteorologists and in weather forecasting","Pa","PAL","1e5",100000,false],[false,"unified atomic mass unit","u","AMU","mass",1.6605402e-24,[0,0,1,0,0,0,0],"u","iso1000",true,null,null,1,false,false,0,"unified atomic mass units; amu; Dalton; Da","UCUM","Mass","Clinical","the mass of 1/12 of an unbound Carbon-12 atom nuclide equal to 1.6606x10^-27 kg ","g","G","1.6605402e-24",1.6605402e-24,false],[false,"astronomic unit","AU","ASU","length",149597870691,[1,0,0,0,0,0,0],"AU","iso1000",false,null,null,1,false,false,0,"AU; units","UCUM","Len","Clinical","unit of length used in astronomy for measuring distance in Solar system","Mm","MAM","149597.870691",149597.870691,false],[false,"parsec","pc","PRS","length",30856780000000000,[1,0,0,0,0,0,0],"pc","iso1000",true,null,null,1,false,false,0,"parsecs","UCUM","Len","Clinical","unit of length equal to 3.26 light years, and used to measure large distances to objects outside our Solar System","m","M","3.085678e16",30856780000000000,false],[false,"velocity of light in a vacuum","[c]","[C]","velocity",299792458,[1,-1,0,0,0,0,0],"<i>c</i>","const",true,null,null,1,false,false,0,"speed of light","UCUM","Vel","Constant","equal to 299792458 m/s (approximately 3 x 10^8 m/s)","m/s","M/S","299792458",299792458,false],[false,"Planck constant","[h]","[H]","action",6.6260755e-31,[2,-1,1,0,0,0,0],"<i>h</i>","const",true,null,null,1,false,false,0,"Planck's constant","UCUM","","Constant","constant = 6.62607004 × 10-34 m2.kg/s; defined as quantum of action","J.s","J.S","6.6260755e-34",6.6260755e-34,false],[false,"Boltzmann constant","[k]","[K]","(unclassified)",1.380658e-20,[2,-2,1,0,-1,0,0],"<i>k</i>","const",true,null,null,1,false,false,0,"k; kB","UCUM","","Constant","physical constant relating energy at the individual particle level with temperature = 1.38064852 ×10^−23 J/K","J/K","J/K","1.380658e-23",1.380658e-23,false],[false,"permittivity of vacuum - electric","[eps_0]","[EPS_0]","electric permittivity",8.854187817000001e-15,[-3,2,-1,0,0,2,0],"<i>ε<sub><r>0</r></sub></i>","const",true,null,null,1,false,false,0,"ε0; Electric Constant; vacuum permittivity; permittivity of free space ","UCUM","","Constant","approximately equal to 8.854 × 10^−12 F/m (farads per meter)","F/m","F/M","8.854187817e-12",8.854187817e-12,false],[false,"permeability of vacuum - magnetic","[mu_0]","[MU_0]","magnetic permeability",0.0012566370614359172,[1,0,1,0,0,-2,0],"<i>μ<sub><r>0</r></sub></i>","const",true,null,null,1,false,false,0,"μ0; vacuum permeability; permeability of free space; magnetic constant","UCUM","","Constant","equal to 4π×10^−7 N/A2 (Newtons per square ampere) ≈ 1.2566×10^−6 H/m (Henry per meter)","N/A2","4.[PI].10*-7.N/A2","1",0.0000012566370614359173,false],[false,"elementary charge","[e]","[E]","electric charge",1.60217733e-19,[0,0,0,0,0,1,0],"<i>e</i>","const",true,null,null,1,false,false,0,"e; q; electric charges","UCUM","","Constant","the magnitude of the electric charge carried by a single electron or proton ≈ 1.60217×10^-19 Coulombs","C","C","1.60217733e-19",1.60217733e-19,false],[false,"electronvolt","eV","EV","energy",1.60217733e-16,[2,-2,1,0,0,0,0],"eV","iso1000",true,null,null,1,false,false,0,"Electron Volts; electronvolts","UCUM","Eng","Clinical","unit of kinetic energy = 1 V * 1.602×10^−19 C = 1.6×10−19 Joules","[e].V","[E].V","1",1,false],[false,"electron mass","[m_e]","[M_E]","mass",9.1093897e-28,[0,0,1,0,0,0,0],"<i>m<sub><r>e</r></sub></i>","const",true,null,null,1,false,false,0,"electron rest mass; me","UCUM","Mass","Constant","approximately equal to 9.10938356 × 10-31 kg; defined as the mass of a stationary electron","g","g","9.1093897e-28",9.1093897e-28,false],[false,"proton mass","[m_p]","[M_P]","mass",1.6726231e-24,[0,0,1,0,0,0,0],"<i>m<sub><r>p</r></sub></i>","const",true,null,null,1,false,false,0,"mp; masses","UCUM","Mass","Constant","approximately equal to 1.672622×10−27 kg","g","g","1.6726231e-24",1.6726231e-24,false],[false,"Newtonian constant of gravitation","[G]","[GC]","(unclassified)",6.67259e-14,[3,-2,-1,0,0,0,0],"<i>G</i>","const",true,null,null,1,false,false,0,"G; gravitational constant; Newton's constant","UCUM","","Constant","gravitational constant = 6.674×10−11 N⋅m2/kg2","m3.kg-1.s-2","M3.KG-1.S-2","6.67259e-11",6.67259e-11,false],[false,"standard acceleration of free fall","[g]","[G]","acceleration",9.80665,[1,-2,0,0,0,0,0],"<i>g<sub>n</sub></i>","const",true,null,null,1,false,false,0,"standard gravity; g; ɡ0; ɡn","UCUM","Accel","Constant","defined by standard = 9.80665 m/s2","m/s2","M/S2","980665e-5",9.80665,false],[false,"Torr","Torr","Torr","pressure",133322,[-1,-2,1,0,0,0,0],"Torr","const",false,null,null,1,false,false,0,"torrs","UCUM","Pres","Clinical","1 torr = 1 mmHg; unit used to measure blood pressure","Pa","PAL","133.322",133.322,false],[false,"standard atmosphere","atm","ATM","pressure",101325000,[-1,-2,1,0,0,0,0],"atm","const",false,null,null,1,false,false,0,"reference pressure; atmos; std atmosphere","UCUM","Pres","Clinical","defined as being precisely equal to 101,325 Pa","Pa","PAL","101325",101325,false],[false,"light-year","[ly]","[LY]","length",9460730472580800,[1,0,0,0,0,0,0],"l.y.","const",true,null,null,1,false,false,0,"light years; ly","UCUM","Len","Constant","unit of astronomal distance = 5.88×10^12 mi","[c].a_j","[C].ANN_J","1",1,false],[false,"gram-force","gf","GF","force",9.80665,[1,-2,1,0,0,0,0],"gf","const",true,null,null,1,false,false,0,"Newtons; gram forces","UCUM","Force","Clinical","May be specific to unit related to cardiac output","g.[g]","G.[G]","1",1,false],[false,"Kayser","Ky","KY","lineic number",100,[-1,0,0,0,0,0,0],"K","cgs",true,null,null,1,false,false,0,"wavenumbers; kaysers","UCUM","InvLen","Clinical","unit of wavelength equal to cm^-1","cm-1","CM-1","1",1,false],[false,"Gal","Gal","GL","acceleration",0.01,[1,-2,0,0,0,0,0],"Gal","cgs",true,null,null,1,false,false,0,"galileos; Gals","UCUM","Accel","Clinical","unit of acceleration used in gravimetry; equivalent to cm/s2 ","cm/s2","CM/S2","1",1,false],[false,"dyne","dyn","DYN","force",0.01,[1,-2,1,0,0,0,0],"dyn","cgs",true,null,null,1,false,false,0,"dynes","UCUM","Force","Clinical","unit of force equal to 10^-5 Newtons","g.cm/s2","G.CM/S2","1",1,false],[false,"erg","erg","ERG","energy",0.0001,[2,-2,1,0,0,0,0],"erg","cgs",true,null,null,1,false,false,0,"10^-7 Joules, 10-7 Joules; 100 nJ; 100 nanoJoules; 1 dyne cm; 1 g.cm2/s2","UCUM","Eng","Clinical","unit of energy = 1 dyne centimeter = 10^-7 Joules","dyn.cm","DYN.CM","1",1,false],[false,"Poise","P","P","dynamic viscosity",100.00000000000001,[-1,-1,1,0,0,0,0],"P","cgs",true,null,null,1,false,false,0,"dynamic viscosity; poises","UCUM","Visc","Clinical","unit of dynamic viscosity where 1 Poise = 1/10 Pascal second","dyn.s/cm2","DYN.S/CM2","1",1,false],[false,"Biot","Bi","BI","electric current",10,[0,-1,0,0,0,1,0],"Bi","cgs",true,null,null,1,false,false,0,"Bi; abamperes; abA","UCUM","ElpotRat","Clinical","equal to 10 amperes","A","A","10",10,false],[false,"Stokes","St","ST","kinematic viscosity",0.00009999999999999999,[2,-1,0,0,0,0,0],"St","cgs",true,null,null,1,false,false,0,"kinematic viscosity","UCUM","Visc","Clinical","unit of kimematic viscosity with units cm2/s","cm2/s","CM2/S","1",1,false],[false,"Maxwell","Mx","MX","flux of magnetic induction",0.00001,[2,-1,1,0,0,-1,0],"Mx","cgs",true,null,null,1,false,false,0,"magnetix flux; Maxwells","UCUM","","Clinical","unit of magnetic flux","Wb","WB","1e-8",1e-8,false],[false,"Gauss","G","GS","magnetic flux density",0.1,[0,-1,1,0,0,-1,0],"Gs","cgs",true,null,null,1,false,false,0,"magnetic fields; magnetic flux density; induction; B","UCUM","magnetic","Clinical","CGS unit of magnetic flux density, known as magnetic field B; defined as one maxwell unit per square centimeter (see Oersted for CGS unit for H field)","T","T","1e-4",0.0001,false],[false,"Oersted","Oe","OE","magnetic field intensity",79.57747154594767,[-1,-1,0,0,0,1,0],"Oe","cgs",true,null,null,1,false,false,0,"H magnetic B field; Oersteds","UCUM","","Clinical","CGS unit of the auxiliary magnetic field H defined as 1 dyne per unit pole = 1000/4π amperes per meter (see Gauss for CGS unit for B field)","A/m","/[PI].A/M","250",79.57747154594767,false],[false,"Gilbert","Gb","GB","magnetic tension",0.7957747154594768,[0,-1,0,0,0,1,0],"Gb","cgs",true,null,null,1,false,false,0,"Gi; magnetomotive force; Gilberts","UCUM","","Clinical","unit of magnetomotive force (magnetic potential)","Oe.cm","OE.CM","1",1,false],[false,"stilb","sb","SB","lum. intensity density",10000,[-2,0,0,0,0,0,1],"sb","cgs",true,null,null,1,false,false,0,"stilbs","UCUM","","Obsolete","unit of luminance; equal to and replaced by unit candela per square centimeter (cd/cm2)","cd/cm2","CD/CM2","1",1,false],[false,"Lambert","Lmb","LMB","brightness",3183.098861837907,[-2,0,0,0,0,0,1],"L","cgs",true,null,null,1,false,false,0,"luminance; lamberts","UCUM","","Clinical","unit of luminance defined as 1 lambert = 1/ π candela per square meter","cd/cm2/[pi]","CD/CM2/[PI]","1",1,false],[false,"phot","ph","PHT","illuminance",0.0001,[-2,0,0,2,0,0,1],"ph","cgs",true,null,null,1,false,false,0,"phots","UCUM","","Clinical","CGS photometric unit of illuminance, or luminous flux through an area equal to 10000 lumens per square meter = 10000 lux","lx","LX","1e-4",0.0001,false],[false,"Curie","Ci","CI","radioactivity",37000000000,[0,-1,0,0,0,0,0],"Ci","cgs",true,null,null,1,false,false,0,"curies","UCUM","","Obsolete","unit for measuring atomic disintegration rate; replaced by the Bequerel (Bq) unit","Bq","BQ","37e9",37000000000,false],[false,"Roentgen","R","ROE","ion dose",2.58e-7,[0,0,-1,0,0,1,0],"R","cgs",true,null,null,1,false,false,0,"röntgen; Roentgens","UCUM","","Clinical","unit of exposure of X-rays and gamma rays in air; unit used primarily in the US but strongly discouraged by NIST","C/kg","C/KG","2.58e-4",0.000258,false],[false,"radiation absorbed dose","RAD","[RAD]","energy dose",0.01,[2,-2,0,0,0,0,0],"RAD","cgs",true,null,null,1,false,false,0,"doses","UCUM","","Clinical","unit of radiation absorbed dose used primarily in the US with base units 100 ergs per gram of material. Also see the SI unit Gray (Gy).","erg/g","ERG/G","100",100,false],[false,"radiation equivalent man","REM","[REM]","dose equivalent",0.01,[2,-2,0,0,0,0,0],"REM","cgs",true,null,null,1,false,false,0,"Roentgen Equivalent in Man; rems; dose equivalents","UCUM","","Clinical","unit of equivalent dose which measures the effect of radiation on humans equal to 0.01 sievert. Used primarily in the US. Also see SI unit Sievert (Sv)","RAD","[RAD]","1",1,false],[false,"inch","[in_i]","[IN_I]","length",0.025400000000000002,[1,0,0,0,0,0,0],"in","intcust",false,null,null,1,false,false,0,"inches; in; international inch; body height","UCUM","Len","Clinical","standard unit for inch in the US and internationally","cm","CM","254e-2",2.54,false],[false,"foot","[ft_i]","[FT_I]","length",0.3048,[1,0,0,0,0,0,0],"ft","intcust",false,null,null,1,false,false,0,"ft; fts; foot; international foot; feet; international feet; height","UCUM","Len","Clinical","unit used in the US and internationally","[in_i]","[IN_I]","12",12,false],[false,"yard","[yd_i]","[YD_I]","length",0.9144000000000001,[1,0,0,0,0,0,0],"yd","intcust",false,null,null,1,false,false,0,"international yards; yds; distance","UCUM","Len","Clinical","standard unit used in the US and internationally","[ft_i]","[FT_I]","3",3,false],[false,"mile","[mi_i]","[MI_I]","length",1609.344,[1,0,0,0,0,0,0],"mi","intcust",false,null,null,1,false,false,0,"international miles; mi I; statute mile","UCUM","Len","Clinical","standard unit used in the US and internationally","[ft_i]","[FT_I]","5280",5280,false],[false,"fathom","[fth_i]","[FTH_I]","depth of water",1.8288000000000002,[1,0,0,0,0,0,0],"fth","intcust",false,null,null,1,false,false,0,"international fathoms","UCUM","Len","Nonclinical","unit used in the US and internationally to measure depth of water; same length as the US fathom","[ft_i]","[FT_I]","6",6,false],[false,"nautical mile","[nmi_i]","[NMI_I]","length",1852,[1,0,0,0,0,0,0],"n.mi","intcust",false,null,null,1,false,false,0,"nautical mile; nautical miles; international nautical mile; international nautical miles; nm; n.m.; nmi","UCUM","Len","Nonclinical","standard unit used in the US and internationally","m","M","1852",1852,false],[false,"knot","[kn_i]","[KN_I]","velocity",0.5144444444444445,[1,-1,0,0,0,0,0],"knot","intcust",false,null,null,1,false,false,0,"kn; kt; international knots","UCUM","Vel","Nonclinical","defined as equal to one nautical mile (1.852 km) per hour","[nmi_i]/h","[NMI_I]/H","1",1,false],[false,"square inch","[sin_i]","[SIN_I]","area",0.0006451600000000001,[2,0,0,0,0,0,0],null,"intcust",false,null,null,1,false,false,0,"in2; in^2; inches squared; sq inch; inches squared; international","UCUM","Area","Clinical","standard unit used in the US and internationally","[in_i]2","[IN_I]2","1",1,false],[false,"square foot","[sft_i]","[SFT_I]","area",0.09290304,[2,0,0,0,0,0,0],null,"intcust",false,null,null,1,false,false,0,"ft2; ft^2; ft squared; sq ft; feet; international","UCUM","Area","Clinical","standard unit used in the US and internationally","[ft_i]2","[FT_I]2","1",1,false],[false,"square yard","[syd_i]","[SYD_I]","area",0.8361273600000002,[2,0,0,0,0,0,0],null,"intcust",false,null,null,1,false,false,0,"yd2; yd^2; sq. yds; yards squared; international","UCUM","Area","Clinical","standard unit used in the US and internationally","[yd_i]2","[YD_I]2","1",1,false],[false,"cubic inch","[cin_i]","[CIN_I]","volume",0.000016387064000000006,[3,0,0,0,0,0,0],null,"intcust",false,null,null,1,false,false,0,"in3; in^3; in*3; inches^3; inches*3; cu. in; cu in; cubic inches; inches cubed; cin","UCUM","Vol","Clinical","standard unit used in the US and internationally","[in_i]3","[IN_I]3","1",1,false],[false,"cubic foot","[cft_i]","[CFT_I]","volume",0.028316846592000004,[3,0,0,0,0,0,0],null,"intcust",false,null,null,1,false,false,0,"ft3; ft^3; ft*3; cu. ft; cubic feet; cubed; [ft_i]3; international","UCUM","Vol","Clinical","","[ft_i]3","[FT_I]3","1",1,false],[false,"cubic yard","[cyd_i]","[CYD_I]","volume",0.7645548579840002,[3,0,0,0,0,0,0],"cu.yd","intcust",false,null,null,1,false,false,0,"cubic yards; cubic yds; cu yards; CYs; yards^3; yd^3; yds^3; yd3; yds3","UCUM","Vol","Nonclinical","standard unit used in the US and internationally","[yd_i]3","[YD_I]3","1",1,false],[false,"board foot","[bf_i]","[BF_I]","volume",0.0023597372160000006,[3,0,0,0,0,0,0],null,"intcust",false,null,null,1,false,false,0,"BDFT; FBM; BF; board feet; international","UCUM","Vol","Nonclinical","unit of volume used to measure lumber","[in_i]3","[IN_I]3","144",144,false],[false,"cord","[cr_i]","[CR_I]","volume",3.6245563637760005,[3,0,0,0,0,0,0],null,"intcust",false,null,null,1,false,false,0,"crd I; international cords","UCUM","Vol","Nonclinical","unit of measure of dry volume used to measure firewood equal 128 ft3","[ft_i]3","[FT_I]3","128",128,false],[false,"mil","[mil_i]","[MIL_I]","length",0.000025400000000000004,[1,0,0,0,0,0,0],"mil","intcust",false,null,null,1,false,false,0,"thou, thousandth; mils; international","UCUM","Len","Clinical","equal to 0.001 international inch","[in_i]","[IN_I]","1e-3",0.001,false],[false,"circular mil","[cml_i]","[CML_I]","area",5.067074790974979e-10,[2,0,0,0,0,0,0],"circ.mil","intcust",false,null,null,1,false,false,0,"circular mils; cml I; international","UCUM","Area","Clinical","","[pi]/4.[mil_i]2","[PI]/4.[MIL_I]2","1",1,false],[false,"hand","[hd_i]","[HD_I]","height of horses",0.10160000000000001,[1,0,0,0,0,0,0],"hd","intcust",false,null,null,1,false,false,0,"hands; international","UCUM","Len","Nonclinical","used to measure horse height","[in_i]","[IN_I]","4",4,false],[false,"foot - US","[ft_us]","[FT_US]","length",0.3048006096012192,[1,0,0,0,0,0,0],"ft<sub>us</sub>","us-lengths",false,null,null,1,false,false,0,"US foot; foot US; us ft; ft us; height; visual distance; feet","UCUM","Len","Obsolete","Better to use [ft_i] which refers to the length used worldwide, including in the US;  [ft_us] may be confused with land survey units. ","m/3937","M/3937","1200",1200,false],[false,"yard - US","[yd_us]","[YD_US]","length",0.9144018288036575,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"US yards; us yds; distance","UCUM","Len; Nrat","Obsolete","Better to use [yd_i] which refers to the length used worldwide, including in the US; [yd_us] refers to unit used in land surveys in the US","[ft_us]","[FT_US]","3",3,false],[false,"inch - US","[in_us]","[IN_US]","length",0.0254000508001016,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"US inches; in us; us in; inch US","UCUM","Len","Obsolete","Better to use [in_i] which refers to the length used worldwide, including in the US","[ft_us]/12","[FT_US]/12","1",1,false],[false,"rod - US","[rd_us]","[RD_US]","length",5.029210058420117,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"US rod; US rods; rd US; US rd","UCUM","Len","Obsolete","","[ft_us]","[FT_US]","16.5",16.5,false],[false,"Gunter's chain - US","[ch_us]","[CH_US]","length",20.116840233680467,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"surveyor's chain; Surveyor's chain USA; Gunter’s measurement; surveyor’s measurement; Gunter's Chain USA","UCUM","Len","Obsolete","historical unit used for land survey used only in the US","[rd_us]","[RD_US]","4",4,false],[false,"link for Gunter's chain - US","[lk_us]","[LK_US]","length",0.20116840233680466,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"Links for Gunter's Chain USA","UCUM","Len","Obsolete","","[ch_us]/100","[CH_US]/100","1",1,false],[false,"Ramden's chain - US","[rch_us]","[RCH_US]","length",30.480060960121918,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"Ramsden's chain; engineer's chains","UCUM","Len","Obsolete","distance measuring device used for land survey","[ft_us]","[FT_US]","100",100,false],[false,"link for Ramden's chain - US","[rlk_us]","[RLK_US]","length",0.3048006096012192,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"links for Ramsden's chain","UCUM","Len","Obsolete","","[rch_us]/100","[RCH_US]/100","1",1,false],[false,"fathom - US","[fth_us]","[FTH_US]","length",1.828803657607315,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"US fathoms; fathom USA; fth us","UCUM","Len","Obsolete","same length as the international fathom - better to use international fathom ([fth_i])","[ft_us]","[FT_US]","6",6,false],[false,"furlong - US","[fur_us]","[FUR_US]","length",201.16840233680466,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"US furlongs; fur us","UCUM","Len","Nonclinical","distance unit in horse racing","[rd_us]","[RD_US]","40",40,false],[false,"mile - US","[mi_us]","[MI_US]","length",1609.3472186944373,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"U.S. Survey Miles; US statute miles; survey mi; US mi; distance","UCUM","Len","Nonclinical","Better to use [mi_i] which refers to the length used worldwide, including in the US","[fur_us]","[FUR_US]","8",8,false],[false,"acre - US","[acr_us]","[ACR_US]","area",4046.872609874252,[2,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"Acre USA Survey; Acre USA; survey acres","UCUM","Area","Nonclinical","an older unit based on pre 1959 US statute lengths that is still sometimes used in the US only for land survey purposes. ","[rd_us]2","[RD_US]2","160",160,false],[false,"square rod - US","[srd_us]","[SRD_US]","area",25.292953811714074,[2,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"rod2; rod^2; sq. rod; rods squared","UCUM","Area","Nonclinical","Used only in the US to measure land area, based on US statute land survey length units","[rd_us]2","[RD_US]2","1",1,false],[false,"square mile - US","[smi_us]","[SMI_US]","area",2589998.470319521,[2,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"mi2; mi^2; sq mi; miles squared","UCUM","Area","Nonclinical","historical unit used only in the US for land survey purposes (based on the US survey mile), not the internationally recognized [mi_i]","[mi_us]2","[MI_US]2","1",1,false],[false,"section","[sct]","[SCT]","area",2589998.470319521,[2,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"sct; sections","UCUM","Area","Nonclinical","tract of land approximately equal to 1 mile square containing 640 acres","[mi_us]2","[MI_US]2","1",1,false],[false,"township","[twp]","[TWP]","area",93239944.93150276,[2,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"twp; townships","UCUM","Area","Nonclinical","land measurement equal to 6 mile square","[sct]","[SCT]","36",36,false],[false,"mil - US","[mil_us]","[MIL_US]","length",0.0000254000508001016,[1,0,0,0,0,0,0],null,"us-lengths",false,null,null,1,false,false,0,"thou, thousandth; mils","UCUM","Len","Obsolete","better to use [mil_i] which is based on the internationally recognized inch","[in_us]","[IN_US]","1e-3",0.001,false],[false,"inch - British","[in_br]","[IN_BR]","length",0.025399980000000003,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"imperial inches; imp in; br in; british inches","UCUM","Len","Obsolete","","cm","CM","2.539998",2.539998,false],[false,"foot - British","[ft_br]","[FT_BR]","length",0.30479976000000003,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"British Foot; Imperial Foot; feet; imp fts; br fts","UCUM","Len","Obsolete","","[in_br]","[IN_BR]","12",12,false],[false,"rod - British","[rd_br]","[RD_BR]","length",5.02919604,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"British rods; br rd","UCUM","Len","Obsolete","","[ft_br]","[FT_BR]","16.5",16.5,false],[false,"Gunter's chain - British","[ch_br]","[CH_BR]","length",20.11678416,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"Gunter's Chain British; Gunters Chain British; Surveyor's Chain British","UCUM","Len","Obsolete","historical unit used for land survey used only in Great Britain","[rd_br]","[RD_BR]","4",4,false],[false,"link for Gunter's chain - British","[lk_br]","[LK_BR]","length",0.2011678416,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"Links for Gunter's Chain British","UCUM","Len","Obsolete","","[ch_br]/100","[CH_BR]/100","1",1,false],[false,"fathom - British","[fth_br]","[FTH_BR]","length",1.82879856,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"British fathoms; imperial fathoms; br fth; imp fth","UCUM","Len","Obsolete","","[ft_br]","[FT_BR]","6",6,false],[false,"pace - British","[pc_br]","[PC_BR]","length",0.7619994000000001,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"British paces; br pc","UCUM","Len","Nonclinical","traditional unit of length equal to 152.4 centimeters, or 1.52 meter. ","[ft_br]","[FT_BR]","2.5",2.5,false],[false,"yard - British","[yd_br]","[YD_BR]","length",0.91439928,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"British yards; Br yds; distance","UCUM","Len","Obsolete","","[ft_br]","[FT_BR]","3",3,false],[false,"mile - British","[mi_br]","[MI_BR]","length",1609.3427328000002,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"imperial miles; British miles; English statute miles; imp mi, br mi","UCUM","Len","Obsolete","","[ft_br]","[FT_BR]","5280",5280,false],[false,"nautical mile - British","[nmi_br]","[NMI_BR]","length",1853.1825408000002,[1,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"British nautical miles; Imperial nautical miles; Admiralty miles; n.m. br; imp nm","UCUM","Len","Obsolete","","[ft_br]","[FT_BR]","6080",6080,false],[false,"knot - British","[kn_br]","[KN_BR]","velocity",0.5147729280000001,[1,-1,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"British knots; kn br; kt","UCUM","Vel","Obsolete","based on obsolete British nautical mile ","[nmi_br]/h","[NMI_BR]/H","1",1,false],[false,"acre","[acr_br]","[ACR_BR]","area",4046.850049400269,[2,0,0,0,0,0,0],null,"brit-length",false,null,null,1,false,false,0,"Imperial acres; British; a; ac; ar; acr","UCUM","Area","Nonclinical","the standard unit for acre used in the US and internationally","[yd_br]2","[YD_BR]2","4840",4840,false],[false,"gallon - US","[gal_us]","[GAL_US]","fluid volume",0.0037854117840000014,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"US gallons; US liquid gallon; gal us; Queen Anne's wine gallon","UCUM","Vol","Nonclinical","only gallon unit used in the US; [gal_us] is only used in some other countries in South American and Africa to measure gasoline volume","[in_i]3","[IN_I]3","231",231,false],[false,"barrel - US","[bbl_us]","[BBL_US]","fluid volume",0.15898729492800007,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"bbl","UCUM","Vol","Nonclinical","[bbl_us] is the standard unit for oil barrel, which is a unit only used in the US to measure the volume oil. ","[gal_us]","[GAL_US]","42",42,false],[false,"quart - US","[qt_us]","[QT_US]","fluid volume",0.0009463529460000004,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"US quarts; us qts","UCUM","Vol","Clinical","Used only in the US","[gal_us]/4","[GAL_US]/4","1",1,false],[false,"pint - US","[pt_us]","[PT_US]","fluid volume",0.0004731764730000002,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"US pints; pint US; liquid pint; pt us; us pt","UCUM","Vol","Clinical","Used only in the US","[qt_us]/2","[QT_US]/2","1",1,false],[false,"gill - US","[gil_us]","[GIL_US]","fluid volume",0.00011829411825000005,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"US gills; gil us","UCUM","Vol","Nonclinical","only used in the context of alcohol volume in the US","[pt_us]/4","[PT_US]/4","1",1,false],[false,"fluid ounce - US","[foz_us]","[FOZ_US]","fluid volume",0.00002957352956250001,[3,0,0,0,0,0,0],"oz fl","us-volumes",false,null,null,1,false,false,0,"US fluid ounces; fl ozs; FO; fl. oz.; foz us","UCUM","Vol","Clinical","unit used only in the US","[gil_us]/4","[GIL_US]/4","1",1,false],[false,"fluid dram - US","[fdr_us]","[FDR_US]","fluid volume",0.0000036966911953125014,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"US fluid drams; fdr us","UCUM","Vol","Nonclinical","equal to 1/8 US fluid ounce = 3.69 mL; used informally to mean small amount of liquor, especially Scotch whiskey","[foz_us]/8","[FOZ_US]/8","1",1,false],[false,"minim - US","[min_us]","[MIN_US]","fluid volume",6.161151992187503e-8,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"min US; US min; ♏ US","UCUM","Vol","Obsolete","","[fdr_us]/60","[FDR_US]/60","1",1,false],[false,"cord - US","[crd_us]","[CRD_US]","fluid volume",3.6245563637760005,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"US cord; US cords; crd us; us crd","UCUM","Vol","Nonclinical","unit of measure of dry volume used to measure firewood equal 128 ft3 (the same as international cord [cr_i])","[ft_i]3","[FT_I]3","128",128,false],[false,"bushel - US","[bu_us]","[BU_US]","dry volume",0.035239070166880014,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"US bushels; US bsh; US bu","UCUM","Vol","Obsolete","Historical unit of dry volume that is rarely used today","[in_i]3","[IN_I]3","2150.42",2150.42,false],[false,"gallon - historical","[gal_wi]","[GAL_WI]","dry volume",0.004404883770860002,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"Corn Gallon British; Dry Gallon US; Gallons Historical; Grain Gallon British; Winchester Corn Gallon; historical winchester gallons; wi gal","UCUM","Vol","Obsolete","historical unit of dry volume no longer used","[bu_us]/8","[BU_US]/8","1",1,false],[false,"peck - US","[pk_us]","[PK_US]","dry volume",0.008809767541720004,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"US pecks; US pk","UCUM","Vol","Nonclinical","unit of dry volume rarely used today (can be used to measure volume of apples)","[bu_us]/4","[BU_US]/4","1",1,false],[false,"dry quart - US","[dqt_us]","[DQT_US]","dry volume",0.0011012209427150004,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"dry quarts; dry quart US; US dry quart; dry qt; us dry qt; dqt; dqt us","UCUM","Vol","Nonclinical","historical unit of dry volume only in the US, but is rarely used today","[pk_us]/8","[PK_US]/8","1",1,false],[false,"dry pint - US","[dpt_us]","[DPT_US]","dry volume",0.0005506104713575002,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"dry pints; dry pint US; US dry pint; dry pt; dpt; dpt us","UCUM","Vol","Nonclinical","historical unit of dry volume only in the US, but is rarely used today","[dqt_us]/2","[DQT_US]/2","1",1,false],[false,"tablespoon - US","[tbs_us]","[TBS_US]","volume",0.000014786764781250006,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"Tbs; tbsp; tbs us; US tablespoons","UCUM","Vol","Clinical","unit defined as 0.5 US fluid ounces or 3 teaspoons - used only in the US. See [tbs_m] for the unit used internationally and in the US for nutrional labelling. ","[foz_us]/2","[FOZ_US]/2","1",1,false],[false,"teaspoon - US","[tsp_us]","[TSP_US]","volume",0.000004928921593750002,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"tsp; t; US teaspoons","UCUM","Vol","Nonclinical","unit defined as 1/6 US fluid ounces - used only in the US. See [tsp_m] for the unit used internationally and in the US for nutrional labelling. ","[tbs_us]/3","[TBS_US]/3","1",1,false],[false,"cup - US customary","[cup_us]","[CUP_US]","volume",0.0002365882365000001,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"cup us; us cups","UCUM","Vol","Nonclinical","Unit defined as 1/2 US pint or 16 US tablespoons ≈ 236.59 mL, which is not the standard unit defined by the FDA of 240 mL - see [cup_m] (metric cup)","[tbs_us]","[TBS_US]","16",16,false],[false,"fluid ounce - metric","[foz_m]","[FOZ_M]","fluid volume",0.000029999999999999997,[3,0,0,0,0,0,0],"oz fl","us-volumes",false,null,null,1,false,false,0,"metric fluid ounces; fozs m; fl ozs m","UCUM","Vol","Clinical","unit used only in the US for nutritional labelling, as set by the FDA","mL","ML","30",30,false],[false,"cup - US legal","[cup_m]","[CUP_M]","volume",0.00023999999999999998,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"cup m; metric cups","UCUM","Vol","Clinical","standard unit equal to 240 mL used in the US for nutritional labelling, as defined by the FDA. Note that this is different from the US customary cup (236.59 mL) and the metric cup used in Commonwealth nations (250 mL).","mL","ML","240",240,false],[false,"teaspoon - metric","[tsp_m]","[TSP_M]","volume",0.0000049999999999999996,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"tsp; t; metric teaspoons","UCUM","Vol","Clinical","standard unit used in the US and internationally","mL","mL","5",5,false],[false,"tablespoon - metric","[tbs_m]","[TBS_M]","volume",0.000014999999999999999,[3,0,0,0,0,0,0],null,"us-volumes",false,null,null,1,false,false,0,"metric tablespoons; Tbs; tbsp; T; tbs m","UCUM","Vol","Clinical","standard unit used in the US and internationally","mL","mL","15",15,false],[false,"gallon- British","[gal_br]","[GAL_BR]","volume",0.004546090000000001,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"imperial gallons, UK gallons; British gallons; br gal; imp gal","UCUM","Vol","Nonclinical","Used only in Great Britain and other Commonwealth countries","l","L","4.54609",4.54609,false],[false,"peck - British","[pk_br]","[PK_BR]","volume",0.009092180000000002,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"imperial pecks; British pecks; br pk; imp pk","UCUM","Vol","Nonclinical","unit of dry volume rarely used today (can be used to measure volume of apples)","[gal_br]","[GAL_BR]","2",2,false],[false,"bushel - British","[bu_br]","[BU_BR]","volume",0.03636872000000001,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"British bushels; imperial; br bsh; br bu; imp","UCUM","Vol","Obsolete","Historical unit of dry volume that is rarely used today","[pk_br]","[PK_BR]","4",4,false],[false,"quart - British","[qt_br]","[QT_BR]","volume",0.0011365225000000002,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"British quarts; imperial quarts; br qts","UCUM","Vol","Clinical","Used only in Great Britain and other Commonwealth countries","[gal_br]/4","[GAL_BR]/4","1",1,false],[false,"pint - British","[pt_br]","[PT_BR]","volume",0.0005682612500000001,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"British pints; imperial pints; pt br; br pt; imp pt; pt imp","UCUM","Vol","Clinical","Used only in Great Britain and other Commonwealth countries","[qt_br]/2","[QT_BR]/2","1",1,false],[false,"gill - British","[gil_br]","[GIL_BR]","volume",0.00014206531250000003,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"imperial gills; British gills; imp gill, br gill","UCUM","Vol","Nonclinical","only used in the context of alcohol volume in Great Britain","[pt_br]/4","[PT_BR]/4","1",1,false],[false,"fluid ounce - British","[foz_br]","[FOZ_BR]","volume",0.000028413062500000005,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"British fluid ounces; Imperial fluid ounces; br fozs; imp fozs; br fl ozs","UCUM","Vol","Clinical","Used only in Great Britain and other Commonwealth countries","[gil_br]/5","[GIL_BR]/5","1",1,false],[false,"fluid dram - British","[fdr_br]","[FDR_BR]","volume",0.0000035516328125000006,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"British fluid drams; fdr br","UCUM","Vol","Nonclinical","equal to 1/8 Imperial fluid ounce = 3.55 mL; used informally to mean small amount of liquor, especially Scotch whiskey","[foz_br]/8","[FOZ_BR]/8","1",1,false],[false,"minim - British","[min_br]","[MIN_BR]","volume",5.919388020833334e-8,[3,0,0,0,0,0,0],null,"brit-volumes",false,null,null,1,false,false,0,"min br; br min; ♏ br","UCUM","Vol","Obsolete","","[fdr_br]/60","[FDR_BR]/60","1",1,false],[false,"grain","[gr]","[GR]","mass",0.06479891,[0,0,1,0,0,0,0],null,"avoirdupois",false,null,null,1,false,false,0,"gr; grains","UCUM","Mass","Nonclinical","an apothecary measure of mass rarely used today","mg","MG","64.79891",64.79891,false],[false,"pound","[lb_av]","[LB_AV]","mass",453.59237,[0,0,1,0,0,0,0],"lb","avoirdupois",false,null,null,1,false,false,0,"avoirdupois pounds, international pounds; av lbs; pounds","UCUM","Mass","Clinical","standard unit used in the US and internationally","[gr]","[GR]","7000",7000,false],[false,"pound force - US","[lbf_av]","[LBF_AV]","force",4448.2216152605,[1,-2,1,0,0,0,0],"lbf","const",false,null,null,1,false,false,0,"lbfs; US lbf; US pound forces","UCUM","Force","Clinical","only rarely needed in health care - see [lb_av] which is the more common unit to express weight","[lb_av].[g]","[LB_AV].[G]","1",1,false],[false,"ounce","[oz_av]","[OZ_AV]","mass",28.349523125,[0,0,1,0,0,0,0],"oz","avoirdupois",false,null,null,1,false,false,0,"ounces; international ounces; avoirdupois ounces; av ozs","UCUM","Mass","Clinical","standard unit used in the US and internationally","[lb_av]/16","[LB_AV]/16","1",1,false],[false,"Dram mass unit","[dr_av]","[DR_AV]","mass",1.7718451953125,[0,0,1,0,0,0,0],null,"avoirdupois",false,null,null,1,false,false,0,"Dram; drams avoirdupois; avoidupois dram; international dram","UCUM","Mass","Clinical","unit from the avoirdupois system, which is used in the US and internationally","[oz_av]/16","[OZ_AV]/16","1",1,false],[false,"short hundredweight","[scwt_av]","[SCWT_AV]","mass",45359.237,[0,0,1,0,0,0,0],null,"avoirdupois",false,null,null,1,false,false,0,"hundredweights; s cwt; scwt; avoirdupois","UCUM","Mass","Nonclinical","Used only in the US to equal 100 pounds","[lb_av]","[LB_AV]","100",100,false],[false,"long hundredweight","[lcwt_av]","[LCWT_AV]","mass",50802.345440000005,[0,0,1,0,0,0,0],null,"avoirdupois",false,null,null,1,false,false,0,"imperial hundredweights; imp cwt; lcwt; avoirdupois","UCUM","Mass","Obsolete","","[lb_av]","[LB_AV]","112",112,false],[false,"short ton - US","[ston_av]","[STON_AV]","mass",907184.74,[0,0,1,0,0,0,0],null,"avoirdupois",false,null,null,1,false,false,0,"ton; US tons; avoirdupois tons","UCUM","Mass","Clinical","Used only in the US","[scwt_av]","[SCWT_AV]","20",20,false],[false,"long ton - British","[lton_av]","[LTON_AV]","mass",1016046.9088000001,[0,0,1,0,0,0,0],null,"avoirdupois",false,null,null,1,false,false,0,"imperial tons; weight tons; British long tons; long ton avoirdupois","UCUM","Mass","Nonclinical","Used only in Great Britain and other Commonwealth countries","[lcwt_av]","[LCWT_AV]","20",20,false],[false,"stone - British","[stone_av]","[STONE_AV]","mass",6350.293180000001,[0,0,1,0,0,0,0],null,"avoirdupois",false,null,null,1,false,false,0,"British stones; avoirdupois","UCUM","Mass","Nonclinical","Used primarily in the UK and Ireland to measure body weight","[lb_av]","[LB_AV]","14",14,false],[false,"pennyweight - troy","[pwt_tr]","[PWT_TR]","mass",1.5551738400000001,[0,0,1,0,0,0,0],null,"troy",false,null,null,1,false,false,0,"dwt; denarius weights","UCUM","Mass","Obsolete","historical unit used to measure mass and cost of precious metals","[gr]","[GR]","24",24,false],[false,"ounce - troy","[oz_tr]","[OZ_TR]","mass",31.103476800000003,[0,0,1,0,0,0,0],null,"troy",false,null,null,1,false,false,0,"troy ounces; tr ozs","UCUM","Mass","Nonclinical","unit of mass for precious metals and gemstones only","[pwt_tr]","[PWT_TR]","20",20,false],[false,"pound - troy","[lb_tr]","[LB_TR]","mass",373.2417216,[0,0,1,0,0,0,0],null,"troy",false,null,null,1,false,false,0,"troy pounds; tr lbs","UCUM","Mass","Nonclinical","only used for weighing precious metals","[oz_tr]","[OZ_TR]","12",12,false],[false,"scruple","[sc_ap]","[SC_AP]","mass",1.2959782,[0,0,1,0,0,0,0],null,"apoth",false,null,null,1,false,false,0,"scruples; sc ap","UCUM","Mass","Obsolete","","[gr]","[GR]","20",20,false],[false,"dram - apothecary","[dr_ap]","[DR_AP]","mass",3.8879346,[0,0,1,0,0,0,0],null,"apoth",false,null,null,1,false,false,0,"ʒ; drachm; apothecaries drams; dr ap; dram ap","UCUM","Mass","Nonclinical","unit still used in the US occasionally to measure amount of drugs in pharmacies","[sc_ap]","[SC_AP]","3",3,false],[false,"ounce - apothecary","[oz_ap]","[OZ_AP]","mass",31.1034768,[0,0,1,0,0,0,0],null,"apoth",false,null,null,1,false,false,0,"apothecary ounces; oz ap; ap ozs; ozs ap","UCUM","Mass","Obsolete","","[dr_ap]","[DR_AP]","8",8,false],[false,"pound - apothecary","[lb_ap]","[LB_AP]","mass",373.2417216,[0,0,1,0,0,0,0],null,"apoth",false,null,null,1,false,false,0,"apothecary pounds; apothecaries pounds; ap lb; lb ap; ap lbs; lbs ap","UCUM","Mass","Obsolete","","[oz_ap]","[OZ_AP]","12",12,false],[false,"ounce - metric","[oz_m]","[OZ_M]","mass",28,[0,0,1,0,0,0,0],null,"apoth",false,null,null,1,false,false,0,"metric ounces; m ozs","UCUM","Mass","Clinical","see [oz_av] (the avoirdupois ounce) for the standard ounce used internationally; [oz_m] is equal to 28 grams and is based on the apothecaries' system of mass units which is used in some US pharmacies. ","g","g","28",28,false],[false,"line","[lne]","[LNE]","length",0.002116666666666667,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"British lines; br L; L; l","UCUM","Len","Obsolete","","[in_i]/12","[IN_I]/12","1",1,false],[false,"point (typography)","[pnt]","[PNT]","length",0.0003527777777777778,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"DTP points; desktop publishing point; pt; pnt","UCUM","Len","Nonclinical","typography unit for typesetter's length","[lne]/6","[LNE]/6","1",1,false],[false,"pica (typography)","[pca]","[PCA]","length",0.004233333333333334,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"picas","UCUM","Len","Nonclinical","typography unit for typesetter's length","[pnt]","[PNT]","12",12,false],[false,"Printer's point (typography)","[pnt_pr]","[PNT_PR]","length",0.00035145980000000004,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"pnt pr","UCUM","Len","Nonclinical","typography unit for typesetter's length","[in_i]","[IN_I]","0.013837",0.013837,false],[false,"Printer's pica  (typography)","[pca_pr]","[PCA_PR]","length",0.004217517600000001,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"pca pr; Printer's picas","UCUM","Len","Nonclinical","typography unit for typesetter's length","[pnt_pr]","[PNT_PR]","12",12,false],[false,"pied","[pied]","[PIED]","length",0.3248,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"pieds du roi; Paris foot; royal; French; feet","UCUM","Len","Obsolete","","cm","CM","32.48",32.48,false],[false,"pouce","[pouce]","[POUCE]","length",0.027066666666666666,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"historical French inches; French royal inches","UCUM","Len","Obsolete","","[pied]/12","[PIED]/12","1",1,false],[false,"ligne","[ligne]","[LIGNE]","length",0.0022555555555555554,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"Paris lines; lignes","UCUM","Len","Obsolete","","[pouce]/12","[POUCE]/12","1",1,false],[false,"didot","[didot]","[DIDOT]","length",0.0003759259259259259,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"Didot point; dd; Didots Point; didots; points","UCUM","Len","Obsolete","typography unit for typesetter's length","[ligne]/6","[LIGNE]/6","1",1,false],[false,"cicero","[cicero]","[CICERO]","length",0.004511111111111111,[1,0,0,0,0,0,0],null,"typeset",false,null,null,1,false,false,0,"Didot's pica; ciceros; picas","UCUM","Len","Obsolete","typography unit for typesetter's length","[didot]","[DIDOT]","12",12,false],[false,"degrees Fahrenheit","[degF]","[DEGF]","temperature",0.5555555555555556,[0,0,0,0,1,0,0],"°F","heat",false,null,"degF",1,true,false,0,"°F; deg F","UCUM","Temp","Clinical","","K",null,null,0.5555555555555556,false],[false,"degrees Rankine","[degR]","[degR]","temperature",0.5555555555555556,[0,0,0,0,1,0,0],"°R","heat",false,null,null,1,false,false,0,"°R; °Ra; Rankine","UCUM","Temp","Obsolete","Replaced by Kelvin","K/9","K/9","5",5,false],[false,"degrees Réaumur","[degRe]","[degRe]","temperature",1.25,[0,0,0,0,1,0,0],"°Ré","heat",false,null,"degRe",1,true,false,0,"°Ré, °Re, °r; Réaumur; degree Reaumur; Reaumur","UCUM","Temp","Obsolete","replaced by Celsius","K",null,null,1.25,false],[false,"calorie at 15°C","cal_[15]","CAL_[15]","energy",4185.8,[2,-2,1,0,0,0,0],"cal<sub>15°C</sub>","heat",true,null,null,1,false,false,0,"calorie 15 C; cals 15 C; calories at 15 C","UCUM","Enrg","Nonclinical","equal to 4.1855 joules; calorie most often used in engineering","J","J","4.18580",4.1858,false],[false,"calorie at 20°C","cal_[20]","CAL_[20]","energy",4181.9,[2,-2,1,0,0,0,0],"cal<sub>20°C</sub>","heat",true,null,null,1,false,false,0,"calorie 20 C; cal 20 C; calories at 20 C","UCUM","Enrg","Clinical","equal to 4.18190  joules. ","J","J","4.18190",4.1819,false],[false,"mean calorie","cal_m","CAL_M","energy",4190.0199999999995,[2,-2,1,0,0,0,0],"cal<sub>m</sub>","heat",true,null,null,1,false,false,0,"mean cals; mean calories","UCUM","Enrg","Clinical","equal to 4.19002 joules. ","J","J","4.19002",4.19002,false],[false,"international table calorie","cal_IT","CAL_IT","energy",4186.8,[2,-2,1,0,0,0,0],"cal<sub>IT</sub>","heat",true,null,null,1,false,false,0,"calories IT; IT cals; international steam table calories","UCUM","Enrg","Nonclinical","used in engineering steam tables and defined as 1/860 international watt-hour; equal to 4.1868 joules","J","J","4.1868",4.1868,false],[false,"thermochemical calorie","cal_th","CAL_TH","energy",4184,[2,-2,1,0,0,0,0],"cal<sub>th</sub>","heat",true,null,null,1,false,false,0,"thermochemical calories; th cals","UCUM","Enrg","Clinical","equal to 4.184 joules; used as the unit in medicine and biochemistry (equal to cal)","J","J","4.184",4.184,false],[false,"calorie","cal","CAL","energy",4184,[2,-2,1,0,0,0,0],"cal","heat",true,null,null,1,false,false,0,"gram calories; small calories","UCUM","Enrg","Clinical","equal to 4.184 joules (the same value as the thermochemical calorie, which is the most common calorie used in medicine and biochemistry)","cal_th","CAL_TH","1",1,false],[false,"nutrition label Calories","[Cal]","[CAL]","energy",4184000,[2,-2,1,0,0,0,0],"Cal","heat",false,null,null,1,false,false,0,"food calories; Cal; kcal","UCUM","Eng","Clinical","","kcal_th","KCAL_TH","1",1,false],[false,"British thermal unit at 39°F","[Btu_39]","[BTU_39]","energy",1059670,[2,-2,1,0,0,0,0],"Btu<sub>39°F</sub>","heat",false,null,null,1,false,false,0,"BTU 39F; BTU 39 F; B.T.U. 39 F; B.Th.U. 39 F; BThU 39 F; British thermal units","UCUM","Eng","Nonclinical","equal to 1.05967 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries","kJ","kJ","1.05967",1.05967,false],[false,"British thermal unit at 59°F","[Btu_59]","[BTU_59]","energy",1054800,[2,-2,1,0,0,0,0],"Btu<sub>59°F</sub>","heat",false,null,null,1,false,false,0,"BTU 59 F; BTU 59F; B.T.U. 59 F; B.Th.U. 59 F; BThU 59F; British thermal units","UCUM","Eng","Nonclinical","equal to  1.05480 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries","kJ","kJ","1.05480",1.0548,false],[false,"British thermal unit at 60°F","[Btu_60]","[BTU_60]","energy",1054680,[2,-2,1,0,0,0,0],"Btu<sub>60°F</sub>","heat",false,null,null,1,false,false,0,"BTU 60 F; BTU 60F; B.T.U. 60 F; B.Th.U. 60 F; BThU 60 F; British thermal units 60 F","UCUM","Eng","Nonclinical","equal to 1.05468 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries","kJ","kJ","1.05468",1.05468,false],[false,"mean British thermal unit","[Btu_m]","[BTU_M]","energy",1055870,[2,-2,1,0,0,0,0],"Btu<sub>m</sub>","heat",false,null,null,1,false,false,0,"BTU mean; B.T.U. mean; B.Th.U. mean; BThU mean; British thermal units mean; ","UCUM","Eng","Nonclinical","equal to 1.05587 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries","kJ","kJ","1.05587",1.05587,false],[false,"international table British thermal unit","[Btu_IT]","[BTU_IT]","energy",1055055.85262,[2,-2,1,0,0,0,0],"Btu<sub>IT</sub>","heat",false,null,null,1,false,false,0,"BTU IT; B.T.U. IT; B.Th.U. IT; BThU IT; British thermal units IT","UCUM","Eng","Nonclinical","equal to 1.055 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries","kJ","kJ","1.05505585262",1.05505585262,false],[false,"thermochemical British thermal unit","[Btu_th]","[BTU_TH]","energy",1054350,[2,-2,1,0,0,0,0],"Btu<sub>th</sub>","heat",false,null,null,1,false,false,0,"BTU Th; B.T.U. Th; B.Th.U. Th; BThU Th; thermochemical British thermal units","UCUM","Eng","Nonclinical","equal to 1.054350 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries","kJ","kJ","1.054350",1.05435,false],[false,"British thermal unit","[Btu]","[BTU]","energy",1054350,[2,-2,1,0,0,0,0],"btu","heat",false,null,null,1,false,false,0,"BTU; B.T.U. ; B.Th.U.; BThU; British thermal units","UCUM","Eng","Nonclinical","equal to the thermochemical British thermal unit equal to 1.054350 kJ; used as a measure of power in the electric power, steam generation, heating, and air conditioning industries","[Btu_th]","[BTU_TH]","1",1,false],[false,"horsepower - mechanical","[HP]","[HP]","power",745699.8715822703,[2,-3,1,0,0,0,0],null,"heat",false,null,null,1,false,false,0,"imperial horsepowers","UCUM","EngRat","Nonclinical","refers to mechanical horsepower, which is unit used to measure engine power primarily in the US. ","[ft_i].[lbf_av]/s","[FT_I].[LBF_AV]/S","550",550,false],[false,"tex","tex","TEX","linear mass density (of textile thread)",0.001,[-1,0,1,0,0,0,0],"tex","heat",true,null,null,1,false,false,0,"linear mass density; texes","UCUM","","Clinical","unit of linear mass density for fibers equal to gram per 1000 meters","g/km","G/KM","1",1,false],[false,"Denier (linear mass density)","[den]","[DEN]","linear mass density (of textile thread)",0.0001111111111111111,[-1,0,1,0,0,0,0],"den","heat",false,null,null,1,false,false,0,"den; deniers","UCUM","","Nonclinical","equal to the mass in grams per 9000 meters of the fiber (1 denier = 1 strand of silk)","g/9/km","G/9/KM","1",1,false],[false,"meter of water column","m[H2O]","M[H2O]","pressure",9806650,[-1,-2,1,0,0,0,0],"m HO<sub><r>2</r></sub>","clinical",true,null,null,1,false,false,0,"mH2O; m H2O; meters of water column; metres; pressure","UCUM","Pres","Clinical","","kPa","KPAL","980665e-5",9.80665,false],[false,"meter of mercury column","m[Hg]","M[HG]","pressure",133322000,[-1,-2,1,0,0,0,0],"m Hg","clinical",true,null,null,1,false,false,0,"mHg; m Hg; meters of mercury column; metres; pressure","UCUM","Pres","Clinical","","kPa","KPAL","133.3220",133.322,false],[false,"inch of water column","[in_i'H2O]","[IN_I'H2O]","pressure",249088.91000000003,[-1,-2,1,0,0,0,0],"in HO<sub><r>2</r></sub>","clinical",false,null,null,1,false,false,0,"inches WC; inAq; in H2O; inch of water gauge; iwg; pressure","UCUM","Pres","Clinical","unit of pressure, especially in respiratory and ventilation care","m[H2O].[in_i]/m","M[H2O].[IN_I]/M","1",1,false],[false,"inch of mercury column","[in_i'Hg]","[IN_I'HG]","pressure",3386378.8000000003,[-1,-2,1,0,0,0,0],"in Hg","clinical",false,null,null,1,false,false,0,"inHg; in Hg; pressure; inches","UCUM","Pres","Clinical","unit of pressure used in US to measure barometric pressure and occasionally blood pressure (see mm[Hg] for unit used internationally)","m[Hg].[in_i]/m","M[HG].[IN_I]/M","1",1,false],[false,"peripheral vascular resistance unit","[PRU]","[PRU]","fluid resistance",133322000000,[-4,-1,1,0,0,0,0],"P.R.U.","clinical",false,null,null,1,false,false,0,"peripheral vascular resistance units; peripheral resistance unit; peripheral resistance units; PRU","UCUM","FldResist","Clinical","used to assess blood flow in the capillaries; equal to 1 mmH.min/mL = 133.3 Pa·min/mL","mm[Hg].s/ml","MM[HG].S/ML","1",1,false],[false,"Wood unit","[wood'U]","[WOOD'U]","fluid resistance",7999320000,[-4,-1,1,0,0,0,0],"Wood U.","clinical",false,null,null,1,false,false,0,"hybrid reference units; HRU; mmHg.min/L; vascular resistance","UCUM","Pres","Clinical","simplified unit of measurement for for measuring pulmonary vascular resistance that uses pressure; equal to mmHg.min/L","mm[Hg].min/L","MM[HG].MIN/L","1",1,false],[false,"diopter (lens)","[diop]","[DIOP]","refraction of a lens",1,[1,0,0,0,0,0,0],"dpt","clinical",false,null,"inv",1,false,false,0,"diopters; diop; dioptre; dpt; refractive power","UCUM","InvLen","Clinical","unit of optical power of lens represented by inverse meters (m^-1)","m","/M","1",1,false],[false,"prism diopter (magnifying power)","[p'diop]","[P'DIOP]","refraction of a prism",1,[0,0,0,1,0,0,0],"PD","clinical",false,null,"tanTimes100",1,true,false,0,"diopters; dioptres; p diops; pdiop; dpt; pdptr; Δ; cm/m; centimeter per meter; centimetre; metre","UCUM","Angle","Clinical","unit for prism correction in eyeglass prescriptions","rad",null,null,1,false],[false,"percent of slope","%[slope]","%[SLOPE]","slope",0.017453292519943295,[0,0,0,1,0,0,0],"%","clinical",false,null,"100tan",1,true,false,0,"% slope; %slope; percents slopes","UCUM","VelFr; ElpotRatFr; VelRtoFr; AccelFr","Clinical","","deg",null,null,1,false],[false,"mesh","[mesh_i]","[MESH_I]","lineic number",0.025400000000000002,[1,0,0,0,0,0,0],null,"clinical",false,null,"inv",1,false,false,0,"meshes","UCUM","NLen (lineic number)","Clinical","traditional unit of length defined as the number of strands or particles per inch","[in_i]","/[IN_I]","1",1,false],[false,"French (catheter gauge) ","[Ch]","[CH]","gauge of catheters",0.0003333333333333333,[1,0,0,0,0,0,0],"Ch","clinical",false,null,null,1,false,false,0,"Charrières, French scales; French gauges; Fr, Fg, Ga, FR, Ch","UCUM","Len; Circ; Diam","Clinical","","mm/3","MM/3","1",1,false],[false,"drop - metric (1/20 mL)","[drp]","[DRP]","volume",5e-8,[3,0,0,0,0,0,0],"drp","clinical",false,null,null,1,false,false,0,"drop dosing units; metric drops; gtt","UCUM","Vol","Clinical","standard unit used in the US and internationally for clinical medicine but note that although [drp] is defined as 1/20 milliliter, in practice, drop sizes will vary due to external factors","ml/20","ML/20","1",1,false],[false,"Hounsfield unit","[hnsf'U]","[HNSF'U]","x-ray attenuation",1,[0,0,0,0,0,0,0],"HF","clinical",false,null,null,1,false,false,0,"HU; units","UCUM","","Clinical","used to measure X-ray attenuation, especially in CT scans.","1","1","1",1,false],[false,"Metabolic Equivalent of Task ","[MET]","[MET]","metabolic cost of physical activity",5.833333333333334e-11,[3,-1,-1,0,0,0,0],"MET","clinical",false,null,null,1,false,false,0,"metabolic equivalents","UCUM","RelEngRat","Clinical","unit used to measure rate of energy expenditure per power in treadmill and other functional tests","mL/min/kg","ML/MIN/KG","3.5",3.5,false],[false,"homeopathic potency of decimal series (retired)","[hp'_X]","[HP'_X]","homeopathic potency (retired)",1,[0,0,0,0,0,0,0],"X","clinical",false,null,"hpX",1,true,false,0,null,"UCUM",null,null,null,"1",null,null,1,false],[false,"homeopathic potency of centesimal series (retired)","[hp'_C]","[HP'_C]","homeopathic potency (retired)",1,[0,0,0,0,0,0,0],"C","clinical",false,null,"hpC",1,true,false,0,null,"UCUM",null,null,null,"1",null,null,1,false],[false,"homeopathic potency of millesimal series (retired)","[hp'_M]","[HP'_M]","homeopathic potency (retired)",1,[0,0,0,0,0,0,0],"M","clinical",false,null,"hpM",1,true,false,0,null,"UCUM",null,null,null,"1",null,null,1,false],[false,"homeopathic potency of quintamillesimal series (retired)","[hp'_Q]","[HP'_Q]","homeopathic potency (retired)",1,[0,0,0,0,0,0,0],"Q","clinical",false,null,"hpQ",1,true,false,0,null,"UCUM",null,null,null,"1",null,null,1,false],[false,"homeopathic potency of decimal hahnemannian series","[hp_X]","[HP_X]","homeopathic potency (Hahnemann)",1,[0,0,0,0,0,0,0],"X","clinical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"homeopathic potency of centesimal hahnemannian series","[hp_C]","[HP_C]","homeopathic potency (Hahnemann)",1,[0,0,0,0,0,0,0],"C","clinical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"homeopathic potency of millesimal hahnemannian series","[hp_M]","[HP_M]","homeopathic potency (Hahnemann)",1,[0,0,0,0,0,0,0],"M","clinical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"homeopathic potency of quintamillesimal hahnemannian series","[hp_Q]","[HP_Q]","homeopathic potency (Hahnemann)",1,[0,0,0,0,0,0,0],"Q","clinical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"homeopathic potency of decimal korsakovian series","[kp_X]","[KP_X]","homeopathic potency (Korsakov)",1,[0,0,0,0,0,0,0],"X","clinical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"homeopathic potency of centesimal korsakovian series","[kp_C]","[KP_C]","homeopathic potency (Korsakov)",1,[0,0,0,0,0,0,0],"C","clinical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"homeopathic potency of millesimal korsakovian series","[kp_M]","[KP_M]","homeopathic potency (Korsakov)",1,[0,0,0,0,0,0,0],"M","clinical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"homeopathic potency of quintamillesimal korsakovian series","[kp_Q]","[KP_Q]","homeopathic potency (Korsakov)",1,[0,0,0,0,0,0,0],"Q","clinical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"equivalent","eq","EQ","amount of substance",6.0221367e+23,[0,0,0,0,0,0,0],"eq","chemical",true,null,null,1,false,false,1,"equivalents","UCUM","Sub","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"osmole","osm","OSM","amount of substance (dissolved particles)",6.0221367e+23,[0,0,0,0,0,0,0],"osm","chemical",true,null,null,1,false,false,1,"osmoles; osmols","UCUM","Osmol","Clinical","the number of moles of solute that contribute to the osmotic pressure of a solution","mol","MOL","1",1,false],[false,"pH","[pH]","[PH]","acidity",6.0221366999999994e+26,[-3,0,0,0,0,0,0],"pH","chemical",false,null,"pH",1,true,false,0,"pH scale","UCUM","LogCnc","Clinical","Log concentration of H+","mol/l",null,null,1,false],[false,"gram percent","g%","G%","mass concentration",10000,[-3,0,1,0,0,0,0],"g%","chemical",true,null,null,1,false,false,0,"gram %; gram%; grams per deciliter; g/dL; gm per dL; gram percents","UCUM","MCnc","Clinical","equivalent to unit gram per deciliter (g/dL), a unit often used in medical tests to represent solution concentrations","g/dl","G/DL","1",1,false],[false,"Svedberg unit","[S]","[S]","sedimentation coefficient",1e-13,[0,1,0,0,0,0,0],"S","chemical",false,null,null,1,false,false,0,"Sv; 10^-13 seconds; 100 fs; 100 femtoseconds","UCUM","Time","Clinical","unit of time used in measuring particle's sedimentation rate, usually after centrifugation. ","s","10*-13.S","1",1e-13,false],[false,"high power field (microscope)","[HPF]","[HPF]","view area in microscope",1,[0,0,0,0,0,0,0],"HPF","chemical",false,null,null,1,false,false,0,"HPF","UCUM","Area","Clinical","area visible under the maximum magnification power of the objective in microscopy (usually 400x)\\n","1","1","1",1,false],[false,"low power field (microscope)","[LPF]","[LPF]","view area in microscope",1,[0,0,0,0,0,0,0],"LPF","chemical",false,null,null,1,false,false,0,"LPF; fields","UCUM","Area","Clinical","area visible under the low magnification of the objective in microscopy (usually 100 x)\\n","1","1","100",100,false],[false,"katal","kat","KAT","catalytic activity",6.0221367e+23,[0,-1,0,0,0,0,0],"kat","chemical",true,null,null,1,false,false,1,"mol/secs; moles per second; mol*sec-1; mol*s-1; mol.s-1; katals; catalytic activity; enzymatic; enzyme units; activities","UCUM","CAct","Clinical","kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.","mol/s","MOL/S","1",1,false],[false,"enzyme unit","U","U","catalytic activity",10036894500000000,[0,-1,0,0,0,0,0],"U","chemical",true,null,null,1,false,false,1,"micromoles per minute; umol/min; umol per minute; umol min-1; enzymatic activity; enzyme activity","UCUM","CAct","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"international unit - arbitrary","[iU]","[IU]","arbitrary",1,[0,0,0,0,0,0,0],"IU","chemical",true,null,null,1,false,true,0,"international units; IE; F2","UCUM","Arb","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","1","1","1",1,false],[false,"international unit - arbitrary","[IU]","[IU]","arbitrary",1,[0,0,0,0,0,0,0],"i.U.","chemical",true,null,null,1,false,true,0,"international units; IE; F2","UCUM","Arb","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"arbitary unit","[arb'U]","[ARB'U]","arbitrary",1,[0,0,0,0,0,0,0],"arb. U","chemical",false,null,null,1,false,true,0,"arbitary units; arb units; arbU","UCUM","Arb","Clinical","relative unit of measurement to show the ratio of test measurement to reference measurement","1","1","1",1,false],[false,"United States Pharmacopeia unit","[USP'U]","[USP'U]","arbitrary",1,[0,0,0,0,0,0,0],"U.S.P.","chemical",false,null,null,1,false,true,0,"USP U; USP'U","UCUM","Arb","Clinical","a dose unit to express potency of drugs and vitamins defined by the United States Pharmacopoeia; usually 1 USP = 1 IU","1","1","1",1,false],[false,"GPL unit","[GPL'U]","[GPL'U]","biologic activity of anticardiolipin IgG",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"GPL Units; GPL U; IgG anticardiolipin units; IgG Phospholipid","UCUM","ACnc; AMass","Clinical","Units for an antiphospholipid test","1","1","1",1,false],[false,"MPL unit","[MPL'U]","[MPL'U]","biologic activity of anticardiolipin IgM",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"MPL units; MPL U; MPL'U; IgM anticardiolipin units; IgM Phospholipid Units ","UCUM","ACnc","Clinical","units for antiphospholipid test","1","1","1",1,false],[false,"APL unit","[APL'U]","[APL'U]","biologic activity of anticardiolipin IgA",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"APL units; APL U; IgA anticardiolipin; IgA Phospholipid; biologic activity of","UCUM","AMass; ACnc","Clinical","Units for an anti phospholipid syndrome test","1","1","1",1,false],[false,"Bethesda unit","[beth'U]","[BETH'U]","biologic activity of factor VIII inhibitor",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"BU","UCUM","ACnc","Clinical","measures of blood coagulation inhibitior for many blood factors","1","1","1",1,false],[false,"anti factor Xa unit","[anti'Xa'U]","[ANTI'XA'U]","biologic activity of factor Xa inhibitor (heparin)",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"units","UCUM","ACnc","Clinical","[anti'Xa'U] unit is equivalent to and can be converted to IU/mL. ","1","1","1",1,false],[false,"Todd unit","[todd'U]","[TODD'U]","biologic activity antistreptolysin O",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"units","UCUM","InvThres; RtoThres","Clinical","the unit for the results of the testing for antistreptolysin O (ASO)","1","1","1",1,false],[false,"Dye unit","[dye'U]","[DYE'U]","biologic activity of amylase",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"units","UCUM","CCnc","Obsolete","equivalent to the Somogyi unit, which is an enzyme unit for amylase but better to use U, the standard enzyme unit for measuring catalytic activity","1","1","1",1,false],[false,"Somogyi unit","[smgy'U]","[SMGY'U]","biologic activity of amylase",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"Somogyi units; smgy U","UCUM","CAct","Clinical","measures the enzymatic activity of amylase in blood serum - better to use base units mg/mL ","1","1","1",1,false],[false,"Bodansky unit","[bdsk'U]","[BDSK'U]","biologic activity of phosphatase",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"","UCUM","ACnc","Obsolete","Enzyme unit specific to alkaline phosphatase - better to use standard enzyme unit of U","1","1","1",1,false],[false,"King-Armstrong unit","[ka'U]","[KA'U]","biologic activity of phosphatase",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"King-Armstrong Units; King units","UCUM","AMass","Obsolete","enzyme units for acid phosphatase - better to use enzyme unit [U]","1","1","1",1,false],[false,"Kunkel unit","[knk'U]","[KNK'U]","arbitrary biologic activity",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,null,"UCUM",null,null,null,"1","1","1",1,false],[false,"Mac Lagan unit","[mclg'U]","[MCLG'U]","arbitrary biologic activity",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"galactose index; galactose tolerance test; thymol turbidity test unit; mclg U; units; indexes","UCUM","ACnc","Obsolete","unit for liver tests - previously used in thymol turbidity tests for liver disease diagnoses, and now is sometimes referred to in the oral galactose tolerance test","1","1","1",1,false],[false,"tuberculin unit","[tb'U]","[TB'U]","biologic activity of tuberculin",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"TU; units","UCUM","Arb","Clinical","amount of tuberculin antigen -usually in reference to a TB skin test ","1","1","1",1,false],[false,"50% cell culture infectious dose","[CCID_50]","[CCID_50]","biologic activity (infectivity) of an infectious agent preparation",1,[0,0,0,0,0,0,0],"CCID<sub>50</sub>","chemical",false,null,null,1,false,true,0,"CCID50; 50% cell culture infective doses","UCUM","NumThres","Clinical","","1","1","1",1,false],[false,"50% tissue culture infectious dose","[TCID_50]","[TCID_50]","biologic activity (infectivity) of an infectious agent preparation",1,[0,0,0,0,0,0,0],"TCID<sub>50</sub>","chemical",false,null,null,1,false,true,0,"TCID50; 50% tissue culture infective dose","UCUM","NumThres","Clinical","","1","1","1",1,false],[false,"50% embryo infectious dose","[EID_50]","[EID_50]","biologic activity (infectivity) of an infectious agent preparation",1,[0,0,0,0,0,0,0],"EID<sub>50</sub>","chemical",false,null,null,1,false,true,0,"EID50; 50% embryo infective doses; EID50 Egg Infective Dosage","UCUM","thresNum","Clinical","","1","1","1",1,false],[false,"plaque forming units","[PFU]","[PFU]","amount of an infectious agent",1,[0,0,0,0,0,0,0],"PFU","chemical",false,null,null,1,false,true,0,"PFU","UCUM","ACnc","Clinical","tests usually report unit as number of PFU per unit volume","1","1","1",1,false],[false,"focus forming units (cells)","[FFU]","[FFU]","amount of an infectious agent",1,[0,0,0,0,0,0,0],"FFU","chemical",false,null,null,1,false,true,0,"FFU","UCUM","EntNum","Clinical","","1","1","1",1,false],[false,"colony forming units","[CFU]","[CFU]","amount of a proliferating organism",1,[0,0,0,0,0,0,0],"CFU","chemical",false,null,null,1,false,true,0,"CFU","UCUM","Num","Clinical","","1","1","1",1,false],[false,"index of reactivity (allergen)","[IR]","[IR]","amount of an allergen callibrated through in-vivo testing using the Stallergenes® method.",1,[0,0,0,0,0,0,0],"IR","chemical",false,null,null,1,false,true,0,"IR; indexes","UCUM","Acnc","Clinical","amount of an allergen callibrated through in-vivo testing using the Stallergenes method. Usually reported in tests as IR/mL","1","1","1",1,false],[false,"bioequivalent allergen unit","[BAU]","[BAU]","amount of an allergen callibrated through in-vivo testing based on the ID50EAL method of (intradermal dilution for 50mm sum of erythema diameters",1,[0,0,0,0,0,0,0],"BAU","chemical",false,null,null,1,false,true,0,"BAU; Bioequivalent Allergy Units; bioequivalent allergen units","UCUM","Arb","Clinical","","1","1","1",1,false],[false,"allergy unit","[AU]","[AU]","procedure defined amount of an allergen using some reference standard",1,[0,0,0,0,0,0,0],"AU","chemical",false,null,null,1,false,true,0,"allergy units; allergen units; AU","UCUM","Arb","Clinical","Most standard test allergy units are reported as [IU] or as %. ","1","1","1",1,false],[false,"allergen unit for Ambrosia artemisiifolia","[Amb'a'1'U]","[AMB'A'1'U]","procedure defined amount of the major allergen of ragweed.",1,[0,0,0,0,0,0,0],"Amb a 1 U","chemical",false,null,null,1,false,true,0,"Amb a 1 unit; Antigen E; AgE U; allergen units","UCUM","Arb","Clinical","Amb a 1 is the major allergen in short ragweed, and can be converted Bioequivalent allergen units (BAU) where 350 Amb a 1 U/mL = 100,000 BAU/mL","1","1","1",1,false],[false,"protein nitrogen unit (allergen testing)","[PNU]","[PNU]","procedure defined amount of a protein substance",1,[0,0,0,0,0,0,0],"PNU","chemical",false,null,null,1,false,true,0,"protein nitrogen units; PNU","UCUM","Mass","Clinical","defined as 0.01 ug of phosphotungstic acid-precipitable protein nitrogen. Being replaced by bioequivalent allergy units (BAU).","1","1","1",1,false],[false,"Limit of flocculation","[Lf]","[LF]","procedure defined amount of an antigen substance",1,[0,0,0,0,0,0,0],"Lf","chemical",false,null,null,1,false,true,0,"Lf doses","UCUM","Arb","Clinical","the antigen content  forming 1:1 ratio against 1 unit of antitoxin","1","1","1",1,false],[false,"D-antigen unit (polio)","[D'ag'U]","[D'AG'U]","procedure defined amount of a poliomyelitis d-antigen substance",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"DAgU; units","UCUM","Acnc","Clinical","unit of potency of poliovirus vaccine used for poliomyelitis prevention reported as D antigen units/mL. The unit is poliovirus type-specific.","1","1","1",1,false],[false,"fibrinogen equivalent units","[FEU]","[FEU]","amount of fibrinogen broken down into the measured d-dimers",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"FEU","UCUM","MCnc","Clinical","Note both the FEU and DDU units are used to report D-dimer measurements. 1 DDU = 1/2 FFU","1","1","1",1,false],[false,"ELISA unit","[ELU]","[ELU]","arbitrary ELISA unit",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"Enzyme-Linked Immunosorbent Assay Units; ELU; EL. U","UCUM","ACnc","Clinical","","1","1","1",1,false],[false,"Ehrlich units (urobilinogen)","[EU]","[EU]","Ehrlich unit",1,[0,0,0,0,0,0,0],null,"chemical",false,null,null,1,false,true,0,"EU/dL; mg{urobilinogen}/dL","UCUM","ACnc","Clinical","","1","1","1",1,false],[false,"neper","Np","NEP","level",1,[0,0,0,0,0,0,0],"Np","levels",true,null,"ln",1,true,false,0,"nepers","UCUM","LogRto","Clinical","logarithmic unit for ratios of measurements of physical field and power quantities, such as gain and loss of electronic signals","1",null,null,1,false],[false,"bel","B","B","level",1,[0,0,0,0,0,0,0],"B","levels",true,null,"lg",1,true,false,0,"bels","UCUM","LogRto","Clinical","Logarithm of the ratio of power- or field-type quantities; usually expressed in decibels ","1",null,null,1,false],[false,"bel sound pressure","B[SPL]","B[SPL]","pressure level",0.019999999999999997,[-1,-2,1,0,0,0,0],"B(SPL)","levels",true,null,"lgTimes2",1,true,false,0,"bel SPL; B SPL; sound pressure bels","UCUM","LogRto","Clinical","used to measure sound level in acoustics","Pa",null,null,0.000019999999999999998,false],[false,"bel volt","B[V]","B[V]","electric potential level",1000,[2,-2,1,0,0,-1,0],"B(V)","levels",true,null,"lgTimes2",1,true,false,0,"bel V; B V; volts bels","UCUM","LogRtoElp","Clinical","used to express power gain in electrical circuits","V",null,null,1,false],[false,"bel millivolt","B[mV]","B[MV]","electric potential level",1,[2,-2,1,0,0,-1,0],"B(mV)","levels",true,null,"lgTimes2",1,true,false,0,"bel mV; B mV; millivolt bels; 10^-3V bels; 10*-3V ","UCUM","LogRtoElp","Clinical","used to express power gain in electrical circuits","mV",null,null,1,false],[false,"bel microvolt","B[uV]","B[UV]","electric potential level",0.001,[2,-2,1,0,0,-1,0],"B(μV)","levels",true,null,"lgTimes2",1,true,false,0,"bel uV; B uV; microvolts bels; 10^-6V bel; 10*-6V bel","UCUM","LogRto","Clinical","used to express power gain in electrical circuits","uV",null,null,1,false],[false,"bel 10 nanovolt","B[10.nV]","B[10.NV]","electric potential level",0.000010000000000000003,[2,-2,1,0,0,-1,0],"B(10 nV)","levels",true,null,"lgTimes2",1,true,false,0,"bel 10 nV; B 10 nV; 10 nanovolts bels","UCUM","LogRtoElp","Clinical","used to express power gain in electrical circuits","nV",null,null,10,false],[false,"bel watt","B[W]","B[W]","power level",1000,[2,-3,1,0,0,0,0],"B(W)","levels",true,null,"lg",1,true,false,0,"bel W; b W; b Watt; Watts bels","UCUM","LogRto","Clinical","used to express power","W",null,null,1,false],[false,"bel kilowatt","B[kW]","B[KW]","power level",1000000,[2,-3,1,0,0,0,0],"B(kW)","levels",true,null,"lg",1,true,false,0,"bel kW; B kW; kilowatt bel; kW bel; kW B","UCUM","LogRto","Clinical","used to express power","kW",null,null,1,false],[false,"stere","st","STR","volume",1,[3,0,0,0,0,0,0],"st","misc",true,null,null,1,false,false,0,"stère; m3; cubic meter; m^3; meters cubed; metre","UCUM","Vol","Nonclinical","equal to one cubic meter, usually used for measuring firewood","m3","M3","1",1,false],[false,"Ångström","Ao","AO","length",1.0000000000000002e-10,[1,0,0,0,0,0,0],"Å","misc",false,null,null,1,false,false,0,"Å; Angstroms; Ao; Ångströms","UCUM","Len","Clinical","equal to 10^-10 meters; used to express wave lengths and atom scaled differences ","nm","NM","0.1",0.1,false],[false,"barn","b","BRN","action area",1.0000000000000001e-28,[2,0,0,0,0,0,0],"b","misc",false,null,null,1,false,false,0,"barns","UCUM","Area","Clinical","used in high-energy physics to express cross-sectional areas","fm2","FM2","100",100,false],[false,"technical atmosphere","att","ATT","pressure",98066500,[-1,-2,1,0,0,0,0],"at","misc",false,null,null,1,false,false,0,"at; tech atm; tech atmosphere; kgf/cm2; atms; atmospheres","UCUM","Pres","Obsolete","non-SI unit of pressure equal to one kilogram-force per square centimeter","kgf/cm2","KGF/CM2","1",1,false],[false,"mho","mho","MHO","electric conductance",0.001,[-2,1,-1,0,0,2,0],"mho","misc",true,null,null,1,false,false,0,"siemens; ohm reciprocals; Ω^−1; Ω-1 ","UCUM","","Obsolete","unit of electric conductance (the inverse of electrical resistance) equal to ohm^-1","S","S","1",1,false],[false,"pound per square inch","[psi]","[PSI]","pressure",6894757.293168359,[-1,-2,1,0,0,0,0],"psi","misc",false,null,null,1,false,false,0,"psi; lb/in2; lb per in2","UCUM","Pres","Clinical","","[lbf_av]/[in_i]2","[LBF_AV]/[IN_I]2","1",1,false],[false,"circle - plane angle","circ","CIRC","plane angle",6.283185307179586,[0,0,0,1,0,0,0],"circ","misc",false,null,null,1,false,false,0,"angles; circles","UCUM","Angle","Clinical","","[pi].rad","[PI].RAD","2",2,false],[false,"spere - solid angle","sph","SPH","solid angle",12.566370614359172,[0,0,0,2,0,0,0],"sph","misc",false,null,null,1,false,false,0,"speres","UCUM","Angle","Clinical","equal to the solid angle of an entire sphere = 4πsr (sr = steradian) ","[pi].sr","[PI].SR","4",4,false],[false,"metric carat","[car_m]","[CAR_M]","mass",0.2,[0,0,1,0,0,0,0],"ct<sub>m</sub>","misc",false,null,null,1,false,false,0,"carats; ct; car m","UCUM","Mass","Nonclinical","unit of mass for gemstones","g","G","2e-1",0.2,false],[false,"carat of gold alloys","[car_Au]","[CAR_AU]","mass fraction",0.041666666666666664,[0,0,0,0,0,0,0],"ct<sub><r>Au</r></sub>","misc",false,null,null,1,false,false,0,"karats; k; kt; car au; carats","UCUM","MFr","Nonclinical","unit of purity for gold alloys","/24","/24","1",1,false],[false,"Smoot","[smoot]","[SMOOT]","length",1.7018000000000002,[1,0,0,0,0,0,0],null,"misc",false,null,null,1,false,false,0,"","UCUM","Len","Nonclinical","prank unit of length from MIT","[in_i]","[IN_I]","67",67,false],[false,"meter per square seconds per square root of hertz","[m/s2/Hz^(1/2)]","[M/S2/HZ^(1/2)]","amplitude spectral density",1,[2,-3,0,0,0,0,0],null,"misc",false,null,"sqrt",1,true,false,0,"m/s2/(Hz^.5); m/s2/(Hz^(1/2)); m per s2 per Hz^1/2","UCUM","","Constant","measures amplitude spectral density, and is equal to the square root of power spectral density\\n ","m2/s4/Hz",null,null,1,false],[false,"bit - logarithmic","bit_s","BIT_S","amount of information",1,[0,0,0,0,0,0,0],"bit<sub>s</sub>","infotech",false,null,"ld",1,true,false,0,"bit-s; bit s; bit logarithmic","UCUM","LogA","Nonclinical","defined as the log base 2 of the number of distinct signals; cannot practically be used to express more than 1000 bits\\n\\nIn information theory, the definition of the amount of self-information and information entropy is often expressed with the binary logarithm (log base 2)","1",null,null,1,false],[false,"bit","bit","BIT","amount of information",1,[0,0,0,0,0,0,0],"bit","infotech",true,null,null,1,false,false,0,"bits","UCUM","","Nonclinical","dimensionless information unit of 1 used in computing and digital communications","1","1","1",1,false],[false,"byte","By","BY","amount of information",8,[0,0,0,0,0,0,0],"B","infotech",true,null,null,1,false,false,0,"bytes","UCUM","","Nonclinical","equal to 8 bits","bit","bit","8",8,false],[false,"baud","Bd","BD","signal transmission rate",1,[0,1,0,0,0,0,0],"Bd","infotech",true,null,"inv",1,false,false,0,"Bd; bauds","UCUM","Freq","Nonclinical","unit to express rate in symbols per second or pulses per second. ","s","/s","1",1,false],[false,"per twelve hour","/(12.h)","1/(12.HR)","",0.000023148148148148147,[0,-1,0,0,0,0,0],"/h",null,false,null,null,1,false,false,0,"per 12 hours; 12hrs; 12 hrs; /12hrs","LOINC","Rat","Clinical","",null,null,null,null,false],[false,"per arbitrary unit","/[arb'U]","1/[ARB'U]","",1,[0,0,0,0,0,0,0],"/arb/ U",null,false,null,null,1,false,true,0,"/arbU","LOINC","InvA ","Clinical","",null,null,null,null,false],[false,"per high power field","/[HPF]","1/[HPF]","",1,[0,0,0,0,0,0,0],"/HPF",null,false,null,null,1,false,false,0,"/HPF; per HPF","LOINC","Naric","Clinical","",null,null,null,null,false],[false,"per international unit","/[IU]","1/[IU]","",1,[0,0,0,0,0,0,0],"/i/U.",null,false,null,null,1,false,true,0,"international units; /IU; per IU","LOINC","InvA","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)",null,null,null,null,false],[false,"per low power field","/[LPF]","1/[LPF]","",1,[0,0,0,0,0,0,0],"/LPF",null,false,null,null,1,false,false,0,"/LPF; per LPF","LOINC","Naric","Clinical","",null,null,null,null,false],[false,"per 10 billion  ","/10*10","1/(10*10)","",1e-10,[0,0,0,0,0,0,0],"/10<sup>10</sup>",null,false,null,null,1,false,false,0,"/10^10; per 10*10","LOINC","NFr","Clinical","used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",null,null,null,null,false],[false,"per trillion ","/10*12","1/(10*12)","",1e-12,[0,0,0,0,0,0,0],"/10<sup>12</sup>",null,false,null,null,1,false,false,0,"/10^12; per 10*12","LOINC","NFr","Clinical","used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",null,null,null,null,false],[false,"per thousand","/10*3","1/(10*3)","",0.001,[0,0,0,0,0,0,0],"/10<sup>3</sup>",null,false,null,null,1,false,false,0,"/10^3; per 10*3","LOINC","NFr","Clinical","used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",null,null,null,null,false],[false,"per million","/10*6","1/(10*6)","",0.000001,[0,0,0,0,0,0,0],"/10<sup>6</sup>",null,false,null,null,1,false,false,0,"/10^6; per 10*6;","LOINC","NFr","Clinical","used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",null,null,null,null,false],[false,"per billion","/10*9","1/(10*9)","",1e-9,[0,0,0,0,0,0,0],"/10<sup>9</sup>",null,false,null,null,1,false,false,0,"/10^9; per 10*9","LOINC","NFr","Clinical","used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",null,null,null,null,false],[false,"per 100","/100","1/100","",0.01,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"per hundred; 10^2; 10*2","LOINC","NFr","Clinical","used for counting entities, e.g. blood cells; usually these kinds of terms have numerators such as moles or milligrams, and counting that amount per the number in the denominator",null,null,null,null,false],[false,"per 100 cells","/100{cells}","1/100","",0.01,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"/100 cells; /100cells; per hundred","LOINC","EntMass; EntNum; NFr","Clinical","",null,null,null,null,false],[false,"per 100 neutrophils","/100{neutrophils}","1/100","",0.01,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"/100 neutrophils; /100neutrophils; per hundred","LOINC","EntMass; EntNum; NFr","Clinical","",null,null,null,null,false],[false,"per 100 spermatozoa","/100{spermatozoa}","1/100","",0.01,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"/100 spermatozoa; /100spermatozoa; per hundred","LOINC","NFr","Clinical","",null,null,null,null,false],[false,"per 100 white blood cells","/100{WBCs}","1/100","",0.01,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"/100 WBCs; /100WBCs; per hundred","LOINC","Ratio; NFr","Clinical","",null,null,null,null,false],[false,"per year","/a","1/ANN","",3.168808781402895e-8,[0,-1,0,0,0,0,0],"/a",null,false,null,null,1,false,false,0,"/Years; /yrs; yearly","LOINC","NRat","Clinical","",null,null,null,null,false],[false,"per centimeter of water","/cm[H2O]","1/CM[H2O]","",0.000010197162129779282,[1,2,-1,0,0,0,0],"/cm HO<sub><r>2</r></sub>",null,false,null,null,1,false,false,0,"/cmH2O; /cm H2O; centimeters; centimetres","LOINC","InvPress","Clinical","",null,null,null,null,false],[false,"per day","/d","1/D","",0.000011574074074074073,[0,-1,0,0,0,0,0],"/d",null,false,null,null,1,false,false,0,"/dy; per day","LOINC","NRat","Clinical","",null,null,null,null,false],[false,"per deciliter","/dL","1/DL","",10000,[-3,0,0,0,0,0,0],"/dL",null,false,null,null,1,false,false,0,"per dL; /deciliter; decilitre","LOINC","NCnc","Clinical","",null,null,null,null,false],[false,"per gram","/g","1/G","",1,[0,0,-1,0,0,0,0],"/g",null,false,null,null,1,false,false,0,"/gm; /gram; per g","LOINC","NCnt","Clinical","",null,null,null,null,false],[false,"per hour","/h","1/HR","",0.0002777777777777778,[0,-1,0,0,0,0,0],"/h",null,false,null,null,1,false,false,0,"/hr; /hour; per hr","LOINC","NRat","Clinical","",null,null,null,null,false],[false,"per kilogram","/kg","1/KG","",0.001,[0,0,-1,0,0,0,0],"/kg",null,false,null,null,1,false,false,0,"per kg; per kilogram","LOINC","NCnt","Clinical","",null,null,null,null,false],[false,"per liter","/L","1/L","",1000,[-3,0,0,0,0,0,0],"/L",null,false,null,null,1,false,false,0,"/liter; litre","LOINC","NCnc","Clinical","",null,null,null,null,false],[false,"per square meter","/m2","1/M2","",1,[-2,0,0,0,0,0,0],"/m<sup>2</sup>",null,false,null,null,1,false,false,0,"/m^2; /m*2; /sq. m; per square meter; meter squared; metre","LOINC","Naric","Clinical","",null,null,null,null,false],[false,"per cubic meter","/m3","1/M3","",1,[-3,0,0,0,0,0,0],"/m<sup>3</sup>",null,false,null,null,1,false,false,0,"/m^3; /m*3; /cu. m; per cubic meter; meter cubed; per m3; metre","LOINC","NCncn","Clinical","",null,null,null,null,false],[false,"per milligram","/mg","1/MG","",1000,[0,0,-1,0,0,0,0],"/mg",null,false,null,null,1,false,false,0,"/milligram; per mg","LOINC","NCnt","Clinical","",null,null,null,null,false],[false,"per minute","/min","1/MIN","",0.016666666666666666,[0,-1,0,0,0,0,0],"/min",null,false,null,null,1,false,false,0,"/minute; per mins; breaths beats per minute","LOINC","NRat","Clinical","",null,null,null,null,false],[false,"per milliliter","/mL","1/ML","",1000000,[-3,0,0,0,0,0,0],"/mL",null,false,null,null,1,false,false,0,"/milliliter; per mL; millilitre","LOINC","NCncn","Clinical","",null,null,null,null,false],[false,"per millimeter","/mm","1/MM","",1000,[-1,0,0,0,0,0,0],"/mm",null,false,null,null,1,false,false,0,"/millimeter; per mm; millimetre","LOINC","InvLen","Clinical","",null,null,null,null,false],[false,"per month","/mo","1/MO","",3.802570537683474e-7,[0,-1,0,0,0,0,0],"/mo",null,false,null,null,1,false,false,0,"/month; per mo; monthly; month","LOINC","NRat","Clinical","",null,null,null,null,false],[false,"per second","/s","1/S","",1,[0,-1,0,0,0,0,0],"/s",null,false,null,null,1,false,false,0,"/second; /sec; per sec; frequency; Hertz; Herz; Hz; becquerels; Bq; s-1; s^-1","LOINC","NRat","Clinical","",null,null,null,null,false],[false,"per enzyme unit","/U","1/U","",9.963241120049633e-17,[0,1,0,0,0,0,0],"/U",null,false,null,null,1,false,false,-1,"/enzyme units; per U","LOINC","InvC; NCat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",null,null,null,null,false],[false,"per microliter","/uL","1/UL","",999999999.9999999,[-3,0,0,0,0,0,0],"/μL",null,false,null,null,1,false,false,0,"/microliter; microlitre; /mcl; per uL","LOINC","ACnc","Clinical","",null,null,null,null,false],[false,"per week","/wk","1/WK","",0.0000016534391534391535,[0,-1,0,0,0,0,0],"/wk",null,false,null,null,1,false,false,0,"/week; per wk; weekly, weeks","LOINC","NRat","Clinical","",null,null,null,null,false],[false,"APL unit per milliliter","[APL'U]/mL","[APL'U]/ML","biologic activity of anticardiolipin IgA",1000000,[-3,0,0,0,0,0,0],"/mL","chemical",false,null,null,1,false,true,0,"APL/mL; APL'U/mL; APL U/mL; APL/milliliter; IgA anticardiolipin units per milliliter; IgA Phospholipid Units; millilitre; biologic activity of","LOINC","ACnc","Clinical","Units for an anti phospholipid syndrome test","1","1","1",1,false],[false,"arbitrary unit per milliliter","[arb'U]/mL","[ARB'U]/ML","arbitrary",1000000,[-3,0,0,0,0,0,0],"(arb. U)/mL","chemical",false,null,null,1,false,true,0,"arb'U/mL; arbU/mL; arb U/mL; arbitrary units per milliliter; millilitre","LOINC","ACnc","Clinical","relative unit of measurement to show the ratio of test measurement to reference measurement","1","1","1",1,false],[false,"colony forming units per liter","[CFU]/L","[CFU]/L","amount of a proliferating organism",1000,[-3,0,0,0,0,0,0],"CFU/L","chemical",false,null,null,1,false,true,0,"CFU per Liter; CFU/L","LOINC","NCnc","Clinical","","1","1","1",1,false],[false,"colony forming units per milliliter","[CFU]/mL","[CFU]/ML","amount of a proliferating organism",1000000,[-3,0,0,0,0,0,0],"CFU/mL","chemical",false,null,null,1,false,true,0,"CFU per mL; CFU/mL","LOINC","NCnc","Clinical","","1","1","1",1,false],[false,"foot per foot - US","[ft_us]/[ft_us]","[FT_US]/[FT_US]","length",1,[0,0,0,0,0,0,0],"(ft<sub>us</sub>)/(ft<sub>us</sub>)","us-lengths",false,null,null,1,false,false,0,"ft/ft; ft per ft; feet per feet; visual acuity","","LenRto","Clinical","distance ratio to measure 20:20 vision","m/3937","M/3937","1200",1200,false],[false,"GPL unit per milliliter","[GPL'U]/mL","[GPL'U]/ML","biologic activity of anticardiolipin IgG",1000000,[-3,0,0,0,0,0,0],"/mL","chemical",false,null,null,1,false,true,0,"GPL U/mL; GPL'U/mL; GPL/mL; GPL U per mL; IgG Phospholipid Units per milliliters; IgG anticardiolipin units; millilitres ","LOINC","ACnc; AMass","Clinical","Units for an antiphospholipid test","1","1","1",1,false],[false,"international unit per 2 hour","[IU]/(2.h)","[IU]/(2.HR)","arbitrary",0.0001388888888888889,[0,-1,0,0,0,0,0],"(i.U.)/h","chemical",true,null,null,1,false,true,0,"IU/2hrs; IU/2 hours; IU per 2 hrs; international units per 2 hours","LOINC","ARat","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per 24 hour","[IU]/(24.h)","[IU]/(24.HR)","arbitrary",0.000011574074074074073,[0,-1,0,0,0,0,0],"(i.U.)/h","chemical",true,null,null,1,false,true,0,"IU/24hr; IU/24 hours; IU per 24 hrs; international units per 24 hours","LOINC","ARat","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per day","[IU]/d","[IU]/D","arbitrary",0.000011574074074074073,[0,-1,0,0,0,0,0],"(i.U.)/d","chemical",true,null,null,1,false,true,0,"IU/dy; IU/days; IU per dys; international units per day","LOINC","ARat","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per deciliter","[IU]/dL","[IU]/DL","arbitrary",10000,[-3,0,0,0,0,0,0],"(i.U.)/dL","chemical",true,null,null,1,false,true,0,"IU/dL; IU per dL; international units per deciliters; decilitres","LOINC","ACnc","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per gram","[IU]/g","[IU]/G","arbitrary",1,[0,0,-1,0,0,0,0],"(i.U.)/g","chemical",true,null,null,1,false,true,0,"IU/gm; IU/gram; IU per gm; IU per g; international units per gram","LOINC","ACnt","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per hour","[IU]/h","[IU]/HR","arbitrary",0.0002777777777777778,[0,-1,0,0,0,0,0],"(i.U.)/h","chemical",true,null,null,1,false,true,0,"IU/hrs; IU per hours; international units per hour","LOINC","ARat","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per kilogram","[IU]/kg","[IU]/KG","arbitrary",0.001,[0,0,-1,0,0,0,0],"(i.U.)/kg","chemical",true,null,null,1,false,true,0,"IU/kg; IU/kilogram; IU per kg; units","LOINC","ACnt","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per kilogram per day","[IU]/kg/d","([IU]/KG)/D","arbitrary",1.1574074074074074e-8,[0,-1,-1,0,0,0,0],"((i.U.)/kg)/d","chemical",true,null,null,1,false,true,0,"IU/kg/dy; IU/kg/day; IU/kilogram/day; IU per kg per day; units","LOINC","ACntRat","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per liter","[IU]/L","[IU]/L","arbitrary",1000,[-3,0,0,0,0,0,0],"(i.U.)/L","chemical",true,null,null,1,false,true,0,"IU/L; IU/liter; IU per liter; units; litre","LOINC","ACnc","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per minute","[IU]/min","[IU]/MIN","arbitrary",0.016666666666666666,[0,-1,0,0,0,0,0],"(i.U.)/min","chemical",true,null,null,1,false,true,0,"IU/min; IU/minute; IU per minute; international units","LOINC","ARat","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"international unit per milliliter","[IU]/mL","[IU]/ML","arbitrary",1000000,[-3,0,0,0,0,0,0],"(i.U.)/mL","chemical",true,null,null,1,false,true,0,"IU/mL; IU per mL; international units per milliliter; millilitre","LOINC","ACnc","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"MPL unit per milliliter","[MPL'U]/mL","[MPL'U]/ML","biologic activity of anticardiolipin IgM",1000000,[-3,0,0,0,0,0,0],"/mL","chemical",false,null,null,1,false,true,0,"MPL/mL; MPL U/mL; MPL'U/mL; IgM anticardiolipin units; IgM Phospholipid Units; millilitre ","LOINC","ACnc","Clinical","units for antiphospholipid test\\n","1","1","1",1,false],[false,"number per high power field","{#}/[HPF]","{#}/[HPF]","",1,[0,0,0,0,0,0,0],"/HPF",null,false,null,null,1,false,false,0,"#/HPF; # per HPF; number/HPF; numbers per high power field","LOINC","Naric","Clinical","",null,null,null,null,false],[false,"number per low power field","{#}/[LPF]","{#}/[LPF]","",1,[0,0,0,0,0,0,0],"/LPF",null,false,null,null,1,false,false,0,"#/LPF; # per LPF; number/LPF; numbers per low power field","LOINC","Naric","Clinical","",null,null,null,null,false],[false,"IgA antiphosphatidylserine unit ","{APS'U}","{APS'U}","",1,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"APS Unit; Phosphatidylserine Antibody IgA Units","LOINC","ACnc","Clinical","unit for antiphospholipid test",null,null,null,null,false],[false,"EIA index","{EIA_index}","{EIA_index}","",1,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"enzyme immunoassay index","LOINC","ACnc","Clinical","",null,null,null,null,false],[false,"kaolin clotting time","{KCT'U}","{KCT'U}","",1,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"KCT","LOINC","Time","Clinical","sensitive test to detect lupus anticoagulants; measured in seconds",null,null,null,null,false],[false,"IgM antiphosphatidylserine unit","{MPS'U}","{MPS'U}","",1,[0,0,0,0,0,0,0],null,null,false,null,null,1,false,false,0,"Phosphatidylserine Antibody IgM Measurement ","LOINC","ACnc","Clinical","",null,null,null,null,false],[false,"trillion per liter","10*12/L","(10*12)/L","number",1000000000000000,[-3,0,0,0,0,0,0],"(10<sup>12</sup>)/L","dimless",false,null,null,1,false,false,0,"10^12/L; 10*12 per Liter; trillion per liter; litre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"10^3 (used for cell count)","10*3","10*3","number",1000,[0,0,0,0,0,0,0],"10<sup>3</sup>","dimless",false,null,null,1,false,false,0,"10^3; thousand","LOINC","Num","Clinical","usually used for counting entities (e.g. blood cells) per volume","1","1","10",10,false],[false,"thousand per liter","10*3/L","(10*3)/L","number",1000000,[-3,0,0,0,0,0,0],"(10<sup>3</sup>)/L","dimless",false,null,null,1,false,false,0,"10^3/L; 10*3 per liter; litre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"thousand per milliliter","10*3/mL","(10*3)/ML","number",1000000000,[-3,0,0,0,0,0,0],"(10<sup>3</sup>)/mL","dimless",false,null,null,1,false,false,0,"10^3/mL; 10*3 per mL; thousand per milliliter; millilitre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"thousand per microliter","10*3/uL","(10*3)/UL","number",999999999999.9999,[-3,0,0,0,0,0,0],"(10<sup>3</sup>)/μL","dimless",false,null,null,1,false,false,0,"10^3/uL; 10*3 per uL; thousand per microliter; microlitre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"10 thousand per microliter","10*4/uL","(10*4)/UL","number",10000000000000,[-3,0,0,0,0,0,0],"(10<sup>4</sup>)/μL","dimless",false,null,null,1,false,false,0,"10^4/uL; 10*4 per uL; microlitre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"10^5 ","10*5","10*5","number",100000,[0,0,0,0,0,0,0],"10<sup>5</sup>","dimless",false,null,null,1,false,false,0,"one hundred thousand","LOINC","Num","Clinical","","1","1","10",10,false],[false,"10^6","10*6","10*6","number",1000000,[0,0,0,0,0,0,0],"10<sup>6</sup>","dimless",false,null,null,1,false,false,0,"","LOINC","Num","Clinical","","1","1","10",10,false],[false,"million colony forming unit per liter","10*6.[CFU]/L","((10*6).[CFU])/L","number",1000000000,[-3,0,0,0,0,0,0],"((10<sup>6</sup>).CFU)/L","dimless",false,null,null,1,false,true,0,"10*6 CFU/L; 10^6 CFU/L; 10^6CFU; 10^6 CFU per liter; million colony forming units; litre","LOINC","ACnc","Clinical","","1","1","10",10,false],[false,"million international unit","10*6.[IU]","(10*6).[IU]","number",1000000,[0,0,0,0,0,0,0],"(10<sup>6</sup>).(i.U.)","dimless",false,null,null,1,false,true,0,"10*6 IU; 10^6 IU; international units","LOINC","arb","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","1","1","10",10,false],[false,"million per 24 hour","10*6/(24.h)","(10*6)/(24.HR)","number",11.574074074074074,[0,-1,0,0,0,0,0],"(10<sup>6</sup>)/h","dimless",false,null,null,1,false,false,0,"10*6/24hrs; 10^6/24 hrs; 10*6 per 24 hrs; 10^6 per 24 hours","LOINC","NRat","Clinical","","1","1","10",10,false],[false,"million per kilogram","10*6/kg","(10*6)/KG","number",1000,[0,0,-1,0,0,0,0],"(10<sup>6</sup>)/kg","dimless",false,null,null,1,false,false,0,"10^6/kg; 10*6 per kg; 10*6 per kilogram; millions","LOINC","NCnt","Clinical","","1","1","10",10,false],[false,"million per liter","10*6/L","(10*6)/L","number",1000000000,[-3,0,0,0,0,0,0],"(10<sup>6</sup>)/L","dimless",false,null,null,1,false,false,0,"10^6/L; 10*6 per Liter; 10^6 per Liter; litre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"million per milliliter","10*6/mL","(10*6)/ML","number",1000000000000,[-3,0,0,0,0,0,0],"(10<sup>6</sup>)/mL","dimless",false,null,null,1,false,false,0,"10^6/mL; 10*6 per mL; 10*6 per milliliter; millilitre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"million per microliter","10*6/uL","(10*6)/UL","number",1000000000000000,[-3,0,0,0,0,0,0],"(10<sup>6</sup>)/μL","dimless",false,null,null,1,false,false,0,"10^6/uL; 10^6 per uL; 10^6/mcl; 10^6 per mcl; 10^6 per microliter; microlitre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"10^8","10*8","10*8","number",100000000,[0,0,0,0,0,0,0],"10<sup>8</sup>","dimless",false,null,null,1,false,false,0,"100 million; one hundred million; 10^8","LOINC","Num","Clinical","","1","1","10",10,false],[false,"billion per liter","10*9/L","(10*9)/L","number",1000000000000,[-3,0,0,0,0,0,0],"(10<sup>9</sup>)/L","dimless",false,null,null,1,false,false,0,"10^9/L; 10*9 per Liter; litre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"billion per milliliter","10*9/mL","(10*9)/ML","number",1000000000000000,[-3,0,0,0,0,0,0],"(10<sup>9</sup>)/mL","dimless",false,null,null,1,false,false,0,"10^9/mL; 10*9 per mL; 10^9 per mL; 10*9 per milliliter; millilitre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"billion per microliter","10*9/uL","(10*9)/UL","number",1000000000000000000,[-3,0,0,0,0,0,0],"(10<sup>9</sup>)/μL","dimless",false,null,null,1,false,false,0,"10^9/uL; 10^9 per uL; 10^9/mcl; 10^9 per mcl; 10*9 per uL; 10*9 per mcl; 10*9/mcl; 10^9 per microliter; microlitre","LOINC","NCncn","Clinical","","1","1","10",10,false],[false,"10 liter per minute per square meter","10.L/(min.m2)","(10.L)/(MIN.M2)","",0.00016666666666666666,[1,-1,0,0,0,0,0],"L/(min.(m<sup>2</sup>))",null,false,null,null,1,false,false,0,"10 liters per minutes per square meter; 10 L per min per m2; m^2; 10 L/(min*m2); 10L/(min*m^2); litres; sq. meter; metre; meters squared","LOINC","ArVRat","Clinical","",null,null,null,null,false],[false,"10 liter per minute","10.L/min","(10.L)/MIN","",0.00016666666666666666,[3,-1,0,0,0,0,0],"L/min",null,false,null,null,1,false,false,0,"10 liters per minute; 10 L per min; 10L; 10 L/min; litre","LOINC","VRat","Clinical","",null,null,null,null,false],[false,"10 micronewton second per centimeter to the fifth power per square meter","10.uN.s/(cm5.m2)","((10.UN).S)/(CM5.M2)","",100000000,[-6,-1,1,0,0,0,0],"(μN.s)/(cm<sup>5</sup>).(m<sup>2</sup>)",null,false,null,null,1,false,false,0,"dyne seconds per centimeter5 and square meter; dyn.s/(cm5.m2); dyn.s/cm5/m2; cm^5; m^2","LOINC","","Clinical","unit to measure systemic vascular resistance per body surface area",null,null,null,null,false],[false,"24 hour","24.h","24.HR","",86400,[0,1,0,0,0,0,0],"h",null,false,null,null,1,false,false,0,"24hrs; 24 hrs; 24 hours; days; dy","LOINC","Time","Clinical","",null,null,null,null,false],[false,"ampere per meter","A/m","A/M","electric current",1,[-1,-1,0,0,0,1,0],"A/m","si",true,null,null,1,false,false,0,"A/m; amp/meter; magnetic field strength; H; B; amperes per meter; metre","LOINC","","Clinical","unit of magnetic field strength","C/s","C/S","1",1,false],[false,"centigram","cg","CG","mass",0.01,[0,0,1,0,0,0,0],"cg",null,false,"M",null,1,false,false,0,"centigrams; cg; cgm","LOINC","Mass","Clinical","",null,null,null,null,false],[false,"centiliter","cL","CL","volume",0.00001,[3,0,0,0,0,0,0],"cL","iso1000",true,null,null,1,false,false,0,"centiliters; centilitres","LOINC","Vol","Clinical","","l",null,"1",1,false],[false,"centimeter","cm","CM","length",0.01,[1,0,0,0,0,0,0],"cm",null,false,"L",null,1,false,false,0,"centimeters; centimetres","LOINC","Len","Clinical","",null,null,null,null,false],[false,"centimeter of water","cm[H2O]","CM[H2O]","pressure",98066.5,[-1,-2,1,0,0,0,0],"cm HO<sub><r>2</r></sub>","clinical",true,null,null,1,false,false,0,"cm H2O; cmH2O; centimetres; pressure","LOINC","Pres","Clinical","unit of pressure mostly applies to blood pressure","kPa","KPAL","980665e-5",9.80665,false],[false,"centimeter of water per liter per second","cm[H2O]/L/s","(CM[H2O]/L)/S","pressure",98066500,[-4,-3,1,0,0,0,0],"((cm HO<sub><r>2</r></sub>)/L)/s","clinical",true,null,null,1,false,false,0,"cm[H2O]/(L/s); cm[H2O].s/L; cm H2O/L/sec; cmH2O/L/sec; cmH2O/Liter; cmH2O per L per secs; centimeters of water per liters per second; centimetres; litres; cm[H2O]/(L/s)","LOINC","PresRat","Clinical","unit used to measure mean pulmonary resistance","kPa","KPAL","980665e-5",9.80665,false],[false,"centimeter of water per second per meter","cm[H2O]/s/m","(CM[H2O]/S)/M","pressure",98066.5,[-2,-3,1,0,0,0,0],"((cm HO<sub><r>2</r></sub>)/s)/m","clinical",true,null,null,1,false,false,0,"cm[H2O]/(s.m); cm H2O/s/m; cmH2O; cmH2O/sec/m; cmH2O per secs per meters; centimeters of water per seconds per meter; centimetres; metre","LOINC","PresRat","Clinical","unit used to measure pulmonary pressure time product","kPa","KPAL","980665e-5",9.80665,false],[false,"centimeter of mercury","cm[Hg]","CM[HG]","pressure",1333220,[-1,-2,1,0,0,0,0],"cm Hg","clinical",true,null,null,1,false,false,0,"centimeters of mercury; centimetres; cmHg; cm Hg","LOINC","Pres","Clinical","unit of pressure where 1 cmHg = 10 torr","kPa","KPAL","133.3220",133.322,false],[false,"square centimeter","cm2","CM2","length",0.0001,[2,0,0,0,0,0,0],"cm<sup>2</sup>",null,false,"L",null,1,false,false,0,"cm^2; sq cm; centimeters squared; square centimeters; centimetre; area","LOINC","Area","Clinical","",null,null,null,null,false],[false,"square centimeter per second","cm2/s","CM2/S","length",0.0001,[2,-1,0,0,0,0,0],"(cm<sup>2</sup>)/s",null,false,"L",null,1,false,false,0,"cm^2/sec; square centimeters per second; sq cm per sec; cm2; centimeters squared; centimetres","LOINC","AreaRat","Clinical","",null,null,null,null,false],[false,"centipoise","cP","CP","dynamic viscosity",1.0000000000000002,[-1,-1,1,0,0,0,0],"cP","cgs",true,null,null,1,false,false,0,"cps; centiposes","LOINC","Visc","Clinical","unit of dynamic viscosity in the CGS system with base units: 10^−3 Pa.s = 1 mPa·.s (1 millipascal second)","dyn.s/cm2","DYN.S/CM2","1",1,false],[false,"centistoke","cSt","CST","kinematic viscosity",0.000001,[2,-1,0,0,0,0,0],"cSt","cgs",true,null,null,1,false,false,0,"centistokes","LOINC","Visc","Clinical","unit for kinematic viscosity with base units of mm^2/s (square millimeter per second)","cm2/s","CM2/S","1",1,false],[false,"dekaliter per minute","daL/min","DAL/MIN","volume",0.00016666666666666666,[3,-1,0,0,0,0,0],"daL/min","iso1000",true,null,null,1,false,false,0,"dekalitres; dekaliters per minute; per min","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"dekaliter per minute per square meter","daL/min/m2","(DAL/MIN)/M2","volume",0.00016666666666666666,[1,-1,0,0,0,0,0],"(daL/min)/(m<sup>2</sup>)","iso1000",true,null,null,1,false,false,0,"daL/min/m^2; daL/minute/m2; sq. meter; dekaliters per minutes per square meter; meter squared; dekalitres; metre","LOINC","ArVRat","Clinical","The area usually is the body surface area used to normalize cardiovascular measures for patient's size","l",null,"1",1,false],[false,"decibel","dB","DB","level",1,[0,0,0,0,0,0,0],"dB","levels",true,null,"lg",0.1,true,false,0,"decibels","LOINC","LogRto","Clinical","unit most commonly used in acoustics as unit of sound pressure level. (also see B[SPL] or bel sound pressure level). ","1",null,null,1,false],[false,"degree per second","deg/s","DEG/S","plane angle",0.017453292519943295,[0,-1,0,1,0,0,0],"°/s","iso1000",false,null,null,1,false,false,0,"deg/sec; deg per sec; °/sec; twist rate; angular speed; rotational speed","LOINC","ARat","Clinical","unit of angular (rotational) speed used to express turning rate","[pi].rad/360","[PI].RAD/360","2",2,false],[false,"decigram","dg","DG","mass",0.1,[0,0,1,0,0,0,0],"dg",null,false,"M",null,1,false,false,0,"decigrams; dgm; 0.1 grams; 1/10 gm","LOINC","Mass","Clinical","equal to 1/10 gram",null,null,null,null,false],[false,"deciliter","dL","DL","volume",0.0001,[3,0,0,0,0,0,0],"dL","iso1000",true,null,null,1,false,false,0,"deciliters; decilitres; 0.1 liters; 1/10 L","LOINC","Vol","Clinical","equal to 1/10 liter","l",null,"1",1,false],[false,"decimeter","dm","DM","length",0.1,[1,0,0,0,0,0,0],"dm",null,false,"L",null,1,false,false,0,"decimeters; decimetres; 0.1 meters; 1/10 m; 10 cm; centimeters","LOINC","Len","Clinical","equal to 1/10 meter or 10 centimeters",null,null,null,null,false],[false,"square decimeter per square second","dm2/s2","DM2/S2","length",0.010000000000000002,[2,-2,0,0,0,0,0],"(dm<sup>2</sup>)/(s<sup>2</sup>)",null,false,"L",null,1,false,false,0,"dm2 per s2; dm^2/s^2; decimeters squared per second squared; sq dm; sq sec","LOINC","EngMass (massic energy)","Clinical","units for energy per unit mass or Joules per kilogram (J/kg = kg.m2/s2/kg = m2/s2) ",null,null,null,null,false],[false,"dyne second per centimeter per square meter","dyn.s/(cm.m2)","(DYN.S)/(CM.M2)","force",1,[-2,-1,1,0,0,0,0],"(dyn.s)/(cm.(m<sup>2</sup>))","cgs",true,null,null,1,false,false,0,"(dyn*s)/(cm*m2); (dyn*s)/(cm*m^2); dyn s per cm per m2; m^2; dyne seconds per centimeters per square meter; centimetres; sq. meter; squared","LOINC","","Clinical","","g.cm/s2","G.CM/S2","1",1,false],[false,"dyne second per centimeter","dyn.s/cm","(DYN.S)/CM","force",1,[0,-1,1,0,0,0,0],"(dyn.s)/cm","cgs",true,null,null,1,false,false,0,"(dyn*s)/cm; dyn sec per cm; seconds; centimetre; dyne seconds","LOINC","","Clinical","","g.cm/s2","G.CM/S2","1",1,false],[false,"equivalent per liter","eq/L","EQ/L","amount of substance",6.0221366999999994e+26,[-3,0,0,0,0,0,0],"eq/L","chemical",true,null,null,1,false,false,1,"eq/liter; eq/litre; eqs; equivalents per liter; litre","LOINC","SCnc","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"equivalent per milliliter","eq/mL","EQ/ML","amount of substance",6.0221367e+29,[-3,0,0,0,0,0,0],"eq/mL","chemical",true,null,null,1,false,false,1,"equivalent/milliliter; equivalents per milliliter; eq per mL; millilitre","LOINC","SCnc","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"equivalent per millimole","eq/mmol","EQ/MMOL","amount of substance",1000,[0,0,0,0,0,0,0],"eq/mmol","chemical",true,null,null,1,false,false,0,"equivalent/millimole; equivalents per millimole; eq per mmol","LOINC","SRto","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"equivalent per micromole","eq/umol","EQ/UMOL","amount of substance",1000000,[0,0,0,0,0,0,0],"eq/μmol","chemical",true,null,null,1,false,false,0,"equivalent/micromole; equivalents per micromole; eq per umol","LOINC","SRto","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"femtogram","fg","FG","mass",1e-15,[0,0,1,0,0,0,0],"fg",null,false,"M",null,1,false,false,0,"fg; fgm; femtograms; weight","LOINC","Mass","Clinical","equal to 10^-15 grams",null,null,null,null,false],[false,"femtoliter","fL","FL","volume",1e-18,[3,0,0,0,0,0,0],"fL","iso1000",true,null,null,1,false,false,0,"femtolitres; femtoliters","LOINC","Vol; EntVol","Clinical","equal to 10^-15 liters","l",null,"1",1,false],[false,"femtometer","fm","FM","length",1e-15,[1,0,0,0,0,0,0],"fm",null,false,"L",null,1,false,false,0,"femtometres; femtometers","LOINC","Len","Clinical","equal to 10^-15 meters",null,null,null,null,false],[false,"femtomole","fmol","FMOL","amount of substance",602213670,[0,0,0,0,0,0,0],"fmol","si",true,null,null,1,false,false,1,"femtomoles","LOINC","EntSub","Clinical","equal to 10^-15 moles","10*23","10*23","6.0221367",6.0221367,false],[false,"femtomole per gram","fmol/g","FMOL/G","amount of substance",602213670,[0,0,-1,0,0,0,0],"fmol/g","si",true,null,null,1,false,false,1,"femtomoles; fmol/gm; fmol per gm","LOINC","SCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"femtomole per liter","fmol/L","FMOL/L","amount of substance",602213670000,[-3,0,0,0,0,0,0],"fmol/L","si",true,null,null,1,false,false,1,"femtomoles; fmol per liter; litre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"femtomole per milligram","fmol/mg","FMOL/MG","amount of substance",602213670000,[0,0,-1,0,0,0,0],"fmol/mg","si",true,null,null,1,false,false,1,"fmol per mg; femtomoles","LOINC","SCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"femtomole per milliliter","fmol/mL","FMOL/ML","amount of substance",602213670000000,[-3,0,0,0,0,0,0],"fmol/mL","si",true,null,null,1,false,false,1,"femtomoles; millilitre; fmol per mL; fmol per milliliter","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"gram meter","g.m","G.M","mass",1,[1,0,1,0,0,0,0],"g.m",null,false,"M",null,1,false,false,0,"g*m; gxm; meters; metres","LOINC","Enrg","Clinical","Unit for measuring stroke work (heart work)",null,null,null,null,false],[false,"gram per 100 gram","g/(100.g)","G/(100.G)","mass",0.01,[0,0,0,0,0,0,0],"g/g",null,false,"M",null,1,false,false,0,"g/100 gm; 100gm; grams per 100 grams; gm per 100 gm","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"gram per 12 hour","g/(12.h)","G/(12.HR)","mass",0.000023148148148148147,[0,-1,1,0,0,0,0],"g/h",null,false,"M",null,1,false,false,0,"gm/12hrs; 12 hrs; gm per 12 hrs; 12hrs; grams per 12 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per 24 hour","g/(24.h)","G/(24.HR)","mass",0.000011574074074074073,[0,-1,1,0,0,0,0],"g/h",null,false,"M",null,1,false,false,0,"gm/24hrs; gm/24 hrs; gm per 24 hrs; 24hrs; grams per 24 hours; gm/dy; gm per dy; grams per day","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per 3 days","g/(3.d)","G/(3.D)","mass",0.000003858024691358025,[0,-1,1,0,0,0,0],"g/d",null,false,"M",null,1,false,false,0,"gm/3dy; gm/3 dy; gm per 3 days; grams","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per 4 hour","g/(4.h)","G/(4.HR)","mass",0.00006944444444444444,[0,-1,1,0,0,0,0],"g/h",null,false,"M",null,1,false,false,0,"gm/4hrs; gm/4 hrs; gm per 4 hrs; 4hrs; grams per 4 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per 48 hour","g/(48.h)","G/(48.HR)","mass",0.000005787037037037037,[0,-1,1,0,0,0,0],"g/h",null,false,"M",null,1,false,false,0,"gm/48hrs; gm/48 hrs; gm per 48 hrs; 48hrs; grams per 48 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per 5 hour","g/(5.h)","G/(5.HR)","mass",0.00005555555555555556,[0,-1,1,0,0,0,0],"g/h",null,false,"M",null,1,false,false,0,"gm/5hrs; gm/5 hrs; gm per 5 hrs; 5hrs; grams per 5 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per 6 hour","g/(6.h)","G/(6.HR)","mass",0.000046296296296296294,[0,-1,1,0,0,0,0],"g/h",null,false,"M",null,1,false,false,0,"gm/6hrs; gm/6 hrs; gm per 6 hrs; 6hrs; grams per 6 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per 72 hour","g/(72.h)","G/(72.HR)","mass",0.000003858024691358025,[0,-1,1,0,0,0,0],"g/h",null,false,"M",null,1,false,false,0,"gm/72hrs; gm/72 hrs; gm per 72 hrs; 72hrs; grams per 72 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per cubic centimeter","g/cm3","G/CM3","mass",999999.9999999999,[-3,0,1,0,0,0,0],"g/(cm<sup>3</sup>)",null,false,"M",null,1,false,false,0,"g/cm^3; gm per cm3; g per cm^3; grams per centimeter cubed; cu. cm; centimetre; g/mL; gram per milliliter; millilitre","LOINC","MCnc","Clinical","g/cm3 = g/mL",null,null,null,null,false],[false,"gram per day","g/d","G/D","mass",0.000011574074074074073,[0,-1,1,0,0,0,0],"g/d",null,false,"M",null,1,false,false,0,"gm/dy; gm per dy; grams per day; gm/24hrs; gm/24 hrs; gm per 24 hrs; 24hrs; grams per 24 hours; serving","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per deciliter","g/dL","G/DL","mass",10000,[-3,0,1,0,0,0,0],"g/dL",null,false,"M",null,1,false,false,0,"gm/dL; gm per dL; grams per deciliter; decilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"gram per gram","g/g","G/G","mass",1,[0,0,0,0,0,0,0],"g/g",null,false,"M",null,1,false,false,0,"gm; grams","LOINC","MRto ","Clinical","",null,null,null,null,false],[false,"gram per hour","g/h","G/HR","mass",0.0002777777777777778,[0,-1,1,0,0,0,0],"g/h",null,false,"M",null,1,false,false,0,"gm/hr; gm per hr; grams; intake; output","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per hour per square meter","g/h/m2","(G/HR)/M2","mass",0.0002777777777777778,[-2,-1,1,0,0,0,0],"(g/h)/(m<sup>2</sup>)",null,false,"M",null,1,false,false,0,"gm/hr/m2; gm/h/m2; /m^2; sq. m; g per hr per m2; grams per hours per square meter; meter squared; metre","LOINC","ArMRat","Clinical","",null,null,null,null,false],[false,"gram per kilogram","g/kg ","G/KG","mass",0.001,[0,0,0,0,0,0,0],"g/kg",null,false,"M",null,1,false,false,0,"g per kg; gram per kilograms","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"gram per kilogram per 8 hour ","g/kg/(8.h)","(G/KG)/(8.HR)","mass",3.472222222222222e-8,[0,-1,0,0,0,0,0],"(g/kg)/h",null,false,"M",null,1,false,false,0,"g/(8.kg.h); gm/kg/8hrs; 8 hrs; g per kg per 8 hrs; 8hrs; grams per kilograms per 8 hours; shift","LOINC","MCntRat; RelMRat","Clinical","unit often used to describe mass in grams of protein consumed in a 8 hours, divided by the subject's body weight in kilograms. Also used to measure mass dose rate per body mass",null,null,null,null,false],[false,"gram per kilogram per day","g/kg/d","(G/KG)/D","mass",1.1574074074074074e-8,[0,-1,0,0,0,0,0],"(g/kg)/d",null,false,"M",null,1,false,false,0,"g/(kg.d); gm/kg/dy; gm per kg per dy; grams per kilograms per day","LOINC","RelMRat","Clinical","unit often used to describe mass in grams of protein consumed in a day, divided by the subject's body weight in kilograms. Also used to measure mass dose rate per body mass",null,null,null,null,false],[false,"gram per kilogram per hour","g/kg/h","(G/KG)/HR","mass",2.7777777777777776e-7,[0,-1,0,0,0,0,0],"(g/kg)/h",null,false,"M",null,1,false,false,0,"g/(kg.h); g/kg/hr; g per kg per hrs; grams per kilograms per hour","LOINC","MCntRat; RelMRat","Clinical","unit used to measure mass dose rate per body mass",null,null,null,null,false],[false,"gram per kilogram per minute","g/kg/min","(G/KG)/MIN","mass",0.000016666666666666667,[0,-1,0,0,0,0,0],"(g/kg)/min",null,false,"M",null,1,false,false,0,"g/(kg.min); g/kg/min; g per kg per min; grams per kilograms per minute","LOINC","MCntRat; RelMRat","Clinical","unit used to measure mass dose rate per body mass",null,null,null,null,false],[false,"gram per liter","g/L","G/L","mass",1000,[-3,0,1,0,0,0,0],"g/L",null,false,"M",null,1,false,false,0,"gm per liter; g/liter; grams per liter; litre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"gram per square meter","g/m2","G/M2","mass",1,[-2,0,1,0,0,0,0],"g/(m<sup>2</sup>)",null,false,"M",null,1,false,false,0,"g/m^2; gram/square meter; g/sq m; g per m2; g per m^2; grams per square meter; meters squared; metre","LOINC","ArMass","Clinical","Tests measure myocardial mass (heart ventricle system) per body surface area; unit used to measure mass dose per body surface area",null,null,null,null,false],[false,"gram per milligram","g/mg","G/MG","mass",1000,[0,0,0,0,0,0,0],"g/mg",null,false,"M",null,1,false,false,0,"g per mg; grams per milligram","LOINC","MCnt; MRto","Clinical","",null,null,null,null,false],[false,"gram per minute","g/min","G/MIN","mass",0.016666666666666666,[0,-1,1,0,0,0,0],"g/min",null,false,"M",null,1,false,false,0,"g per min; grams per minute; gram/minute","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"gram per milliliter","g/mL","G/ML","mass",1000000,[-3,0,1,0,0,0,0],"g/mL",null,false,"M",null,1,false,false,0,"g per mL; grams per milliliter; millilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"gram per millimole","g/mmol","G/MMOL","mass",1.6605401866749388e-21,[0,0,1,0,0,0,0],"g/mmol",null,false,"M",null,1,false,false,-1,"grams per millimole; g per mmol","LOINC","Ratio","Clinical","",null,null,null,null,false],[false,"joule per liter","J/L","J/L","energy",1000000,[-1,-2,1,0,0,0,0],"J/L","si",true,null,null,1,false,false,0,"joules per liter; litre; J per L","LOINC","EngCnc","Clinical","","N.m","N.M","1",1,false],[false,"degree Kelvin per Watt","K/W","K/W","temperature",0.001,[-2,3,-1,0,1,0,0],"K/W",null,false,"C",null,1,false,false,0,"degree Kelvin/Watt; K per W; thermal ohm; thermal resistance; degrees","LOINC","TempEngRat","Clinical","unit for absolute thermal resistance equal to the reciprocal of thermal conductance. Unit used for tests to measure work of breathing",null,null,null,null,false],[false,"kilo international unit per liter","k[IU]/L","K[IU]/L","arbitrary",1000000,[-3,0,0,0,0,0,0],"(ki.U.)/L","chemical",true,null,null,1,false,true,0,"kIU/L; kIU per L; kIU per liter; kilo international units; litre; allergens; allergy units","LOINC","ACnc","Clinical","IgE has an WHO reference standard so IgE allergen testing can be reported as k[IU]/L","[iU]","[IU]","1",1,false],[false,"kilo international unit per milliliter","k[IU]/mL","K[IU]/ML","arbitrary",1000000000,[-3,0,0,0,0,0,0],"(ki.U.)/mL","chemical",true,null,null,1,false,true,0,"kIU/mL; kIU per mL; kIU per milliliter; kilo international units; millilitre; allergens; allergy units","LOINC","ACnc","Clinical","IgE has an WHO reference standard so IgE allergen testing can be reported as k[IU]/mL","[iU]","[IU]","1",1,false],[false,"katal per kilogram","kat/kg","KAT/KG","catalytic activity",602213670000000000000,[0,-1,-1,0,0,0,0],"kat/kg","chemical",true,null,null,1,false,false,1,"kat per kg; katals per kilogram; mol/s/kg; moles per seconds per kilogram","LOINC","CCnt","Clinical","kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.","mol/s","MOL/S","1",1,false],[false,"katal per liter","kat/L","KAT/L","catalytic activity",6.0221366999999994e+26,[-3,-1,0,0,0,0,0],"kat/L","chemical",true,null,null,1,false,false,1,"kat per L; katals per liter; litre; mol/s/L; moles per seconds per liter","LOINC","CCnc","Clinical","kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.","mol/s","MOL/S","1",1,false],[false,"kilocalorie","kcal","KCAL","energy",4184000,[2,-2,1,0,0,0,0],"kcal","heat",true,null,null,1,false,false,0,"kilogram calories; large calories; food calories; kcals","LOINC","EngRat","Clinical","It is equal to 1000 calories (equal to 4.184 kJ). But in practical usage, kcal refers to food calories which excludes caloric content in fiber and other constitutes that is not digestible by humans. Also see nutrition label Calories ([Cal])","cal_th","CAL_TH","1",1,false],[false,"kilocalorie per 24 hour","kcal/(24.h)","KCAL/(24.HR)","energy",48.425925925925924,[2,-3,1,0,0,0,0],"kcal/h","heat",true,null,null,1,false,false,0,"kcal/24hrs; kcal/24 hrs; kcal per 24hrs; kilocalories per 24 hours; kilojoules; kJ/24hr; kJ/(24.h); kJ/dy; kilojoules per days; intake; calories burned; metabolic rate; food calories","","EngRat","Clinical","","cal_th","CAL_TH","1",1,false],[false,"kilocalorie per ounce","kcal/[oz_av]","KCAL/[OZ_AV]","energy",147586.25679704445,[2,-2,0,0,0,0,0],"kcal/oz","heat",true,null,null,1,false,false,0,"kcal/oz; kcal per ozs; large calories per ounces; food calories; servings; international","LOINC","EngCnt","Clinical","used in nutrition to represent calorie of food","cal_th","CAL_TH","1",1,false],[false,"kilocalorie per day","kcal/d","KCAL/D","energy",48.425925925925924,[2,-3,1,0,0,0,0],"kcal/d","heat",true,null,null,1,false,false,0,"kcal/dy; kcal per day; kilocalories per days; kilojoules; kJ/dy; kilojoules per days; intake; calories burned; metabolic rate; food calories","LOINC","EngRat","Clinical","unit in nutrition for food intake (measured in calories) in a day","cal_th","CAL_TH","1",1,false],[false,"kilocalorie per hour","kcal/h","KCAL/HR","energy",1162.2222222222222,[2,-3,1,0,0,0,0],"kcal/h","heat",true,null,null,1,false,false,0,"kcal/hrs; kcals per hr; intake; kilocalories per hours; kilojoules","LOINC","EngRat","Clinical","used in nutrition to represent caloric requirement or consumption","cal_th","CAL_TH","1",1,false],[false,"kilocalorie per kilogram per 24 hour","kcal/kg/(24.h)","(KCAL/KG)/(24.HR)","energy",0.04842592592592593,[2,-3,0,0,0,0,0],"(kcal/kg)/h","heat",true,null,null,1,false,false,0,"kcal/kg/24hrs; 24 hrs; kcal per kg per 24hrs; kilocalories per kilograms per 24 hours; kilojoules","LOINC","EngCntRat","Clinical","used in nutrition to represent caloric requirement per day based on subject's body weight in kilograms","cal_th","CAL_TH","1",1,false],[false,"kilogram","kg","KG","mass",1000,[0,0,1,0,0,0,0],"kg",null,false,"M",null,1,false,false,0,"kilograms; kgs","LOINC","Mass","Clinical","",null,null,null,null,false],[false,"kilogram meter per second","kg.m/s","(KG.M)/S","mass",1000,[1,-1,1,0,0,0,0],"(kg.m)/s",null,false,"M",null,1,false,false,0,"kg*m/s; kg.m per sec; kg*m per sec; p; momentum","LOINC","","Clinical","unit for momentum =  mass times velocity",null,null,null,null,false],[false,"kilogram per second per square meter","kg/(s.m2)","KG/(S.M2)","mass",1000,[-2,-1,1,0,0,0,0],"kg/(s.(m<sup>2</sup>))",null,false,"M",null,1,false,false,0,"kg/(s*m2); kg/(s*m^2); kg per s per m2; per sec; per m^2; kilograms per seconds per square meter; meter squared; metre","LOINC","ArMRat","Clinical","",null,null,null,null,false],[false,"kilogram per hour","kg/h","KG/HR","mass",0.2777777777777778,[0,-1,1,0,0,0,0],"kg/h",null,false,"M",null,1,false,false,0,"kg/hr; kg per hr; kilograms per hour","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"kilogram per liter","kg/L","KG/L","mass",1000000,[-3,0,1,0,0,0,0],"kg/L",null,false,"M",null,1,false,false,0,"kg per liter; litre; kilograms","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"kilogram per square meter","kg/m2","KG/M2","mass",1000,[-2,0,1,0,0,0,0],"kg/(m<sup>2</sup>)",null,false,"M",null,1,false,false,0,"kg/m^2; kg/sq. m; kg per m2; per m^2; per sq. m; kilograms; meter squared; metre; BMI","LOINC","Ratio","Clinical","units for body mass index (BMI)",null,null,null,null,false],[false,"kilogram per cubic meter","kg/m3","KG/M3","mass",1000,[-3,0,1,0,0,0,0],"kg/(m<sup>3</sup>)",null,false,"M",null,1,false,false,0,"kg/m^3; kg/cu. m; kg per m3; per m^3; per cu. m; kilograms; meters cubed; metre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"kilogram per minute","kg/min","KG/MIN","mass",16.666666666666668,[0,-1,1,0,0,0,0],"kg/min",null,false,"M",null,1,false,false,0,"kilogram/minute; kg per min; kilograms per minute","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"kilogram per mole","kg/mol","KG/MOL","mass",1.6605401866749388e-21,[0,0,1,0,0,0,0],"kg/mol",null,false,"M",null,1,false,false,-1,"kilogram/mole; kg per mol; kilograms per mole","LOINC","SCnt","Clinical","",null,null,null,null,false],[false,"kilogram per second","kg/s","KG/S","mass",1000,[0,-1,1,0,0,0,0],"kg/s",null,false,"M",null,1,false,false,0,"kg/sec; kilogram/second; kg per sec; kilograms; second","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"kiloliter","kL","KL","volume",1,[3,0,0,0,0,0,0],"kL","iso1000",true,null,null,1,false,false,0,"kiloliters; kilolitres; m3; m^3; meters cubed; metre","LOINC","Vol","Clinical","","l",null,"1",1,false],[false,"kilometer","km","KM","length",1000,[1,0,0,0,0,0,0],"km",null,false,"L",null,1,false,false,0,"kilometers; kilometres; distance","LOINC","Len","Clinical","",null,null,null,null,false],[false,"kilopascal","kPa","KPAL","pressure",1000000,[-1,-2,1,0,0,0,0],"kPa","si",true,null,null,1,false,false,0,"kilopascals; pressure","LOINC","Pres; PPresDiff","Clinical","","N/m2","N/M2","1",1,false],[false,"kilosecond","ks","KS","time",1000,[0,1,0,0,0,0,0],"ks",null,false,"T",null,1,false,false,0,"kiloseconds; ksec","LOINC","Time","Clinical","",null,null,null,null,false],[false,"kilo enzyme unit","kU","KU","catalytic activity",10036894500000000000,[0,-1,0,0,0,0,0],"kU","chemical",true,null,null,1,false,false,1,"units; mmol/min; millimoles per minute","LOINC","CAct","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 kU = 1 mmol/min","umol/min","UMOL/MIN","1",1,false],[false,"kilo enzyme unit per gram","kU/g","KU/G","catalytic activity",10036894500000000000,[0,-1,-1,0,0,0,0],"kU/g","chemical",true,null,null,1,false,false,1,"units per grams; kU per gm","LOINC","CCnt","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 kU = 1 mmol/min","umol/min","UMOL/MIN","1",1,false],[false,"kilo enzyme unit per liter","kU/L","KU/L","catalytic activity",1.00368945e+22,[-3,-1,0,0,0,0,0],"kU/L","chemical",true,null,null,1,false,false,1,"units per liter; litre; enzymatic activity; enzyme activity per volume; activities","LOINC","ACnc; CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 kU = 1 mmol/min","umol/min","UMOL/MIN","1",1,false],[false,"kilo enzyme unit per milliliter","kU/mL","KU/ML","catalytic activity",1.00368945e+25,[-3,-1,0,0,0,0,0],"kU/mL","chemical",true,null,null,1,false,false,1,"kU per mL; units per milliliter; millilitre; enzymatic activity per volume; enzyme activities","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 kU = 1 mmol/min","umol/min","UMOL/MIN","1",1,false],[false,"Liters per 24 hour","L/(24.h)","L/(24.HR)","volume",1.1574074074074074e-8,[3,-1,0,0,0,0,0],"L/h","iso1000",true,null,null,1,false,false,0,"L/24hrs; L/24 hrs; L per 24hrs; liters per 24 hours; day; dy; litres; volume flow rate","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"Liters per 8 hour","L/(8.h)","L/(8.HR)","volume",3.472222222222222e-8,[3,-1,0,0,0,0,0],"L/h","iso1000",true,null,null,1,false,false,0,"L/8hrs; L/8 hrs; L per 8hrs; liters per 8 hours; litres; volume flow rate; shift","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"Liters per minute per square meter","L/(min.m2) ","L/(MIN.M2)","volume",0.000016666666666666667,[1,-1,0,0,0,0,0],"L/(min.(m<sup>2</sup>))","iso1000",true,null,null,1,false,false,0,"L/(min.m2); L/min/m^2; L/min/sq. meter; L per min per m2; m^2; liters per minutes per square meter; meter squared; litres; metre ","LOINC","ArVRat","Clinical","unit for tests that measure cardiac output per body surface area (cardiac index)","l",null,"1",1,false],[false,"Liters per day","L/d","L/D","volume",1.1574074074074074e-8,[3,-1,0,0,0,0,0],"L/d","iso1000",true,null,null,1,false,false,0,"L/dy; L per day; 24hrs; 24 hrs; 24 hours; liters; litres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"Liters per hour","L/h","L/HR","volume",2.7777777777777776e-7,[3,-1,0,0,0,0,0],"L/h","iso1000",true,null,null,1,false,false,0,"L/hr; L per hr; litres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"Liters per kilogram","L/kg","L/KG","volume",0.000001,[3,0,-1,0,0,0,0],"L/kg","iso1000",true,null,null,1,false,false,0,"L per kg; litre","LOINC","VCnt","Clinical","","l",null,"1",1,false],[false,"Liters per liter","L/L","L/L","volume",1,[0,0,0,0,0,0,0],"L/L","iso1000",true,null,null,1,false,false,0,"L per L; liter/liter; litre","LOINC","VFr","Clinical","","l",null,"1",1,false],[false,"Liters per minute","L/min","L/MIN","volume",0.000016666666666666667,[3,-1,0,0,0,0,0],"L/min","iso1000",true,null,null,1,false,false,0,"liters per minute; litre","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"Liters per minute per square meter","L/min/m2","(L/MIN)/M2","volume",0.000016666666666666667,[1,-1,0,0,0,0,0],"(L/min)/(m<sup>2</sup>)","iso1000",true,null,null,1,false,false,0,"L/(min.m2); L/min/m^2; L/min/sq. meter; L per min per m2; m^2; liters per minutes per square meter; meter squared; litres; metre ","","ArVRat","Clinical","unit for tests that measure cardiac output per body surface area (cardiac index)","l",null,"1",1,false],[false,"Liters per second","L/s","L/S","volume",0.001,[3,-1,0,0,0,0,0],"L/s","iso1000",true,null,null,1,false,false,0,"L per sec; litres","LOINC","VRat","Clinical","unit used often to measure gas flow and peak expiratory flow","l",null,"1",1,false],[false,"Liters per second per square second","L/s/s2","(L/S)/S2","volume",0.001,[3,-3,0,0,0,0,0],"(L/s)/(s<sup>2</sup>)","iso1000",true,null,null,1,false,false,0,"L/s/s^2; L/sec/sec2; L/sec/sec^2; L/sec/sq. sec; L per s per s2; L per sec per sec2; s^2; sec^2; liters per seconds per square second; second squared; litres ","LOINC","ArVRat","Clinical","unit for tests that measure cardiac output/body surface area","l",null,"1",1,false],[false,"lumen square meter","lm.m2","LM.M2","luminous flux",1,[2,0,0,2,0,0,1],"lm.(m<sup>2</sup>)","si",true,null,null,1,false,false,0,"lm*m2; lm*m^2; lumen meters squared; lumen sq. meters; metres","LOINC","","Clinical","","cd.sr","CD.SR","1",1,false],[false,"meter per second","m/s","M/S","length",1,[1,-1,0,0,0,0,0],"m/s",null,false,"L",null,1,false,false,0,"meter/second; m per sec; meters per second; metres; velocity; speed","LOINC","Vel","Clinical","unit of velocity",null,null,null,null,false],[false,"meter per square second","m/s2","M/S2","length",1,[1,-2,0,0,0,0,0],"m/(s<sup>2</sup>)",null,false,"L",null,1,false,false,0,"m/s^2; m/sq. sec; m per s2; per s^2; meters per square second; second squared; sq second; metres; acceleration","LOINC","Accel","Clinical","unit of acceleration",null,null,null,null,false],[false,"milli international unit per liter","m[IU]/L","M[IU]/L","arbitrary",1,[-3,0,0,0,0,0,0],"(mi.U.)/L","chemical",true,null,null,1,false,true,0,"mIU/L; m IU/L; mIU per liter; units; litre","LOINC","ACnc","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"milli  international unit per milliliter","m[IU]/mL","M[IU]/ML","arbitrary",1000.0000000000001,[-3,0,0,0,0,0,0],"(mi.U.)/mL","chemical",true,null,null,1,false,true,0,"mIU/mL; m IU/mL; mIU per mL; milli international units per milliliter; millilitre","LOINC","ACnc","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"square meter","m2","M2","length",1,[2,0,0,0,0,0,0],"m<sup>2</sup>",null,false,"L",null,1,false,false,0,"m^2; sq m; square meters; meters squared; metres","LOINC","Area","Clinical","unit often used to represent body surface area",null,null,null,null,false],[false,"square meter per second","m2/s","M2/S","length",1,[2,-1,0,0,0,0,0],"(m<sup>2</sup>)/s",null,false,"L",null,1,false,false,0,"m^2/sec; m2 per sec; m^2 per sec; sq m/sec; meters squared/seconds; sq m per sec; meters squared; metres","LOINC","ArRat","Clinical","",null,null,null,null,false],[false,"cubic meter per second","m3/s","M3/S","length",1,[3,-1,0,0,0,0,0],"(m<sup>3</sup>)/s",null,false,"L",null,1,false,false,0,"m^3/sec; m3 per sec; m^3 per sec; cu m/sec; cubic meters per seconds; meters cubed; metres","LOINC","VRat","Clinical","",null,null,null,null,false],[false,"milliampere","mA","MA","electric current",0.001,[0,-1,0,0,0,1,0],"mA","si",true,null,null,1,false,false,0,"mamp; milliamperes","LOINC","ElpotRat","Clinical","unit of electric current","C/s","C/S","1",1,false],[false,"millibar","mbar","MBAR","pressure",100000,[-1,-2,1,0,0,0,0],"mbar","iso1000",true,null,null,1,false,false,0,"millibars","LOINC","Pres","Clinical","unit of pressure","Pa","PAL","1e5",100000,false],[false,"millibar second per liter","mbar.s/L","(MBAR.S)/L","pressure",100000000,[-4,-1,1,0,0,0,0],"(mbar.s)/L","iso1000",true,null,null,1,false,false,0,"mbar*s/L; mbar.s per L; mbar*s per L; millibar seconds per liter; millibar second per litre","LOINC","","Clinical","unit to measure expiratory resistance","Pa","PAL","1e5",100000,false],[false,"millibar per liter per second","mbar/L/s","(MBAR/L)/S","pressure",100000000,[-4,-3,1,0,0,0,0],"(mbar/L)/s","iso1000",true,null,null,1,false,false,0,"mbar/(L.s); mbar/L/sec; mbar/liter/second; mbar per L per sec; mbar per liter per second; millibars per liters per seconds; litres","LOINC","PresCncRat","Clinical","unit to measure expiratory resistance","Pa","PAL","1e5",100000,false],[false,"milliequivalent","meq","MEQ","amount of substance",602213670000000000000,[0,0,0,0,0,0,0],"meq","chemical",true,null,null,1,false,false,1,"milliequivalents; meqs","LOINC","Sub","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per 2 hour","meq/(2.h)","MEQ/(2.HR)","amount of substance",83640787500000000,[0,-1,0,0,0,0,0],"meq/h","chemical",true,null,null,1,false,false,1,"meq/2hrs; meq/2 hrs; meq per 2 hrs; milliequivalents per 2 hours","LOINC","SRat","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per 24 hour","meq/(24.h)","MEQ/(24.HR)","amount of substance",6970065625000000,[0,-1,0,0,0,0,0],"meq/h","chemical",true,null,null,1,false,false,1,"meq/24hrs; meq/24 hrs; meq per 24 hrs; milliequivalents per 24 hours","LOINC","SRat","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per 8 hour","meq/(8.h)","MEQ/(8.HR)","amount of substance",20910196875000000,[0,-1,0,0,0,0,0],"meq/h","chemical",true,null,null,1,false,false,1,"meq/8hrs; meq/8 hrs; meq per 8 hrs; milliequivalents per 8 hours; shift","LOINC","SRat","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per day","meq/d","MEQ/D","amount of substance",6970065625000000,[0,-1,0,0,0,0,0],"meq/d","chemical",true,null,null,1,false,false,1,"meq/dy; meq per day; milliquivalents per days; meq/24hrs; meq/24 hrs; meq per 24 hrs; milliequivalents per 24 hours","LOINC","SRat","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per deciliter","meq/dL","MEQ/DL","amount of substance",6.022136699999999e+24,[-3,0,0,0,0,0,0],"meq/dL","chemical",true,null,null,1,false,false,1,"meq per dL; milliequivalents per deciliter; decilitre","LOINC","SCnc","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per gram","meq/g","MEQ/G","amount of substance",602213670000000000000,[0,0,-1,0,0,0,0],"meq/g","chemical",true,null,null,1,false,false,1,"mgq/gm; meq per gm; milliequivalents per gram","LOINC","MCnt","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per hour","meq/h","MEQ/HR","amount of substance",167281575000000000,[0,-1,0,0,0,0,0],"meq/h","chemical",true,null,null,1,false,false,1,"meq/hrs; meq per hrs; milliequivalents per hour","LOINC","SRat","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per kilogram","meq/kg","MEQ/KG","amount of substance",602213670000000000,[0,0,-1,0,0,0,0],"meq/kg","chemical",true,null,null,1,false,false,1,"meq per kg; milliequivalents per kilogram","LOINC","SCnt","Clinical","equivalence equals moles per valence; used to measure dose per patient body mass","mol","MOL","1",1,false],[false,"milliequivalent per kilogram per hour","meq/kg/h","(MEQ/KG)/HR","amount of substance",167281575000000,[0,-1,-1,0,0,0,0],"(meq/kg)/h","chemical",true,null,null,1,false,false,1,"meq/(kg.h); meq/kg/hr; meq per kg per hr; milliequivalents per kilograms per hour","LOINC","SCntRat","Clinical","equivalence equals moles per valence; unit used to measure dose rate per patient body mass","mol","MOL","1",1,false],[false,"milliequivalent per liter","meq/L","MEQ/L","amount of substance",6.0221367e+23,[-3,0,0,0,0,0,0],"meq/L","chemical",true,null,null,1,false,false,1,"milliequivalents per liter; litre; meq per l; acidity","LOINC","SCnc","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per square meter","meq/m2","MEQ/M2","amount of substance",602213670000000000000,[-2,0,0,0,0,0,0],"meq/(m<sup>2</sup>)","chemical",true,null,null,1,false,false,1,"meq/m^2; meq/sq. m; milliequivalents per square meter; meter squared; metre","LOINC","ArSub","Clinical","equivalence equals moles per valence; note that the use of m2 in clinical units ofter refers to body surface area","mol","MOL","1",1,false],[false,"milliequivalent per minute","meq/min","MEQ/MIN","amount of substance",10036894500000000000,[0,-1,0,0,0,0,0],"meq/min","chemical",true,null,null,1,false,false,1,"meq per min; milliequivalents per minute","LOINC","SRat","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milliequivalent per milliliter","meq/mL","MEQ/ML","amount of substance",6.0221367e+26,[-3,0,0,0,0,0,0],"meq/mL","chemical",true,null,null,1,false,false,1,"meq per mL; milliequivalents per milliliter; millilitre","LOINC","SCnc","Clinical","equivalence equals moles per valence","mol","MOL","1",1,false],[false,"milligram","mg","MG","mass",0.001,[0,0,1,0,0,0,0],"mg",null,false,"M",null,1,false,false,0,"milligrams","LOINC","Mass","Clinical","",null,null,null,null,false],[false,"milligram per 10 hour","mg/(10.h)","MG/(10.HR)","mass",2.7777777777777777e-8,[0,-1,1,0,0,0,0],"mg/h",null,false,"M",null,1,false,false,0,"mg/10hrs; mg/10 hrs; mg per 10 hrs; milligrams per 10 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"milligram per 12 hour","mg/(12.h)","MG/(12.HR)","mass",2.3148148148148148e-8,[0,-1,1,0,0,0,0],"mg/h",null,false,"M",null,1,false,false,0,"mg/12hrs; mg/12 hrs; per 12 hrs; 12hrs; milligrams per 12 hours","LOINC","MRat","Clinical","units used for tests in urine",null,null,null,null,false],[false,"milligram per 2 hour","mg/(2.h)","MG/(2.HR)","mass",1.3888888888888888e-7,[0,-1,1,0,0,0,0],"mg/h",null,false,"M",null,1,false,false,0,"mg/2hrs; mg/2 hrs; mg per 2 hrs; 2hrs; milligrams per 2 hours","LOINC","MRat","Clinical","units used for tests in urine",null,null,null,null,false],[false,"milligram per 24 hour","mg/(24.h)","MG/(24.HR)","mass",1.1574074074074074e-8,[0,-1,1,0,0,0,0],"mg/h",null,false,"M",null,1,false,false,0,"mg/24hrs; mg/24 hrs; milligrams per 24 hours; mg/kg/dy; mg per kg per day; milligrams per kilograms per days","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"milligram per 6 hour","mg/(6.h)","MG/(6.HR)","mass",4.6296296296296295e-8,[0,-1,1,0,0,0,0],"mg/h",null,false,"M",null,1,false,false,0,"mg/6hrs; mg/6 hrs; mg per 6 hrs; 6hrs; milligrams per 6 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"milligram per 72 hour","mg/(72.h)","MG/(72.HR)","mass",3.858024691358025e-9,[0,-1,1,0,0,0,0],"mg/h",null,false,"M",null,1,false,false,0,"mg/72hrs; mg/72 hrs; 72 hrs; 72hrs; milligrams per 72 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"milligram per 8 hour","mg/(8.h)","MG/(8.HR)","mass",3.472222222222222e-8,[0,-1,1,0,0,0,0],"mg/h",null,false,"M",null,1,false,false,0,"mg/8hrs; mg/8 hrs; milligrams per 8 hours; shift","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"milligram per day","mg/d","MG/D","mass",1.1574074074074074e-8,[0,-1,1,0,0,0,0],"mg/d",null,false,"M",null,1,false,false,0,"mg/24hrs; mg/24 hrs; milligrams per 24 hours; mg/dy; mg per day; milligrams","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"milligram per deciliter","mg/dL","MG/DL","mass",10,[-3,0,1,0,0,0,0],"mg/dL",null,false,"M",null,1,false,false,0,"mg per dL; milligrams per deciliter; decilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"milligram per gram","mg/g","MG/G","mass",0.001,[0,0,0,0,0,0,0],"mg/g",null,false,"M",null,1,false,false,0,"mg per gm; milligrams per gram","LOINC","MCnt; MRto","Clinical","",null,null,null,null,false],[false,"milligram per hour","mg/h","MG/HR","mass",2.7777777777777776e-7,[0,-1,1,0,0,0,0],"mg/h",null,false,"M",null,1,false,false,0,"mg/hr; mg per hr; milligrams","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"milligram per kilogram","mg/kg","MG/KG","mass",0.000001,[0,0,0,0,0,0,0],"mg/kg",null,false,"M",null,1,false,false,0,"mg per kg; milligrams per kilograms","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"milligram per kilogram per 8 hour","mg/kg/(8.h)","(MG/KG)/(8.HR)","mass",3.472222222222222e-11,[0,-1,0,0,0,0,0],"(mg/kg)/h",null,false,"M",null,1,false,false,0,"mg/(8.h.kg); mg/kg/8hrs; mg/kg/8 hrs; mg per kg per 8hrs; 8 hrs; milligrams per kilograms per 8 hours; shift","LOINC","RelMRat; MCntRat","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"milligram per kilogram per day","mg/kg/d","(MG/KG)/D","mass",1.1574074074074074e-11,[0,-1,0,0,0,0,0],"(mg/kg)/d",null,false,"M",null,1,false,false,0,"mg/(kg.d); mg/(kg.24.h)mg/kg/dy; mg per kg per day; milligrams per kilograms per days; mg/kg/(24.h); mg/kg/24hrs; 24 hrs; 24 hours","LOINC","RelMRat ","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"milligram per kilogram per hour","mg/kg/h","(MG/KG)/HR","mass",2.7777777777777777e-10,[0,-1,0,0,0,0,0],"(mg/kg)/h",null,false,"M",null,1,false,false,0,"mg/(kg.h); mg/kg/hr; mg per kg per hr; milligrams per kilograms per hour","LOINC","RelMRat; MCntRat","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"milligram per kilogram per minute","mg/kg/min","(MG/KG)/MIN","mass",1.6666666666666667e-8,[0,-1,0,0,0,0,0],"(mg/kg)/min",null,false,"M",null,1,false,false,0,"mg/(kg.min); mg per kg per min; milligrams per kilograms per minute","LOINC","RelMRat; MCntRat","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"milligram per liter","mg/L","MG/L","mass",1,[-3,0,1,0,0,0,0],"mg/L",null,false,"M",null,1,false,false,0,"mg per l; milligrams per liter; litre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"milligram per square meter","mg/m2","MG/M2","mass",0.001,[-2,0,1,0,0,0,0],"mg/(m<sup>2</sup>)",null,false,"M",null,1,false,false,0,"mg/m^2; mg/sq. m; mg per m2; mg per m^2; mg per sq. milligrams; meter squared; metre","LOINC","ArMass","Clinical","",null,null,null,null,false],[false,"milligram per cubic meter","mg/m3","MG/M3","mass",0.001,[-3,0,1,0,0,0,0],"mg/(m<sup>3</sup>)",null,false,"M",null,1,false,false,0,"mg/m^3; mg/cu. m; mg per m3; milligrams per cubic meter; meter cubed; metre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"milligram per milligram","mg/mg","MG/MG","mass",1,[0,0,0,0,0,0,0],"mg/mg",null,false,"M",null,1,false,false,0,"mg per mg; milligrams; milligram/milligram","LOINC","MRto","Clinical","",null,null,null,null,false],[false,"milligram per minute","mg/min","MG/MIN","mass",0.000016666666666666667,[0,-1,1,0,0,0,0],"mg/min",null,false,"M",null,1,false,false,0,"mg per min; milligrams per minutes; milligram/minute","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"milligram per milliliter","mg/mL","MG/ML","mass",1000.0000000000001,[-3,0,1,0,0,0,0],"mg/mL",null,false,"M",null,1,false,false,0,"mg per mL; milligrams per milliliters; millilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"milligram per millimole","mg/mmol","MG/MMOL","mass",1.660540186674939e-24,[0,0,1,0,0,0,0],"mg/mmol",null,false,"M",null,1,false,false,-1,"mg per mmol; milligrams per millimole; ","LOINC","Ratio","Clinical","",null,null,null,null,false],[false,"milligram per week","mg/wk","MG/WK","mass",1.6534391534391535e-9,[0,-1,1,0,0,0,0],"mg/wk",null,false,"M",null,1,false,false,0,"mg/week; mg per wk; milligrams per weeks; milligram/week","LOINC","Mrat","Clinical","",null,null,null,null,false],[false,"milliliter","mL","ML","volume",0.000001,[3,0,0,0,0,0,0],"mL","iso1000",true,null,null,1,false,false,0,"milliliters; millilitres","LOINC","Vol","Clinical","","l",null,"1",1,false],[false,"milliliter per 10 hour","mL/(10.h)","ML/(10.HR)","volume",2.7777777777777777e-11,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/10hrs; ml/10 hrs; mL per 10hrs; 10 hrs; milliliters per 10 hours; millilitres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 12 hour","mL/(12.h)","ML/(12.HR)","volume",2.3148148148148147e-11,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/12hrs; ml/12 hrs; mL per 12hrs; 12 hrs; milliliters per 12 hours; millilitres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 2 hour","mL/(2.h)","ML/(2.HR)","volume",1.3888888888888888e-10,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/2hrs; ml/2 hrs; mL per 2hrs; 2 hrs; milliliters per 2 hours; millilitres ","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 24 hour","mL/(24.h)","ML/(24.HR)","volume",1.1574074074074074e-11,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/24hrs; ml/24 hrs; mL per 24hrs; 24 hrs; milliliters per 24 hours; millilitres; ml/dy; /day; ml per dy; days; fluid outputs; fluid inputs; flow rate","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 4 hour","mL/(4.h)","ML/(4.HR)","volume",6.944444444444444e-11,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/4hrs; ml/4 hrs; mL per 4hrs; 4 hrs; milliliters per 4 hours; millilitres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 5 hour","mL/(5.h)","ML/(5.HR)","volume",5.5555555555555553e-11,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/5hrs; ml/5 hrs; mL per 5hrs; 5 hrs; milliliters per 5 hours; millilitres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 6 hour","mL/(6.h)","ML/(6.HR)","volume",4.6296296296296294e-11,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/6hrs; ml/6 hrs; mL per 6hrs; 6 hrs; milliliters per 6 hours; millilitres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 72 hour","mL/(72.h)","ML/(72.HR)","volume",3.8580246913580245e-12,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/72hrs; ml/72 hrs; mL per 72hrs; 72 hrs; milliliters per 72 hours; millilitres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 8 hour","mL/(8.h)","ML/(8.HR)","volume",3.472222222222222e-11,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"ml/8hrs; ml/8 hrs; mL per 8hrs; 8 hrs; milliliters per 8 hours; millilitres; shift","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per 8 hour per kilogram","mL/(8.h)/kg","(ML/(8.HR))/KG","volume",3.472222222222222e-14,[3,-1,-1,0,0,0,0],"(mL/h)/kg","iso1000",true,null,null,1,false,false,0,"mL/kg/(8.h); ml/8h/kg; ml/8 h/kg; ml/8hr/kg; ml/8 hr/kgr; mL per 8h per kg; 8 h; 8hr; 8 hr; milliliters per 8 hours per kilogram; millilitres; shift","LOINC","VRatCnt","Clinical","unit used to measure renal excretion volume rate per body mass","l",null,"1",1,false],[false,"milliliter per square inch (international)","mL/[sin_i]","ML/[SIN_I]","volume",0.0015500031000061998,[1,0,0,0,0,0,0],"mL","iso1000",true,null,null,1,false,false,0,"mL/sin; mL/in2; mL/in^2; mL per sin; in2; in^2; sq. in; milliliters per square inch; inch squared","LOINC","ArVol","Clinical","","l",null,"1",1,false],[false,"milliliter per centimeter of water","mL/cm[H2O]","ML/CM[H2O]","volume",1.0197162129779282e-11,[4,2,-1,0,0,0,0],"mL/(cm HO<sub><r>2</r></sub>)","iso1000",true,null,null,1,false,false,0,"milliliters per centimeter of water; millilitre per centimetre of water; millilitres per centimetre of water; mL/cmH2O; mL/cm H2O; mL per cmH2O; mL per cm H2O","LOINC","Compli","Clinical","unit used to measure dynamic lung compliance","l",null,"1",1,false],[false,"milliliter per day","mL/d","ML/D","volume",1.1574074074074074e-11,[3,-1,0,0,0,0,0],"mL/d","iso1000",true,null,null,1,false,false,0,"ml/day; ml per day; milliliters per day; 24 hours; 24hrs; millilitre;","LOINC","VRat","Clinical","usually used to measure fluid output or input; flow rate","l",null,"1",1,false],[false,"milliliter per deciliter","mL/dL","ML/DL","volume",0.009999999999999998,[0,0,0,0,0,0,0],"mL/dL","iso1000",true,null,null,1,false,false,0,"mL per dL; millilitres; decilitre; milliliters","LOINC","VFr; VFrDiff","Clinical","","l",null,"1",1,false],[false,"milliliter per hour","mL/h","ML/HR","volume",2.7777777777777777e-10,[3,-1,0,0,0,0,0],"mL/h","iso1000",true,null,null,1,false,false,0,"mL/hr; mL per hr; milliliters per hour; millilitres; fluid intake; fluid output","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per kilogram","mL/kg","ML/KG","volume",9.999999999999999e-10,[3,0,-1,0,0,0,0],"mL/kg","iso1000",true,null,null,1,false,false,0,"mL per kg; milliliters per kilogram; millilitres","LOINC","VCnt","Clinical","","l",null,"1",1,false],[false,"milliliter per kilogram per 8 hour","mL/kg/(8.h)","(ML/KG)/(8.HR)","volume",3.472222222222222e-14,[3,-1,-1,0,0,0,0],"(mL/kg)/h","iso1000",true,null,null,1,false,false,0,"mL/(8.h.kg); mL/kg/8hrs; mL/kg/8 hrs; mL per kg per 8hrs; 8 hrs; milliliters per kilograms per 8 hours; millilitres; shift","LOINC","VCntRat; RelEngRat","Clinical","unit used to measure renal excretion volume rate per body mass","l",null,"1",1,false],[false,"milliliter per kilogram per day","mL/kg/d","(ML/KG)/D","volume",1.1574074074074072e-14,[3,-1,-1,0,0,0,0],"(mL/kg)/d","iso1000",true,null,null,1,false,false,0,"mL/(kg.d); mL/kg/dy; mL per kg per day; milliliters per kilograms per day; mg/kg/24hrs; 24 hrs; per 24 hours millilitres","LOINC","VCntRat; RelEngRat","Clinical","unit used to measure renal excretion volume rate per body mass","l",null,"1",1,false],[false,"milliliter per kilogram per hour","mL/kg/h","(ML/KG)/HR","volume",2.7777777777777774e-13,[3,-1,-1,0,0,0,0],"(mL/kg)/h","iso1000",true,null,null,1,false,false,0,"mL/(kg.h); mL/kg/hr; mL per kg per hr; milliliters per kilograms per hour; millilitres","LOINC","VCntRat; RelEngRat","Clinical","unit used to measure renal excretion volume rate per body mass","l",null,"1",1,false],[false,"milliliter per kilogram per minute","mL/kg/min","(ML/KG)/MIN","volume",1.6666666666666664e-11,[3,-1,-1,0,0,0,0],"(mL/kg)/min","iso1000",true,null,null,1,false,false,0,"mL/(kg.min); mL/kg/dy; mL per kg per day; milliliters per kilograms per day; millilitres","LOINC","RelEngRat","Clinical","used for tests that measure activity metabolic rate compared to standard resting metabolic rate ","l",null,"1",1,false],[false,"milliliter per square meter","mL/m2","ML/M2","volume",0.000001,[1,0,0,0,0,0,0],"mL/(m<sup>2</sup>)","iso1000",true,null,null,1,false,false,0,"mL/m^2; mL/sq. meter; mL per m2; m^2; sq. meter; milliliters per square meter; millilitres; meter squared","LOINC","ArVol","Clinical","used for tests that relate to heart work - e.g. ventricular stroke volume; atrial volume per body surface area","l",null,"1",1,false],[false,"milliliter per millibar","mL/mbar","ML/MBAR","volume",1e-11,[4,2,-1,0,0,0,0],"mL/mbar","iso1000",true,null,null,1,false,false,0,"mL per mbar; milliliters per millibar; millilitres","LOINC","","Clinical","unit used to measure dynamic lung compliance","l",null,"1",1,false],[false,"milliliter per minute","mL/min","ML/MIN","volume",1.6666666666666667e-8,[3,-1,0,0,0,0,0],"mL/min","iso1000",true,null,null,1,false,false,0,"mL per min; milliliters; millilitres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"milliliter per minute per square meter","mL/min/m2","(ML/MIN)/M2","volume",1.6666666666666667e-8,[1,-1,0,0,0,0,0],"(mL/min)/(m<sup>2</sup>)","iso1000",true,null,null,1,false,false,0,"ml/min/m^2; ml/min/sq. meter; mL per min per m2; m^2; sq. meter; milliliters per minutes per square meter; millilitres; metre; meter squared","LOINC","ArVRat","Clinical","unit used to measure volume per body surface area; oxygen consumption index","l",null,"1",1,false],[false,"milliliter per millimeter","mL/mm","ML/MM","volume",0.001,[2,0,0,0,0,0,0],"mL/mm","iso1000",true,null,null,1,false,false,0,"mL per mm; milliliters per millimeter; millilitres; millimetre","LOINC","Lineic Volume","Clinical","","l",null,"1",1,false],[false,"milliliter per second","mL/s","ML/S","volume",0.000001,[3,-1,0,0,0,0,0],"mL/s","iso1000",true,null,null,1,false,false,0,"ml/sec; mL per sec; milliliters per second; millilitres","LOINC","Vel; VelRat; VRat","Clinical","","l",null,"1",1,false],[false,"millimeter","mm","MM","length",0.001,[1,0,0,0,0,0,0],"mm",null,false,"L",null,1,false,false,0,"millimeters; millimetres; height; length; diameter; thickness; axis; curvature; size","LOINC","Len","Clinical","",null,null,null,null,false],[false,"millimeter per hour","mm/h","MM/HR","length",2.7777777777777776e-7,[1,-1,0,0,0,0,0],"mm/h",null,false,"L",null,1,false,false,0,"mm/hr; mm per hr; millimeters per hour; millimetres","LOINC","Vel","Clinical","unit to measure sedimentation rate",null,null,null,null,false],[false,"millimeter per minute","mm/min","MM/MIN","length",0.000016666666666666667,[1,-1,0,0,0,0,0],"mm/min",null,false,"L",null,1,false,false,0,"mm per min; millimeters per minute; millimetres","LOINC","Vel","Clinical","",null,null,null,null,false],[false,"millimeter of water","mm[H2O]","MM[H2O]","pressure",9806.65,[-1,-2,1,0,0,0,0],"mm HO<sub><r>2</r></sub>","clinical",true,null,null,1,false,false,0,"mmH2O; mm H2O; millimeters of water; millimetres","LOINC","Pres","Clinical","","kPa","KPAL","980665e-5",9.80665,false],[false,"millimeter of mercury","mm[Hg]","MM[HG]","pressure",133322,[-1,-2,1,0,0,0,0],"mm Hg","clinical",true,null,null,1,false,false,0,"mmHg; mm Hg; millimeters of mercury; millimetres","LOINC","Pres; PPres; Ratio","Clinical","1 mm[Hg] = 1 torr; unit to measure blood pressure","kPa","KPAL","133.3220",133.322,false],[false,"square millimeter","mm2","MM2","length",0.000001,[2,0,0,0,0,0,0],"mm<sup>2</sup>",null,false,"L",null,1,false,false,0,"mm^2; sq. mm.; sq. millimeters; millimeters squared; millimetres","LOINC","Area","Clinical","",null,null,null,null,false],[false,"millimole","mmol","MMOL","amount of substance",602213670000000000000,[0,0,0,0,0,0,0],"mmol","si",true,null,null,1,false,false,1,"millimoles","LOINC","Sub","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per 12 hour","mmol/(12.h)","MMOL/(12.HR)","amount of substance",13940131250000000,[0,-1,0,0,0,0,0],"mmol/h","si",true,null,null,1,false,false,1,"mmol/12hrs; mmol/12 hrs; mmol per 12 hrs; 12hrs; millimoles per 12 hours","LOINC","SRat","Clinical","unit for tests related to urine","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per 2 hour","mmol/(2.h)","MMOL/(2.HR)","amount of substance",83640787500000000,[0,-1,0,0,0,0,0],"mmol/h","si",true,null,null,1,false,false,1,"mmol/2hrs; mmol/2 hrs; mmol per 2 hrs; 2hrs; millimoles per 2 hours","LOINC","SRat","Clinical","unit for tests related to urine","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per 24 hour","mmol/(24.h)","MMOL/(24.HR)","amount of substance",6970065625000000,[0,-1,0,0,0,0,0],"mmol/h","si",true,null,null,1,false,false,1,"mmol/24hrs; mmol/24 hrs; mmol per 24 hrs; 24hrs; millimoles per 24 hours","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per 5 hour","mmol/(5.h)","MMOL/(5.HR)","amount of substance",33456315000000000,[0,-1,0,0,0,0,0],"mmol/h","si",true,null,null,1,false,false,1,"mmol/5hrs; mmol/5 hrs; mmol per 5 hrs; 5hrs; millimoles per 5 hours","LOINC","SRat","Clinical","unit for tests related to doses","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per 6 hour","mmol/(6.h)","MMOL/(6.HR)","amount of substance",27880262500000000,[0,-1,0,0,0,0,0],"mmol/h","si",true,null,null,1,false,false,1,"mmol/6hrs; mmol/6 hrs; mmol per 6 hrs; 6hrs; millimoles per 6 hours","LOINC","SRat","Clinical","unit for tests related to urine","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per 8 hour","mmol/(8.h)","MMOL/(8.HR)","amount of substance",20910196875000000,[0,-1,0,0,0,0,0],"mmol/h","si",true,null,null,1,false,false,1,"mmol/8hrs; mmol/8 hrs; mmol per 8 hrs; 8hrs; millimoles per 8 hours; shift","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per day","mmol/d","MMOL/D","amount of substance",6970065625000000,[0,-1,0,0,0,0,0],"mmol/d","si",true,null,null,1,false,false,1,"mmol/24hrs; mmol/24 hrs; mmol per 24 hrs; 24hrs; millimoles per 24 hours","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per deciliter","mmol/dL","MMOL/DL","amount of substance",6.022136699999999e+24,[-3,0,0,0,0,0,0],"mmol/dL","si",true,null,null,1,false,false,1,"mmol per dL; millimoles; decilitre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per gram","mmol/g","MMOL/G","amount of substance",602213670000000000000,[0,0,-1,0,0,0,0],"mmol/g","si",true,null,null,1,false,false,1,"mmol per gram; millimoles","LOINC","SCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per hour","mmol/h","MMOL/HR","amount of substance",167281575000000000,[0,-1,0,0,0,0,0],"mmol/h","si",true,null,null,1,false,false,1,"mmol/hr; mmol per hr; millimoles per hour","LOINC","SRat","Clinical","unit for tests related to urine","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per kilogram","mmol/kg","MMOL/KG","amount of substance",602213670000000000,[0,0,-1,0,0,0,0],"mmol/kg","si",true,null,null,1,false,false,1,"mmol per kg; millimoles per kilogram","LOINC","SCnt","Clinical","unit for tests related to stool","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per kilogram per 8 hour","mmol/kg/(8.h)","(MMOL/KG)/(8.HR)","amount of substance",20910196875000,[0,-1,-1,0,0,0,0],"(mmol/kg)/h","si",true,null,null,1,false,false,1,"mmol/(8.h.kg); mmol/kg/8hrs; mmol/kg/8 hrs; mmol per kg per 8hrs; 8 hrs; millimoles per kilograms per 8 hours; shift","LOINC","CCnt","Clinical","unit used to measure molar dose rate per patient body mass","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per kilogram per day","mmol/kg/d","(MMOL/KG)/D","amount of substance",6970065625000,[0,-1,-1,0,0,0,0],"(mmol/kg)/d","si",true,null,null,1,false,false,1,"mmol/kg/dy; mmol/kg/day; mmol per kg per dy; millimoles per kilograms per day","LOINC","RelSRat","Clinical","unit used to measure molar dose rate per patient body mass","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per kilogram per hour","mmol/kg/h","(MMOL/KG)/HR","amount of substance",167281575000000,[0,-1,-1,0,0,0,0],"(mmol/kg)/h","si",true,null,null,1,false,false,1,"mmol/kg/hr; mmol per kg per hr; millimoles per kilograms per hour","LOINC","CCnt","Clinical","unit used to measure molar dose rate per patient body mass","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per kilogram per minute","mmol/kg/min","(MMOL/KG)/MIN","amount of substance",10036894500000000,[0,-1,-1,0,0,0,0],"(mmol/kg)/min","si",true,null,null,1,false,false,1,"mmol/(kg.min); mmol/kg/min; mmol per kg per min; millimoles per kilograms per minute","LOINC","CCnt","Clinical","unit used to measure molar dose rate per patient body mass; note that the unit for the enzyme unit U = umol/min. mmol/kg/min = kU/kg; ","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per liter","mmol/L","MMOL/L","amount of substance",6.0221367e+23,[-3,0,0,0,0,0,0],"mmol/L","si",true,null,null,1,false,false,1,"mmol per L; millimoles per liter; litre","LOINC","SCnc","Clinical","unit for tests related to doses","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per square meter","mmol/m2","MMOL/M2","amount of substance",602213670000000000000,[-2,0,0,0,0,0,0],"mmol/(m<sup>2</sup>)","si",true,null,null,1,false,false,1,"mmol/m^2; mmol/sq. meter; mmol per m2; m^2; sq. meter; millimoles; meter squared; metre","LOINC","ArSub","Clinical","unit used to measure molar dose per patient body surface area","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per minute","mmol/min","MMOL/MIN","amount of substance",10036894500000000000,[0,-1,0,0,0,0,0],"mmol/min","si",true,null,null,1,false,false,1,"mmol per min; millimoles per minute","LOINC","Srat; CAct","Clinical","unit for the enzyme unit U = umol/min. mmol/min = kU","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per millimole","mmol/mmol","MMOL/MMOL","amount of substance",1,[0,0,0,0,0,0,0],"mmol/mmol","si",true,null,null,1,false,false,0,"mmol per mmol; millimoles per millimole","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per mole","mmol/mol","MMOL/MOL","amount of substance",0.001,[0,0,0,0,0,0,0],"mmol/mol","si",true,null,null,1,false,false,0,"mmol per mol; millimoles per mole","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"millimole per second per liter","mmol/s/L","(MMOL/S)/L","amount of substance",6.0221367e+23,[-3,-1,0,0,0,0,0],"(mmol/s)/L","si",true,null,null,1,false,false,1,"mmol/sec/L; mmol per s per L; per sec; millimoles per seconds per liter; litre","LOINC","CCnc ","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"mole per kilogram","mol/kg","MOL/KG","amount of substance",602213670000000000000,[0,0,-1,0,0,0,0],"mol/kg","si",true,null,null,1,false,false,1,"mol per kg; moles; mols","LOINC","SCnt","Clinical","unit for tests related to stool","10*23","10*23","6.0221367",6.0221367,false],[false,"mole per kilogram per second","mol/kg/s","(MOL/KG)/S","amount of substance",602213670000000000000,[0,-1,-1,0,0,0,0],"(mol/kg)/s","si",true,null,null,1,false,false,1,"mol/kg/sec; mol per kg per sec; moles per kilograms per second; mols","LOINC","CCnt","Clinical","unit of catalytic activity (mol/s) per mass (kg)","10*23","10*23","6.0221367",6.0221367,false],[false,"mole per liter","mol/L","MOL/L","amount of substance",6.0221366999999994e+26,[-3,0,0,0,0,0,0],"mol/L","si",true,null,null,1,false,false,1,"mol per L; moles per liter; litre; moles; mols","LOINC","SCnc","Clinical","unit often used in tests measuring oxygen content","10*23","10*23","6.0221367",6.0221367,false],[false,"mole per cubic meter","mol/m3","MOL/M3","amount of substance",6.0221367e+23,[-3,0,0,0,0,0,0],"mol/(m<sup>3</sup>)","si",true,null,null,1,false,false,1,"mol/m^3; mol/cu. m; mol per m3; m^3; cu. meter; mols; moles; meters cubed; metre; mole per kiloliter; kilolitre; mol/kL","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"mole per milliliter","mol/mL","MOL/ML","amount of substance",6.0221367e+29,[-3,0,0,0,0,0,0],"mol/mL","si",true,null,null,1,false,false,1,"mol per mL; moles; millilitre; mols","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"mole per mole","mol/mol","MOL/MOL","amount of substance",1,[0,0,0,0,0,0,0],"mol/mol","si",true,null,null,1,false,false,0,"mol per mol; moles per mol; mols","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"mole per second","mol/s","MOL/S","amount of substance",6.0221367e+23,[0,-1,0,0,0,0,0],"mol/s","si",true,null,null,1,false,false,1,"mol per sec; moles per second; mols","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"milliosmole","mosm","MOSM","amount of substance (dissolved particles)",602213670000000000000,[0,0,0,0,0,0,0],"mosm","chemical",true,null,null,1,false,false,1,"milliosmoles","LOINC","Osmol","Clinical","equal to 1/1000 of an osmole","mol","MOL","1",1,false],[false,"milliosmole per kilogram","mosm/kg","MOSM/KG","amount of substance (dissolved particles)",602213670000000000,[0,0,-1,0,0,0,0],"mosm/kg","chemical",true,null,null,1,false,false,1,"mosm per kg; milliosmoles per kilogram","LOINC","Osmol","Clinical","","mol","MOL","1",1,false],[false,"milliosmole per liter","mosm/L","MOSM/L","amount of substance (dissolved particles)",6.0221367e+23,[-3,0,0,0,0,0,0],"mosm/L","chemical",true,null,null,1,false,false,1,"mosm per liter; litre; milliosmoles","LOINC","Osmol","Clinical","","mol","MOL","1",1,false],[false,"millipascal","mPa","MPAL","pressure",1,[-1,-2,1,0,0,0,0],"mPa","si",true,null,null,1,false,false,0,"millipascals","LOINC","Pres","Clinical","unit of pressure","N/m2","N/M2","1",1,false],[false,"millipascal second","mPa.s","MPAL.S","pressure",1,[-1,-1,1,0,0,0,0],"mPa.s","si",true,null,null,1,false,false,0,"mPa*s; millipoise; mP; dynamic viscosity","LOINC","Visc","Clinical","base units for millipoise, a measurement of dynamic viscosity","N/m2","N/M2","1",1,false],[false,"megasecond","Ms","MAS","time",1000000,[0,1,0,0,0,0,0],"Ms",null,false,"T",null,1,false,false,0,"megaseconds","LOINC","Time","Clinical","",null,null,null,null,false],[false,"millisecond","ms","MS","time",0.001,[0,1,0,0,0,0,0],"ms",null,false,"T",null,1,false,false,0,"milliseconds; duration","LOINC","Time","Clinical","",null,null,null,null,false],[false,"milli enzyme unit per gram","mU/g","MU/G","catalytic activity",10036894500000,[0,-1,-1,0,0,0,0],"mU/g","chemical",true,null,null,1,false,false,1,"mU per gm; milli enzyme units per gram; enzyme activity; enzymatic activity per mass","LOINC","CCnt","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min","umol/min","UMOL/MIN","1",1,false],[false,"milli enzyme unit per liter","mU/L","MU/L","catalytic activity",10036894500000000,[-3,-1,0,0,0,0,0],"mU/L","chemical",true,null,null,1,false,false,1,"mU per liter; litre; milli enzyme units enzymatic activity per volume; enzyme activity","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min","umol/min","UMOL/MIN","1",1,false],[false,"milli enzyme unit per milligram","mU/mg","MU/MG","catalytic activity",10036894500000000,[0,-1,-1,0,0,0,0],"mU/mg","chemical",true,null,null,1,false,false,1,"mU per mg; milli enzyme units per milligram","LOINC","CCnt","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min","umol/min","UMOL/MIN","1",1,false],[false,"milli enzyme unit per milliliter","mU/mL","MU/ML","catalytic activity",10036894500000000000,[-3,-1,0,0,0,0,0],"mU/mL","chemical",true,null,null,1,false,false,1,"mU per mL; milli enzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min","umol/min","UMOL/MIN","1",1,false],[false,"milli enzyme unit per milliliter per minute","mU/mL/min","(MU/ML)/MIN","catalytic activity",167281575000000000,[-3,-2,0,0,0,0,0],"(mU/mL)/min","chemical",true,null,null,1,false,false,1,"mU per mL per min; mU per milliliters per minute; millilitres; milli enzyme units; enzymatic activity; enzyme activity","LOINC","CCncRat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 mU = 1 nmol/min","umol/min","UMOL/MIN","1",1,false],[false,"millivolt","mV","MV","electric potential",1,[2,-2,1,0,0,-1,0],"mV","si",true,null,null,1,false,false,0,"millivolts","LOINC","Elpot","Clinical","unit of electric potential (voltage)","J/C","J/C","1",1,false],[false,"Newton centimeter","N.cm","N.CM","force",10,[2,-2,1,0,0,0,0],"N.cm","si",true,null,null,1,false,false,0,"N*cm; Ncm; N cm; Newton*centimeters; Newton* centimetres; torque; work","LOINC","","Clinical","as a measurement of work, N.cm = 1/100 Joules;\\nnote that N.m is the standard unit of measurement for torque (although dimensionally equivalent to Joule), and N.cm can also be thought of as a torqe unit","kg.m/s2","KG.M/S2","1",1,false],[false,"Newton second","N.s","N.S","force",1000,[1,-1,1,0,0,0,0],"N.s","si",true,null,null,1,false,false,0,"Newton*seconds; N*s; N s; Ns; impulse; imp","LOINC","","Clinical","standard unit of impulse","kg.m/s2","KG.M/S2","1",1,false],[false,"nanogram","ng","NG","mass",1e-9,[0,0,1,0,0,0,0],"ng",null,false,"M",null,1,false,false,0,"nanograms","LOINC","Mass","Clinical","",null,null,null,null,false],[false,"nanogram per 24 hour","ng/(24.h)","NG/(24.HR)","mass",1.1574074074074075e-14,[0,-1,1,0,0,0,0],"ng/h",null,false,"M",null,1,false,false,0,"ng/24hrs; ng/24 hrs; nanograms per 24 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"nanogram per 8 hour","ng/(8.h)","NG/(8.HR)","mass",3.4722222222222224e-14,[0,-1,1,0,0,0,0],"ng/h",null,false,"M",null,1,false,false,0,"ng/8hrs; ng/8 hrs; nanograms per 8 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"nanogram per million","ng/10*6","NG/(10*6)","mass",1e-15,[0,0,1,0,0,0,0],"ng/(10<sup>6</sup>)",null,false,"M",null,1,false,false,0,"ng/10^6; ng per 10*6; 10^6; nanograms","LOINC","MNum","Clinical","",null,null,null,null,false],[false,"nanogram per day","ng/d","NG/D","mass",1.1574074074074075e-14,[0,-1,1,0,0,0,0],"ng/d",null,false,"M",null,1,false,false,0,"ng/dy; ng per day; nanograms ","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"nanogram per deciliter","ng/dL","NG/DL","mass",0.00001,[-3,0,1,0,0,0,0],"ng/dL",null,false,"M",null,1,false,false,0,"ng per dL; nanograms per deciliter; decilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"nanogram per gram","ng/g","NG/G","mass",1e-9,[0,0,0,0,0,0,0],"ng/g",null,false,"M",null,1,false,false,0,"ng/gm; ng per gm; nanograms per gram","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"nanogram per hour","ng/h","NG/HR","mass",2.777777777777778e-13,[0,-1,1,0,0,0,0],"ng/h",null,false,"M",null,1,false,false,0,"ng/hr; ng per hr; nanograms per hour","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"nanogram per kilogram","ng/kg","NG/KG","mass",1e-12,[0,0,0,0,0,0,0],"ng/kg",null,false,"M",null,1,false,false,0,"ng per kg; nanograms per kilogram","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"nanogram per kilogram per 8 hour","ng/kg/(8.h)","(NG/KG)/(8.HR)","mass",3.472222222222222e-17,[0,-1,0,0,0,0,0],"(ng/kg)/h",null,false,"M",null,1,false,false,0,"ng/(8.h.kg); ng/kg/8hrs; ng/kg/8 hrs; ng per kg per 8hrs; 8 hrs; nanograms per kilograms per 8 hours; shift","LOINC","MRtoRat ","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"nanogram per kilogram per hour","ng/kg/h","(NG/KG)/HR","mass",2.7777777777777775e-16,[0,-1,0,0,0,0,0],"(ng/kg)/h",null,false,"M",null,1,false,false,0,"ng/(kg.h); ng/kg/hr; ng per kg per hr; nanograms per kilograms per hour","LOINC","MRtoRat ","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"nanogram per kilogram per minute","ng/kg/min","(NG/KG)/MIN","mass",1.6666666666666667e-14,[0,-1,0,0,0,0,0],"(ng/kg)/min",null,false,"M",null,1,false,false,0,"ng/(kg.min); ng per kg per min; nanograms per kilograms per minute","LOINC","MRtoRat ","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"nanogram per liter","ng/L","NG/L","mass",0.000001,[-3,0,1,0,0,0,0],"ng/L",null,false,"M",null,1,false,false,0,"ng per L; nanograms per liter; litre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"nanogram per square meter","ng/m2","NG/M2","mass",1e-9,[-2,0,1,0,0,0,0],"ng/(m<sup>2</sup>)",null,false,"M",null,1,false,false,0,"ng/m^2; ng/sq. m; ng per m2; m^2; sq. meter; nanograms; meter squared; metre","LOINC","ArMass","Clinical","unit used to measure mass dose per patient body surface area",null,null,null,null,false],[false,"nanogram per milligram","ng/mg","NG/MG","mass",0.000001,[0,0,0,0,0,0,0],"ng/mg",null,false,"M",null,1,false,false,0,"ng per mg; nanograms","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"nanogram per milligram per hour","ng/mg/h","(NG/MG)/HR","mass",2.7777777777777777e-10,[0,-1,0,0,0,0,0],"(ng/mg)/h",null,false,"M",null,1,false,false,0,"ng/mg/hr; ng per mg per hr; nanograms per milligrams per hour","LOINC","MRtoRat ","Clinical","",null,null,null,null,false],[false,"nanogram per minute","ng/min","NG/MIN","mass",1.6666666666666667e-11,[0,-1,1,0,0,0,0],"ng/min",null,false,"M",null,1,false,false,0,"ng per min; nanograms","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"nanogram per millliiter","ng/mL","NG/ML","mass",0.001,[-3,0,1,0,0,0,0],"ng/mL",null,false,"M",null,1,false,false,0,"ng per mL; nanograms; millilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"nanogram per milliliter per hour","ng/mL/h","(NG/ML)/HR","mass",2.7777777777777776e-7,[-3,-1,1,0,0,0,0],"(ng/mL)/h",null,false,"M",null,1,false,false,0,"ng/mL/hr; ng per mL per mL; nanograms per milliliter per hour; nanogram per millilitre per hour; nanograms per millilitre per hour; enzymatic activity per volume; enzyme activity per milliliters","LOINC","CCnc","Clinical","tests that measure enzymatic activity",null,null,null,null,false],[false,"nanogram per second","ng/s","NG/S","mass",1e-9,[0,-1,1,0,0,0,0],"ng/s",null,false,"M",null,1,false,false,0,"ng/sec; ng per sec; nanograms per second","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"nanogram per enzyme unit","ng/U","NG/U","mass",9.963241120049634e-26,[0,1,1,0,0,0,0],"ng/U",null,false,"M",null,1,false,false,-1,"ng per U; nanograms per enzyme unit","LOINC","CMass","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)",null,null,null,null,false],[false,"nanokatal","nkat","NKAT","catalytic activity",602213670000000,[0,-1,0,0,0,0,0],"nkat","chemical",true,null,null,1,false,false,1,"nanokatals","LOINC","CAct","Clinical","kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.","mol/s","MOL/S","1",1,false],[false,"nanoliter","nL","NL","volume",1.0000000000000002e-12,[3,0,0,0,0,0,0],"nL","iso1000",true,null,null,1,false,false,0,"nanoliters; nanolitres","LOINC","Vol","Clinical","","l",null,"1",1,false],[false,"nanometer","nm","NM","length",1e-9,[1,0,0,0,0,0,0],"nm",null,false,"L",null,1,false,false,0,"nanometers; nanometres","LOINC","Len","Clinical","",null,null,null,null,false],[false,"nanometer per second per liter","nm/s/L","(NM/S)/L","length",0.000001,[-2,-1,0,0,0,0,0],"(nm/s)/L",null,false,"L",null,1,false,false,0,"nm/sec/liter; nm/sec/litre; nm per s per l; nm per sec per l; nanometers per second per liter; nanometre per second per litre; nanometres per second per litre","LOINC","VelCnc","Clinical","",null,null,null,null,false],[false,"nanomole","nmol","NMOL","amount of substance",602213670000000,[0,0,0,0,0,0,0],"nmol","si",true,null,null,1,false,false,1,"nanomoles","LOINC","Sub","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per 24 hour","nmol/(24.h)","NMOL/(24.HR)","amount of substance",6970065625,[0,-1,0,0,0,0,0],"nmol/h","si",true,null,null,1,false,false,1,"nmol/24hr; nmol/24 hr; nanomoles per 24 hours; nmol/day; nanomoles per day; nmol per day; nanomole/day; nanomol/day","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per day","nmol/d","NMOL/D","amount of substance",6970065625,[0,-1,0,0,0,0,0],"nmol/d","si",true,null,null,1,false,false,1,"nmol/day; nanomoles per day; nmol per day; nanomole/day; nanomol/day; nmol/24hr; nmol/24 hr; nanomoles per 24 hours; ","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per deciliter","nmol/dL","NMOL/DL","amount of substance",6022136700000000000,[-3,0,0,0,0,0,0],"nmol/dL","si",true,null,null,1,false,false,1,"nmol per dL; nanomoles per deciliter; nanomole per decilitre; nanomoles per decilitre; nanomole/deciliter; nanomole/decilitre; nanomol/deciliter; nanomol/decilitre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per gram","nmol/g","NMOL/G","amount of substance",602213670000000,[0,0,-1,0,0,0,0],"nmol/g","si",true,null,null,1,false,false,1,"nmol per gram; nanomoles per gram; nanomole/gram","LOINC","SCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per hour per liter","nmol/h/L","(NMOL/HR)/L","amount of substance",167281575000000,[-3,-1,0,0,0,0,0],"(nmol/h)/L","si",true,null,null,1,false,false,1,"nmol/hrs/L; nmol per hrs per L; nanomoles per hours per liter; litre; enzymatic activity per volume; enzyme activities","LOINC","CCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per liter","nmol/L","NMOL/L","amount of substance",602213670000000000,[-3,0,0,0,0,0,0],"nmol/L","si",true,null,null,1,false,false,1,"nmol per L; nanomoles per liter; litre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per milligram","nmol/mg","NMOL/MG","amount of substance",602213670000000000,[0,0,-1,0,0,0,0],"nmol/mg","si",true,null,null,1,false,false,1,"nmol per mg; nanomoles per milligram","LOINC","SCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per milligram per hour","nmol/mg/h","(NMOL/MG)/HR","amount of substance",167281575000000,[0,-1,-1,0,0,0,0],"(nmol/mg)/h","si",true,null,null,1,false,false,1,"nmol/mg/hr; nmol per mg per hr; nanomoles per milligrams per hour","LOINC","SCntRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per milligram of protein","nmol/mg{prot}","NMOL/MG","amount of substance",602213670000000000,[0,0,-1,0,0,0,0],"nmol/mg","si",true,null,null,1,false,false,1,"nanomoles; nmol/mg prot; nmol per mg prot","LOINC","Ratio; CCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per minute","nmol/min","NMOL/MIN","amount of substance",10036894500000,[0,-1,0,0,0,0,0],"nmol/min","si",true,null,null,1,false,false,1,"nmol per min; nanomoles per minute; milli enzyme units; enzyme activity per volume; enzymatic activity","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min. nmol/min = mU (milli enzyme unit)","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per minute per milliliter","nmol/min/mL","(NMOL/MIN)/ML","amount of substance",10036894500000000000,[-3,-1,0,0,0,0,0],"(nmol/min)/mL","si",true,null,null,1,false,false,1,"nmol per min per mL; nanomoles per minutes per milliliter; millilitre; milli enzyme units per volume; enzyme activity; enzymatic activity","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min. nmol/mL/min = mU/mL","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per milliliter","nmol/mL","NMOL/ML","amount of substance",602213670000000000000,[-3,0,0,0,0,0,0],"nmol/mL","si",true,null,null,1,false,false,1,"nmol per mL; nanomoles per milliliter; millilitre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per milliliter per hour","nmol/mL/h","(NMOL/ML)/HR","amount of substance",167281575000000000,[-3,-1,0,0,0,0,0],"(nmol/mL)/h","si",true,null,null,1,false,false,1,"nmol/mL/hr; nmol per mL per hr; nanomoles per milliliters per hour; millilitres; milli enzyme units per volume; enzyme activity; enzymatic activity","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min.","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per milliliter per minute","nmol/mL/min","(NMOL/ML)/MIN","amount of substance",10036894500000000000,[-3,-1,0,0,0,0,0],"(nmol/mL)/min","si",true,null,null,1,false,false,1,"nmol per mL per min; nanomoles per milliliters per min; millilitres; milli enzyme units per volume; enzyme activity; enzymatic activity","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min. nmol/mL/min = mU/mL","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per millimole","nmol/mmol","NMOL/MMOL","amount of substance",0.000001,[0,0,0,0,0,0,0],"nmol/mmol","si",true,null,null,1,false,false,0,"nmol per mmol; nanomoles per millimole","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per millimole of creatinine","nmol/mmol{creat}","NMOL/MMOL","amount of substance",0.000001,[0,0,0,0,0,0,0],"nmol/mmol","si",true,null,null,1,false,false,0,"nanomoles","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per mole","nmol/mol","NMOL/MOL","amount of substance",1e-9,[0,0,0,0,0,0,0],"nmol/mol","si",true,null,null,1,false,false,0,"nmol per mole; nanomoles","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per nanomole","nmol/nmol","NMOL/NMOL","amount of substance",1,[0,0,0,0,0,0,0],"nmol/nmol","si",true,null,null,1,false,false,0,"nmol per nmol; nanomoles","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per second","nmol/s","NMOL/S","amount of substance",602213670000000,[0,-1,0,0,0,0,0],"nmol/s","si",true,null,null,1,false,false,1,"nmol/sec; nmol per sec; nanomoles per sercond; milli enzyme units; enzyme activity; enzymatic activity","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min.","10*23","10*23","6.0221367",6.0221367,false],[false,"nanomole per second per liter","nmol/s/L","(NMOL/S)/L","amount of substance",602213670000000000,[-3,-1,0,0,0,0,0],"(nmol/s)/L","si",true,null,null,1,false,false,1,"nmol/sec/L; nmol per s per L; nmol per sec per L; nanomoles per seconds per liter; litre; milli enzyme units per volume; enzyme activity; enzymatic activity","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min.","10*23","10*23","6.0221367",6.0221367,false],[false,"nanosecond","ns","NS","time",1e-9,[0,1,0,0,0,0,0],"ns",null,false,"T",null,1,false,false,0,"nanoseconds","LOINC","Time","Clinical","",null,null,null,null,false],[false,"nanoenzyme unit per milliliter","nU/mL","NU/ML","catalytic activity",10036894500000,[-3,-1,0,0,0,0,0],"nU/mL","chemical",true,null,null,1,false,false,1,"nU per mL; nanoenzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 fU = pmol/min","umol/min","UMOL/MIN","1",1,false],[false,"Ohm meter","Ohm.m","OHM.M","electric resistance",1000,[3,-1,1,0,0,-2,0],"Ω.m","si",true,null,null,1,false,false,0,"electric resistivity; meters; metres","LOINC","","Clinical","unit of electric resistivity","V/A","V/A","1",1,false],[false,"osmole per kilogram","osm/kg","OSM/KG","amount of substance (dissolved particles)",602213670000000000000,[0,0,-1,0,0,0,0],"osm/kg","chemical",true,null,null,1,false,false,1,"osm per kg; osmoles per kilogram; osmols","LOINC","Osmol","Clinical","","mol","MOL","1",1,false],[false,"osmole per liter","osm/L","OSM/L","amount of substance (dissolved particles)",6.0221366999999994e+26,[-3,0,0,0,0,0,0],"osm/L","chemical",true,null,null,1,false,false,1,"osm per L; osmoles per liter; litre; osmols","LOINC","Osmol","Clinical","","mol","MOL","1",1,false],[false,"picoampere","pA","PA","electric current",1e-12,[0,-1,0,0,0,1,0],"pA","si",true,null,null,1,false,false,0,"picoamperes","LOINC","","Clinical","equal to 10^-12 amperes","C/s","C/S","1",1,false],[false,"picogram","pg","PG","mass",1e-12,[0,0,1,0,0,0,0],"pg",null,false,"M",null,1,false,false,0,"picograms","LOINC","Mass; EntMass","Clinical","",null,null,null,null,false],[false,"picogram per deciliter","pg/dL","PG/DL","mass",9.999999999999999e-9,[-3,0,1,0,0,0,0],"pg/dL",null,false,"M",null,1,false,false,0,"pg per dL; picograms; decilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"picogram per liter","pg/L","PG/L","mass",1e-9,[-3,0,1,0,0,0,0],"pg/L",null,false,"M",null,1,false,false,0,"pg per L; picograms; litre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"picogram per milligram","pg/mg","PG/MG","mass",1e-9,[0,0,0,0,0,0,0],"pg/mg",null,false,"M",null,1,false,false,0,"pg per mg; picograms","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"picogram per milliliter","pg/mL","PG/ML","mass",0.000001,[-3,0,1,0,0,0,0],"pg/mL",null,false,"M",null,1,false,false,0,"pg per mL; picograms per milliliter; millilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"picogram per millimeter","pg/mm","PG/MM","mass",1e-9,[-1,0,1,0,0,0,0],"pg/mm",null,false,"M",null,1,false,false,0,"pg per mm; picogram/millimeter; picogram/millimetre; picograms per millimeter; millimetre","LOINC","Lineic Mass","Clinical","",null,null,null,null,false],[false,"picokatal","pkat","PKAT","catalytic activity",602213670000,[0,-1,0,0,0,0,0],"pkat","chemical",true,null,null,1,false,false,1,"pkats; picokatals","LOINC","CAct","Clinical","kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.","mol/s","MOL/S","1",1,false],[false,"picoliter","pL","PL","volume",1e-15,[3,0,0,0,0,0,0],"pL","iso1000",true,null,null,1,false,false,0,"picoliters; picolitres","LOINC","Vol","Clinical","","l",null,"1",1,false],[false,"picometer","pm","PM","length",1e-12,[1,0,0,0,0,0,0],"pm",null,false,"L",null,1,false,false,0,"picometers; picometres","LOINC","Len","Clinical","",null,null,null,null,false],[false,"picomole","pmol","PMOL","amount of substance",602213670000,[0,0,0,0,0,0,0],"pmol","si",true,null,null,1,false,false,1,"picomoles; pmols","LOINC","Sub","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per 24 hour","pmol/(24.h)","PMOL/(24.HR)","amount of substance",6970065.625,[0,-1,0,0,0,0,0],"pmol/h","si",true,null,null,1,false,false,1,"pmol/24hrs; pmol/24 hrs; pmol per 24 hrs; 24hrs; days; dy; picomoles per 24 hours","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per day","pmol/d","PMOL/D","amount of substance",6970065.625,[0,-1,0,0,0,0,0],"pmol/d","si",true,null,null,1,false,false,1,"pmol/dy; pmol per day; 24 hours; 24hrs; 24 hrs; picomoles","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per deciliter","pmol/dL","PMOL/DL","amount of substance",6022136700000000,[-3,0,0,0,0,0,0],"pmol/dL","si",true,null,null,1,false,false,1,"pmol per dL; picomoles per deciliter; decilitre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per gram","pmol/g","PMOL/G","amount of substance",602213670000,[0,0,-1,0,0,0,0],"pmol/g","si",true,null,null,1,false,false,1,"pmol per gm; picomoles per gram; picomole/gram","LOINC","SCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per hour per milliliter ","pmol/h/mL","(PMOL/HR)/ML","amount of substance",167281575000000,[-3,-1,0,0,0,0,0],"(pmol/h)/mL","si",true,null,null,1,false,false,1,"pmol/hrs/mL; pmol per hrs per mL; picomoles per hour per milliliter; millilitre; micro enzyme units per volume; enzymatic activity; enzyme activity","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min. ","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per liter","pmol/L","PMOL/L","amount of substance",602213670000000,[-3,0,0,0,0,0,0],"pmol/L","si",true,null,null,1,false,false,1,"picomole/liter; pmol per L; picomoles; litre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per minute","pmol/min","PMOL/MIN","amount of substance",10036894500,[0,-1,0,0,0,0,0],"pmol/min","si",true,null,null,1,false,false,1,"picomole/minute; pmol per min; picomoles per minute; micro enzyme units; enzymatic activity; enzyme activity","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min. pmol/min = uU (micro enzyme unit)","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per milliliter","pmol/mL","PMOL/ML","amount of substance",602213670000000000,[-3,0,0,0,0,0,0],"pmol/mL","si",true,null,null,1,false,false,1,"picomole/milliliter; picomole/millilitre; pmol per mL; picomoles; millilitre; picomols; pmols","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"picomole per micromole","pmol/umol","PMOL/UMOL","amount of substance",0.000001,[0,0,0,0,0,0,0],"pmol/μmol","si",true,null,null,1,false,false,0,"pmol/mcgmol; picomole/micromole; pmol per umol; pmol per mcgmol; picomoles ","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"picosecond","ps","PS","time",1e-12,[0,1,0,0,0,0,0],"ps",null,false,"T",null,1,false,false,0,"picoseconds; psec","LOINC","Time","Clinical","",null,null,null,null,false],[false,"picotesla","pT","PT","magnetic flux density",1e-9,[0,-1,1,0,0,-1,0],"pT","si",true,null,null,1,false,false,0,"picoteslas","LOINC","","Clinical","SI unit of magnetic field strength for magnetic field B","Wb/m2","WB/M2","1",1,false],[false,"enzyme unit per 12 hour","U/(12.h)","U/(12.HR)","catalytic activity",232335520833.33334,[0,-2,0,0,0,0,0],"U/h","chemical",true,null,null,1,false,false,1,"U/12hrs; U/ 12hrs; U per 12 hrs; 12hrs; enzyme units per 12 hours; enzyme activity; enzymatic activity per time; umol per min per 12 hours; micromoles per minute per 12 hours; umol/min/12hr","LOINC","CRat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per 2 hour","U/(2.h)","U/(2.HR)","catalytic activity",1394013125000,[0,-2,0,0,0,0,0],"U/h","chemical",true,null,null,1,false,false,1,"U/2hrs; U/ 2hrs; U per 2 hrs; 2hrs; enzyme units per 2 hours; enzyme activity; enzymatic activity per time; umol per minute per 2 hours; micromoles per minute; umol/min/2hr; umol per min per 2hr","LOINC","CRat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per 24 hour","U/(24.h)","U/(24.HR)","catalytic activity",116167760416.66667,[0,-2,0,0,0,0,0],"U/h","chemical",true,null,null,1,false,false,1,"U/24hrs; U/ 24hrs; U per 24 hrs; 24hrs; enzyme units per 24 hours; enzyme activity; enzymatic activity per time; micromoles per minute per 24 hours; umol/min/24hr; umol per min per 24hr","LOINC","CRat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per 10","U/10","U/10","catalytic activity",1003689450000000,[0,-1,0,0,0,0,0],"U","chemical",true,null,null,1,false,false,1,"enzyme unit/10; U per 10; enzyme units per 10; enzymatic activity; enzyme activity; micromoles per minute; umol/min/10","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per 10 billion","U/10*10","U/(10*10)","catalytic activity",1003689.45,[0,-1,0,0,0,0,0],"U/(10<sup>10</sup>)","chemical",true,null,null,1,false,false,1,"U per 10*10; enzyme units per 10*10; U per 10 billion; enzyme units; enzymatic activity; micromoles per minute per 10 billion; umol/min/10*10","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per trillion","U/10*12","U/(10*12)","catalytic activity",10036.8945,[0,-1,0,0,0,0,0],"U/(10<sup>12</sup>)","chemical",true,null,null,1,false,false,1,"enzyme unit/10*12; U per 10*12; enzyme units per 10*12; enzyme units per trillion; enzymatic activity; micromoles per minute per trillion; umol/min/10*12; umol per min per 10*12","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per million","U/10*6","U/(10*6)","catalytic activity",10036894500,[0,-1,0,0,0,0,0],"U/(10<sup>6</sup>)","chemical",true,null,null,1,false,false,1,"enzyme unit/10*6; U per 10*6; enzyme units per 10*6; enzyme units; enzymatic activity per volume; micromoles per minute per million; umol/min/10*6; umol per min per 10*6","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per billion","U/10*9","U/(10*9)","catalytic activity",10036894.5,[0,-1,0,0,0,0,0],"U/(10<sup>9</sup>)","chemical",true,null,null,1,false,false,1,"enzyme unit/10*9; U per 10*9; enzyme units per 10*9; enzymatic activity per volume; micromoles per minute per billion; umol/min/10*9; umol per min per 10*9","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per day","U/d","U/D","catalytic activity",116167760416.66667,[0,-2,0,0,0,0,0],"U/d","chemical",true,null,null,1,false,false,1,"U/dy; enzyme units per day; enzyme units; enzyme activity; enzymatic activity per time; micromoles per minute per day; umol/min/day; umol per min per day","LOINC","CRat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per deciliter","U/dL","U/DL","catalytic activity",100368945000000000000,[-3,-1,0,0,0,0,0],"U/dL","chemical",true,null,null,1,false,false,1,"U per dL; enzyme units per deciliter; decilitre; micromoles per minute per deciliter; umol/min/dL; umol per min per dL","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per gram","U/g","U/G","catalytic activity",10036894500000000,[0,-1,-1,0,0,0,0],"U/g","chemical",true,null,null,1,false,false,1,"U/gm; U per gm; enzyme units per gram; micromoles per minute per gram; umol/min/g; umol per min per g","LOINC","CCnt","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per hour","U/h","U/HR","catalytic activity",2788026250000,[0,-2,0,0,0,0,0],"U/h","chemical",true,null,null,1,false,false,1,"U/hr; U per hr; enzyme units per hour; micromoles per minute per hour; umol/min/hr; umol per min per hr","LOINC","CRat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per liter","U/L","U/L","catalytic activity",10036894500000000000,[-3,-1,0,0,0,0,0],"U/L","chemical",true,null,null,1,false,false,1,"enzyme unit/liter; enzyme unit/litre; U per L; enzyme units per liter; enzyme unit per litre; micromoles per minute per liter; umol/min/L; umol per min per L","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per minute","U/min","U/MIN","catalytic activity",167281575000000,[0,-2,0,0,0,0,0],"U/min","chemical",true,null,null,1,false,false,1,"enzyme unit/minute; U per min; enzyme units; umol/min/min; micromoles per minute per minute; micromoles per min per min; umol","LOINC","CRat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per milliliter","U/mL","U/ML","catalytic activity",1.00368945e+22,[-3,-1,0,0,0,0,0],"U/mL","chemical",true,null,null,1,false,false,1,"U per mL; enzyme units per milliliter; millilitre; micromoles per minute per milliliter; umol/min/mL; umol per min per mL","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"enzyme unit per second","U/s","U/S","catalytic activity",10036894500000000,[0,-2,0,0,0,0,0],"U/s","chemical",true,null,null,1,false,false,1,"U/sec; U per second; enzyme units per second; micromoles per minute per second; umol/min/sec; umol per min per sec","LOINC","CRat","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min)","umol/min","UMOL/MIN","1",1,false],[false,"micro international unit","u[IU]","U[IU]","arbitrary",0.000001,[0,0,0,0,0,0,0],"μi.U.","chemical",true,null,null,1,false,true,0,"uIU; u IU; microinternational units","LOINC","Arb","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"micro international unit per liter","u[IU]/L","U[IU]/L","arbitrary",0.001,[-3,0,0,0,0,0,0],"(μi.U.)/L","chemical",true,null,null,1,false,true,0,"uIU/L; u IU/L; uIU per L; microinternational units per liter; litre; ","LOINC","ACnc","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"micro international unit per milliliter","u[IU]/mL","U[IU]/ML","arbitrary",1,[-3,0,0,0,0,0,0],"(μi.U.)/mL","chemical",true,null,null,1,false,true,0,"uIU/mL; u IU/mL; uIU per mL; microinternational units per milliliter; millilitre","LOINC","ACnc","Clinical","International units (IU) are analyte and reference specimen  specific arbitrary units (held at WHO)","[iU]","[IU]","1",1,false],[false,"microequivalent","ueq","UEQ","amount of substance",602213670000000000,[0,0,0,0,0,0,0],"μeq","chemical",true,null,null,1,false,false,1,"microequivalents; 10^-6 equivalents; 10-6 equivalents","LOINC","Sub","Clinical","","mol","MOL","1",1,false],[false,"microequivalent per liter","ueq/L","UEQ/L","amount of substance",602213670000000000000,[-3,0,0,0,0,0,0],"μeq/L","chemical",true,null,null,1,false,false,1,"ueq per liter; litre; microequivalents","LOINC","MCnc","Clinical","","mol","MOL","1",1,false],[false,"microequivalent per milliliter","ueq/mL","UEQ/ML","amount of substance",6.0221367000000003e+23,[-3,0,0,0,0,0,0],"μeq/mL","chemical",true,null,null,1,false,false,1,"ueq per milliliter; millilitre; microequivalents","LOINC","MCnc","Clinical","","mol","MOL","1",1,false],[false,"microgram","ug","UG","mass",0.000001,[0,0,1,0,0,0,0],"μg",null,false,"M",null,1,false,false,0,"mcg; micrograms; 10^-6 grams; 10-6 grams","LOINC","Mass","Clinical","",null,null,null,null,false],[false,"microgram per 100 gram","ug/(100.g)","UG/(100.G)","mass",1e-8,[0,0,0,0,0,0,0],"μg/g",null,false,"M",null,1,false,false,0,"ug/100gm; ug/100 gm; mcg; ug per 100g; 100 gm; mcg per 100g; micrograms per 100 grams","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"microgram per 24 hour","ug/(24.h)","UG/(24.HR)","mass",1.1574074074074074e-11,[0,-1,1,0,0,0,0],"μg/h",null,false,"M",null,1,false,false,0,"ug/24hrs; ug/24 hrs; mcg/24hrs; ug per 24hrs; mcg per 24hrs; 24 hrs; micrograms per 24 hours","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"microgram per 8 hour","ug/(8.h)","UG/(8.HR)","mass",3.472222222222222e-11,[0,-1,1,0,0,0,0],"μg/h",null,false,"M",null,1,false,false,0,"ug/8hrs; ug/8 hrs; mcg/8hrs; ug per 8hrs; mcg per 8hrs; 8 hrs; micrograms per 8 hours; shift","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"microgram per square foot (international)","ug/[sft_i]","UG/[SFT_I]","mass",0.000010763910416709721,[-2,0,1,0,0,0,0],"μg",null,false,"M",null,1,false,false,0,"ug/sft; ug/ft2; ug/ft^2; ug/sq. ft; micrograms; sq. foot; foot squared","LOINC","ArMass","Clinical","",null,null,null,null,false],[false,"microgram per day","ug/d","UG/D","mass",1.1574074074074074e-11,[0,-1,1,0,0,0,0],"μg/d",null,false,"M",null,1,false,false,0,"ug/dy; mcg/dy; ug per day; mcg; micrograms per day","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"microgram per deciliter","ug/dL","UG/DL","mass",0.009999999999999998,[-3,0,1,0,0,0,0],"μg/dL",null,false,"M",null,1,false,false,0,"ug per dL; mcg/dl; mcg per dl; micrograms per deciliter; decilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"microgram per gram","ug/g","UG/G","mass",0.000001,[0,0,0,0,0,0,0],"μg/g",null,false,"M",null,1,false,false,0,"ug per gm; mcg/gm; mcg per g; micrograms per gram","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"microgram per hour","ug/h","UG/HR","mass",2.7777777777777777e-10,[0,-1,1,0,0,0,0],"μg/h",null,false,"M",null,1,false,false,0,"ug/hr; mcg/hr; mcg per hr; ug per hr; ug per hour; micrograms","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"microgram per kilogram","ug/kg","UG/KG","mass",9.999999999999999e-10,[0,0,0,0,0,0,0],"μg/kg",null,false,"M",null,1,false,false,0,"ug per kg; mcg/kg; mcg per kg; micrograms per kilogram","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"microgram per kilogram per 8 hour","ug/kg/(8.h)","(UG/KG)/(8.HR)","mass",3.472222222222222e-14,[0,-1,0,0,0,0,0],"(μg/kg)/h",null,false,"M",null,1,false,false,0,"ug/kg/8hrs; mcg/kg/8hrs; ug/kg/8 hrs; mcg/kg/8 hrs; ug per kg per 8hrs; 8 hrs; mcg per kg per 8hrs; micrograms per kilograms per 8 hours; shift","LOINC","","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"microgram per kilogram per day","ug/kg/d","(UG/KG)/D","mass",1.1574074074074072e-14,[0,-1,0,0,0,0,0],"(μg/kg)/d",null,false,"M",null,1,false,false,0,"ug/(kg.d); ug/kg/dy; mcg/kg/day; ug per kg per dy; 24 hours; 24hrs; mcg; kilograms; microgram per kilogram and day","LOINC","","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"microgram per kilogram per hour","ug/kg/h","(UG/KG)/HR","mass",2.7777777777777774e-13,[0,-1,0,0,0,0,0],"(μg/kg)/h",null,false,"M",null,1,false,false,0,"ug/(kg.h); ug/kg/hr; mcg/kg/hr; ug per kg per hr; mcg per kg per hr; kilograms","LOINC","","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"microgram per kilogram per minute","ug/kg/min","(UG/KG)/MIN","mass",1.6666666666666664e-11,[0,-1,0,0,0,0,0],"(μg/kg)/min",null,false,"M",null,1,false,false,0,"ug/kg/min; ug/kg/min; mcg/kg/min; ug per kg per min; mcg; micrograms per kilograms per minute ","LOINC","","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"microgram per liter","ug/L","UG/L","mass",0.001,[-3,0,1,0,0,0,0],"μg/L",null,false,"M",null,1,false,false,0,"mcg/L; ug per L; mcg; micrograms per liter; litre ","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"microgram per liter per 24 hour","ug/L/(24.h)","(UG/L)/(24.HR)","mass",1.1574074074074074e-8,[-3,-1,1,0,0,0,0],"(μg/L)/h",null,false,"M",null,1,false,false,0,"ug/L/24hrs; ug/L/24 hrs; mcg/L/24hrs; ug per L per 24hrs; 24 hrs; day; dy mcg; micrograms per liters per 24 hours; litres","LOINC","","Clinical","unit used to measure mass dose rate per patient body mass",null,null,null,null,false],[false,"microgram per square meter","ug/m2","UG/M2","mass",0.000001,[-2,0,1,0,0,0,0],"μg/(m<sup>2</sup>)",null,false,"M",null,1,false,false,0,"ug/m^2; ug/sq. m; mcg/m2; mcg/m^2; mcg/sq. m; ug per m2; m^2; sq. meter; mcg; micrograms per square meter; meter squared; metre","LOINC","ArMass","Clinical","unit used to measure mass dose per patient body surface area",null,null,null,null,false],[false,"microgram per cubic meter","ug/m3","UG/M3","mass",0.000001,[-3,0,1,0,0,0,0],"μg/(m<sup>3</sup>)",null,false,"M",null,1,false,false,0,"ug/m^3; ug/cu. m; mcg/m3; mcg/m^3; mcg/cu. m; ug per m3; ug per m^3; ug per cu. m; mcg; micrograms per cubic meter; meter cubed; metre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"microgram per milligram","ug/mg","UG/MG","mass",0.001,[0,0,0,0,0,0,0],"μg/mg",null,false,"M",null,1,false,false,0,"ug per mg; mcg/mg; mcg per mg; micromilligrams per milligram","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"microgram per minute","ug/min","UG/MIN","mass",1.6666666666666667e-8,[0,-1,1,0,0,0,0],"μg/min",null,false,"M",null,1,false,false,0,"ug per min; mcg/min; mcg per min; microminutes per minute","LOINC","MRat","Clinical","",null,null,null,null,false],[false,"microgram per milliliter","ug/mL","UG/ML","mass",1,[-3,0,1,0,0,0,0],"μg/mL",null,false,"M",null,1,false,false,0,"ug per mL; mcg/mL; mcg per mL; micrograms per milliliter; millilitre","LOINC","MCnc","Clinical","",null,null,null,null,false],[false,"microgram per millimole","ug/mmol","UG/MMOL","mass",1.660540186674939e-27,[0,0,1,0,0,0,0],"μg/mmol",null,false,"M",null,1,false,false,-1,"ug per mmol; mcg/mmol; mcg per mmol; micrograms per millimole","LOINC","Ratio","Clinical","",null,null,null,null,false],[false,"microgram per nanogram","ug/ng","UG/NG","mass",999.9999999999999,[0,0,0,0,0,0,0],"μg/ng",null,false,"M",null,1,false,false,0,"ug per ng; mcg/ng; mcg per ng; micrograms per nanogram","LOINC","MCnt","Clinical","",null,null,null,null,false],[false,"microkatal","ukat","UKAT","catalytic activity",602213670000000000,[0,-1,0,0,0,0,0],"μkat","chemical",true,null,null,1,false,false,1,"microkatals; ukats","LOINC","CAct","Clinical","kat is a unit of catalytic activity with base units = mol/s. Rarely used because its units are too large to practically express catalytic activity. See enzyme unit [U] which is the standard unit for catalytic activity.","mol/s","MOL/S","1",1,false],[false,"microliter","uL","UL","volume",1e-9,[3,0,0,0,0,0,0],"μL","iso1000",true,null,null,1,false,false,0,"microliters; microlitres; mcl","LOINC","Vol","Clinical","","l",null,"1",1,false],[false,"microliter per 2 hour","uL/(2.h)","UL/(2.HR)","volume",1.388888888888889e-13,[3,-1,0,0,0,0,0],"μL/h","iso1000",true,null,null,1,false,false,0,"uL/2hrs; uL/2 hrs; mcg/2hr; mcg per 2hr; uL per 2hr; uL per 2 hrs; microliters per 2 hours; microlitres ","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"microliter per hour","uL/h","UL/HR","volume",2.777777777777778e-13,[3,-1,0,0,0,0,0],"μL/h","iso1000",true,null,null,1,false,false,0,"uL/hr; mcg/hr; mcg per hr; uL per hr; microliters per hour; microlitres","LOINC","VRat","Clinical","","l",null,"1",1,false],[false,"micrometer","um","UM","length",0.000001,[1,0,0,0,0,0,0],"μm",null,false,"L",null,1,false,false,0,"micrometers; micrometres; μm; microns","LOINC","Len","Clinical","Unit of length that is usually used in tests related to the eye",null,null,null,null,false],[false,"microns per second","um/s","UM/S","length",0.000001,[1,-1,0,0,0,0,0],"μm/s",null,false,"L",null,1,false,false,0,"um/sec; micron/second; microns/second; um per sec; micrometers per second; micrometres","LOINC","Vel","Clinical","",null,null,null,null,false],[false,"micromole","umol","UMOL","amount of substance",602213670000000000,[0,0,0,0,0,0,0],"μmol","si",true,null,null,1,false,false,1,"micromoles; umols","LOINC","Sub","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per 2 hour","umol/(2.h)","UMOL/(2.HR)","amount of substance",83640787500000,[0,-1,0,0,0,0,0],"μmol/h","si",true,null,null,1,false,false,1,"umol/2hrs; umol/2 hrs; umol per 2 hrs; 2hrs; micromoles per 2 hours","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per 24 hour","umol/(24.h)","UMOL/(24.HR)","amount of substance",6970065625000,[0,-1,0,0,0,0,0],"μmol/h","si",true,null,null,1,false,false,1,"umol/24hrs; umol/24 hrs; umol per 24 hrs; per 24hrs; micromoles per 24 hours","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per 8 hour","umol/(8.h)","UMOL/(8.HR)","amount of substance",20910196875000,[0,-1,0,0,0,0,0],"μmol/h","si",true,null,null,1,false,false,1,"umol/8hr; umol/8 hr; umol per 8 hr; umol per 8hr; umols per 8hr; umol per 8 hours; micromoles per 8 hours; shift","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per day","umol/d","UMOL/D","amount of substance",6970065625000,[0,-1,0,0,0,0,0],"μmol/d","si",true,null,null,1,false,false,1,"umol/day; umol per day; umols per day; umol per days; micromoles per days; umol/24hr; umol/24 hr; umol per 24 hr; umol per 24hr; umols per 24hr; umol per 24 hours; micromoles per 24 hours","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per deciliter","umol/dL","UMOL/DL","amount of substance",6.0221367e+21,[-3,0,0,0,0,0,0],"μmol/dL","si",true,null,null,1,false,false,1,"micromole/deciliter; micromole/decilitre; umol per dL; micromoles per deciliters; micromole per decilitres","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per gram","umol/g","UMOL/G","amount of substance",602213670000000000,[0,0,-1,0,0,0,0],"μmol/g","si",true,null,null,1,false,false,1,"micromole/gram; umol per g; micromoles per gram","LOINC","SCnt; Ratio","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per hour","umol/h","UMOL/HR","amount of substance",167281575000000,[0,-1,0,0,0,0,0],"μmol/h","si",true,null,null,1,false,false,1,"umol/hr; umol per hr; umol per hour; micromoles per hours","LOINC","SRat","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per kilogram","umol/kg","UMOL/KG","amount of substance",602213670000000,[0,0,-1,0,0,0,0],"μmol/kg","si",true,null,null,1,false,false,1,"umol per kg; micromoles per kilogram","LOINC","SCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per liter","umol/L","UMOL/L","amount of substance",602213670000000000000,[-3,0,0,0,0,0,0],"μmol/L","si",true,null,null,1,false,false,1,"micromole/liter; micromole/litre; umol per liter; micromoles per liter; litre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per liter per hour","umol/L/h","(UMOL/L)/HR","amount of substance",167281575000000000,[-3,-1,0,0,0,0,0],"(μmol/L)/h","si",true,null,null,1,false,false,1,"umol/liter/hr; umol/litre/hr; umol per L per hr; umol per liter per hour; micromoles per liters per hour; litre","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min; umol/L/h is a derived unit of enzyme units","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per milligram","umol/mg","UMOL/MG","amount of substance",602213670000000000000,[0,0,-1,0,0,0,0],"μmol/mg","si",true,null,null,1,false,false,1,"micromole/milligram; umol per mg; micromoles per milligram","LOINC","SCnt","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per minute","umol/min","UMOL/MIN","amount of substance",10036894500000000,[0,-1,0,0,0,0,0],"μmol/min","si",true,null,null,1,false,false,1,"micromole/minute; umol per min; micromoles per minute; enzyme units","LOINC","CAct","Clinical","unit for the enzyme unit U = umol/min","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per minute per gram","umol/min/g","(UMOL/MIN)/G","amount of substance",10036894500000000,[0,-1,-1,0,0,0,0],"(μmol/min)/g","si",true,null,null,1,false,false,1,"umol/min/gm; umol per min per gm; micromoles per minutes per gram; U/g; enzyme units","LOINC","CCnt","Clinical","unit for the enzyme unit U = umol/min. umol/min/g = U/g","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per minute per liter","umol/min/L","(UMOL/MIN)/L","amount of substance",10036894500000000000,[-3,-1,0,0,0,0,0],"(μmol/min)/L","si",true,null,null,1,false,false,1,"umol/min/liter; umol/minute/liter; micromoles per minutes per liter; litre; enzyme units; U/L","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min. umol/min/L = U/L","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per milliliter","umol/mL","UMOL/ML","amount of substance",6.0221367000000003e+23,[-3,0,0,0,0,0,0],"μmol/mL","si",true,null,null,1,false,false,1,"umol per mL; micromoles per milliliter; millilitre","LOINC","SCnc","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per milliliter per minute","umol/mL/min","(UMOL/ML)/MIN","amount of substance",1.00368945e+22,[-3,-1,0,0,0,0,0],"(μmol/mL)/min","si",true,null,null,1,false,false,1,"umol per mL per min; micromoles per milliliters per minute; millilitres","LOINC","CCnc","Clinical","unit for the enzyme unit U = umol/min. umol/mL/min = U/mL","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per millimole","umol/mmol","UMOL/MMOL","amount of substance",0.001,[0,0,0,0,0,0,0],"μmol/mmol","si",true,null,null,1,false,false,0,"umol per mmol; micromoles per millimole","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per mole","umol/mol","UMOL/MOL","amount of substance",0.000001,[0,0,0,0,0,0,0],"μmol/mol","si",true,null,null,1,false,false,0,"umol per mol; micromoles per mole","LOINC","SRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"micromole per micromole","umol/umol","UMOL/UMOL","amount of substance",1,[0,0,0,0,0,0,0],"μmol/μmol","si",true,null,null,1,false,false,0,"umol per umol; micromoles per micromole","LOINC","Srto; SFr; EntSRto","Clinical","","10*23","10*23","6.0221367",6.0221367,false],[false,"microOhm","uOhm","UOHM","electric resistance",0.001,[2,-1,1,0,0,-2,0],"μΩ","si",true,null,null,1,false,false,0,"microOhms; µΩ","LOINC","","Clinical","unit of electric resistance","V/A","V/A","1",1,false],[false,"microsecond","us","US","time",0.000001,[0,1,0,0,0,0,0],"μs",null,false,"T",null,1,false,false,0,"microseconds","LOINC","Time","Clinical","",null,null,null,null,false],[false,"micro enzyme unit per gram","uU/g","UU/G","catalytic activity",10036894500,[0,-1,-1,0,0,0,0],"μU/g","chemical",true,null,null,1,false,false,1,"uU per gm; micro enzyme units per gram; micro enzymatic activity per mass; enzyme activity","LOINC","CCnt","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 uU = 1pmol/min","umol/min","UMOL/MIN","1",1,false],[false,"micro enzyme unit per liter","uU/L","UU/L","catalytic activity",10036894500000,[-3,-1,0,0,0,0,0],"μU/L","chemical",true,null,null,1,false,false,1,"uU per L; micro enzyme units per liter; litre; enzymatic activity per volume; enzyme activity ","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 uU = 1pmol/min","umol/min","UMOL/MIN","1",1,false],[false,"micro enzyme unit per milliliter","uU/mL","UU/ML","catalytic activity",10036894500000000,[-3,-1,0,0,0,0,0],"μU/mL","chemical",true,null,null,1,false,false,1,"uU per mL; micro enzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity","LOINC","CCnc","Clinical","1 U is the standard enzyme unit which equals 1 micromole substrate catalyzed per minute (1 umol/min); 1 uU = 1pmol/min","umol/min","UMOL/MIN","1",1,false],[false,"microvolt","uV","UV","electric potential",0.001,[2,-2,1,0,0,-1,0],"μV","si",true,null,null,1,false,false,0,"microvolts","LOINC","Elpot","Clinical","unit of electric potential (voltage)","J/C","J/C","1",1,false]]}`), Zi = {
  license: Wi,
  prefixes: Ji,
  units: Yi
};
var ts;
function Qi() {
  if (ts) return Ue;
  ts = 1, Object.defineProperty(Ue, "__esModule", {
    value: !0
  }), Ue.ucumJsonDefs = Ue.UcumJsonDefs = void 0;
  var f = Gi(), g = Zs(), _ = Xs(), p = Oe(), a = ji().unpackArray;
  class r {
    /**
     * This method loads the JSON prefix and unit objects into the prefix and
     * unit tables.
     *
     * @returns nothing
     */
    loadJsonDefs() {
      const s = Zi;
      if (s.prefixes = a(s.prefixes), s.units = a(s.units), p.UnitTables.getInstance().unitsCount() === 0) {
        let i = g.PrefixTables.getInstance(), n = s.prefixes, l = n.length;
        for (let o = 0; o < l; o++) {
          let h = new f.Prefix(n[o]);
          i.add(h);
        }
        let t = p.UnitTables.getInstance(), m = s.units, d = m.length;
        for (let o = 0; o < d; o++) {
          let h = new _.Unit(m[o]);
          t.addUnit(h);
        }
      }
    }
    // end loadJsonDefs
  }
  Ue.UcumJsonDefs = r;
  var e = new r();
  return Ue.ucumJsonDefs = e, Ue;
}
var He = {}, ns;
function Xi() {
  if (ns) return He;
  ns = 1, Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.UnitString = void 0;
  var f = _(An());
  function g() {
    if (typeof WeakMap != "function") return null;
    var i = /* @__PURE__ */ new WeakMap();
    return g = function() {
      return i;
    }, i;
  }
  function _(i) {
    if (i && i.__esModule)
      return i;
    if (i === null || typeof i != "object" && typeof i != "function")
      return { default: i };
    var n = g();
    if (n && n.has(i))
      return n.get(i);
    var l = {}, t = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in i)
      if (Object.prototype.hasOwnProperty.call(i, m)) {
        var d = t ? Object.getOwnPropertyDescriptor(i, m) : null;
        d && (d.get || d.set) ? Object.defineProperty(l, m, d) : l[m] = i[m];
      }
    return l.default = i, n && n.set(i, l), l;
  }
  function p(i, n, l) {
    return n in i ? Object.defineProperty(i, n, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : i[n] = l, i;
  }
  var a = Se().Ucum, r = Xs().Unit, e = Oe().UnitTables, u = Zs().PrefixTables;
  class s {
    /**
     * Constructor
     */
    constructor() {
      this.utabs_ = e.getInstance(), this.pfxTabs_ = u.getInstance(), this.openEmph_ = a.openEmph_, this.closeEmph_ = a.closeEmph_, this.bracesMsg_ = "", this.parensFlag_ = "parens_placeholder", this.pFlagLen_ = this.parensFlag_.length, this.braceFlag_ = "braces_placeholder", this.bFlagLen_ = this.braceFlag_.length, this.vcMsgStart_ = null, this.vcMsgEnd_ = null, this.retMsg_ = [], this.parensUnits_ = [], this.annotations_ = [], this.suggestions = [];
    }
    // end constructor
    // The start of an error message about an invalid annotation character.
    // A regular expression for validating annotation strings.
    /**
     * Sets the emphasis strings to the HTML used in the webpage display - or
     * blanks them out, depending on the use parameter.
     *
     * @param use flag indicating whether or not to use the html message format;
     *  defaults to true
     */
    useHTMLInMessages(n) {
      n === void 0 || n ? (this.openEmph_ = a.openEmphHTML_, this.closeEmph_ = a.closeEmphHTML_) : (this.openEmph_ = a.openEmph_, this.closeEmph_ = a.closeEmph_);
    }
    // end useHTMLInMessages
    /**
     * Sets the braces message to be displayed for each unit string validation
     * requested, as appropriate.
     *
     * @param use flag indicating whether or not to use the braces message;
     *  defaults to true
     */
    useBraceMsgForEachString(n) {
      n === void 0 || n ? this.bracesMsg_ = a.bracesMsg_ : this.bracesMsg_ = "";
    }
    /**
     * Parses a unit string, returns a unit, a possibly updated version of
     * the string passed in, and messages and suggestions where appropriate.
     *
     * The string returned may be updated if the input string contained unit
     * names, e.g., "pound".  The unit code ([lb_av] for pound) is placed in
     * the string returned, a the returned messages array includes a note
     * explaining the substitution.
     *
     * @param uStr the string defining the unit
     * @param valConv indicates what type of request this is for - a request to
     *  validate (pass in 'validate') or a request to convert (pass in 'convert');
     *  optional, defaults to 'validate'
     * @param suggest a boolean to indicate whether or not suggestions are
     *  requested for a string that cannot be resolved to a valid unit;
     *  true indicates suggestions are wanted; false indicates they are not,
     *  and is the default if the parameter is not specified;
     * @returns an array containing:
     *   the unit object or null if a unit could not be created.  In cases where
     *     a fix was found for a problem string, .e.g., 2.mg for 2mg, a unit will
     *     be returned but an error message will also be returned, describing
     *     the substitution;
     *   the possibly updated unit string passed in;
     *   an array of any user messages (informational, error or warning)
     *     generated (or an empty array); and
     *   a suggestions array of hash objects (1 or more).  Each hash contains
     *   three elements:
     *     'msg' which is a message indicating what unit expression the
     *       suggestions are for;
     *     'invalidUnit' which is the unit expression the suggestions are
     *       for; and
     *     'units' which is an array of data for each suggested unit found.
     *        Each array will contain the unit code, the unit name and the
     *        unit guidance (if any).
     *   The return array will not contain a suggestions array if a valid unit
     *   was found or if suggestions were not requested.
     * @throws an error if nothing was specified.
     */
    parseString(n, l, t) {
      if (n = n.trim(), n === "" || n === null)
        throw new Error("Please specify a unit expression to be validated.");
      l === "validate" ? (this.vcMsgStart_ = a.valMsgStart_, this.vcMsgEnd_ = a.valMsgEnd_) : (this.vcMsgStart_ = a.cnvMsgStart_, this.vcMsgEnd_ = a.cnvMsgEnd_), t === void 0 || t === !1 ? this.suggestions_ = null : this.suggestions_ = [], this.retMsg_ = [], this.parensUnits_ = [], this.annotations_ = [];
      let m = n, d = [];
      if (n = this._getAnnotations(n), this.retMsg_.length > 0)
        d[0] = null, d[1] = null;
      else {
        this.retMsg_.length > 0;
        let o = null;
        for (o in a.specUnits_)
          for (; n.indexOf(o) !== -1; ) n = n.replace(o, a.specUnits_[o]);
        if (n.indexOf(" ") > -1)
          throw new Error("Blank spaces are not allowed in unit expressions.");
        d = this._parseTheString(n, m);
        let h = d[0];
        (f.isIntegerUnit(h) || typeof h == "number") && (h = new r({
          csCode_: m,
          ciCode_: m,
          magnitude_: h,
          name_: m
        }), d[0] = h);
      }
      return d[2] = this.retMsg_, this.suggestions_ && this.suggestions_.length > 0 && (d[3] = this.suggestions_), d;
    }
    // end parseString
    /**
     * Parses a unit string, returns a unit, a possibly updated version of
     * the string passed in, and messages where appropriate.  This should
     * only be called from within this class (or by test code).
     *
     * The string returned may be updated if the input string contained unit
     * names, e.g., "pound".  The unit code ([lb_av] for pound) is placed in
     * the string returned, a the returned messages array includes a note
     * explaining the substitution.
     *
     * @param uStr the string defining the unit
     * @param origString the original unit string passed in
     *
     * @returns
     *  an array containing:
     *    the unit object (or null if there were problems creating the unit); and
     *    the possibly updated unit string passed in.
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     * the this.parensUnits_ array is referenced and possibly populated by
     *   methods called within this one
     * the this.annotations_ array is referenced by methods called within
     *   this one
     * the this.suggestions_ array may be populated by methods called within
     *   this one
     */
    _parseTheString(n, l) {
      let t = null, m = this.retMsg_.length > 0, d = this._processParens(n, l);
      m = d[2];
      let o = [];
      if (!m) {
        n = d[0], l = d[1];
        let h = this._makeUnitsArray(n, l);
        if (m = h[2], !m) {
          o = h[0], l = h[1];
          let c = o.length;
          for (let y = 0; y < c; y++) {
            let T = o[y].un;
            if (f.isIntegerUnit(T))
              o[y].un = Number(T);
            else if (T.indexOf(this.parensFlag_) >= 0) {
              let N = this._getParensUnit(T, l);
              m || (m = N[1]), m || (o[y].un = N[0]);
            } else {
              let N = this._makeUnit(T, l);
              N[0] === null ? m = !0 : (o[y].un = N[0], l = N[1]);
            }
          }
        }
      }
      return m || (o[0] === null || o[0] === " " || o[0].un === void 0 || o[0].un === null) && this.retMsg_.length === 0 && (this.retMsg_.push(`Unit string (${l}) did not contain anything that could be used to create a unit, or else something that is not handled yet by this package.  Sorry`), m = !0), m || (t = this._performUnitArithmetic(o, l)), [t, l];
    }
    // end _parseTheString
    /**
     * Extracts all annotations from a unit string, replacing them with
     * placeholders for later evaluation.  The annotations are stored in the
     * this.annotations_ array.  This should only be called from within this
     * class (or by test code).
     *
     * @param uString the unit string being parsed
     * @returns the string after the annotations are replaced with placeholders
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     * the this.annotations_ array is populated by this method
     */
    _getAnnotations(n) {
      let l = n.indexOf("{");
      for (; l >= 0; ) {
        let t = n.indexOf("}");
        if (t < 0)
          this.retMsg_.push("Missing closing brace for annotation starting at " + this.openEmph_ + n.substr(l) + this.closeEmph_), l = -1;
        else {
          let m = n.substring(l, t + 1);
          if (!s.VALID_ANNOTATION_REGEX.test(m))
            this.retMsg_.push(s.INVALID_ANNOTATION_CHAR_MSG + this.openEmph_ + m + this.closeEmph_), l = -1;
          else {
            let d = this.annotations_.length.toString();
            n = n.replace(m, this.braceFlag_ + d + this.braceFlag_), this.annotations_.push(m), l = n.indexOf("{");
          }
        }
      }
      if (this.retMsg_.length == 0) {
        let t = n.indexOf("}");
        t >= 0 && this.retMsg_.push("Missing opening brace for closing brace found at " + this.openEmph_ + n.substring(0, t + 1) + this.closeEmph_);
      }
      return n;
    }
    // end _getAnnotations
    /**
     * Finds and processes any/all parenthesized unit strings. This should only
     * be called from within this class (or by test code).
     *
     * Nested parenthesized strings are processed from the inside out.  The
     * parseString function is called from within this one for each parenthesized
     * unit string, and the resulting unit object is stored in this.parensUnits_,
     * to be processed after all strings are translated to units.
     *
     * A placeholder is placed in the unit string returned to indicate that the
     * unit object should be obtained from the this.parensUnits_ array.  The
     * placeholder consists of the parenthesis flag (this.parensFlag_) followed
     * by the index of the unit in this.parensUnits_ followed by this.parensFlag_.
     *
     * @param uString the unit string being parsed, where this will be the full
     *  string the first time this is called and parenthesized strings on any
     *  subsequent calls
     * @param origString the original string first passed in to parseString
     * @returns
     *  an array containing:
     *   the string after the parentheses are replaced;
     *   the original string; and
     *   a boolean flag indicating whether or not an error occurred that
     *     should stop processing.
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     * this this.parensUnits_ array will be populated with units found for
     *   parenthetical unit strings
     */
    _processParens(n, l) {
      let t = [], m = 0, d = !1, o = this.parensUnits_.length, h = 0;
      for (; n !== "" && !d; ) {
        let c = 0, y = 0, T = n.indexOf("(");
        if (T < 0) {
          let N = n.indexOf(")");
          if (N >= 0) {
            let O = `Missing open parenthesis for close parenthesis at ${n.substring(0, N + h)}${this.openEmph_}${n.substr(N, 1)}${this.closeEmph_}`;
            N < n.length - 1 && (O += `${n.substr(N + 1)}`), this.retMsg_.push(O), t[m] = n, d = !0;
          } else
            t[m] = n, n = "";
        } else {
          c += 1;
          let N = n.length;
          T > 0 && (t[m++] = n.substr(0, T));
          let O = 0, P = T + 1;
          for (; P < N && c != y; P++)
            n[P] === "(" ? c += 1 : n[P] === ")" && (y += 1);
          if (c === y) {
            O = P, t[m++] = this.parensFlag_ + o.toString() + this.parensFlag_;
            let z = this._parseTheString(n.substring(T + 1, O - 1), l);
            z[0] === null ? d = !0 : n[T + 1] === "/" ? (this.retMsg_.push("Unary operator '/' is only allowed at the beginning of the main term, not inside a parenthesis."), d = !0) : (l = z[1], this.parensUnits_[o++] = z[0], n = n.substr(O), h = O);
          } else
            t.push(l.substr(T)), this.retMsg_.push(`Missing close parenthesis for open parenthesis at ${l.substring(0, T + h)}${this.openEmph_}${l.substr(T, 1)}${this.closeEmph_}${l.substr(T + 1)}`), d = !0;
        }
      }
      return d && (this.parensUnits_ = []), [t.join(""), l, d];
    }
    // end _processParens
    /**
     * Breaks the unit string into an array of unit descriptors and operators.
     * If a unit descriptor consists of a number preceding a unit code, with
     * no multiplication operator, e.g., 2mg instead of 2.mg, it is handled
     * as if it were a parenthetical expression.
     *
     * This should only be called from within this class (or by test code).
     *
     * @param uStr the unit string being parsed
     * @param origString the original string passed to parseString
     * @returns
     *  an array containing:
     *    the array representing the unit string;
     *    the original string passed in, possibly updated with corrections; and
     *    and a flag indicating whether or not processing can continue.
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     */
    _makeUnitsArray(n, l) {
      let t = n.match(/([./]|[^./]+)/g), m = !1, d = [], o = /(^[0-9]+)(\[?[a-zA-Z\_0-9a-zA-Z\_]+\]?$)/;
      if (t[0] === "/" ? t.unshift("1") : t[0] === "." && (this.retMsg_.push(`${l} is not a valid UCUM code. The multiplication operator at the beginning of the expression is not valid. A multiplication operator must appear only between two codes.`), m = !0), !m) {
        if (!f.isNumericString(t[0])) {
          let h = t[0].match(o);
          if (h && h.length === 3 && h[1] !== "" && h[2] !== "" && h[2].indexOf(this.braceFlag_) !== 0) {
            let c = h[2];
            if (!m && h[2].indexOf(this.parensFlag_) !== -1) {
              let y = this._getParensUnit(h[2], l);
              h[2] = y[0].csCode_, c = `(${h[2]})`, m = y[1];
            }
            m || (this.retMsg_.push(`${h[1]}${c} is not a valid UCUM code.  ${this.vcMsgStart_}${h[1]}.${c}${this.vcMsgEnd_}`), l = l.replace(`${h[1]}${c}`, `${h[1]}.${c}`), t[0] = h[2], t.unshift(h[1], "."));
          }
        }
        if (!m) {
          let h = t.length;
          d = [{
            op: "",
            un: t[0]
          }];
          for (let c = 1; c < h; c++) {
            let y = t[c++];
            if (!t[c])
              this.retMsg_.push(`${l} is not a valid UCUM code. It is terminated with the operator ${this.openEmph_}${y}${this.closeEmph_}.`), c = h, m = !0;
            else if (a.validOps_.indexOf(t[c]) !== -1)
              this.retMsg_.push(`${l} is not a valid UCUM code. A unit code is missing between${this.openEmph_}${y}${this.closeEmph_}and${this.openEmph_}${t[c]}${this.closeEmph_}in${this.openEmph_}${y}${t[c]}${this.closeEmph_}.`), c = h, m = !0;
            else if (f.isNumericString(t[c]))
              d.push({
                op: y,
                un: t[c]
              });
            else {
              let T = t[c].match(o);
              if (T && T.length === 3 && T[1] !== "" && T[2] !== "" && T[2].indexOf(this.braceFlag_) !== 0) {
                let N = T[0];
                if (!m && T[2].indexOf(this.parensFlag_) !== -1) {
                  let O = this._getParensUnit(T[2], l);
                  if (T[2] = O[0].csCode_, N = `(${T[2]})`, m = O[1], !m) {
                    this.retMsg_.push(`${T[1]}${N} is not a valid UCUM code.  ${this.vcMsgStart_}${T[1]}.${N}${this.vcMsgEnd_}`);
                    let P = `(${T[1]}.${N})`;
                    l = l.replace(`${T[1]}${N}`, P);
                    let z = this._processParens(P, l);
                    m = z[2], m || d.push({
                      op: y,
                      un: z[0]
                    });
                  }
                } else {
                  let O = "(" + T[1] + "." + T[2] + ")", P = this._processParens(O, l);
                  P[2] ? (c = h, m = !0) : (this.retMsg_.push(`${T[0]} is not a valid UCUM code.  ${this.vcMsgStart_}${T[1]}.${T[2]}${this.vcMsgEnd_}`), l = l.replace(T[0], O), d.push({
                    op: y,
                    un: P[0]
                  }));
                }
              } else
                d.push({
                  op: y,
                  un: t[c]
                });
            }
          }
        }
      }
      return [d, l, m];
    }
    // end _makeUnitsArray
    /**
     * Takes a unit string containing parentheses flags and returns the unit they
     * represent.  Any text found before and/or after the parenthetical
     * expression is checked to see if we can tell what the user meant and
     * let them know what it should have been.  For example, 2(mg), which
     * would resolve to 2mg, should be 2.mg.
     *
     * This should only be called from within this class (or by test code).
     *
     * @param pStr the string being parsed
     * @param origString the original unit string passed in; passed through
     *  to _getAnnonText if annotation flags are found in any text preceding
     *  or following the parenthetical unit
     * @returns
     *   an array containing
     *     the unit object; and
     *     a flag indicating whether or not processing should be ended.
     *       True indicates that the string was invalid and no corrections
     *         (substitutions or suggestions) could be found;
     *       False indicates that it was either valid or substitutions/suggestions
     *          were made.
     *   the this.retMsg_ array will be updated with any user messages
     *     (informational, error or warning) generated by this or called methods
     *   this this.parensUnits_ array contains the units that are acquired by
     *     this method
     * @throws an error if an invalid parensUnit index was found.  This is
     *    a processing error.
     */
    _getParensUnit(n, l) {
      let t = !1, m = null, d = n.indexOf(this.parensFlag_), o = null;
      d > 0 && (o = n.substr(0, d - 1));
      let h = n.lastIndexOf(this.parensFlag_), c = null;
      h + this.pFlagLen_ < n.length && (c = n.substr(h + this.pFlagLen_));
      let y = n.substring(d + this.pFlagLen_, h);
      if (f.isNumericString(y))
        m = this.parensUnits_[Number(y)], f.isIntegerUnit(m) ? n = m : n = m.csCode_;
      else
        throw new Error(`Processing error - invalid parens number ${y} found in ${n}.`);
      if (o)
        if (f.isNumericString(o)) {
          let T = m.getProperty("magnitude_");
          T *= Number(o), m.assignVals({
            magnitude_: T
          }), n = `${o}.${n}`, this.retMsg_.push(`${o}${n} is not a valid UCUM code.
` + this.vcMsgStart_ + n + this.vcMsgEnd_);
        } else if (o.indexOf(this.braceFlag_) >= 0) {
          let T = this._getAnnoText(o, l);
          if (T[1] || T[2])
            throw new Error(`Text found before the parentheses (${o}) included an annotation along with other text for parenthetical unit ${m.csCode_}`);
          n += T[0], this.retMsg_.push(`The annotation ${T[0]} before the unit code is invalid.
` + this.vcMsgStart_ + n + this.vcMsgEnd_);
        } else this.suggestions_ ? t = this._getSuggestions(o) !== "succeeded" : (this.retMsg_.push(`${o} preceding the unit code ${n} is invalid.  Unable to make a substitution.`), t = !0);
      if (c)
        if (c.indexOf(this.braceFlag_) >= 0) {
          let T = this._getAnnoText(c, l);
          if (T[1] || T[2])
            throw new Error(`Text found after the parentheses (${c}) included an annotation along with other text for parenthetical unit ${m.csCode_}`);
          n += T[0];
        } else if (f.isNumericString(c)) {
          m = null;
          let T = `An exponent (${c}) following a parenthesis is invalid as of revision 1.9 of the UCUM Specification.`;
          n.match(/\d$/) || (n += c, T += `
  ` + this.vcMsgStart_ + n + this.vcMsgEnd_), this.retMsg_.push(T), t = !0;
        } else this.suggestions_ ? t = this._getSuggestions(o) !== "succeeded" : (this.retMsg_.push(`Text ${c} following the unit code ${n} is invalid.  Unable to make a substitution.`), t = !0);
      return t || (m ? f.isIntegerUnit(m) ? m = new r({
        csCode_: m,
        magnitude_: m,
        name_: m
      }) : m.csCode_ = n : m = new r({
        csCode_: n,
        magnitude_: 1,
        name_: n
      })), [m, t];
    }
    // end _getParensUnit
    /**
     * Takes a unit string containing annotation flags and returns the
     * annotation they represent.  This also returns any text found before
     * the annotation and any found after the annotation.
     *
     * This should only be called from within this class (or by test code).
     * NEEDS FIX in next branch to handle string with multiple annotations.
     *
     * @param pStr the string being parsed
     * @param origString the original string being parsed; used in error msg
     *  thrown for an invalid index to the annotations array
     * @returns
     *  an array containing
     *    the annotation for the pStr;
     *    any text found before the annotation; and
     *    any text found after the annotation.
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     * the this.annotations_ array is used as the source for the annotations text
     * @throws an error if for a processing error - an invalid annotation index.
     */
    _getAnnoText(n, l) {
      let t = n.indexOf(this.braceFlag_), m = t > 0 ? n.substring(0, t) : null;
      t !== 0 && (n = n.substr(t));
      let d = n.indexOf(this.braceFlag_, 1), o = d + this.bFlagLen_ < n.length ? n.substr(d + this.bFlagLen_) : null, h = n.substring(this.bFlagLen_, d), c = Number(h);
      if (!f.isNumericString(h) || c >= this.annotations_.length)
        throw new Error(`Processing Error - invalid annotation index ${h} found in ${n} that was created from ${l}`);
      return n = this.annotations_[c], [n, m, o];
    }
    // end _getAnnoText
    /**
     * Takes a unit string and looks for suggested units.  This should be
     * called for unit strings that cannot be resolved to unit codes.  The
     * string is searched for in the synonyms table found in the UnitTables
     * class.  That table includes all synonyms and unit names for the units
     * in the unit data table.
     *
     * @param pStr the string being parsed
     * @returns an object that contains an element named 'status', whose
     *  value indicates the status of the request:
     *   'succeeded' indicates that synonyms were found;
     *   'failed' indicates that no synonyms were found; or
     *   'error' which indicates that an error occurred
     *
     * the this.retMsg_ array will be updated with a message indicating whether
     *  or not synonyms/suggestions  were found
     * the this.suggestions_ array will be updated with a hash (added to the
     *   array if it already contains others) that contains three elements:
     *   'msg' which is a message indicating what unit expression the
     *      suggestions are for;
     *   'invalidUnit' which is the unit expression the suggestions are for; and
     *   'units' which is an array of data for each suggested unit found.
     *       Each array will contain the unit code, the unit name and the
     *       unit guidance (if any).
     */
    _getSuggestions(n) {
      let l = f.getSynonyms(n);
      if (l.status === "succeeded") {
        let t = {};
        t.msg = `${n} is not a valid UCUM code.  We found possible units that might be what was meant:`, t.invalidUnit = n;
        let m = l.units.length;
        t.units = [];
        for (let d = 0; d < m; d++) {
          let o = l.units[d], h = [o.code, o.name, o.guidance];
          t.units.push(h);
        }
        this.suggestions_.push(t);
      } else
        this.retMsg_.push(`${n} is not a valid UCUM code.  No alternatives were found.`);
      return l.status;
    }
    // end getSuggestions
    /**
     * Creates a unit object from a string defining one unit.  The string
     * should consist of a unit code for a unit already defined (base or
     * otherwise).  It may include a prefix and an exponent, e.g., cm2
     * (centimeter squared).  This should only be called from within this
     * class (or by test code).
     *
     * @params uCode the string defining the unit
     * @param origString the original string to be parsed; used to provide
     *  context for messages
     * @returns
     *  an array containing:
     *    a unit object, or null if there were problems creating the unit; and
     *    the origString passed in, which may be updated if a unit name was
     *    translated to a unit code.
     *
     *  the this.retMsg_ array will be updated with any user messages
     *    (informational, error or warning) generated by this or called methods
     *  the this.suggestions_ array will be populated if no unit (with or without
     *    substitutions) could be found and suggestions were requested
     */
    _makeUnit(n, l) {
      let t = this.utabs_.getUnitByCode(n);
      if (t)
        t = t.clone();
      else if (n.indexOf(this.braceFlag_) >= 0) {
        let m = this._getUnitWithAnnotation(n, l);
        t = m[0], t && (l = m[1]);
      } else {
        if (n.indexOf("^") > -1) {
          let m = n.replace("^", "*");
          t = this.utabs_.getUnitByCode(m), t && (t = t.clone(), t.csCode_ = t.csCode_.replace("*", "^"), t.ciCode_ = t.ciCode_.replace("*", "^"));
        }
        if (!t) {
          let m = "[" + n + "]";
          t = this.utabs_.getUnitByCode(m), t && (t = t.clone(), l = l.replace(n, m), this.retMsg_.push(`${n} is not a valid unit expression, but ${m} is.
` + this.vcMsgStart_ + `${m} (${t.name_})${this.vcMsgEnd_}`));
        }
        if (!t) {
          let m = this.utabs_.getUnitByName(n);
          if (m && m.length > 0) {
            t = m[0].clone();
            let d = "The UCUM code for " + n + " is " + t.csCode_ + `.
` + this.vcMsgStart_ + t.csCode_ + this.vcMsgEnd_, o = !1;
            for (let y = 0; y < this.retMsg_.length && !o; y++) o = this.retMsg_[y] === d;
            o || this.retMsg_.push(d);
            let h = new RegExp("(^|[./({])(" + n + ")($|[./)}])"), c = l.match(h);
            l = l.replace(h, c[1] + t.csCode_ + c[3]), n = t.csCode_;
          }
        }
        if (!t) {
          let m = null;
          for (m in a.specUnits_)
            n.indexOf(a.specUnits_[m]) !== -1 && (n = n.replace(a.specUnits_[m], m));
          t = this.utabs_.getUnitByCode(n), t && (t = t.clone());
        }
        if (!t) {
          let m = n, d = null, o = null, h = null, c = null, y = null, T = null, N = this._isCodeWithExponent(n);
          if (N && (n = N[0], o = N[1], d = this.utabs_.getUnitByCode(n)), o && isNaN(o))
            t = null, this.retMsg_.push(`${m} is not a valid UCUM code.`);
          else {
            if (!d && (h = n.charAt(0), c = this.pfxTabs_.getPrefixByCode(h), c)) {
              y = c.getValue(), T = c.getExp();
              let O = h.length;
              n = n.substr(O), d = this.utabs_.getUnitByCode(n), !d && h == "d" && n.substr(0, 1) == "a" && (h = "da", c = this.pfxTabs_.getPrefixByCode(h), y = c.getValue(), n = n.substr(1), d = this.utabs_.getUnitByCode(n)), d && d.source_ == "LOINC" && (d = null);
            }
            if (!d)
              t = null, this.suggestions_ ? this._getSuggestions(m) : this.retMsg_.push(`${m} is not a valid UCUM code.`);
            else {
              t = d.clone(), t.resetFieldsForDerivedUnit();
              let O = t.getProperty("dim_"), P = t.getProperty("magnitude_"), z = t.getProperty("name_"), D = t.getProperty("ciCode_"), F = t.getProperty("printSymbol_");
              if (o) {
                o = parseInt(o);
                let $ = o;
                O && (O = O.mul(o)), P = Math.pow(P, o), t.assignVals({
                  magnitude_: P
                }), c && T && ($ *= c.getExp(), y = Math.pow(10, $));
              }
              c && (t.cnv_ ? t.assignVals({
                cnvPfx_: y
              }) : (P *= y, t.assignVals({
                magnitude_: P
              })));
              let B = t.csCode_;
              if (c && (z = c.getName() + z, B = h + B, D = c.getCiCode() + D, F = c.getPrintSymbol() + F, t.assignVals({
                name_: z,
                csCode_: B,
                ciCode_: D,
                printSymbol_: F
              })), o) {
                let $ = o.toString();
                t.assignVals({
                  name_: z + "<sup>" + $ + "</sup>",
                  csCode_: B + $,
                  ciCode_: D + $,
                  printSymbol_: F + "<sup>" + $ + "</sup>"
                });
              }
            }
          }
        }
      }
      return [t, l];
    }
    // end _makeUnit
    /**
     * This method handles unit creation when an annotation is included
     * in the unit string.  This basically isolates and retrieves the
     * annotation and then calls _makeUnit to try to get a unit from
     * any text that precedes or follows the annotation.
     *
     * @param uCode the string defining the unit
     * @param origString the original full string submitted to parseString
     * @returns the unit object found, or null if one could not be found
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     */
    _getUnitWithAnnotation(n, l) {
      let t = null, m = this._getAnnoText(n, l), d = m[0], o = m[1], h = m[2];
      this.bracesMsg_ && this.retMsg_.indexOf(this.bracesMsg_) === -1 && this.retMsg_.push(this.bracesMsg_);
      let c = this.retMsg_.length;
      if (!o && !h) {
        let y = "[" + d.substring(1, d.length - 1) + "]", T = this._makeUnit(y, l);
        T[0] ? (t = n, this.retMsg_.push(`${d} is a valid unit expression, but did you mean ${y} (${T[0].name_})?`)) : this.retMsg_.length > c && this.retMsg_.pop(), t = new r({
          csCode_: d,
          ciCode_: d,
          magnitude_: 1,
          name_: d
        });
      } else if (o && !h)
        if (f.isIntegerUnit(o))
          t = o;
        else {
          let y = this._makeUnit(o, l);
          y[0] ? (t = y[0], t.csCode_ += d, l = y[1]) : this.retMsg_.push(`Unable to find a unit for ${o} that precedes the annotation ${d}.`);
        }
      else if (!o && h)
        if (f.isIntegerUnit(h))
          t = h + d, this.retMsg_.push(`The annotation ${d} before the ``${h} is invalid.\n` + this.vcMsgStart_ + t + this.vcMsgEnd_);
        else {
          let y = this._makeUnit(h, l);
          y[0] ? (t = y[0], t.csCode_ += d, l = t.csCode_, this.retMsg_.push(`The annotation ${d} before the unit code is invalid.
` + this.vcMsgStart_ + t.csCode_ + this.vcMsgEnd_)) : this.retMsg_.push(`Unable to find a unit for ${o} that follows the annotation ${d}.`);
        }
      else
        this.retMsg_.push(`Unable to find a unit for ${o}${d}${h}.
We are not sure how to interpret text both before and after the annotation.  Sorry`);
      return [t, l];
    }
    // end _getUnitWithAnnotations
    /**
     * Performs unit arithmetic for the units in the units array.  That array
     * contains units/numbers and the operators (division or multiplication) to
     * be performed on each unit/unit or unit/number pair in the array.  This
     * should only be called from within this class (or by test code).
     *
     * @params uArray the array that contains the units, numbers and operators
     *  derived from the unit string passed in to parseString
     * @param origString the original string to be parsed; used to provide
     *  context for messages
     *
     * @returns a single unit object that is the result of the unit arithmetic
     *
     * the this.retMsg_ array will be updated with any user messages
     *   (informational, error or warning) generated by this or called methods
     */
    _performUnitArithmetic(n, l) {
      let t = n[0].un;
      f.isIntegerUnit(t) && (t = new r({
        csCode_: t,
        ciCode_: t,
        magnitude_: Number(t),
        name_: t
      }));
      let m = n.length, d = !1;
      for (let o = 1; o < m && !d; o++) {
        let h = n[o].un;
        if (f.isIntegerUnit(h) && (h = new r({
          csCode_: h,
          ciCode_: h,
          magnitude_: Number(h),
          name_: h
        })), h === null || typeof h != "number" && !h.getProperty) {
          let c = `Unit string (${l}) contains unrecognized element`;
          h && (c += ` (${this.openEmph_}${h.toString()}${this.closeEmph_})`), c += "; could not parse full string.  Sorry", this.retMsg_.push(c), d = !0;
        } else
          try {
            n[o].op === "/" ? t = t.divide(h) : t = t.multiplyThese(h);
          } catch (c) {
            this.retMsg_.unshift(c.message), d = !0, t = null;
          }
      }
      return t;
    }
    // end _performUnitArithmetic
    /**
     * This tests a string to see if it starts with characters and ends with
     * digits.  This is used to test for an exponent on a UCUM code (or what
     * we think might be a UCUM code).  This is broken out to a separate
     * function so that the regular expression can be verified to provide the
     * results we expect, in case someone changes it.  (Per Paul Lynch)
     * See "Test _isCodeWithExponent method" in testUnitString.spec.js
     *
     * This particular regex has been tweaked several times.  This one
     * works with the following test strings:
     * "m[H2O]-21 gives ["m[H2O]-21", "m[H2O]", "-21"]
     * "m[H2O]+21 gives ["m[H2O]+21", "m[H2O]", "+21"]
     * "m[H2O]21 gives ["m[H2O]-21", "m[H2O]", "21"]
     * "s2" gives ["s2", "s, "2"]
     * "kg" gives null
     * "m[H2O]" gives null
     * "m[H2O]23X" gives null
     *
     * @params uCode the code being tested
     * @returns an array containing: (1) the code without the exponent (or
     *  trailing number); and (2) the exponent/trailing number.  Returns null
     *  if there is no trailing number or something follows the trailing
     *  number, or if the first part is not characters.
     */
    _isCodeWithExponent(n) {
      let l = [], t = n.match(/(^[^\-\+]+?)([\-\+\d]+)$/);
      return t && t[2] && t[2] !== "" ? (l.push(t[1]), l.push(t[2])) : l = null, l;
    }
    // end _isCodeWithExponent
  }
  return He.UnitString = s, p(s, "INVALID_ANNOTATION_CHAR_MSG", "An invalid character was found in the annotation "), p(s, "VALID_ANNOTATION_REGEX", /^\{[!-z|~]*\}$/), s.getInstance = function() {
    return new s();
  }, He;
}
var ls;
function e0() {
  if (ls) return we;
  ls = 1, Object.defineProperty(we, "__esModule", {
    value: !0
  }), we.UcumLhcUtils = void 0;
  var f = Qi(), g = p(An());
  function _() {
    if (typeof WeakMap != "function") return null;
    var s = /* @__PURE__ */ new WeakMap();
    return _ = function() {
      return s;
    }, s;
  }
  function p(s) {
    if (s && s.__esModule)
      return s;
    if (s === null || typeof s != "object" && typeof s != "function")
      return { default: s };
    var i = _();
    if (i && i.has(s))
      return i.get(s);
    var n = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var t in s)
      if (Object.prototype.hasOwnProperty.call(s, t)) {
        var m = l ? Object.getOwnPropertyDescriptor(s, t) : null;
        m && (m.get || m.set) ? Object.defineProperty(n, t, m) : n[t] = s[t];
      }
    return n.default = s, i && i.set(s, n), n;
  }
  var a = Se().Ucum, r = Oe().UnitTables, e = Xi().UnitString;
  class u {
    /**
     * Constructor.  This loads the json prefix and unit definitions if
     * they haven't been loaded already and creates itself as a singleton object.
     *
     */
    constructor() {
      r.getInstance().unitsCount() === 0 && f.ucumJsonDefs.loadJsonDefs(), this.uStrParser_ = e.getInstance();
    }
    // end constructor
    /**
     * This method calls the useHTMLInMessages method on the UnitString
     * object.  It should be called by web applications that use
     * these utilities.
     *
     * @param use flag indicating whether or not to use the braces message;
     *  defaults to true
     */
    useHTMLInMessages(i) {
      i === void 0 && (i = !0), this.uStrParser_.useHTMLInMessages(i);
    }
    /**
     * This method calls the useBraceMsgForEachString method on the UnitString
     * object.  It should be called by web applications where unit
     * strings are validated individually (as opposed to validating a whole
     * file of unit strings).
     *
     * @param use flag indicating whether or not to use the braces message;
     *  defaults to true
     */
    useBraceMsgForEachString(i) {
      i === void 0 && (i = !0), this.uStrParser_.useBraceMsgForEachString(i);
    }
    /**
     * This method validates a unit string.  It first checks to see if the
     * string passed in is a unit code that is found in the unit codes table.
     * If it is not found it parses the string to see if it resolves to a
     * valid unit string.
     *
     * If a valid unit cannot be found, the string is tested for some common
     * errors, such as missing brackets or a missing multiplication operator.
     * If found, the error is reported in the messages array that is returned.
     *
     * If a valid unit cannot be found and an error cannot be discerned, this
     * may return, if requested, a list of suggested units in the messages
     * array that is returned.  Suggestions are based on matching the expression
     * with unit names and synonyms.
     *
     * @param uStr the string to be validated
     * @param suggest a boolean to indicate whether or not suggestions are
     *  requested for a string that cannot be resolved to a valid unit;
     *  true indicates suggestions are wanted; false indicates they are not,
     *  and is the default if the parameter is not specified;
     * @param valConv a string indicating if this validation request was initiated
     *  by a validation task ('validate') or a conversion task ('convert'),
     *  used only for the demo code, and the default is 'Validator' if the
     *  parameter is not specified;
     * @returns an object with five properties:
     *  'status' will be 'valid' (the uStr is a valid UCUM code), 'invalid'
     *     (the uStr is not a valid UCUM code, and substitutions or
     *     suggestions may or may not be returned, depending on what was
     *     requested and found); or 'error' (an input or programming error
     *     occurred);
     *  'ucumCode' the valid ucum code, which may differ from what was passed
     *    in (e.g., if 'Gauss' is passed in, this will contain 'G') OR null if
     *    the string was flagged as invalid or an error occurred;
     *  'msg' is an array of one or more messages, if the string is invalid or
     *        an error occurred, indicating the problem, or an explanation of a
     *        substitution such as the substitution of 'G' for 'Gauss', or
     *        an empty array if no messages were generated;
     *  'unit' which is null if no unit is found, or a hash for a unit found:
     *    'code' is the unit's ucum code (G in the above example;
     *    'name' is the unit's name (Gauss in the above example); and
     *    'guidance' is the unit's guidance/description data; and
     *  'suggestions' if suggestions were requested and found, this is an array
     *     of one or more hash objects.  Each hash contains three elements:
     *     'msg' which is a message indicating what part of the uStr input
     *        parameter the suggestions are for;
     *     'invalidUnit' which is the unit expression the suggestions are
     *        for; and
     *     'units' which is an array of data for each suggested unit found.
     *        Each array will contain the unit code, the unit name and the
     *        unit guidance (if any).
     *     If no suggestions were requested and found, this property is not
     *     returned.
     */
    validateUnitString(i, n, l) {
      n === void 0 && (n = !1), l === void 0 && (l = "validate");
      let t = this.getSpecifiedUnit(i, l, n), m = t.unit, d = m ? {
        ucumCode: t.origString,
        unit: {
          code: m.csCode_,
          name: m.name_,
          guidance: m.guidance_
        }
      } : {
        ucumCode: null
      };
      return d.status = t.status, t.suggestions && (d.suggestions = t.suggestions), d.msg = t.retMsg, d;
    }
    // end validateUnitString
    /**
     * This method converts one unit to another
     *
     * @param fromUnitCode the unit code/expression/string of the unit to be converted
     * @param fromVal the number of "from" units to be converted to "to" units
     * @param toUnitCode the unit code/expression/string of the unit that the from
     *  field is to be converted to
     * @param suggest a boolean to indicate whether or not suggestions are
     *  requested for a string that cannot be resolved to a valid unit;
     *  true indicates suggestions are wanted; false indicates they are not,
     *  and is the default if the parameter is not specified;
     * @param molecularWeight the molecular weight of the substance in question
     *  when a conversion is being requested from mass to moles and vice versa.
     *  This is required when one of the units represents a value in moles.  It is
     *  ignored if neither unit includes a measurement in moles.
     * @returns a hash with six elements:
     *  'status' that will be: 'succeeded' if the conversion was successfully
     *     calculated; 'failed' if the conversion could not be made, e.g., if
     *     the units are not commensurable; or 'error' if an error occurred;
     *  'toVal' the numeric value indicating the conversion amount, or null
     *     if the conversion failed (e.g., if the units are not commensurable);
     *  'msg' is an array message, if the string is invalid or an error occurred,
     *        indicating the problem, or an explanation of a substitution such as
     *        the substitution of 'G' for 'Gauss', or an empty array if no
     *        messages were generated;
     *  'suggestions' if suggestions were requested and found, this is a hash
     *     that contains at most two elements:
     *     'from' which, if the fromUnitCode input parameter or one or more of
     *       its components could not be found, is an array one or more hash
     *       objects.  Each hash contains three elements:
     *         'msg' which is a message indicating what unit expression the
     *            suggestions are for;
     *         'invalidUnit' which is the unit expression the suggestions
     *            are for; and
     *         'units' which is an array of data for each suggested unit found.
     *            Each array will contain the unit code, the unit name and the
     *            unit guidance (if any).
     *       If no suggestions were found for the fromUnitCode this element
     *       will not be included.
     *     'to' which, if the "to" unit expression or one or more of its
     *       components could not be found, is an array one or more hash objects.  Each hash
     *       contains three elements:
     *         'msg' which is a message indicating what toUnitCode input
     *            parameter the suggestions are for;
     *         'invalidUnit' which is the unit expression the suggestions
     *            are for; and
     *         'units' which is an array of data for each suggested unit found.
     *            Each array will contain the unit code, the unit name and the
     *            unit guidance (if any).
     *       If no suggestions were found for the toUnitCode this element
     *       will not be included.
     *    No 'suggestions' element will be included in the returned hash
     *    object if none were found, whether or not they were requested.
     *  'fromUnit' the unit object for the fromUnitCode passed in; returned
     *     in case it's needed for additional data from the object; and
     *  'toUnit' the unit object for the toUnitCode passed in; returned
     *     in case it's needed for additional data from the object.
     */
    convertUnitTo(i, n, l, t, m) {
      t === void 0 && (t = !1), m === void 0 && (m = null);
      let d = {
        status: "failed",
        toVal: null,
        msg: []
      };
      if (i && (i = i.trim()), (!i || i == "") && (d.status = "error", d.msg.push('No "from" unit expression specified.')), this._checkFromVal(n, d), l && (l = l.trim()), (!l || l == "") && (d.status = "error", d.msg.push('No "to" unit expression specified.')), d.status !== "error")
        try {
          let o = null, h = this.getSpecifiedUnit(i, "convert", t);
          o = h.unit, h.retMsg && (d.msg = d.msg.concat(h.retMsg)), h.suggestions && (d.suggestions = {}, d.suggestions.from = h.suggestions), o || d.msg.push(`Unable to find a unit for ${i}, so no conversion could be performed.`);
          let c = null;
          if (h = this.getSpecifiedUnit(l, "convert", t), c = h.unit, h.retMsg && (d.msg = d.msg.concat(h.retMsg)), h.suggestions && (d.suggestions || (d.suggestions = {}), d.suggestions.to = h.suggestions), c || d.msg.push(`Unable to find a unit for ${l}, so no conversion could be performed.`), o && c)
            try {
              if (!m)
                d.toVal = c.convertFrom(n, o);
              else {
                if (o.moleExp_ !== 0 && c.moleExp_ !== 0)
                  throw new Error("A molecular weight was specified but a mass <-> mole conversion cannot be executed for two mole-based units.  No conversion was attempted.");
                if (o.moleExp_ === 0 && c.moleExp_ === 0)
                  throw new Error("A molecular weight was specified but a mass <-> mole conversion cannot be executed when neither unit is mole-based.  No conversion was attempted.");
                if (!o.isMoleMassCommensurable(c))
                  throw new Error(`Sorry.  ${i} cannot be converted to ${l}.`);
                o.moleExp_ !== 0 ? d.toVal = o.convertMolToMass(n, c, m) : d.toVal = o.convertMassToMol(n, c, m);
              }
              d.status = "succeeded", d.fromUnit = o, d.toUnit = c;
            } catch (y) {
              d.status = "failed", d.msg.push(y.message);
            }
        } catch (o) {
          o.message == a.needMoleWeightMsg_ ? d.status = "failed" : d.status = "error", d.msg.push(o.message);
        }
      return d;
    }
    // end convertUnitTo
    /**
     *  Converts the given unit string into its base units, their exponents, and
     *  a magnitude, and returns that data.
     * @param fromUnit the unit string to be converted to base units information
     * @param fromVal the number of "from" units to be converted
     * @returns an object with the properties:
     *  'status' indicates whether the result succeeded.  The value will be one of:
     *    'succeeded':  the conversion was successfully calculated (which can be
     *      true even if it was already in base units);
     *    'invalid':  fromUnit is not a valid UCUM code;
     *    'failed':  the conversion could not be made (e.g., if it is an "arbitrary" unit);
     *    'error':  if an error occurred (an input or programming error)
     *  'msg': an array of messages (possibly empty) if the string is invalid or
     *        an error occurred, indicating the problem, or a suggestion of a
     *        substitution such as the substitution of 'G' for 'Gauss', or
     *        an empty array if no messages were generated.  There can also be a
     *        message that is just informational or warning.
     *  'magnitude': the new value when fromVal units of fromUnits is expressed in the base units.
     *  'fromUnitIsSpecial': whether the input unit fromUnit is a "special unit"
     *         as defined in UCUM.  This means there is some function applied to convert
     *         between fromUnit and the base units, so the returned magnitude is likely not
     *         useful as a scale factor for other conversions (i.e., it only has validity
     *         and usefulness for the input values that produced it).
     *  'unitToExp': a map of base units in fromUnit to their exponent
     */
    convertToBaseUnits(i, n) {
      var t, m;
      let l = {};
      if (this._checkFromVal(n, l), !l.status) {
        let d = this.getSpecifiedUnit(i, "validate");
        l = {
          status: d.status == "valid" ? "succeeded" : d.status
        };
        let o = d.unit;
        if (l.msg = d.retMsg || [], !o)
          ((t = d.retMsg) == null ? void 0 : t.length) == 0 && l.msg.push("Could not find unit information for " + i);
        else if (o.isArbitrary_)
          l.msg.push("Arbitrary units cannot be converted to base units or other units."), l.status = "failed";
        else if (l.status == "succeeded") {
          let h = {}, c = (m = o.dim_) == null ? void 0 : m.dimVec_, y = "1";
          if (c) {
            let O = r.getInstance().dimVecIndexToBaseUnit_;
            for (let P = 0, z = c.length; P < z; ++P) {
              let D = c[P];
              D && (h[O[P]] = D, y += "." + O[P] + D);
            }
          }
          let T = this.getSpecifiedUnit(y, "validate"), N = T.unit;
          if (T.status !== "valid")
            l.msg.push("Unable construct base unit string; tried " + y), l.status = "error";
          else {
            try {
              l.magnitude = N.convertFrom(n, o);
            } catch (O) {
              l.msg.push(O.toString()), l.status = "error";
            }
            l.status == "succeeded" && (l.unitToExp = h, l.fromUnitIsSpecial = o.isSpecial_);
          }
        }
      }
      return l;
    }
    /**
     *  Checks the given value as to whether it is suitable as a "from" value in a
     *  unit conversion.  If it is not, the responseObj will have its status set
     *  to 'error' and a message added.
     * @param fromVal The value to check
     * @param responseObj the object that will be updated if the value is not
     *  usable.
     */
    _checkFromVal(i, n) {
      (i === null || isNaN(i) || typeof i != "number" && !g.isNumericString(i)) && (n.status = "error", n.msg || (n.msg = []), n.msg.push('No "from" value, or an invalid "from" value, was specified.'));
    }
    /**
     * This method accepts a term and looks for units that include it as
     * a synonym - or that include the term in its name.
     *
     * @param theSyn the term to search for
     * @returns a hash with up to three elements:
     *  'status' contains the status of the request, which can be 'error',
     *    'failed' or succeeded';
     *  'msg' which contains a message for an error or if no units were found; and
     *  'units' which is an array that contains one hash for each unit found:
     *    'code' is the unit's csCode_
     *    'name' is the unit's name_
     *    'guidance' is the unit's guidance_
     *
     */
    checkSynonyms(i) {
      let n = {};
      return i == null ? (n.status = "error", n.msg = "No term specified for synonym search.") : n = g.getSynonyms(i), n;
    }
    // end checkSynonyms
    /**
     * This method parses a unit string to get (or try to get) the unit
     * represented by the string.  It returns an error message if no string was specified
     * or if any errors were encountered trying to get the unit.
     *
     * @param uName the expression/string representing the unit
     * @param valConv indicates what type of request this is for - a request to
     *  validate (pass in 'validate') or a request to convert (pass in 'convert')
     * @param suggest a boolean to indicate whether or not suggestions are
     *  requested for a string that cannot be resolved to a valid unit;
     *  true indicates suggestions are wanted; false indicates they are not,
     *  and is the default if the parameter is not specified;
     * @returns a hash containing:
     *   'status' will be 'valid' (uName is a valid UCUM code), 'invalid'
     *     (the uStr is not a valid UCUM code, and substitutions or
     *     suggestions may or may not be returned, depending on what was
     *     requested and found); or 'error' (an input or programming error
     *     occurred);
     *   'unit' the unit object (or null if there were problems creating the
     *     unit);
     *   'origString' the possibly updated unit string passed in;
     *   'retMsg' an array of user messages (informational, error or warning) if
     *     any were generated (IF any were generated, otherwise will be an
     *     empty array); and
     *   'suggestions' is an array of 1 or more hash objects.  Each hash
     *     contains three elements:
     *       'msg' which is a message indicating what unit expression the
     *          suggestions are for;
     *       'invalidUnit' which is the unit expression the suggestions are
     *          for; and
     *       'units' which is an array of data for each suggested unit found.
     *          Each array will contain the unit code, the unit name and the
     *          unit guidance (if any).
     *   The return hash will not contain a suggestions array if a valid unit
     *   was found or if suggestions were not requested and found.
     */
    getSpecifiedUnit(i, n, l) {
      l === void 0 && (l = !1);
      let t = {};
      if (t.retMsg = [], !i)
        t.retMsg.push("No unit string specified.");
      else {
        let m = r.getInstance();
        i = i.trim();
        let d = m.getUnitByCode(i);
        if (d)
          t.unit = d, t.origString = i;
        else
          try {
            let o = this.uStrParser_.parseString(i, n, l);
            t.unit = o[0], t.origString = o[1], o[2] && (t.retMsg = o[2]), t.suggestions = o[3];
          } catch (o) {
            console.log(`Unit requested for unit string ${i}.request unsuccessful; error thrown = ` + o.message), t.retMsg.unshift(`${i} is not a valid unit.  ${o.message}`);
          }
      }
      return t.unit ? t.status = t.origString === i ? "valid" : "invalid" : t.status = t.origString ? "invalid" : "error", t;
    }
    // end getSpecifiedUnit
    /**
     * This method retrieves a list of units commensurable, i.e., that can be
     * converted from and to, a specified unit.  Returns an error if the "from"
     * unit cannot be found.
     *
     * @param fromName the name/unit string of the "from" unit
     * @returns an array containing two elements;
     *   first element is the list of commensurable units if any were found
     *   second element is an error message if the "from" unit is not found
     */
    commensurablesList(i) {
      let n = [], l = null, t = this.getSpecifiedUnit(i, "validate", !1), m = t.unit;
      if (t.retMsg.length > 0 && (n = t.retMsg), !m)
        n.push(`Could not find unit ${i}.`);
      else {
        let d = null, o = m.getProperty("dim_");
        if (!o)
          n.push("No commensurable units were found for " + i);
        else {
          try {
            d = o.getProperty("dimVec_");
          } catch (h) {
            n.push(h.message), h.message === "Dimension does not have requested property(dimVec_)" && (d = null);
          }
          d && (l = r.getInstance().getUnitsByDimension(d));
        }
      }
      return [l, n];
    }
    // end commensurablesList
  }
  return we.UcumLhcUtils = u, u.getInstance = function() {
    return new u();
  }, we;
}
var ss;
function Rn() {
  if (ss) return _e;
  ss = 1, Object.defineProperty(_e, "__esModule", {
    value: !0
  }), _e.UnitTables = _e.UcumLhcUtils = _e.Ucum = void 0;
  var f = Se().Ucum;
  _e.Ucum = f;
  var g = e0().UcumLhcUtils;
  _e.UcumLhcUtils = g;
  var _ = Oe().UnitTables;
  return _e.UnitTables = _, _e;
}
var Yt, is;
function wn() {
  if (is) return Yt;
  is = 1;
  let f = {};
  function g(r) {
    const e = "" + +r, u = /(\d+)(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/.exec(e);
    if (!u)
      return 0;
    const s = u[2], i = u[3];
    return Math.max(
      0,
      // lower limit.
      (s === "0" ? 0 : (s || "").length) - (i || 0)
    );
  }
  function _(r, e) {
    const u = Math.pow(10, e);
    return Math.round(r * u) / u;
  }
  const p = 1e-8, a = f.roundToMaxPrecision = function(r) {
    return Math.round(r / p) * p;
  };
  return f.isEquivalent = function(r, e) {
    if (Number.isInteger(r) && Number.isInteger(e))
      return r === e;
    const u = Math.min(g(r), g(e));
    return u === 0 ? Math.round(r) === Math.round(e) : _(r, u) === _(e, u);
  }, f.isEqual = function(r, e) {
    return a(r) === a(e);
  }, Yt = f, Yt;
}
var Zt, rs;
function t0() {
  if (rs) return Zt;
  rs = 1;
  var f = Qe();
  function g(_) {
    var p = f(_), a = p.getFullYear(), r = p.getMonth(), e = /* @__PURE__ */ new Date(0);
    return e.setFullYear(a, r + 1, 0), e.setHours(0, 0, 0, 0), e.getDate();
  }
  return Zt = g, Zt;
}
var Qt, us;
function ei() {
  if (us) return Qt;
  us = 1;
  var f = Qe(), g = t0();
  function _(p, a) {
    var r = f(p), e = Number(a), u = r.getMonth() + e, s = /* @__PURE__ */ new Date(0);
    s.setFullYear(r.getFullYear(), u, 1), s.setHours(0, 0, 0, 0);
    var i = g(s);
    return r.setMonth(u, Math.min(i, r.getDate())), r;
  }
  return Qt = _, Qt;
}
var Xt, as;
function n0() {
  if (as) return Xt;
  as = 1;
  var f = ei();
  function g(_, p) {
    var a = Number(p);
    return f(_, a * 12);
  }
  return Xt = g, Xt;
}
var en, os;
function ti() {
  if (os) return en;
  os = 1;
  var f = Qe();
  function g(_, p) {
    var a = f(_), r = Number(p);
    return a.setDate(a.getDate() + r), a;
  }
  return en = g, en;
}
var tn, cs;
function l0() {
  if (cs) return tn;
  cs = 1;
  var f = ti();
  function g(_, p) {
    var a = Number(p), r = a * 7;
    return f(_, r);
  }
  return tn = g, tn;
}
var nn, fs;
function s0() {
  if (fs) return nn;
  fs = 1;
  var f = Xe(), g = 36e5;
  function _(p, a) {
    var r = Number(a);
    return f(p, r * g);
  }
  return nn = _, nn;
}
var ln, ms;
function i0() {
  if (ms) return ln;
  ms = 1;
  var f = Xe();
  function g(_, p) {
    var a = Number(p);
    return f(_, a * 1e3);
  }
  return ln = g, ln;
}
var sn, hs;
function fe() {
  if (hs) return sn;
  hs = 1;
  const f = Gl(), g = Rn().UcumLhcUtils.getInstance(), _ = wn(), p = "http://unitsofmeasure.org", a = "[0-9][0-9](\\:[0-9][0-9](\\:[0-9][0-9](\\.[0-9]+)?)?)?", r = "(Z|(\\+|-)[0-9][0-9]\\:[0-9][0-9])?", e = new RegExp("^T?" + a + "$"), u = new RegExp(
    "^[0-9][0-9][0-9][0-9](-[0-9][0-9](-[0-9][0-9](T" + a + r + ")?)?)?Z?$"
  ), s = new RegExp(
    "^[0-9][0-9][0-9][0-9](-[0-9][0-9](-[0-9][0-9])?)?$"
  ), i = new RegExp(
    "^[0-9][0-9][0-9][0-9](-[0-9][0-9](-[0-9][0-9](T[0-9][0-9](\\:[0-9][0-9](\\:[0-9][0-9](\\.[0-9]+)?))(Z|(\\+|-)[0-9][0-9]\\:[0-9][0-9]))))$"
  );
  class n {
    /**
     *  Tests whether this object is equal to another.  Returns either true,
     *  false, or undefined (where in the FHIRPath specification empty would be
     *  returned).  The undefined return value indicates that the values were the
     *  same to the shared precision, but that they had differnent levels of
     *  precision.
     */
    equals() {
      return !1;
    }
    /**
     *  Tests whether this object is equivalant to another.  Returns either true,
     *  false, or undefined (where in the FHIRPath specification empty would be
     *  returned).
     */
    equivalentTo() {
      return !1;
    }
    toString() {
      return this.asStr ? this.asStr : super.toString();
    }
    toJSON() {
      return this.toString();
    }
    /**
     *  Returns -1, 0, or 1 if this object is less then, equal to, or greater
     *  than otherObj.
     */
    compare() {
      throw "Comparison not implemented for " + this.constructor.name;
    }
    /**
     *  Adds other value to this value.
     */
    plus() {
      throw "Addition not implemented for " + this.constructor.name;
    }
    /**
     * Multiplies this value by another value.
     */
    mul() {
      throw "Multiplication not implemented for " + this.constructor.name;
    }
    /**
     * Divides this value by another value.
     */
    div() {
      throw "Division not implemented for " + this.constructor.name;
    }
  }
  class l extends n {
    constructor(C, b) {
      super(), this.asStr = C + " " + b, this.value = C, this.unit = b;
    }
    equals(C) {
      if (!(C instanceof this.constructor))
        return !1;
      const b = l._calendarDuration2Seconds[this.unit], v = l._calendarDuration2Seconds[C.unit];
      if (!b != !v && (b > 1 || v > 1))
        return null;
      if (this.unit === C.unit)
        return _.isEqual(this.value, C.value);
      const M = this._compareYearsAndMonths(C);
      if (M)
        return M.isEqual;
      const A = l.toUcumQuantity(this.value, this.unit), q = l.toUcumQuantity(C.value, C.unit), H = g.convertUnitTo(q.unit, q.value, A.unit);
      return H.status !== "succeeded" ? !1 : _.isEqual(A.value, H.toVal);
    }
    /**
     * Determines if this quantity is equivalent to another quantity.
     * See https://www.hl7.org/fhirpath/#quantity-equivalence
     *
     * @param {FP_Quantity} otherQuantity - The quantity to compare with.
     * @returns {boolean} - Returns true if the quantities are equivalent, false otherwise.
     */
    equivalentTo(C) {
      if (!(C instanceof this.constructor))
        return !1;
      if (this.unit === C.unit)
        return _.isEquivalent(this.value, C.value);
      const b = l.getEquivalentUcumUnitCode(this.unit), v = l.getEquivalentUcumUnitCode(C.unit), M = g.convertUnitTo(v, C.value, b);
      if (M.status !== "succeeded")
        return !1;
      if (M.toVal >= C.value)
        return _.isEquivalent(this.value, M.toVal);
      const A = g.convertUnitTo(b, this.value, v);
      return _.isEquivalent(A.toVal, C.value);
    }
    /**
     *  Returns a number less than 0, equal to 0 or greater than 0
     *  if this quantity is less than, equal to, or greater than otherQuantity.
     *  If the quantities could not be compared, returns null, which will be
     *  converted to an empty collection in the "doInvoke" function
     *  See https://hl7.org/fhirpath/#comparison
     *  @param {FP_Quantity} otherQuantity
     *  @return {number|null}
     */
    compare(C) {
      if (this.unit === C.unit)
        return this.value - C.value;
      const b = l._calendarDuration2Seconds[this.unit], v = l._calendarDuration2Seconds[C.unit];
      if (b !== void 0 && v !== void 0) {
        const H = l._yearMonthConversionFactor[this.unit], Y = l._yearMonthConversionFactor[C.unit];
        return H && Y ? this.value * H - C.value * Y : this.value * b - C.value * v;
      } else if (b > 1 || v > 1)
        return null;
      const M = l.getEquivalentUcumUnitCode(this.unit), A = l.getEquivalentUcumUnitCode(C.unit), q = g.convertUnitTo(A, C.value, M);
      return q.status !== "succeeded" ? null : this.value - q.toVal;
    }
    /**
     *  Returns true if this quantity can be compared with otherQuantity, false
     *  otherwise.
     *  @param {FP_Quantity} otherQuantity
     *  @return {boolean}
     */
    comparable(C) {
      if (this.unit === C.unit)
        return !0;
      const b = l._calendarDuration2Seconds[this.unit], v = l._calendarDuration2Seconds[C.unit];
      if (b !== void 0 && v !== void 0)
        return !0;
      if (b > 1 || v > 1)
        return !1;
      const M = l.getEquivalentUcumUnitCode(this.unit), A = l.getEquivalentUcumUnitCode(C.unit);
      return g.convertUnitTo(A, C.value, M).status === "succeeded";
    }
    /**
     *  Adds a quantity to this quantity.
     * @param {FP_Quantity} otherQuantity a quantity to be added to this quantity.
     * @return {FP_Quantity|null}
     */
    plus(C) {
      const b = l._yearMonthConversionFactor[this.unit], v = l._yearMonthConversionFactor[C.unit];
      if (b && v)
        return new l(this.value + C.value * v / b, this.unit);
      const M = l._calendarDuration2Seconds[this.unit], A = l._calendarDuration2Seconds[C.unit];
      if (!M != !A && (M > 1 || A > 1))
        return null;
      const q = M ? "s" : this.unit.replace(t, ""), H = (M || 1) * this.value, Y = A ? "s" : C.unit.replace(t, ""), Z = (A || 1) * C.value, Q = g.convertUnitTo(Y, Z, q);
      return Q.status !== "succeeded" || Q.fromUnit.isSpecial_ || Q.toUnit.isSpecial_ ? null : new l(H + Q.toVal, q);
    }
    /**
     * Multiplies this quantity to another quantity.
     * @param {FP_Quantity} otherQuantity a quantity by which to multiply this quantity.
     * @return {FP_Quantity}
     */
    mul(C) {
      const b = l._calendarDuration2Seconds[this.unit], v = l._calendarDuration2Seconds[C.unit];
      if (b > 1 && C.unit !== "'1'" || v > 1 && this.unit !== "'1'")
        return null;
      const M = this.convToUcumUnits(this, b);
      if (!M)
        return null;
      const A = this.convToUcumUnits(C, v);
      return A ? this.unit === "'1'" ? new l(this.value * C.value, C.unit) : C.unit === "'1'" ? new l(this.value * C.value, this.unit) : new l(
        M.value * A.value,
        `'(${M.unit}).(${A.unit})'`
      ) : null;
    }
    /**
     * Divides this quantity by another quantity.
     * @param {FP_Quantity} otherQuantity a quantity by which to divide this quantity.
     * @return {FP_Quantity}
     */
    div(C) {
      if (C.value === 0)
        return null;
      const b = l._calendarDuration2Seconds[this.unit], v = l._calendarDuration2Seconds[C.unit];
      if (b)
        if (v) {
          const Y = l._yearMonthConversionFactor[this.unit], Z = l._yearMonthConversionFactor[C.unit];
          if (Y && Z)
            return new l(this.value * Y / (C.value * Z), "'1'");
        } else {
          if (C.unit === "'1'")
            return new l(this.value / C.value, this.unit);
          if (b > 1)
            return null;
        }
      else if (v > 1)
        return null;
      const M = this.convToUcumUnits(this, b);
      if (!M)
        return null;
      const A = this.convToUcumUnits(C, v);
      if (!A)
        return null;
      const q = A.unit === "1" ? M.unit : `(${M.unit})/(${A.unit})`, H = g.convertToBaseUnits(q, M.value / A.value);
      return H.status !== "succeeded" ? null : new l(
        H.magnitude,
        `'${Object.keys(H.unitToExp).map((Y) => Y + H.unitToExp[Y]).join(".") || "1"}'`
      );
    }
    /**
     * Converts a quantity to UCUM unit if possible, otherwise returns null.
     * @param {FP_Quantity} quantity - source quantity.
     * @param {number|undefined} unitInSeconds - if the source quantity is a
     *  calendar duration then the value of the quantity unit in seconds,
     *  otherwise undefined.
     * @return {{unit: string, value: number} | null}
     */
    convToUcumUnits(C, b) {
      if (b)
        return {
          value: b * C.value,
          unit: "s"
        };
      {
        const v = C.unit.replace(t, ""), M = g.convertToBaseUnits(v, C.value);
        return M.status !== "succeeded" || M.fromUnitIsSpecial ? null : {
          value: M.magnitude,
          unit: Object.keys(M.unitToExp).map((A) => A + M.unitToExp[A]).join(".") || "1"
        };
      }
    }
    /**
     * If both quantities have one of these units: year or month,
     * then a special case will apply; otherwise returns null.
     * In the special case of comparison, the fact that 1 year = 12 months is used.
     *
     * Just note: in general, for a calendar duration:
     * 1 year = 365 days
     * 12 month = 12*30 days = 360 days
     * so, 1 year != 12 month
     * That's why this special case is needed
     *
     * @param {FP_Quantity} otherQuantity
     * @return {null|{isEqual: boolean}}
     * @private
     */
    _compareYearsAndMonths(C) {
      const b = l._yearMonthConversionFactor[this.unit], v = l._yearMonthConversionFactor[C.unit];
      return b && v ? {
        isEqual: _.isEqual(this.value * b, C.value * v)
      } : null;
    }
  }
  const t = /^'|'$/g;
  l.getEquivalentUcumUnitCode = function(S) {
    return l.mapTimeUnitsToUCUMCode[S] || S.replace(t, "");
  }, l.toUcumQuantity = function(S, C) {
    const b = l._calendarDuration2Seconds[C];
    return b ? {
      value: b * S,
      unit: "s"
    } : {
      value: S,
      unit: C.replace(t, "")
    };
  }, l.convUnitTo = function(S, C, b) {
    const v = l._yearMonthConversionFactor[S], M = l._yearMonthConversionFactor[b];
    if (v && M)
      return new l(v * C / M, b);
    const A = l._calendarDuration2Seconds[S], q = l._calendarDuration2Seconds[b];
    if (q) {
      if (A)
        return new l(A * C / q, b);
      {
        const H = g.convertUnitTo(S.replace(/^'|'$/g, ""), C, "s");
        if (H.status === "succeeded")
          return new l(H.toVal / q, b);
      }
    } else {
      const H = A ? g.convertUnitTo("s", A * C, b.replace(/^'|'$/g, "")) : g.convertUnitTo(S.replace(/^'|'$/g, ""), C, b.replace(/^'|'$/g, ""));
      if (H.status === "succeeded")
        return new l(H.toVal, b);
    }
    return null;
  }, l._calendarDuration2Seconds = {
    years: 365 * 24 * 60 * 60,
    months: 30 * 24 * 60 * 60,
    weeks: 7 * 24 * 60 * 60,
    days: 24 * 60 * 60,
    hours: 60 * 60,
    minutes: 60,
    seconds: 1,
    milliseconds: 1e-3,
    year: 365 * 24 * 60 * 60,
    month: 30 * 24 * 60 * 60,
    week: 7 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
    millisecond: 1e-3
  }, l._yearMonthConversionFactor = {
    years: 12,
    months: 1,
    year: 12,
    month: 1
  }, l.dateTimeArithmeticDurationUnits = {
    years: "year",
    months: "month",
    weeks: "week",
    days: "day",
    hours: "hour",
    minutes: "minute",
    seconds: "second",
    milliseconds: "millisecond",
    year: "year",
    month: "month",
    week: "week",
    day: "day",
    hour: "hour",
    minute: "minute",
    second: "second",
    millisecond: "millisecond",
    "'s'": "second",
    "'ms'": "millisecond"
  }, l.mapUCUMCodeToTimeUnits = {
    a: "year",
    mo: "month",
    wk: "week",
    d: "day",
    h: "hour",
    min: "minute",
    s: "second",
    ms: "millisecond"
  }, l.mapTimeUnitsToUCUMCode = Object.keys(l.mapUCUMCodeToTimeUnits).reduce(function(S, C) {
    return S[l.mapUCUMCodeToTimeUnits[C]] = C, S[l.mapUCUMCodeToTimeUnits[C] + "s"] = C, S;
  }, {});
  class m extends n {
    constructor(C) {
      super(), this.asStr = C;
    }
    /**
     *  Adds a time-based quantity to this date/time.
     * @param timeQuantity a quantity to be added to this date/time.  See the
     *  FHIRPath specification for supported units.
     */
    plus(C) {
      const b = C.unit;
      let v = l.dateTimeArithmeticDurationUnits[b];
      if (!v)
        throw new Error("For date/time arithmetic, the unit of the quantity must be one of the following time-based units: " + Object.keys(l.dateTimeArithmeticDurationUnits));
      const M = this.constructor, A = M._timeUnitToDatePrecision[v];
      if (A === void 0)
        throw new Error("Unsupported unit for +.  The unit should be one of " + Object.keys(M._timeUnitToDatePrecision).join(", ") + ".");
      let q = C.value;
      const H = M === o;
      if ((H ? A < 2 : A < 5) && (q = Math.trunc(q)), this._getPrecision() < A) {
        const ee = M._datePrecisionToTimeUnit[this._getPrecision()];
        if (ee !== "second") {
          const te = l.convUnitTo(v, q, ee);
          v = te.unit, q = Math.trunc(te.value);
        }
      }
      const Y = m.timeUnitToAddFn[v](this._getDateObj(), q);
      let Z = this._getPrecision();
      H && (Z += 3);
      let Q = d.isoDateTime(Y, Z);
      return H && (Q = Q.slice(Q.indexOf("T") + 1, -6)), new M(Q);
    }
    /**
     *  Tests whether this object is equal to another.  Returns either true,
     *  false, or undefined (where in the FHIRPath specification empty would be
     *  returned).  The undefined return value indicates that the values were the
     *  same to the shared precision, but that they had differnent levels of
     *  precision.
     * @param otherDateTime any sub-type of FP_TimeBase, but it should be the same
     *  as the type of "this".
     */
    equals(C) {
      var b;
      if (!(C instanceof this.constructor) && !(this instanceof C.constructor))
        b = !1;
      else {
        var v = this._getPrecision(), M = C._getPrecision();
        if (v == M)
          b = this._getDateObj().getTime() == C._getDateObj().getTime();
        else {
          var A = v <= M ? v : M, q = this._getDateObj().toISOString(), H = C._getDateObj().toISOString();
          this.constructor === o && (A += 3, v += 3, M += 3);
          for (var Y = v > 2 ? new d(q)._getTimeParts() : this._getTimeParts(), Z = M > 2 ? new d(H)._getTimeParts() : C._getTimeParts(), Q = 0; Q <= A && b !== !1; ++Q)
            b = Y[Q] == Z[Q];
          b && (b = void 0);
        }
      }
      return b;
    }
    /**
     *  Tests whether this object is equivalant to another.  Returns either true
     *  or false.
     */
    equivalentTo(C) {
      var b = C instanceof this.constructor;
      if (b) {
        var v = this._getPrecision(), M = C._getPrecision();
        b = v == M, b && (b = this._getDateObj().getTime() == C._getDateObj().getTime());
      }
      return b;
    }
    /**
     *  Returns a number less than 0, equal to 0 or greater than 0
     *  if this (date) time is less than, equal to, or greater than otherTime.
     *  Comparisons are made at the lesser of the two time precisions.
     *  @param {FP_TimeBase} otherTime
     *  @return {number}
     */
    compare(C) {
      var b = this._getPrecision(), v = C._getPrecision(), M = b <= v ? this._getDateObj().getTime() : this._dateAtPrecision(v).getTime(), A = v <= b ? C._getDateObj().getTime() : C._dateAtPrecision(b).getTime();
      return b !== v && M === A ? null : M - A;
    }
    /**
     *  Returns a number representing the precision of the time string given to
     *  the constructor.  (Higher means more precise).  The number is the number
     *  of components of the time string (ignoring the time zone) produced by
     *  matching against the time regular expression, except that milliseconds
     *  and seconds are counted together as a single of level of precision.
     *  @return {number}
     */
    _getPrecision() {
      return this.precision === void 0 && this._getMatchData(), this.precision;
    }
    /**
     *  Returns the match data from matching the given RegExp against the
     *  date/time string given to the constructor.
     *  Also sets this.precision.
     * @param regEx The regular expression to match against the date/time string.
     * @param maxPrecision the maximum precision possible for the type
     */
    _getMatchData(C, b) {
      if (this.timeMatchData === void 0 && (this.timeMatchData = this.asStr.match(C), this.timeMatchData))
        for (let v = b; v >= 0 && this.precision === void 0; --v)
          this.timeMatchData[v] && (this.precision = v);
      return this.timeMatchData;
    }
    /**
     *  Returns an array of the pieces of the given time string, for use in
     *  constructing lower precision versions of the time. The returned array will
     *  contain separate elements for the hour, minutes, seconds, and milliseconds
     *  (or as many of those are as present).  The length of the returned array
     *  will therefore be an indication of the precision.
     *  It will not include the timezone.
     * @timeMatchData the result of matching the time portion of the string passed
     *  into the constructor against the "timeRE" regular expression.
     */
    _getTimeParts(C) {
      var b = [];
      b = [C[0]];
      var v = C[4];
      if (v) {
        let H = b[0];
        b[0] = H.slice(0, H.length - v.length);
      }
      var M = C[1];
      if (M) {
        let H = b[0];
        b[0] = H.slice(0, H.length - M.length), b[1] = M;
        var A = C[2];
        if (A) {
          b[1] = M.slice(0, M.length - A.length), b[2] = A;
          var q = C[3];
          q && (b[2] = A.slice(0, A.length - q.length), b[3] = q);
        }
      }
      return b;
    }
    /**
     *  Returns a date object representing this time on a certain date.
     */
    _getDateObj() {
      if (!this.dateObj) {
        var C = this._getPrecision();
        this.dateObj = this._dateAtPrecision(C);
      }
      return this.dateObj;
    }
    /**
     * Creates a date object for the given timezone.
     *
     * @param {number} year The full year designation is required for
     *  cross-century date accuracy. If year is between 0 and 99 is used,
     *  then year is assumed to be 1900 + year.
     * @param {number} month The month as a number between 0 and 11 (January to
     *  December).
     * @param {number} day The date as a number between 1 and 31.
     * @param {number} hour A number from 0 to 23 (midnight to 11pm) that
     *  specifies the hour.
     * @param {number} minutes A number from 0 to 59 that specifies the minutes.
     * @param {number} seconds A number from 0 to 59 that specifies the seconds.
     * @param ms A number from 0 to 999 that specifies the milliseconds.
     * @param {string} timezoneOffset (optional) a string in the format (+-)HH:mm or Z, representing the
     *  timezone offset.  If not provided, the local timezone will be assumed (as the
     *  Date constructor does).
     * @returns {Date} a Date object representing the date and time in the
     *  specified timezone.
     */
    _createDate(C, b, v, M, A, q, H, Y) {
      var Z = new Date(C, b, v, M, A, q, H);
      if (Y) {
        var Q = Z.getTimezoneOffset(), ee = 0;
        if (Y !== "Z") {
          var te = Y.split(":"), ie = parseInt(te[0]);
          ee = parseInt(te[1]), ie < 0 && (ee = -ee), ee += 60 * ie;
        }
        Z = f(Z, -Q - ee);
      }
      return Z;
    }
  }
  m.timeUnitToAddFn = {
    year: n0(),
    month: ei(),
    week: l0(),
    day: ti(),
    hour: s0(),
    minute: Gl(),
    second: i0(),
    millisecond: Xe()
  };
  class d extends m {
    /**
     *  Constructs an FP_DateTime, assuming dateStr is valid.  If you don't know
     *  whether a string is a valid DateTime, use FP_DateTime.checkString instead.
     */
    constructor(C) {
      super(C);
    }
    /**
     *  Returns -1, 0, or 1 if this date time is less then, equal to, or greater
     *  than otherDateTime.  Comparisons are made at the lesser of the two date time
     *  precisions.
     */
    compare(C) {
      if (!(C instanceof d))
        throw "Invalid comparison of a DateTime with something else";
      return super.compare(C);
    }
    /**
     *  Returns the match data from matching dateTimeRE against the datetime string.
     *  Also sets this.precision.
     */
    _getMatchData() {
      return super._getMatchData(u, 5);
    }
    /**
     *  Returns an array of the pieces of the date time string passed into the
     *  constructor, for use in constructing lower precision versions of the
     *  date time. The returned array will contain separate elements for the year,
     *  month, day, hour, minutes, seconds, and milliseconds (or as many of those
     *  are as present).  The length of the returned array will therefore be an
     *  indication of the precision.  It will not include the timezone.
     */
    _getTimeParts() {
      if (!this.timeParts) {
        let b = this._getMatchData(), v = b[0];
        this.timeParts = [v];
        var C = b[1];
        if (C) {
          this.timeParts[0] = v.slice(0, v.length - C.length), this.timeParts[1] = C;
          let M = b[2];
          if (M) {
            this.timeParts[1] = C.slice(0, C.length - M.length), this.timeParts[2] = M;
            let A = b[3];
            A && (this.timeParts[2] = M.slice(0, M.length - A.length), A[0] === "T" && (b[3] = A.slice(1)), this.timeParts = this.timeParts.concat(
              super._getTimeParts(b.slice(3))
            ));
          }
        }
      }
      return this.timeParts;
    }
    /**
     *  Returns a new Date object for a time equal to what this time would be if
     *  the string passed into the constructor had the given precision.
     * @param precision the new precision, which is assumed to be less than
     *  or equal to the current precision.
     */
    _dateAtPrecision(C) {
      var b = this._getTimeParts(), v = this._getMatchData()[7], M = this._getPrecision(), A = parseInt(b[0]), q = M > 0 ? parseInt(b[1].slice(1)) - 1 : 0, H = M > 1 ? parseInt(b[2].slice(1)) : 1, Y = M > 2 ? parseInt(b[3]) : 0, Z = M > 3 ? parseInt(b[4].slice(1)) : 0, Q = M > 4 ? parseInt(b[5].slice(1)) : 0, ee = b.length > 6 ? parseInt(b[6].slice(1)) : 0, te = this._createDate(
        A,
        q,
        H,
        Y,
        Z,
        Q,
        ee,
        v
      );
      return C < M && (A = te.getFullYear(), q = C > 0 ? te.getMonth() : 0, H = C > 1 ? te.getDate() : 1, Y = C > 2 ? te.getHours() : 0, Z = C > 3 ? te.getMinutes() : 0, te = new Date(A, q, H, Y, Z)), te;
    }
  }
  d.checkString = function(S) {
    let C = new d(S);
    return C._getMatchData() || (C = null), C;
  }, d._timeUnitToDatePrecision = {
    year: 0,
    month: 1,
    week: 2,
    // wk is just 7*d
    day: 2,
    hour: 3,
    minute: 4,
    second: 5,
    millisecond: 6
  }, d._datePrecisionToTimeUnit = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  class o extends m {
    /**
     *  Constructs an FP_Time, assuming dateStr is valid.  If you don't know
     *  whether a string is a valid DateTime, use FP_Time.checkString instead.
     */
    constructor(C) {
      C[0] === "T" && (C = C.slice(1)), super(C);
    }
    /**
     *  Returns -1, 0, or 1 if this time is less then, equal to, or greater
     *  than otherTime.  Comparisons are made at the lesser of the two time
     *  precisions.
     */
    compare(C) {
      if (!(C instanceof o))
        throw "Invalid comparison of a time with something else";
      return super.compare(C);
    }
    /**
     *  Returns a new Date object for a time equal to what this time would be if
     *  the string passed into the constructor had the given precision.
     *  The "date" portion of the returned Date object is not meaningful, and
     *  should be ignored.
     * @param precision the new precision, which is assumed to be less than the
     *  or equal to the current precision.  A precision of 0 means the hour.
     */
    _dateAtPrecision(C) {
      var b = this._getTimeParts(), v = this._getMatchData()[4], M = this._getPrecision(), A = 2010, q = 0, H = 1, Y = parseInt(b[0]), Z = M > 0 ? parseInt(b[1].slice(1)) : 0, Q = M > 1 ? parseInt(b[2].slice(1)) : 0, ee = b.length > 3 ? parseInt(b[3].slice(1)) : 0, te = this._createDate(
        A,
        q,
        H,
        Y,
        Z,
        Q,
        ee,
        v
      );
      return v && (te.setYear(A), te.setMonth(q), te.setDate(H)), C < M && (Y = te.getHours(), Z = C > 0 ? te.getMinutes() : 0, te = new Date(A, q, H, Y, Z)), te;
    }
    /**
     *  Returns the match data from matching timeRE against the time string.
     *  Also sets this.precision.
     */
    _getMatchData() {
      return super._getMatchData(e, 2);
    }
    /**
     *  Returns an array of the pieces of the time string passed into the
     *  constructor, for use in constructing lower precision versions of the
     *  time. The returned array will contain separate elements for the hour,
     *  minutes, seconds, and milliseconds (or as many of those are as present).
     *  The length of the returned array will therefore be an indication of the
     *  precision.  It will not include the timezone.
     */
    _getTimeParts() {
      return this.timeParts || (this.timeParts = super._getTimeParts(this._getMatchData())), this.timeParts;
    }
  }
  o.checkString = function(S) {
    let C = new o(S);
    return C._getMatchData() || (C = null), C;
  }, o._timeUnitToDatePrecision = {
    hour: 0,
    minute: 1,
    second: 2,
    millisecond: 3
  }, o._datePrecisionToTimeUnit = ["hour", "minute", "second", "millisecond"];
  function h(S, C) {
    var b = S;
    return C === 3 && S < 100 && (b = "0" + S), S < 10 && (b = "0" + b), b;
  }
  d.isoDateTime = function(S, C) {
    C === void 0 && (C = 5);
    var b = "" + S.getFullYear();
    if (C > 0 && (b += "-" + h(S.getMonth() + 1), C > 1 && (b += "-" + h(S.getDate()), C > 2 && (b += "T" + d.isoTime(S, C - 3)))), C > 2) {
      var v = S.getTimezoneOffset(), M = v < 0 ? "+" : "-";
      v = Math.abs(v);
      var A = v % 60, q = (v - A) / 60;
      b += M + h(q) + ":" + h(A);
    }
    return b;
  }, d.isoTime = function(S, C) {
    C === void 0 && (C = 2);
    let b = "" + h(S.getHours());
    return C > 0 && (b += ":" + h(S.getMinutes()), C > 1 && (b += ":" + h(S.getSeconds()), S.getMilliseconds() && (b += "." + h(S.getMilliseconds(), 3)))), b;
  };
  class c extends d {
    /**
     * Constructs an FP_Date, assuming dateStr is valid.  If you don't know
     * whether a string is a valid Date, use FP_Date.checkString instead.
     */
    constructor(C) {
      super(C);
    }
    /**
     * Returns the match data from matching dateRE against the date string.
     * Also sets this.precision.
     */
    _getMatchData() {
      return m.prototype._getMatchData.apply(this, [s, 2]);
    }
  }
  c.checkString = function(S) {
    let C = new c(S);
    return C._getMatchData() || (C = null), C;
  }, c.isoDate = function(S, C) {
    return (C === void 0 || C > 2) && (C = 2), d.isoDateTime(S, C);
  };
  class y extends d {
    /**
     * Constructs an FP_Instant, assuming instantStr is valid.  If you don't know
     * whether a string is a valid "instant", use FP_Instant.checkString instead.
     */
    constructor(C) {
      super(C);
    }
    /**
     * Returns the match data from matching instantRE against the "instant" string.
     * Also sets this.precision.
     */
    _getMatchData() {
      return m.prototype._getMatchData.apply(this, [i, 5]);
    }
  }
  y.checkString = function(S) {
    let C = new y(S);
    return C._getMatchData() || (C = null), C;
  };
  class T {
    /**
     *  Constructs a instance for the given node ("data") of a resource.  If the
     *  data is the top-level node of a resouce, the path and type parameters will
     *  be ignored in favor of the resource's resourceType field.
     * @param {*} data - the node's data or value (which might be an object with
     *  sub-nodes, an array, or FHIR data type)
     * @param {ResourceNode} parentResNode - parent ResourceNode.
     * @param {string} path - the node's path in the resource (e.g. Patient.name).
     *  If the data's type can be determined from data, that will take precedence
     *  over this parameter.
     * @param {*} _data - additional data stored in a property named with "_"
     *  prepended, see https://www.hl7.org/fhir/element.html#json for details.
     * @param {string} fhirNodeDataType - FHIR node data type, if the resource node
     *  is described in the FHIR model.
     *  @param {Object} model - the model object specific to a domain, e.g. R4.
     *  @param {string} propName – the property name of the node within its parent
     *   resource, if applicable. Used to identify the specific property this node
     *   represents.
     *  @param {number} index - the index of the node within an array property,
     *   if the node is part of an array. Used to track the position of the node
     *   among siblings.
     */
    constructor(C, b, v, M, A, q, H = null, Y = null) {
      C != null && C.resourceType && (v = C.resourceType, A = C.resourceType), this.parentResNode = b || null, this.path = v || null, this.data = A === "integer64" ? BigInt(C) : C, this._data = M || {}, this.fhirNodeDataType = A || null, this.model = q || null, this.propName = H, this.index = Y;
    }
    /**
     * Returns resource node type info.
     * @return {TypeInfo}
     */
    getTypeInfo() {
      var C;
      if (!this.typeInfo) {
        let b;
        if (this.fhirNodeDataType) {
          const v = /^System\.(.*)$/.exec(this.fhirNodeDataType);
          v ? b = new O({ namespace: O.System, name: v[1] }) : b = new O({
            namespace: O.FHIR,
            name: this.fhirNodeDataType,
            // refType is a list of possible resource types that this reference may refer to.
            refType: this.parentResNode && ((C = this.model) == null ? void 0 : C.path2RefType[this.parentResNode.path + "." + this.propName]) || null
          });
        }
        this.typeInfo = b || O.createByValueInSystemNamespace(this.data);
      }
      return this.typeInfo;
    }
    toJSON() {
      return $(this.data);
    }
    /**
     * Get the resource that contains this node.
     * The node may be in contained resources.
     *
     * @returns {ResourceNode}
     */
    getParentResource() {
      var b;
      let C = this;
      do
        C = C.parentResNode;
      while (C && !((b = C.data) != null && b.resourceType));
      return C;
    }
    /**
     * Converts a resource node value to an instance of the FHIRPath system type
     * (FP_Quantity, FP_Date, FP_DateTime, or FP_Time) for use in evaluating
     * a FHIRPath expression if the node path matches the specified type in the
     * model and when conversion is possible, otherwise returns the data as is.
     * Throws an exception if the data is a Quantity that has a comparator.
     * The Mapping from FHIR Quantity to FHIRPath System.Quantity is explained here:
     * https://www.hl7.org/fhir/fhirpath.html#quantity
     * this.data is not changed, but converted value is returned.
     * @return {FP_Type|any}
     */
    convertData() {
      if (!this.convertedData) {
        var C = this.data;
        if (C != null) {
          const b = O.typeToClassWithCheckString[this.path];
          if (b)
            C = b.checkString(C) || C;
          else if (O.isType(this.path, "Quantity", this.model) && (C == null ? void 0 : C.system) === p && typeof C.value == "number" && typeof C.code == "string") {
            if (C.comparator !== void 0)
              throw new Error("Cannot convert a FHIR.Quantity that has a comparator");
            C = new l(
              C.value,
              l.mapUCUMCodeToTimeUnits[C.code] || "'" + C.code + "'"
            );
          }
        }
        this.convertedData = C;
      }
      return this.convertedData;
    }
    /**
     * The full property name of the node in the resource
     * (e.g. Patient.name[0].given[0])
     *
     * @return {string} - returns the full property name of the node in
     *  the resource.
     */
    fullPropertyName() {
      var v;
      let C = this.propName;
      this.parentResNode && this.model && this.fhirNodeDataType && C.endsWith(this.fhirNodeDataType.charAt(0).toUpperCase() + this.fhirNodeDataType.substring(1)) && this.model.choiceTypePaths[((v = this.parentResNode) == null ? void 0 : v.path) + "." + C.substring(0, C.length - this.fhirNodeDataType.length)] && (C = C.substring(0, C.length - this.fhirNodeDataType.length));
      let b = (this.parentResNode ? this.parentResNode.fullPropertyName() + "." + C : C) || this.path;
      return this.index != null && (b += "[" + this.index + "]"), b;
    }
  }
  T.makeResNode = function(S, C, b, v, M, A, q, H) {
    return S instanceof T ? S : new T(
      S,
      C,
      b,
      v,
      M,
      A,
      q,
      H
    );
  };
  const N = /* @__PURE__ */ new Set();
  ["Boolean", "String", "Integer", "Long", "Decimal", "Date", "DateTime", "Time", "Quantity"].forEach((S) => N.add(S));
  const I = class I {
    constructor({ name: C, namespace: b, refType: v = null }) {
      this.name = C, this.namespace = b, v && (this.refType = v);
    }
    /**
     * Checks for equality with another TypeInfo object, or that another TypeInfo
     * object specifies a superclass for the type specified by this object.
     * @param {TypeInfo} other - the TypeInfo object to compare with.
     * @param {Object} model - the model object specific to a domain, e.g. R4.
     * @return {boolean}
     */
    is(C, b) {
      return C instanceof I && (!this.namespace || !C.namespace || this.namespace === C.namespace) ? b && (!this.namespace || this.namespace === I.FHIR) ? I.isType(this.name, C.name, b) : this.name === C.name : !1;
    }
    /**
     * Determines whether the current type can be automatically converted to
     * another type or whether another type specifies the same type or
     * a superclass for the current type.
     * See automatic conversion: https://hl7.org/fhir/fhirpath.html#types
     *
     * @param {TypeInfo} other - The `TypeInfo` object to compare with.
     * @param {Object} model - The model object specific to a domain (e.g., R4).
     * @returns {boolean} - Returns `true` if the current type can be automatically
     *  converted to the other type or if the other type specifies a superclass for
     *  the current type; otherwise, returns `false`.
     */
    isConvertibleTo(C, b) {
      if (C instanceof I) {
        if ((!this.namespace || this.namespace === I.FHIR) && (!C.namespace || C.namespace === I.System) && z[this.name] === C.name)
          return !0;
        if (!this.namespace || !C.namespace || this.namespace === C.namespace)
          return b && (!this.namespace || this.namespace === I.FHIR) ? I.isType(this.name, C.name, b) : this.name === C.name;
      }
      return !1;
    }
    /**
     * Returns the string representation of type info.
     * @returns {string}
     */
    toString() {
      return (this.namespace ? this.namespace + "." : "") + this.name;
    }
    /**
     * Returns true if type info represents a valid type identifier, false otherwise.
     * @param {Object} model - the model object specific to a domain, e.g. R4.
     * @returns {boolean}
     */
    isValid(C) {
      let b = !1;
      return this.namespace === "System" ? b = N.has(this.name) : this.namespace === "FHIR" ? b = C.availableTypes.has(this.name) : this.namespace || (b = N.has(this.name) || C.availableTypes.has(this.name)), b;
    }
  };
  // The "model" data object specific to a domain, e.g. R4.
  se(I, "model", null);
  let O = I;
  O.typeToClassWithCheckString = {
    date: c,
    dateTime: d,
    instant: y,
    time: o
  }, O.isType = function(S, C, b) {
    do
      if (S === C)
        return !0;
    while (S = b == null ? void 0 : b.type2Parent[S]);
    return !1;
  }, O.System = "System", O.FHIR = "FHIR", O.FhirValueSet = new O({
    namespace: O.FHIR,
    name: "ValueSet"
  }), O.FhirUri = new O({
    namespace: O.FHIR,
    name: "uri"
  }), O.SystemString = new O({
    namespace: O.System,
    name: "String"
  }), O.FhirString = new O({
    namespace: O.FHIR,
    name: "string"
  }), O.FhirCodeSystem = new O({
    namespace: O.FHIR,
    name: "CodeSystem"
  }), O.FhirCodeableConcept = new O({
    namespace: O.FHIR,
    name: "CodeableConcept"
  }), O.FhirCoding = new O({
    namespace: O.FHIR,
    name: "Coding"
  }), O.FhirCode = new O({
    namespace: O.FHIR,
    name: "code"
  }), O.FhirConceptMap = new O({
    namespace: O.FHIR,
    name: "ConceptMap"
  }), O.FhirReference = new O({
    namespace: O.FHIR,
    name: "Reference"
  }), O.FhirCanonical = new O({
    namespace: O.FHIR,
    name: "canonical"
  }), O.createByValueInSystemNamespace = function(S) {
    let C = typeof S;
    return C === "bigint" ? C = "long" : Number.isInteger(S) ? C = "integer" : C === "number" ? C = "decimal" : S instanceof c ? C = "date" : S instanceof d ? C = "dateTime" : S instanceof o ? C = "time" : S instanceof l && (C = "Quantity"), C = C.replace(/^\w/, (b) => b.toUpperCase()), new O({ namespace: O.System, name: C });
  }, O.fromValue = function(S) {
    return S instanceof T ? S.getTypeInfo() : O.createByValueInSystemNamespace(S);
  };
  const P = /* @__PURE__ */ new Set();
  [
    "instant",
    "time",
    "date",
    "dateTime",
    "base64Binary",
    "decimal",
    "integer64",
    "boolean",
    "string",
    "code",
    "markdown",
    "id",
    "integer",
    "unsignedInt",
    "positiveInt",
    "uri",
    "oid",
    "uuid",
    "canonical",
    "url",
    // The following primitive type names are for reference only and are not
    // currently used in code. Instead, in the TypeInfo.isPrimitiveValue function
    // we use a simplified check.
    "Integer",
    "Long",
    "Decimal",
    "String",
    "Date",
    "DateTime",
    "Time"
  ].forEach((S) => P.add(S));
  const z = [
    { from: ["boolean"], to: "Boolean" },
    { from: ["string", "uri", "code", "oid", "id", "uuid", "markdown", "base64Binary"], to: "String" },
    { from: ["integer", "unsignedInt", "positiveInt"], to: "Integer" },
    { from: ["integer64"], to: "Long" },
    { from: ["decimal"], to: "Decimal" },
    { from: ["date", "dateTime", "instant"], to: "DateTime" },
    { from: ["time"], to: "Time" },
    { from: ["Quantity"], to: "Quantity" }
  ].reduce((S, C) => {
    const { from: b, to: v } = C;
    return b.forEach((M) => {
      S[M] = v;
    }), S;
  }, {});
  O.isPrimitive = function(S) {
    return P.has(S.name);
  }, O.isPrimitiveValue = function(S) {
    return S instanceof T ? P.has(S.getTypeInfo().name) : typeof S != "object" || S instanceof n && !(S instanceof l);
  };
  function D(S) {
    return S.map((C) => O.fromValue(C));
  }
  function F(S, C) {
    if (S.length === 0)
      return [];
    if (S.length > 1)
      throw new Error("Expected singleton on left side of 'is', got " + $(S));
    const b = this;
    return O.fromValue(S[0]).is(C, b.model);
  }
  function B(S, C) {
    if (S.length === 0)
      return [];
    if (S.length > 1)
      throw new Error("Expected singleton on left side of 'as', got " + $(S));
    const b = this;
    return O.fromValue(S[0]).is(C, b.model) ? S : [];
  }
  function $(S, C = void 0) {
    return JSON.stringify(S, (b, v) => typeof v == "bigint" ? v.toString() : v, C);
  }
  return sn = {
    FP_Type: n,
    FP_TimeBase: m,
    FP_Date: c,
    FP_DateTime: d,
    FP_Instant: y,
    FP_Time: o,
    FP_Quantity: l,
    timeRE: e,
    dateTimeRE: u,
    dateRE: s,
    instantRE: i,
    ResourceNode: T,
    TypeInfo: O,
    typeFn: D,
    isFn: F,
    asFn: B,
    toJSON: $
  }, sn;
}
var rn, ds;
function me() {
  if (ds) return rn;
  ds = 1;
  const f = {}, { ResourceNode: g, toJSON: _ } = fe();
  f.toJSON = _, f.raiseError = function(s, i) {
    throw i = i ? i + ": " : "", i + s;
  }, f.assertOnlyOne = function(s, i) {
    s.length !== 1 && f.raiseError("Was expecting only one element but got " + f.toJSON(s), i);
  }, f.assertType = function(s, i, n) {
    let l = this.valData(s);
    if (i.indexOf(typeof l) < 0) {
      let t = i.length > 1 ? "one of " + i.join(", ") : i[0];
      f.raiseError("Found type '" + typeof s + "' but was expecting " + t, n);
    }
    return l;
  }, f.isEmpty = function(s) {
    return Array.isArray(s) && s.length === 0;
  }, f.isSome = function(s) {
    return s != null && !f.isEmpty(s);
  }, f.isTrue = function(s) {
    return s != null && (s === !0 || s.length === 1 && f.valData(s[0]) === !0);
  }, f.isCapitalized = function(s) {
    return s && s[0] === s[0].toUpperCase();
  }, f.capitalize = function(s) {
    return s[0].toUpperCase() + s.substring(1);
  }, f.flatten = function(s) {
    return s.some((i) => i instanceof Promise) ? Promise.all(s).then((i) => p(i)) : p(s);
  };
  function p(s) {
    return [].concat(...s);
  }
  f.arraify = function(s) {
    return Array.isArray(s) ? s : f.isSome(s) ? [s] : [];
  }, f.resolveAndArraify = function(s) {
    return s instanceof Promise ? s.then((i) => f.arraify(i)) : f.arraify(s);
  }, f.valData = function(s) {
    return s instanceof g ? s.data : s;
  }, f.valDataConverted = function(s) {
    return s instanceof g && (s = s.convertData()), s;
  }, f.escapeStringForRegExp = function(s) {
    return s.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&");
  }, f.pushFn = Function.prototype.apply.bind(Array.prototype.push), f.makeChildResNodes = function(s, i, n) {
    var c, y, T, N;
    let l = s.path + "." + i;
    if (n) {
      let O = n.pathsDefinedElsewhere[l];
      O && (l = O);
    }
    let t, m, d = n && n.choiceTypePaths[l];
    if (d)
      for (let O of d) {
        let P = i + O;
        if (t = (c = s.data) == null ? void 0 : c[P], m = (y = s.data) == null ? void 0 : y["_" + P], t !== void 0 || m !== void 0) {
          l += O;
          break;
        }
      }
    else
      t = (T = s.data) == null ? void 0 : T[i], m = (N = s.data) == null ? void 0 : N["_" + i], t === void 0 && m === void 0 && (t = s._data[i]), i === "extension" && (l = "Extension");
    let o = null;
    n && (o = n.path2Type[l], l = n.path2TypeWithoutElements[l] || l);
    let h;
    if (f.isSome(t) || f.isSome(m))
      if (Array.isArray(t)) {
        h = t.map((P, z) => g.makeResNode(
          P,
          s,
          l,
          m && m[z],
          o,
          n,
          i,
          z
        ));
        const O = (m == null ? void 0 : m.length) || 0;
        for (let P = t.length; P < O; ++P)
          h.push(g.makeResNode(
            null,
            s,
            l,
            m[P],
            o,
            n,
            i,
            P
          ));
      } else t == null && Array.isArray(m) ? h = m.map((O) => g.makeResNode(
        null,
        s,
        l,
        O,
        o,
        n,
        i
      )) : h = [g.makeResNode(
        t,
        s,
        l,
        m,
        o,
        n,
        i
      )];
    else
      h = [];
    return h;
  };
  const a = {}, r = 36e5, e = {
    Accept: "application/fhir+json; charset=utf-8",
    "Content-Type": "application/fhir+json; charset=utf-8"
  }, u = {
    Accept: "application/fhir+json; charset=utf-8"
  };
  return f.fetchWithCache = function(s, i, n) {
    if (i.httpHeaders) {
      const d = Object.keys(i.httpHeaders).find((o) => new RegExp("^" + f.escapeStringForRegExp(o) + "\\b").test(o));
      if (d) {
        const o = i.httpHeaders[d];
        o && (n ? n.headers = {
          ...o,
          ...n.headers
        } : n = {
          headers: o
        });
      }
    }
    i.signal && (n ? n.signal = i.signal : n = { signal: i.signal });
    const l = [
      s,
      n ? f.toJSON(n) : ""
    ].join("|"), t = (n == null ? void 0 : n.method) === "POST" ? e : u;
    n = {
      ...n,
      headers: new Headers({
        ...t,
        ...(n == null ? void 0 : n.headers) || {}
      })
    };
    const m = Date.now();
    for (const d in a)
      m - a[d].timestamp > r && delete a[d];
    return a[l] || (a[l] = {
      timestamp: m,
      // In Jest unit tests, a promise returned by 'fetch' is not an instance of
      // Promise that we have in our application context, so we use Promise.resolve
      // to do the conversion.
      promise: Promise.resolve(fetch(s, n)).then((d) => {
        const o = d.headers.get("Content-Type"), h = o.includes("application/json") || o.includes("application/fhir+json");
        try {
          return h ? d.json().then((c) => d.ok ? c : Promise.reject(c)) : d.text().then((c) => Promise.reject(c));
        } catch (c) {
          return Promise.reject(new Error(c));
        }
      })
    }), a[l].promise;
  }, f.checkAllowAsync = function(s, i) {
    if (!s.async)
      throw new Error(`The asynchronous function "${i}" is not allowed. To enable asynchronous functions, use the async=true or async="always" option.`);
  }, f.hasOwnProperty = Function.prototype.call.bind(Object.prototype.hasOwnProperty), rn = f, rn;
}
var ps = {}, gs;
function r0() {
  if (gs) return ps;
  gs = 1;
  const f = Function.prototype.call.bind(Array.prototype.slice);
  return Number.isInteger = Number.isInteger || function(g) {
    return typeof g == "number" && isFinite(g) && Math.floor(g) === g;
  }, String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
    value: function(g, _) {
      return _ = _ || 0, this.indexOf(g, _) === _;
    }
  }), String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
    value: function(g, _) {
      var p = this.toString();
      (_ === void 0 || _ > p.length) && (_ = p.length), _ -= g.length;
      var a = p.indexOf(g, _);
      return a !== -1 && a === _;
    }
  }), String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
    value: function() {
      return this.indexOf.apply(this, arguments) !== -1;
    }
  }), Object.assign || Object.defineProperty(Object, "assign", {
    value: function(g) {
      if (g == null)
        throw new TypeError("Cannot convert undefined or null to object");
      return f(arguments, 1).reduce(function(_, p) {
        return Object.keys(Object(p)).forEach(function(a) {
          _[a] = p[a];
        }), _;
      }, Object(g));
    }
  }), typeof btoa > "u" && (qn.btoa = function(g) {
    return new Buffer.from(g, "binary").toString("base64");
  }), typeof atob > "u" && (qn.atob = function(g) {
    return new Buffer.from(g, "base64").toString("binary");
  }), ps;
}
var un, ys;
function ni() {
  return ys || (ys = 1, un = {
    /**
     *  Resets the constants.  Should be called when before the engine starts its
     *  processing.
     */
    reset: function() {
      this.nowDate = /* @__PURE__ */ new Date(), this.today = null, this.now = null, this.timeOfDay = null, this.localTimezoneOffset = null;
    },
    /**
     *  The cached value of today().
     */
    today: null,
    /**
     *  The cached value of now().
     */
    now: null,
    /**
     *  The cached value of timeOfDay().
     */
    timeOfDay: null
  }), un;
}
var an, Cs;
function kn() {
  if (Cs) return an;
  Cs = 1;
  const f = Rn().UcumLhcUtils.getInstance(), { roundToMaxPrecision: g } = wn(), { valDataConverted: _ } = me(), { FP_Type: p, FP_Quantity: a } = fe();
  function r(u) {
    return JSON.stringify(e(u));
  }
  function e(u) {
    if (u = _(u), u === null)
      return null;
    if (typeof u == "bigint")
      return u.toString();
    if (typeof u == "number")
      return g(u);
    if (u instanceof Date)
      return u.toISOString();
    if (u instanceof a) {
      const s = a._yearMonthConversionFactor[u.unit];
      if (s)
        return "_!yearMonth!_:" + s * u.value;
      {
        const i = a.toUcumQuantity(u.value, u.unit), n = f.getSpecifiedUnit(i.unit).unit;
        return "_!" + n.property_ + "!_:" + n.magnitude_ * i.value;
      }
    } else {
      if (u instanceof p)
        return u.toString();
      if (typeof u == "object")
        return Array.isArray(u) ? u.map(e) : Object.keys(u).sort().reduce(
          (s, i) => {
            const n = u[i];
            return s[i] = e(n), s;
          },
          {}
        );
    }
    return u;
  }
  return an = r, an;
}
var on, _s;
function Ke() {
  if (_s) return on;
  _s = 1;
  const { FP_Type: f, FP_Quantity: g, ResourceNode: _ } = fe();
  var p = wn(), a = Array.prototype.slice, r = Object.keys, e = function(m) {
    return Object.prototype.toString.call(m) === "[object Arguments]";
  };
  function u(m) {
    return typeof m == "string" || m instanceof String;
  }
  function s(m) {
    return !isNaN(parseFloat(m)) && isFinite(m);
  }
  function i(m) {
    return m.toUpperCase().replace(/\s+/, " ");
  }
  function n(m, d, o) {
    var P, z, D, F;
    const h = m instanceof _, c = d instanceof _;
    let y = h ? m.convertData() : m, T = c ? d.convertData() : d;
    if (o || (o = {}), y === T)
      return o.fuzzy || !h || !c || n(m._data, d._data);
    if (o.fuzzy) {
      if (u(y) && u(T))
        return i(y) === i(T);
      if (s(y) && s(T))
        return p.isEquivalent(y, T);
    } else {
      const B = typeof y;
      if (B === "number") {
        const $ = typeof T;
        if ($ === "bigint")
          return y == T;
        if ($ === "number")
          return p.isEqual(y, T) ? h && c ? n(m._data, d._data, o) : !0 : !1;
      } else if (B === "bigint" && typeof T == "number")
        return y == T;
    }
    if (y instanceof Date && T instanceof Date)
      return y.getTime() === T.getTime() && (o.fuzzy || !h || !c || n(m._data, d._data));
    if (!y || !T || typeof y != "object" && typeof T != "object")
      return y === T && (o.fuzzy || !h || !c || n(m._data, d._data));
    var N = y instanceof f, O = T instanceof f;
    if (N && O) {
      if (o.fuzzy)
        return y.equivalentTo(T);
      {
        let B = y.equals(T);
        return B && (!h || !c || n(m._data, d._data) && n((P = m.data) == null ? void 0 : P.id, (z = d.data) == null ? void 0 : z.id) && n((D = m.data) == null ? void 0 : D.extension, (F = d.data) == null ? void 0 : F.extension));
      }
    } else if (N || O) {
      let B = !1;
      return typeof y == "number" && (y = new g(y, "'1'"), B = !0), typeof T == "number" && (T = new g(T, "'1'"), B = !0), B ? o.fuzzy ? y.equivalentTo(T) : y.equals(T) : !1;
    }
    return t(y, T, o);
  }
  function l(m) {
    return m == null;
  }
  function t(m, d, o) {
    var h, c;
    if (l(m) || l(d) || m.prototype !== d.prototype) return !1;
    if (e(m) || e(d))
      return m = e(m) ? a.call(m) : m, d = e(d) ? a.call(d) : d, n(m, d, o);
    try {
      var y = r(m), T = r(d);
    } catch {
      return !1;
    }
    if (y.length != T.length)
      return !1;
    for (y.sort(), T.sort(), h = y.length - 1; h >= 0; h--)
      if (y[h] != T[h])
        return !1;
    if (y.length === 1)
      return c = y[0], n(m[c], d[c], o);
    for (h = y.length - 1; h >= 0; h--)
      if (c = y[h], !n(m[c], d[c], o)) return !1;
    return typeof m == typeof d;
  }
  return on = {
    deepEqual: n,
    // Maximum collection length to use deepEqual(). When comparing a large number
    // of collection items, it is more efficient to convert the items to strings
    // using the hashObject() function and compare them.
    maxCollSizeForDeepEqual: 6
  }, on;
}
var cn, Ls;
function Pn() {
  if (Ls) return cn;
  Ls = 1;
  const f = me(), { TypeInfo: g, ResourceNode: _ } = fe(), p = kn(), { deepEqual: a, maxCollSizeForDeepEqual: r } = Ke();
  var e = {};
  e.whereMacro = function(s, i) {
    return s !== !1 && !s ? [] : f.flatten(s.map((n, l) => {
      this.$index = l;
      const t = i(n);
      return t instanceof Promise ? t.then((m) => m[0] ? n : []) : t[0] ? n : [];
    }));
  }, e.extension = function(s, i) {
    const n = this;
    return s !== !1 && !s || !i ? [] : f.flatten(s.map((l, t) => {
      this.$index = t;
      const m = l && (l.data && l.data.extension || l._data && l._data.extension);
      return m ? m.reduce((d, o, h) => (o.url === i && d.push(_.makeResNode(
        o,
        l,
        "Extension",
        null,
        "Extension",
        n.model,
        "extension",
        h
      )), d), []) : [];
    }));
  }, e.selectMacro = function(s, i) {
    return s !== !1 && !s ? [] : f.flatten(s.map((n, l) => (this.$index = l, i(n))));
  }, e.repeatMacro = function(s, i, n = { res: [], unique: {}, hasPrimitive: !1 }) {
    if (s !== !1 && !s)
      return [];
    let l = [].concat(...s.map((t) => i(t)));
    return l.some((t) => t instanceof Promise) ? Promise.all(l).then((t) => (t = [].concat(...t), t.length ? e.repeatMacro(u(t, n), i, n) : n.res)) : l.length ? e.repeatMacro(u(l, n), i, n) : n.res;
  };
  function u(s, i) {
    let n;
    return i.hasPrimitive = i.hasPrimitive || s.some((l) => g.isPrimitiveValue(l)), !i.hasPrimitive && s.length + i.res.length > r ? (n = s.filter((l) => {
      const t = p(l), m = !i.unique[t];
      return m && (i.unique[t] = !0), m;
    }), i.res.push.apply(i.res, n)) : n = s.filter((l) => {
      const t = !i.res.some((m) => a(m, l));
      return t && i.res.push(l), t;
    }), n;
  }
  return e.singleFn = function(s) {
    if (s.length === 1)
      return s;
    if (s.length === 0)
      return [];
    throw new Error("Expected single");
  }, e.firstFn = function(s) {
    return s[0];
  }, e.lastFn = function(s) {
    return s[s.length - 1];
  }, e.tailFn = function(s) {
    return s.slice(1, s.length);
  }, e.takeFn = function(s, i) {
    return s.slice(0, i);
  }, e.skipFn = function(s, i) {
    return s.slice(i, s.length);
  }, e.ofTypeFn = function(s, i) {
    const n = this;
    return s.filter((l) => g.fromValue(l).isConvertibleTo(i, n.model));
  }, e.distinctFn = function(s, i = void 0) {
    let n = [];
    if (s.length > 0)
      if (i = i ?? s.some((l) => g.isPrimitiveValue(l)), !i && s.length > r) {
        let l = {};
        for (let t = 0, m = s.length; t < m; ++t) {
          let d = s[t], o = p(d);
          l[o] || (n.push(d), l[o] = !0);
        }
      } else {
        s = s.concat().reverse();
        do {
          let l = s.pop();
          n.push(l), s = s.filter((t) => !a(l, t));
        } while (s.length);
      }
    return n;
  }, cn = e, cn;
}
var fn, bs;
function Fn() {
  if (bs) return fn;
  bs = 1;
  var f = me(), g = fe();
  const { FP_Quantity: _, TypeInfo: p } = g;
  var a = {};
  a.iifMacro = function(o, h, c, y) {
    const T = h(o);
    return T instanceof Promise ? T.then((N) => r(o, N, c, y)) : r(o, T, c, y);
  };
  function r(o, h, c, y) {
    return f.isTrue(h) ? c(o) : y ? y(o) : [];
  }
  a.traceFn = function(o, h, c) {
    const y = c ? c(o) : null;
    return y instanceof Promise ? y.then((T) => a.traceFn(o, h, T)) : (this.customTraceFn ? c ? this.customTraceFn(c(o), h ?? "") : this.customTraceFn(o, h ?? "") : c ? console.log("TRACE:[" + (h || "") + "]", f.toJSON(c(o), null, " ")) : console.log("TRACE:[" + (h || "") + "]", f.toJSON(o, null, " ")), o);
  }, a.defineVariable = function(o, h, c) {
    let y = o;
    if (c && (y = c(o)), this.definedVars || (this.definedVars = {}), h in this.vars || h in this.processedVars)
      throw new Error("Environment Variable %" + h + " already defined");
    if (Object.keys(this.definedVars).includes(h))
      throw new Error("Variable %" + h + " already defined");
    return this.definedVars[h] = y, o;
  };
  function e(o, h) {
    return o.length > 1 && f.raiseError("The input collection contains multiple items", h), o.length === 1;
  }
  var u = /^[+-]?\d+$/;
  a.toInteger = function(o) {
    let h;
    if (e(o, "toInteger")) {
      const c = f.valData(o[0]);
      if (c === !1)
        h = 0;
      else if (c === !0)
        h = 1;
      else {
        const y = typeof c;
        y === "bigint" ? h = Number(c) : y === "number" ? Number.isInteger(c) && (h = c) : y === "string" && u.test(c) && (h = parseInt(c));
      }
    }
    return h;
  }, a.toLong = function(o) {
    let h;
    if (e(o, "toLong")) {
      const c = f.valData(o[0]);
      if (c === !1)
        h = 0n;
      else if (c === !0)
        h = 1n;
      else {
        const y = typeof c;
        y === "bigint" ? h = c : y === "number" ? Number.isInteger(c) && (h = BigInt(c)) : y === "string" && u.test(c) && (h = BigInt(c));
      }
    }
    return h;
  };
  const s = /^((\+|-)?\d+(\.\d+)?)\s*(('[^']+')|([a-zA-Z]+))?$/, i = { value: 1, unit: 5, time: 6 };
  a.toQuantity = function(o, h) {
    let c;
    if (e(o, "toQuantity")) {
      if (h) {
        const O = _._calendarDuration2Seconds[this.unit], P = _._calendarDuration2Seconds[h];
        if (!O != !P && (O > 1 || P > 1))
          return null;
        _.mapTimeUnitsToUCUMCode[h] || (h = `'${h}'`);
      }
      const y = f.valDataConverted(o[0]), T = typeof y;
      let N;
      if (T === "number")
        c = new _(y, "'1'");
      else if (y instanceof _)
        c = y;
      else if (T === "boolean")
        c = new _(y ? 1 : 0, "'1'");
      else if (T === "string" && (N = s.exec(y))) {
        const O = N[i.value], P = N[i.unit], z = N[i.time];
        (!z || _.mapTimeUnitsToUCUMCode[z]) && (c = new _(Number(O), P || z || "'1'"));
      }
      c && h && c.unit !== h && (c = _.convUnitTo(c.unit, c.value, h));
    }
    return c;
  };
  var n = /^[+-]?\d+(\.\d+)?$/;
  a.toDecimal = function(o) {
    let h;
    if (e(o, "toDecimal")) {
      const c = f.valData(o[0]);
      if (c === !1)
        h = 0;
      else if (c === !0)
        h = 1;
      else {
        const y = typeof c;
        y === "bigint" ? h = Number(c) : y === "number" ? h = c : y === "string" && n.test(c) && (h = parseFloat(c));
      }
    }
    return h;
  }, a.toString = function(o) {
    var c;
    let h;
    return e(o, "toString") && (h = (c = f.valDataConverted(o[0])) == null ? void 0 : c.toString()), h;
  };
  function l(o) {
    let h = o.slice(3);
    a["to" + h] = function(c) {
      let y;
      if (e(c, "to" + h)) {
        const T = f.valData(c[0]);
        if (typeof T == "string") {
          const N = g[o].checkString(T);
          N && (y = N);
        }
      }
      return y;
    };
  }
  l("FP_Date"), l("FP_DateTime"), l("FP_Time");
  const t = ["true", "t", "yes", "y", "1", "1.0"].reduce((o, h) => (o[h] = !0, o), {}), m = ["false", "f", "no", "n", "0", "0.0"].reduce((o, h) => (o[h] = !0, o), {});
  a.toBoolean = function(o) {
    let h;
    if (e(o, "toBoolean")) {
      const c = f.valData(o[0]);
      switch (typeof c) {
        case "boolean":
          h = c;
          break;
        case "bigint":
          c === 1n ? h = !0 : c === 0n && (h = !1);
          break;
        case "number":
          c === 1 ? h = !0 : c === 0 && (h = !1);
          break;
        case "string": {
          const y = c.toLowerCase();
          t[y] ? h = !0 : m[y] && (h = !1);
        }
      }
    }
    return h;
  }, a.createConvertsToFn = function(o, h) {
    return typeof h == "string" ? function(c) {
      return c.length !== 1 ? [] : typeof o(c) === h;
    } : function(c) {
      return c.length !== 1 ? [] : o(c) instanceof h;
    };
  };
  const d = {
    Integer: function(o) {
      if (Number.isInteger(o))
        return o;
    },
    Boolean: function(o) {
      return o === !0 || o === !1 ? o : !0;
    },
    Number: function(o) {
      const h = typeof o;
      if (h === "number" || h === "bigint")
        return o;
    },
    String: function(o) {
      if (typeof o == "string")
        return o;
    },
    StringOrNumber: function(o) {
      const h = typeof o;
      if (h === "string" || h === "number")
        return o;
    },
    AnySingletonAtRoot: function(o) {
      return o;
    }
  };
  return a.singleton = function(o, h) {
    if (o.length > 1)
      throw new Error("Unexpected collection" + f.toJSON(o) + "; expected singleton of type " + h);
    if (o.length === 0)
      return [];
    const c = f.valData(o[0]);
    if (c == null)
      return [];
    const y = d[h];
    if (y) {
      const T = y(c);
      if (T !== void 0)
        return T;
      throw new Error(`Expected ${h.toLowerCase()}, but got: ${f.toJSON(o)}`);
    }
    throw new Error("Not supported type " + h);
  }, a.hasValueFn = function(o) {
    return o.length === 1 && f.valData(o[0]) != null && p.isPrimitiveValue(o[0]);
  }, a.getValueFn = function(o) {
    if (o.length === 1) {
      const h = o[0], c = f.valData(h);
      if (c != null && p.isPrimitiveValue(h))
        return c;
    }
    return [];
  }, fn = a, fn;
}
var mn, Ts;
function u0() {
  if (Ts) return mn;
  Ts = 1;
  const f = me(), { whereMacro: g, distinctFn: _ } = Pn(), p = Fn(), a = kn(), { deepEqual: r, maxCollSizeForDeepEqual: e } = Ke(), { TypeInfo: u } = fe(), s = {};
  s.emptyFn = f.isEmpty, s.notFn = function(n) {
    let l = p.singleton(n, "Boolean");
    return typeof l == "boolean" ? !l : [];
  }, s.existsMacro = function(n, l) {
    if (l) {
      const t = g.call(this, n, l);
      return t instanceof Promise ? t.then((m) => s.existsMacro(m)) : s.existsMacro(t);
    }
    return !f.isEmpty(n);
  }, s.allMacro = function(n, l) {
    const t = [];
    for (let m = 0, d = n.length; m < d; ++m) {
      this.$index = m;
      const o = l(n[m]);
      if (o instanceof Promise)
        t.push(o);
      else if (!f.isTrue(o))
        return [!1];
    }
    return t.length ? Promise.all(t).then((m) => m.some((d) => !f.isTrue(d)) ? [!1] : [!0]) : [!0];
  }, s.allTrueFn = function(n) {
    let l = !0;
    for (let t = 0, m = n.length; t < m && l; ++t)
      l = f.assertType(n[t], ["boolean"], "allTrue") === !0;
    return [l];
  }, s.anyTrueFn = function(n) {
    let l = !1;
    for (let t = 0, m = n.length; t < m && !l; ++t)
      l = f.assertType(n[t], ["boolean"], "anyTrue") === !0;
    return [l];
  }, s.allFalseFn = function(n) {
    let l = !0;
    for (let t = 0, m = n.length; t < m && l; ++t)
      l = f.assertType(n[t], ["boolean"], "allFalse") === !1;
    return [l];
  }, s.anyFalseFn = function(n) {
    let l = !1;
    for (let t = 0, m = n.length; t < m && !l; ++t)
      l = f.assertType(n[t], ["boolean"], "anyFalse") === !1;
    return [l];
  };
  function i(n, l) {
    const t = n.length, m = l.length;
    let d = t <= m;
    if (d)
      if (!(n.some((h) => u.isPrimitiveValue(h)) || l.some((h) => u.isPrimitiveValue(h))) && t + m > e) {
        const h = l.reduce((c, y) => (c[a(y)] = !0, c), {});
        d = !n.some((c) => !h[a(c)]);
      } else
        for (let h = 0, c = n.length; h < c && d; ++h) {
          let y = f.valData(n[h]);
          d = l.some((T) => r(y, f.valData(T)));
        }
    return d;
  }
  return s.subsetOfFn = function(n, l) {
    return [i(n, l)];
  }, s.supersetOfFn = function(n, l) {
    return [i(l, n)];
  }, s.isDistinctFn = function(n) {
    return [n.length === _(n).length];
  }, mn = s, mn;
}
var hn, Us;
function li() {
  if (Us) return hn;
  Us = 1;
  const { FP_Quantity: f, FP_Type: g } = fe(), _ = me(), p = {};
  function a(e, u) {
    let s;
    if (r(e))
      s = [];
    else {
      if (e.length !== 1)
        throw new Error("Unexpected collection" + _.toJSON(e) + "; expected singleton of type number");
      {
        const i = _.valData(e[0]);
        if (i == null)
          s = [];
        else if (typeof i == "number")
          s = u(i);
        else
          throw new Error("Expected number, but got " + _.toJSON(i));
      }
    }
    return s;
  }
  function r(e) {
    return typeof e == "number" ? !1 : e.length === 0;
  }
  return p.amp = function(e, u) {
    return (e || "") + (u || "");
  }, p.plus = function(e, u) {
    let s;
    if (e.length === 1 && u.length === 1) {
      const i = _.valDataConverted(e[0]), n = _.valDataConverted(u[0]);
      if (i == null || n == null)
        s = [];
      else if (typeof i == "string" && typeof n == "string")
        s = i + n;
      else if (typeof i == "number")
        if (typeof n == "number")
          s = i + n;
        else {
          if (typeof n == "bigint")
            return Number.isInteger(i) ? BigInt(i) + n : i + Number(n);
          n instanceof f && (s = new f(i, "'1'").plus(n));
        }
      else if (typeof i == "bigint") {
        if (typeof n == "bigint")
          s = i + n;
        else if (typeof n == "number")
          Number.isInteger(n) ? s = i + BigInt(n) : s = Number(i) + n;
        else if (n instanceof f)
          throw _.raiseError("Cannot add a Quantity to a BigInt");
      } else i instanceof g && (n instanceof f ? s = i.plus(n) : n instanceof g ? s = n.plus(i) : typeof n == "number" && (s = i.plus(new f(n, "'1'"))));
    }
    if (s === void 0)
      throw _.raiseError("Cannot " + _.toJSON(e) + " + " + _.toJSON(u));
    return s;
  }, p.minus = function(e, u) {
    if (e.length === 1 && u.length === 1) {
      const s = _.valDataConverted(e[0]), i = _.valDataConverted(u[0]);
      if (s == null || i == null)
        return [];
      if (typeof s == "number") {
        if (typeof i == "number")
          return s - i;
        if (typeof i == "bigint")
          return Number.isInteger(s) ? BigInt(s) - i : s - Number(i);
        if (i instanceof f)
          return new f(s, "'1'").plus(new f(-i.value, i.unit));
      } else if (typeof s == "bigint") {
        if (typeof i == "bigint")
          return s - i;
        if (typeof i == "number")
          return Number.isInteger(i) ? s - BigInt(i) : Number(s) - i;
        i instanceof f && _.raiseError("Cannot subtract a Quantity from a BigInt");
      } else if (s instanceof g) {
        if (i instanceof f)
          return s.plus(new f(-i.value, i.unit));
        if (typeof i == "number")
          return s.plus(new f(-i, "'1'"));
      }
    }
    throw new Error("Cannot " + _.toJSON(e) + " - " + _.toJSON(u));
  }, p.mul = function(e, u) {
    if (e.length === 1 && u.length === 1) {
      const s = _.valDataConverted(e[0]), i = _.valDataConverted(u[0]);
      if (s == null || i == null)
        return [];
      if (typeof s == "bigint") {
        if (typeof i == "bigint")
          return s * i;
        if (typeof i == "number")
          return Number.isInteger(i) ? s * BigInt(i) : Number(s) * i;
        i instanceof f && _.raiseError("Cannot multiply bigint by Quantity");
      }
      if (typeof s == "number") {
        if (typeof i == "number")
          return s * i;
        if (typeof i == "bigint")
          return Number.isInteger(s) ? BigInt(s) * i : s * Number(i);
        if (i instanceof f)
          return new f(s, "'1'").mul(i);
      }
      if (s instanceof g) {
        if (i instanceof f)
          return s.mul(i);
        if (typeof i == "number")
          return s.mul(new f(i, "'1'"));
      }
    }
    _.raiseError("Cannot " + _.toJSON(e) + " * " + _.toJSON(u));
  }, p.div = function(e, u) {
    if (e.length === 1 && u.length === 1) {
      const s = _.valDataConverted(e[0]), i = _.valDataConverted(u[0]);
      if (s == null || i == null)
        return [];
      if (typeof s == "bigint") {
        if (typeof i == "bigint")
          return i === 0n ? [] : Number(s) / Number(i);
        if (typeof i == "number")
          return i === 0 ? [] : Number(s) / i;
        i instanceof f && _.raiseError("Cannot divide bigint by Quantity");
      }
      if (typeof s == "number") {
        if (typeof i == "number")
          return i === 0 ? [] : s / i;
        if (typeof i == "bigint")
          return i === 0n ? [] : s / Number(i);
        if (i instanceof f)
          return new f(s, "'1'").div(i);
      }
      if (s instanceof g) {
        if (i instanceof f)
          return s.div(i);
        if (typeof i == "number")
          return s.div(new f(i, "'1'"));
      }
    }
    throw new Error("Cannot " + _.toJSON(e) + " / " + _.toJSON(u));
  }, p.intdiv = function(e, u) {
    if (u === 0 || u === 0n) return [];
    if (typeof e == "bigint") {
      if (typeof u == "bigint")
        return e / u;
      if (typeof u == "number")
        return Math.trunc(Number(e) / u);
    } else if (typeof e == "number") {
      if (typeof u == "number")
        return Math.trunc(e / u);
      if (typeof u == "bigint")
        return Math.trunc(e / Number(u));
    }
  }, p.mod = function(e, u) {
    if (u === 0) return [];
    if (typeof e == "bigint") {
      if (typeof u == "bigint")
        return e % u;
      if (typeof u == "number")
        return Number(e) % u;
    } else if (typeof e == "number") {
      if (typeof u == "number")
        return e % u;
      if (typeof u == "bigint")
        return e % Number(u);
    }
  }, p.abs = function(e) {
    let u;
    if (r(e))
      u = [];
    else {
      if (e.length !== 1)
        throw new Error("Unexpected collection" + _.toJSON(e) + "; expected singleton of type number or Quantity");
      var s = _.valData(e[0]);
      if (s == null)
        u = [];
      else if (typeof s == "number")
        u = Math.abs(s);
      else if (s instanceof f)
        u = new f(Math.abs(s.value), s.unit);
      else
        throw new Error("Expected number or Quantity, but got " + _.toJSON(s || e));
    }
    return u;
  }, p.ceiling = function(e) {
    return a(e, Math.ceil);
  }, p.exp = function(e) {
    return a(e, Math.exp);
  }, p.floor = function(e) {
    return a(e, Math.floor);
  }, p.ln = function(e) {
    return a(e, Math.log);
  }, p.log = function(e, u) {
    return a(e, (s) => Math.log(s) / Math.log(u));
  }, p.power = function(e, u) {
    return a(e, (s) => {
      const i = Math.pow(s, u);
      return isNaN(i) ? [] : i;
    });
  }, p.round = function(e, u) {
    return a(e, (s) => {
      if (u === void 0)
        return Math.round(s);
      {
        let i = Math.pow(10, u);
        return Math.round(s * i) / i;
      }
    });
  }, p.sqrt = function(e) {
    return a(e, (u) => u < 0 ? [] : Math.sqrt(u));
  }, p.truncate = function(e) {
    return a(e, Math.trunc);
  }, hn = p, hn;
}
var dn, xs;
function si() {
  if (xs) return dn;
  xs = 1;
  const f = me(), { deepEqual: g } = Ke(), { FP_Type: _, FP_DateTime: p, FP_Quantity: a } = fe();
  var r = {};
  function e(n, l) {
    return f.isEmpty(n) || f.isEmpty(l) ? [] : g(n, l);
  }
  function u(n, l) {
    return f.isEmpty(n) && f.isEmpty(l) ? [!0] : f.isEmpty(n) || f.isEmpty(l) ? [] : g(n, l, { fuzzy: !0 });
  }
  r.equal = function(n, l) {
    return e(n, l);
  }, r.unequal = function(n, l) {
    var t = e(n, l);
    return t === void 0 ? void 0 : !t;
  }, r.equival = function(n, l) {
    return u(n, l);
  }, r.unequival = function(n, l) {
    return !u(n, l);
  };
  function s(n, l) {
    if (f.assertOnlyOne(n, "Singleton was expected"), f.assertOnlyOne(l, "Singleton was expected"), n = f.valDataConverted(n[0]), l = f.valDataConverted(l[0]), n != null && l != null) {
      let t = i(n), m = i(l);
      t !== m && (t === Number && m === a ? n = new a(n, "'1'") : t === a && m === Number ? l = new a(l, "'1'") : f.raiseError('Type of "' + n + '" (' + t.name + ') did not match type of "' + l + '" (' + m.name + ")", "InequalityExpression"));
    }
    return [n, l];
  }
  function i(n) {
    return n instanceof p ? p : typeof n == "bigint" ? Number : n.constructor;
  }
  return r.lt = function(n, l) {
    const [t, m] = s(n, l);
    if (t == null || m == null)
      return [];
    if (t instanceof _) {
      const d = t.compare(m);
      return d === null ? [] : d < 0;
    }
    return t < m;
  }, r.gt = function(n, l) {
    const [t, m] = s(n, l);
    if (t == null || m == null)
      return [];
    if (t instanceof _) {
      const d = t.compare(m);
      return d === null ? [] : d > 0;
    }
    return t > m;
  }, r.lte = function(n, l) {
    const [t, m] = s(n, l);
    if (t == null || m == null)
      return [];
    if (t instanceof _) {
      const d = t.compare(m);
      return d === null ? [] : d <= 0;
    }
    return t <= m;
  }, r.gte = function(n, l) {
    const [t, m] = s(n, l);
    if (t == null || m == null)
      return [];
    if (t instanceof _) {
      const d = t.compare(m);
      return d === null ? [] : d >= 0;
    }
    return t >= m;
  }, r.comparable = function(n, l) {
    f.assertOnlyOne(n, "Singleton was expected"), f.assertOnlyOne(l, "Singleton was expected");
    let t = f.valDataConverted(n[0]), m = f.valDataConverted(l[0]);
    return typeof t == "number" && (t = new a(t, "'1'")), typeof m == "number" && (m = new a(m, "'1'")), t instanceof a && m instanceof a ? [t.comparable(m)] : [!1];
  }, dn = r, dn;
}
var pn, Ss;
function a0() {
  if (Ss) return pn;
  Ss = 1;
  let f = {};
  const g = li(), _ = si(), p = me();
  f.aggregateMacro = function(r, e, u) {
    return r.reduce((s, i, n) => s instanceof Promise ? s.then((l) => (this.$index = n, this.$total = l, this.$total = e(i))) : (this.$index = n, this.$total = e(i)), this.$total = u);
  }, f.countFn = function(r) {
    return r && r.length ? r.length : 0;
  }, f.sumFn = function(r) {
    return f.aggregateMacro.apply(this, [r.slice(1), (e) => {
      let u = p.arraify(e).filter((i) => p.valData(i) != null), s = p.arraify(this.$total).filter((i) => p.valData(i) != null);
      return u.length === 0 || s.length === 0 ? [] : g.plus(u, s);
    }, r[0]]);
  };
  function a(r, e) {
    let u;
    if (r.length === 0 || p.valData(r[0]) == null)
      u = [];
    else {
      u = [r[0]];
      for (let s = 1; s < r.length; s++) {
        if (p.valData(r[s]) == null) {
          u = [];
          break;
        }
        const i = [r[s]];
        u = p.isTrue(e(i, u)) ? i : u;
      }
    }
    return u;
  }
  return f.minFn = function(r) {
    return a(r, _.lt);
  }, f.maxFn = function(r) {
    return a(r, _.gt);
  }, f.avgFn = function(r) {
    const e = p.arraify(f.sumFn(r)), u = p.arraify(f.countFn(r));
    return e.length === 0 || u.length === 0 ? [] : g.div(e, u);
  }, pn = f, pn;
}
var gn, vs;
function o0() {
  if (vs) return gn;
  vs = 1;
  let f = {};
  const g = me(), { hasOwnProperty: _ } = g;
  f.weight = function(D) {
    var S, C;
    const F = this;
    if (!((S = F.model) != null && S.score))
      throw new Error("The weight()/ordinal() function is not supported for the current model.");
    if (D !== !1 && !D)
      return [];
    const B = [], $ = this.vars.questionnaire || ((C = this.processedVars.questionnaire) == null ? void 0 : C.data);
    let I = !1;
    return D.forEach((b) => {
      var v;
      if (b != null && b.data) {
        const { score: M, isQuestionnaireResponse: A, value: q, valueType: H } = p(F, b);
        if (M !== void 0)
          B.push(M);
        else if (A && q != null && H) {
          const Y = N(b);
          if ($) {
            const Z = z((v = F.model) == null ? void 0 : v.version, $, Y);
            if (Z) {
              const Q = r(F, Z, q, H);
              Q.score !== void 0 ? B.push(Q.score) : (Q.answerOption && q.system || Q.answerValueSet) && (I = l(
                B,
                F,
                $,
                Q.answerValueSet,
                q.code,
                q.system,
                b
              ) || I);
            } else
              throw new Error(
                "Questionnaire item with this linkId were not found: " + b.parentResNode.data.linkId + "."
              );
          } else
            throw new Error("%questionnaire is needed but not specified.");
        } else H === "Coding" && (q != null && q.system) && (I = l(
          B,
          F,
          null,
          null,
          q.code,
          q.system,
          b
        ) || I);
      }
    }), I ? Promise.all(B) : B;
  };
  function p(D, F) {
    var M, A, q, H, Y;
    const B = D.model.score.propertyURI, $ = D.model.score.extensionURI;
    let I, S, C, b, v;
    switch (F.path) {
      case "Coding":
        S = ((M = F.parentResNode) == null ? void 0 : M.path) === "QuestionnaireResponse.item.answer", I = a(F.data, $), C = F.data, b = "Coding";
        break;
      case "Questionnaire.item.answerOption":
        I = a(F.data, $), C = F.data;
        break;
      case "QuestionnaireResponse.item.answer":
        S = !0, v = F.data && Object.keys(F.data).find(
          (Z) => Z.length > 5 && Z.startsWith("value")
        ), v && (b = v.substring(5), C = F.data[v], I = a(F.data["_" + v] || C, $));
        break;
      case "ValueSet.compose.include.concept":
        D.model.score.propertyURI || (I = a(F.data, $)), C = {
          code: F.data.code,
          system: (A = F.parentResNode) == null ? void 0 : A.data.system
        }, b = "Coding";
        break;
      case "ValueSet.expansion.contains":
        if (B) {
          const Z = c(
            (q = F.parentResNode) == null ? void 0 : q.data.property,
            B
          );
          I = y(F.data, Z), C = F.data, b = "Coding";
        }
        break;
      case "CodeSystem.concept":
        if (B) {
          const Z = c(
            (H = F.parentResNode) == null ? void 0 : H.data.property,
            B
          );
          I = y(F.data, Z);
        } else
          I = a(F.data, $);
        break;
      default:
        S = ((Y = F.parentResNode) == null ? void 0 : Y.path) === "QuestionnaireResponse.item.answer", S && (I = a(F._data || F.data, $), C = F.data, b = g.capitalize(F.fhirNodeDataType));
    }
    return { score: I, isQuestionnaireResponse: S, value: C, valueType: b };
  }
  function a(D, F) {
    var B, $;
    return F && (($ = (B = D == null ? void 0 : D.extension) == null ? void 0 : B.find(
      (I) => F.indexOf(I.url) !== -1
    )) == null ? void 0 : $.valueDecimal);
  }
  function r(D, F, B, $) {
    var M;
    let I;
    const S = "value" + $;
    switch ($) {
      case "Attachment":
      case "Quantity":
      case "Reference":
        I = (A) => Object.keys(B).find(
          (q) => q !== "extension" && A[S][q] !== B[q]
        ) === void 0;
        break;
      case "Coding":
        I = (A) => {
          var q, H;
          return ((q = A.valueCoding) == null ? void 0 : q.code) === B.code && ((H = A.valueCoding) == null ? void 0 : H.system) === B.system;
        };
        break;
      default:
        I = (A) => A[S] === B;
    }
    const C = (M = F == null ? void 0 : F.answerOption) == null ? void 0 : M.find(I), b = a(C, D.model.score.extensionURI), v = F == null ? void 0 : F.answerValueSet;
    return { score: b, answerOption: C, answerValueSet: v };
  }
  const e = {}, u = 36e5;
  function s(D, F) {
    e[D] = {
      timestamp: Date.now(),
      value: F
    };
  }
  function i(D) {
    return e[D] && Date.now() - e[D].timestamp < u;
  }
  function n(D) {
    return e[D].value;
  }
  function l(D, F, B, $, I, S, C) {
    var A, q, H, Y;
    let b;
    const M = [
      (A = F.model) == null ? void 0 : A.version,
      (B == null ? void 0 : B.url) || (B == null ? void 0 : B.id),
      (q = F.processedVars.terminologies) == null ? void 0 : q.terminologyUrl,
      $,
      I,
      S
    ].join("|");
    if (i(M))
      b = n(M);
    else {
      if (I) {
        if ($) {
          const Z = ((H = /^#(.+)/.exec($)) == null ? void 0 : H[1]) ?? null, Q = Z ? (te) => te.id === Z && te.resourceType === "ValueSet" : (te) => te.url === $ && te.resourceType === "ValueSet", ee = (Y = B == null ? void 0 : B.contained) == null ? void 0 : Y.find(Q);
          if (ee)
            b = T(F, ee, I, S);
          else if (Z)
            throw new Error(
              "Cannot find a contained value set with id: " + Z + "."
            );
        }
        S && (b == null ? b = t(F, B, C, I, S) : b instanceof Promise && (b = b.then((Z) => Z ?? t(F, B, C, I, S))));
      }
      s(M, b);
    }
    return b !== void 0 && D.push(b), b instanceof Promise;
  }
  function t(D, F, B, $, I) {
    var v, M, A, q;
    const S = (H) => H.url === I && H.resourceType === "CodeSystem", C = ((v = O(B)) == null ? void 0 : v.find(S)) || ((M = F == null ? void 0 : F.contained) == null ? void 0 : M.find(S));
    let b;
    if (C) {
      const H = (A = D.model) == null ? void 0 : A.score.propertyURI;
      if (H) {
        const Y = c(C == null ? void 0 : C.property, H);
        if (Y) {
          const Z = h(C == null ? void 0 : C.concept, $);
          b = y(Z, Y);
        }
      } else {
        const Y = (q = D.model) == null ? void 0 : q.score.extensionURI;
        if (Y) {
          const Z = h(C == null ? void 0 : C.concept, $);
          b = a(Z, Y);
        }
      }
    } else
      b = m(D, $, I);
    return b;
  }
  function m(D, F, B) {
    var C, b;
    const $ = (C = D.model) == null ? void 0 : C.score.propertyURI, I = (b = D.model) == null ? void 0 : b.score.extensionURI, S = d(D);
    return g.fetchWithCache(`${S}/CodeSystem?` + new URLSearchParams({
      url: B,
      ...$ ? { _elements: "property" } : {}
    }).toString(), D).then((v) => {
      var M, A, q, H, Y;
      if ($) {
        const Z = c((q = (A = (M = v == null ? void 0 : v.entry) == null ? void 0 : M[0]) == null ? void 0 : A.resource) == null ? void 0 : q.property, $);
        if (Z)
          return g.fetchWithCache(`${S}/CodeSystem/$lookup?` + new URLSearchParams({
            code: F,
            system: B,
            property: Z
          }).toString(), D).then((Q) => {
            var ee, te, ie;
            return (ie = (te = (ee = Q.parameter.find((oe) => oe.name === "property" && oe.part.find((he) => he.name === "code" && he.valueCode === Z))) == null ? void 0 : ee.part) == null ? void 0 : te.find((oe) => oe.name === "value")) == null ? void 0 : ie.valueDecimal;
          });
      } else {
        const Z = h((Y = (H = v == null ? void 0 : v.entry) == null ? void 0 : H[0]) == null ? void 0 : Y.resource.concept, F);
        return a(Z, I);
      }
    });
  }
  function d(D) {
    var B;
    if (!D.async)
      throw new Error('The asynchronous function "weight"/"ordinal" is not allowed. To enable asynchronous functions, use the async=true or async="always" option.');
    const F = (B = D.processedVars.terminologies) == null ? void 0 : B.terminologyUrl;
    if (!F)
      throw new Error('Option "terminologyUrl" is not specified.');
    return F;
  }
  function o(D, F, B) {
    let $;
    if (D)
      for (let I = 0; I < D.length && !$; I++) {
        const S = D[I];
        S.code === F && S.system === B ? $ = S : $ = o(S.contains, F, B);
      }
    return $;
  }
  function h(D, F) {
    let B;
    if (D)
      for (let $ = 0; $ < D.length && !B; $++) {
        const I = D[$];
        I.code === F ? B = I : I.concept && (B = h(I.concept, F));
      }
    return B;
  }
  function c(D, F) {
    var B;
    return (B = D == null ? void 0 : D.find(($) => $.uri === F)) == null ? void 0 : B.code;
  }
  function y(D, F) {
    var B, $;
    return ($ = (B = D == null ? void 0 : D.property) == null ? void 0 : B.find((I) => I.code === F)) == null ? void 0 : $.valueDecimal;
  }
  function T(D, F, B, $) {
    var b, v, M, A, q;
    let I, S;
    const C = (b = D.model) == null ? void 0 : b.score.propertyURI;
    if (C) {
      const H = c(
        (v = F.expansion) == null ? void 0 : v.property,
        C
      );
      H && (S = o((M = F.expansion) == null ? void 0 : M.contains, B, $), I = y(S, H));
    } else {
      const H = (A = D.model) == null ? void 0 : A.score.extensionURI, Y = (q = F.compose) == null ? void 0 : q.include, Z = Y == null ? void 0 : Y.length;
      for (let Q = 0; Q < Z && !S; ++Q)
        Y[Q].system === $ && (S = h(Y[Q].concept, B));
      I = a(S, H);
    }
    return S ? I : null;
  }
  function N(D) {
    var B, $;
    const F = [];
    for (; !((B = D.data) != null && B.linkId) && (D != null && D.parentResNode); )
      D = D.parentResNode;
    for (; ($ = D == null ? void 0 : D.data) != null && $.linkId; )
      F.push(D.data.linkId), D = D.parentResNode;
    return F;
  }
  function O(D) {
    var F, B, $;
    for (; D; ) {
      if ((F = D.data) != null && F.resourceType && ((B = D.data) != null && B.contained))
        return ($ = D.data) == null ? void 0 : $.contained;
      D = D.parentResNode;
    }
  }
  const P = /* @__PURE__ */ new WeakMap();
  function z(D, F, B) {
    var C, b, v;
    let $, I;
    const S = B.join("|");
    if (P.has(F) ? (I = P.get(F), $ = I[S]) : (I = {}, P.set(F, I)), !_(I, S)) {
      const M = B[B.length - 1];
      if (D === "dstu2") {
        let A = F.group;
        for (; (A == null ? void 0 : A.length) > 0 && ($ = A.find((q) => q.linkId === M), !$); )
          A = [].concat(...A.map((q) => [].concat(q.question || [], q.group || [])));
        for (let q = B.length - 2; q >= 0 && $; --q)
          $ = ((C = $.question) == null ? void 0 : C.find((H) => H.linkId === B[q])) || ((b = $.group) == null ? void 0 : b.find((H) => H.linkId === B[q]));
      } else {
        let A = F.item;
        for (; (A == null ? void 0 : A.length) > 0 && ($ = A.find((q) => q.linkId === M), !$); )
          A = [].concat(...A.map((q) => q.item || []));
        for (let q = B.length - 2; q >= 0 && $; --q)
          $ = (v = $.item) == null ? void 0 : v.find((H) => H.linkId === B[q]);
      }
      I[S] = $;
    }
    return $;
  }
  return gn = f, gn;
}
var yn, Is;
function c0() {
  if (Is) return yn;
  Is = 1;
  const f = {}, { distinctFn: g } = Pn(), _ = kn(), { deepEqual: p, maxCollSizeForDeepEqual: a } = Ke(), { TypeInfo: r } = fe();
  return f.union = function(e, u) {
    return g(e.concat(u));
  }, f.combineFn = function(e, u) {
    return e.concat(u);
  }, f.intersect = function(e, u) {
    let s = [];
    const i = e.length;
    let n = u.length;
    if (i && n) {
      const l = e.some((t) => r.isPrimitiveValue(t)) || u.some((t) => r.isPrimitiveValue(t));
      if (!l && i + n > a) {
        let t = {};
        u.forEach((m) => {
          const d = _(m);
          t[d] ? n-- : t[d] = !0;
        });
        for (let m = 0; m < i && n > 0; ++m) {
          let d = e[m], o = _(d);
          t[o] && (s.push(d), t[o] = !1, n--);
        }
      } else
        s = g(e, l).filter(
          (t) => u.some((m) => p(t, m))
        );
    }
    return s;
  }, f.exclude = function(e, u) {
    let s = [];
    const i = e.length, n = u.length;
    if (!n)
      return e;
    if (i)
      if (!(e.some((t) => r.isPrimitiveValue(t)) || u.some((t) => r.isPrimitiveValue(t))) && i + n > a) {
        let t = {};
        u.forEach((m) => {
          const d = _(m);
          t[d] = !0;
        }), s = e.filter((m) => !t[_(m)]);
      } else
        s = e.filter((t) => !u.some((m) => p(t, m)));
    return s;
  }, yn = f, yn;
}
var Cn, Ms;
function f0() {
  if (Ms) return Cn;
  Ms = 1;
  const { deepEqual: f } = Ke(), g = me(), _ = {};
  function p(a, r) {
    for (var e = 0; e < a.length; e++)
      if (f(a[e], r[0]))
        return !0;
    return !1;
  }
  return _.contains = function(a, r) {
    if (r.length == 0)
      return [];
    if (a.length == 0)
      return !1;
    if (r.length > 1)
      throw new Error("Expected singleton on right side of contains, got " + g.toJSON(r));
    return p(a, r);
  }, _.in = function(a, r) {
    if (a.length == 0)
      return [];
    if (r.length == 0)
      return !1;
    if (a.length > 1)
      throw new Error("Expected singleton on right side of in, got " + g.toJSON(r));
    return p(r, a);
  }, Cn = _, Cn;
}
var _n, Es;
function m0() {
  if (Es) return _n;
  Es = 1;
  const f = me(), g = Fn(), _ = {}, p = {};
  function a(e) {
    return p[e] || (p[e] = e.replace(/\./g, (u, s, i) => {
      const l = i.substr(0, s).replace(/\\\\/g, "").replace(/\\[\][]/g, ""), t = l[l.length - 1] === "\\", m = l.lastIndexOf("["), d = l.lastIndexOf("]");
      return t || m > d ? "." : "[^]";
    })), p[e];
  }
  return _.indexOf = function(e, u) {
    const s = g.singleton(e, "String");
    return f.isEmpty(u) || f.isEmpty(s) ? [] : s.indexOf(u);
  }, _.substring = function(e, u, s) {
    const i = g.singleton(e, "String");
    return f.isEmpty(i) || f.isEmpty(u) || u < 0 || u >= i.length ? [] : s === void 0 || f.isEmpty(s) ? i.substring(u) : i.substring(u, u + s);
  }, _.startsWith = function(e, u) {
    const s = g.singleton(e, "String");
    return f.isEmpty(u) || f.isEmpty(s) ? [] : s.startsWith(u);
  }, _.endsWith = function(e, u) {
    const s = g.singleton(e, "String");
    return f.isEmpty(u) || f.isEmpty(s) ? [] : s.endsWith(u);
  }, _.containsFn = function(e, u) {
    const s = g.singleton(e, "String");
    return f.isEmpty(u) || f.isEmpty(s) ? [] : s.includes(u);
  }, _.upper = function(e) {
    const u = g.singleton(e, "String");
    return f.isEmpty(u) ? [] : u.toUpperCase();
  }, _.lower = function(e) {
    const u = g.singleton(e, "String");
    return f.isEmpty(u) ? [] : u.toLowerCase();
  }, _.joinFn = function(e, u) {
    const s = [];
    return e.forEach((i) => {
      const n = f.valData(i);
      if (typeof n == "string")
        s.push(n);
      else if (n != null)
        throw new Error("Join requires a collection of strings.");
    }), f.isEmpty(s) ? [] : (u === void 0 && (u = ""), s.join(u));
  }, _.splitFn = function(e, u) {
    const s = g.singleton(e, "String");
    return f.isEmpty(s) ? [] : s.split(u);
  }, _.trimFn = function(e) {
    const u = g.singleton(e, "String");
    return f.isEmpty(u) ? [] : u.trim();
  }, _.encodeFn = function(e, u) {
    const s = g.singleton(e, "String");
    return f.isEmpty(s) ? [] : u === "urlbase64" || u === "base64url" ? btoa(s).replace(/\+/g, "-").replace(/\//g, "_") : u === "base64" ? btoa(s) : u === "hex" ? Array.from(s).map(
      (i) => i.charCodeAt(0) < 128 ? i.charCodeAt(0).toString(16) : encodeURIComponent(i).replace(/%/g, "")
    ).join("") : [];
  }, _.decodeFn = function(e, u) {
    const s = g.singleton(e, "String");
    if (f.isEmpty(s))
      return [];
    if (u === "urlbase64" || u === "base64url")
      return atob(s.replace(/-/g, "+").replace(/_/g, "/"));
    if (u === "base64")
      return atob(s);
    if (u === "hex") {
      if (s.length % 2 !== 0)
        throw new Error("Decode 'hex' requires an even number of characters.");
      return decodeURIComponent("%" + s.match(/.{2}/g).join("%"));
    }
    return [];
  }, new RegExp("").dotAll === !1 ? _.matches = function(e, u) {
    const s = g.singleton(e, "String");
    return f.isEmpty(u) || f.isEmpty(s) ? [] : new RegExp(u, "su").test(s);
  } : _.matches = function(e, u) {
    const s = g.singleton(e, "String");
    return f.isEmpty(u) || f.isEmpty(s) ? [] : new RegExp(a(u), "u").test(s);
  }, _.replace = function(e, u, s) {
    const i = g.singleton(e, "String");
    if (f.isEmpty(u) || f.isEmpty(s) || f.isEmpty(i))
      return [];
    const n = new RegExp(f.escapeStringForRegExp(u), "g");
    return i.replace(n, s);
  }, _.replaceMatches = function(e, u, s) {
    const i = g.singleton(e, "String");
    if (f.isEmpty(u) || f.isEmpty(s) || f.isEmpty(i))
      return [];
    const n = new RegExp(u, "gu");
    return i.replace(n, s);
  }, _.length = function(e) {
    const u = g.singleton(e, "String");
    return f.isEmpty(u) ? [] : u.length;
  }, _.toChars = function(e) {
    const u = g.singleton(e, "String");
    return f.isEmpty(u) ? [] : u.split("");
  }, _n = _, _n;
}
var Ln, Ns;
function h0() {
  if (Ns) return Ln;
  Ns = 1;
  const f = me(), { hasOwnProperty: g } = f, { ResourceNode: _ } = fe();
  var p = {};
  return p.children = function(a) {
    let r = this.model;
    return a.reduce(function(e, u) {
      if (!(u instanceof _))
        return e;
      if (typeof u.data == "object" && u.data != null)
        for (let s in u.data)
          if (s.startsWith("_")) {
            const i = s.slice(1);
            g(u.data, i) || f.pushFn(e, f.makeChildResNodes(
              u,
              i,
              r
            ));
          } else s !== "resourceType" && f.pushFn(e, f.makeChildResNodes(u, s, r));
      else if (typeof u._data == "object" && u._data != null)
        for (let s in u._data)
          f.pushFn(e, f.makeChildResNodes(u, s, r));
      return e;
    }, []);
  }, p.descendants = function(a) {
    let r = p.children.call(this, a), e = [];
    for (; r.length > 0; )
      f.pushFn(e, r), r = p.children.call(this, r);
    return e;
  }, Ln = p, Ln;
}
var bn, Os;
function d0() {
  if (Os) return bn;
  Os = 1;
  var f = {};
  const g = fe(), _ = ni(), p = g.FP_Date, a = g.FP_DateTime, r = g.FP_Time;
  return f.now = function() {
    if (!_.now) {
      var e = _.nowDate, u = a.isoDateTime(e);
      _.now = new a(u);
    }
    return _.now;
  }, f.today = function() {
    if (!_.today) {
      var e = _.nowDate, u = p.isoDate(e);
      _.today = new p(u);
    }
    return _.today;
  }, f.timeOfDay = function() {
    if (!_.timeOfDay) {
      const e = _.nowDate, u = a.isoTime(e);
      _.timeOfDay = new r(u);
    }
    return _.timeOfDay;
  }, bn = f, bn;
}
var Tn, As;
function ii() {
  if (As) return Tn;
  As = 1;
  const f = me(), { ResourceNode: g, TypeInfo: _ } = fe(), m = class m {
    constructor(o) {
      this.terminologyUrl = o, this.invocationTable = m.invocationTable;
    }
    /**
     * This calls the Terminology Service $expand operation.
     * https://hl7.org/fhir/terminology-service.html#expand
     * https://hl7.org/fhir/valueset-operation-expand.html
     *
     * @param {Terminologies[]} self - an array with one element that refers to
     *  the current Terminology instance.
     * @param {(ResourceNode|string)[]} valueSetColl - an array that should have
     *  one element, which is either a ResourceNode with an actual ValueSet, or
     *  a ResourceNode with a canonical URL reference to a value set, or
     *  a string with a canonical URL reference to a value set.
     * @param {string} params - a URL encoded string with other parameters for
     *  the expand operation (e.g. 'displayLanguage=en&activeOnly=true').
     * @return {Promise<ResourceNode|null>|null} - a ValueSet resource
     *  (https://hl7.org/fhir/valueset.html) with an expansion, or an empty
     *  value if an error occurs.
     */
    static expand(o, h, c = "") {
      let y = null;
      const T = this;
      if (f.checkAllowAsync(T, "expand"), h.length === 1 && a(c)) {
        const N = _.fromValue(h[0]), O = f.valData(h[0]);
        if (N.is(_.FhirUri, T.model) || N.is(_.SystemString, T.model))
          y = f.fetchWithCache(
            `${o[0].terminologyUrl}/ValueSet/$expand?url=${encodeURIComponent(O)}${c ? "&" + c : ""}`,
            T
          );
        else if (N.is(_.FhirValueSet, T.model)) {
          const P = [{
            name: "valueSet",
            resource: O
          }, ...u(c)];
          y = f.fetchWithCache(`${o[0].terminologyUrl}/ValueSet/$expand`, T, {
            method: "POST",
            body: f.toJSON({
              resourceType: "Parameters",
              parameter: P
            })
          });
        }
      }
      return t(T, y, "ValueSet");
    }
    /**
     * This calls the Terminology Service $lookup operation.
     * https://hl7.org/fhir/terminology-service.html#lookup
     * https://hl7.org/fhir/codesystem-operation-lookup.html
     *
     * @param {Terminologies[]} self - an array with one element that refers to
     *  the current Terminology instance.
     * @param {(ResourceNode|string)[]} codedColl - an array that should have
     *  one element, which is either a Coding, a CodeableConcept, or a resource
     *  element that is a code.
     * @param {string} [params] - a URL encoded string with other parameters for
     *  the lookup operation (e.g. 'date=2011-03-04&displayLanguage=en').
     * @return {Promise<ResourceNode|null>|null} - a Parameters resource
     *  (https://build.fhir.org/parameters.html) with the results of
     *  the validation operation.
     */
    static lookup(o, h, c = "") {
      let y = null;
      const T = this;
      if (f.checkAllowAsync(T, "lookup"), h.length === 1 && a(c)) {
        const { isCodeableConcept: N, isCoding: O, isCode: P } = l(T, h);
        if (N || O || P) {
          const z = f.valData(h[0]), D = N || O ? "coding" : "code", F = {
            resourceType: "Parameters",
            parameter: [
              {
                name: D,
                [i[D]]: N ? z == null ? void 0 : z.coding : z
              },
              ...u(c)
            ]
          };
          y = f.fetchWithCache(
            `${o[0].terminologyUrl}/CodeSystem/$lookup`,
            T,
            {
              method: "POST",
              body: f.toJSON(F)
            }
          );
        }
      }
      return t(T, y, "Parameters");
    }
    /**
     * This calls the Terminology Service $validate-code operation on a value set.
     * https://hl7.org/fhir/terminology-service.html#validation
     * https://hl7.org/fhir/valueset-operation-validate-code.html
     * The source code of this function is based on this script:
     * https://gist.github.com/brianpos/97e1237470d76835ea9a35bf8e021ca6#file-fhirpath-async-ts
     *
     * @param {Terminologies[]} self - an array with one element that refers to
     *  the current Terminology instance.
     * @param {(ResourceNode|string)[]} valueSetColl - an array that should have
     *  one element, which is either a ResourceNode with an actual ValueSet, or
     *  a ResourceNode with a canonical URL reference to a value set, or
     *  a string with a canonical URL reference to a value set.
     * @param {(ResourceNode|string)[]} codedColl - an array that should have
     *  one element, which is either a Coding, a CodeableConcept, or a resource
     *  element that is a code.
     * @param {string} [params] - a URL encoded string with other parameters for
     *  the validate-code operation (e.g. 'date=2011-03-04&displayLanguage=en').
     * @return {Promise<ResourceNode|null>|null} - a Parameters resource
     *  (https://build.fhir.org/parameters.html) with the results of
     *  the validation operation.
     */
    static validateVS(o, h, c, y = "") {
      var z;
      let T = null;
      const N = this;
      f.checkAllowAsync(N, "validateVS");
      const O = h.length === 1 && f.valData(h[0]);
      let P = c.length === 1 && f.valData(c[0]);
      if (O && P && a(y)) {
        const D = _.fromValue(h[0]), F = D.is(_.FhirValueSet, N.model), B = D.is(_.FhirUri, N.model) || D.is(_.SystemString, N.model);
        if (F || B) {
          const { isCodeableConcept: $, isCoding: I, isCode: S } = l(N, c);
          if ($ || I || S) {
            const C = `${o[0].terminologyUrl}/ValueSet/$validate-code`;
            if (F || $ && ((z = P.coding) == null ? void 0 : z.length) !== 1)
              T = (S ? r(N, o[0].terminologyUrl, O) : Promise.resolve()).then((b) => {
                const v = $ ? "codeableConcept" : I ? "coding" : "code", M = {
                  resourceType: "Parameters",
                  parameter: [
                    {
                      name: F ? "valueSet" : "url",
                      [F ? "resource" : "valueUri"]: O
                    },
                    {
                      name: v,
                      [i[v]]: P
                    },
                    ...b ? [{ name: "system", valueUri: b }] : [],
                    ...u(y)
                  ]
                };
                return f.fetchWithCache(
                  C,
                  N,
                  {
                    method: "POST",
                    body: f.toJSON(M)
                  }
                );
              });
            else if (S)
              T = r(N, o[0].terminologyUrl, O).then((b) => {
                const v = new URLSearchParams({
                  url: O,
                  code: P,
                  system: b
                });
                return f.fetchWithCache(
                  `${C}?${v.toString() + (y ? "&" + y : "")}`,
                  N
                );
              });
            else if ($ && (P = P.coding[0]), P != null && P.system && (P != null && P.code)) {
              const b = new URLSearchParams({
                url: O,
                system: P.system,
                code: P.code
              });
              T = f.fetchWithCache(
                `${C}?${b.toString() + (y ? "&" + y : "")}`,
                N
              );
            }
          }
        }
      }
      return t(N, T, "Parameters");
    }
    /**
     * This calls the Terminology Service $validate-code operation on a value set.
     * https://hl7.org/fhir/terminology-service.html#validation
     * https://hl7.org/fhir/codesystem-operation-validate-code.html
     *
     * @param {Terminologies[]} self - an array with one element that refers to
     *  the current Terminology instance.
     * @param {(ResourceNode|string)[]} codeSystemColl - an array that should have
     *  one element, which is either a ResourceNode with an actual CodeSystem, or
     *  a ResourceNode with a canonical URL reference to a code system, or
     *  a string with a canonical URL reference to a code system.
     * @param {(ResourceNode|string)[]} codedColl - an array that should have
     *  one element, which is either a ResourceNode with a Coding,
     *  a CodeableConcept, or a code, or a string with a code.
     * @param {string} params - a URL encoded string with other parameters for
     *  the validate-code operation (e.g. 'date=2011-03-04&displayLanguage=en')
     * @return {Promise<ResourceNode|null>|null} - a Parameters resource
     *  (https://build.fhir.org/parameters.html) with the results of
     *  the validation operation.
     */
    static validateCS(o, h, c, y = "") {
      let T = null;
      const N = this;
      if (f.checkAllowAsync(N, "validateCS"), h.length === 1 && c.length === 1 && a(y)) {
        const O = _.fromValue(h[0]), P = O.is(_.FhirCodeSystem, N.model), z = O.is(_.FhirUri, N.model) || O.is(_.SystemString, N.model);
        if (P || z) {
          const { isCodeableConcept: D, isCoding: F, isCode: B } = l(N, c);
          if (D || F || B) {
            const $ = f.valData(h[0]), I = f.valData(c[0]), S = `${o[0].terminologyUrl}/CodeSystem/$validate-code`, C = D ? "codeableConcept" : F ? "coding" : "code", b = {
              resourceType: "Parameters",
              parameter: [
                {
                  name: P ? "codeSystem" : "url",
                  [P ? "resource" : "valueUri"]: $
                },
                {
                  name: C,
                  [i[C]]: I
                },
                ...u(y)
              ]
            };
            T = f.fetchWithCache(
              S,
              N,
              {
                method: "POST",
                body: f.toJSON(b)
              }
            );
          }
        }
      }
      return t(N, T, "Parameters");
    }
    /**
     * This calls the Terminology Service $subsumes operation.
     * https://build.fhir.org/terminology-service.html#subsumes
     * https://build.fhir.org/codesystem-operation-subsumes.html
     *
     * @param {Terminologies[]} self - an array with one element that refers to
     *  the current Terminology instance.
     * @param {(ResourceNode|string)[]} systemColl - an array that should have
     *  one element, which is either a ResourceNode with a canonical URL reference
     *  to a code system, or a string with a canonical URL reference to a code
     *  system.
     * @param {(ResourceNode|string)[]} coded1Coll - an array that should have one
     *  element, which is either a ResourceNode with a Coding, or a code, or
     *  a string with a code.
     * @param {(ResourceNode|string)[]} coded2Coll - an array that should have one
     *  element, which is either a ResourceNode with a Coding, or a code, or
     *  a string with a code.
     * @param {string} params - a URL encoded string with other parameters for
     *  the validate-code operation (e.g. 'version=2014-05-06').
     * @return {Promise<ResourceNode|null>|null} - a ResourceNode with a code as
     *  specified for the subsumes operation.
     */
    static subsumes(o, h, c, y, T = "") {
      let N = null;
      const O = this;
      if (f.checkAllowAsync(O, "subsumes"), h.length === 1 && c.length === 1 && y.length === 1 && a(T)) {
        const P = _.fromValue(h[0]);
        if (P.is(_.FhirUri, O.model) || P.is(_.SystemString, O.model)) {
          const D = _.fromValue(c[0]), F = _.fromValue(y[0]), B = D.is(_.FhirCoding, O.model), $ = D.is(_.FhirCode, O.model) || D.is(_.SystemString, O.model), I = F.is(_.FhirCoding, O.model), S = F.is(_.FhirCode, O.model) || F.is(_.SystemString, O.model);
          if ((B || $) && (I || S)) {
            const C = f.valData(h[0]), b = f.valData(c[0]), v = f.valData(y[0]), M = `${o[0].terminologyUrl}/CodeSystem/$subsumes`, A = B ? "codingA" : "codeA", q = B ? "codingB" : "codeB", H = I ? "valueCoding" : "valueCode", Y = I ? "valueCoding" : "valueCode", Z = {
              resourceType: "Parameters",
              parameter: [
                {
                  name: "url",
                  valueUri: C
                },
                {
                  name: A,
                  [H]: b
                },
                {
                  name: q,
                  [Y]: v
                },
                ...u(T)
              ]
            };
            N = f.fetchWithCache(
              M,
              O,
              {
                method: "POST",
                body: f.toJSON(Z)
              }
            );
          }
        }
      }
      return N && N.then((P) => {
        var z, D;
        if ((P == null ? void 0 : P.resourceType) === "Parameters") {
          const F = (D = (z = P.parameter) == null ? void 0 : z.find((B) => B.name === "outcome")) == null ? void 0 : D.valueCode;
          return g.makeResNode(
            F,
            null,
            "code",
            null,
            "code",
            O.model
          );
        }
        throw new Error(P);
      }).catch(() => null);
    }
    /**
     * This calls the Terminology Service $translate operation.
     * https://build.fhir.org/terminology-service.html#translate
     * https://build.fhir.org/conceptmap-operation-translate.html
     *
     * @param {Terminologies[]} self - an array with one element that refers to
     *  the current Terminology instance.
     * @param {(ResourceNode|string)[]} conceptMapColl - an array that should have
     *  one element, which is either a ResourceNode with an actual ConceptMap, or
     *  a canonical URL reference to a ConceptMap, or a string with a canonical
     *  URL reference to a code system.
     * @param {ResourceNode|string} codedColl - the source to translate: an array that
     *  should have one element, which is either a ResourceNode with
     *  a CodeableConcept, a Coding, or a code, or a string with a code.
     * @param {string} params - a URL encoded string with other parameters for
     * the validate-code operation
     * (e.g. 'source=http://acme.org/valueset/23&target=http://acme.org/valueset/23')
     * @return {Promise<ResourceNode|null>|null} - a Parameters resource
     *  (https://build.fhir.org/parameters.html) with the results of
     *  the translation operation.
     */
    static translate(o, h, c, y = "") {
      let T = null;
      const N = this;
      if (f.checkAllowAsync(N, "translate"), h.length === 1 && c.length === 1 && a(y)) {
        const O = _.fromValue(h[0]), P = O.is(
          _.FhirConceptMap,
          N.model
        ), z = O.is(_.FhirUri, N.model) || O.is(_.SystemString, N.model);
        if (P || z) {
          const { isCodeableConcept: D, isCoding: F, isCode: B } = l(N, c);
          if (F || B) {
            const $ = f.valData(h[0]), I = f.valData(c[0]), S = `${o[0].terminologyUrl}/CodeSystem/$translate`, C = s[N.model.version], b = D ? C.sourceCodeableConcept : F ? C.sourceCoding : C.sourceCode, v = {
              resourceType: "Parameters",
              parameter: [
                {
                  name: P ? "conceptMap" : "url",
                  [P ? "resource" : "valueUri"]: $
                },
                {
                  name: b,
                  [i[b]]: I
                },
                ...u(y)
              ]
            };
            T = f.fetchWithCache(
              S,
              N,
              {
                method: "POST",
                body: f.toJSON(v)
              }
            );
          }
        }
      }
      return t(N, T, "Parameters");
    }
  };
  // Same as fhirpath.invocationTable, but for %terminologies methods
  se(m, "invocationTable", {
    expand: {
      fn: m.expand,
      arity: {
        1: ["AnyAtRoot"],
        2: ["AnyAtRoot", "AnySingletonAtRoot"]
      }
    },
    lookup: {
      fn: m.lookup,
      arity: {
        1: ["AnyAtRoot"],
        2: ["AnyAtRoot", "AnySingletonAtRoot"]
      }
    },
    validateVS: {
      fn: m.validateVS,
      arity: {
        2: ["AnyAtRoot", "AnyAtRoot"],
        3: ["AnyAtRoot", "AnyAtRoot", "AnySingletonAtRoot"]
      }
    },
    validateCS: {
      fn: m.validateCS,
      arity: {
        2: ["AnyAtRoot", "AnyAtRoot"],
        3: ["AnyAtRoot", "AnyAtRoot", "AnySingletonAtRoot"]
      }
    },
    subsumes: {
      fn: m.subsumes,
      arity: {
        3: ["AnyAtRoot", "AnyAtRoot", "AnyAtRoot"],
        4: ["AnyAtRoot", "AnyAtRoot", "AnyAtRoot", "AnySingletonAtRoot"]
      }
    },
    translate: {
      fn: m.translate,
      arity: {
        2: ["AnyAtRoot", "AnyAtRoot"],
        3: ["AnyAtRoot", "AnyAtRoot", "AnySingletonAtRoot"]
      }
    }
  });
  let p = m;
  function a(d) {
    return !(d != null && d.split("&").find(
      (o) => {
        if (o[0] === "=")
          return !0;
        {
          const h = o.split("=");
          return h.length <= 2 && h.find((c) => h && encodeURIComponent(decodeURIComponent(c)) !== c);
        }
      }
    ));
  }
  function r(d, o, h) {
    const c = new URLSearchParams({
      url: h
    });
    return (typeof h == "string" ? f.fetchWithCache(
      `${o}/ValueSet?${c.toString()}`,
      d
    ).then(
      (y) => {
        var T;
        return ((T = y == null ? void 0 : y.entry) == null ? void 0 : T.length) === 1 ? y.entry[0].resource : null;
      }
    ) : Promise.resolve(h)).then((y) => {
      var N, O;
      const T = y && (e((N = y.expansion) == null ? void 0 : N.contains) || e((O = y.compose) == null ? void 0 : O.include));
      if (T)
        return T;
      throw new Error("The valueset does not have a single code system.");
    });
  }
  function e(d, o = void 0) {
    if (d) {
      for (let h = 0; h < d.length; ++h)
        if (!o)
          o = d[h].system;
        else if (o !== d[h].system) {
          o = void 0;
          break;
        }
    }
    return o;
  }
  function u(d) {
    const o = [];
    return d.split("&").forEach((h) => {
      const [c, y] = h.split("=");
      if (c) {
        const T = decodeURIComponent(c);
        o.push({
          name: T,
          ...n(
            i[T],
            decodeURIComponent(y || "")
          )
        });
      }
    }), o;
  }
  const s = {
    r4: {
      sourceCodeableConcept: "codeableConcept",
      sourceCoding: "coding",
      sourceCode: "code"
    },
    r5: {
      sourceCodeableConcept: "sourceCodeableConcept",
      sourceCoding: "sourceCoding",
      sourceCode: "sourceCode"
    }
  }, i = Object.entries({
    valueUri: [
      "url",
      "context",
      "system",
      "sourceScope",
      "source",
      "targetScope",
      "target",
      "targetSystem"
    ],
    ValueSet: ["valueSet"],
    valueString: [
      "valueSetVersion",
      "filter",
      "designation",
      "property",
      "version",
      "systemVersion",
      "display",
      "conceptMapVersion"
    ],
    valueCode: [
      "contextDirection",
      "displayLanguage",
      "code",
      "codeA",
      "codeB",
      "sourceCode",
      "targetCode"
    ],
    valueDateTime: ["date"],
    valueInteger: ["offset", "count"],
    valueBoolean: [
      "includeDesignations",
      "includeDefinition",
      "activeOnly",
      "excludeNested",
      "excludeNotForUI",
      "excludePostCoordinated",
      "abstract",
      "reverse"
    ],
    valueCanonical: [
      "useSupplement",
      "exclude-system",
      "system-version",
      "check-system-version",
      "force-system-version"
    ],
    valueCoding: ["coding", "codingA", "codingB", "sourceCoding", "targetCoding"],
    valueCodeableConcept: [
      "codeableConcept",
      "sourceCodeableConcept",
      "targetCodeableConcept"
    ],
    CodeSystem: ["codeSystem"],
    ConceptMap: ["conceptMap"]
  }).reduce((d, [o, h]) => (h.forEach((c) => {
    d[c] = o;
  }), d), {});
  function n(d, o) {
    let h = {};
    switch (d) {
      case "valueInteger": {
        let c;
        if (c = Number(o), Number.isInteger(c))
          h[d] = parseInt(o);
        else
          throw new Error(`The value for "${d}" should be an integer.`);
        break;
      }
      case "valueBoolean":
        if (o === "true")
          h[d] = !0;
        else if (o === "false")
          h[d] = !1;
        else
          throw new Error(`The value for "${d}" should be a boolean.`);
        break;
      case "valueCoding":
      case "valueCodeableConcept":
      case "CodeSystem":
      case "ValueSet":
        throw new Error(`The value for "${d}" is not expected to be passed via a URL encoded string with parameters.`);
      default:
        h[d] = o;
    }
    return h;
  }
  function l(d, o) {
    const h = _.fromValue(o[0]), c = h.is(_.FhirCodeableConcept, d.model), y = !c && h.is(_.FhirCoding, d.model), T = !c && !y && (h.is(_.FhirCode, d.model) || h.is(_.SystemString, d.model));
    return { isCodeableConcept: c, isCoding: y, isCode: T };
  }
  function t(d, o, h) {
    return (o == null ? void 0 : o.then((c) => {
      if ((c == null ? void 0 : c.resourceType) === h)
        return g.makeResNode(c, null, null, null, null, d.model);
      throw new Error("Unexpected resourceType in response: " + (c == null ? void 0 : c.resourceType));
    }).catch(() => null)) || null;
  }
  return Tn = p, Tn;
}
var Un, Rs;
function p0() {
  if (Rs) return Un;
  Rs = 1;
  const f = function(g) {
    const _ = [];
    if (g.length === 0)
      return "";
    if (typeof g[0] != "string")
      throw new TypeError(`Url must be a string. Received ${g[0]}`);
    for (let r = 1; r < g.length; r += 1)
      g[r].trim() === "/" && (g[r] = "");
    g[0].match(/^[^/:]+:\/*$/) && g.length > 1 && (g[0] = g.shift() + g[0]), g[0].match(/^file:\/\/\//) ? g[0] = g[0].replace(/^([^/:]+):\/*/, "$1:///") : g[0] = g[0].replace(/^([^/:]+):\/*/, "$1://");
    for (let r = 0; r < g.length; r += 1) {
      let e = g[r];
      if (typeof e != "string")
        throw new TypeError(`Url must be a string. Received ${e}`);
      e !== "" && (r > 0 && (e = e.replace(/^[\/]+/, "")), r < g.length - 1 ? e = e.replace(/[\/]+$/, "") : e = e.replace(/[\/]+$/, "/"), _.push(e));
    }
    let p = _.join("/");
    p = p.replace(/\/(\?|&|#[^!])/g, "$1");
    const a = p.split("?");
    return p = a.shift() + (a.length > 0 ? "?" : "") + a.join("&"), p;
  };
  return Un = function(..._) {
    const p = Array.from(Array.isArray(_[0]) ? _[0] : _);
    return f(p);
  }, Un;
}
var xn, ws;
function g0() {
  if (ws) return xn;
  ws = 1;
  const f = ii(), g = me(), { TypeInfo: _, ResourceNode: p } = fe(), a = p0();
  let r = {};
  r.memberOf = function(n, l) {
    var m;
    const t = this;
    if (g.checkAllowAsync(t, "memberOf"), n.length === 1 && n[0] != null && l.length === 1 && l[0] != null) {
      const d = _.fromValue(l[0]);
      if (d.is(_.FhirUri, t.model) || d.is(_.SystemString)) {
        const o = this.processedVars.terminologies;
        if (!o)
          throw new Error('Option "terminologyUrl" is not specified.');
        return (m = f.validateVS.call(
          this,
          [o],
          l,
          n,
          ""
        )) == null ? void 0 : m.then((h) => {
          var c;
          return (c = g.valData(h)) == null ? void 0 : c.parameter.find((y) => y.name === "result").valueBoolean;
        }, () => []);
      }
    }
    return [];
  };
  function e(n, l, t) {
    const m = n.processedVars.fhirServerUrl;
    if (!m)
      throw new Error('Option "fhirServerUrl" is not specified.');
    const d = /^(https?:\/\/[^|]*)(\|(.*))?/.exec(t);
    if (l && d && n.model.resourcesWithUrlParam[l]) {
      const o = { url: d[1] };
      return d[3] && (o.version = d[3]), g.fetchWithCache(
        a(m, l) + "?" + new URLSearchParams(o).toString(),
        n
      ).then((h) => {
        var c, y;
        return ((y = (c = h.entry) == null ? void 0 : c[0]) == null ? void 0 : y.resource) ?? null;
      });
    }
    return Promise.resolve(null);
  }
  function u(n, l) {
    var t, m;
    return l && ((m = (t = g.valData(n)) == null ? void 0 : t.contained) == null ? void 0 : m.find((d) => d.id === l)) || null;
  }
  const s = { Resource: 1, DomainResource: 1 };
  function i(n, l, t, m, d) {
    let o = null, h = "";
    if ([m, h] = m.split("#"), /^https?:\/\//.test(m))
      m.indexOf("|") !== -1 || d ? t && (o = e(n, t, m)) : t ? o = g.fetchWithCache(m, n).catch(
        // If the reference can be a canonical URL of specified type,
        // we can use this type to resolve it.
        () => e(n, t, m)
      ) : o = g.fetchWithCache(m, n);
    else {
      const c = /([A-Za-z]*)\//.exec(m);
      if (!d && c && n.model.type2Parent[c[1]] in s) {
        const y = n.processedVars.fhirServerUrl;
        if (!y)
          throw new Error('Option "fhirServerUrl" is not specified.');
        o = g.fetchWithCache(a(y, m), n);
      } else !m && h && l instanceof p && (o = Promise.resolve(l.getParentResource()));
    }
    return o ? o.then((c) => (h && (c = u(c, h)), c)) : Promise.resolve(null);
  }
  return r.resolveFn = function(n) {
    const l = this;
    return g.checkAllowAsync(l, "resolve"), Promise.allSettled((n || []).reduce((t, m) => {
      var h, c;
      let d;
      const o = _.fromValue(m);
      if (o.is(_.FhirReference, l.model)) {
        const y = g.valData(m);
        y != null && y.reference && (d = i(l, m, ((h = o.refType) == null ? void 0 : h.length) === 1 && o.refType[0] || y.type, y.reference, !1));
      } else o.is(_.FhirCanonical, l.model) ? d = i(l, m, ((c = o.refType) == null ? void 0 : c.length) === 1 && o.refType[0], g.valData(m), !0) : (o.is(_.FhirUri, l.model) || o.is(_.SystemString, l.model) || o.is(_.FhirString, l.model)) && (d = i(l, m, null, g.valData(m), !1));
      return t.push(d), t;
    }, [])).then((t) => t.reduce((m, d) => {
      var o;
      return d.status === "fulfilled" && ((o = d.value) != null && o.resourceType) && m.push(p.makeResNode(
        d.value,
        null,
        null,
        null,
        null,
        l.model
      )), m;
    }, []));
  }, xn = r, xn;
}
var Sn, ks;
function y0() {
  if (ks) return Sn;
  ks = 1;
  var f = {};
  return f.orOp = function(g, _) {
    if (Array.isArray(_)) {
      if (g === !0)
        return !0;
      if (g === !1)
        return [];
      if (Array.isArray(g))
        return [];
    }
    return Array.isArray(g) ? _ === !0 ? !0 : [] : g || _;
  }, f.andOp = function(g, _) {
    if (Array.isArray(_)) {
      if (g === !0)
        return [];
      if (g === !1)
        return !1;
      if (Array.isArray(g))
        return [];
    }
    return Array.isArray(g) ? _ === !0 ? [] : !1 : g && _;
  }, f.xorOp = function(g, _) {
    return Array.isArray(g) || Array.isArray(_) ? [] : g && !_ || !g && _;
  }, f.impliesOp = function(g, _) {
    if (Array.isArray(_)) {
      if (g === !0)
        return [];
      if (g === !1)
        return !0;
      if (Array.isArray(g))
        return [];
    }
    return Array.isArray(g) ? _ === !0 ? !0 : [] : g === !1 ? !0 : g && _;
  }, Sn = f, Sn;
}
var vn, Ps;
function C0() {
  if (Ps) return vn;
  Ps = 1;
  const f = me(), { ResourceNode: g, TypeInfo: _, instantRE: p, timeRE: a, dateRE: r, dateTimeRE: e } = fe(), s = class s {
    /**
     * Creates an extension with the given url and value
     * @param {Factory[]} self - an array with one element, which is the Factory
     *  class.
     * @param {string} url - a string value that identifies the extension
     * @param {*} value - the value of the extension (any valid type for
     *  extension.value[x]).
     * @return {ResourceNode}
     */
    static Extension(n, l, t) {
      if (t.length !== 1) {
        if (t.length > 1)
          throw new Error("Unexpected collection " + f.toJSON(t) + " as a value for %factory.Extension(url, value)");
        if (t.length === 0)
          throw new Error("Unexpected empty collection " + f.toJSON(t) + " as a value for %factory.Extension(url, value)");
      } else
        return g.makeResNode(
          s.createExtensionObject(l, t[0]),
          null,
          "Extension",
          null,
          "Extension"
        );
    }
    /**
     * Creates an object to store the extension value.
     * @param {string} url - a string value that identifies the extension
     * @param {*} value - the value of the extension (any valid type for
     *  extension.value[x]).
     * @return {{[p: string]: *, url}}
     */
    static createExtensionObject(n, l) {
      const t = "value" + _.fromValue(l).name.replace(/^\w/, (m) => m.toUpperCase());
      return {
        url: n,
        [t]: f.valData(l)
      };
    }
    /**
     * Creates an identifier with the given properties.
     * @param {Factory[]} self - an array with one element, which is the Factory
     *  class.
     * @param {string} system - a string value that goes in Identifier.system.
     * @param {string} value - a string value that goes in Identifier.value.
     * @param {string} use - a string value that goes in Identifier.use.
     * @param {ResourceNode[]} typeColl - a CodeableConcept that goes in
     *  Identifier.type.
     * @return {ResourceNode}
     */
    static Identifier(n, l, t, m, d) {
      if ((d == null ? void 0 : d.length) > 1)
        throw new Error("Unexpected collection " + f.toJSON(d) + " as a type for %factory.Identifier{system, value, use, type)");
      const o = {};
      if (f.isSome(l) && (o.system = l), f.isSome(t) && (o.value = t), f.isSome(m) && (o.use = m), f.isSome(d)) {
        const h = _.fromValue(d[0]);
        if (!_.isType(h.name, "CodeableConcept"))
          throw new Error(`Expected "FHIR.CodeableConcept", got "${h}"`);
        o.type = d[0];
      }
      return g.makeResNode(
        o,
        null,
        "Identifier",
        null,
        "Identifier"
      );
    }
    /**
     * Create a human name with the given properties.
     * @param {Factory[]} self - an array with one element, which is the Factory
     *  class.
     * @param {string} family - a string value that goes in HumanName.system.
     * @param {ResourceNode[]} givenColl - a collection of string values that goes
     *  in HumanName.given.
     * @param {string} prefix - a string value that goes in HumanName.prefix.
     * @param {string} suffix - a string value that goes in HumanName.suffix.
     * @param {string} text - a string value that goes in HumanName.text.
     * @param {string} use - a string value that goes in HumanName.use.
     * @return {ResourceNode}
     */
    static HumanName(n, l, t, m, d, o, h) {
      const c = {};
      return f.isSome(l) && (c.family = l), f.isSome(t) && (c.given = t.map((y) => {
        const T = f.valData(y);
        if (typeof T == "string")
          return T;
        throw new Error(`Expected string, but got: ${f.toJSON(T)}`);
      })), f.isSome(m) && (c.prefix = m), f.isSome(d) && (c.suffix = d), f.isSome(o) && (c.text = o), f.isSome(h) && (c.use = h), g.makeResNode(
        c,
        null,
        "HumanName",
        null,
        "HumanName"
      );
    }
    /**
     * Creates a ContactPoint.
     * @param {Factory[]} self - an array with one element, which is the Factory
     *  class.
     * @param {string} system - a string value that goes in ContactPoint.system.
     * @param {string} value - a string value that goes in ContactPoint.value.
     * @param {string} use - a string value that goes in ContactPoint.use.
     * @return {ResourceNode}
     */
    static ContactPoint(n, l, t, m) {
      const d = {};
      return f.isSome(l) && (d.system = l), f.isSome(t) && (d.value = t), f.isSome(m) && (d.use = m), g.makeResNode(
        d,
        null,
        "ContactPoint",
        null,
        "ContactPoint"
      );
    }
    /**
     * Creates an Address
     * @param {Factory[]} self - an array with one element, which is the Factory
     *  class.
     * @param {ResourceNode[]} lineColl - a collection of string values that goes
     *  in Address.line.
     * @param {string} city - a string value that goes in Address.city.
     * @param {string} state - a string value that goes in Address.state.
     * @param {string} postalCode - a string value that goes in Address.postalCode.
     * @param {string} country - a string value that goes in Address.country.
     * @param {string} use - a string value that goes in Address.use.
     * @param {string} type - a string value that goes in Address.type.
     * @return {ResourceNode}
     */
    static Address(n, l, t, m, d, o, h, c) {
      const y = {};
      return f.isSome(l) && (y.line = l.map((T) => {
        const N = f.valData(T);
        if (typeof N == "string")
          return N;
        throw new Error(`Expected string, but got: ${f.toJSON(N)}`);
      })), f.isSome(t) && (y.city = t), f.isSome(m) && (y.state = m), f.isSome(d) && (y.postalCode = d), f.isSome(o) && (y.country = o), f.isSome(h) && (y.use = h), f.isSome(c) && (y.type = c), g.makeResNode(
        y,
        null,
        "Address",
        null,
        "Address"
      );
    }
    /**
     * Creates a Quantity.
     * @param {Factory[]} self - an array with one element, which is the Factory
     *  class.
     * @param {string} system - a string value that goes in Quantity.system.
     * @param {string} code - a string value that goes in Quantity.code.
     * @param {string} value - a string or decimal value that goes in
     *  Quantity.value.
     * @param {string} unit - a string value that goes in Quantity.unit.
     * @return {ResourceNode}
     */
    static Quantity(n, l, t, m, d) {
      const o = {};
      return f.isSome(l) && (o.system = l), f.isSome(t) && (o.code = t), f.isSome(m) && (o.value = Number(m)), f.isSome(d) && (o.unit = d), g.makeResNode(
        o,
        null,
        "Quantity",
        null,
        "Quantity"
      );
    }
    /**
     * Creates a Coding.
     * @param {Factory[]} self - an array with one element, which is the Factory
     *  class.
     * @param {string} system - a string value that goes in Coding.system.
     * @param {string} code - a string value that goes in Coding.code.
     * @param {string} display - a string value that goes in Coding.display.
     * @param {string} version - a string value that goes in Coding.version.
     * @return {ResourceNode}
     */
    static Coding(n, l, t, m, d) {
      const o = {};
      return f.isSome(l) && (o.system = l), f.isSome(t) && (o.code = t), f.isSome(m) && (o.display = m), f.isSome(d) && (o.version = d), g.makeResNode(
        o,
        null,
        "Coding",
        null,
        "Coding"
      );
    }
    /**
     * Creates a CodeableConcept.
     * @param {Factory[]} self - an array with one element, which is the Factory
     *  class.
     * @param {ResourceNode[]} valueColl - a collection of Coding that goes in
     *  CodeableConcept.coding.
     * @param {string} text - a string value that goes in CodeableConcept.text.
     * @return {ResourceNode}
     */
    static CodeableConcept(n, l, t) {
      const m = (l == null ? void 0 : l.length) > 0 ? {
        coding: l.map((d) => {
          if (d instanceof g && d.getTypeInfo().name === "Coding")
            return f.valData(d);
          throw new Error("Unexpected value " + f.toJSON(d) + "; expected value of type Coding");
        })
      } : {};
      return f.isSome(t) && (m.text = t), g.makeResNode(
        m,
        null,
        "CodeableConcept",
        null,
        "CodeableConcept"
      );
    }
    /**
     * Create an instance of the named type.
     * @param {Factory[]} self - an array with one element that refers to
     *  the current Factory instance.
     * @param {TypeInfo} typeInfo - a value that is the type to create.
     * @return {ResourceNode}
     */
    static create(n, l) {
      if (l.namespace === _.System)
        throw new Error("%factory.create(type) doesn't support system types.");
      return g.makeResNode(
        null,
        null,
        l.name,
        null,
        l.name
      );
    }
    /**
     * Add an extension, and return the new type.
     * @param {Factory[]} self - an array with one element that refers to
     *  the current Factory instance.
     * @param {ResourceNode[]} instanceColl - a collection that should contain the
     *  instance to which the extension is to be added.
     * @param {string} url - a string value that goes in Extension.url.
     *  specification this could also be an actual ValueSet, but I don't want to
     *  complicate this example.
     * @param {ResourceNode[]} value - the value of the extension.
     * @return {ResourceNode|[]}
     */
    static withExtension(n, l, t, m) {
      var o, h;
      if (l.length > 1)
        throw new Error("Unexpected collection " + f.toJSON(l) + " as an instance for %factory.withExtension(instance, url, value)");
      if (m.length !== 1) {
        if (m.length > 1)
          throw new Error("Unexpected collection " + f.toJSON(m) + " as a value for %factory.withExtension(instance, url, value)");
        if (m.length === 0)
          throw new Error("Unexpected empty collection " + f.toJSON(m) + " as a value for %factory.withExtension(instance, url, value)");
      }
      if (l.length === 0)
        return [];
      const d = l[0];
      if (d instanceof g) {
        let c = d.data, y = d._data;
        return _.isPrimitive(d.getTypeInfo()) ? y = {
          ...d._data || {},
          extension: [
            ...((o = d._data) == null ? void 0 : o.extension) || [],
            s.createExtensionObject(t, m[0])
          ]
        } : c = {
          ...d.data || {},
          extension: [
            ...((h = d.data) == null ? void 0 : h.extension) || [],
            s.createExtensionObject(t, m[0])
          ]
        }, g.makeResNode(
          c,
          null,
          d.path,
          y,
          d.fhirNodeDataType
        );
      } else
        throw new Error("Expected a ResourceNode.");
    }
    /**
     * Set a property value, and return the new type.
     * @param {Factory[]} self - an array with one element that refers to
     *  the current Factory instance.
     * @param {ResourceNode[]} instanceColl - a collection that should contain the
     *  instance to set the property on.
     * @param {string} name - a string value that identifies the property to set.
     * @param {string} value - the value of the property
     * @return {ResourceNode|*[]}
     */
    static withProperty(n, l, t, m) {
      var o, h;
      if (l.length > 1)
        throw new Error("Unexpected collection " + f.toJSON(l) + " as an instance for %factory.withProperty(instance, name, value)");
      if (m.length !== 1) {
        if (m.length > 1)
          throw new Error("Unexpected collection " + f.toJSON(m) + " as a value for %factory.withProperty(instance, name, value)");
        if (m.length === 0)
          throw new Error("Unexpected empty collection " + f.toJSON(m) + " as a value for %factory.withProperty(instance, name, value)");
      }
      if (l.length === 0)
        return [];
      const d = l[0];
      if (d instanceof g) {
        let c = d.data, y = d._data;
        return _.isPrimitive(d.getTypeInfo()) ? y = {
          ...d._data || {},
          [t]: f.valData(m[0]),
          ...(o = m[0]) != null && o._data ? { ["_" + t]: m[0]._data } : {}
        } : c = {
          ...d.data || {},
          [t]: f.valData(m[0]),
          ...(h = m[0]) != null && h._data ? { ["_" + t]: m[0]._data } : {}
        }, g.makeResNode(
          c,
          null,
          d.path,
          y,
          d.fhirNodeDataType
        );
      } else
        throw new Error("Expected a ResourceNode.");
    }
  };
  // Same as fhirpath.invocationTable, but for %factory methods
  se(s, "invocationTable", {
    Extension: { fn: s.Extension, arity: { 2: ["String", "AnyAtRoot"] } },
    Identifier: {
      fn: s.Identifier,
      arity: {
        1: ["String"],
        2: ["String", "String"],
        3: ["String", "String", "String"],
        4: ["String", "String", "String", "Any"]
      }
    },
    HumanName: {
      fn: s.HumanName,
      arity: {
        1: ["String"],
        2: ["String", "AnyAtRoot"],
        3: ["String", "AnyAtRoot", "String"],
        4: ["String", "AnyAtRoot", "String", "String"],
        5: ["String", "AnyAtRoot", "String", "String", "String"],
        6: ["String", "AnyAtRoot", "String", "String", "String", "String"]
      }
    },
    ContactPoint: {
      fn: s.ContactPoint,
      arity: {
        1: ["String"],
        2: ["String", "String"],
        3: ["String", "String", "String"]
      }
    },
    Address: {
      fn: s.Address,
      arity: {
        1: ["AnyAtRoot"],
        2: ["AnyAtRoot", "String"],
        3: ["AnyAtRoot", "String", "String"],
        4: ["AnyAtRoot", "String", "String", "String"],
        5: ["AnyAtRoot", "String", "String", "String", "String"],
        6: ["AnyAtRoot", "String", "String", "String", "String", "String"],
        7: ["AnyAtRoot", "String", "String", "String", "String", "String", "String"]
      }
    },
    Quantity: {
      fn: s.Quantity,
      arity: {
        1: ["String"],
        2: ["String", "String"],
        3: ["String", "String", "StringOrNumber"],
        4: ["String", "String", "StringOrNumber", "String"]
      }
    },
    Coding: {
      fn: s.Coding,
      arity: {
        1: ["String"],
        2: ["String", "String"],
        3: ["String", "String", "String"],
        4: ["String", "String", "String", "String"]
      }
    },
    CodeableConcept: {
      fn: s.CodeableConcept,
      arity: {
        1: ["AnyAtRoot"],
        2: ["AnyAtRoot", "String"]
      }
    },
    create: {
      fn: s.create,
      arity: {
        1: ["TypeSpecifier"]
      }
    },
    withExtension: {
      fn: s.withExtension,
      arity: {
        3: ["AnyAtRoot", "String", "AnyAtRoot"]
      }
    },
    withProperty: {
      fn: s.withProperty,
      arity: {
        3: ["AnyAtRoot", "String", "AnyAtRoot"]
      }
    }
  }), [
    {
      type: "string",
      getValue: function(n) {
        if (typeof n == "string" && /^[\s\S]+$/.test(n))
          return String(n);
        throw new Error(`"${n}" is not a string.`);
      }
    },
    {
      type: "integer",
      getValue: (n) => {
        const l = Number(n);
        if (Number.isInteger(l))
          return l;
        throw new Error(`"${n}" is not an integer.`);
      }
    },
    {
      type: "unsignedInt",
      getValue: (n) => {
        const l = Number(n);
        if (Number.isInteger(l) && l >= 0)
          return l;
        throw new Error(`"${n}" is not an unsignedInt.`);
      }
    },
    {
      type: "positiveInt",
      getValue: (n) => {
        const l = Number(n);
        if (Number.isInteger(l) && l > 0)
          return l;
        throw new Error(`"${n}" is not a positiveInt.`);
      }
    },
    {
      type: "integer64",
      getValue: (n) => {
        try {
          return BigInt(n);
        } catch {
          throw new Error(`"${n}" is not a big integer.`);
        }
      }
    },
    {
      type: "markdown",
      getValue(n) {
        if (typeof n == "string" && /^[\s\S]+$/.test(n))
          return n;
        throw new Error(`"${n}" is not a markdown.`);
      }
    },
    {
      type: "url",
      getValue(n) {
        if (typeof n == "string" && /^\S*$/.test(n))
          return n;
        throw new Error(`"${n}" is not a url.`);
      }
    },
    {
      type: "uri",
      getValue(n) {
        if (typeof n == "string" && /^\S*$/.test(n))
          return n;
        throw new Error(`"${n}" is not a uri.`);
      }
    },
    {
      type: "instant",
      getValue(n) {
        if (typeof n == "string" && p.test(n))
          return n;
        throw new Error(`"${n}" is not an instant.`);
      }
    },
    {
      type: "time",
      getValue(n) {
        if (typeof n == "string" && a.test(n))
          return n;
        throw new Error(`"${n}" is not a time.`);
      }
    },
    {
      type: "date",
      getValue(n) {
        if (typeof n == "string" && r.test(n))
          return n;
        throw new Error(`"${n}" is not a date.`);
      }
    },
    {
      type: "dateTime",
      getValue(n) {
        if (typeof n == "string" && e.test(n))
          return n;
        throw new Error(`"${n}" is not a dateTime.`);
      }
    },
    {
      type: "base64Binary",
      getValue(n) {
        if (typeof n == "string" && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(n))
          return n;
        throw new Error(`"${n}" is not a base64Binary.`);
      }
    },
    {
      type: "decimal",
      getValue(n) {
        const l = Number(n);
        if (Number.isNaN(l))
          throw new Error(`"${n}" is not an decimal.`);
        return l;
      }
    },
    {
      type: "boolean",
      getValue(n) {
        if (n === !0 || n === "true")
          return !0;
        if (n === !1 || n === "false")
          return !1;
        throw new Error(`"${n}" is not a boolean.`);
      }
    },
    {
      type: "code",
      getValue(n) {
        if (typeof n == "string" && /^\S+( \S+)*$/.test(n))
          return n;
        throw new Error(`"${n}" is not a code.`);
      }
    },
    {
      type: "id",
      getValue(n) {
        if (typeof n == "string" && /^[A-Za-z0-9\-.]{1,64}$/.test(n))
          return n;
        throw new Error(`"${n}" is not an id.`);
      }
    },
    {
      type: "oid",
      getValue(n) {
        if (typeof n == "string" && /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/.test(n))
          return n;
        throw new Error(`"${n}" is not an oid.`);
      }
    },
    {
      type: "uuid",
      getValue(n) {
        if (typeof n == "string" && /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(n))
          return n;
        throw new Error(`"${n}" is not an uuid.`);
      }
    },
    {
      type: "canonical",
      getValue(n) {
        if (typeof n == "string" && /^\S*$/.test(n))
          return n;
        throw new Error(`"${n}" is not an canonical.`);
      }
    }
  ].forEach(({ type: n, getValue: l }) => {
    s[n] = function(t, m, d) {
      let o;
      if (m.length > 1)
        throw new Error("Unexpected collection " + f.toJSON(m) + ` as a value for %factory.${n}(value, extensions)`);
      if (m.length === 0)
        o = null;
      else {
        const c = f.valData(m[0]);
        if (c == null && (o = null), typeof c != "object")
          o = l(c);
        else
          throw new Error(`"${c}" is not a ${n}`);
      }
      let h = null;
      return (d == null ? void 0 : d.length) > 0 && (h = {
        extension: d.map((c) => {
          const y = _.fromValue(c);
          if (_.isType(y.name, "Extension"))
            return f.valData(c);
          throw new Error(`Expected "FHIR.Extension", got "${y}"`);
        })
      }), g.makeResNode(o, null, n, h, n);
    }, s.invocationTable[n] = {
      fn: s[n],
      arity: { 1: ["AnyAtRoot"], 2: ["AnyAtRoot", "Any"] }
    };
  });
  let u = s;
  return vn = u, vn;
}
var In, Fs;
function _0() {
  if (Fs) return In;
  Fs = 1;
  const { version: f } = Ti, g = Bi(), _ = me(), { hasOwnProperty: p } = _;
  r0();
  const a = ni();
  let r = {}, e = u0(), u = Pn(), s = a0(), i = o0(), n = c0(), l = Fn(), t = si(), m = f0(), d = li(), o = m0(), h = h0(), c = d0(), y = g0(), T = y0();
  const N = fe(), {
    FP_Date: O,
    FP_DateTime: P,
    FP_Time: z,
    FP_Quantity: D,
    FP_Type: F,
    ResourceNode: B,
    TypeInfo: $
  } = N;
  let I = B.makeResNode;
  const S = ii(), C = C0();
  r.invocationTable = {
    resolve: { fn: y.resolveFn },
    memberOf: { fn: y.memberOf, arity: { 1: ["Any"] } },
    empty: { fn: e.emptyFn },
    not: { fn: e.notFn },
    exists: { fn: e.existsMacro, arity: { 0: [], 1: ["Expr"] } },
    all: { fn: e.allMacro, arity: { 1: ["Expr"] } },
    allTrue: { fn: e.allTrueFn },
    anyTrue: { fn: e.anyTrueFn },
    allFalse: { fn: e.allFalseFn },
    anyFalse: { fn: e.anyFalseFn },
    subsetOf: { fn: e.subsetOfFn, arity: { 1: ["AnyAtRoot"] } },
    supersetOf: { fn: e.supersetOfFn, arity: { 1: ["AnyAtRoot"] } },
    isDistinct: { fn: e.isDistinctFn },
    distinct: { fn: u.distinctFn },
    count: { fn: s.countFn },
    where: { fn: u.whereMacro, arity: { 1: ["Expr"] } },
    extension: { fn: u.extension, arity: { 1: ["String"] } },
    select: { fn: u.selectMacro, arity: { 1: ["Expr"] } },
    aggregate: { fn: s.aggregateMacro, arity: { 1: ["Expr"], 2: ["Expr", "AnyAtRoot"] } },
    sum: { fn: s.sumFn },
    min: { fn: s.minFn },
    max: { fn: s.maxFn },
    avg: { fn: s.avgFn },
    weight: { fn: i.weight },
    ordinal: { fn: i.weight },
    single: { fn: u.singleFn },
    first: { fn: u.firstFn },
    last: { fn: u.lastFn },
    type: { fn: N.typeFn, arity: { 0: [] } },
    ofType: { fn: u.ofTypeFn, arity: { 1: ["TypeSpecifier"] } },
    is: { fn: N.isFn, arity: { 1: ["TypeSpecifier"] } },
    as: { fn: N.asFn, arity: { 1: ["TypeSpecifier"] } },
    tail: { fn: u.tailFn },
    take: { fn: u.takeFn, arity: { 1: ["Integer"] } },
    skip: { fn: u.skipFn, arity: { 1: ["Integer"] } },
    combine: { fn: n.combineFn, arity: { 1: ["AnyAtRoot"] } },
    union: { fn: n.union, arity: { 1: ["AnyAtRoot"] } },
    intersect: { fn: n.intersect, arity: { 1: ["AnyAtRoot"] } },
    exclude: { fn: n.exclude, arity: { 1: ["AnyAtRoot"] } },
    iif: { fn: l.iifMacro, arity: { 2: ["Expr", "Expr"], 3: ["Expr", "Expr", "Expr"] } },
    trace: { fn: l.traceFn, arity: { 1: ["String"], 2: ["String", "Expr"] } },
    defineVariable: { fn: l.defineVariable, arity: { 1: ["String"], 2: ["String", "Expr"] } },
    toInteger: { fn: l.toInteger },
    toLong: { fn: l.toLong },
    toDecimal: { fn: l.toDecimal },
    toString: { fn: l.toString },
    toDate: { fn: l.toDate },
    toDateTime: { fn: l.toDateTime },
    toTime: { fn: l.toTime },
    toBoolean: { fn: l.toBoolean },
    toQuantity: { fn: l.toQuantity, arity: { 0: [], 1: ["String"] } },
    hasValue: { fn: l.hasValueFn },
    getValue: { fn: l.getValueFn },
    convertsToBoolean: { fn: l.createConvertsToFn(l.toBoolean, "boolean") },
    convertsToInteger: { fn: l.createConvertsToFn(l.toInteger, "number") },
    convertsToLong: { fn: l.createConvertsToFn(l.toLong, "bigint") },
    convertsToDecimal: { fn: l.createConvertsToFn(l.toDecimal, "number") },
    convertsToString: { fn: l.createConvertsToFn(l.toString, "string") },
    convertsToDate: { fn: l.createConvertsToFn(l.toDate, O) },
    convertsToDateTime: { fn: l.createConvertsToFn(l.toDateTime, P) },
    convertsToTime: { fn: l.createConvertsToFn(l.toTime, z) },
    convertsToQuantity: { fn: l.createConvertsToFn(l.toQuantity, D) },
    indexOf: { fn: o.indexOf, arity: { 1: ["String"] } },
    substring: { fn: o.substring, arity: { 1: ["Integer"], 2: ["Integer", "Integer"] } },
    startsWith: { fn: o.startsWith, arity: { 1: ["String"] } },
    endsWith: { fn: o.endsWith, arity: { 1: ["String"] } },
    contains: { fn: o.containsFn, arity: { 1: ["String"] } },
    upper: { fn: o.upper },
    lower: { fn: o.lower },
    replace: { fn: o.replace, arity: { 2: ["String", "String"] } },
    matches: { fn: o.matches, arity: { 1: ["String"] } },
    replaceMatches: { fn: o.replaceMatches, arity: { 2: ["String", "String"] } },
    length: { fn: o.length },
    toChars: { fn: o.toChars },
    join: { fn: o.joinFn, arity: { 0: [], 1: ["String"] } },
    split: { fn: o.splitFn, arity: { 1: ["String"] } },
    trim: { fn: o.trimFn },
    encode: { fn: o.encodeFn, arity: { 1: ["String"] } },
    decode: { fn: o.decodeFn, arity: { 1: ["String"] } },
    abs: { fn: d.abs },
    ceiling: { fn: d.ceiling },
    exp: { fn: d.exp },
    floor: { fn: d.floor },
    ln: { fn: d.ln },
    log: { fn: d.log, arity: { 1: ["Number"] }, nullable: !0 },
    power: { fn: d.power, arity: { 1: ["Number"] }, nullable: !0 },
    round: { fn: d.round, arity: { 0: [], 1: ["Number"] } },
    sqrt: { fn: d.sqrt },
    truncate: { fn: d.truncate },
    now: { fn: c.now },
    today: { fn: c.today },
    timeOfDay: { fn: c.timeOfDay },
    repeat: { fn: u.repeatMacro, arity: { 1: ["Expr"] } },
    children: { fn: h.children },
    descendants: { fn: h.descendants },
    "|": { fn: n.union, arity: { 2: ["Any", "Any"] } },
    "=": { fn: t.equal, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    "!=": { fn: t.unequal, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    "~": { fn: t.equival, arity: { 2: ["Any", "Any"] } },
    "!~": { fn: t.unequival, arity: { 2: ["Any", "Any"] } },
    "<": { fn: t.lt, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    ">": { fn: t.gt, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    "<=": { fn: t.lte, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    ">=": { fn: t.gte, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    comparable: { fn: t.comparable, arity: { 1: ["Any"] } },
    containsOp: { fn: m.contains, arity: { 2: ["Any", "Any"] } },
    inOp: { fn: m.in, arity: { 2: ["Any", "Any"] } },
    isOp: { fn: N.isFn, arity: { 2: ["Any", "TypeSpecifier"] } },
    asOp: { fn: N.asFn, arity: { 2: ["Any", "TypeSpecifier"] } },
    "&": { fn: d.amp, arity: { 2: ["String", "String"] } },
    "+": { fn: d.plus, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    "-": { fn: d.minus, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    "*": { fn: d.mul, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    "/": { fn: d.div, arity: { 2: ["Any", "Any"] }, nullable: !0 },
    mod: { fn: d.mod, arity: { 2: ["Number", "Number"] }, nullable: !0 },
    div: { fn: d.intdiv, arity: { 2: ["Number", "Number"] }, nullable: !0 },
    or: { fn: T.orOp, arity: { 2: [["Boolean"], ["Boolean"]] } },
    and: { fn: T.andOp, arity: { 2: [["Boolean"], ["Boolean"]] } },
    xor: { fn: T.xorOp, arity: { 2: [["Boolean"], ["Boolean"]] } },
    implies: { fn: T.impliesOp, arity: { 2: [["Boolean"], ["Boolean"]] } }
  }, r.InvocationExpression = function(G, j, V) {
    return V.children.reduce(function(W, E) {
      return r.doEval(G, W, E);
    }, j);
  }, r.TermExpression = function(G, j, V) {
    return j && (j = j.map((W) => W instanceof Object && W.resourceType ? I(W, null, null, null, null, G.model) : W)), r.doEval(G, j, V.children[0]);
  }, r.PolarityExpression = function(G, j, V) {
    var W = V.text, E = r.doEval(G, j, V.children[0]);
    if (E.length !== 1)
      throw new Error("Unary " + W + " can only be applied to an individual number or Quantity.");
    const k = typeof E[0];
    if (k === "bigint" || k === "number" && !isNaN(E[0]))
      W === "-" && (E[0] = -E[0]);
    else if (E[0] instanceof D)
      W === "-" && (E[0] = new D(-E[0].value, E[0].unit));
    else {
      let R = "Unary " + W + " can only be applied to a number or Quantity.";
      throw V.start && (R += " (at " + V.start.line + ":" + V.start.column + ")"), new Error(R);
    }
    return E;
  }, r.TypeSpecifier = function(G, j, V) {
    let W, E;
    const k = V.text.split(".").map((J) => J.replace(/(^`|`$)/g, ""));
    switch (k.length) {
      case 2:
        [W, E] = k;
        break;
      case 1:
        [E] = k;
        break;
      default:
        throw new Error("Expected TypeSpecifier node, got " + _.toJSON(V));
    }
    const R = new $({ namespace: W, name: E });
    if (!R.isValid(G.model))
      throw new Error('"' + R + '" cannot be resolved to a valid type identifier');
    return R;
  }, r.ExternalConstantTerm = function(G, j, V) {
    let W;
    V.delimitedText ? W = b(V.delimitedText) : W = V.text;
    let E;
    if (W in G.vars && !G.processedUserVarNames.has(W))
      E = G.vars[W], Array.isArray(E) ? E = E.map(
        (k) => k != null && k.__path__ ? I(
          k,
          k.__path__.parentResNode,
          k.__path__.path,
          null,
          k.__path__.fhirNodeDataType,
          k.__path__.model
        ) : k != null && k.resourceType ? I(k, null, null, null, null, G.model) : k
      ) : E = E != null && E.__path__ ? I(
        E,
        E.__path__.parentResNode,
        E.__path__.path,
        null,
        E.__path__.fhirNodeDataType,
        E.__path__.model
      ) : E != null && E.resourceType ? I(E, null, null, null, null, G.model) : E, G.processedVars[W] = E, G.processedUserVarNames.add(W);
    else if (W in G.processedVars)
      E = G.processedVars[W];
    else if (G.definedVars && W in G.definedVars)
      E = G.definedVars[W];
    else
      throw new Error(
        "Attempting to access an undefined environment variable: " + W
      );
    return E == null ? [] : E instanceof Array ? E : [E];
  }, r.LiteralTerm = function(G, j, V) {
    var W = V.children[0];
    return W ? r.doEval(G, j, W) : [V.text];
  }, r.StringLiteral = function(G, j, V) {
    return [b(V.text)];
  };
  function b(G) {
    return G.replace(/(^'|'$)/g, "").replace(/\\(u\d{4}|.)/g, function(j, V) {
      switch (j) {
        case "\\r":
          return "\r";
        case "\\n":
          return `
`;
        case "\\t":
          return "	";
        case "\\f":
          return "\f";
        default:
          return V.length > 1 ? String.fromCharCode("0x" + V.slice(1)) : V;
      }
    });
  }
  r.BooleanLiteral = function(G, j, V) {
    return V.text === "true" ? [!0] : [!1];
  }, r.QuantityLiteral = function(G, j, V) {
    var W = Number(V.value);
    return [new D(W, V.unit)];
  }, r.DateLiteral = function(G, j, V) {
    var W = V.text.slice(1);
    return [new O(W)];
  }, r.DateTimeLiteral = function(G, j, V) {
    var W = V.text.slice(1);
    return [new P(W)];
  }, r.TimeLiteral = function(G, j, V) {
    var W = V.text.slice(1);
    return [new z(W)];
  }, r.NumberLiteral = function(G, j, V) {
    return [Number(V.text)];
  }, r.LongNumberLiteral = function(G, j, V) {
    return [BigInt(V.text.slice(0, -1))];
  }, r.Identifier = function(G, j, V) {
    return [v(V.text)];
  };
  function v(G) {
    return G.replace(/(^`|`$)/g, "");
  }
  r.InvocationTerm = function(G, j, V) {
    return r.doEval(G, j, V.children[0]);
  }, r.MemberInvocation = function(G, j, V) {
    const W = r.doEval(G, j, V.children[0])[0], E = G.model;
    return j ? j.reduce(function(k, R) {
      var J, x, K;
      return R = I(
        R,
        null,
        (J = R.__path__) == null ? void 0 : J.path,
        null,
        (x = R.__path__) == null ? void 0 : x.fhirNodeDataType,
        E
      ), ((K = R.data) == null ? void 0 : K.resourceType) === W ? k.push(R) : _.pushFn(k, _.makeChildResNodes(R, W, E)), k;
    }, []) : [];
  }, r.IndexerExpression = function(G, j, V) {
    const W = V.children[0], E = V.children[1];
    var k = r.doEval(G, j, W), R = r.doEval(G, j, E);
    if (_.isEmpty(R))
      return [];
    var J = parseInt(R[0]);
    return k && _.isSome(J) && k.length > J && J >= 0 ? [k[J]] : [];
  }, r.Functn = function(G, j, V) {
    return V.children.map(function(W) {
      return r.doEval(G, j, W);
    });
  }, r.realizeParams = function(G, j, V) {
    return V && V[0] && V[0].children ? V[0].children.map(function(W) {
      return r.doEval(G, j, W);
    }) : [];
  };
  function M(G, j) {
    const V = { ...G, $this: j };
    return G.definedVars && (V.definedVars = { ...G.definedVars }), V;
  }
  function A(G, j, V, W) {
    if (V === "Expr")
      return function(R) {
        const J = _.arraify(R);
        return r.doEval(M(G, J), J, W);
      };
    if (V === "Identifier") {
      if (W.type === "TermExpression")
        return W.text;
      throw new Error("Expected identifier node, got " + _.toJSON(W));
    }
    if (V === "TypeSpecifier")
      return r.TypeSpecifier(G, j, W);
    const E = G.$this || G.dataRoot, k = r.doEval(M(G, E), E, W);
    if (V === "Any" || V === "AnyAtRoot")
      return k;
    if (Array.isArray(V)) {
      if (k.length === 0)
        return [];
      V = V[0];
    }
    return k instanceof Promise ? k.then((R) => l.singleton(R, V)) : l.singleton(k, V);
  }
  function q(G, j, V, W) {
    var w, X, ae;
    var E = G.userInvocationTable && p(G.userInvocationTable, j) && ((w = G.userInvocationTable) == null ? void 0 : w[j]) || r.invocationTable[j] || V.length === 1 && ((ae = (X = V[0]) == null ? void 0 : X.invocationTable) == null ? void 0 : ae[j]), k;
    if (E)
      if (E.arity) {
        var R = W ? W.length : 0, J = E.arity[R];
        if (J) {
          for (var x = [], K = 0; K < R; K++) {
            var L = J[K], U = W[K];
            x.push(A(G, V, L, U));
          }
          return x.unshift(V), E.nullable && x.some(H) ? [] : x.some((le) => le instanceof Promise) ? Promise.all(x).then((le) => (k = E.fn.apply(G, le), _.resolveAndArraify(k))) : (k = E.fn.apply(G, x), _.resolveAndArraify(k));
        } else
          return console.log(j + " wrong arity: got " + R), [];
      } else {
        if (W)
          throw new Error(j + " expects no params");
        return k = E.fn.call(G, V), _.resolveAndArraify(k);
      }
    else
      throw new Error("Not implemented: " + j);
  }
  function H(G) {
    return G == null || _.isEmpty(G);
  }
  function Y(G, j, V, W) {
    var E = r.invocationTable[j];
    if (E && E.fn) {
      var k = W ? W.length : 0;
      if (k !== 2)
        throw new Error("Infix invoke should have arity 2");
      var R = E.arity[k];
      if (R) {
        for (var J = [], x = 0; x < k; x++) {
          var K = R[x], L = W[x];
          J.push(A(G, V, K, L));
        }
        if (E.nullable && J.some(H))
          return [];
        if (J.some((w) => w instanceof Promise))
          return Promise.all(J).then((w) => {
            var X = E.fn.apply(G, w);
            return _.arraify(X);
          });
        var U = E.fn.apply(G, J);
        return _.arraify(U);
      } else
        return console.log(j + " wrong arity: got " + k), [];
    } else
      throw new Error("Not impl " + j);
  }
  r.FunctionInvocation = function(G, j, V) {
    var W = r.doEval(G, j, V.children[0]);
    const E = W[0];
    W.shift();
    var k = W && W[0] && W[0].children;
    return q(G, E, j, k);
  }, r.ParamList = function(G, j, V) {
    return V;
  }, r.UnionExpression = function(G, j, V) {
    return Y(G, "|", j, V.children);
  }, r.ThisInvocation = function(G) {
    return G.$this ?? G.dataRoot;
  }, r.TotalInvocation = function(G) {
    return _.arraify(G.$total);
  }, r.IndexInvocation = function(G) {
    return _.arraify(G.$index);
  }, r.OpExpression = function(G, j, V) {
    var W = V.text;
    return Y(G, W, j, V.children);
  }, r.AliasOpExpression = function(G) {
    return function(j, V, W) {
      var E = W.text, k = G[E];
      if (!k)
        throw new Error("Do not know how to alias " + E + " by " + _.toJSON(G));
      return Y(j, k, V, W.children);
    };
  }, r.NullLiteral = function() {
    return [];
  }, r.ParenthesizedTerm = function(G, j, V) {
    return r.doEval(G, j, V.children[0]);
  }, r.evalTable = {
    // not every evaluator is listed if they are defined on engine
    BooleanLiteral: r.BooleanLiteral,
    EqualityExpression: r.OpExpression,
    FunctionInvocation: r.FunctionInvocation,
    Functn: r.Functn,
    Identifier: r.Identifier,
    IndexerExpression: r.IndexerExpression,
    InequalityExpression: r.OpExpression,
    InvocationExpression: r.InvocationExpression,
    AdditiveExpression: r.OpExpression,
    MultiplicativeExpression: r.OpExpression,
    TypeExpression: r.AliasOpExpression({ is: "isOp", as: "asOp" }),
    MembershipExpression: r.AliasOpExpression({ contains: "containsOp", in: "inOp" }),
    NullLiteral: r.NullLiteral,
    EntireExpression: r.InvocationTerm,
    InvocationTerm: r.InvocationTerm,
    LiteralTerm: r.LiteralTerm,
    MemberInvocation: r.MemberInvocation,
    NumberLiteral: r.NumberLiteral,
    ParamList: r.ParamList,
    ParenthesizedTerm: r.ParenthesizedTerm,
    StringLiteral: r.StringLiteral,
    TermExpression: r.TermExpression,
    ThisInvocation: r.ThisInvocation,
    TotalInvocation: r.TotalInvocation,
    IndexInvocation: r.IndexInvocation,
    UnionExpression: r.UnionExpression,
    OrExpression: r.OpExpression,
    ImpliesExpression: r.OpExpression,
    AndExpression: r.OpExpression,
    XorExpression: r.OpExpression
  }, r.doEval = function(G, j, V) {
    return j instanceof Promise ? j.then((W) => r.doEvalSync(G, W, V)) : r.doEvalSync(G, j, V);
  }, r.doEvalSync = function(G, j, V) {
    const W = r.evalTable[V.type] || r[V.type];
    if (W) {
      let E = W.call(r, G, j, V);
      return G.debugger && G.debugger(G, j, E, V), E;
    } else
      throw new Error("No " + V.type + " evaluator ");
  };
  function Z(G) {
    return g.parse(G);
  }
  function Q(G, j, V, W, E) {
    a.reset();
    let k = _.arraify(G).map(
      (x) => x != null && x.__path__ ? I(
        x,
        x.__path__.parentResNode,
        x.__path__.path,
        null,
        x.__path__.fhirNodeDataType,
        W,
        x.__path__.propName,
        x.__path__.index
      ) : x != null && x.resourceType ? I(x, null, null, null, null, W) : x
    ), R = {
      dataRoot: k,
      processedVars: {
        ucum: "http://unitsofmeasure.org",
        context: k
      },
      processedUserVarNames: /* @__PURE__ */ new Set(),
      vars: V || {},
      model: W
    };
    if (E.traceFn && (R.customTraceFn = E.traceFn), E.debugger && (R.debugger = E.debugger), E.userInvocationTable && (R.userInvocationTable = E.userInvocationTable), E.async && (R.async = E.async), E.terminologyUrl && (R.processedVars.terminologies = new S(E.terminologyUrl)), E.fhirServerUrl && (R.processedVars.fhirServerUrl = E.fhirServerUrl), R.processedVars.factory = C, E.signal) {
      if (R.signal = E.signal, !R.async)
        throw new Error(
          'The "signal" option is only supported for asynchronous functions.'
        );
      if (R.signal.aborted)
        throw new Error(
          "Evaluation of the expression was aborted before it started."
        );
    }
    if (E.httpHeaders && (R.httpHeaders = E.httpHeaders, !R.async))
      throw new Error(
        'The "httpHeaders" option is only supported for asynchronous functions.'
      );
    const J = r.doEval(R, k, j.children[0]);
    return J instanceof Promise ? J.then((x) => {
      var K;
      return (K = R.signal) != null && K.aborted ? Promise.reject(new DOMException(
        "Evaluation of the expression was aborted.",
        "AbortError"
      )) : ee(x, W, E);
    }) : E.async === "always" ? Promise.resolve(ee(J, W, E)) : ee(J, W, E);
  }
  function ee(G, j, V) {
    return G.reduce((W, E) => {
      let k, R, J, x, K;
      return E instanceof B && (k = E.path, R = E.fhirNodeDataType, J = E.parentResNode, x = E.propName, K = E.index), E = _.valData(E), E instanceof F && V.resolveInternalTypes && (E = E.toString()), E != null && (k && typeof E == "object" && !E.__path__ && Object.defineProperty(E, "__path__", {
        value: {
          path: k,
          fhirNodeDataType: R,
          parentResNode: J,
          model: j,
          propName: x,
          index: K
        }
      }), W.push(E)), W;
    }, []);
  }
  function te(G) {
    if (Array.isArray(G))
      for (let j = 0, V = G.length; j < V; ++j)
        G[j] = te(G[j]);
    else if (G instanceof F)
      G = G.toString();
    else if (typeof G == "object")
      for (let j of Object.keys(G))
        G[j] = te(G[j]);
    return G;
  }
  function ie(G, j, V, W, E) {
    return he(j, W, E)(G, V);
  }
  function oe(G, j, V) {
    if (V != null && V.signal)
      throw new Error(
        "Passing a signal to compile() whose result is used more than once is not allowed. If you need to abort the evaluation of the compiled expression, you should pass the signal option to the function that is returned by compile()."
      );
    return he(G, j, V);
  }
  function he(G, j, V) {
    var E;
    V = {
      resolveInternalTypes: !0,
      ...V
    };
    const W = V.userInvocationTable;
    if (W && (V.userInvocationTable = Object.keys(W).reduce(
      (k, R) => (W[R].internalStructures ? k[R] = W[R] : k[R] = {
        ...W[R],
        fn: (...J) => W[R].fn.apply(
          // When we check Array.isArray(arg), we are checking if the
          // singleton function has been called. An alternative to this is
          // to check that the type of the argument is Integer, Boolean,
          // Number, or String.
          this,
          J.map((x) => Array.isArray(x) ? x.map((K) => _.valData(K)) : x)
        )
      }, k),
      {}
    )), typeof G == "object") {
      const k = Z(G.expression);
      let R = (E = G.base) == null ? void 0 : E.replace(/\[\d*]/g, ""), J;
      if (R) {
        const x = Object.keys(j.pathsDefinedElsewhere);
        let K;
        do
          K = x.find((L) => {
            const U = R.startsWith(L);
            return U && (R = j.pathsDefinedElsewhere[L] + R.substring(L.length)), U;
          });
        while (K);
        R = j.pathsDefinedElsewhere[R] || R, J = j && j.path2Type[R], R = J === "BackboneElement" || J === "Element" ? R : J || R;
      }
      return function(x, K, L) {
        R && (x = I(
          x,
          null,
          R,
          null,
          J,
          j,
          G.base
        ));
        const U = L ? { ...V, ...L } : V;
        return Q(x, k, K, j, U);
      };
    } else {
      const k = Z(G);
      return function(R, J, x) {
        const K = x ? { ...V, ...x } : V;
        return Q(R, k, J, j, K);
      };
    }
  }
  function de(G) {
    return _.arraify(G).map((j) => {
      var W, E, k;
      const V = $.fromValue(
        j != null && j.__path__ ? new B(
          j,
          (W = j.__path__) == null ? void 0 : W.parentResNode,
          (E = j.__path__) == null ? void 0 : E.path,
          null,
          (k = j.__path__) == null ? void 0 : k.fhirNodeDataType,
          j.__path__.model
        ) : j
      );
      return `${V.namespace}.${V.name}`;
    });
  }
  return In = {
    version: f,
    parse: Z,
    compile: oe,
    evaluate: ie,
    resolveInternalTypes: te,
    types: de,
    // Might as well export the UCUM library, since we are using it.
    ucumUtils: Rn().UcumLhcUtils.getInstance(),
    // Utility functions that can be used to implement custom functions
    util: _
  }, In;
}
var L0 = _0();
const b0 = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 };
let T0 = 0;
function Nn(f, g) {
  const _ = `atom${++T0}`, p = {
    toString() {
      return (b0 ? "production" : void 0) !== "production" && this.debugLabel ? _ + ":" + this.debugLabel : _;
    }
  };
  return typeof f == "function" ? p.read = f : (p.init = f, p.read = U0, p.write = x0), g && (p.write = g), p;
}
function U0(f) {
  return f(this);
}
function x0(f, g, _) {
  return g(
    this,
    typeof _ == "function" ? _(f(this)) : _
  );
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
  cache: /* @__PURE__ */ new Map(),
  get(f, g) {
    return this.cache.has(f) ? this.cache.get(f) : (this.cache.set(f, g), g);
  }
};
function S0(f) {
  const g = Nn(() => ({
    previous: null
  }), (p) => () => void (p(g).previous = null));
  g.debugLabel = "refAtom", g.debugPrivate = !0;
  const _ = Nn((p) => {
    const a = p(g), r = p(f), e = a.previous;
    return e && v0(r, e) ? e : a.previous = r;
  });
  return _.debugLabel = "cachedAtom", _.debugPrivate = !0, _;
}
function v0(f, g) {
  return f.length === g.length && f.every((_, p) => _ === g[p]);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
  cache: /* @__PURE__ */ new Map(),
  get(f, g) {
    return this.cache.has(f) ? this.cache.get(f) : (this.cache.set(f, g), g);
  }
};
const I0 = (f) => ({
  get(g, _) {
    if (_ in g) return f(g[_]);
  },
  has(g, _) {
    return _ in g;
  }
});
function E0(f, g, _, p, a) {
  const r = Nn((u) => {
    const s = _ != null ? new Proxy(_, I0(u)) : void 0, i = L0.evaluate(f ? u(f) : void 0, g, s, p, a);
    if (i instanceof Promise) throw new Error("Async evaluation of FHIRPath expressions is not supported.");
    return i;
  });
  r.debugLabel = "expressionAtom";
  const e = S0(r);
  return new Proxy(e, {
    get(u, s, i) {
      return s == "debugLabel" ? r.debugLabel : Reflect.get(u, s, i);
    },
    set(u, s, i, n) {
      return s == "debugLabel" && (r.debugLabel = i), Reflect.set(u, s, i, n);
    }
  });
}
export {
  E0 as default
};
