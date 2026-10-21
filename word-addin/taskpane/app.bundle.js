var __BUNDLE_URL__=(document.currentScript&&document.currentScript.src)||location.href;
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop2 in b || (b = {}))
      if (__hasOwnProp.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    if (__getOwnPropSymbols)
      for (var prop2 of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop2))
          __defNormalProp(a, prop2, b[prop2]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k) => it[k] = (x) => obj[k](x);
    } else {
      obj = obj.call(value);
      method = (k) => it[k] = (v) => {
        if (isAwait) {
          isAwait = false;
          if (k === "throw") throw v;
          return v;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve2) => {
            var x = obj[k](v);
            if (!(x instanceof Object)) __typeError("Object expected");
            resolve2(x);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
      throw x;
    }, "return" in obj && method("return"), it;
  };

  // src/tables.js
  var tables_default;
  var init_tables = __esm({
    "src/tables.js"() {
      tables_default = {
        "SPACE_TOKENS": [
          "\\ ",
          "\\,",
          "\\:",
          "\\;",
          "\\quad"
        ],
        "BINARY": [
          "\\Leftarrow",
          "\\Leftrightarrow",
          "\\Longleftrightarrow",
          "\\Longrightarrow",
          "\\Rightarrow",
          "\\approx",
          "\\ast",
          "\\bullet",
          "\\cap",
          "\\cdot",
          "\\circ",
          "\\cong",
          "\\cup",
          "\\div",
          "\\equiv",
          "\\geq",
          "\\geqslant",
          "\\gg",
          "\\in",
          "\\leftarrow",
          "\\leftrightarrow",
          "\\leq",
          "\\leqslant",
          "\\ll",
          "\\longrightarrow",
          "\\mapsto",
          "\\mp",
          "\\neq",
          "\\ni",
          "\\not\\subset",
          "\\notin",
          "\\nparallel",
          "\\parallel",
          "\\perp",
          "\\pm",
          "\\propto",
          "\\rightarrow",
          "\\setminus",
          "\\sim",
          "\\simeq",
          "\\subset",
          "\\subseteq",
          "\\supset",
          "\\supseteq",
          "\\times",
          "\\to",
          "\\vee",
          "\\wedge"
        ],
        "TALL": [
          "\\frac",
          "\\int",
          "\\iint",
          "\\iiint",
          "\\sum",
          "\\prod",
          "\\sqrt",
          "\\begin",
          "\\overline",
          "\\underbrace",
          "\\overbrace",
          "\\lim",
          "\\xrightarrow",
          "\\xleftarrow",
          "\\underset",
          "\\overset",
          "\\boxed",
          "\\widehat",
          "\\widetilde",
          "\\coprod",
          "\\bigcup",
          "\\bigcap"
        ],
        "FUNCTIONS": [
          "Pr",
          "arccos",
          "arcsin",
          "arctan",
          "arg",
          "cos",
          "cosh",
          "cot",
          "coth",
          "csc",
          "deg",
          "det",
          "dim",
          "exp",
          "gcd",
          "hom",
          "inf",
          "ker",
          "lg",
          "lim",
          "ln",
          "log",
          "max",
          "min",
          "mod",
          "sec",
          "sin",
          "sinh",
          "sup",
          "tan",
          "tanh"
        ],
        "FUNCTION_ALIASES": {
          "tg": "\\operatorname{tg}",
          "cotg": "\\operatorname{cotg}",
          "sgn": "\\operatorname{sgn}",
          "cosec": "\\operatorname{cosec}",
          "Re": "\\operatorname{Re}",
          "Im": "\\operatorname{Im}",
          "lg": "\\lg"
        },
        "SYMBOLS": {
          "177": "\\pm",
          "8723": "\\mp",
          "215": "\\times",
          "247": "\\div",
          "183": "\\cdot",
          "8901": "\\cdot",
          "8727": "\\ast",
          "8728": "\\circ",
          "8729": "\\bullet",
          "8226": "\\bullet",
          "8804": "\\leq",
          "8805": "\\geq",
          "8800": "\\neq",
          "8776": "\\approx",
          "8801": "\\equiv",
          "8764": "\\sim",
          "8771": "\\simeq",
          "8773": "\\cong",
          "8733": "\\propto",
          "8810": "\\ll",
          "8811": "\\gg",
          "10877": "\\leqslant",
          "10878": "\\geqslant",
          "8734": "\\infty",
          "8706": "\\partial",
          "8711": "\\nabla",
          "8704": "\\forall",
          "8707": "\\exists",
          "8708": "\\nexists",
          "8709": "\\emptyset",
          "8712": "\\in",
          "8713": "\\notin",
          "8715": "\\ni",
          "8834": "\\subset",
          "8835": "\\supset",
          "8838": "\\subseteq",
          "8839": "\\supseteq",
          "8836": "\\not\\subset",
          "8746": "\\cup",
          "8745": "\\cap",
          "8743": "\\wedge",
          "8744": "\\vee",
          "172": "\\neg",
          "8594": "\\rightarrow",
          "8592": "\\leftarrow",
          "8596": "\\leftrightarrow",
          "8658": "\\Rightarrow",
          "8656": "\\Leftarrow",
          "8660": "\\Leftrightarrow",
          "8593": "\\uparrow",
          "8595": "\\downarrow",
          "8614": "\\mapsto",
          "10230": "\\longrightarrow",
          "10233": "\\Longrightarrow",
          "10234": "\\Longleftrightarrow",
          "8736": "\\angle",
          "8869": "\\perp",
          "8741": "\\parallel",
          "8742": "\\nparallel",
          "9651": "\\triangle",
          "9633": "\\square",
          "8230": "\\ldots",
          "8943": "\\cdots",
          "8942": "\\vdots",
          "8945": "\\ddots",
          "8242": "'",
          "8243": "''",
          "176": "^{\\circ}",
          "8721": "\\sum",
          "8719": "\\prod",
          "8747": "\\int",
          "8730": "\\sqrt{}",
          "8722": "-",
          "8211": "-",
          "8212": "-",
          "8214": "\\|",
          "8739": "\\mid",
          "8740": "\\nmid",
          "8756": "\\therefore",
          "8757": "\\because",
          "8501": "\\aleph",
          "8467": "\\ell",
          "8463": "\\hbar",
          "8477": "\\mathbb{R}",
          "8469": "\\mathbb{N}",
          "8484": "\\mathbb{Z}",
          "8474": "\\mathbb{Q}",
          "8450": "\\mathbb{C}",
          "8224": "\\dagger",
          "8225": "\\ddagger",
          "9733": "\\star",
          "8868": "\\top",
          "8866": "\\vdash",
          "8855": "\\otimes",
          "8853": "\\oplus",
          "8726": "\\setminus",
          "8640": "\\rightharpoonup",
          "8637": "\\leftharpoondown",
          "8652": "\\rightleftharpoons",
          "8967": "\\frown",
          "9679": "\\bullet",
          "8407": "\\vec{}",
          "8802": "\\not\\equiv",
          "8817": "\\ngeq",
          "8816": "\\nleq"
        },
        "GREEK_LOWER": {
          "\u03B1": "\\alpha",
          "\u03B2": "\\beta",
          "\u03B3": "\\gamma",
          "\u03B4": "\\delta",
          "\u03B5": "\\epsilon",
          "\u03B6": "\\zeta",
          "\u03B7": "\\eta",
          "\u03B8": "\\theta",
          "\u03B9": "\\iota",
          "\u03BA": "\\kappa",
          "\u03BB": "\\lambda",
          "\u03BC": "\\mu",
          "\u03BD": "\\nu",
          "\u03BE": "\\xi",
          "\u03BF": "o",
          "\u03C0": "\\pi",
          "\u03C1": "\\rho",
          "\u03C2": "\\varsigma",
          "\u03C3": "\\sigma",
          "\u03C4": "\\tau",
          "\u03C5": "\\upsilon",
          "\u03C6": "\\phi",
          "\u03C7": "\\chi",
          "\u03C8": "\\psi",
          "\u03C9": "\\omega",
          "\u03F5": "\\varepsilon",
          "\u03D1": "\\vartheta",
          "\u03D5": "\\varphi",
          "\u03D6": "\\varpi",
          "\u03F1": "\\varrho"
        },
        "GREEK_UPPER": {
          "\u0393": "\\Gamma",
          "\u0394": "\\Delta",
          "\u0398": "\\Theta",
          "\u039B": "\\Lambda",
          "\u039E": "\\Xi",
          "\u03A0": "\\Pi",
          "\u03A3": "\\Sigma",
          "\u03A5": "\\Upsilon",
          "\u03A6": "\\Phi",
          "\u03A8": "\\Psi",
          "\u03A9": "\\Omega",
          "\u2206": "\\Delta"
        },
        "ASCII_ESCAPES": {
          "{": "\\{",
          "}": "\\}",
          "%": "\\%",
          "&": "\\&",
          "#": "\\#",
          "$": "\\$",
          "_": "\\_",
          "\\": "\\backslash ",
          "^": "\\hat{}",
          "~": "\\sim "
        },
        "SPACES": {
          "32": "\\ ",
          "8201": "\\,",
          "8194": "\\;",
          "8195": "\\quad ",
          "8197": "\\;",
          "8202": "\\,",
          "8198": "\\,",
          "160": "\\ ",
          "8200": "\\,",
          "8196": "\\;"
        },
        "FENCES": {
          "0": [
            "\\langle",
            "\\rangle"
          ],
          "1": [
            "(",
            ")"
          ],
          "2": [
            "\\{",
            "\\}"
          ],
          "3": [
            "[",
            "]"
          ],
          "4": [
            "|",
            "|"
          ],
          "5": [
            "\\|",
            "\\|"
          ],
          "6": [
            "\\lfloor",
            "\\rfloor"
          ],
          "7": [
            "\\lceil",
            "\\rceil"
          ],
          "8": [
            "[",
            "["
          ]
        },
        "BIG_OPS": {
          "15": "\\int",
          "16": "\\sum",
          "17": "\\prod",
          "18": "\\coprod",
          "19": "\\bigcup",
          "20": "\\bigcap",
          "21": "\\int",
          "22": "\\sum"
        },
        "TEXT_ESCAPES": {
          "{": "\\{",
          "}": "\\}",
          "%": "\\%",
          "&": "\\&",
          "#": "\\#",
          "$": "\\$",
          "_": "\\_",
          "\\": "\\textbackslash{}",
          "^": "\\^{}",
          "~": "\\~{}"
        },
        "EMBELLISHMENTS": {
          "2": "\\dot{%s}",
          "3": "\\ddot{%s}",
          "4": "\\dddot{%s}",
          "8": "\\tilde{%s}",
          "9": "\\hat{%s}",
          "11": "\\overrightarrow{%s}",
          "12": "\\overleftarrow{%s}",
          "13": "\\overleftrightarrow{%s}",
          "16": "\\overline{%s}",
          "17": "\\overline{%s}",
          "19": "\\overset{\\frown}{%s}",
          "20": "\\overset{\\smile}{%s}"
        },
        "NARY": {
          "\u2211": "\\sum",
          "\u220F": "\\prod",
          "\u2210": "\\coprod",
          "\u222B": "\\int",
          "\u222C": "\\iint",
          "\u222D": "\\iiint",
          "\u222E": "\\oint",
          "\u22C3": "\\bigcup",
          "\u22C2": "\\bigcap",
          "\u22C0": "\\bigwedge",
          "\u22C1": "\\bigvee"
        },
        "ACCENTS": {
          "\u0302": "\\hat",
          "\u0303": "\\tilde",
          "\u0307": "\\dot",
          "\u0308": "\\ddot",
          "\u20D7": "\\vec",
          "\u0305": "\\overline",
          "\xAF": "\\overline",
          "\u0301": "\\acute",
          "\u0300": "\\grave",
          "\u0306": "\\breve",
          "\u030C": "\\check",
          "\u2192": "\\vec",
          "^": "\\hat",
          "~": "\\tilde",
          "\u02C7": "\\check",
          "'": "\\dot"
        },
        "FENCE_CHARS": {
          "(": "(",
          ")": ")",
          "[": "[",
          "]": "]",
          "{": "\\{",
          "}": "\\}",
          "|": "|",
          "\u2016": "\\|",
          "\u27E8": "\\langle",
          "\u27E9": "\\rangle",
          "\u230A": "\\lfloor",
          "\u230B": "\\rfloor",
          "\u2308": "\\lceil",
          "\u2309": "\\rceil",
          "\u3008": "\\langle",
          "\u3009": "\\rangle",
          "": "."
        },
        "OMML_ESCAPES": {
          "{": "\\{",
          "}": "\\}",
          "%": "\\%",
          "&": "\\&",
          "#": "\\#",
          "$": "\\$",
          "_": "\\_",
          "\\": "\\backslash",
          "^": "\\hat{}",
          "~": "\\sim"
        }
      };
    }
  });

  // src/xml.js
  function unescapeXml(s) {
    return s.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-z]+);/g, (m, e3) => {
      if (e3[0] === "#") return String.fromCodePoint(e3[1] === "x" ? parseInt(e3.slice(2), 16) : parseInt(e3.slice(1), 10));
      return Object.prototype.hasOwnProperty.call(ENTITIES, e3) ? ENTITIES[e3] : m;
    });
  }
  function escapeXml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function parseXml(src) {
    const root = { name: "#root", attrs: {}, children: [] };
    const stack = [root];
    const re = /<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[^>]*>|<(\/?)([^\s/>]+)((?:\s+[^\s=/>]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>|([^<]+)/g;
    let m;
    while (m = re.exec(src)) {
      const top = stack[stack.length - 1];
      if (m[1] !== void 0) {
        top.children.push(m[1]);
        continue;
      }
      if (m[6] !== void 0) {
        top.children.push(unescapeXml(m[6]));
        continue;
      }
      if (m[3] === void 0) continue;
      if (m[2] === "/") {
        if (stack.length > 1) stack.pop();
        continue;
      }
      const attrs = {};
      m[4].replace(/([^\s=]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g, (_a8, k, v1, v2) => {
        attrs[k] = unescapeXml(v1 !== void 0 ? v1 : v2);
        return "";
      });
      const el = { name: m[3], attrs, children: [] };
      top.children.push(el);
      if (!m[5]) stack.push(el);
    }
    return root.children.find((c) => typeof c !== "string");
  }
  function textOf(el) {
    return el.children.map((c) => typeof c === "string" ? c : textOf(c)).join("");
  }
  function* descendants(el) {
    for (const c of elements(el)) {
      yield c;
      yield* __yieldStar(descendants(c));
    }
  }
  var ENTITIES, local, elements;
  var init_xml = __esm({
    "src/xml.js"() {
      ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
      local = (el) => el.name.split(":").pop();
      elements = (el) => el.children.filter((c) => typeof c !== "string");
    }
  });

  // src/latex2omml.js
  function nodesText(nodes) {
    return nodes.map((n) => n.k === "run" ? n.text : n.k === "group" ? nodesText(n.nodes) : "").join("");
  }
  function styled(nodes, sty, blackboard) {
    return nodes.map((n) => {
      if (n.k === "group") return __spreadProps(__spreadValues({}, n), { nodes: styled(n.nodes, sty, blackboard) });
      if (n.k !== "run") return n;
      if (blackboard) {
        const out = [...n.text].map((c) => has(BB, c) ? BB[c] : c).join("");
        return __spreadProps(__spreadValues({}, n), { text: out, sty: [...n.text].every((c) => has(BB, c)) ? "" : sty });
      }
      return __spreadProps(__spreadValues({}, n), { sty: n.sty === "nor" ? "nor" : sty });
    });
  }
  function bodyEnd(nodes, start, pending) {
    const isInt = pending.k === "pendNary" && SIDE_LIMITS.has(pending.op);
    let depth = 0;
    for (let j = start + 1; j < nodes.length; j++) {
      const n = nodes[j];
      const c = opChar(n);
      if (c === "(" || c === "[") depth++;
      else if (c === ")" || c === "]") depth = Math.max(0, depth - 1);
      if (depth > 0) continue;
      if (pending.k === "pendFunc" && (n.k === "pendFunc" || n.k === "pendNary") && j > start + 1) return j;
      if (pending.k === "pendNary" && n.k === "pendNary") return j;
      if (c && (REL.has(c) || SEP.has(c))) return j;
      if (!isInt && c && ADD.has(c) && j > start + 1) return j;
      if (pending.k === "pendFunc" && c && MUL.has(c)) return j;
      if (isInt && c === "d" && isLetterRun(nodes[j + 1])) return j + 2;
      if (isInt && n.k === "run" && n.sty === "p" && n.text === "d" && isLetterRun(nodes[j + 1])) return j + 2;
    }
    return nodes.length;
  }
  function resolve(nodes) {
    const out = [];
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.k === "pendNary" || n.k === "pendFunc") {
        const end = bodyEnd(nodes, i, n);
        const body = resolve(nodes.slice(i + 1, end));
        out.push(n.k === "pendNary" ? { k: "nary", op: n.op, sub: n.sub, sup: n.sup, e: body } : { k: "func", name: n.name, sub: n.sub, sup: n.sup, e: body });
        i = end - 1;
      } else if (n.k === "script" && n.base.k === "group" && !n.base.nodes.length && i + 1 < nodes.length) {
        out.push({ k: "sPre", sub: n.sub, sup: n.sup, e: [nodes[i + 1]] });
        i++;
      } else out.push(n);
    }
    return out;
  }
  function runXml(text, sty) {
    if (!text) return "";
    let pr = "";
    if (sty === "p") pr = val("sty", "p");
    else if (sty === "b") pr = val("sty", "b");
    else if (sty === "i") pr = val("sty", "i");
    else if (sty === "nor") pr = "<m:nor/>";
    else if (sty === "dbl") pr = val("scr", "double-struck");
    else if (sty === "scr") pr = val("scr", "script");
    else if (sty === "fra") pr = val("scr", "fraktur");
    return `<m:r>${pr ? `<m:rPr>${pr}</m:rPr>` : ""}${FONT}<m:t xml:space="preserve">${escapeXml(text)}</m:t></m:r>`;
  }
  function flatten(nodes, out = []) {
    for (const n of nodes) {
      if (n.k === "group") flatten(n.nodes, out);
      else out.push(n);
    }
    return out;
  }
  function seqXml(nodes) {
    const list3 = flatten(resolve(nodes));
    let xml = "", text = "", style = null;
    const flush = () => {
      if (text) xml += runXml(text, style);
      text = "";
      style = null;
    };
    for (const n of list3) {
      if (n.k === "run") {
        const blank = !n.text.trim();
        if (style !== null && (style !== n.sty || blank || !text.trim())) flush();
        style = n.sty;
        text += n.text;
        if (blank) flush();
      } else {
        flush();
        xml += nodeXml(n);
      }
    }
    flush();
    return xml;
  }
  function nodeXml(n) {
    switch (n.k) {
      case "f":
        return `<m:f>${n.noBar ? `<m:fPr>${val("type", "noBar")}</m:fPr>` : ""}${e("num", n.num)}${e("den", n.den)}</m:f>`;
      case "rad":
        return `<m:rad><m:radPr>${n.deg ? "" : val("degHide", "1")}</m:radPr>${e("deg", n.deg || [])}${e("e", n.e)}</m:rad>`;
      case "d": {
        const sep = n.sep ? val("sepChr", n.sep) : "";
        return `<m:d><m:dPr>${val("begChr", n.beg)}${sep}${val("endChr", n.end)}</m:dPr>${n.items.map((it) => e("e", it)).join("")}</m:d>`;
      }
      case "script":
        return scriptXml(n);
      case "sPre":
        return `<m:sPre>${e("sub", n.sub || [])}${e("sup", n.sup || [])}${e("e", n.e)}</m:sPre>`;
      case "nary": {
        const side = SIDE_LIMITS.has(n.op);
        const pr = val("chr", NARY_OPS[n.op]) + val("limLoc", side ? "subSup" : "undOvr") + (n.sub ? "" : val("subHide", "1")) + (n.sup ? "" : val("supHide", "1"));
        return `<m:nary><m:naryPr>${pr}</m:naryPr>${e("sub", n.sub || [])}${e("sup", n.sup || [])}${e("e", n.e)}</m:nary>`;
      }
      case "func": {
        const nameRun = [{ k: "run", text: n.name, sty: "p" }];
        let name;
        if (LIMIT_FUNCS.has(n.name) && (n.sub || n.sup)) {
          name = n.sub ? `<m:limLow>${e("e", nameRun)}${e("lim", n.sub)}</m:limLow>` : `<m:limUpp>${e("e", nameRun)}${e("lim", n.sup)}</m:limUpp>`;
        } else if (n.sub || n.sup) name = scriptXml({ base: nameRun[0], sub: n.sub, sup: n.sup });
        else name = seqXml(nameRun);
        return `<m:func><m:fName>${name}</m:fName>${e("e", n.e)}</m:func>`;
      }
      case "lim":
        return `<m:${n.upp ? "limUpp" : "limLow"}>${e("e", n.e)}${e("lim", n.lim)}</m:${n.upp ? "limUpp" : "limLow"}>`;
      case "acc":
        return `<m:acc><m:accPr>${val("chr", n.chr)}</m:accPr>${e("e", n.e)}</m:acc>`;
      case "bar":
        return `<m:bar><m:barPr>${val("pos", n.pos)}</m:barPr>${e("e", n.e)}</m:bar>`;
      case "groupChr":
        return `<m:groupChr><m:groupChrPr>${val("chr", n.chr)}${val("pos", n.pos)}${val("vertJc", n.pos === "top" ? "bot" : "top")}</m:groupChrPr>${e("e", n.e)}</m:groupChr>`;
      case "box":
        return `<m:borderBox>${e("e", n.e)}</m:borderBox>`;
      case "m":
        return `<m:m>${n.rows.map((r) => `<m:mr>${r.map((c) => e("e", c)).join("")}</m:mr>`).join("")}</m:m>`;
      case "eqArr":
        return `<m:eqArr>${n.rows.map((r) => e("e", r[0])).join("")}</m:eqArr>`;
      default:
        throw new LatexError("internal: " + n.k);
    }
  }
  function scriptXml(n) {
    const base = n.base.k === "run" || n.base.k === void 0 ? [n.base] : [n.base];
    const only = flatten(resolve(base))[0];
    if (only && only.k === "groupChr") {
      if (only.pos === "top" && n.sup && !n.sub) return `<m:limUpp>${e("e", [only])}${e("lim", n.sup)}</m:limUpp>`;
      if (only.pos === "bot" && n.sub && !n.sup) return `<m:limLow>${e("e", [only])}${e("lim", n.sub)}</m:limLow>`;
    }
    let baseNodes = base;
    if (only && only.k === "run" && [...only.text].length > 1 && !only.sty) {
      const chars = [...only.text];
      const last = chars.pop();
      return seqXml([{ k: "run", text: chars.join(""), sty: only.sty }]) + scriptXml({ base: { k: "run", text: last, sty: only.sty }, sub: n.sub, sup: n.sup });
    }
    if (n.sup && n.sup.length === 1 && n.sup[0].k === "run" && n.sup[0].text === "\u2218") n = __spreadProps(__spreadValues({}, n), { sup: [{ k: "run", text: "\xB0", sty: "" }] });
    baseNodes = base;
    if (n.sub && n.sup) return `<m:sSubSup>${e("e", baseNodes)}${e("sub", n.sub)}${e("sup", n.sup)}</m:sSubSup>`;
    if (n.sub) return `<m:sSub>${e("e", baseNodes)}${e("sub", n.sub)}</m:sSub>`;
    return `<m:sSup>${e("e", baseNodes)}${e("sup", n.sup)}</m:sSup>`;
  }
  function latexToOmml(latex, { display = false } = {}) {
    const p2 = new Parser(latex.trim());
    const rows = [];
    for (; ; ) {
      rows.push(p2.seq());
      p2.ws();
      if (p2.i >= p2.s.length) break;
      if (p2.peekCs() === BS) {
        p2.i += 2;
        continue;
      }
      throw new LatexError("unexpected " + p2.s.slice(p2.i, p2.i + 8));
    }
    const inner = rows.length > 1 ? nodeXml({ k: "eqArr", rows: rows.map((r) => [r]) }) : seqXml(rows[0]);
    const math = `<m:oMath>${inner}</m:oMath>`;
    return display ? `<m:oMathPara>${math}</m:oMathPara>` : math;
  }
  function latexToTree(latex) {
    const p2 = new Parser(latex.trim());
    const rows = [];
    for (; ; ) {
      rows.push(p2.seq());
      p2.ws();
      if (p2.i >= p2.s.length) break;
      if (p2.peekCs() === BS) {
        p2.i += 2;
        continue;
      }
      throw new LatexError("unexpected " + p2.s.slice(p2.i, p2.i + 8));
    }
    return { rows };
  }
  var LatexError, BS, has, cp, CMD, GREEK, SPACE_CMD, NARY_OPS, SIDE_LIMITS, LIMIT_FUNCS, FUNCS, ACCENT, LONG_ARROW, BB, FENCE_NAMES, REL, ADD, SEP, MUL, Parser, opChar, isLetterRun, FONT, val, e, normalizeNodes;
  var init_latex2omml = __esm({
    "src/latex2omml.js"() {
      init_tables();
      init_xml();
      LatexError = class extends Error {
      };
      BS = "\\";
      has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
      cp = (n) => String.fromCodePoint(n);
      CMD = {};
      for (const [code, latex] of Object.entries(tables_default.SYMBOLS)) {
        const m = /^\\([A-Za-z]+)$/.exec(latex);
        if (m && !has(CMD, m[1])) CMD[m[1]] = cp(Number(code));
      }
      Object.assign(CMD, {
        cdot: "\u22C5",
        bullet: "\u2219",
        circ: "\u2218",
        ast: "\u2217",
        ldots: "\u2026",
        dots: "\u2026",
        cdots: "\u22EF",
        to: "\u2192",
        le: "\u2264",
        ge: "\u2265",
        ne: "\u2260",
        gets: "\u2190",
        land: "\u2227",
        lor: "\u2228",
        lnot: "\xAC",
        iff: "\u21D4",
        implies: "\u21D2",
        lbrace: "{",
        rbrace: "}",
        langle: "\u27E8",
        rangle: "\u27E9",
        lfloor: "\u230A",
        rfloor: "\u230B",
        lceil: "\u2308",
        rceil: "\u2309",
        prime: "\u2032",
        degree: "\xB0",
        Box: "\u25A1",
        square: "\u25A1",
        oint: "\u222E",
        neq: "\u2260",
        vert: "|",
        Vert: "\u2016",
        mid: "\u2223",
        sim: "\u223C",
        setminus: "\u2216",
        backslash: "\\",
        emptyset: "\u2205",
        varnothing: "\u2205",
        triangle: "\u25B3",
        lVert: "\u2016",
        rVert: "\u2016",
        Re: "Re",
        Im: "Im"
      });
      GREEK = {};
      for (const map of [tables_default.GREEK_LOWER, tables_default.GREEK_UPPER]) for (const [ch, name] of Object.entries(map)) {
        const m = /^\\([A-Za-z]+)$/.exec(name);
        if (m && !has(GREEK, m[1])) GREEK[m[1]] = ch;
      }
      SPACE_CMD = { ",": "\u2009", ";": "\u2005", ":": "\u2005", " ": " ", quad: "\u2003", qquad: "\u2003\u2003", "!": "" };
      NARY_OPS = {
        sum: "\u2211",
        prod: "\u220F",
        coprod: "\u2210",
        int: "\u222B",
        iint: "\u222C",
        iiint: "\u222D",
        oint: "\u222E",
        bigcup: "\u22C3",
        bigcap: "\u22C2",
        bigwedge: "\u22C0",
        bigvee: "\u22C1"
      };
      SIDE_LIMITS = /* @__PURE__ */ new Set(["int", "iint", "iiint", "oint"]);
      LIMIT_FUNCS = /* @__PURE__ */ new Set(["lim", "max", "min", "sup", "inf"]);
      FUNCS = new Set(tables_default.FUNCTIONS);
      ACCENT = {
        hat: "\u0302",
        tilde: "\u0303",
        dot: "\u0307",
        ddot: "\u0308",
        vec: "\u20D7",
        check: "\u030C",
        acute: "\u0301",
        grave: "\u0300",
        breve: "\u0306",
        widehat: "\u0302",
        widetilde: "\u0303",
        bar: "\u0305",
        overrightarrow: "\u20D7",
        dddot: "\u20DB"
      };
      LONG_ARROW = { overleftarrow: "\u2190", overleftrightarrow: "\u2194" };
      BB = { R: "\u211D", N: "\u2115", Z: "\u2124", Q: "\u211A", C: "\u2102", H: "\u210D", P: "\u2119" };
      FENCE_NAMES = { "(": "(", ")": ")", "[": "[", "]": "]", "|": "|", ".": "", "/": "/", "<": "\u27E8", ">": "\u27E9" };
      REL = /* @__PURE__ */ new Set([..."=<>", ..."\u2264\u2265\u2260\u2248\u2261\u223C\u2243\u2245\u221D\u226A\u226B\u2A7D\u2A7E\u2208\u2209\u220B\u2282\u2283\u2286\u2287\u2192\u2190\u2194\u21D2\u21D0\u21D4\u27F6\u27F9\u27FA\u21A6\u2225\u22A5\u2226"]);
      ADD = /* @__PURE__ */ new Set([..."+-\u2212\xB1\u2213"]);
      SEP = /* @__PURE__ */ new Set([",", ";"]);
      MUL = /* @__PURE__ */ new Set([..."\xD7\u22C5\xB7\xF7\u2217"]);
      Parser = class _Parser {
        constructor(src) {
          this.s = src;
          this.i = 0;
        }
        ws() {
          while (this.i < this.s.length && /\s/.test(this.s[this.i])) this.i++;
        }
        eof() {
          this.ws();
          return this.i >= this.s.length;
        }
        peekCs() {
          this.ws();
          if (this.s[this.i] !== BS) return null;
          const m = /^\\([A-Za-z]+|[\s\S])/.exec(this.s.slice(this.i));
          return m ? m[1] : null;
        }
        atStop() {
          this.ws();
          const c = this.s[this.i];
          if (c === void 0 || c === "}" || c === "&") return true;
          const cs = this.peekCs();
          return cs === BS || cs === "right" || cs === "end" || cs === "middle";
        }
        seq() {
          const nodes = [];
          while (!this.atStop()) nodes.push(this.item());
          return nodes;
        }
        item() {
          this.ws();
          let atom = this.atom();
          let sub4 = null, sup2 = null;
          for (; ; ) {
            this.ws();
            const c = this.s[this.i];
            if (c === "^" && !sup2) {
              this.i++;
              sup2 = this.arg(true);
            } else if (c === "_" && !sub4) {
              this.i++;
              sub4 = this.arg(true);
            } else break;
          }
          if (atom.k === "pendNary" || atom.k === "pendFunc") {
            atom.sub = sub4;
            atom.sup = sup2;
            return atom;
          }
          if (sub4 || sup2) return { k: "script", base: atom, sub: sub4, sup: sup2 };
          return atom;
        }
        arg(inScript = false) {
          this.ws();
          if (this.s[this.i] === "{") {
            this.i++;
            const nodes = this.seq();
            this.expect("}");
            return inScript ? this.degree(nodes) : nodes;
          }
          if (this.i >= this.s.length) throw new LatexError("missing argument");
          const atom = this.atom();
          return inScript ? this.degree([atom]) : [atom];
        }
        degree(nodes) {
          return nodes;
        }
        expect(ch) {
          this.ws();
          if (this.s[this.i] !== ch) throw new LatexError(`expected ${ch}`);
          this.i++;
        }
        raw() {
          this.ws();
          if (this.s[this.i] !== "{") throw new LatexError("expected {");
          let depth = 0;
          const start = this.i + 1;
          for (; this.i < this.s.length; this.i++) {
            const c = this.s[this.i];
            if (c === BS) {
              this.i++;
              continue;
            }
            if (c === "{") depth++;
            else if (c === "}" && --depth === 0) {
              const text = this.s.slice(start, this.i);
              this.i++;
              return text;
            }
          }
          throw new LatexError("unbalanced braces");
        }
        run(text, sty = "") {
          return { k: "run", text, sty };
        }
        delim() {
          this.ws();
          const c = this.s[this.i];
          if (c === BS) {
            const cs = this.peekCs();
            this.i += 1 + cs.length;
            if (cs === "{" || cs === "lbrace") return "{";
            if (cs === "}" || cs === "rbrace") return "}";
            if (cs === "|" || cs === "Vert" || cs === "lVert" || cs === "rVert") return "\u2016";
            if (has(CMD, cs) && /^[\u2308\u2309\u230a\u230b\u27e8\u27e9]$/.test(CMD[cs])) return CMD[cs];
            if (cs === "vert") return "|";
            throw new LatexError("delimiter \\" + cs);
          }
          this.i++;
          if (has(FENCE_NAMES, c)) return FENCE_NAMES[c];
          throw new LatexError("delimiter " + c);
        }
        atom() {
          this.ws();
          const c = this.s[this.i];
          if (c === "{") {
            this.i++;
            const nodes = this.seq();
            this.expect("}");
            return { k: "group", nodes };
          }
          if (c === "^" || c === "_") return { k: "group", nodes: [] };
          if (c === "'") {
            this.i++;
            return this.run("\u2032");
          }
          if (c === "~") {
            this.i++;
            return this.run("\xA0");
          }
          if (c === "$") {
            this.i++;
            return { k: "group", nodes: [] };
          }
          if (c !== BS) {
            const ch = String.fromCodePoint(this.s.codePointAt(this.i));
            this.i += ch.length;
            if ((ch === "," || ch === ";") && /\s/.test(this.s[this.i] || "")) return this.run(ch + " ");
            return this.run(ch === "-" ? "\u2212" : ch);
          }
          const m = /^\\([A-Za-z]+|[\s\S])/.exec(this.s.slice(this.i));
          const name = m[1];
          this.i += m[0].length;
          return this.command(name);
        }
        command(name) {
          if (name === "frac" || name === "dfrac" || name === "tfrac") return { k: "f", num: this.arg(), den: this.arg() };
          if (name === "binom" || name === "dbinom") return { k: "d", beg: "(", end: ")", items: [[{ k: "f", num: this.arg(), den: this.arg(), noBar: true }]] };
          if (name === "sqrt") {
            this.ws();
            let deg = null;
            if (this.s[this.i] === "[") {
              const close = this.s.indexOf("]", this.i);
              if (close < 0) throw new LatexError("unbalanced [");
              const inner = new _Parser(this.s.slice(this.i + 1, close));
              deg = inner.seq();
              this.i = close + 1;
            }
            return { k: "rad", deg, e: this.arg() };
          }
          if (name === "left") {
            const beg = this.delim();
            const items = [this.seq()];
            let sep = null;
            while (this.peekCs() === "middle") {
              this.i += 7;
              sep = this.delim();
              items.push(this.seq());
            }
            if (this.peekCs() !== "right") throw new LatexError("missing \\right");
            this.i += 6;
            const end = this.delim();
            return { k: "d", beg, end, sep, items };
          }
          if (name === "begin") return this.environment(this.raw().trim());
          if (name === "text" || name === "textrm" || name === "mbox" || name === "textnormal") {
            return this.run(this.raw().replace(/\\([%&#$_{}])/g, "$1").replace(/\\ /g, " "), "nor");
          }
          if (name === "mathrm" || name === "operatorname" || name === "mathbf" || name === "boldsymbol" || name === "mathit" || name === "bm" || name === "mathbb" || name === "mathcal" || name === "mathsf" || name === "mathtt" || name === "mathfrak" || name === "textbf" || name === "mathscr") {
            const body = this.arg();
            if (name === "operatorname") return { k: "pendFunc", name: nodesText(body), plain: true };
            const sty = { mathrm: "p", mathbf: "b", boldsymbol: "b", bm: "b", textbf: "b", mathit: "i", mathsf: "p", mathtt: "p", mathbb: "dbl", mathcal: "scr", mathfrak: "fra", mathscr: "scr" }[name];
            return { k: "group", nodes: styled(body, sty, name === "mathbb") };
          }
          if (has(NARY_OPS, name)) return { k: "pendNary", op: name, sub: null, sup: null };
          if (FUNCS.has(name)) return { k: "pendFunc", name, plain: true, sub: null, sup: null };
          if (name === "overline") return { k: "bar", pos: "top", e: this.arg() };
          if (name === "underline") return { k: "bar", pos: "bot", e: this.arg() };
          if (name === "overbrace") return { k: "groupChr", pos: "top", chr: "\u23DE", e: this.arg() };
          if (name === "underbrace") return { k: "groupChr", pos: "bot", chr: "\u23DF", e: this.arg() };
          if (has(LONG_ARROW, name)) return { k: "groupChr", pos: "top", chr: LONG_ARROW[name], e: this.arg() };
          if (has(ACCENT, name)) return { k: "acc", chr: ACCENT[name], e: this.arg() };
          if (name === "boxed" || name === "fbox") return { k: "box", e: this.arg() };
          if (name === "overset" || name === "stackrel") {
            const lim = this.arg();
            return { k: "lim", upp: true, lim, e: this.arg() };
          }
          if (name === "underset") {
            const lim = this.arg();
            return { k: "lim", upp: false, lim, e: this.arg() };
          }
          if (name === "xrightarrow" || name === "xleftarrow") {
            this.ws();
            let bottom = null;
            if (this.s[this.i] === "[") {
              const close = this.s.indexOf("]", this.i);
              if (close < 0) throw new LatexError("unbalanced [");
              bottom = new _Parser(this.s.slice(this.i + 1, close)).seq();
              this.i = close + 1;
            }
            const top = this.arg();
            let node3 = { k: "lim", upp: true, lim: top, e: [this.run(name === "xrightarrow" ? "\u2192" : "\u2190")] };
            if (bottom) node3 = { k: "lim", upp: false, lim: bottom, e: [node3] };
            return node3;
          }
          if (name === "not") {
            const next = this.atom();
            const text = next.k === "run" ? next.text : "";
            if (!text) throw new LatexError("\\not");
            return this.run(text + "\u0338");
          }
          if (name === "displaystyle" || name === "textstyle" || name === "scriptstyle" || name === "limits" || name === "nolimits" || name === "bigl" || name === "bigr" || name === "Big" || name === "big" || name === "Bigl" || name === "Bigr") return { k: "group", nodes: [] };
          if (name === "hspace" || name === "vspace" || name === "phantom") {
            this.raw();
            return { k: "group", nodes: [] };
          }
          if (has(SPACE_CMD, name)) return this.run(SPACE_CMD[name]);
          if (has(GREEK, name)) return this.run(GREEK[name]);
          if (has(CMD, name)) return this.run(CMD[name]);
          if (has(tables_default.ASCII_ESCAPES, name)) return this.run(name);
          if (name === "|") return this.run("\u2016");
          if (name === "\\") throw new LatexError("unexpected \\\\");
          throw new LatexError("unsupported command \\" + name);
        }
        environment(env) {
          let spec = "";
          if (env === "array") spec = this.raw();
          const rows = [[]];
          for (; ; ) {
            rows[rows.length - 1].push(this.seq());
            this.ws();
            if (this.s[this.i] === "&") {
              this.i++;
              continue;
            }
            const cs = this.peekCs();
            if (cs === BS) {
              this.i += 2;
              if (this.s[this.i] === "[") {
                const close = this.s.indexOf("]", this.i);
                if (close > 0) this.i = close + 1;
              }
              rows.push([]);
              continue;
            }
            if (cs === "end") {
              this.i += 4;
              const e3 = this.raw().trim();
              if (e3 !== env) throw new LatexError(`\\end{${e3}} does not match \\begin{${env}}`);
              break;
            }
            throw new LatexError("unterminated environment");
          }
          if (rows.length > 1 && rows[rows.length - 1].length === 1 && !rows[rows.length - 1][0].length) rows.pop();
          const cols = Math.max(...rows.map((r) => r.length));
          const table3 = { k: cols === 1 && (env === "cases" || /^l*$/.test(spec) || env === "aligned" || env === "align") ? "eqArr" : "m", rows };
          const fences = { cases: ["{", ""], pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["{", "}"], vmatrix: ["|", "|"], Vmatrix: ["\u2016", "\u2016"] };
          if (has(fences, env)) return { k: "d", beg: fences[env][0], end: fences[env][1], items: [[table3]] };
          if (!["array", "matrix", "aligned", "align", "gathered", "smallmatrix"].includes(env)) throw new LatexError("environment " + env);
          return table3;
        }
      };
      opChar = (n) => n && n.k === "run" && !n.sty && [...n.text].length === 1 ? n.text : null;
      isLetterRun = (n) => n && (n.k === "run" && /^[A-Za-zÀ-ɏͰ-ϿЀ-ӿḀ-ỿ]$/u.test(n.text) || n.k === "script" && n.base.k === "run" && /^[A-Za-zÀ-ɏͰ-ϿЀ-ӿḀ-ỿ]$/u.test(n.base.text));
      FONT = '<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/></w:rPr>';
      val = (name, v) => `<m:${name} m:val="${escapeXml(v)}"/>`;
      e = (tag, nodes) => `<m:${tag}>${seqXml(nodes || [])}</m:${tag}>`;
      normalizeNodes = (nodes) => flatten(resolve(nodes));
    }
  });

  // src/mtefchars.js
  var CHARS;
  var init_mtefchars = __esm({
    "src/mtefchars.js"() {
      CHARS = { "32": { "face": 1, "c8": null, "n": 972, "share": 100 }, "33": { "face": 2, "c8": null, "n": 247, "share": 100 }, "34": { "face": 2, "c8": null, "n": 9, "share": 100 }, "36": { "face": 2, "c8": null, "n": 11, "share": 100 }, "37": { "face": 2, "c8": null, "n": 323, "share": 86 }, "39": { "face": 2, "c8": null, "n": 569, "share": 98 }, "40": { "face": 2, "c8": null, "n": 1353, "share": 97 }, "41": { "face": 2, "c8": null, "n": 1391, "share": 96 }, "42": { "face": 2, "c8": null, "n": 29, "share": 100 }, "43": { "face": 6, "c8": 43, "n": 22993, "share": 100 }, "44": { "face": 2, "c8": null, "n": 11386, "share": 100 }, "46": { "face": 2, "c8": null, "n": 8529, "share": 99 }, "47": { "face": 1, "c8": null, "n": 534, "share": 68 }, "48": { "face": 8, "c8": null, "n": 27839, "share": 100 }, "49": { "face": 8, "c8": null, "n": 32308, "share": 100 }, "50": { "face": 8, "c8": null, "n": 39897, "share": 100 }, "51": { "face": 8, "c8": null, "n": 17719, "share": 100 }, "52": { "face": 8, "c8": null, "n": 9829, "share": 100 }, "53": { "face": 8, "c8": null, "n": 10552, "share": 100 }, "54": { "face": 8, "c8": null, "n": 5769, "share": 100 }, "55": { "face": 8, "c8": null, "n": 3447, "share": 100 }, "56": { "face": 8, "c8": null, "n": 3544, "share": 100 }, "57": { "face": 8, "c8": null, "n": 3180, "share": 100 }, "58": { "face": 2, "c8": null, "n": 1511, "share": 99 }, "59": { "face": 2, "c8": null, "n": 20915, "share": 99 }, "60": { "face": 6, "c8": 60, "n": 1219, "share": 100 }, "61": { "face": 6, "c8": 61, "n": 35869, "share": 100 }, "62": { "face": 6, "c8": 62, "n": 1147, "share": 100 }, "63": { "face": 2, "c8": null, "n": 96, "share": 100 }, "65": { "face": 3, "c8": null, "n": 13461, "share": 100 }, "66": { "face": 3, "c8": null, "n": 11111, "share": 100 }, "67": { "face": 3, "c8": null, "n": 6800, "share": 100 }, "68": { "face": 3, "c8": null, "n": 3481, "share": 100 }, "69": { "face": 3, "c8": null, "n": 541, "share": 97 }, "70": { "face": 3, "c8": null, "n": 1350, "share": 100 }, "71": { "face": 3, "c8": null, "n": 601, "share": 100 }, "72": { "face": 3, "c8": null, "n": 890, "share": 96 }, "73": { "face": 3, "c8": null, "n": 2524, "share": 100 }, "74": { "face": 3, "c8": null, "n": 166, "share": 100 }, "75": { "face": 3, "c8": null, "n": 339, "share": 98 }, "76": { "face": 3, "c8": null, "n": 276, "share": 100 }, "77": { "face": 3, "c8": null, "n": 4177, "share": 99 }, "78": { "face": 3, "c8": null, "n": 1251, "share": 98 }, "79": { "face": 3, "c8": null, "n": 4709, "share": 100 }, "80": { "face": 3, "c8": null, "n": 6537, "share": 100 }, "81": { "face": 3, "c8": null, "n": 1069, "share": 100 }, "82": { "face": 3, "c8": null, "n": 1008, "share": 100 }, "83": { "face": 3, "c8": null, "n": 3024, "share": 100 }, "84": { "face": 3, "c8": null, "n": 377, "share": 97 }, "85": { "face": 3, "c8": null, "n": 32, "share": 100 }, "86": { "face": 3, "c8": null, "n": 306, "share": 98 }, "87": { "face": 3, "c8": null, "n": 11, "share": 73 }, "88": { "face": 3, "c8": null, "n": 54, "share": 96 }, "89": { "face": 3, "c8": null, "n": 42, "share": 100 }, "90": { "face": 3, "c8": null, "n": 4, "share": 100 }, "91": { "face": 2, "c8": null, "n": 87, "share": 80 }, "92": { "face": 2, "c8": null, "n": 138, "share": 100 }, "93": { "face": 2, "c8": null, "n": 57, "share": 86 }, "97": { "face": 3, "c8": null, "n": 6719, "share": 94 }, "98": { "face": 3, "c8": null, "n": 4657, "share": 100 }, "99": { "face": 3, "c8": null, "n": 3779, "share": 74 }, "100": { "face": 3, "c8": null, "n": 4821, "share": 54 }, "101": { "face": 3, "c8": null, "n": 727, "share": 91 }, "102": { "face": 3, "c8": null, "n": 4927, "share": 100 }, "103": { "face": 3, "c8": null, "n": 749, "share": 92 }, "104": { "face": 3, "c8": null, "n": 693, "share": 71 }, "105": { "face": 2, "c8": null, "n": 2194, "share": 71 }, "106": { "face": 3, "c8": null, "n": 165, "share": 100 }, "107": { "face": 3, "c8": null, "n": 2127, "share": 91 }, "108": { "face": 2, "c8": null, "n": 1263, "share": 96 }, "109": { "face": 3, "c8": null, "n": 5674, "share": 71 }, "110": { "face": 3, "c8": null, "n": 2667, "share": 53 }, "111": { "face": 2, "c8": null, "n": 974, "share": 77 }, "112": { "face": 3, "c8": null, "n": 280, "share": 99 }, "113": { "face": 3, "c8": null, "n": 50, "share": 96 }, "114": { "face": 3, "c8": null, "n": 253, "share": 98 }, "115": { "face": 2, "c8": null, "n": 1925, "share": 60 }, "116": { "face": 3, "c8": null, "n": 4715, "share": 96 }, "117": { "face": 3, "c8": null, "n": 456, "share": 98 }, "118": { "face": 3, "c8": null, "n": 504, "share": 98 }, "119": { "face": 1, "c8": null, "n": 3, "share": 67 }, "120": { "face": 3, "c8": null, "n": 33493, "share": 99 }, "121": { "face": 3, "c8": null, "n": 10989, "share": 100 }, "122": { "face": 3, "c8": null, "n": 5434, "share": 100 }, "123": { "face": 2, "c8": null, "n": 38, "share": 100 }, "124": { "face": 2, "c8": null, "n": 1363, "share": 97 }, "125": { "face": 2, "c8": null, "n": 38, "share": 100 }, "126": { "face": 2, "c8": null, "n": 3, "share": 100 }, "160": { "face": 2, "c8": null, "n": 1283, "share": 87 }, "176": { "face": 6, "c8": 176, "n": 377, "share": 99 }, "177": { "face": 6, "c8": 177, "n": 181, "share": 100 }, "183": { "face": 2, "c8": null, "n": 10, "share": 100 }, "208": { "face": 3, "c8": null, "n": 18, "share": 89 }, "215": { "face": 6, "c8": 180, "n": 174, "share": 100 }, "224": { "face": 1, "c8": null, "n": 16, "share": 94 }, "225": { "face": 1, "c8": null, "n": 25, "share": 100 }, "247": { "face": 6, "c8": 184, "n": 24, "share": 100 }, "272": { "face": 3, "c8": null, "n": 26, "share": 96 }, "273": { "face": 3, "c8": null, "n": 8, "share": 100 }, "916": { "face": 5, "c8": 68, "n": 1288, "share": 53 }, "937": { "face": 5, "c8": 87, "n": 45, "share": 96 }, "945": { "face": 4, "c8": 97, "n": 1299, "share": 100 }, "946": { "face": 4, "c8": 98, "n": 274, "share": 100 }, "947": { "face": 4, "c8": 103, "n": 30, "share": 100 }, "948": { "face": 4, "c8": 100, "n": 36, "share": 100 }, "952": { "face": 4, "c8": 113, "n": 26, "share": 100 }, "956": { "face": 4, "c8": 109, "n": 7, "share": 86 }, "959": { "face": 1, "c8": null, "n": 11, "share": 91 }, "960": { "face": 4, "c8": 112, "n": 757, "share": 99 }, "963": { "face": 4, "c8": 115, "n": 45, "share": 100 }, "966": { "face": 4, "c8": 106, "n": 63, "share": 100 }, "8211": { "face": 2, "c8": null, "n": 49, "share": 100 }, "8230": { "face": 6, "c8": 188, "n": 269, "share": 74 }, "8242": { "face": 6, "c8": 162, "n": 119, "share": 98 }, "8465": { "face": 6, "c8": 193, "n": 13, "share": 100 }, "8467": { "face": 11, "c8": 108, "n": 16, "share": 100 }, "8469": { "face": 11, "c8": 165, "n": 27, "share": 96 }, "8477": { "face": 11, "c8": 161, "n": 794, "share": 86 }, "8484": { "face": 11, "c8": 162, "n": 50, "share": 90 }, "8594": { "face": 6, "c8": 174, "n": 969, "share": 100 }, "8596": { "face": 6, "c8": 171, "n": 6, "share": 100 }, "8658": { "face": 6, "c8": 222, "n": 1972, "share": 100 }, "8660": { "face": 6, "c8": 219, "n": 2356, "share": 100 }, "8704": { "face": 6, "c8": 34, "n": 289, "share": 100 }, "8707": { "face": 6, "c8": 36, "n": 22, "share": 100 }, "8709": { "face": 6, "c8": 198, "n": 18, "share": 100 }, "8712": { "face": 6, "c8": 206, "n": 1362, "share": 100 }, "8713": { "face": 6, "c8": 207, "n": 37, "share": 100 }, "8721": { "face": 6, "c8": 229, "n": 15, "share": 100 }, "8722": { "face": 6, "c8": 45, "n": 25328, "share": 100 }, "8723": { "face": 11, "c8": 109, "n": 10, "share": 100 }, "8726": { "face": -1, "c8": 130, "n": 3, "share": 100 }, "8727": { "face": 6, "c8": 42, "n": 76, "share": 100 }, "8728": { "face": 11, "c8": 111, "n": 55, "share": 100 }, "8734": { "face": 6, "c8": 165, "n": 1900, "share": 99 }, "8739": { "face": -1, "c8": null, "n": 87, "share": 100 }, "8741": { "face": -1, "c8": null, "n": 3, "share": 100 }, "8745": { "face": 6, "c8": 199, "n": 503, "share": 100 }, "8746": { "face": 6, "c8": 200, "n": 39, "share": 100 }, "8747": { "face": 6, "c8": 242, "n": 2293, "share": 100 }, "8771": { "face": 11, "c8": 59, "n": 13, "share": 100 }, "8776": { "face": 6, "c8": 187, "n": 397, "share": 100 }, "8800": { "face": 6, "c8": 185, "n": 537, "share": 99 }, "8801": { "face": 6, "c8": 186, "n": 45, "share": 100 }, "8804": { "face": 6, "c8": 163, "n": 892, "share": 100 }, "8805": { "face": 6, "c8": 179, "n": 454, "share": 100 }, "8834": { "face": 6, "c8": 204, "n": 17, "share": 100 }, "8869": { "face": 6, "c8": 94, "n": 222, "share": 100 }, "8901": { "face": 6, "c8": 215, "n": 953, "share": 100 }, "8942": { "face": 11, "c8": 77, "n": 9, "share": 100 }, "8943": { "face": 11, "c8": 76, "n": 9, "share": 100 }, "9651": { "face": 11, "c8": 86, "n": 5, "share": 100 }, "59791": { "face": 11, "c8": 103, "n": 12, "share": 100 }, "63232": { "face": -1, "c8": 109, "n": 12, "share": 100 } };
    }
  });

  // src/mathtype-template.js
  var STYLES, STREAMS, TEMPLATE_OLE;
  var init_mathtype_template = __esm({
    "src/mathtype-template.js"() {
      STYLES = { "times": { "prefix": "BQEABwREU01UNwAAE1dpbkFsbEJhc2ljQ29kZVBhZ2VzABEFVGltZXMgTmV3IFJvbWFuABEDU3ltYm9sABEFQ291cmllciBOZXcAEQRNVCBFeHRyYQASAAghL0WPRC9BUPQQD0dfQVDyHx5BUPQVD0EA9EX0JfSPQl9BAPQQD0NfQQD0j0X0Kl9I9I9BAPQQD0D0j0F/SPQQD0EqX0RfRfRfRfRfQQ8MAQABAAECAgICAAIAAQEBAAMAAQAEAAAK", "header": "HAAAAAIAd8LJAAAAS4fCAMDPTwAMAKsAmQfGcg==" }, "palatino": { "prefix": "BQEABwREU01UNwABE1dpbkFsbEJhc2ljQ29kZVBhZ2VzABEFUGFsYXRpbm8gTGlub3R5cGUAEQNFdWNsaWQgU3ltYm9sABEDU3ltYm9sABEFVGltZXMgTmV3IFJvbWFuABEFQ291cmllciBOZXcAEQRFdWNsaWQgRXh0cmEAEgAIIS9Fj0QvQVD0EA9HX0FQ8h8eQVD0FQ9BAPRF9CX0j0JfQQD0EA9DX0EA8h8gpfIKJfSPIfQQD0EA9A9I9Bf0j0EA8hpfRF9F9F9F9F9BDwwBAAEAAQICAgIAAwAEAQQABQAEAAYAAAo=", "header": "HAAAAAIAGsPyAAAAS4f/AFTROgAMAMAAVBxS5w==" } };
      STREAMS = { "Ole": "AQAAAggAAAAAAAAAAAAAAAAAAAA=", "CompObj": "AQD+/wMKAAD/////A84CAAAAAADAAAAAAAAARhYAAABNYXRoVHlwZSA3LjAgRXF1YXRpb24ADAAAAE1hdGhUeXBlIEVGAA8AAABFcXVhdGlvbi5EU01UNAD0ObJxAAAAAAAAAAAAAAAA", "ObjInfo": "AAADAAQA" };
      TEMPLATE_OLE = "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP7/CQAGAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAEAAAAgAAAAEAAAD+////AAAAAAAAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9////BAAAAP7////+/////v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1IAbwBvAHQAIABFAG4AdAByAHkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAUA//////////8CAAAAA84CAAAAAADAAAAAAAAARgAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAACAAAAAAAAAQBPAGwAZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAgH///////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAABAEMAbwBtAHAATwBiAGoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgACAQEAAAADAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAABpAAAAAAAAAAMATwBiAGoASQBuAGYAbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAIB/////wQAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAYAAAAAAAAA/v///wIAAAD+/////v///wUAAAAGAAAABwAAAP7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8BAAACCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD+/wMKAAD/////A84CAAAAAADAAAAAAAAARhYAAABNYXRoVHlwZSA3LjAgRXF1YXRpb24ADAAAAE1hdGhUeXBlIEVGAA8AAABFcXVhdGlvbi5EU01UNAD0ObJxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAIAd8LJAAAAS4fCAMDPTwAMAKsAmQfGcgUBAAcERFNNVDcAABNXaW5BbGxCYXNpY0NvZGVQYWdlcwARBVRpbWVzIE5ldyBSb21hbgARA1N5bWJvbAARBUNvdXJpZXIgTmV3ABEETVQgRXh0cmEAEgAIIS9Fj0QvQVD0EA9HX0FQ8h8eQVD0FQ9BAPRF9CX0j0JfQQD0EA9DX0EA9I9F9CpfSPSPQQD0EA9A9I9Bf0j0EA9BKl9EX0X0X0X0X0EPDAEAAQABAgICAgACAAEBAQADAAEABAAACgEAAgCDeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUAcQB1AGEAdABpAG8AbgAgAE4AYQB0AGkAdgBlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAIA////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAOUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    }
  });

  // src/mtef-writer.js
  function charRec(face2, code, c8 = null, funcStart = false) {
    const opt = (c8 !== null ? 4 : 0) | (funcStart ? 2 : 0);
    return [2, opt, 128 + face2, ...word(code), ...c8 !== null ? [c8] : []];
  }
  function pairFences(nodes) {
    const flat2 = [];
    for (const n of nodes) {
      if (n.k === "run" && n.sty !== "nor" && [...n.text].length > 1) for (const ch of n.text) flat2.push({ k: "run", text: ch, sty: n.sty });
      else flat2.push(n);
    }
    const stack = [{ open: null, items: [] }];
    const isRun2 = (n, set) => n.k === "run" && n.sty !== "nor" && has2(set, n.text);
    for (const n of flat2) {
      const top = stack[stack.length - 1];
      if (isRun2(n, OPEN)) stack.push({ open: n, items: [] });
      else if (isRun2(n, CLOSE) && stack.length > 1 && PAIRS.has(top.open.text + n.text)) {
        stack.pop();
        stack[stack.length - 1].items.push({ k: "d", beg: top.open.text, end: n.text, items: [top.items] });
      } else top.items.push(n);
    }
    while (stack.length > 1) {
      const t = stack.pop();
      stack[stack.length - 1].items.push(t.open, ...t.items);
    }
    return stack[0].items;
  }
  function runs(w, text, sty) {
    let first = true;
    const chars = [...text];
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i], cp2 = ch.codePointAt(0);
      if (ch === " " && (chars[i - 1] === "," || chars[i - 1] === ";")) continue;
      if (cp2 === 8242 || cp2 === 8243 || cp2 === 8244) {
        if (w.prime(cp2 - 8241)) continue;
      }
      if (sty === "nor") {
        w.char(TEXT, cp2);
        continue;
      }
      if (has2(SPACE_CODE, ch)) {
        w.char(SPACE, SPACE_CODE[ch]);
        continue;
      }
      if (cp2 === 32 || cp2 === 160) {
        w.char(TEXT, 32);
        continue;
      }
      const isDigit2 = cp2 >= 48 && cp2 <= 57;
      const isAsciiLetter = cp2 >= 65 && cp2 <= 90 || cp2 >= 97 && cp2 <= 122;
      if (isAsciiLetter) {
        if (sty === "p") w.char(FUNCTION, cp2, null, first);
        else w.char(sty === "b" ? VECTOR : VARIABLE, cp2);
        first = false;
        continue;
      }
      if (isDigit2) {
        w.char(sty === "b" ? VECTOR : NUMBER, cp2);
        continue;
      }
      const learned = CHARS[cp2];
      if (!learned) fail(`no MathType encoding for U+${cp2.toString(16)}`);
      w.char(learned.face, cp2, learned.c8);
    }
  }
  function seq(w, nodes) {
    const trimmed = normalizeNodes(nodes).map((n) => n.k === "run" && n.sty !== "nor" ? __spreadProps(__spreadValues({}, n), { text: n.text.replace(/([,;]) /g, "$1") }) : n);
    for (const n of pairFences(trimmed)) node(w, n);
  }
  function node(w, n) {
    switch (n.k) {
      case "run":
        return runs(w, n.text, n.sty);
      case "f":
        return w.template(11, n.noBar ? 6 : 0, () => {
          slotLine(w, n.num);
          slotLine(w, n.den);
        });
      case "rad":
        return w.template(10, n.deg ? 1 : 0, () => {
          slotLine(w, n.e);
          w.sizeRecord(w.nested());
          w.within(w.size, () => {
            if (n.deg) slotLine(w, n.deg);
            else w.nullLine();
          });
        });
      case "script": {
        node(w, n.base);
        return script(w, n.sub, n.sup);
      }
      case "d":
        return fence(w, n);
      case "nary":
        return nary(w, n);
      case "func": {
        const name = [...n.name];
        const lim = LIMITS.has(n.name) && (n.sub || n.sup);
        if (lim) {
          if (n.sup) fail("limit with upper bound");
          w.template(23, 16, () => {
            w.line(() => name.forEach((c, i) => w.char(FUNCTION, c.codePointAt(0), null, i === 0)));
            w.sizeRecord(w.nested());
            w.within(w.size, () => {
              slotLine(w, n.sub);
              w.nullLine();
            });
          });
        } else {
          name.forEach((c, i) => w.char(FUNCTION, c.codePointAt(0), null, i === 0));
          if (n.sub || n.sup) script(w, n.sub, n.sup);
        }
        return seq(w, n.e);
      }
      case "acc":
        if (n.chr === "\u20D7") return w.template(31, 2, () => {
          slotLine(w, n.e);
          w.char(EXPAND, 8407);
        });
        if (n.chr === "\u0302") return w.template(33, 0, () => {
          slotLine(w, n.e);
          w.char(EXPAND, 770);
        });
        return fail("accent U+" + n.chr.codePointAt(0).toString(16));
      case "bar":
        return w.template(n.pos === "bot" ? 12 : 13, n.pos === "bot" ? 1 : 0, () => slotLine(w, n.e));
      case "box":
        return w.template(37, 30, () => slotLine(w, n.e));
      case "m":
        return matrix(w, n);
      case "eqArr":
        return pile(w, n.rows.map((r) => r[0]), 1);
      default:
        return fail("unsupported " + n.k);
    }
  }
  function script(w, sub4, sup2) {
    const sel = sub4 && sup2 ? 29 : sub4 ? 27 : 28;
    w.template(sel, 0, () => {
      w.sizeRecord(w.nested());
      w.within(w.size, () => {
        if (sub4) slotLine(w, sub4);
        else w.nullLine();
        if (sup2) slotLine(w, sup2);
        else if (sel === 27) w.nullLine();
      });
    });
  }
  function pile(w, rows, halign) {
    w.sync();
    w.raw(4, 0, halign, 1);
    rows.forEach((r) => slotLine(w, r));
    w.raw(0);
  }
  function matrix(w, n) {
    const rows = n.rows.length, cols = Math.max(...n.rows.map((r) => r.length));
    const bytes = (count) => Math.ceil((count + 1) * 2 / 8);
    w.sync();
    w.raw(5, 0, 1, 1, 1, rows, cols, ...new Array(bytes(rows)).fill(0), ...new Array(bytes(cols)).fill(0));
    for (const r of n.rows) for (let c = 0; c < cols; c++) slotLine(w, r[c] || []);
    w.raw(0);
  }
  function fence(w, n) {
    if (n.items.length !== 1) fail("fence with separators");
    const key = n.beg + n.end;
    const flat2 = normalizeNodes(n.items[0]);
    const f = FENCES[key] || INTERVALS[key];
    if (!f) fail("fence " + key);
    const asPile = flat2.length === 1 && (flat2[0].k === "eqArr" || flat2[0].k === "m" && Math.max(...flat2[0].rows.map((r) => r.length)) === 1);
    w.template(f[0], f[1], () => {
      if (asPile) pile(w, flat2[0].rows.map((r) => r[0]), flat2[0].k === "eqArr" ? 1 : 2);
      else content(w, flat2);
      if (f[2] !== null) w.char(EXPAND, f[2]);
      if (f[3] !== null) w.char(EXPAND, f[3]);
    });
  }
  function nary(w, n) {
    if (n.op !== "int" && n.op !== "sum") fail("operator " + n.op);
    const limits = n.sub || n.sup;
    const sel = n.op === "int" ? 15 : 22, variation = n.op === "int" ? limits ? 113 : 1 : 112;
    w.template(sel, variation, () => {
      if (n.op === "sum") w.nullLine();
      else w.line(() => {
      });
      w.sizeRecord(w.nested());
      w.within(w.size, () => {
        if (limits) {
          slotLine(w, n.sub || []);
          slotLine(w, n.sup || []);
        } else {
          w.nullLine();
          w.nullLine();
        }
      });
      w.sizeRecord(SYM);
      w.within(SYM, () => {
        if (n.op === "int") w.char(SYMBOL, 8747, 242);
        else w.line(() => w.char(SYMBOL, 8721, 229));
      });
    });
    w.expect = n.op === "int" || true ? w.expect : w.expect;
    seq(w, n.e);
  }
  function latexToRecords(latex) {
    const { rows } = latexToTree(latex);
    const w = new Writer();
    if (rows.length > 1) pile(w, rows, 1);
    else content(w, rows[0]);
    return w.out;
  }
  function sizeBytes(pt) {
    const v = Math.round(Math.min(72, Math.max(6, pt)) * 2) / 2;
    const [i, f] = String(v).split(".");
    const nib = [2, ...(i.length < 2 ? "0" + i : i).split("").map(Number), ...f ? [10, Number(f)] : [], 15];
    const out = [];
    for (let k = 0; k < nib.length; k += 2) out.push(nib[k] << 4 | nib[k + 1]);
    return out;
  }
  function patchPrefix(prefix, { fontName: fontName2, baseName, size }) {
    let out = Array.from(prefix);
    if (fontName2 && fontName2 !== baseName) {
      const find = [...baseName].map((c) => c.charCodeAt(0));
      const at2 = out.findIndex((_, i) => find.every((b, k) => out[i + k] === b) && out[i + find.length] === 0);
      if (at2 >= 0) out.splice(at2, find.length, ...[...fontName2].map((c) => c.charCodeAt(0)));
    }
    if (size) {
      const at2 = out.findIndex((b, i) => b === 18 && out[i + 1] === 0 && out[i + 2] === 8);
      if (at2 >= 0) {
        let end = at2 + 3;
        while (out[end] !== void 0 && (out[end] & 15) !== 15 && out[end] >> 4 !== 15) end++;
        out.splice(at2 + 3, end + 1 - (at2 + 3), ...sizeBytes(size));
      }
    }
    return Uint8Array.from(out);
  }
  function latexToEquationStream(latex, { style = "times", inline = true, font = null, size = 0 } = {}) {
    let records;
    try {
      records = latexToRecords(latex);
    } catch (e3) {
      if (e3 instanceof LatexError) throw new MtefWriteError(e3.message);
      throw e3;
    }
    const f = MT_FONTS[font] || MT_FONTS[style] || MT_FONTS.times;
    const st = STYLES[f.base] || STYLES.times;
    const baseName = f.base === "palatino" ? "Palatino Linotype" : "Times New Roman";
    const prefix = patchPrefix(unb64(st.prefix), { fontName: f.name, baseName, size });
    prefix[11] = inline ? 1 : 0;
    const mtef = new Uint8Array(prefix.length + records.length + 1);
    mtef.set(prefix, 0);
    mtef.set(records, prefix.length);
    mtef[mtef.length - 1] = 0;
    const header = unb64(st.header).slice();
    new DataView(header.buffer).setUint32(8, mtef.length, true);
    const out = new Uint8Array(header.length + mtef.length);
    out.set(header, 0);
    out.set(mtef, header.length);
    return out;
  }
  var MtefWriteError, fail, unb64, SUB, SUB2, FULL, SYM, TEXT, FUNCTION, VARIABLE, SYMBOL, VECTOR, NUMBER, EXPAND, SPACE, SPACE_CODE, word, has2, FENCES, INTERVALS, OPEN, CLOSE, PAIRS, LIMITS, Writer, content, slotLine, MT_FONTS;
  var init_mtef_writer = __esm({
    "src/mtef-writer.js"() {
      init_latex2omml();
      init_mtefchars();
      init_mathtype_template();
      MtefWriteError = class extends Error {
      };
      fail = (m) => {
        throw new MtefWriteError(m);
      };
      unb64 = (s) => {
        const bin = atob(s);
        const out = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
        return out;
      };
      SUB = 11;
      SUB2 = 12;
      FULL = 10;
      SYM = 13;
      TEXT = 1;
      FUNCTION = 2;
      VARIABLE = 3;
      SYMBOL = 6;
      VECTOR = 7;
      NUMBER = 8;
      EXPAND = 22;
      SPACE = 24;
      SPACE_CODE = { "\u2009": 61186, "\u2005": 61188, "\u2002": 61188, "\u2003": 61189 };
      word = (v) => [v & 255, v >> 8];
      has2 = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
      FENCES = {
        // key = begin+end, [selector, variation, left piece, right piece]
        "()": [1, 3, 40, 41],
        "[]": [3, 3, 91, 93],
        "{}": [2, 3, 123, 125],
        "||": [4, 3, 60423, 60424],
        "(": [1, 1, 40, null],
        ")": [1, 2, null, 41],
        "{": [2, 1, 123, null],
        "}": [2, 2, null, 125],
        "[": [3, 1, 91, null],
        "]": [3, 2, null, 93]
      };
      INTERVALS = { "[)": [9, 18, 91, 41], "(]": [9, 48, 40, 93] };
      OPEN = { "(": 1, "[": 1, "{": 1 };
      CLOSE = { ")": 1, "]": 1, "}": 1 };
      PAIRS = /* @__PURE__ */ new Set(["()", "[]", "{}", "[)", "(]"]);
      LIMITS = /* @__PURE__ */ new Set(["lim", "max", "min", "sup", "inf"]);
      Writer = class {
        constructor() {
          this.out = [];
          this.size = FULL;
          this.expect = FULL;
          this.lastChar = -1;
        }
        raw(...b) {
          this.out.push(...b);
        }
        sync() {
          if (this.size !== this.expect) {
            this.out.push(this.expect);
            this.size = this.expect;
          }
        }
        obj(bytes) {
          this.sync();
          this.lastChar = -1;
          this.out.push(...bytes);
        }
        within(expect, fn) {
          const prev = this.expect;
          this.expect = expect;
          fn();
          this.expect = prev;
        }
        sizeRecord(rec) {
          this.out.push(rec);
          this.size = rec;
        }
        nested() {
          return this.expect === FULL ? SUB : SUB2;
        }
        char(face2, code, c8 = null, funcStart = false) {
          this.sync();
          this.lastChar = this.out.length;
          this.out.push(...charRec(face2, code, c8, funcStart));
        }
        prime(count) {
          const p2 = this.lastChar;
          if (p2 < 0 || p2 + 5 > this.out.length || this.out[p2] !== 2 || this.out[p2 + 1] & 1 || this.out[p2 + 2] === 128 + EXPAND) return false;
          this.out[p2 + 1] |= 1;
          this.out.push(6, 0, { 1: 5, 2: 6, 3: 18 }[count], 0);
          return true;
        }
        line(fn, expect = this.expect) {
          this.sync();
          this.lastChar = -1;
          this.out.push(1, 0);
          this.within(expect, fn);
          this.out.push(0);
        }
        nullLine() {
          this.sync();
          this.lastChar = -1;
          this.out.push(1, 1);
        }
        template(sel, variation, fn) {
          this.sync();
          this.lastChar = -1;
          this.out.push(3, 0, sel, variation, 0);
          fn();
          this.out.push(0);
        }
      };
      content = (w, nodes) => w.line(() => seq(w, nodes));
      slotLine = (w, nodes) => {
        if (normalizeNodes(nodes).length) content(w, nodes);
        else w.line(() => {
        });
      };
      MT_FONTS = {
        times: { label: "Times New Roman (c\xF3 ch\xE2n)", base: "times", name: "Times New Roman", family: "times" },
        palatino: { label: "Palatino Linotype (c\xF3 ch\xE2n)", base: "palatino", name: "Palatino Linotype", family: "palatino" },
        cambriamath: { label: "Cambria Math (h\u1ED7 tr\u1EE3 to\xE1n \u0111\u1EA7y \u0111\u1EE7, c\xF3 s\u1EB5n c\xF9ng Office)", base: "times", name: "Cambria Math", family: "cambriamath" },
        cambria: { label: "Cambria (c\xF3 ch\xE2n)", base: "times", name: "Cambria", family: "cambria" },
        stix: { label: "STIX Two Math (c\xF3 ch\xE2n, ki\u1EC3u Times; c\u1EA7n c\xE0i font)", base: "times", name: "STIX Two Math", family: "stix" },
        lm: { label: "Latin Modern Math (ki\u1EC3u LaTeX; c\u1EA7n c\xE0i font)", base: "times", name: "Latin Modern Math", family: "lm" },
        ncm: { label: "New Computer Modern Math (ki\u1EC3u LaTeX; c\u1EA7n c\xE0i font)", base: "times", name: "New Computer Modern Math", family: "lm" },
        xits: { label: "XITS Math (c\xF3 ch\xE2n, ki\u1EC3u Times; c\u1EA7n c\xE0i font)", base: "times", name: "XITS Math", family: "stix" },
        libertinus: { label: "Libertinus Math (c\xF3 ch\xE2n; c\u1EA7n c\xE0i font)", base: "times", name: "Libertinus Math", family: "libertinus" },
        pagella: { label: "TeX Gyre Pagella Math (ki\u1EC3u Palatino; c\u1EA7n c\xE0i font)", base: "palatino", name: "TeX Gyre Pagella Math", family: "pagella" },
        sans: { label: "Arial (kh\xF4ng ch\xE2n)", base: "times", name: "Arial", family: "sans" },
        fira: { label: "Fira Math (kh\xF4ng ch\xE2n; c\u1EA7n c\xE0i font)", base: "times", name: "Fira Math", family: "fira" },
        noto: { label: "Noto Sans Math (kh\xF4ng ch\xE2n; c\u1EA7n c\xE0i font)", base: "times", name: "Noto Sans Math", family: "noto" }
      };
    }
  });

  // src/word-io.js
  var word_io_exports = {};
  __export(word_io_exports, {
    hasWord: () => hasWord,
    insertAtEnd: () => insertAtEnd,
    openAsNewDocument: () => openAsNewDocument,
    readBody: () => readBody,
    readCursorContext: () => readCursorContext,
    readParagraphs: () => readParagraphs,
    readSelection: () => readSelection,
    replaceBody: () => replaceBody,
    replaceSelection: () => replaceSelection,
    selectParagraph: () => selectParagraph,
    selectionFontSize: () => selectionFontSize,
    selectionParagraphCount: () => selectionParagraphCount,
    writeParagraphs: () => writeParagraphs
  });
  async function run(fn) {
    return Word.run(fn);
  }
  async function readBody() {
    return run(async (context) => {
      const ox = context.document.body.getOoxml();
      const paras = context.document.body.paragraphs;
      paras.load("items");
      await context.sync();
      return { pkg: ox.value, paragraphCount: paras.items.length };
    });
  }
  async function selectionParagraphCount() {
    return run(async (context) => {
      const paras = context.document.getSelection().paragraphs;
      paras.load("items");
      await context.sync();
      return paras.items.length;
    });
  }
  async function readSelection() {
    return run(async (context) => {
      const sel = context.document.getSelection();
      const ox = sel.getOoxml();
      const paras = sel.paragraphs;
      paras.load("items");
      await context.sync();
      return { pkg: ox.value, paragraphCount: paras.items.length };
    });
  }
  async function readCursorContext() {
    return run(async (context) => {
      const sel = context.document.getSelection();
      const selOx = sel.getOoxml();
      const paras = sel.paragraphs;
      paras.load("items");
      await context.sync();
      const para2 = paras.items[0];
      const paraOx = para2 ? para2.getOoxml() : null;
      let beforeOx = null;
      try {
        if (para2) beforeOx = para2.getRange("Start").expandTo(sel.getRange("Start")).getOoxml();
      } catch (e3) {
        beforeOx = null;
      }
      await context.sync();
      return { selPkg: selOx.value, paraPkg: paraOx ? paraOx.value : null, beforePkg: beforeOx ? beforeOx.value : null };
    });
  }
  async function selectionFontSize() {
    return run(async (context) => {
      const font = context.document.getSelection().font;
      font.load("size");
      await context.sync();
      return Number(font.size) || 0;
    });
  }
  async function replaceSelection(pkg) {
    return run(async (context) => {
      const sel = context.document.getSelection();
      sel.insertOoxml(pkg, "Replace");
      await context.sync();
    });
  }
  async function readParagraphs(scope, onProgress = () => {
  }) {
    return run(async (context) => {
      const coll = scope.kind === "selection" ? context.document.getSelection().paragraphs : context.document.body.paragraphs;
      coll.load("items");
      await context.sync();
      const idx = scope.kind === "indexes" ? scope.indexes : coll.items.map((_p, i) => i);
      const out = [];
      for (let i = 0; i < idx.length; i += BATCH) {
        const slice = idx.slice(i, i + BATCH);
        const calls = slice.map((k) => coll.items[k].getOoxml());
        await context.sync();
        slice.forEach((k, j) => out.push({ index: k, pkg: calls[j].value }));
        onProgress(Math.min(i + BATCH, idx.length), idx.length);
      }
      return out;
    });
  }
  async function writeParagraphs(scope, items, mode, onProgress = () => {
  }) {
    return run(async (context) => {
      const coll = scope.kind === "selection" ? context.document.getSelection().paragraphs : context.document.body.paragraphs;
      coll.load("items");
      const all = context.document.body.paragraphs;
      all.load("items");
      await context.sync();
      const before = all.items.length;
      for (let i = 0; i < items.length; i += BATCH) {
        for (const it of items.slice(i, i + BATCH)) {
          const p2 = coll.items[it.index];
          const target = mode === "paragraph" ? p2 : p2.getRange("Content");
          target.insertOoxml(it.pkg, "Replace");
        }
        await context.sync();
        onProgress(Math.min(i + BATCH, items.length), items.length);
      }
      const again = context.document.body.paragraphs;
      again.load("items");
      await context.sync();
      return { before, after: again.items.length };
    });
  }
  async function selectParagraph(index) {
    return run(async (context) => {
      const paras = context.document.body.paragraphs;
      paras.load("items");
      await context.sync();
      if (paras.items[index]) paras.items[index].select();
      await context.sync();
    });
  }
  async function insertAtEnd(pkg) {
    return run(async (context) => {
      context.document.body.insertOoxml(pkg, "End");
      await context.sync();
    });
  }
  async function replaceBody(pkg) {
    return run(async (context) => {
      context.document.body.insertOoxml(pkg, "Replace");
      await context.sync();
    });
  }
  async function openAsNewDocument(pkg, { footerPkg = null } = {}) {
    return run(async (context) => {
      const doc = context.application.createDocument();
      doc.body.insertOoxml(pkg, "Replace");
      await context.sync();
      if (footerPkg) {
        try {
          doc.sections.getFirst().getFooter("Primary").insertOoxml(footerPkg, "Replace");
          await context.sync();
        } catch (e3) {
        }
      }
      doc.open();
      await context.sync();
    });
  }
  var BATCH, hasWord;
  var init_word_io = __esm({
    "src/word-io.js"() {
      BATCH = 25;
      hasWord = () => typeof Word !== "undefined" && typeof Office !== "undefined";
    }
  });

  // taskpane/mt-settings.js
  async function surroundingPt(fallback = 12) {
    try {
      const v = await selectionFontSize();
      return v > 0 ? v : fallback;
    } catch (e3) {
      return fallback;
    }
  }
  async function mtOptions({ withFont = true } = {}) {
    const size = state.size === "auto" ? await surroundingPt() : Number(state.size);
    return { font: withFont ? state.font : null, size, vector: state.picture !== "png", display: state.layout === "classic" };
  }
  function mountMtSettings(root, { fontRow = true, onChange } = {}) {
    root.classList.add("mt-settings");
    root.innerHTML = (fontRow ? `<label class="field"><span>Ki\u1EC3u ch\u1EEF</span><select data-mt="font">${Object.entries(MT_FONTS).map(([k, f]) => `<option value="${k}">${f.label}</option>`).join("")}</select></label>` : "") + (fontRow ? `<label class="field"><span>Ki\u1EC3u hi\u1EC3n th\u1ECB</span><select data-mt="layout"><option value="classic">C\u1ED5 \u0111i\u1EC3n: c\u1EE1 l\u1EDBn nh\u01B0 ri\xEAng d\xF2ng</option><option value="compact">G\u1ECDn: nh\u1ECF theo d\xF2ng ch\u1EEF</option></select></label>` : "") + (fontRow ? `<label class="field"><span>\u1EA2nh</span><select data-mt="picture"><option value="emf">Vector EMF (n\xE9t)</option><option value="png">\u1EA2nh PNG</option></select></label>` : "") + `<label class="field"><span>C\u1EE1 ch\u1EEF</span><select data-mt="size">${SIZES.map((s) => `<option value="${s}">${s === "auto" ? "Theo v\u0103n b\u1EA3n (t\u1EF1 \u0111\u1ED9ng)" : s + " pt"}</option>`).join("")}<option value="custom">S\u1ED1 kh\xE1c\u2026</option></select><input type="number" data-mt-custom min="4" max="200" step="0.5" placeholder="pt" style="width:70px;margin-left:6px" hidden></label>` + (fontRow ? '<div class="hint">Ki\u1EC3u ch\u1EEF c\xF3 t\xE1c d\u1EE5ng khi m\u1EDF l\u1EA1i b\u1EB1ng MathType; font ghi \u201Cc\u1EA7n c\xE0i font\u201D ph\u1EA3i c\xF3 tr\xEAn m\xE1y m\u1EDF t\xE0i li\u1EC7u.</div>' : "");
    const sync = () => document.querySelectorAll(".mt-settings select").forEach((el) => {
      const v = String(state[el.dataset.mt]);
      if (el.dataset.mt !== "size") {
        el.value = v;
        return;
      }
      const custom = !SIZES.includes(v) || customOpen;
      el.value = custom ? "custom" : v;
      const num3 = el.parentNode.querySelector("[data-mt-custom]");
      if (num3) {
        num3.hidden = !custom;
        if (custom && document.activeElement !== num3) num3.value = SIZES.includes(v) ? "" : v;
      }
    });
    let customOpen = false;
    root.addEventListener("input", (ev) => {
      const num3 = ev.target.closest("[data-mt-custom]");
      if (!num3) return;
      const n = parseFloat(String(num3.value).replace(",", "."));
      if (!(n >= 4 && n <= 200)) return;
      state.size = String(n);
      save();
      document.querySelectorAll(".mt-settings [data-mt-custom]").forEach((o) => {
        if (o !== num3) o.value = num3.value;
      });
      if (onChange) onChange();
    });
    root.addEventListener("change", (ev) => {
      const el = ev.target.closest("select[data-mt]");
      if (!el) return;
      if (el.dataset.mt === "size" && el.value === "custom") {
        customOpen = true;
        sync();
        const num3 = el.parentNode.querySelector("[data-mt-custom]");
        if (num3) num3.focus();
        return;
      }
      customOpen = false;
      state[el.dataset.mt] = el.value;
      save();
      sync();
      if (onChange) onChange();
    });
    sync();
  }
  var KEY, SIZES, state, save, classicLayout, mtConvertOptions, figurePt;
  var init_mt_settings = __esm({
    "taskpane/mt-settings.js"() {
      init_mtef_writer();
      init_word_io();
      KEY = "texcraft.mt";
      SIZES = ["auto", "10", "10.5", "11", "12", "13", "14"];
      state = { font: "times", size: "auto", picture: "emf", layout: "classic" };
      try {
        Object.assign(state, JSON.parse(localStorage.getItem(KEY) || "{}"));
      } catch (e3) {
      }
      save = () => {
        try {
          localStorage.setItem(KEY, JSON.stringify(state));
        } catch (e3) {
        }
      };
      classicLayout = () => state.layout === "classic";
      mtConvertOptions = () => ({ font: state.font, size: state.size === "auto" ? "auto" : Number(state.size), vector: state.picture !== "png", display: state.layout === "classic" });
      figurePt = () => state.size === "auto" ? surroundingPt() : Promise.resolve(Number(state.size));
    }
  });

  // src/mathrender.js
  var mathrender_exports = {};
  __export(mathrender_exports, {
    FAMILIES: () => FAMILIES,
    charAdvance: () => charAdvance,
    renderLatex: () => renderLatex,
    svgToPng: () => svgToPng
  });
  function approxWidth(ch, italic) {
    if (/\s/.test(ch)) return 0.25;
    if (/[0-9]/.test(ch)) return 0.5;
    if (/[ilj.,;:'!|()[\]]/.test(ch)) return 0.3;
    if (/[mwMW]/.test(ch)) return 0.8;
    if (/[A-Z]/.test(ch)) return italic ? 0.62 : 0.68;
    if (/[a-z]/.test(ch)) return 0.48;
    if (BINARY.has(ch)) return 0.78;
    return 0.65;
  }
  function measure(ch, fs, italic) {
    try {
      if (typeof document !== "undefined") {
        canvasCtx = canvasCtx || document.createElement("canvas").getContext("2d");
        canvasCtx.font = `${italic ? "italic " : ""}${fs}px ${MATHFONT}`;
        return canvasCtx.measureText(ch).width;
      }
    } catch (e3) {
    }
    return approxWidth(ch, italic) * fs;
  }
  function hbox(parts) {
    let w = 0, a = 0, d = 0;
    for (const p2 of parts) {
      w += p2.w;
      a = Math.max(a, p2.a);
      d = Math.max(d, p2.d);
    }
    return { w, a, d, draw: (x, y) => {
      let cx = x;
      return parts.map((p2) => {
        const s = p2.draw(cx, y);
        cx += p2.w;
        return s;
      }).join("");
    } };
  }
  function glyph(text, fs, { italic = false, bold = false } = {}) {
    const w = [...text].reduce((s, c) => s + measure(c, fs, italic), 0);
    return {
      w,
      a: fs * 0.72,
      d: fs * 0.22,
      draw: (x, y) => `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" font-size="${fs}" font-family="${MATHFONT}"${italic ? ' font-style="italic"' : ""}${bold ? ' font-weight="bold"' : ""}>${esc2(text)}</text>`
    };
  }
  function runBox(text, sty, fs, noSpaceFirst) {
    const parts = [];
    const chars = [...text];
    chars.forEach((ch, i) => {
      const letter = /[A-Za-zÀ-ɏͰ-ϿЀ-ӿḀ-ỿ]/u.test(ch);
      const italic = letter && sty !== "p" && sty !== "nor" && !/[Ͱ-Ͽ]/.test(ch) ? true : letter && /[α-ω]/.test(ch) && sty !== "p";
      const bold = sty === "b";
      const binary = BINARY.has(ch) && sty !== "nor" && !(noSpaceFirst && i === 0);
      if (binary) parts.push(kern(fs * 0.22));
      parts.push(glyph(ch, fs, { italic, bold }));
      if (binary) parts.push(kern(fs * 0.22));
      if ((ch === "," || ch === ";") && chars[i + 1] !== " ") parts.push(kern(fs * 0.17));
    });
    return hbox(parts);
  }
  function line(x1, y1, x2, y2, sw4) {
    return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="#000" stroke-width="${sw4}"/>`;
  }
  function stretchy(kind, h, d, fs) {
    const w = Math.max(fs * 0.34, h * 0.14);
    const total = h + d;
    return {
      w,
      a: h,
      d,
      draw: (x, y) => {
        const top = y - h, bot = y + d, mid3 = (top + bot) / 2, sw4 = Math.max(0.6, fs * 0.06);
        const L = x + w * 0.2, R = x + w * 0.85;
        let p2 = "";
        switch (kind) {
          case "(":
            p2 = `<path d="M${R} ${top} Q${L - 1} ${mid3} ${R} ${bot}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
            break;
          case ")":
            p2 = `<path d="M${L} ${top} Q${R + 1} ${mid3} ${L} ${bot}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
            break;
          case "[":
            p2 = `<path d="M${R} ${top} H${L} V${bot} H${R}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
            break;
          case "]":
            p2 = `<path d="M${L} ${top} H${R} V${bot} H${L}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
            break;
          case "{":
            p2 = `<path d="M${R} ${top} Q${x + w * 0.5} ${top} ${x + w * 0.5} ${top + total * 0.2} V${mid3 - total * 0.06} Q${x + w * 0.5} ${mid3} ${L} ${mid3} Q${x + w * 0.5} ${mid3} ${x + w * 0.5} ${mid3 + total * 0.06} V${bot - total * 0.2} Q${x + w * 0.5} ${bot} ${R} ${bot}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
            break;
          case "}":
            p2 = `<path d="M${L} ${top} Q${x + w * 0.5} ${top} ${x + w * 0.5} ${top + total * 0.2} V${mid3 - total * 0.06} Q${x + w * 0.5} ${mid3} ${R} ${mid3} Q${x + w * 0.5} ${mid3} ${x + w * 0.5} ${mid3 + total * 0.06} V${bot - total * 0.2} Q${x + w * 0.5} ${bot} ${L} ${bot}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
            break;
          case "|":
            p2 = line(x + w / 2, top, x + w / 2, bot, sw4);
            break;
          case "\u2016":
            p2 = line(x + w * 0.35, top, x + w * 0.35, bot, sw4) + line(x + w * 0.7, top, x + w * 0.7, bot, sw4);
            break;
          case "\u27E8":
            p2 = `<path d="M${R} ${top} L${L} ${mid3} L${R} ${bot}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
            break;
          case "\u27E9":
            p2 = `<path d="M${L} ${top} L${R} ${mid3} L${L} ${bot}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
            break;
          default:
            p2 = "";
        }
        return p2;
      }
    };
  }
  function layout(nodes, fs, level = 0) {
    const parts = [];
    let prev = null;
    for (const n of normalizeNodes(nodes)) {
      const unary = n.k === "run" && /^[+\u2212\u00b1\u2213]/.test(n.text) && (prev === null || prev.k === "run" && (BINARY.has(prev.text.slice(-1)) || /[(\[{,;]$/.test(prev.text)));
      parts.push(unary ? __spreadValues({}, nodeBox(__spreadProps(__spreadValues({}, n), { text: n.text.slice(0, 1) }), fs, level, true)) && hbox([runBox(n.text.slice(0, 1), n.sty, fs, true), n.text.length > 1 ? runBox(n.text.slice(1), n.sty, fs) : empty()]) : nodeBox(n, fs, level));
      prev = n;
    }
    return parts.length ? hbox(parts) : empty();
  }
  function nodeBox(n, fs, level) {
    switch (n.k) {
      case "run":
        return runBox(n.text, n.sty, fs);
      case "f": {
        const cfs = level === 0 ? fs : fs;
        const nu = layout(n.num, cfs * 0.95, level + 1), de = layout(n.den, cfs * 0.95, level + 1);
        const w = Math.max(nu.w, de.w) + fs * 0.3, axis = fs * 0.28, gap = fs * 0.12;
        const a = axis + gap + nu.d + nu.a, d = de.a + de.d + gap - axis;
        return { w, a, d: Math.max(d, 0), draw: (x, y) => nu.draw(x + (w - nu.w) / 2, y - axis - gap - nu.d) + (n.noBar ? "" : line(x + fs * 0.05, y - axis, x + w - fs * 0.05, y - axis, Math.max(0.5, fs * 0.05))) + de.draw(x + (w - de.w) / 2, y - axis + gap + de.a) };
      }
      case "rad": {
        const body = layout(n.e, fs, level), deg = n.deg ? layout(n.deg, scriptFs(fs), level + 1) : null;
        const rw = fs * 0.6, pad = fs * 0.1, top = body.a + fs * 0.15;
        const w = rw + body.w + pad + (deg ? Math.max(deg.w - rw * 0.4, 0) : 0), off = deg ? Math.max(deg.w - rw * 0.4, 0) : 0;
        return { w, a: top + fs * 0.08, d: body.d + fs * 0.05, draw: (x, y) => {
          const x0 = x + off, sw4 = Math.max(0.5, fs * 0.05), bot = y + body.d + fs * 0.03;
          return (deg ? deg.draw(x, y - top * 0.55) : "") + `<path d="M${x0} ${y - fs * 0.12} L${x0 + rw * 0.25} ${y - fs * 0.2} L${x0 + rw * 0.5} ${bot} L${x0 + rw} ${y - top}" fill="none" stroke="#000" stroke-width="${sw4}"/>` + line(x0 + rw, y - top, x0 + w - off - pad / 2, y - top, sw4) + body.draw(x0 + rw, y);
        } };
      }
      case "script": {
        const base = nodeBox(n.base, fs, level);
        const sfs = scriptFs(fs);
        const sup2 = n.sup ? layout(n.sup, sfs, level + 1) : null, sub4 = n.sub ? layout(n.sub, sfs, level + 1) : null;
        const supUp = Math.max(base.a * 0.62, fs * 0.38) + (sup2 ? sup2.d * 0.2 : 0), subDown = Math.max(base.d, 0) + fs * 0.18 + (sub4 ? 0 : 0);
        const w = base.w + Math.max(sup2 ? sup2.w : 0, sub4 ? sub4.w : 0) + fs * 0.04;
        return { w, a: Math.max(base.a, sup2 ? supUp + sup2.a : 0), d: Math.max(base.d, sub4 ? subDown + sub4.d - fs * 0.1 : 0), draw: (x, y) => base.draw(x, y) + (sup2 ? sup2.draw(x + base.w + fs * 0.03, y - supUp) : "") + (sub4 ? sub4.draw(x + base.w + fs * 0.03, y + subDown - fs * 0.12) : "") };
      }
      case "d": {
        const items = n.items.map((it) => layout(it, fs, level));
        const inner = hbox(items.flatMap((b, i) => i ? [kern(fs * 0.3), b] : [b]));
        const a = Math.max(inner.a, fs * 0.72) + fs * 0.05, d = Math.max(inner.d, fs * 0.22) + fs * 0.05;
        const l = n.beg ? stretchy(n.beg, a, d, fs) : empty(), r = n.end ? stretchy(n.end, a, d, fs) : empty();
        return hbox([l, kern(fs * 0.05), inner, kern(fs * 0.05), r]);
      }
      case "nary": {
        const big = fs * (SIDE_LIMITS.has(n.op) ? 1.5 : 1.3);
        const sym = glyph(NARY_OPS[n.op], big);
        const sfs = scriptFs(fs);
        const lo = n.sub ? layout(n.sub, sfs, level + 1) : null, up = n.sup ? layout(n.sup, sfs, level + 1) : null;
        const side = SIDE_LIMITS.has(n.op);
        const w = side ? sym.w + Math.max(lo ? lo.w : 0, up ? up.w : 0) * 0.9 : Math.max(sym.w, lo ? lo.w : 0, up ? up.w : 0);
        const a = side ? Math.max(sym.a * 0.9, up ? fs * 0.7 + up.a : 0) : sym.a * 0.9 + (up ? up.a + up.d + fs * 0.1 : 0);
        const d = side ? Math.max(sym.d, lo ? fs * 0.85 + lo.d : 0) : sym.d + (lo ? lo.a + lo.d + fs * 0.1 : 0);
        const head = { w, a, d, draw: (x, y) => {
          const sy = y + fs * 0.08;
          if (side) return sym.draw(x, sy) + (up ? up.draw(x + sym.w * 0.9, y - fs * 0.7) : "") + (lo ? lo.draw(x + sym.w * 0.45, y + fs * 0.85) : "");
          return sym.draw(x + (w - sym.w) / 2, sy) + (up ? up.draw(x + (w - up.w) / 2, y - sym.a - up.d - fs * 0.05) : "") + (lo ? lo.draw(x + (w - lo.w) / 2, y + sym.d + lo.a + fs * 0.1) : "");
        } };
        return hbox([head, kern(fs * 0.1), layout(n.e, fs, level)]);
      }
      case "func": {
        const name = glyph(n.name, fs);
        let head = name;
        const sfs = scriptFs(fs);
        if (["lim", "max", "min", "sup", "inf"].includes(n.name) && n.sub) {
          const lo = layout(n.sub, sfs, level + 1);
          const w = Math.max(name.w, lo.w);
          head = { w, a: name.a, d: name.d + lo.a + lo.d + fs * 0.08, draw: (x, y) => name.draw(x + (w - name.w) / 2, y) + lo.draw(x + (w - lo.w) / 2, y + name.d + lo.a + fs * 0.08) };
        } else if (n.sub || n.sup) head = nodeBox({ k: "script", base: { k: "run", text: n.name, sty: "p" }, sub: n.sub, sup: n.sup }, fs, level);
        return hbox([head, kern(fs * 0.17), layout(n.e, fs, level)]);
      }
      case "lim": {
        const base = layout(n.e, fs, level), t = layout(n.lim, scriptFs(fs), level + 1);
        const w = Math.max(base.w, t.w);
        return { w, a: base.a + (n.upp ? t.a + t.d + fs * 0.1 : 0), d: base.d + (n.upp ? 0 : t.a + t.d + fs * 0.1), draw: (x, y) => base.draw(x + (w - base.w) / 2, y) + (n.upp ? t.draw(x + (w - t.w) / 2, y - base.a - t.d - fs * 0.08) : t.draw(x + (w - t.w) / 2, y + base.d + t.a + fs * 0.08)) };
      }
      case "acc":
      case "bar":
      case "groupChr": {
        const body = layout(n.e, fs, level);
        const bottom = n.pos === "bot", sw4 = Math.max(0.5, fs * 0.05);
        const arrow = n.chr === "\u20D7" || n.chr === "\u2192";
        const hat = n.chr === "\u0302";
        return { w: body.w, a: body.a + (bottom ? 0 : fs * 0.22), d: body.d + (bottom ? fs * 0.18 : 0), draw: (x, y) => {
          let s = body.draw(x, y);
          const yy = bottom ? y + body.d + fs * 0.1 : y - body.a - fs * 0.1;
          if (arrow) s += line(x, yy, x + body.w, yy, sw4) + `<path d="M${x + body.w - fs * 0.18} ${yy - fs * 0.1} L${x + body.w} ${yy} L${x + body.w - fs * 0.18} ${yy + fs * 0.1}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
          else if (hat) s += `<path d="M${x + body.w / 2 - fs * 0.2} ${yy + fs * 0.08} L${x + body.w / 2} ${yy - fs * 0.08} L${x + body.w / 2 + fs * 0.2} ${yy + fs * 0.08}" fill="none" stroke="#000" stroke-width="${sw4}"/>`;
          else s += line(x, yy, x + body.w, yy, sw4);
          return s;
        } };
      }
      case "box": {
        const body = layout(n.e, fs, level), p2 = fs * 0.12;
        return { w: body.w + 2 * p2, a: body.a + p2, d: body.d + p2, draw: (x, y) => `<rect x="${x.toFixed(2)}" y="${(y - body.a - p2).toFixed(2)}" width="${(body.w + 2 * p2).toFixed(2)}" height="${(body.a + body.d + 2 * p2).toFixed(2)}" fill="none" stroke="#000" stroke-width="${Math.max(0.5, fs * 0.05)}"/>` + body.draw(x + p2, y) };
      }
      case "m":
      case "eqArr": {
        const rows = n.k === "eqArr" ? n.rows.map((r) => [r[0]]) : n.rows;
        const cols = Math.max(...rows.map((r) => r.length));
        const cells = rows.map((r) => Array.from({ length: cols }, (_x, c) => layout(r[c] || [], fs, level)));
        const colW = Array.from({ length: cols }, (_x, c) => Math.max(...cells.map((r) => r[c].w)));
        const gap = fs * 0.8, rowGap = fs * 0.25;
        const w = colW.reduce((s, v) => s + v, 0) + gap * (cols - 1);
        const heights = cells.map((r) => ({ a: Math.max(...r.map((b) => b.a), fs * 0.7), d: Math.max(...r.map((b) => b.d), fs * 0.22) }));
        const total = heights.reduce((s, h) => s + h.a + h.d, 0) + rowGap * (rows.length - 1);
        const axis = fs * 0.28;
        return { w, a: total / 2 + axis, d: total / 2 - axis, draw: (x, y) => {
          let cy = y - axis - total / 2, out = "";
          cells.forEach((r, i) => {
            cy += heights[i].a;
            let cx = x;
            r.forEach((b, c) => {
              out += b.draw(n.k === "eqArr" ? cx : cx + (colW[c] - b.w) / 2, cy);
              cx += colW[c] + gap;
            });
            cy += heights[i].d + rowGap;
          });
          return out;
        } };
      }
      case "sPre": {
        const sfs = scriptFs(fs), sub4 = layout(n.sub || [], sfs, level + 1), sup2 = layout(n.sup || [], sfs, level + 1), body = layout(n.e, fs, level);
        const w = Math.max(sub4.w, sup2.w);
        return hbox([{ w, a: fs * 0.6, d: fs * 0.3, draw: (x, y) => sup2.draw(x, y - fs * 0.4) + sub4.draw(x, y + fs * 0.2) }, body]);
      }
      default:
        return empty();
    }
  }
  function renderLatex(latex, { fontSize = 12, pad = 1.5, family = "times" } = {}) {
    MATHFONT = FAMILIES[family] || FAMILIES.times;
    const { rows } = latexToTree(latex);
    const box = rows.length > 1 ? nodeBox({ k: "eqArr", rows: rows.map((r) => [r]) }, fontSize, 0) : layout(rows[0], fontSize, 0);
    const width = box.w + 2 * pad, height = box.a + box.d + 2 * pad;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width.toFixed(2)}pt" height="${height.toFixed(2)}pt" viewBox="0 0 ${width.toFixed(2)} ${height.toFixed(2)}">${box.draw(pad, pad + box.a)}</svg>`;
    return { svg, width, height, baseline: box.d + pad };
  }
  async function svgToPng(svg, width, height, scale = 4) {
    const img = new Image();
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = () => rej(new Error("kh\xF4ng v\u1EBD \u0111\u01B0\u1EE3c \u1EA3nh c\xF4ng th\u1EE9c"));
      img.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(width * scale * (96 / 72));
    canvas.height = Math.ceil(height * scale * (96 / 72));
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const b643 = canvas.toDataURL("image/png").split(",")[1];
    const bin = atob(b643);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  var SYMS, FAMILIES, MATHFONT, BINARY, esc2, canvasCtx, charAdvance, empty, kern, scriptFs;
  var init_mathrender = __esm({
    "src/mathrender.js"() {
      init_latex2omml();
      SYMS = "'Cambria Math', 'STIX Two Math', 'Apple Symbols', 'Segoe UI Symbol'";
      FAMILIES = {
        times: `'Times New Roman', 'Times', 'STIX Two Text', ${SYMS}, serif`,
        palatino: `'Palatino Linotype', 'Book Antiqua', Palatino, 'Times New Roman', ${SYMS}, serif`,
        cambriamath: `'Cambria Math', Cambria, 'STIX Two Math', 'Times New Roman', ${SYMS}, serif`,
        cambria: `Cambria, 'Times New Roman', ${SYMS}, serif`,
        stix: `'STIX Two Math', 'XITS Math', 'Cambria Math', 'Times New Roman', ${SYMS}, serif`,
        lm: `'Latin Modern Math', 'New Computer Modern Math', 'Cambria Math', 'Times New Roman', ${SYMS}, serif`,
        libertinus: `'Libertinus Math', 'Libertinus Serif', 'Cambria Math', 'Times New Roman', ${SYMS}, serif`,
        pagella: `'TeX Gyre Pagella Math', 'Palatino Linotype', 'Book Antiqua', 'Cambria Math', ${SYMS}, serif`,
        fira: `'Fira Math', 'Fira Sans', Arial, ${SYMS}, sans-serif`,
        noto: `'Noto Sans Math', 'Noto Sans', Arial, ${SYMS}, sans-serif`,
        sans: `Arial, 'Helvetica Neue', Helvetica, ${SYMS}, sans-serif`
      };
      MATHFONT = FAMILIES.times;
      BINARY = /* @__PURE__ */ new Set([..."=<>+\u2212\xB1\u2213\xD7\u22C5\xF7\u2264\u2265\u2260\u2248\u2261\u2208\u2209\u2282\u2283\u2286\u2287\u222A\u2229\u2192\u2190\u2194\u21D2\u21D0\u21D4\u27F6\u221D\u2225\u22A5\u2243\u2245\u223C\u226A\u226B"]);
      esc2 = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      canvasCtx = null;
      charAdvance = (ch, fs, italic) => measure(ch, fs, italic);
      empty = () => ({ w: 0, a: 0, d: 0, draw: () => "" });
      kern = (w) => ({ w, a: 0, d: 0, draw: () => "" });
      scriptFs = (fs) => Math.max(fs * 0.7, 5);
    }
  });

  // src/mtef.js
  function concat(chunks) {
    let total = 0;
    for (const c of chunks) total += c.length;
    const out = new Uint8Array(total);
    let pos = 0;
    for (const c of chunks) {
      out.set(c, pos);
      pos += c.length;
    }
    return out;
  }
  function readOleStream(data, wanted = "Equation Native") {
    const magic = [208, 207, 17, 224, 161, 177, 26, 225];
    if (data.length < 512 || magic.some((b, i) => data[i] !== b)) throw new MtefError("not an OLE file");
    const dv = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const u162 = (o) => dv.getUint16(o, true);
    const u32 = (o) => dv.getUint32(o, true);
    const sectorSize = 1 << u162(30);
    const miniSize = 1 << u162(32);
    const fatCount = u32(44), dirStart = u32(48);
    const cutoff = u32(56), miniStart = u32(60);
    const difatStart = u32(68), difatCount = u32(72);
    const sector = (index2) => {
      const start2 = (index2 + 1) * sectorSize;
      const chunk = data.subarray(start2, start2 + sectorSize);
      if (chunk.length < sectorSize) throw new MtefError("truncated OLE file");
      return chunk;
    };
    const words = (chunk) => {
      const v = new DataView(chunk.buffer, chunk.byteOffset, chunk.byteLength);
      const out2 = [];
      for (let o = 0; o + 4 <= chunk.length; o += 4) out2.push(v.getUint32(o, true));
      return out2;
    };
    let fatSectors = [];
    for (let i = 0; i < 109; i++) fatSectors.push(u32(76 + 4 * i));
    let index = difatStart;
    for (let n = 0; n < difatCount; n++) {
      if (index >= 4294967290) break;
      const block2 = words(sector(index));
      fatSectors = fatSectors.concat(block2.slice(0, -1));
      index = block2[block2.length - 1];
    }
    let fat = [];
    for (const item of fatSectors.slice(0, fatCount)) {
      if (item >= 4294967290) continue;
      fat = fat.concat(words(sector(item)));
    }
    const chain = (first, table3 = fat) => {
      const out2 = [], seen = /* @__PURE__ */ new Set();
      while (first < 4294967290 && !seen.has(first) && first < table3.length) {
        seen.add(first);
        out2.push(first);
        first = table3[first];
      }
      return out2;
    };
    const directory = concat(chain(dirStart).map(sector));
    const dirView = new DataView(directory.buffer, directory.byteOffset, directory.byteLength);
    const entries = [];
    for (let offset = 0; offset <= directory.length - 128; offset += 128) {
      const length = dirView.getUint16(offset + 64, true);
      let name = "";
      for (let k = 0; k < Math.max(length - 2, 0); k += 2) {
        if (k + 1 < Math.max(length - 2, 0)) name += String.fromCharCode(dirView.getUint16(offset + k, true));
        else name += String.fromCharCode(65533);
      }
      entries.push([name, directory[offset + 66], dirView.getUint32(offset + 116, true), dirView.getUint32(offset + 120, true)]);
    }
    if (!entries.length) throw new MtefError("empty directory");
    const root = entries[0];
    const target = entries.slice(1).find((e3) => e3[0] === wanted);
    if (!target) throw new MtefError("no Equation Native stream");
    const [, , start, size] = target;
    let out;
    if (size < cutoff) {
      let miniFat = [];
      for (const item of chain(miniStart)) miniFat = miniFat.concat(words(sector(item)));
      const container = concat(chain(root[2]).map(sector));
      out = concat(chain(start, miniFat).map((i) => container.subarray(i * miniSize, (i + 1) * miniSize)));
    } else {
      out = concat(chain(start).map(sector));
    }
    return out.subarray(0, size);
  }
  function mtefFromOle(data) {
    const stream = readOleStream(data);
    if (stream.length < 2) throw new MtefError("short stream");
    const header = stream[0] | stream[1] << 8;
    return stream.subarray(header);
  }
  function nudge(reader, opt) {
    if (opt & 8) {
      const dx = reader.byte(), dy = reader.byte();
      if (dx === 128 && dy === 128) reader.skip(4);
    }
  }
  function dimensionArray(reader) {
    const count = reader.byte();
    let seen = 0;
    while (seen < count) {
      const value = reader.byte();
      for (const nibble of [value >> 4, value & 15]) if (nibble === 15) seen++;
      if (seen >= count) break;
    }
  }
  function parsePrefs(reader) {
    reader.byte();
    dimensionArray(reader);
    dimensionArray(reader);
    const count = reader.byte();
    for (let i = 0; i < count; i++) {
      const index = reader.byte();
      if (index) reader.byte();
    }
  }
  function parseRuler(reader) {
    const n = reader.byte();
    for (let i = 0; i < n; i++) {
      reader.byte();
      reader.word();
    }
  }
  function isPlain(font) {
    return !/symbol|extra|mt|wingding/i.test(font);
  }
  function glyph2(char, value) {
    if (has3(tables_default.GREEK_LOWER, char)) return tables_default.GREEK_LOWER[char];
    if (has3(tables_default.GREEK_UPPER, char)) return tables_default.GREEK_UPPER[char];
    if (has3(tables_default.SYMBOLS, String(value))) return tables_default.SYMBOLS[String(value)];
    if (has3(tables_default.ASCII_ESCAPES, char)) return tables_default.ASCII_ESCAPES[char];
    if (value < 128) return char;
    if (value > 127 && isAlpha(char)) return `${BS2}text{${char}}`;
    return fail2(`unknown character U+${hex4(value)}`);
  }
  function classify(node3) {
    const [, face2, code, char8, char16, , , font] = node3;
    const value = code !== null ? code : char16 !== null ? char16 : char8;
    if (value === null) fail2("character without code");
    if (face2 === 24) return ["math", has3(tables_default.SPACES, String(value)) ? tables_default.SPACES[String(value)] : value ? `${BS2},` : ""];
    if (face2 === 22 || face2 === 23) return ["skip", ""];
    const char = String.fromCharCode(value);
    if (value === 173) return ["skip", ""];
    if (has3(tables_default.SPACES, String(value)) && value !== 32 && face2 !== 24) return ["math", tables_default.SPACES[String(value)]];
    if (value >= 57344) {
      if (value === 60161 || value === 60162 || value === 60163 || value === 63232) return ["skip", ""];
      if (value === 59791) return ["math", `${BS2}bullet`];
      fail2(`private character U+${hex4(value)}`);
    }
    if (face2 === 2 && isAlpha(char)) return ["func", char];
    if (face2 === 1 || face2 < 0 && font && isPlain(font)) {
      if (has3(tables_default.SYMBOLS, String(value)) || has3(tables_default.GREEK_LOWER, char) || has3(tables_default.GREEK_UPPER, char)) return ["math", glyph2(char, value)];
      return ["text", char];
    }
    if (face2 === 7) return ["math", `${BS2}mathbf{${glyph2(char, value)}}`];
    return ["math", glyph2(char, value)];
  }
  function embellish(body, embells) {
    for (const kind of embells) {
      if (has3(tables_default.EMBELLISHMENTS, String(kind))) {
        body = tables_default.EMBELLISHMENTS[String(kind)].replace("%s", () => body);
      } else if (kind === 10) {
        body = body === `${BS2}in` ? `${BS2}notin` : body === "=" ? `${BS2}neq` : `${BS2}not` + body;
      } else if (kind === 5 || kind === 6 || kind === 18) {
        body += "'".repeat({ 5: 1, 6: 2, 18: 3 }[kind]);
      } else fail2(`embellishment ${kind}`);
    }
    return body;
  }
  function join(parts, keepSpaces = false) {
    const tokens = [];
    for (const part of parts) {
      if (part && part.trim()) tokens.push(part.trim() === BS2 ? `${BS2} ` : part.trim());
    }
    const cleaned = [];
    tokens.forEach((token0, index) => {
      let token = token0;
      const before = cleaned.length ? cleaned[cleaned.length - 1] : "";
      const after = index + 1 < tokens.length ? tokens[index + 1] : "";
      if (!keepSpaces && SPACE_TOKENS.has(token) && (before === "," || before === ";" || after === "," || after === ";" || SPACE_TOKENS.has(before) || OPERATORS.has(before) || OPERATORS.has(after) || before.length === 1 && isAlpha(before) && after.length === 1 && isAlpha(after))) {
        return;
      }
      if (token === "," && isDigit(before.slice(-1)) && isDigit(after.slice(0, 1))) token = "{,}";
      cleaned.push(token);
    });
    while (!keepSpaces && cleaned.length && SPACE_TOKENS.has(cleaned[0])) cleaned.shift();
    while (!keepSpaces && cleaned.length && SPACE_TOKENS.has(cleaned[cleaned.length - 1])) cleaned.pop();
    let out = "", previous = "";
    for (const token of cleaned) {
      if (out) out += separator(previous, token, out);
      out += token;
      previous = token;
    }
    return out.trim();
  }
  function separator(previous, token, built) {
    if (token === "," || token === ";" || token === "{,}" || previous === "{,}") return "";
    if (previous === "," || previous === ";") return " ";
    if (token === ")" || token === "]" || token === "|" || ["(", "[", "|", `${BS2}{`].includes(previous) || previous.endsWith(`${BS2}left(`) || previous.endsWith(`${BS2}left[`)) return "";
    if (["+", "-", "=", "<", ">"].includes(token) || BINARY2.has(token)) return " ";
    if (["=", "<", ">"].includes(previous) || BINARY2.has(previous)) return " ";
    if (previous === "+" || previous === "-") {
      const before = built.slice(0, built.length - previous.length).trimEnd();
      const last = before.slice(-1);
      if (!before || "([;=<>+-|{".includes(last) && last !== "" || last === "," && !before.endsWith(`${BS2},`) || [...BINARY2].some((item) => before.endsWith(item)) || before.endsWith(`${BS2}left(`) || before.endsWith(`${BS2}left[`) || before.endsWith(`${BS2}left${BS2}{`) || before.endsWith(`${BS2}left|`)) return "";
      return " ";
    }
    if (/\\[A-Za-z]+$/.test(previous) && /^[A-Za-zÀ-ɏͰ-ϿЀ-ӿḀ-ỿ]/u.test(token.slice(0, 1))) return " ";
    return "";
  }
  function slot(node3) {
    if (node3[0] === "line") return line2(node3[1]);
    if (node3[0] === "pile") return block(node3);
    if (node3[0] === "char") return line2([node3]);
    return fail2("bad slot");
  }
  function block(node3) {
    if (node3[0] === "line") return line2(node3[1]);
    if (node3[0] === "pile") {
      const align = { 1: "l", 2: "c", 3: "r", 4: "l", 5: "c" }[node3[1]] || "c";
      const rows = node3[2].filter((c) => c[0] === "line" || c[0] === "pile").map((c) => protect(slot(c)));
      if (rows.length === 1) return rows[0];
      return `${BS2}begin{array}{${align}} ${rows.join(` ${BS2}${BS2} `)} ${BS2}end{array}`;
    }
    if (node3[0] === "matrix") {
      const [, rows, cols, children2] = node3;
      const cells = slots(children2).map((c) => protect(slot(c)));
      if (cells.length !== rows * cols) fail2("matrix size");
      const table3 = [];
      for (let r = 0; r < rows; r++) table3.push(cells.slice(r * cols, (r + 1) * cols).join(" & "));
      return `${BS2}begin{array}{${"c".repeat(cols)}} ${table3.join(` ${BS2}${BS2} `)} ${BS2}end{array}`;
    }
    return fail2("bad block");
  }
  function line2(nodes) {
    const parts = [];
    let index = 0;
    while (index < nodes.length) {
      const node3 = nodes[index];
      const tag = node3[0];
      if (tag === "char") {
        const [kind, payload] = classify(node3);
        if (kind === "skip") {
          index++;
          continue;
        }
        if (kind === "text" || kind === "func") {
          const run4 = [payload];
          while (index + 1 < nodes.length && nodes[index + 1][0] === "char" && !nodes[index + 1][5].length) {
            const [nxtKind, nxt] = classify(nodes[index + 1]);
            if (nxtKind !== kind) break;
            run4.push(nxt);
            index++;
          }
          const word2 = run4.join("");
          if (kind === "func") {
            if (FUNCTIONS.has(word2)) parts.push(BS2 + word2 + " ");
            else if (has3(tables_default.FUNCTION_ALIASES, word2)) parts.push(tables_default.FUNCTION_ALIASES[word2] + " ");
            else parts.push(`${BS2}mathrm{${TEXT_ESC(word2)}}`);
          } else parts.push(`${BS2}text{${TEXT_ESC(word2)}}`);
        } else {
          parts.push(node3[5].length ? embellish(payload, node3[5]) : payload);
        }
      } else if (tag === "tmpl") {
        template(node3, parts);
      } else if (tag === "pile" || tag === "matrix" || tag === "line") {
        parts.push(block(node3));
      }
      index++;
    }
    return join(parts);
  }
  function template(node3, parts) {
    const [, selector, variation, children2] = node3;
    const text = slots(children2).map(slot);
    if (has3(tables_default.FENCES, String(selector))) {
      if (!text.length) fail2("empty fence");
      let [left, right] = tables_default.FENCES[String(selector)];
      const hasLeft = Boolean(variation & 1), hasRight = Boolean(variation & 2);
      if (selector === 8) [left, right] = ["[", "]"];
      parts.push(`${BS2}left${hasLeft ? left : "."} ${text[0]} ${BS2}right${hasRight ? right : "."}`);
      return;
    }
    if (selector === 10) {
      if (variation === 0) parts.push(`${BS2}sqrt{${at(text, 0)}}`);
      else if (text.length >= 2) parts.push(`${BS2}sqrt[${text[1]}]{${text[0]}}`);
      else fail2("root");
      return;
    }
    if (selector === 11) {
      if (text.length < 2) fail2("fraction");
      parts.push(!(variation & 2) ? `${BS2}frac{${text[0]}}{${text[1]}}` : `{${text[0]}}/{${text[1]}}`);
      return;
    }
    if (selector === 12) {
      parts.push(`${BS2}underline{${at(text, 0)}}`);
      return;
    }
    if (selector === 13) {
      parts.push(`${BS2}overline{${at(text, 0)}}`);
      return;
    }
    if (has3(tables_default.BIG_OPS, String(selector))) {
      if (text.length < 1) fail2("big operator");
      const main = text[0];
      const lower = text.length > 1 ? text[1] : "";
      const upper = text.length > 2 ? text[2] : "";
      let op = tables_default.BIG_OPS[String(selector)];
      if (selector === 15) {
        const count = variation & 3;
        op = { 2: `${BS2}iint`, 3: `${BS2}iiint` }[count] || `${BS2}int`;
        if (variation & 12) fail2("loop integral");
      }
      const scripts = (lower ? `_{${lower}}` : "") + (upper ? `^{${upper}}` : "");
      parts.push(`${op}${scripts} ${main}`);
      return;
    }
    if (selector === 9 || selector === 14) {
      const marks = children2.filter((c) => c[0] === "char" && c[2]).map((c) => String.fromCharCode(c[2]));
      if (selector === 9) {
        const pairs = { "(": "(", ")": ")", "[": "[", "]": "]", "{": `${BS2}{`, "}": `${BS2}}`, "\u27E8": `${BS2}langle`, "\u27E9": `${BS2}rangle`, "|": "|" };
        if (marks.length < 2 || !has3(pairs, marks[0]) || !has3(pairs, marks[1]) || !text.length) fail2("interval");
        parts.push(`${BS2}left${pairs[marks[0]]} ${text[0]} ${BS2}right${pairs[marks[1]]}`);
        return;
      }
      if (!marks.length) fail2("arrow");
      const last = marks[marks.length - 1];
      const g = marks[0] === "\u21C0" && marks[1] === "\u21BD" ? `${BS2}rightleftharpoons` : glyph2(last, last.charCodeAt(0));
      const top = text.length ? text[0] : "";
      const bottom = text.length > 1 ? text[1] : "";
      if (!top && !bottom) parts.push(g);
      else if (g === `${BS2}rightarrow` || g === `${BS2}leftarrow`) {
        parts.push((g === `${BS2}rightarrow` ? `${BS2}xrightarrow` : `${BS2}xleftarrow`) + (bottom ? `[${bottom}]` : "") + `{${top}}`);
      } else {
        parts.push(!bottom ? `${BS2}overset{${top}}{${g}}` : `${BS2}underset{${bottom}}{${BS2}overset{${top}}{${g}}}`);
      }
      return;
    }
    if (selector === 23) {
      const main = text.length ? text[0] : "";
      const lower = text.length > 1 ? text[1] : "";
      const upper = text.length > 2 ? text[2] : "";
      const body = main.trim();
      if ([`${BS2}lim`, `${BS2}max`, `${BS2}min`, `${BS2}sup`, `${BS2}inf`].includes(body)) {
        parts.push(body + (lower ? `_{${lower}}` : "") + (upper ? `^{${upper}}` : ""));
      } else parts.push(lower ? `${BS2}underset{${lower}}{${main}}` : main);
      return;
    }
    if (selector === 25) fail2("unverified template 25");
    if (selector === 24) {
      if (text.length < 2) fail2("brace");
      parts.push(variation & 1 ? `${BS2}overbrace{${text[0]}}^{${text[1]}}` : `${BS2}underbrace{${text[0]}}_{${text[1]}}`);
      return;
    }
    if (selector === 27 || selector === 28 || selector === 29) {
      const nonempty = text.filter((v) => v);
      let sub4, sup2;
      if (selector === 29) [sub4, sup2] = [...text, "", ""].slice(0, 2);
      else if (selector === 27) {
        sub4 = nonempty.length ? nonempty[0] : "";
        sup2 = "";
      } else {
        sub4 = "";
        sup2 = nonempty.length ? nonempty[nonempty.length - 1] : "";
      }
      if (!parts.length) parts.push("{}");
      let previous = parts[parts.length - 1];
      if (sup2 && SCRIPT_RE_SUP.test(previous) || sub4 && SCRIPT_RE_SUB.test(previous)) previous = "{" + previous + "}";
      const suffix = (sub4 ? `_{${sub4}}` : "") + (sup2 ? `^{${sup2}}` : "");
      parts[parts.length - 1] = previous.trimEnd() + suffix;
      return;
    }
    if (selector === 31) {
      if (!text.length) fail2("vector");
      const body = text[0];
      if (variation !== 2) fail2("vector variant");
      parts.push(body.length > 1 ? `${BS2}overrightarrow{${body}}` : `${BS2}vec{${body}}`);
      return;
    }
    if (selector === 32) {
      parts.push(`${BS2}widehat{${at(text, 0)}}`);
      return;
    }
    if (selector === 33) {
      parts.push(`${BS2}overset{${BS2}frown}{${at(text, 0)}}`);
      return;
    }
    if (selector === 34) {
      parts.push(`${BS2}widetilde{${at(text, 0)}}`);
      return;
    }
    if (selector === 37) {
      parts.push(`${BS2}boxed{${at(text, 0)}}`);
      return;
    }
    fail2(`template ${selector}/${variation}`);
  }
  function groupEnd(text, start) {
    let depth = 0;
    for (let index = start; index < text.length; index++) {
      const char = text[index];
      if (char === BS2) continue;
      if (text.slice(index - 1, index) === BS2) continue;
      if (char === "{") depth++;
      else if (char === "}") {
        depth--;
        if (depth === 0) return index;
      }
    }
    return -1;
  }
  function unwrapDoubleBraces(text) {
    let changed = true;
    while (changed) {
      changed = false;
      let from = 0;
      for (; ; ) {
        const found = text.indexOf("{{", from);
        if (found < 0) break;
        if (found > 0 && text[found - 1] === BS2) {
          from = found + 1;
          continue;
        }
        const outer = found, inner = found + 1;
        const outerEnd = groupEnd(text, outer), innerEnd = groupEnd(text, inner);
        if (outerEnd > 0 && innerEnd === outerEnd - 1 && text.slice(outer - 1, outer) !== BS2) {
          text = text.slice(0, outer + 1) + text.slice(inner + 1, innerEnd) + text.slice(outerEnd);
          changed = true;
          break;
        }
        from = found + 2;
      }
    }
    return text;
  }
  function simplifyFences(text) {
    for (; ; ) {
      const simpler = simplifyFencesOnce(text);
      if (simpler === text) return text;
      text = simpler;
    }
  }
  function simplifyFencesOnce(text) {
    const pattern = /\\left(\\\{|\(|\[|\||\\\|)/g;
    let position = 0;
    for (; ; ) {
      pattern.lastIndex = position;
      const match = pattern.exec(text);
      if (!match) return text;
      let depth = 1, index = match.index + match[0].length, end = -1;
      while (index < text.length) {
        const opener = text.indexOf(`${BS2}left`, index), closer = text.indexOf(`${BS2}right`, index);
        if (closer < 0) break;
        if (opener >= 0 && opener < closer) {
          depth++;
          index = opener + 5;
          continue;
        }
        depth--;
        if (depth === 0) {
          end = closer;
          break;
        }
        index = closer + 6;
      }
      const matchEnd = match.index + match[0].length;
      if (end < 0) {
        position = matchEnd;
        continue;
      }
      const close = /^\\right(\\\{|\\\}|\)|\]|\||\\\||\.)/.exec(text.slice(end));
      const inner = text.slice(matchEnd, end);
      if (!close || close[1] === "." || tables_default.TALL.some((w) => inner.includes(w)) || /\^\{[^{}]{6,}\}|_\{[^{}]{6,}\}/.test(inner)) {
        position = matchEnd;
        continue;
      }
      text = text.slice(0, match.index) + match[1] + inner.trim() + close[1] + text.slice(end + close[0].length);
      position = match.index + 1;
    }
  }
  function tidy(latex, keepSpaces = false) {
    const held = [];
    const S1 = String.fromCharCode(1), S2 = String.fromCharCode(2);
    let text = latex.replace(/\\(?:text|mathrm)\{[^{}]*\}/g, (m) => {
      held.push(m);
      return `${S1}${held.length - 1}${S2}`;
    });
    text = text.replace(/\^\{([A-Za-z0-9])\}/g, "^$1");
    text = text.replace(/_\{([A-Za-z0-9])\}/g, "_$1");
    text = unwrapDoubleBraces(text);
    text = simplifyFences(text);
    if (!keepSpaces) {
      text = text.replace(/\s*\\,\s*(?=[+\-=<>}\)\]]|$)/g, "");
      text = text.replace(/([({\[+\-=<>])\s*\\,\s*/g, "$1");
      text = text.replace(/^(?:\s*\\[ ,;:]|\s*\\quad)+\s*/, "");
      text = text.replace(/(?:\\[ ,;:]|\\quad)\s*$/, "");
    }
    text = text.replace(/\{\s+/g, "{");
    text = text.replace(/\s+\}/g, "}");
    text = text.replace(/\s+/g, " ").trim();
    return text.replace(new RegExp(`${S1}(\\d+)${S2}`, "g"), (_m, i) => held[Number(i)]);
  }
  function mtefToLatex(data) {
    try {
      const parser = new Parser2(data);
      const [root, inline] = parser.parse();
      return [tidy(block(root)), inline];
    } catch (error) {
      if (error instanceof MtefError) throw error;
      throw new MtefError(error instanceof RangeError ? "too deep or truncated" : `bad MTEF: ${error.message}`);
    }
  }
  function oleToLatex(data) {
    return mtefToLatex(mtefFromOle(data));
  }
  var MtefError, has3, BS2, isAlpha, isDigit, at, SPACE_TOKENS, BINARY2, OPERATORS, FUNCTIONS, Reader, END, LINE, CHAR, TMPL, PILE, MATRIX, EMBELL, RULER, FONT_STYLE_DEF, SIZE, COLOR, COLOR_DEF, FONT_DEF, EQN_PREFS, ENCODING_DEF, Parser2, fail2, hex4, TEXT_ESC, protect, slots, SCRIPT_RE_SUP, SCRIPT_RE_SUB;
  var init_mtef = __esm({
    "src/mtef.js"() {
      init_tables();
      MtefError = class extends Error {
      };
      has3 = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
      BS2 = "\\";
      isAlpha = (s) => s.length > 0 && /^[A-Za-zÀ-ɏͰ-ϿЀ-ӿḀ-ỿ]+$/u.test(s);
      isDigit = (s) => /^[0-9]$/.test(s);
      at = (arr, i) => {
        if (i < 0 || i >= arr.length) throw new MtefError("missing slot");
        return arr[i];
      };
      SPACE_TOKENS = new Set(tables_default.SPACE_TOKENS);
      BINARY2 = new Set(tables_default.BINARY);
      OPERATORS = /* @__PURE__ */ new Set([...tables_default.BINARY, "+", "-", "=", "<", ">"]);
      FUNCTIONS = new Set(tables_default.FUNCTIONS);
      Reader = class {
        constructor(data) {
          this.data = data;
          this.pos = 0;
        }
        byte() {
          if (this.pos >= this.data.length) throw new MtefError("unexpected end");
          return this.data[this.pos++];
        }
        word() {
          const lo = this.byte();
          return lo | this.byte() << 8;
        }
        unsigned() {
          const v = this.byte();
          return v === 255 ? this.word() : v;
        }
        cstring() {
          let out = "";
          for (; ; ) {
            const v = this.byte();
            if (v === 0) return out;
            out += String.fromCharCode(v);
          }
        }
        skip(count) {
          this.pos += count;
          if (this.pos > this.data.length) throw new MtefError("unexpected end");
        }
      };
      [END, LINE, CHAR, TMPL, PILE, MATRIX, EMBELL, RULER, FONT_STYLE_DEF, SIZE] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      [COLOR, COLOR_DEF, FONT_DEF, EQN_PREFS, ENCODING_DEF] = [15, 16, 17, 18, 19];
      Parser2 = class {
        constructor(data) {
          this.r = new Reader(data);
          this.fonts = /* @__PURE__ */ new Map();
        }
        parse() {
          const r = this.r;
          if (r.byte() !== 5) throw new MtefError("only MTEF version 5 is supported");
          r.skip(3);
          r.byte();
          r.cstring();
          const options = r.byte();
          let root = null;
          for (; ; ) {
            const node3 = this.record(true);
            if (node3 === "END") break;
            if (node3 !== null && root === null && (node3[0] === "line" || node3[0] === "pile")) root = node3;
          }
          if (root === null) root = ["line", []];
          return [root, Boolean(options & 1)];
        }
        objects() {
          const out = [];
          for (; ; ) {
            const node3 = this.record(false);
            if (node3 === "END") return out;
            if (node3 !== null) out.push(node3);
          }
        }
        record(top) {
          const start = this.r.pos;
          const node3 = this.recordInner(top);
          if (Array.isArray(node3)) node3.span = [start, this.r.pos];
          return node3;
        }
        recordInner(top) {
          const r = this.r;
          if (r.pos >= r.data.length) {
            if (top) return "END";
            throw new MtefError("missing END");
          }
          const kind = r.byte();
          if (kind === END) return "END";
          if (kind === LINE) {
            const opt = r.byte();
            nudge(r, opt);
            if (opt & 4) r.word();
            if (opt & 2) parseRuler(r);
            if (opt & 1) return ["line", []];
            return ["line", this.objects()];
          }
          if (kind === CHAR) {
            const opt = r.byte();
            nudge(r, opt);
            const face2 = r.byte() - 128;
            const code = !(opt & 32) ? r.word() : null;
            const char8 = opt & 4 ? r.byte() : null;
            const char16 = opt & 16 ? r.word() : null;
            const embells = [];
            if (opt & 1) {
              for (; ; ) {
                if (r.pos < r.data.length && r.data[r.pos] === EMBELL) {
                  r.byte();
                  const eopt = r.byte();
                  nudge(r, eopt);
                  embells.push(r.byte());
                } else if (r.pos < r.data.length && r.data[r.pos] === END) {
                  r.byte();
                  break;
                } else if (this.record(false) !== null) {
                  throw new MtefError("embellishment expected");
                }
              }
            }
            return ["char", face2, code, char8, char16, embells, Boolean(opt & 2), this.fonts.get(-face2)];
          }
          if (kind === TMPL) {
            const opt = r.byte();
            nudge(r, opt);
            const selector = r.byte();
            let variation = r.byte();
            if (variation & 128) variation = variation & 127 | r.byte() << 8;
            r.byte();
            return ["tmpl", selector, variation, this.objects()];
          }
          if (kind === PILE) {
            const opt = r.byte();
            nudge(r, opt);
            const halign = r.byte();
            r.byte();
            if (opt & 2) parseRuler(r);
            return ["pile", halign, this.objects()];
          }
          if (kind === MATRIX) {
            const opt = r.byte();
            nudge(r, opt);
            r.byte();
            r.byte();
            r.byte();
            const rows = r.byte(), cols = r.byte();
            r.skip(Math.floor((rows + 1) * 2 / 8) + ((rows + 1) * 2 % 8 ? 1 : 0));
            r.skip(Math.floor((cols + 1) * 2 / 8) + ((cols + 1) * 2 % 8 ? 1 : 0));
            return ["matrix", rows, cols, this.objects()];
          }
          if (kind === EMBELL) {
            const opt = r.byte();
            nudge(r, opt);
            r.byte();
            return null;
          }
          if (kind === RULER) {
            parseRuler(r);
            return null;
          }
          if (kind === FONT_STYLE_DEF) {
            r.unsigned();
            r.byte();
            return null;
          }
          if (kind === SIZE) {
            const first = r.byte();
            if (first === 101) r.word();
            else if (first === 100) {
              r.byte();
              r.word();
            } else r.byte();
            return null;
          }
          if (kind >= 10 && kind <= 14) return null;
          if (kind === COLOR) {
            r.unsigned();
            return null;
          }
          if (kind === COLOR_DEF) {
            const opt = r.byte();
            const n = opt & 1 ? 4 : 3;
            for (let i = 0; i < n; i++) r.word();
            if (opt & 4) r.cstring();
            return null;
          }
          if (kind === FONT_DEF) {
            const index = this.fonts.size + 1;
            r.unsigned();
            this.fonts.set(index, r.cstring());
            return null;
          }
          if (kind === EQN_PREFS) {
            parsePrefs(r);
            return null;
          }
          if (kind === ENCODING_DEF) {
            r.cstring();
            return null;
          }
          if (kind >= 100) {
            r.skip(r.unsigned());
            return null;
          }
          throw new MtefError(`unknown record ${kind}`);
        }
      };
      fail2 = (message) => {
        throw new MtefError(message);
      };
      hex4 = (v) => v.toString(16).toUpperCase().padStart(4, "0");
      TEXT_ESC = (word2) => [...word2].map((c) => has3(tables_default.TEXT_ESCAPES, c) ? tables_default.TEXT_ESCAPES[c] : c).join("");
      protect = (cell4) => cell4.trimStart().startsWith("[") ? "{}" + cell4 : cell4;
      slots = (children2) => children2.filter((c) => c[0] === "line" || c[0] === "pile");
      SCRIPT_RE_SUP = /\^(?:[^\s{}]|\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})$/;
      SCRIPT_RE_SUB = /_(?:[^\s{}]|\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})(?:\^(?:[^\s{}]|\{[^{}]*\}))?$/;
    }
  });

  // src/omml.js
  function prop(element, name, dflt) {
    for (const holder of elements(element)) {
      if (local(holder).endsWith("Pr")) {
        for (const item of elements(holder)) {
          if (local(item) === name) {
            const v = item.attrs["m:val"];
            if (v !== void 0) return v;
            return item.attrs.val !== void 0 ? item.attrs.val : dflt !== void 0 ? dflt : "on";
          }
        }
      }
    }
    return dflt;
  }
  function charToken(char) {
    const cp2 = char.codePointAt(0);
    if (has4(tables_default.GREEK_LOWER, char)) return tables_default.GREEK_LOWER[char];
    if (has4(tables_default.GREEK_UPPER, char)) return tables_default.GREEK_UPPER[char];
    if (has4(tables_default.SYMBOLS, String(cp2))) return tables_default.SYMBOLS[String(cp2)];
    if (has4(tables_default.OMML_ESCAPES, char)) return tables_default.OMML_ESCAPES[char];
    if (cp2 < 128) return char;
    if (isAlpha2(char)) return `${BS3}text{${char}}`;
    throw new OmmlError("unknown character U+" + cp2.toString(16).toUpperCase().padStart(4, "0"));
  }
  function run2(element) {
    let text = "";
    for (const t of descendants(element)) if (local(t) === "t") text += textOf(t);
    if (!text) text = element.children.filter((c) => typeof c === "string").join("");
    let plain2 = false, nor = false;
    for (const holder of elements(element)) {
      if (local(holder) === "rPr") {
        for (const item of elements(holder)) {
          if (local(item) === "nor") {
            plain2 = true;
            nor = true;
          }
          if (local(item) === "sty" && item.attrs["m:val"] === "p") plain2 = true;
        }
      }
    }
    if (!text.trim() && text) return [...text].map((c) => has4(tables_default.SPACES, String(c.codePointAt(0))) ? tables_default.SPACES[String(c.codePointAt(0))] : `${BS3} `);
    if (nor && text) return [`${BS3}text{${[...text].map((c) => has4(tables_default.TEXT_ESCAPES, c) ? tables_default.TEXT_ESCAPES[c] : c).join("")}}`];
    if (plain2 && text && /^[A-Za-z0-9 ]+$/.test(text)) return [!text.includes(" ") ? `${BS3}mathrm{${text}}` : `${BS3}text{${text}}`];
    const chars = [...text].filter((c) => !"\u200B\u2061\u2062".includes(c));
    return chars.filter((c, i) => !(c === " " && (chars[i - 1] === "," || chars[i - 1] === ";"))).map((c) => /\s/.test(c) ? has4(tables_default.SPACES, String(c.codePointAt(0))) ? tables_default.SPACES[String(c.codePointAt(0))] : `${BS3} ` : charToken(c));
  }
  function renderSeq(els) {
    const tokens = [];
    for (const c of els) tokens.push(...node2(c));
    return tokens;
  }
  function subOf(el, name) {
    for (const c of elements(el)) if (local(c) === name) return group(c);
    return "";
  }
  function node2(el) {
    const tag = local(el);
    if (tag === "r") return run2(el);
    if (["oMath", "e", "num", "den", "sub", "sup", "deg", "lim", "fName"].includes(tag)) return renderSeq(children(el));
    if (tag === "f") {
      const num3 = subOf(el, "num"), den = subOf(el, "den");
      const kind = prop(el, "type", "bar");
      if (kind === "noBar") return [`${BS3}binom{${num3}}{${den}}`];
      if (kind === "skw" || kind === "lin") return [`{${num3}}/{${den}}`];
      return [`${BS3}frac{${num3}}{${den}}`];
    }
    if (["sSup", "sSub", "sSubSup", "sPre"].includes(tag)) {
      let base = subOf(el, "e");
      const sub4 = subOf(el, "sub");
      let sup2 = subOf(el, "sup");
      if (tag === "sPre") return [`{}_{${sub4}}^{${sup2}}${base}`];
      const fn = /^\\mathrm\{([A-Za-z]+)\}$/.exec(base);
      if (fn && FUNCTIONS.has(fn[1])) base = BS3 + fn[1];
      if (sup2 === `^{${BS3}circ}`) sup2 = `${BS3}circ`;
      if (/[\^_]\S*$/.test(base) && (tag !== "sSub" && sup2 || tag !== "sSup" && sub4)) base = `{${base}}`;
      return [base + (sub4 && tag !== "sSup" ? `_{${sub4}}` : "") + (sup2 && tag !== "sSub" ? `^{${sup2}}` : "")];
    }
    if (tag === "rad") {
      const body = subOf(el, "e"), deg = subOf(el, "deg");
      const hide = !["on", "1", "true"].includes(prop(el, "degHide", "off"));
      return [deg && hide ? `${BS3}sqrt[${deg}]{${body}}` : `${BS3}sqrt{${body}}`];
    }
    if (tag === "nary") {
      const chr = prop(el, "chr", "\u222B");
      const op = tables_default.NARY[chr];
      if (op === void 0) throw new OmmlError("operator " + chr);
      const sub4 = subOf(el, "sub"), sup2 = subOf(el, "sup"), body = subOf(el, "e");
      return [op + (sub4 ? `_{${sub4}}` : "") + (sup2 ? `^{${sup2}}` : "") + (body ? " " + body : "")];
    }
    if (tag === "d") {
      const beg = prop(el, "begChr", "("), end = prop(el, "endChr", ")"), sep = prop(el, "sepChr", "|");
      for (const f of [beg, end, sep]) if (!has4(tables_default.FENCE_CHARS, f)) throw new OmmlError("fence " + f);
      const parts = elements(el).filter((i) => local(i) === "e").map((i) => join(renderSeq(children(i)), true));
      if (parts.length === 1 && beg === "(" && end === ")" && /^\\binom\{[^{}]*\}\{[^{}]*\}$/.test(parts[0])) return [parts[0]];
      const separator2 = ` ${tables_default.FENCE_CHARS[sep].replace(/\./g, "|")} `;
      return [`${BS3}left${tables_default.FENCE_CHARS[beg]} ${parts.join(separator2)} ${BS3}right${tables_default.FENCE_CHARS[end]}`];
    }
    if (tag === "func") {
      const name = subOf(el, "fName");
      const plain2 = name.replace(/\\mathrm\{([^}]*)\}/g, "$1");
      const head = FUNCTIONS.has(plain2) ? BS3 + plain2 : name;
      return [head, subOf(el, "e")];
    }
    if (tag === "limLow" || tag === "limUpp") {
      const body = subOf(el, "e"), lim = subOf(el, "lim");
      const named = /^\\mathrm\{(lim|max|min|sup|inf)\}$/.exec(body);
      if ([`${BS3}lim`, `${BS3}max`, `${BS3}min`, `${BS3}sup`, `${BS3}inf`].includes(body) || named) {
        return [(named ? BS3 + named[1] : body) + (tag === "limLow" ? `_{${lim}}` : `^{${lim}}`)];
      }
      return [tag === "limLow" ? `${BS3}underset{${lim}}{${body}}` : `${BS3}overset{${lim}}{${body}}`];
    }
    if (tag === "acc") {
      const chr = prop(el, "chr", "\u0302");
      const command = tables_default.ACCENTS[chr];
      if (command === void 0) throw new OmmlError("accent " + chr);
      return [`${command}{${subOf(el, "e")}}`];
    }
    if (tag === "bar") {
      const body = subOf(el, "e");
      return [prop(el, "pos", "top") === "bot" ? `${BS3}underline{${body}}` : `${BS3}overline{${body}}`];
    }
    if (tag === "groupChr") {
      const body = subOf(el, "e");
      const chr = prop(el, "chr", void 0);
      if (chr === "\u2192") return [`${BS3}overrightarrow{${body}}`];
      if (chr === "\u2190") return [`${BS3}overleftarrow{${body}}`];
      if (chr === "\u2194") return [`${BS3}overleftrightarrow{${body}}`];
      return [prop(el, "pos", "bot") === "top" ? `${BS3}overbrace{${body}}` : `${BS3}underbrace{${body}}`];
    }
    if (tag === "box" || tag === "phant") return [subOf(el, "e")];
    if (tag === "borderBox") return [`${BS3}boxed{${subOf(el, "e")}}`];
    if (tag === "m") {
      const rows = elements(el).filter((r) => local(r) === "mr").map((r) => elements(r).filter((c) => local(c) === "e").map(group));
      const width = Math.max(0, ...rows.map((r) => r.length));
      if (!width) throw new OmmlError("empty matrix");
      return [`${BS3}begin{array}{${"c".repeat(width)}} ${rows.map((r) => r.join(" & ")).join(` ${BS3}${BS3} `)} ${BS3}end{array}`];
    }
    if (tag === "eqArr") {
      const rows = elements(el).filter((i) => local(i) === "e").map(group);
      return [`${BS3}begin{array}{l} ${rows.join(` ${BS3}${BS3} `)} ${BS3}end{array}`];
    }
    if (tag === "ctrlPr" || tag === "rPr") return [];
    throw new OmmlError("element " + tag);
  }
  function oMathToLatex(zone) {
    return join(renderSeq(children(zone)), true);
  }
  function ommlToLatex(xml) {
    const cleaned = xml.replace(/<(?!\/?m:)[^>]+>/g, "").replace(/&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, "&amp;");
    let root;
    try {
      root = parseXml(`<root>${cleaned}</root>`);
    } catch (e3) {
      throw new OmmlError("unreadable OMML");
    }
    if (!root) throw new OmmlError("unreadable OMML");
    const display = elements(root).some((i) => local(i) === "oMathPara");
    const zones = [...descendants(root)].filter((i) => local(i) === "oMath");
    if (!zones.length) throw new OmmlError("no math");
    const pieces = zones.map(oMathToLatex);
    const latex = pieces.length > 1 ? tidy(pieces.filter((p2) => p2).join(` ${BS3}${BS3} `), true) : tidy(pieces[0], true);
    if (!latex) throw new OmmlError("empty");
    return [latex, display];
  }
  var OmmlError, BS3, has4, isAlpha2, children, group;
  var init_omml = __esm({
    "src/omml.js"() {
      init_tables();
      init_mtef();
      init_xml();
      OmmlError = class extends Error {
      };
      BS3 = "\\";
      has4 = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
      isAlpha2 = (s) => /^[A-Za-zÀ-ɏͰ-ϿЀ-ӿḀ-ỿ]$/u.test(s);
      children = (el, names) => elements(el).filter((c) => !local(c).endsWith("Pr") && (!names || names.includes(local(c))));
      group = (el) => join(renderSeq(children(el)), true);
    }
  });

  // src/exam.js
  function splitChildren(xml) {
    const out = [];
    let i = 0;
    while (i < xml.length) {
      const lt = xml.indexOf("<", i);
      if (lt < 0) break;
      if (xml.startsWith("<!--", lt)) {
        i = xml.indexOf("-->", lt) + 3;
        continue;
      }
      const head = /^<([\w:.-]+)((?:\s+[^\s=/>]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>/.exec(xml.slice(lt, lt + 4e3));
      if (!head) {
        i = lt + 1;
        continue;
      }
      const name = head[1];
      if (head[3]) {
        out.push(xml.slice(lt, lt + head[0].length));
        i = lt + head[0].length;
        continue;
      }
      let depth = 1, pos = lt + head[0].length;
      const open = new RegExp(`<${name.replace(/[.]/g, "\\.")}(?=[\\s>/])|</${name.replace(/[.]/g, "\\.")}>`, "g");
      open.lastIndex = pos;
      let m;
      while (m = open.exec(xml)) {
        if (m[0][1] === "/") {
          if (--depth === 0) {
            pos = m.index + m[0].length;
            break;
          }
        } else {
          const gt = xml.indexOf(">", m.index);
          if (xml[gt - 1] !== "/") depth++;
        }
      }
      if (depth !== 0) throw new Error("unbalanced <" + name + ">");
      out.push(xml.slice(lt, pos));
      i = pos;
    }
    return out;
  }
  function parsePara(xml) {
    if (/^<w:p\b[^>]*\/>$/.test(xml)) return { open: xml.replace(/\/>$/, ">"), ppr: "", children: [] };
    const open = /^<w:p\b[^>]*>/.exec(xml)[0];
    let inner = xml.slice(open.length, xml.length - 6);
    let ppr = "";
    const m = /^\s*<w:pPr>[\s\S]*?<\/w:pPr>|^\s*<w:pPr\/>/.exec(inner);
    if (m) {
      ppr = m[0].trim();
      inner = inner.slice(m[0].length);
    }
    return { open, ppr, children: splitChildren(inner) };
  }
  function pprChildren(ppr) {
    if (!ppr || ppr === "<w:pPr/>") return [];
    return splitChildren(ppr.replace(/^<w:pPr>/, "").replace(/<\/w:pPr>$/, ""));
  }
  function setPprChild(ppr, tag, xml) {
    const kids = pprChildren(ppr).filter((k) => tagName(k) !== "w:" + tag);
    if (xml) {
      const rank = (t) => {
        const r = PPR_ORDER.indexOf(t.replace(/^w:/, ""));
        return r < 0 ? 999 : r;
      };
      const at2 = kids.findIndex((k) => rank(tagName(k)) > rank("w:" + tag));
      if (at2 < 0) kids.push(xml);
      else kids.splice(at2, 0, xml);
    }
    return kids.length ? `<w:pPr>${kids.join("")}</w:pPr>` : "";
  }
  function childText(c) {
    if (isRun(c)) return hasObject(c) ? "\uFFFC" : runText(c);
    if (isMath(c)) return "\uFFFD";
    if (/^<w:hyperlink[\s>]/.test(c)) return splitChildren(c.replace(/^<w:hyperlink\b[^>]*>/, "").replace(/<\/w:hyperlink>$/, "")).map(childText).join("");
    return "";
  }
  function childWidth(c, pt) {
    if (isRun(c) && /<w:object\b/.test(c)) {
      const m = /style="[^"]*width:([\d.]+)pt/.exec(c);
      return m ? Number(m[1]) : 30;
    }
    if (isRun(c) && /<w:drawing/.test(c)) {
      const m = /<wp:extent cx="(\d+)"/.exec(c);
      return m ? Number(m[1]) / 12700 : 60;
    }
    if (isMath(c)) return ((c.match(/<m:t\b[^>]*>([^<]*)<\/m:t>/g) || []).join("").replace(/<[^>]+>/g, "").length * 0.5 + 2) * pt;
    return [...childText(c).replace(/\t/g, "")].length * pt * 0.47;
  }
  function parseBody(pkg) {
    const dm = /(<pkg:part pkg:name="\/word\/document\.xml"[^>]*>\s*<pkg:xmlData>)([\s\S]*?)(<\/pkg:xmlData>)/.exec(pkg);
    if (!dm) throw new Error("kh\xF4ng c\xF3 /word/document.xml");
    const doc = dm[2];
    const bm = /^([\s\S]*?<w:body>)([\s\S]*?)(<w:sectPr\b(?:(?!<w:sectPr)[\s\S])*?<\/w:sectPr>|<w:sectPr\/>)?(<\/w:body>[\s\S]*)$/.exec(doc);
    if (!bm) throw new Error("kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c w:body");
    const blocks = splitChildren(bm[2]).map((xml) => tagName(xml) === "w:p" ? __spreadValues({ kind: "p" }, parsePara(xml)) : { kind: "other", xml });
    return { pkg, dm, head: bm[1], blocks, sectPr: bm[3] || "", tail: bm[4] };
  }
  function buildBody(model, blocks = model.blocks) {
    const body = blocks.map((b) => b.kind === "p" ? buildPara(b) : b.xml).join("");
    const doc = model.head + body + model.sectPr + model.tail;
    const { pkg, dm } = model;
    return pkg.slice(0, dm.index) + dm[1] + doc + dm[3] + pkg.slice(dm.index + dm[0].length);
  }
  function pageTextWidthTwips(model) {
    const sz = /<w:pgSz\b[^>]*w:w="(\d+)"/.exec(model.sectPr), mar = /<w:pgMar\b[^>]*/.exec(model.sectPr);
    if (!sz || !mar) return 9638;
    const l = /w:left="(\d+)"/.exec(mar[0]), r = /w:right="(\d+)"/.exec(mar[0]);
    return Number(sz[1]) - Number(l ? l[1] : 1134) - Number(r ? r[1] : 1134);
  }
  function labelMark(run4) {
    if (/<w:u\b(?![^>]*w:val="none")/.test(run4)) return "underline";
    if (hasRedColor(run4)) return "red";
    if (/<w:highlight\b(?![^>]*w:val="none")/.test(run4)) return "highlight";
    return null;
  }
  function splitRun(run4, at2) {
    run4 = run4.replace(/<w:lastRenderedPageBreak\/>/g, "");
    const m = /^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>)?\s*<w:t\b[^>]*>([^<]*)<\/w:t>\s*<\/w:r>$/.exec(run4);
    if (!m) return null;
    const text = unesc(m[3]);
    const mk = (t) => t ? `${m[1]}${m[2] || ""}<w:t xml:space="preserve">${escapeXml(t)}</w:t></w:r>` : "";
    return [mk(text.slice(0, at2)), mk(text.slice(at2))];
  }
  function findOptionsInParagraph(para2, wanted = RE_OPT, upper = true) {
    const kids = para2.children.slice();
    const found = [];
    let seenContent = false, lastWasGap = true;
    for (let i = 0; i < kids.length; i++) {
      const c = kids[i];
      const text = childText(c);
      if (isRun(c) && !hasObject(c)) {
        const m = wanted.exec(text);
        const expected = found.length ? String.fromCharCode(found[0].letter.charCodeAt(0) + found.length) : null;
        if (m && (!expected || m[1] === expected) && (lastWasGap || !seenContent || /^[\s\u00A0]/.test(text) && text.length > m[0].length)) {
          const labelEnd = m[0].length;
          const lead = text.length - text.trimStart().length;
          if (lead === 0 || !text.slice(0, lead).trim()) {
            const labelText = text.slice(0, labelEnd);
            if (labelEnd < text.length || /[A-Za-z]/.test(labelText)) {
              const parts = text.length > labelEnd ? splitRunAt(c, labelEnd) : [c, ""];
              if (!parts) return { options: [], ok: false };
              const label = parts[0];
              found.push({ at: i, letter: m[1], labelRun: label, rest: parts[1] });
              seenContent = true;
              lastWasGap = false;
              continue;
            }
          }
        }
      }
      const gap = !text.replace(/[\s\t\u00A0]/g, "");
      if (!gap) {
        lastWasGap = /\s$/.test(text);
        if (!found.length) return { options: [], ok: found.length > 0 };
      } else if (/\t|\s{2,}/.test(text) || text === "") lastWasGap = true;
      if (isRun(c) && /<w:tab\/>/.test(c)) lastWasGap = true;
    }
    if (!found.length) return { options: [], ok: false };
    const opts = found.map((f, k) => {
      const end = k + 1 < found.length ? found[k + 1].at : kids.length;
      let content2 = [f.rest, ...kids.slice(f.at + 1, end)].filter(Boolean);
      return { letter: f.letter, labelRun: f.labelRun, content: content2 };
    });
    return { options: opts, ok: true };
  }
  function trimContent(content2) {
    const empty2 = (c) => isRun(c) && !hasObject(c) && !runText(c).replace(/[\s\t\u00A0]/g, "") && !/<w:br\b/.test(c);
    const out = content2.slice();
    while (out.length && (empty2(out[out.length - 1]) || /^<w:(proofErr|bookmark\w*)\b/.test(out[out.length - 1]))) out.pop();
    while (out.length && empty2(out[0])) out.shift();
    return out;
  }
  function analyze(model) {
    const parts = [];
    let part = { title: "", kind: "mc", start: 0, questions: [], blockIndex: -1 };
    const text = (b) => b.kind === "p" ? paragraphText(b) : "";
    const starts = [];
    let limit = model.blocks.length, sawQuestion = false;
    const enders = [];
    for (let i = 0; i < model.blocks.length; i++) {
      const t = text(model.blocks[i]);
      if (RE_QUESTION.test(t)) sawQuestion = true;
      else if (sawQuestion && model.blocks[i].kind === "p" && RE_END.test(t)) enders.push(i);
    }
    if (enders.length && enders.length <= 2) limit = enders[0];
    model.blocks.slice(0, limit).forEach((b, i) => {
      const t = text(b);
      if (b.kind === "p" && RE_PART.test(t)) starts.push({ i, type: "part", t });
      else if (b.kind === "p" && RE_QUESTION.test(t)) starts.push({ i, type: "q", t, number: Number(RE_QUESTION.exec(t)[2]) });
    });
    const mark = (i) => starts.findIndex((s) => s.i === i);
    const qStarts = starts.filter((s) => s.type === "q");
    const english = qStarts.length > 0 && qStarts.filter((s) => /^\s*question/i.test(s.t)).length * 2 > qStarts.length;
    starts.forEach((s, k) => {
      const next = k + 1 < starts.length ? starts[k + 1].i : limit;
      if (s.type === "part") {
        part = { title: s.t.trim(), kind: partKind(s.t), blockIndex: s.i, questions: [] };
        parts.push(part);
        return;
      }
      if (!parts.length) {
        part = { title: "", kind: "mc", blockIndex: -1, questions: [] };
        parts.push(part);
      }
      const q = { number: s.number, start: s.i, end: next, options: null, optionParas: [], statements: [], answer: null, flags: [] };
      const kind = part.kind;
      const stemText = [];
      let i = s.i;
      let optionsStarted = false;
      for (; i < next; i++) {
        const b = model.blocks[i];
        if (b.kind !== "p") continue;
        const t = paragraphText(b);
        if (kind === "mc" || kind === "other") {
          const probe = RE_OPT.test(t) ? findOptionsInParagraph(b) : { ok: false };
          if (probe.ok && probe.options[0].letter === (q.options ? "ABCD"[q.options.length] : "A") || probe.ok && q.options && "ABCD"[q.options.length] === probe.options[0].letter) {
            q.options = (q.options || []).concat(probe.options);
            q.optionParas.push(i);
            optionsStarted = true;
            continue;
          }
          if (optionsStarted && t.trim() && q.options.length < 4 && !q.flags.includes("complexOptions")) q.flags.push("complexOptions");
        }
        if (kind === "tf") {
          const m = RE_STMT.exec(t);
          if (m) {
            q.statements.push({ block: i, letter: m[1] });
            continue;
          }
        }
        if (RE_ANSWER_LINE.test(t)) {
          q.answer = { text: t.replace(RE_ANSWER_LINE, "").trim(), block: i };
          continue;
        }
        if (!optionsStarted && i > s.i) stemText.push(t);
      }
      q.stemEnd = q.optionParas.length ? q.optionParas[0] : q.statements.length ? q.statements[0].block : next;
      q.ownEnd = english && q.optionParas.length ? q.optionParas[q.optionParas.length - 1] + 1 : next;
      if (RE_SHARED.test(text(model.blocks[s.i]))) q.flags.push("shared");
      if (q.options) {
        const letters = q.options.map((o) => o.letter).join("");
        if (letters !== "ABCD".slice(0, q.options.length) || q.options.length !== 4) q.flags.push("optionCount:" + letters);
        if (q.options.some((o) => RE_OPTION_REF.test(o.content.map(childText).join("")))) q.flags.push("optionRefs");
      } else if (kind === "mc") q.flags.push("noOptions");
      part.questions.push(q);
    });
    const sections = english ? buildSections(model, parts.flatMap((p2) => p2.questions)) : void 0;
    let expected = 0;
    if (english) {
      for (const b of model.blocks.slice(0, limit)) {
        const x = b.kind === "p" ? paragraphText(b) : (b.xml.match(/<w:t\b[^>]*>[^<]*<\/w:t>/g) || []).map((s) => s.replace(/<[^>]+>/g, "")).join(" ");
        expected += (x.match(/\bQuestion\s*\d+/gi) || []).length;
      }
    }
    return { parts: parts.filter((p2) => p2.questions.length || p2.blockIndex >= 0), english, sections, expected, limit, detected: parts.reduce((n, p2) => n + p2.questions.length, 0) };
  }
  function buildSections(model, qs) {
    const nonBlank = (b) => b.kind !== "p" || Boolean(paragraphText(b).trim());
    const secs = [];
    qs.forEach((q, k) => {
      const from = k ? qs[k - 1].ownEnd : 0, to = q.start;
      if (k === 0 || model.blocks.slice(from, to).some(nonBlank)) secs.push({ index: secs.length, lead: { from, to }, questions: [], first: k === 0 });
      secs[secs.length - 1].questions.push(q);
    });
    for (const s of secs) {
      const lead = model.blocks.slice(s.lead.from, s.lead.to);
      const paras = lead.filter((b) => b.kind === "p").map(paragraphText).filter((t) => t.trim());
      const text = paras.join("\n");
      const words = text.split(/\s+/).filter(Boolean).length;
      const rich = lead.some((b) => b.kind !== "p" || b.children.some(hasObject));
      let kind = "independent";
      if (RE_EN_ORDER.test(text)) kind = "order";
      else if (RE_EN_PASSAGE.test(text) || !s.first && (words > 70 || paras.length >= 3 || rich)) kind = "passage";
      s.kind = kind;
      s.mode = kind === "independent" ? "shuffle" : "keep";
      s.firstNumber = s.questions[0].number;
      s.lastNumber = s.questions[s.questions.length - 1].number;
      s.title = (paras[paras.length > 1 && s.first ? paras.length - 1 : 0] || "").trim().slice(0, 90);
    }
    return secs;
  }
  function answersOf(model, analysis) {
    const rows = [];
    for (const part of analysis.parts) {
      for (const q of part.questions) {
        const row = { part: part.title, kind: part.kind, number: q.number };
        if (part.kind === "mc" || part.kind === "other") {
          const marked = (q.options || []).filter((o) => labelMark(o.labelRun)).map((o) => o.letter);
          row.value = marked.length === 1 ? marked[0] : marked.length ? marked.join("") : null;
          row.multiple = marked.length > 1;
          if (marked.length > 1 && marked.length === (q.options || []).length) {
            row.value = null;
            row.multiple = false;
          }
        } else if (part.kind === "tf") {
          const marks = q.statements.map((s) => {
            const b = model.blocks[s.block];
            const label = b.children.find((c) => isRun(c) && /[a-d]\s*\)/.test(runText(c)));
            return label ? Boolean(labelMark(label)) : false;
          });
          row.value = marks.some(Boolean) ? q.statements.map((s, i) => `${s.letter}${marks[i] ? "\u0110" : "S"}`).join(" ") : null;
          row.tf = marks.some(Boolean) ? marks.map((m) => m ? "\u0110" : "S") : null;
        } else if (part.kind === "short") {
          row.value = q.answer ? q.answer.text : null;
        }
        rows.push(row);
      }
    }
    return rows;
  }
  function keyTableRows(xml) {
    return (xml.match(/<w:tr\b[\s\S]*?<\/w:tr>/g) || []).map((r) => (r.match(/<w:tc\b[\s\S]*?<\/w:tc>/g) || []).map((c) => xmlText(c).replace(/\s+/g, " ").trim()));
  }
  function parseAnswerKey(blocks) {
    const key = { mc: /* @__PURE__ */ new Map(), tf: /* @__PURE__ */ new Map(), short: /* @__PURE__ */ new Map() };
    const put = (num3, v) => {
      if (v && !key[v.kind].has(num3)) key[v.kind].set(num3, v.value);
    };
    let text = "";
    for (const b of blocks) {
      if (b.kind === "p") {
        text += paragraphText(b) + "\n";
        continue;
      }
      if (tagName(b.xml) !== "w:tbl") continue;
      const rows = keyTableRows(b.xml).filter((r) => r.some(Boolean));
      for (let i = 0; i < rows.length; i++) {
        const r = rows[i], nums = r.slice(1).map((c) => KEY_NUM.exec(c));
        if (r.length >= 3 && nums.every(Boolean) && rows[i + 1]) {
          const vals = rows[i + 1];
          nums.forEach((m, k) => {
            var _a8;
            return put(Number(m[1]), keyKind((_a8 = vals[k + 1]) != null ? _a8 : ""));
          });
          i++;
          continue;
        }
        for (let k = 0; k + 1 < r.length; k += 2) {
          const m = KEY_NUM.exec(r[k]);
          if (m) put(Number(m[1]), keyKind(r[k + 1]));
          else break;
        }
      }
    }
    const take = (re, fn) => {
      text = text.replace(re, (all, ...g) => {
        fn(g);
        return " ".repeat(all.length);
      });
    };
    take(/(?:C[âa]u\s*)?(\d{1,3})\s*[.:)\-–]\s*((?:[a-d]\s*[).:\-–]\s*[ĐSđs](?![\p{L}\d])[\s,;]*){4}|[ĐSđs](?:[\s,;\-–]*[ĐSđs]){3}(?![\p{L}\d]))/giu, (g) => put(Number(g[0]), keyKind(g[1])));
    take(/(?:C[âa]u\s*)?(\d{1,3})\s*[.:)\-–]?\s*([A-D])(?![\p{L}\d])/gu, (g) => put(Number(g[0]), { kind: "mc", value: g[1] }));
    take(/(?:C[âa]u\s*)?(\d{1,3})\s*[.:)\-–=]\s*(-?\d[\d.,/]*)(?![\p{L}\d])/giu, (g) => put(Number(g[0]), { kind: "short", value: g[1] }));
    return key;
  }
  function markLabel(p2, re, letter) {
    for (let i = 0; i < p2.children.length; i++) {
      const c = p2.children[i];
      if (!isRun(c) || hasObject(c)) continue;
      const t = runText(c), m = re.exec(t);
      if (!m || m[1] !== letter) continue;
      const parts = t.length > m[0].length ? splitRunAt(c, m[0].length) : [c, ""];
      if (!parts) return false;
      p2.children.splice(i, 1, underlineRun(parts[0]), ...parts[1] ? [parts[1]] : []);
      return true;
    }
    return false;
  }
  function applyAnswerKey(pkg) {
    let model;
    try {
      model = parseBody(pkg);
    } catch (e3) {
      return { pkg, changed: false, count: 0 };
    }
    const analysis = analyze(model);
    let from = analysis.limit;
    if (from >= model.blocks.length) {
      const last = model.blocks.map((b, i) => [b, i]).filter(([b]) => b.kind === "other" && tagName(b.xml) === "w:tbl").pop();
      from = last && last[1] > (analysis.parts.flatMap((x) => x.questions).pop() || { start: 0 }).start ? last[1] : from;
    }
    if (from >= model.blocks.length) return { pkg, changed: false, count: 0 };
    const key = parseAnswerKey(model.blocks.slice(from));
    if (!key.mc.size && !key.tf.size && !key.short.size) return { pkg, changed: false, count: 0 };
    const rows = answersOf(model, analysis), inserts = [];
    let count = 0, ri = 0;
    for (const part of analysis.parts) {
      for (const q of part.questions) {
        const row = rows[ri++];
        if (!row || row.value !== null && row.value !== void 0) continue;
        if (part.kind === "mc" || part.kind === "other") {
          const v = key.mc.get(q.number);
          if (v && q.options && q.optionParas.some((pi) => markLabel(model.blocks[pi], /^\s*([A-D])\s*[.)]/, v))) count++;
        } else if (part.kind === "tf") {
          const v = key.tf.get(q.number);
          if (!v || v.length !== q.statements.length) continue;
          let any = false;
          q.statements.forEach((st, i) => {
            if (v[i] === "\u0110" && markLabel(model.blocks[st.block], /^\s*([a-d])\s*\)/, st.letter)) any = true;
          });
          if (any || v.every((x) => x === "S")) count++;
        } else if (part.kind === "short") {
          const v = key.short.get(q.number);
          if (v) {
            inserts.push([q.start, v]);
            count++;
          }
        }
      }
    }
    if (!count) return { pkg, changed: false, count: 0 };
    const blocks = model.blocks.slice();
    for (const [at2, v] of inserts.sort((a, b) => b[0] - a[0])) {
      blocks.splice(at2 + 1, 0, { kind: "p", open: "<w:p>", ppr: "<w:pPr><w:rPr><w:vanish/></w:rPr></w:pPr>", children: [`<w:r><w:rPr><w:vanish/></w:rPr><w:t xml:space="preserve">\u0110\xE1p \xE1n: ${escapeXml(v)}</w:t></w:r>`] });
    }
    return { pkg: buildBody(model, blocks), changed: true, count };
  }
  function fontPt(content2, para2) {
    for (const c of content2) {
      const m2 = /<w:sz w:val="(\d+)"/.exec(c);
      if (m2) return Number(m2[1]) / 2;
    }
    const m = /<w:sz w:val="(\d+)"/.exec(para2 && para2.ppr || "");
    return m ? Number(m[1]) / 2 : 13;
  }
  function layoutOptions(model, options, templatePara, layout2 = "auto") {
    const W = pageTextWidthTwips(model);
    const pt = fontPt(options.flatMap((o) => o.content), templatePara);
    const widths = options.map((o) => 14 + trimContent(o.content).reduce((s, c) => s + childWidth(c, pt), 0));
    const maxW = Math.max(...widths) * 20 + 120;
    let per = layout2 === "auto" ? maxW <= W / 4 ? 4 : maxW <= W / 2 ? 2 : 1 : Number(layout2);
    if (options.length < per) per = options.length;
    const base = setPprChild(templatePara ? templatePara.ppr : "", "tabs", null);
    const colTabs = per > 1 ? `<w:tabs>${Array.from({ length: per - 1 }, (_x, k) => `<w:tab w:val="left" w:pos="${Math.round(W / per * (k + 1))}"/>`).join("")}</w:tabs>` : "";
    const lines = [];
    for (let i = 0; i < options.length; i += per) lines.push(options.slice(i, i + per));
    const paras = lines.map((line3, li) => {
      const kids = [];
      line3.forEach((o, k) => {
        if (k > 0) kids.push(TAB_RUN);
        const body = trimContent(o.content);
        const lead = body.length && isRun(body[0]) && !hasObject(body[0]) && /^\s/.test(runText(body[0]));
        kids.push(o.labelRun, ...lead ? [] : [SPACE_RUN], ...body);
      });
      let ppr = per > 1 ? setPprChild(base, "tabs", colTabs) : base;
      if (li < lines.length - 1) ppr = setPprChild(ppr, "keepNext", "<w:keepNext/>");
      return { kind: "p", open: templatePara ? templatePara.open.replace(/\s+w14:paraId="[^"]*"|\s+w14:textId="[^"]*"/g, "") : "<w:p>", ppr, children: kids };
    });
    return { paras, perLine: per };
  }
  function renumberQuestionInParagraph(p2, newNumber, { formatTemplate, word: word2 = "keep" } = {}) {
    if (!p2 || !p2.children) return false;
    const fullText = paragraphText(p2);
    const m = RE_QUESTION.exec(fullText);
    if (!m) return false;
    let charPos = 0;
    const runMap = [];
    for (let i = 0; i < p2.children.length; i++) {
      const c = p2.children[i];
      if (isRun(c) && !hasObject(c)) {
        const t = runText(c);
        if (t.length > 0) {
          runMap.push({ i, start: charPos, end: charPos + t.length, text: t, runXml: c });
          charPos += t.length;
          continue;
        }
      }
      charPos += childText(c).length;
    }
    const matchStart = m.index;
    const matchEnd = m.index + m[0].length;
    const delim = m[3] && /[.:)]/.test(m[3]) ? m[3] : ".";
    const label = word2 === "C\xE2u" || word2 === "B\xE0i" ? word2 : m[1];
    const replacementLabel = `${label} ${newNumber}${delim}`;
    const affected = runMap.filter((r) => r.start < matchEnd && r.end > matchStart);
    if (!affected.length) return false;
    const applyFormat = (runXml2) => {
      if (!formatTemplate) return runXml2;
      const rprMatch = /<w:rPr>[\s\S]*?<\/w:rPr>/.exec(formatTemplate);
      if (!rprMatch) return runXml2;
      const rHead = /^(<w:r\b[^>]*>)(?:\s*<w:rPr>[\s\S]*?<\/w:rPr>)?/.exec(runXml2);
      if (!rHead) return runXml2;
      return `${rHead[1]}${rprMatch[0]}${runXml2.slice(rHead[0].length)}`;
    };
    if (affected.length === 1) {
      const r = affected[0];
      const localStart = matchStart - r.start;
      const localEnd = matchEnd - r.start;
      let hasTrailingSpace2 = r.text.slice(localEnd).startsWith(" ") || r.text.slice(localEnd).startsWith("	");
      if (!hasTrailingSpace2 && localEnd >= r.text.length) {
        for (let j = r.i + 1; j < p2.children.length; j++) {
          const nextRun = p2.children[j];
          const nt = childText(nextRun);
          if (nt.length > 0) {
            if (nt.startsWith(" ") || nt.startsWith("	")) hasTrailingSpace2 = true;
            break;
          }
        }
      }
      const needSpace2 = !hasTrailingSpace2;
      const before = r.text.slice(0, localStart);
      const after = r.text.slice(localEnd);
      const combined = before + replacementLabel + (needSpace2 ? " " : "") + after;
      let newRun = r.runXml.replace(/<w:t\b[^>]*>[\s\S]*?<\/w:t>/, `<w:t xml:space="preserve">${escapeXml(combined)}</w:t>`);
      if (formatTemplate) newRun = applyFormat(newRun);
      p2.children[r.i] = newRun;
      return true;
    }
    const first = affected[0];
    const last = affected[affected.length - 1];
    const firstPrefix = first.text.slice(0, matchStart - first.start);
    const lastSuffix = last.text.slice(matchEnd - last.start);
    let hasTrailingSpace = lastSuffix.startsWith(" ") || lastSuffix.startsWith("	");
    if (!hasTrailingSpace && lastSuffix.length === 0) {
      for (let j = last.i + 1; j < p2.children.length; j++) {
        const nextRun = p2.children[j];
        const nt = childText(nextRun);
        if (nt.length > 0) {
          if (nt.startsWith(" ") || nt.startsWith("	")) hasTrailingSpace = true;
          break;
        }
      }
    }
    const needSpace = !hasTrailingSpace;
    const firstCombined = firstPrefix + replacementLabel + (needSpace ? " " : "");
    let newFirstRun = first.runXml.replace(/<w:t\b[^>]*>[\s\S]*?<\/w:t>/, `<w:t xml:space="preserve">${escapeXml(firstCombined)}</w:t>`);
    if (formatTemplate) newFirstRun = applyFormat(newFirstRun);
    p2.children[first.i] = newFirstRun;
    for (let k = 1; k < affected.length - 1; k++) {
      p2.children[affected[k].i] = affected[k].runXml.replace(/<w:t\b[^>]*>[\s\S]*?<\/w:t>/, "");
    }
    p2.children[last.i] = last.runXml.replace(/<w:t\b[^>]*>[\s\S]*?<\/w:t>/, lastSuffix ? `<w:t xml:space="preserve">${escapeXml(lastSuffix)}</w:t>` : "");
    return true;
  }
  function styleQuestionLabel(p2, { bold = false, color = "", brk = false } = {}) {
    if (!p2 || !p2.children || !(bold || color || brk)) return false;
    const m = RE_QUESTION.exec(paragraphText(p2));
    if (!m) return false;
    let from = m.index + (m[0].length - m[0].trimStart().length), to = m.index + m[0].length;
    while (to > from && /\s/.test(paragraphText(p2)[to - 1])) to--;
    const splitAt = (offset) => {
      let pos2 = 0;
      for (let i = 0; i < p2.children.length; i++) {
        const c = p2.children[i], len3 = childText(c).length;
        if (offset === pos2) return true;
        if (offset < pos2 + len3) {
          if (!isRun(c) || hasObject(c)) return false;
          const parts = splitRunAt(c, offset - pos2);
          if (!parts || !parts[0] || !parts[1]) return false;
          p2.children.splice(i, 1, parts[0], parts[1]);
          return true;
        }
        pos2 += len3;
      }
      return offset === pos2;
    };
    if (!splitAt(to) || !splitAt(from)) return false;
    const set = {};
    if (bold) set.b = "<w:b/>";
    if (color) set.color = `<w:color w:val="${color}"/>`;
    let pos = 0, lastIdx = -1;
    for (let i = 0; i < p2.children.length; i++) {
      const c = p2.children[i], len3 = childText(c).length;
      if (pos >= from && pos + len3 <= to && len3 > 0 && isRun(c) && !hasObject(c) && Object.keys(set).length) {
        const h = /^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>)?/.exec(c);
        if (h) p2.children[i] = `${h[1]}${withRprChildren(h[2] ? h[2].trim() : "", set)}${c.slice(h[0].length)}`;
      }
      if (pos < to && pos + len3 >= to) lastIdx = i;
      pos += len3;
    }
    if (brk && lastIdx >= 0 && lastIdx + 1 < p2.children.length) {
      const rest = p2.children.slice(lastIdx + 1);
      if (rest.some((c) => childText(c).trim() || hasObject(c) || isMath(c))) {
        const nxt = p2.children[lastIdx + 1];
        if (isRun(nxt) && !hasObject(nxt)) p2.children[lastIdx + 1] = nxt.replace(/(<w:t\b[^>]*>)[ \u00a0\t]+/, "$1");
        p2.children.splice(lastIdx + 1, 0, "<w:r><w:br/></w:r>");
      }
    }
    return true;
  }
  function withRprChildren(rpr2, set) {
    const inner = rpr2 && rpr2 !== "<w:rPr/>" ? rpr2.replace(/^\s*<w:rPr>/, "").replace(/<\/w:rPr>\s*$/, "") : "";
    const kids = splitChildren(inner).filter((k) => !(tagName(k).replace(/^w:/, "") in set));
    const rank = (t) => {
      const r = RPR_ORDER.indexOf(t.replace(/^w:/, ""));
      return r < 0 ? 999 : r;
    };
    for (const [tag, xml] of Object.entries(set)) {
      const at2 = kids.findIndex((k) => rank(tagName(k)) > rank(tag));
      if (at2 < 0) kids.push(xml);
      else kids.splice(at2, 0, xml);
    }
    return `<w:rPr>${kids.join("")}</w:rPr>`;
  }
  function typeRun(run4, font, size) {
    if (hasObject(run4) || /<w:sym\b/.test(run4)) return run4;
    const m = /^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>|\s*<w:rPr\/>)?([\s\S]*)$/.exec(run4);
    if (!m) return run4;
    const set = {};
    if (font) set.rFonts = fontXml(font);
    if (size) Object.assign(set, sizeXml(size));
    return m[1] + withRprChildren(m[2] || "", set) + m[3];
  }
  function typeMath(xml, size) {
    const set = sizeXml(size);
    let out = xml.replace(/<w:rPr>[\s\S]*?<\/w:rPr>|<w:rPr\/>/g, (r) => withRprChildren(r, set));
    out = out.replace(/<m:r>((?:\s*<m:rPr>[\s\S]*?<\/m:rPr>|\s*<m:rPr\/>)?)(\s*<w:rPr>[\s\S]*?<\/w:rPr>|\s*<w:rPr\/>)?/g, (m0, mr, wr) => `<m:r>${mr}${withRprChildren(wr || "", set)}`);
    return out;
  }
  function typeChildren(children2, opts) {
    const mathSize = opts.mathSize === "text" ? opts.fontSize : opts.mathSize;
    let objects = 0;
    const out = children2.map((c) => {
      if (isRun(c)) {
        if (/<w:object\b/.test(c)) objects++;
        return typeRun(c, opts.font, opts.fontSize);
      }
      if (isMath(c)) return mathSize ? typeMath(c, mathSize) : c;
      if (/^<w:hyperlink[\s>]/.test(c)) {
        const open = /^<w:hyperlink\b[^>]*>/.exec(c)[0];
        const inner = splitChildren(c.slice(open.length, c.length - "</w:hyperlink>".length));
        const r = typeChildren(inner, opts);
        objects += r.objects;
        return open + r.children.join("") + "</w:hyperlink>";
      }
      return c;
    });
    return { children: out, objects };
  }
  function normalize(pkg, opts = {}) {
    pkg = prepareEnglish(pkg).pkg;
    const report = { questions: 0, renumbered: 0, relaid: 0, retyped: 0, objects: 0, skipped: [], notes: [] };
    if (opts.font || opts.fontSize || opts.mathSize) {
      const m0 = parseBody(pkg), a0 = analyze(m0);
      for (const part of a0.parts) {
        for (const q of part.questions) {
          for (let i = q.start; i < q.end; i++) {
            const b = m0.blocks[i];
            if (b.kind !== "p") continue;
            const r = typeChildren(b.children, opts);
            b.children = r.children;
            report.objects += r.objects;
            report.retyped++;
          }
        }
      }
      pkg = buildBody(m0);
    }
    const model = parseBody(pkg);
    const analysis = analyze(model);
    const replacements = /* @__PURE__ */ new Map();
    let counter3 = 0, firstLabel = null;
    for (const part of analysis.parts) {
      if (opts.renumber === "part") counter3 = 0;
      for (const q of part.questions) {
        report.questions++;
        const b = model.blocks[q.start];
        const newNumber = ++counter3;
        if (!firstLabel) {
          const foundRun = b.children.find((c) => isRun(c) && RE_QUESTION.test(runText(c)));
          if (foundRun) firstLabel = foundRun;
        }
        const fmt = opts.questionFormat ? firstLabel : null;
        if (opts.renumber && (opts.renumber === "continuous" || q.number !== newNumber)) {
          const ok = renumberQuestionInParagraph(b, newNumber, { formatTemplate: fmt, word: opts.labelWord });
          if (ok) report.renumbered++;
          else report.skipped.push(`C\xE2u ${q.number}: kh\xF4ng t\xECm th\u1EA5y nh\xE3n \u201CC\xE2u\u201D / \u201CB\xE0i\u201D`);
        } else if (opts.renumber || opts.questionFormat) {
          renumberQuestionInParagraph(b, newNumber, { formatTemplate: fmt, word: opts.labelWord });
        }
        if (opts.qBold || opts.qColor || opts.qBreak) styleQuestionLabel(b, { bold: opts.qBold, color: opts.qColor, brk: opts.qBreak });
        if (opts.keepNext) {
          for (let i = q.start; i < q.stemEnd; i++) if (model.blocks[i].kind === "p" && i + 1 <= q.stemEnd && (q.options || q.statements.length)) model.blocks[i].ppr = setPprChild(model.blocks[i].ppr, "keepNext", "<w:keepNext/>");
        }
        if (part.kind === "mc" && q.options && opts.layout !== false) {
          if (q.flags.some((f) => f === "complexOptions" || f.startsWith("optionCount"))) {
            report.skipped.push(`C\xE2u ${q.number}: ph\u01B0\u01A1ng \xE1n kh\xF4ng chu\u1EA9n (${q.flags.join(", ")}), gi\u1EEF nguy\xEAn b\u1ED1 c\u1EE5c`);
            continue;
          }
          const template3 = model.blocks[q.optionParas[0]];
          const options = q.options.map((o, k) => __spreadProps(__spreadValues({}, o), { labelRun: opts.labels === false ? o.labelRun : labelRunFor("ABCD"[k], o.labelRun) }));
          const { paras } = layoutOptions(model, options, template3, opts.layout || "auto");
          replacements.set(q.optionParas[0], { paras, remove: q.optionParas.slice(1) });
          report.relaid++;
        }
      }
    }
    const blocks = [];
    const removed = /* @__PURE__ */ new Set();
    for (const r of replacements.values()) r.remove.forEach((i) => removed.add(i));
    model.blocks.forEach((b, i) => {
      if (removed.has(i)) return;
      if (replacements.has(i)) blocks.push(...replacements.get(i).paras);
      else blocks.push(b);
    });
    return { pkg: buildBody(model, blocks), report };
  }
  function collectParas(xml) {
    const out = [];
    const walk = (frag) => {
      for (const c of splitChildren(frag)) {
        const t = tagName(c);
        if (t === "w:p") out.push(c);
        else if (/^w:(tbl|tr|tc|sdt|sdtContent)$/.test(t)) walk(c.replace(/^<[^>]+>/, "").replace(/<\/[\w:]+>$/, ""));
      }
    };
    walk(xml);
    return out;
  }
  function splitRunAt(run4, at2) {
    run4 = run4.replace(/<w:lastRenderedPageBreak\/>/g, "");
    const m = /^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>)?([\s\S]*)<\/w:r>$/.exec(run4);
    if (!m) return null;
    const kids = splitChildren(m[3]);
    const mk = (list3) => list3.length ? `${m[1]}${m[2] || ""}${list3.join("")}</w:r>` : "";
    let pos = 0;
    for (let k = 0; k < kids.length; k++) {
      const e3 = kids[k], tn = tagName(e3);
      if (at2 === pos) return [mk(kids.slice(0, k)), mk(kids.slice(k))];
      let len3 = 0;
      if (tn === "w:t") {
        const tm = /^<w:t\b[^>]*?(?:\/>|>([^<]*)<\/w:t>)$/.exec(e3);
        if (!tm) return null;
        const text = unesc(tm[1] || "");
        len3 = text.length;
        if (at2 < pos + len3) {
          const t = (s) => `<w:t xml:space="preserve">${escapeXml(s)}</w:t>`;
          return [mk([...kids.slice(0, k), t(text.slice(0, at2 - pos))]), mk([t(text.slice(at2 - pos)), ...kids.slice(k + 1)])];
        }
      } else if (tn === "w:tab" || tn === "w:br" || tn === "w:noBreakHyphen") len3 = 1;
      pos += len3;
    }
    return at2 === pos ? [mk(kids), ""] : null;
  }
  function splitParaAt(p2, offset) {
    const fresh = (open) => open.replace(/\s+w14:paraId="[^"]*"|\s+w14:textId="[^"]*"/g, "");
    const done = (a, b) => [__spreadProps(__spreadValues({}, p2), { children: a }), { kind: "p", open: fresh(p2.open), ppr: setPprChild(setPprChild(p2.ppr, "numPr", null), "ind", null), children: b }];
    let pos = 0;
    for (let i = 0; i < p2.children.length; i++) {
      const c = p2.children[i], len3 = childText(c).length;
      if (offset === pos) return done(p2.children.slice(0, i), p2.children.slice(i));
      if (offset < pos + len3) {
        if (!isRun(c) || hasObject(c)) return null;
        const parts = splitRunAt(c, offset - pos);
        if (!parts) return null;
        return done([...p2.children.slice(0, i), parts[0]].filter(Boolean), [parts[1], ...p2.children.slice(i + 1)].filter(Boolean));
      }
      pos += len3;
    }
    return offset === pos ? done(p2.children, []) : null;
  }
  function splitGlued(p2, nextIsList = false, depth = 0) {
    if (depth > 12) return [p2];
    const t = paragraphText(p2);
    for (const m of t.matchAll(RE_QN_GLOBAL)) {
      if (m.index > 0 && /\s/.test(t[m.index - 1]) && t.slice(0, m.index).trim()) {
        const parts = splitParaAt(p2, m.index);
        if (parts) return [...splitGlued(parts[0], false, depth + 1), ...splitGlued(parts[1], nextIsList, depth + 1)];
      }
    }
    const q = RE_QLEAD.exec(t);
    const rest = q ? t.slice(q[0].length) : t;
    let om = RE_ROW_ABCD.exec(rest);
    if (!om && q && nextIsList && !/(?:^|\s)B\./.test(rest)) om = /(?:^|[\s\u00A0])A\.(?=\s|$)/.exec(rest);
    if (om && (q || om.index > 0 && rest.slice(0, om.index).trim())) {
      const parts = splitParaAt(p2, (q ? q[0].length : 0) + om.index + (/^[\s\u00A0]/.test(om[0]) ? 1 : 0));
      if (parts && paragraphText(parts[1]).trim()) return [parts[0], parts[1]];
    }
    return [p2];
  }
  function joinSplitLabels(p2) {
    let n = 0;
    for (let i = 0; i + 1 < p2.children.length; i++) {
      const c = p2.children[i], d = p2.children[i + 1];
      if (!isRun(c) || !isRun(d) || hasObject(c) || hasObject(d) || !/^\s*[A-D]$/.test(runText(c)) || !/^[.)]/.test(runText(d))) continue;
      const parts = splitRunAt(d, 1);
      if (!parts || !/^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>)?\s*<w:t\b[^>]*>[^<]*<\/w:t>\s*<\/w:r>$/.test(c)) continue;
      p2.children[i] = c.replace(/(<w:t\b[^>]*>)([^<]*)(<\/w:t>)/, (_m, o, t, e3) => `<w:t xml:space="preserve">${t}${runText(parts[0])}${e3}`);
      p2.children[i + 1] = parts[1];
      if (!parts[1]) p2.children.splice(i + 1, 1);
      n++;
    }
    return n;
  }
  function upperLetterLists(pkg) {
    const m = /<pkg:part pkg:name="\/word\/numbering\.xml"[^>]*>\s*<pkg:xmlData>([\s\S]*?)<\/pkg:xmlData>/.exec(pkg);
    if (!m) return null;
    const abs = {}, num3 = {};
    for (const a of m[1].matchAll(/<w:abstractNum\b[^>]*w:abstractNumId="(\d+)"[\s\S]*?<\/w:abstractNum>/g)) {
      for (const l of a[0].matchAll(/<w:lvl\b[^>]*w:ilvl="(\d+)"[\s\S]*?<\/w:lvl>/g)) {
        const f = /<w:numFmt\b[^>]*w:val="(\w+)"/.exec(l[0]);
        (abs[a[1]] = abs[a[1]] || {})[l[1]] = f ? f[1] : "";
      }
    }
    for (const n of m[1].matchAll(/<w:num\b[^>]*w:numId="(\d+)"[^>]*>\s*<w:abstractNumId\b[^>]*w:val="(\d+)"/g)) num3[n[1]] = n[2];
    return (numId, ilvl) => (abs[num3[numId]] || {})[ilvl || "0"] === "upperLetter";
  }
  function materializeLetters(blocks, isUpper) {
    let next = 0, made = 0;
    const scan2 = (text) => {
      for (const m of text.matchAll(/(?:^|[\s ])([A-D])\.(?=\s|$)/g)) if (m[1] === "ABCD"[next]) next++;
    };
    for (const b of blocks) {
      if (b.kind !== "p") continue;
      const t = paragraphText(b), q = RE_QLEAD.exec(t);
      if (q) {
        next = 0;
        scan2(t.slice(q[0].length));
        continue;
      }
      const np = /<w:numPr>[\s\S]*?<\/w:numPr>/.exec(b.ppr || "");
      if (np && isUpper && next < 4 && isUpper((/<w:numId\b[^>]*w:val="(\d+)"/.exec(np[0]) || [])[1], (/<w:ilvl\b[^>]*w:val="(\d+)"/.exec(np[0]) || [])[1])) {
        const mark = pprChildren(b.ppr).find((k) => tagName(k) === "w:rPr") || "";
        b.children = [labelRunFor("ABCD"[next], `<w:r>${mark}</w:r>`), SPACE_RUN, ...b.children];
        b.ppr = setPprChild(setPprChild(b.ppr, "numPr", null), "ind", null);
        next++;
        made++;
      }
      scan2(t);
    }
    return made;
  }
  function prepareEnglish(pkg) {
    const stats = { tables: 0, split: 0, labels: 0 };
    let model;
    try {
      model = parseBody(pkg);
    } catch (e3) {
      return { pkg, changed: false, stats };
    }
    const textOf2 = (b) => b.kind === "p" ? paragraphText(b) : xmlText(b.xml);
    const all = model.blocks.map(textOf2).join("\n");
    if ((all.match(RE_QN_GLOBAL) || []).length < 3) return { pkg, changed: false, stats };
    let blocks = [];
    for (const b of model.blocks) {
      if (b.kind === "other" && tagName(b.xml) === "w:tbl" && xmlText(b.xml).search(RE_QN_GLOBAL) >= 0 && /(?:^|\s)A\s?[.)]/.test(xmlText(b.xml))) {
        for (const x of collectParas(b.xml)) blocks.push(__spreadValues({ kind: "p" }, parsePara(x)));
        stats.tables++;
      } else blocks.push(b);
    }
    blocks = blocks.flatMap((b, i) => {
      if (b.kind !== "p") return [b];
      stats.split += joinSplitLabels(b);
      const nx = blocks[i + 1];
      const parts = splitGlued(b, Boolean(nx && nx.kind === "p" && /<w:numPr>/.test(nx.ppr || "")));
      stats.split += parts.length - 1;
      return parts;
    });
    stats.labels = materializeLetters(blocks, upperLetterLists(pkg));
    const changed = stats.tables + stats.split + stats.labels > 0;
    return { pkg: changed ? buildBody(model, blocks) : pkg, changed, stats };
  }
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = a + 1831565813 >>> 0;
      let t = a;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function shuffleInPlace(arr, rand) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function shuffleVersion(pkg, opts = {}) {
    pkg = prepareEnglish(pkg).pkg;
    const model = parseBody(pkg);
    const analysis = analyze(model);
    const rand = rng(opts.seed || 1);
    const report = { pinnedQuestions: [], pinnedOptions: [], sharedParts: [], keptSections: [], questions: 0, notes: [] };
    const newBlocks = model.blocks.slice();
    const outBlocks = [];
    const consumed = /* @__PURE__ */ new Set();
    const optionOut = /* @__PURE__ */ new Map();
    for (const part of analysis.parts) {
      for (const q of part.questions) {
        report.questions++;
        if (part.kind === "mc" && q.options && opts.shuffleOptions !== false) {
          if (q.flags.some((f) => f === "complexOptions" || f.startsWith("optionCount") || f === "optionRefs")) {
            report.pinnedQuestions.push(q.number);
            continue;
          }
          const idx = q.options.map((_o, i2) => i2);
          const free = idx.filter((i2) => !RE_PINNED_OPTION.test(q.options[i2].content.map(childText).join("")));
          const order = idx.slice();
          const shuffled = shuffleInPlace(free.slice(), rand);
          free.forEach((slot2, k) => {
            order[slot2] = shuffled[k];
          });
          if (free.length < 4) report.pinnedOptions.push(q.number);
          const options = order.map((src, k) => __spreadProps(__spreadValues({}, q.options[src]), { labelRun: labelRunFor("ABCD"[k], q.options[src].labelRun) }));
          const { paras } = layoutOptions(model, options, model.blocks[q.optionParas[0]], opts.layout || "auto");
          optionOut.set(q.optionParas[0], paras);
          q.optionParas.slice(1).forEach((i2) => consumed.add(i2));
        } else if (part.kind === "tf" && opts.shuffleStatements && q.statements.length === 4) {
          const stmts = q.statements.map((s) => model.blocks[s.block]);
          const order = shuffleInPlace([0, 1, 2, 3], rand);
          order.forEach((src, k) => {
            const p2 = __spreadProps(__spreadValues({}, stmts[src]), { children: stmts[src].children.slice() });
            const li = p2.children.findIndex((c) => isRun(c) && RE_STMT.test(runText(c)));
            if (li >= 0) {
              const run4 = p2.children[li];
              const mm = RE_STMT.exec(runText(run4));
              const sp = splitRun(run4, mm[0].length);
              if (sp) {
                p2.children[li] = sp[0].replace(/<w:t\b[^>]*>[^<]*<\/w:t>/, `<w:t>${"abcd"[k]})</w:t>`);
                if (sp[1]) p2.children.splice(li + 1, 0, sp[1]);
              }
            }
            optionOut.set(q.statements[k].block, [p2]);
          });
        }
      }
    }
    const questionOrder = /* @__PURE__ */ new Map();
    const groups = [];
    if (opts.shuffleQuestions !== false) {
      if (analysis.english) {
        for (const sec of analysis.sections) {
          const mode = opts.sectionModes && opts.sectionModes[sec.index] || sec.mode;
          if (mode === "shuffle") groups.push(sec.questions);
          else if (sec.questions.length > 1) report.keptSections.push(`Question ${sec.firstNumber}\u2013${sec.lastNumber}`);
        }
      } else {
        for (const part of analysis.parts) {
          if (part.questions.length < 2) continue;
          if (part.questions.some((q) => q.flags.includes("shared"))) {
            report.sharedParts.push(part.title || "(kh\xF4ng ti\xEAu \u0111\u1EC1)");
            continue;
          }
          groups.push(part.questions);
        }
      }
    }
    for (const qs of groups) {
      if (qs.length < 2) continue;
      const order = shuffleInPlace(qs.map((_q, i2) => i2), rand);
      const segments = qs.map((q) => ({ start: q.start, end: q.ownEnd }));
      order.forEach((src, k) => questionOrder.set(qs[k].start, segments[src]));
    }
    const emitRange = (start, end) => {
      for (let i2 = start; i2 < end; i2++) {
        if (consumed.has(i2)) continue;
        if (optionOut.has(i2)) outBlocks.push(...optionOut.get(i2));
        else outBlocks.push(newBlocks[i2]);
      }
    };
    const byStart = new Map(analysis.parts.flatMap((p2) => p2.questions).map((q) => [q.start, q]));
    const firstQ = Math.min(...byStart.keys(), model.blocks.length);
    emitRange(0, firstQ);
    let i = firstQ;
    while (i < model.blocks.length) {
      const q = byStart.get(i);
      if (q && questionOrder.has(i)) {
        const seg = questionOrder.get(i);
        emitRange(seg.start, seg.end);
        emitRange(q.ownEnd, q.end);
      } else emitRange(i, q ? q.end : i + 1);
      i = q ? q.end : i + 1;
    }
    let result = buildBody(model, outBlocks);
    const stage = parseBody(result);
    const st = analyze(stage);
    let counter3 = 0;
    for (const part of st.parts) {
      if (opts.renumber !== "continuous") counter3 = 0;
      for (const q of part.questions) {
        counter3++;
        q.number = counter3;
        const b = stage.blocks[q.start];
        const ok = renumberQuestionInParagraph(b, counter3, { word: opts.labelWord });
        if (!ok) report.notes.push(`C\xE2u ${counter3}: kh\xF4ng \u0111\u1ED5i \u0111\u01B0\u1EE3c s\u1ED1 th\u1EE9 t\u1EF1`);
      }
    }
    const answers = answersOf(stage, st);
    if (opts.code) {
      let replaced = 0;
      for (const b of stage.blocks) {
        if (b.kind !== "p") continue;
        b.children = b.children.map((c) => {
          if (!isRun(c)) return c;
          const t = runText(c);
          if (!/Mã\s*đề/i.test(t) && !/^\s*\d{2,4}\s*$/.test(t)) return c;
          return c;
        });
        const text = paragraphText(b);
        if (/Mã\s*đề\s*(thi)?\s*[:：]?\s*\d+/i.test(text)) {
          let seen = false;
          b.children = b.children.map((c) => {
            if (!isRun(c)) return c;
            const t = runText(c);
            if (/Mã\s*đề/i.test(t)) {
              seen = true;
              if (/\d/.test(t)) {
                replaced++;
                return c.replace(/(<w:t\b[^>]*>)([^<]*?)(\d+)([^<]*<\/w:t>)/, (_m, a, bb, _d, e3) => `${a}${bb}${opts.code}${e3}`);
              }
              return c;
            }
            if (seen && /^\s*\d+\s*$/.test(t)) {
              seen = false;
              replaced++;
              return c.replace(/(<w:t\b[^>]*>)(\s*)\d+(\s*<\/w:t>)/, `$1$2${opts.code}$3`);
            }
            return c;
          });
        }
      }
      if (!replaced) report.notes.push("kh\xF4ng t\xECm th\u1EA5y \u201CM\xE3 \u0111\u1EC1\u201D \u0111\u1EC3 \u0111\u1ED5i s\u1ED1");
    }
    if (opts.stripMarks !== false) {
      for (const part of st.parts) for (const q of part.questions) {
        const touch = (blockIdx) => {
          const b = stage.blocks[blockIdx];
          b.children = b.children.map((c) => isRun(c) && (RE_OPT.test(runText(c)) || RE_STMT.test(runText(c))) ? stripMarks(c) : c);
        };
        q.optionParas.forEach(touch);
        q.statements.forEach((s) => touch(s.block));
      }
    }
    result = buildBody(stage);
    return { pkg: result, report, answers };
  }
  function answerTable(rowsByVersion) {
    const kinds = ["mc", "tf", "short", "other"];
    const out = [];
    for (const v of rowsByVersion) {
      for (const kind of kinds) {
        const rows = v.answers.filter((a) => a.kind === kind);
        if (!rows.length) continue;
        out.push({ code: v.code, kind, title: rows[0].part, items: rows.map((r) => ({ number: r.number, value: r.value })) });
      }
    }
    const csv = out.map((g) => [g.code, g.title || g.kind, ...g.items.map((i) => {
      var _a8;
      return `${i.number}:${(_a8 = i.value) != null ? _a8 : "?"}`;
    })].join(",")).join("\n");
    return { groups: out, csv };
  }
  function answerTableXml(groups, title = "B\u1EA2NG \u0110\xC1P \xC1N", word2 = "C\xE2u") {
    const borders = "<w:tblBorders>" + ["top", "left", "bottom", "right", "insideH", "insideV"].map((s) => `<w:${s} w:val="single" w:sz="4" w:space="0" w:color="808080"/>`).join("") + "</w:tblBorders>";
    let xml = `<w:p><w:pPr><w:pageBreakBefore/><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>${escapeXml(title)}</w:t></w:r></w:p>`;
    const codes = [...new Set(groups.map((g) => String(g.code)))];
    const sections = /* @__PURE__ */ new Map();
    for (const g of groups) {
      const key = `${g.kind}|${g.title || ""}`;
      if (!sections.has(key)) sections.set(key, { title: g.title || "", kind: g.kind, byCode: /* @__PURE__ */ new Map() });
      const sec = sections.get(key), c = String(g.code);
      if (!sec.byCode.has(c)) sec.byCode.set(c, /* @__PURE__ */ new Map());
      for (const it of g.items) sec.byCode.get(c).set(it.number, it.value);
    }
    for (const sec of sections.values()) {
      const numbers = [...new Set([...sec.byCode.values()].flatMap((m) => [...m.keys()]))].sort((x, y) => parseFloat(x) - parseFloat(y) || String(x).localeCompare(String(y)));
      const cols = codes.filter((c) => sec.byCode.has(c)), first = 1300, w = Math.min(1800, Math.floor((9e3 - first) / Math.max(1, cols.length)));
      const head = `<w:tr><w:trPr><w:cantSplit/><w:tblHeader/></w:trPr>${cell(word2, first, true)}${cols.map((c) => cell(c ? `M\xE3 ${c}` : "\u0110\xE1p \xE1n", w, true)).join("")}</w:tr>`;
      const rows = numbers.map((n) => `<w:tr><w:trPr><w:cantSplit/></w:trPr>${cell(n, first, true)}${cols.map((c) => {
        var _a8;
        return cell((_a8 = sec.byCode.get(c).get(n)) != null ? _a8 : "?", w, false);
      }).join("")}</w:tr>`).join("");
      if (sec.title) xml += `<w:p><w:pPr><w:keepNext/><w:spacing w:before="120"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t xml:space="preserve">${escapeXml(sec.title)}</w:t></w:r></w:p>`;
      xml += `<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/>${borders}</w:tblPr><w:tblGrid><w:gridCol w:w="${first}"/>${cols.map(() => `<w:gridCol w:w="${w}"/>`).join("")}</w:tblGrid>${head}${rows}</w:tbl><w:p/>`;
    }
    return xml;
  }
  function appendToBody(pkg, bodyXml) {
    const model = parseBody(pkg);
    model.blocks.push(...splitChildren(bodyXml).map((xml) => tagName(xml) === "w:p" ? __spreadValues({ kind: "p" }, parsePara(xml)) : { kind: "other", xml }));
    return buildBody(model);
  }
  function prependToBody(pkg, bodyXml) {
    const model = parseBody(pkg);
    model.blocks.unshift(...splitChildren(bodyXml).map((xml) => tagName(xml) === "w:p" ? __spreadValues({ kind: "p" }, parsePara(xml)) : { kind: "other", xml }));
    return buildBody(model);
  }
  function unansweredQuestions(model, analysis) {
    const ordinal = [];
    let n = 0;
    for (const b of model.blocks) {
      ordinal.push(n);
      n += b.kind === "p" ? 1 : (b.xml.match(/<w:p[ >\/]/g) || []).length;
    }
    const rows = answersOf(model, analysis), out = [];
    let i = 0;
    for (const part of analysis.parts) {
      for (const q of part.questions) {
        const row = rows[i++];
        if (row && (row.value === null || row.value === void 0)) {
          const roman = (/^\s*PH[AẦ]N\s+([IVX\d]+)/i.exec(part.title) || [])[1];
          out.push({ label: `${roman ? "Ph\u1EA7n " + roman + " \xB7 " : ""}C\xE2u ${q.number}`, kind: part.kind, number: q.number, block: q.start, paragraph: ordinal[q.start] });
        }
      }
    }
    return out;
  }
  var PPR_ORDER, tagName, buildPara, runText, unesc, isRun, isMath, hasObject, paragraphText, RE_PART, RE_QUESTION, RE_OPT, RE_STMT, RE_END, RE_ANSWER_LINE, RE_SHARED, RE_PINNED_OPTION, RE_EN_ORDER, RE_EN_PASSAGE, RE_OPTION_REF, partKind, isRedHex, RED_COLOR_TAG, hasRedColor, stripMarks, KEY_NUM, keyKind, underlineRun, labelRunFor, SPACE_RUN, TAB_RUN, RPR_ORDER, fontXml, sizeXml, xmlText, QWORD, RE_QN_GLOBAL, RE_QLEAD, RE_ROW_ABCD, cell;
  var init_exam = __esm({
    "src/exam.js"() {
      init_xml();
      PPR_ORDER = [
        "pStyle",
        "keepNext",
        "keepLines",
        "pageBreakBefore",
        "framePr",
        "widowControl",
        "numPr",
        "suppressLineNumbers",
        "pBdr",
        "shd",
        "tabs",
        "suppressAutoHyphens",
        "kinsoku",
        "wordWrap",
        "overflowPunct",
        "topLinePunct",
        "autoSpaceDE",
        "autoSpaceDN",
        "bidi",
        "adjustRightInd",
        "snapToGrid",
        "spacing",
        "ind",
        "contextualSpacing",
        "mirrorIndents",
        "suppressOverlap",
        "jc",
        "textDirection",
        "textAlignment",
        "textboxTightWrap",
        "outlineLvl",
        "divId",
        "cnfStyle",
        "rPr",
        "sectPr",
        "pPrChange"
      ];
      tagName = (s) => /^<([\w:.-]+)/.exec(s)[1];
      buildPara = (p2) => `${p2.open}${p2.ppr}${p2.children.join("")}</w:p>`;
      runText = (run4) => {
        let t = "";
        for (const m of run4.matchAll(/<w:t\b[^>]*>([^<]*)<\/w:t>|<w:tab\/>|<w:br\b[^>]*\/>|<w:noBreakHyphen\/>/g)) t += m[1] !== void 0 ? unesc(m[1]) : m[0] === "<w:tab/>" ? "	" : m[0].startsWith("<w:br") ? "\n" : "-";
        return t;
      };
      unesc = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
      isRun = (c) => /^<w:r[\s>]/.test(c);
      isMath = (c) => /^<m:oMath(Para)?[\s>]/.test(c);
      hasObject = (c) => /<w:object\b|<w:drawing|<w:pict|<mc:AlternateContent/.test(c);
      paragraphText = (p2) => p2.children.map(childText).join("");
      RE_PART = /^\s*PH[AẦ]N\s+(I{1,3}V?|IV|V|[1-4])\b\s*[.:)]?/i;
      RE_QUESTION = /^\s*(C[âa]u|B[àa]i|Question)\s*(\d+)\s*([.:)\-–—]|\s+(?=[A-Za-zÀ-ɏͰ-ϿЀ-ӿḀ-ỿ(]))/iu;
      RE_OPT = /^\s*([A-D])\s*([.)])/;
      RE_STMT = /^\s*([a-d])\s*\)/;
      RE_END = /^[\s\-–—_*.]*(h[ếe]t\b|the\s+end[\s\-–—_*.]*$|(bảng\s*)?đáp\s*án[^:：]{0,40}$|hướng\s*dẫn\s*chấm|cán\s*bộ\s*coi\s*thi)/i;
      RE_ANSWER_LINE = /^\s*(đáp\s*án|đáp\s*số|đs|kết\s*quả|trả\s*lời)\s*[:：]/i;
      RE_SHARED = /(sử\s*dụng|dựa\s*vào|dùng)\s+(chung\s+)?(thông\s*tin|dữ\s*kiện|đoạn|hình|bảng)[^.]{0,80}câu\s*\d+|(trả\s*lời|cho)\s+(các\s+)?câu\s*(hỏi\s*)?\d+\s*(,|và|đến|-|–)\s*\d+/i;
      RE_PINNED_OPTION = /^\s*(tất\s*cả|cả\s+(ba|bốn|hai|\w+)\s+(đáp\s*án|ý|phương\s*án|câu)|không\s*có\s*(đáp\s*án|phương\s*án)|các\s*(đáp\s*án|phương\s*án|ý)\s*(trên|còn\s*lại)|all\s+of\s+(the\s+)?(above|these)|none\s+of\s+(the\s+)?(above|these)|neither\s+of\s+(the\s+)?(above|these))/i;
      RE_EN_ORDER = /arrang|meaningful\s+(paragraph|letter|conversation|text|exchange)|sentences?\s+(to|in)\s+(make|form)/i;
      RE_EN_PASSAGE = /read\s+(the|a|an)\s+(following\s+)?(\w+\s+)?(passage|text|advertisement|notice|leaflet|announcement|e-?mail|letter|message|poster|flyer|brochure|article|extract|story|conversation|dialogue)|numbered\s+blank|\(\s*\d{1,2}\s*\)/i;
      RE_OPTION_REF = /\b(both|either)\s+[A-D]\s+(and|or|&)\s+[A-D]\b|\b(A|B|C|D)\s*(,|và|&)\s*(A|B|C|D)\b.*(đúng|sai)|cả\s+[A-D]\s*(,|và)\s*[A-D]|(đáp\s*án|ý|phương\s*án)\s*[A-D]\b/i;
      partKind = (text) => /đúng\s*sai|đúng\s*hoặc\s*sai/i.test(text) ? "tf" : /trả\s*lời\s*ngắn|ngắn/i.test(text) ? "short" : /nhiều\s*(phương\s*án|lựa\s*chọn)|trắc\s*nghiệm/i.test(text) ? "mc" : "other";
      isRedHex = (hex3) => {
        const m = /^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex3 || "");
        if (!m) return false;
        const [r, g, b] = [m[1], m[2], m[3]].map((x) => parseInt(x, 16));
        return r >= 160 && g <= 85 && b <= 85 && r - Math.max(g, b) >= 96;
      };
      RED_COLOR_TAG = /<w:color\b[^>]*\bw:val="([0-9a-fA-F]{6})"[^>]*\/>/g;
      hasRedColor = (run4) => {
        for (const m of run4.matchAll(RED_COLOR_TAG)) if (isRedHex(m[1])) return true;
        return false;
      };
      stripMarks = (run4) => run4.replace(/<w:u\b[^>]*\/>/g, "").replace(/<w:highlight\b[^>]*\/>/g, "").replace(RED_COLOR_TAG, (tag, hex3) => isRedHex(hex3) ? "" : tag);
      KEY_NUM = /^(?:C[âa]u|Question)?\s*(\d{1,3})\s*[.:)]?$/i;
      keyKind = (v) => {
        const t = String(v).replace(/ /g, " ").trim();
        if (/^[A-D]$/.test(t)) return { kind: "mc", value: t };
        const tf = t.replace(/\b[a-d]\s*[).:\-–]/gi, "").replace(/[\s,;\-–]/g, "");
        if (/^[ĐSđs]{4}$/.test(tf)) return { kind: "tf", value: [...tf].map((c) => /[Đđ]/.test(c) ? "\u0110" : "S") };
        if (/^-?\d[\d.,/]*$/.test(t)) return { kind: "short", value: t };
        return null;
      };
      underlineRun = (run4) => {
        const h = /^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>)?/.exec(run4);
        return h ? `${h[1]}${withRprChildren(h[2] ? h[2].trim() : "", { u: '<w:u w:val="single"/>' })}${run4.slice(h[0].length)}` : run4;
      };
      labelRunFor = (letter, template3) => {
        const m = /^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>)?/.exec(template3);
        let rpr2 = m && m[2] ? m[2] : "";
        if (rpr2 && !/<w:b\b/.test(rpr2)) rpr2 = withRprChildren(rpr2, { b: "<w:b/>" });
        if (!rpr2) rpr2 = "<w:rPr><w:b/></w:rPr>";
        return `${m ? m[1] : "<w:r>"}${rpr2}<w:t>${letter}.</w:t></w:r>`;
      };
      SPACE_RUN = '<w:r><w:t xml:space="preserve"> </w:t></w:r>';
      TAB_RUN = "<w:r><w:tab/></w:r>";
      RPR_ORDER = ["rStyle", "rFonts", "b", "bCs", "i", "iCs", "caps", "smallCaps", "strike", "dstrike", "outline", "shadow", "emboss", "imprint", "noProof", "snapToGrid", "vanish", "webHidden", "color", "spacing", "w", "kern", "position", "sz", "szCs", "highlight", "u", "effect", "bdr", "shd", "fitText", "vertAlign", "rtl", "cs", "em", "lang", "eastAsianLayout", "specVanish", "oMath"];
      fontXml = (f) => `<w:rFonts w:ascii="${escapeXml(f)}" w:hAnsi="${escapeXml(f)}" w:eastAsia="${escapeXml(f)}" w:cs="${escapeXml(f)}"/>`;
      sizeXml = (pt) => ({ sz: `<w:sz w:val="${Math.round(pt * 2)}"/>`, szCs: `<w:szCs w:val="${Math.round(pt * 2)}"/>` });
      xmlText = (x) => (x.match(/<w:t\b[^>]*>[^<]*<\/w:t>/g) || []).map((s) => unesc(s.replace(/<[^>]+>/g, ""))).join(" ");
      QWORD = "(?:Question|QUESTION|C[\xE2a]u|C\xC2U|B[\xE0a]i|B\xC0I)";
      RE_QN_GLOBAL = /(?:Question|QUESTION|C[âa]u|CÂU)\s*\d+\s*[.:)]/g;
      RE_QLEAD = new RegExp(`^\\s*${QWORD}\\s*\\d+\\s*[.:)]`);
      RE_ROW_ABCD = /(?:^|[\s\u00A0])A\.(?=\s)[\s\S]*?\sB\.(?=\s)(?:[\s\S]*?\sC\.(?=\s))?/;
      cell = (text, w, bold) => `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/></w:tcPr><w:p><w:pPr><w:spacing w:before="20" w:after="20"/><w:jc w:val="center"/></w:pPr><w:r>${bold ? "<w:rPr><w:b/></w:rPr>" : ""}<w:t xml:space="preserve">${escapeXml(String(text))}</w:t></w:r></w:p></w:tc>`;
    }
  });

  // src/ooxml.js
  function base64ToBytes(b643) {
    const bin = atob(b643.replace(/\s+/g, ""));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function splitParts(pkg) {
    const parts = /* @__PURE__ */ new Map();
    const re = /<pkg:part\b([^>]*)>([\s\S]*?)<\/pkg:part>/g;
    let m;
    while (m = re.exec(pkg)) {
      const name = /pkg:name="([^"]+)"/.exec(m[1]);
      if (name) parts.set(name[1], { attrs: m[1], body: m[2], start: m.index, end: m.index + m[0].length });
    }
    return parts;
  }
  function readRels(parts, relsName) {
    const part = parts.get(relsName);
    const map = /* @__PURE__ */ new Map();
    if (!part) return map;
    for (const tag of xmlData(part).match(/<Relationship\b[^>]*>/g) || []) {
      const id = /\bId="([^"]+)"/.exec(tag), target = /\bTarget="([^"]+)"/.exec(tag);
      if (id && target) map.set(id[1], { target: target[1], tag, external: /TargetMode="External"/.test(tag) });
    }
    return map;
  }
  function resolveTarget(target) {
    if (target.startsWith("/")) return target;
    const stack = ["word"];
    for (const seg of target.split("/")) {
      if (seg === "..") stack.pop();
      else if (seg && seg !== ".") stack.push(seg);
    }
    return "/" + stack.join("/");
  }
  function findObjects(doc) {
    const out = [];
    const re = /<w:object\b[\s\S]*?<\/w:object>/g;
    let m;
    while (m = re.exec(doc)) {
      const start = m.index, end = m.index + m[0].length;
      const progId = (/<o:OLEObject\b[^>]*\bProgID="([^"]+)"/.exec(m[0]) || [])[1] || "";
      const oleId = (/<o:OLEObject\b[^>]*\br:id="([^"]+)"/.exec(m[0]) || [])[1] || "";
      const imageId = (/<v:imagedata\b[^>]*\br:id="([^"]+)"/.exec(m[0]) || [])[1] || "";
      let runStart = -1;
      for (let i = doc.lastIndexOf("<w:r", start); i >= 0; i = doc.lastIndexOf("<w:r", i - 1)) {
        if (/[\s>]/.test(doc[i + 4])) {
          runStart = i;
          break;
        }
        if (i === 0) break;
      }
      const closeIdx = doc.indexOf("</w:r>", end);
      let run4 = null;
      if (runStart >= 0 && closeIdx >= 0 && doc.slice(runStart, start).indexOf("</w:r>") < 0) {
        const open = /^<w:r\b[^>]*>/.exec(doc.slice(runStart))[0];
        const inner = doc.slice(runStart + open.length, start);
        const rpr2 = (/^\s*<w:rPr>[\s\S]*?<\/w:rPr>/.exec(inner) || [""])[0];
        run4 = { start: runStart, end: closeIdx + 6, open, rpr: rpr2, before: inner.slice(rpr2.length), after: doc.slice(end, closeIdx) };
      }
      out.push({ start, end, progId, oleId, imageId, run: run4 });
    }
    return out;
  }
  function scanPackage(pkg) {
    const parts = splitParts(pkg);
    const docPart = parts.get("/word/document.xml");
    if (!docPart) return { equations: [], parts };
    const doc = xmlData(docPart);
    const rels = readRels(parts, "/word/_rels/document.xml.rels");
    const equations = [];
    const hasFields = /<w:instrText[^>]*>[^<]*EMBED\s+Equation/.test(doc);
    for (const obj of findObjects(doc)) {
      if (!isMathType(obj.progId)) continue;
      const eq = { kind: "mathtype", pos: obj.start, progId: obj.progId, latex: null, error: null, inline: true };
      const rel = rels.get(obj.oleId);
      const part = rel && parts.get(resolveTarget(rel.target));
      if (!obj.run) eq.error = "ph\u01B0\u01A1ng tr\xECnh n\u1EB1m trong kh\u1ED1i ph\u1EE9c t\u1EA1p (gi\u1EEF nguy\xEAn)";
      else if (hasFields) eq.error = "ph\u01B0\u01A1ng tr\xECnh b\u1ECDc trong field EMBED (gi\u1EEF nguy\xEAn)";
      else if (!part) eq.error = "kh\xF4ng t\xECm th\u1EA5y ph\u1EA7n oleObject trong g\xF3i OOXML";
      else if (obj.progId === "Equation.3") eq.error = "MathType 3 (MTEF v3) ch\u01B0a h\u1ED7 tr\u1EE3";
      else {
        const bin = /<pkg:binaryData>([\s\S]*?)<\/pkg:binaryData>/.exec(part.body);
        if (!bin) eq.error = "oleObject kh\xF4ng c\xF3 d\u1EEF li\u1EC7u nh\u1ECB ph\xE2n";
        else {
          try {
            [eq.latex, eq.inline] = oleToLatex(base64ToBytes(bin[1]));
          } catch (e3) {
            eq.error = e3 instanceof MtefError ? e3.message : String(e3.message || e3);
          }
        }
      }
      eq.obj = obj;
      equations.push(eq);
    }
    const re = /<m:oMath\b(?![A-Za-z])[\s\S]*?<\/m:oMath>/g;
    let m;
    while (m = re.exec(doc)) {
      const eq = { kind: "native", pos: m.index, latex: null, error: null, span: [m.index, m.index + m[0].length] };
      try {
        [eq.latex] = ommlToLatex(m[0]);
      } catch (e3) {
        eq.error = e3.message;
      }
      equations.push(eq);
    }
    const pRegex = /<w:p\b[\s\S]*?<\/w:p>/g;
    let pMatch;
    while (pMatch = pRegex.exec(doc)) {
      const pXml = pMatch[0];
      const pPos = pMatch.index;
      const tMatches = pXml.match(/<w:t\b[^>]*>([^<]*)<\/w:t>/g);
      if (!tMatches) continue;
      const pText = tMatches.map((t) => unescapeXml(t.replace(/<[^>]+>/g, ""))).join("");
      let lMatch;
      LATEX_RE.lastIndex = 0;
      while (lMatch = LATEX_RE.exec(pText)) {
        const rawInner = lMatch[1] || lMatch[2] || lMatch[3] || lMatch[4];
        if (!isLikelyLatex(rawInner)) continue;
        const latex = rawInner.trim();
        const display = Boolean(lMatch[1] || lMatch[2]);
        let error = null;
        try {
          latexToOmml(latex, { display });
        } catch (e3) {
          error = e3.message;
        }
        equations.push({
          kind: "latex",
          pos: pPos + lMatch.index,
          latex,
          error,
          display,
          raw: lMatch[0]
        });
      }
    }
    equations.sort((a, b) => a.pos - b.pos);
    return { equations, parts, doc, docPart, rels };
  }
  function isLikelyLatex(rawInner) {
    const s = rawInner.trim();
    if (!s) return false;
    if (s.includes("\\")) return true;
    if (/^\d+([.,]\d+)?$/.test(s)) return false;
    if (/[=+\-*/^_<>≤≥≠≈∈∉⊂⊃∪∩∅√∫∑∏~()]/.test(s)) return true;
    if (/^[a-zA-Z0-9_'^]+$/.test(s)) return true;
    return false;
  }
  function convertLatexInRuns(runs2, options = {}) {
    let fullText = "";
    const map = [];
    runs2.forEach((r, rIdx) => {
      for (let i = 0; i < r.text.length; i++) {
        map.push({ rIdx, offset: i });
      }
      fullText += r.text;
    });
    const matches = [];
    let m;
    LATEX_RE.lastIndex = 0;
    while ((m = LATEX_RE.exec(fullText)) !== null) {
      const rawInner = m[1] || m[2] || m[3] || m[4];
      if (!isLikelyLatex(rawInner)) continue;
      const latex = rawInner.trim();
      const display = Boolean(m[1] || m[2]);
      matches.push({ start: m.index, end: LATEX_RE.lastIndex, latex, display, raw: m[0] });
    }
    if (!matches.length) return null;
    const out = [];
    let cur = 0;
    let converted = 0;
    for (const match of matches) {
      while (cur < match.start) {
        const { rIdx } = map[cur];
        let endRun = cur;
        while (endRun < match.start && map[endRun].rIdx === rIdx) endRun++;
        const sliceText = fullText.slice(cur, endRun);
        out.push(`<w:r>${runs2[rIdx].rpr}<w:t xml:space="preserve">${escapeXml(sliceText)}</w:t></w:r>`);
        cur = endRun;
      }
      try {
        const omml = latexToOmml(match.latex, { display: match.display });
        out.push(omml);
        converted++;
      } catch (e3) {
        const firstRIdx = map[match.start].rIdx;
        out.push(`<w:r>${runs2[firstRIdx].rpr}<w:t xml:space="preserve">${escapeXml(match.raw)}</w:t></w:r>`);
      }
      cur = match.end;
    }
    while (cur < fullText.length) {
      const { rIdx } = map[cur];
      let endRun = cur;
      while (endRun < fullText.length && map[endRun].rIdx === rIdx) endRun++;
      const sliceText = fullText.slice(cur, endRun);
      out.push(`<w:r>${runs2[rIdx].rpr}<w:t xml:space="preserve">${escapeXml(sliceText)}</w:t></w:r>`);
      cur = endRun;
    }
    return { xml: out.join(""), converted };
  }
  function convertLatexInPara(paraXml, options = {}) {
    if (/^<w:p\b[^>]*\/>$/.test(paraXml)) return { xml: paraXml, converted: 0 };
    const open = /^<w:p\b[^>]*>/.exec(paraXml)[0];
    const inner = paraXml.slice(open.length, paraXml.length - 6);
    const children2 = splitChildren(inner);
    let convertedTotal = 0;
    const newChildren = [];
    let curRunGroup = [];
    function flushRunGroup() {
      if (!curRunGroup.length) return;
      const res = convertLatexInRuns(curRunGroup, options);
      if (res) {
        newChildren.push(res.xml);
        convertedTotal += res.converted;
      } else {
        for (const r of curRunGroup) newChildren.push(r.raw);
      }
      curRunGroup = [];
    }
    for (const child of children2) {
      if (/^<w:r\b/.test(child)) {
        if (!/<w:(?:object|drawing|pict|fldChar|sym)\b|<m:oMath\b/.test(child)) {
          const rprM = /^\s*<w:rPr>[\s\S]*?<\/w:rPr>|^\s*<w:rPr\/>/.exec(child.slice(/^<w:r\b[^>]*>/.exec(child)[0].length));
          const rpr2 = rprM ? rprM[0].trim() : "";
          const tMatches = child.match(/<w:t\b[^>]*>([^<]*)<\/w:t>/g);
          if (tMatches) {
            const text = tMatches.map((t) => unescapeXml(t.replace(/<[^>]+>/g, ""))).join("");
            curRunGroup.push({ raw: child, rpr: rpr2, text });
            continue;
          }
        }
      }
      flushRunGroup();
      newChildren.push(child);
    }
    flushRunGroup();
    if (convertedTotal === 0) return { xml: paraXml, converted: 0 };
    return { xml: `${open}${newChildren.join("")}</w:p>`, converted: convertedTotal };
  }
  function convertLatexInDoc(doc, options = {}) {
    let converted = 0;
    const newDoc = doc.replace(/<w:p\b[\s\S]*?<\/w:p>/g, (pXml) => {
      const res = convertLatexInPara(pXml, options);
      converted += res.converted;
      return res.xml;
    });
    return { doc: newDoc, converted };
  }
  function paragraphIsEquationOnly(doc, objects) {
    if (objects !== 1) return false;
    const stripped = doc.replace(/<w:object\b[\s\S]*?<\/w:object>/g, "").replace(/<w:rPr>[\s\S]*?<\/w:rPr>|<w:pPr>[\s\S]*?<\/w:pPr>/g, "");
    if (/<w:t\b[^>]*>[^<]*\S[^<]*<\/w:t>|<w:tab\/>|<w:br\b|<w:drawing|<w:pict|<w:sym\b|<w:fldChar|<m:oMath/.test(stripped)) return false;
    return true;
  }
  function ensureNamespaces(root) {
    let r = root;
    const add3 = (prefix, uri) => {
      if (!new RegExp(`xmlns:${prefix}=`).test(r.match(/^<[^>]*>/)[0])) r = r.replace(/^<([\w:]+)/, `<$1 xmlns:${prefix}="${uri}"`);
    };
    add3("m", NS_M);
    add3("w", NS_W);
    return r;
  }
  function convertMathTypeInPackage(pkg, options = {}) {
    const convertMt = options.convertMathType !== false;
    const convertLt = options.convertLatex !== false;
    const scan2 = scanPackage(pkg);
    const { equations, parts, docPart } = scan2;
    let doc = scan2.doc;
    const result = { pkg, converted: 0, convertedMathType: 0, convertedLatex: 0, kept: [], changed: false, details: [] };
    let relsXmlUpdated = null;
    const dropPartsFinal = [];
    if (convertMt) {
      const targets = equations.map((eq, idx) => ({ eq, idx })).filter(({ eq }) => eq.kind === "mathtype");
      const mathObjects = targets.length;
      const removedRel = /* @__PURE__ */ new Set();
      const edits = [];
      for (const { eq, idx } of targets) {
        if (options.only && !options.only.has(idx)) continue;
        if (eq.latex === null) {
          result.kept.push({ reason: eq.error });
          continue;
        }
        let omml;
        try {
          const display = Boolean(options.display) && paragraphIsEquationOnly(doc, mathObjects);
          omml = latexToOmml(eq.latex, { display });
        } catch (e3) {
          result.kept.push({ reason: "LaTeX\u2192OMML: " + e3.message, latex: eq.latex });
          continue;
        }
        const run4 = eq.obj.run;
        let repl = "";
        const piece = (inner) => inner.trim() ? `${run4.open}${run4.rpr}${inner}</w:r>` : "";
        repl += piece(run4.before) + omml + piece(run4.after);
        edits.push({ start: run4.start, end: run4.end, repl });
        removedRel.add(eq.obj.oleId);
        removedRel.add(eq.obj.imageId);
        result.converted++;
        result.convertedMathType++;
        result.details.push({ latex: eq.latex, kind: "mathtype" });
      }
      if (edits.length) {
        edits.sort((a, b) => b.start - a.start);
        for (const e3 of edits) doc = doc.slice(0, e3.start) + e3.repl + doc.slice(e3.end);
        let relsPart2 = parts.get("/word/_rels/document.xml.rels");
        let relsXml = relsPart2 ? xmlData(relsPart2) : "";
        for (const id of removedRel) {
          if (!id || new RegExp(`r:(?:id|embed|link|pict)="${id}"`).test(doc)) continue;
          const tag = new RegExp(`<Relationship\\b[^>]*\\bId="${id}"[^>]*/>`).exec(relsXml);
          if (!tag) continue;
          const target = /\bTarget="([^"]+)"/.exec(tag[0]);
          relsXml = relsXml.replace(tag[0], "");
          if (target && !new RegExp(`Target="${target[1]}"`).test(relsXml)) dropPartsFinal.push(resolveTarget(target[1]));
        }
        if (relsPart2) relsXmlUpdated = relsXml;
        result.changed = true;
      }
    }
    if (convertLt) {
      const ltRes = convertLatexInDoc(doc, options);
      if (ltRes.converted > 0) {
        doc = ltRes.doc;
        result.converted += ltRes.converted;
        result.convertedLatex = ltRes.converted;
        result.changed = true;
      }
    }
    if (!result.changed) return result;
    const replaceBody2 = (text, part, newXml) => {
      const body = part.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + newXml + b);
      return text.replace(part.body, () => body);
    };
    let out = pkg;
    const newDoc = ensureNamespaces(doc.trimStart());
    out = replaceBody2(out, docPart, newDoc);
    let relsPart = parts.get("/word/_rels/document.xml.rels");
    if (relsPart && relsXmlUpdated !== null) out = replaceBody2(out, relsPart, relsXmlUpdated);
    for (const name of dropPartsFinal) {
      const p2 = splitParts(out).get(name);
      if (p2) out = out.slice(0, p2.start) + out.slice(p2.end);
    }
    result.pkg = out;
    return result;
  }
  function convertEquationsToLatexText(pkg, options = {}) {
    const fromMt = options.fromMathType !== false;
    const fromNative = options.fromNative !== false;
    const scan2 = scanPackage(pkg);
    const { equations, parts, docPart } = scan2;
    let doc = scan2.doc;
    const result = { pkg, converted: 0, convertedMathType: 0, convertedNative: 0, kept: [], changed: false };
    const edits = [];
    const removedRel = /* @__PURE__ */ new Set();
    const textRun = (rpr2, tex, delim) => `<w:r>${rpr2}<w:t xml:space="preserve">${escapeXml(delim + tex + delim)}</w:t></w:r>`;
    for (const eq of equations) {
      if (eq.kind === "mathtype" ? !fromMt : eq.kind !== "native" || !fromNative) continue;
      if (eq.latex === null) {
        result.kept.push({ reason: eq.error });
        continue;
      }
      if (eq.kind === "native") {
        let [start, end] = eq.span;
        const para2 = /<m:oMathPara>\s*$/.exec(doc.slice(0, start)), paraEnd = /^\s*<\/m:oMathPara>/.exec(doc.slice(end));
        const display = Boolean(para2 && paraEnd);
        if (display) {
          start -= para2[0].length;
          end += paraEnd[0].length;
        }
        edits.push({ start, end, repl: textRun("", eq.latex, display ? "$$" : "$") });
        result.convertedNative++;
      } else {
        const run4 = eq.obj.run;
        const piece = (inner) => inner.trim() ? `${run4.open}${run4.rpr}${inner}</w:r>` : "";
        edits.push({ start: run4.start, end: run4.end, repl: piece(run4.before) + textRun(run4.rpr, eq.latex, "$") + piece(run4.after) });
        removedRel.add(eq.obj.oleId);
        removedRel.add(eq.obj.imageId);
        result.convertedMathType++;
      }
      result.converted++;
    }
    if (!edits.length) return result;
    edits.sort((a, b) => b.start - a.start);
    for (const e3 of edits) doc = doc.slice(0, e3.start) + e3.repl + doc.slice(e3.end);
    const relsPart = parts.get("/word/_rels/document.xml.rels");
    let relsXml = relsPart ? xmlData(relsPart) : "";
    const dropParts = [];
    for (const id of removedRel) {
      if (!id || new RegExp(`r:(?:id|embed|link|pict)="${id}"`).test(doc)) continue;
      const tag = new RegExp(`<Relationship\\b[^>]*\\bId="${id}"[^>]*/>`).exec(relsXml);
      if (!tag) continue;
      const target = /\bTarget="([^"]+)"/.exec(tag[0]);
      relsXml = relsXml.replace(tag[0], "");
      if (target && !new RegExp(`Target="${target[1]}"`).test(relsXml)) dropParts.push(resolveTarget(target[1]));
    }
    const replaceBody2 = (text2, part, newXml) => text2.replace(part.body, () => part.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + newXml + b));
    let text = replaceBody2(pkg, docPart, ensureNamespaces(doc.trimStart()));
    if (relsPart) text = replaceBody2(text, relsPart, relsXml);
    for (const name of dropParts) {
      const p2 = splitParts(text).get(name);
      if (p2) text = text.slice(0, p2.start) + text.slice(p2.end);
    }
    result.pkg = text;
    result.changed = true;
    return result;
  }
  function makeEquationPackage(omml) {
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?mso-application progid="Word.Document"?>
<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">
  <pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
    <pkg:xmlData>
      <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
        <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
      </Relationships>
    </pkg:xmlData>
  </pkg:part>
  <pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">
    <pkg:xmlData>
      <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
                  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
                  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
        <w:body>
          <w:p>${omml}</w:p>
        </w:body>
      </w:document>
    </pkg:xmlData>
  </pkg:part>
</pkg:package>`;
  }
  var NS_M, NS_W, xmlData, isMathType, LATEX_NATIVE, LATEX_FALLBACK, LATEX_RE;
  var init_ooxml = __esm({
    "src/ooxml.js"() {
      init_mtef();
      init_omml();
      init_latex2omml();
      init_xml();
      init_exam();
      NS_M = "http://schemas.openxmlformats.org/officeDocument/2006/math";
      NS_W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
      xmlData = (part) => {
        const m = /<pkg:xmlData>([\s\S]*)<\/pkg:xmlData>/.exec(part.body);
        return m ? m[1] : "";
      };
      isMathType = (progId) => /^Equation\.(DSMT\d*|3)$/.test(progId);
      LATEX_NATIVE = (() => {
        try {
          return new RegExp(String.raw`(?<!\\)\$\$(?!\s)((?:[^\$\\]|\\.)+?)(?<!\\)\$\$|(?<!\\)\\\[([\s\S]+?)(?<!\\)\\\]|(?<!\\)\\\(([\s\S]+?)(?<!\\)\\\)|(?<![\\\w\$])\$(?!\s)((?:[^\$\\]|\\.)+?)(?<!\\)\$(?!\d)`, "g");
        } catch (e3) {
          return null;
        }
      })();
      LATEX_FALLBACK = /(?:(^|[^\\])(?:\$\$(?!\s)((?:[^\$\\]|\\.)+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\))|(^|[^\\\w\$])\$(?!\s)((?:[^\$\\]|\\.)+?)\$(?!\d))/g;
      LATEX_RE = {
        lastIndex: 0,
        exec(str) {
          var _a8, _b;
          if (LATEX_NATIVE) {
            LATEX_NATIVE.lastIndex = this.lastIndex;
            const r2 = LATEX_NATIVE.exec(str);
            this.lastIndex = LATEX_NATIVE.lastIndex;
            return r2;
          }
          LATEX_FALLBACK.lastIndex = Math.max(0, this.lastIndex - 1);
          const m = LATEX_FALLBACK.exec(str);
          if (!m) {
            this.lastIndex = 0;
            return null;
          }
          const pre = ((_b = (_a8 = m[1]) != null ? _a8 : m[5]) != null ? _b : "").length;
          const r = [m[0].slice(pre), m[2], m[3], m[4], m[6]];
          r.index = m.index + pre;
          this.lastIndex = LATEX_FALLBACK.lastIndex;
          return r;
        }
      };
    }
  });

  // src/cursor-eq.js
  function pickEquation({ selPkg, paraPkg, beforePkg } = {}) {
    const sel = list(selPkg), selOk = sel.filter((e3) => e3.latex !== null);
    if (selOk.length) return { eq: selOk[0], how: "selection", count: selOk.length, index: 0 };
    const para2 = list(paraPkg);
    const errors = [...sel, ...para2].filter((e3) => e3.error).map((e3) => e3.error);
    if (!para2.length) return { eq: null, how: "none", found: 0, errors };
    let index = 0, how = "paragraph";
    if (para2.length > 1) {
      const before = list(beforePkg).length;
      index = Math.min(Math.max(before - 1, 0), para2.length - 1);
      how = "cursor";
    }
    const eq = para2[index];
    if (eq.latex === null) return { eq: null, how: "none", found: para2.length, errors: [eq.error, ...errors].filter(Boolean) };
    return { eq, how, count: para2.length, index };
  }
  var list;
  var init_cursor_eq = __esm({
    "src/cursor-eq.js"() {
      init_ooxml();
      list = (pkg) => pkg ? scanPackage(pkg).equations.slice().sort((a, b) => a.pos - b.pos) : [];
    }
  });

  // src/ole-writer.js
  function template2() {
    if (templateInfo) return templateInfo;
    const data = unb642(TEMPLATE_OLE);
    const dv = new DataView(data.buffer);
    const dirStart = dv.getUint32(48, true);
    const fatSectors = [];
    for (let i = 0; i < dv.getUint32(44, true); i++) fatSectors.push(dv.getUint32(76 + 4 * i, true));
    const fat = [];
    for (const s of fatSectors) for (let o = 0; o < SEC; o += 4) fat.push(dv.getUint32((s + 1) * SEC + o, true));
    const dirBytes = [];
    for (let s = dirStart; s < 4294967290; s = fat[s]) dirBytes.push(data.subarray((s + 1) * SEC, (s + 2) * SEC));
    const dir = new Uint8Array(dirBytes.length * SEC);
    dirBytes.forEach((b, i) => dir.set(b, i * SEC));
    const entries = [];
    for (let o = 0; o + 128 <= dir.length; o += 128) {
      const raw = dir.slice(o, o + 128);
      const len3 = new DataView(raw.buffer).getUint16(64, true);
      let name = "";
      for (let k = 0; k + 2 <= len3 - 2 + 0 && k < 64; k += 2) name += String.fromCharCode(raw[k] | raw[k + 1] << 8);
      entries.push({ raw, name: len3 ? name.replace(/\0+$/, "") : "" });
    }
    templateInfo = { header: data.slice(0, SEC), entries };
    return templateInfo;
  }
  function buildOle(equationStream) {
    const { header, entries } = template2();
    const streams = /* @__PURE__ */ new Map([[NAMES[0], unb642(STREAMS[NAMES[0]])], [NAMES[1], unb642(STREAMS[NAMES[1]])], [NAMES[2], unb642(STREAMS[NAMES[2]])], [NAMES[3], equationStream]]);
    const small = NAMES.filter((n) => streams.get(n).length < CUTOFF);
    const big = NAMES.filter((n) => streams.get(n).length >= CUTOFF);
    const miniStart = /* @__PURE__ */ new Map();
    let miniCount = 0;
    for (const n of small) {
      miniStart.set(n, miniCount);
      miniCount += Math.ceil(streams.get(n).length / MINI);
    }
    const miniFat = new Uint32Array(Math.max(1, Math.ceil(miniCount / 128)) * 128).fill(FREE);
    for (const n of small) {
      const s = miniStart.get(n), c = Math.ceil(streams.get(n).length / MINI);
      for (let i = 0; i < c; i++) miniFat[s + i] = i === c - 1 ? END2 : s + i + 1;
    }
    const miniContainerSectors = Math.ceil(miniCount * MINI / SEC);
    const miniFatSectors = miniFat.length / 128;
    const dirSectors = Math.ceil(entries.length / 4);
    const bigSectors = big.map((n) => Math.ceil(streams.get(n).length / SEC));
    const nonFat = dirSectors + miniFatSectors + miniContainerSectors + bigSectors.reduce((a, b) => a + b, 0);
    let fatSectors = 1;
    while (fatSectors * 128 < fatSectors + nonFat) fatSectors++;
    if (fatSectors > 109) throw new Error("equation too large");
    let next = fatSectors;
    const dirStart = next;
    next += dirSectors;
    const miniFatStart = next;
    next += miniFatSectors;
    const miniContainerStart = miniContainerSectors ? next : END2;
    next += miniContainerSectors;
    const bigStart = /* @__PURE__ */ new Map();
    big.forEach((n, i) => {
      bigStart.set(n, next);
      next += bigSectors[i];
    });
    const total = next;
    const fat = new Uint32Array(fatSectors * 128).fill(FREE);
    for (let i = 0; i < fatSectors; i++) fat[i] = FATSECT;
    const chain = (start, count) => {
      for (let i = 0; i < count; i++) fat[start + i] = i === count - 1 ? END2 : start + i + 1;
    };
    chain(dirStart, dirSectors);
    chain(miniFatStart, miniFatSectors);
    if (miniContainerSectors) chain(miniContainerStart, miniContainerSectors);
    big.forEach((n, i) => chain(bigStart.get(n), bigSectors[i]));
    const out = new Uint8Array(SEC * (1 + total));
    const dv = new DataView(out.buffer);
    out.set(header, 0);
    dv.setUint32(44, fatSectors, true);
    dv.setUint32(48, dirStart, true);
    dv.setUint32(56, CUTOFF, true);
    dv.setUint32(60, miniFatStart, true);
    dv.setUint32(64, miniFatSectors, true);
    dv.setUint32(68, END2, true);
    dv.setUint32(72, 0, true);
    for (let i = 0; i < 109; i++) dv.setUint32(76 + 4 * i, i < fatSectors ? i : FREE, true);
    const sector = (i) => (i + 1) * SEC;
    for (let i = 0; i < fat.length; i++) dv.setUint32(sector(0) + 4 * i, fat[i], true);
    entries.forEach((e3, i) => {
      const raw = e3.raw.slice();
      const rv = new DataView(raw.buffer);
      if (e3.name === "Root Entry") {
        rv.setUint32(116, miniContainerSectors ? miniContainerStart : END2, true);
        rv.setUint32(120, miniCount * MINI, true);
      } else if (streams.has(e3.name)) {
        const len3 = streams.get(e3.name).length;
        rv.setUint32(116, len3 < CUTOFF ? miniStart.get(e3.name) : bigStart.get(e3.name), true);
        rv.setUint32(120, len3, true);
        rv.setUint32(124, 0, true);
      }
      out.set(raw, sector(dirStart) + i * 128);
    });
    for (let i = 0; i < miniFat.length; i++) dv.setUint32(sector(miniFatStart) + 4 * i, miniFat[i], true);
    for (const n of small) out.set(streams.get(n), sector(miniContainerStart) + miniStart.get(n) * MINI);
    for (const n of big) out.set(streams.get(n), sector(bigStart.get(n)));
    return out;
  }
  var unb642, END2, FREE, FATSECT, SEC, MINI, CUTOFF, NAMES, templateInfo;
  var init_ole_writer = __esm({
    "src/ole-writer.js"() {
      init_mathtype_template();
      unb642 = (s) => {
        const bin = atob(s);
        const out = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
        return out;
      };
      END2 = 4294967294;
      FREE = 4294967295;
      FATSECT = 4294967293;
      SEC = 512;
      MINI = 64;
      CUTOFF = 4096;
      NAMES = ["Ole", "CompObj", "ObjInfo", "Equation Native"];
      templateInfo = null;
    }
  });

  // src/ttf.js
  function parseTtf(buf) {
    const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    const tag = (o) => String.fromCharCode(dv.getUint8(o), dv.getUint8(o + 1), dv.getUint8(o + 2), dv.getUint8(o + 3));
    const tables = {};
    const n = dv.getUint16(4);
    for (let i = 0; i < n; i++) {
      const o = 12 + i * 16;
      tables[tag(o)] = { off: dv.getUint32(o + 8), len: dv.getUint32(o + 12) };
    }
    if (!tables.glyf || !tables.loca || !tables.head || !tables.cmap) throw new Error("ttf: not a TrueType outline font");
    const unitsPerEm = dv.getUint16(tables.head.off + 18);
    const locaLong = dv.getInt16(tables.head.off + 50) === 1;
    const loca = (g) => locaLong ? dv.getUint32(tables.loca.off + g * 4) : dv.getUint16(tables.loca.off + g * 2) * 2;
    const cmap = /* @__PURE__ */ new Map();
    const nt = dv.getUint16(tables.cmap.off + 2);
    let best = null;
    for (let i = 0; i < nt; i++) {
      const o = tables.cmap.off + 4 + i * 8, pid = dv.getUint16(o), eid = dv.getUint16(o + 2), off = tables.cmap.off + dv.getUint32(o + 4), fmt = dv.getUint16(off);
      if ((fmt === 12 || fmt === 4) && (!best || fmt === 12 || pid === 3 && eid === 1)) best = { off, fmt };
    }
    if (!best) throw new Error("ttf: no usable cmap");
    if (best.fmt === 4) {
      const o = best.off, segX2 = dv.getUint16(o + 6), end = o + 14, start = end + segX2 + 2, delta = start + segX2, range = delta + segX2;
      for (let s = 0; s < segX2 / 2; s++) {
        const e3 = dv.getUint16(end + s * 2), st = dv.getUint16(start + s * 2), d = dv.getInt16(delta + s * 2), ro = dv.getUint16(range + s * 2);
        for (let c = st; c <= e3 && c < 65535; c++) {
          let g;
          if (ro === 0) g = c + d & 65535;
          else {
            const gi = dv.getUint16(range + s * 2 + ro + (c - st) * 2);
            g = gi === 0 ? 0 : gi + d & 65535;
          }
          if (g) cmap.set(c, g);
        }
      }
    } else {
      const o = best.off, ng = dv.getUint32(o + 12);
      for (let i = 0; i < ng; i++) {
        const g = o + 16 + i * 12, st = dv.getUint32(g), e3 = dv.getUint32(g + 4), sg = dv.getUint32(g + 8);
        for (let c = st; c <= e3; c++) cmap.set(c, sg + (c - st));
      }
    }
    const cache = /* @__PURE__ */ new Map();
    function simple(g, depth = 0) {
      if (depth > 6) return [];
      const a = loca(g), b = loca(g + 1);
      if (a === b) return [];
      const o = tables.glyf.off + a, nc = dv.getInt16(o);
      if (nc >= 0) {
        const ends = [];
        let p3 = o + 10;
        for (let i = 0; i < nc; i++) {
          ends.push(dv.getUint16(p3));
          p3 += 2;
        }
        const np = nc ? ends[nc - 1] + 1 : 0;
        p3 += 2 + dv.getUint16(p3);
        const flags = [];
        while (flags.length < np) {
          const f = dv.getUint8(p3++);
          flags.push(f);
          if (f & 8) {
            let r = dv.getUint8(p3++);
            while (r-- > 0) flags.push(f);
          }
        }
        const xs = [], ys = [];
        let v = 0;
        for (let i = 0; i < np; i++) {
          const f = flags[i];
          if (f & 2) {
            const d = dv.getUint8(p3++);
            v += f & 16 ? d : -d;
          } else if (!(f & 16)) {
            v += dv.getInt16(p3);
            p3 += 2;
          }
          xs.push(v);
        }
        v = 0;
        for (let i = 0; i < np; i++) {
          const f = flags[i];
          if (f & 4) {
            const d = dv.getUint8(p3++);
            v += f & 32 ? d : -d;
          } else if (!(f & 32)) {
            v += dv.getInt16(p3);
            p3 += 2;
          }
          ys.push(v);
        }
        const contours = [];
        let s = 0;
        for (const e3 of ends) {
          contours.push(flatten2(xs.slice(s, e3 + 1), ys.slice(s, e3 + 1), flags.slice(s, e3 + 1)));
          s = e3 + 1;
        }
        return contours;
      }
      let p2 = o + 10, more = true;
      const out = [];
      while (more) {
        const fl = dv.getUint16(p2), gi = dv.getUint16(p2 + 2);
        p2 += 4;
        let dx, dy;
        if (fl & 1) {
          dx = dv.getInt16(p2);
          dy = dv.getInt16(p2 + 2);
          p2 += 4;
        } else {
          dx = dv.getInt8(p2);
          dy = dv.getInt8(p2 + 1);
          p2 += 2;
        }
        let m = [1, 0, 0, 1];
        if (fl & 8) {
          const s = dv.getInt16(p2) / 16384;
          m = [s, 0, 0, s];
          p2 += 2;
        } else if (fl & 64) {
          m = [dv.getInt16(p2) / 16384, 0, 0, dv.getInt16(p2 + 2) / 16384];
          p2 += 4;
        } else if (fl & 128) {
          m = [dv.getInt16(p2) / 16384, dv.getInt16(p2 + 2) / 16384, dv.getInt16(p2 + 4) / 16384, dv.getInt16(p2 + 6) / 16384];
          p2 += 8;
        }
        if (!(fl & 2)) {
          dx = 0;
          dy = 0;
        }
        for (const c of simple(gi, depth + 1)) out.push(c.map(([x, y]) => [m[0] * x + m[2] * y + dx, m[1] * x + m[3] * y + dy]));
        more = Boolean(fl & 32);
      }
      return out;
    }
    function flatten2(xs, ys, flags) {
      const n3 = xs.length;
      if (!n3) return [];
      const pts = xs.map((x, i) => ({ x, y: ys[i], on: Boolean(flags[i] & 1) }));
      const seq2 = [];
      for (let i = 0; i < n3; i++) {
        const a = pts[i], b = pts[(i + 1) % n3];
        seq2.push(a);
        if (!a.on && !b.on) seq2.push({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, on: true });
      }
      const k = seq2.findIndex((q) => q.on);
      const ring = k < 0 ? seq2 : seq2.slice(k).concat(seq2.slice(0, k));
      const out = [[ring[0].x, ring[0].y]];
      for (let i = 1; i <= ring.length; i++) {
        const q = ring[i % ring.length];
        if (q.on) {
          if (i < ring.length) out.push([q.x, q.y]);
          continue;
        }
        const prev = ring[i - 1], next = ring[(i + 1) % ring.length];
        for (let t = 1; t <= 6; t++) {
          const u = t / 7, w = 1 - u;
          out.push([w * w * prev.x + 2 * w * u * q.x + u * u * next.x, w * w * prev.y + 2 * w * u * q.y + u * u * next.y]);
        }
        i++;
        if (i < ring.length) out.push([next.x, next.y]);
      }
      return out;
    }
    return {
      unitsPerEm,
      has: (cp2) => cmap.has(cp2),
      outline(cp2) {
        if (!cmap.has(cp2)) return null;
        const g = cmap.get(cp2);
        if (!cache.has(g)) cache.set(g, simple(g));
        return cache.get(g);
      }
    };
  }
  var init_ttf = __esm({
    "src/ttf.js"() {
    }
  });

  // src/katex-render.js
  var katex_render_exports = {};
  __export(katex_render_exports, {
    katexOutlines: () => katexOutlines,
    outlinesToPng: () => outlinesToPng
  });
  function loadFont(name) {
    if (!fontCache.has(name)) fontCache.set(name, fetch(FONT_URL(name)).then((r) => {
      if (!r.ok) throw new Error("font " + name);
      return r.arrayBuffer();
    }).then((b) => parseTtf(new Uint8Array(b))));
    return fontCache.get(name);
  }
  function fontName(cs) {
    const base = (cs.fontFamily.split(",")[0] || "").replace(/["']/g, "").trim().replace(/^KaTeX_/, "") || "Main";
    const bold = parseInt(cs.fontWeight, 10) >= 600 || cs.fontWeight === "bold", italic = cs.fontStyle === "italic";
    let name;
    if (base === "Math") name = bold ? "Math-BoldItalic" : "Math-Italic";
    else if (/^Size\d$/.test(base) || ["AMS", "Script", "Typewriter"].includes(base)) name = `${base}-Regular`;
    else name = `${base}-${bold && italic ? "BoldItalic" : bold ? "Bold" : italic ? "Italic" : "Regular"}`;
    if (!AVAILABLE.has(name)) name = AVAILABLE.has(`${base}-Regular`) ? `${base}-Regular` : "Main-Regular";
    return name;
  }
  function pathPolys(d) {
    const toks = d.match(/[MmLlHhVvCcSsQqTtZzAa]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?/g) || [];
    const polys = [];
    let cur = [], x = 0, y = 0, sx = 0, sy = 0, cmd = "", k = 0, lastC = null, lastQ = null;
    const num3 = () => parseFloat(toks[k++]);
    const flushPoly = () => {
      if (cur.length > 2) polys.push(cur);
      cur = [];
    };
    while (k < toks.length) {
      if (/^[A-Za-z]$/.test(toks[k])) cmd = toks[k++];
      const rel = cmd === cmd.toLowerCase(), C = cmd.toUpperCase();
      if (C === "Z") {
        flushPoly();
        x = sx;
        y = sy;
        lastC = lastQ = null;
        continue;
      }
      if (C === "M") {
        flushPoly();
        const a = num3(), b = num3();
        x = rel ? x + a : a;
        y = rel ? y + b : b;
        sx = x;
        sy = y;
        cur = [[x, y]];
        cmd = rel ? "l" : "L";
        lastC = lastQ = null;
        continue;
      }
      if (C === "L") {
        const a = num3(), b = num3();
        x = rel ? x + a : a;
        y = rel ? y + b : b;
        cur.push([x, y]);
        lastC = lastQ = null;
        continue;
      }
      if (C === "H") {
        const a = num3();
        x = rel ? x + a : a;
        cur.push([x, y]);
        lastC = lastQ = null;
        continue;
      }
      if (C === "V") {
        const b = num3();
        y = rel ? y + b : b;
        cur.push([x, y]);
        lastC = lastQ = null;
        continue;
      }
      if (C === "C" || C === "S") {
        let x1, y1;
        if (C === "C") {
          x1 = num3();
          y1 = num3();
          if (rel) {
            x1 += x;
            y1 += y;
          }
        } else if (lastC) {
          x1 = 2 * x - lastC[0];
          y1 = 2 * y - lastC[1];
        } else {
          x1 = x;
          y1 = y;
        }
        let x2 = num3(), y2 = num3(), ex = num3(), ey = num3();
        if (rel) {
          x2 += x;
          y2 += y;
          ex += x;
          ey += y;
        }
        for (let t = 1; t <= 10; t++) {
          const u = t / 10, w = 1 - u;
          cur.push([w * w * w * x + 3 * w * w * u * x1 + 3 * w * u * u * x2 + u * u * u * ex, w * w * w * y + 3 * w * w * u * y1 + 3 * w * u * u * y2 + u * u * u * ey]);
        }
        lastC = [x2, y2];
        lastQ = null;
        x = ex;
        y = ey;
        continue;
      }
      if (C === "Q" || C === "T") {
        let x1, y1;
        if (C === "Q") {
          x1 = num3();
          y1 = num3();
          if (rel) {
            x1 += x;
            y1 += y;
          }
        } else if (lastQ) {
          x1 = 2 * x - lastQ[0];
          y1 = 2 * y - lastQ[1];
        } else {
          x1 = x;
          y1 = y;
        }
        let ex = num3(), ey = num3();
        if (rel) {
          ex += x;
          ey += y;
        }
        for (let t = 1; t <= 8; t++) {
          const u = t / 8, w = 1 - u;
          cur.push([w * w * x + 2 * w * u * x1 + u * u * ex, w * w * y + 2 * w * u * y1 + u * u * ey]);
        }
        lastQ = [x1, y1];
        lastC = null;
        x = ex;
        y = ey;
        continue;
      }
      throw new Error("svg path command " + cmd);
    }
    flushPoly();
    return polys;
  }
  function clipRect(poly, r) {
    const edges = [
      [(p2) => p2[0] >= r.l, (a, b) => {
        const t = (r.l - a[0]) / (b[0] - a[0]);
        return [r.l, a[1] + t * (b[1] - a[1])];
      }],
      [(p2) => p2[0] <= r.r, (a, b) => {
        const t = (r.r - a[0]) / (b[0] - a[0]);
        return [r.r, a[1] + t * (b[1] - a[1])];
      }],
      [(p2) => p2[1] >= r.t, (a, b) => {
        const t = (r.t - a[1]) / (b[1] - a[1]);
        return [a[0] + t * (b[0] - a[0]), r.t];
      }],
      [(p2) => p2[1] <= r.b, (a, b) => {
        const t = (r.b - a[1]) / (b[1] - a[1]);
        return [a[0] + t * (b[0] - a[0]), r.b];
      }]
    ];
    let out = poly;
    for (const [inside, cut] of edges) {
      const inp = out;
      out = [];
      for (let i = 0; i < inp.length; i++) {
        const a = inp[i], b = inp[(i + 1) % inp.length], ia = inside(a), ib = inside(b);
        if (ia && ib) out.push(b);
        else if (ia && !ib) out.push(cut(a, b));
        else if (!ia && ib) {
          out.push(cut(a, b));
          out.push(b);
        }
      }
      if (!out.length) return [];
    }
    return out;
  }
  async function katexOutlines(latex, size = 12, { display = false } = {}) {
    const katex2 = globalThis.katex;
    if (!katex2 || typeof document === "undefined") throw new Error("KaTeX is not available");
    const host = document.createElement("div");
    host.style.cssText = `position:absolute;left:-20000px;top:0;font-size:${size}px;line-height:normal;white-space:nowrap;`;
    document.body.appendChild(host);
    try {
      katex2.render(display && !/^\s*\\displaystyle/.test(latex) ? `\\displaystyle ${latex}` : latex, host, { displayMode: false, throwOnError: true, output: "html", strict: "ignore" });
      const root = host.querySelector(".katex");
      root.style.fontSize = "1em";
      host.getBoundingClientRect();
      await document.fonts.ready;
      const fams = /* @__PURE__ */ new Set();
      root.querySelectorAll("*").forEach((el) => {
        const f = getComputedStyle(el).fontFamily;
        if (/KaTeX/.test(f)) fams.add(`${getComputedStyle(el).fontStyle} ${getComputedStyle(el).fontWeight} 1em ${f}`);
      });
      await Promise.all([...fams].map((f) => document.fonts.load(f).catch(() => null)));
      await document.fonts.ready;
      const o = host.getBoundingClientRect();
      const glyphs = [], rects = [], polys = [];
      let baseline = null;
      const mk = () => {
        const m = document.createElement("span");
        m.style.cssText = "display:inline-block;width:0;height:0;";
        return m;
      };
      const base = root.querySelector(".base");
      if (base) {
        const m = mk();
        base.insertBefore(m, base.firstChild);
        baseline = m.getBoundingClientRect().bottom - o.top;
        m.remove();
      }
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n);
      for (const node3 of nodes) {
        const text = node3.nodeValue, parent = node3.parentElement;
        if (!parent || !text.trim() || parent.closest(".katex-mathml")) continue;
        const cs = getComputedStyle(parent), fs = parseFloat(cs.fontSize), name = fontName(cs);
        const m = mk();
        parent.insertBefore(m, node3);
        const by = m.getBoundingClientRect().bottom - o.top;
        m.remove();
        const rg = document.createRange();
        let i = 0;
        for (const ch of text) {
          const len3 = ch.length;
          if (ch.trim()) {
            rg.setStart(node3, i);
            rg.setEnd(node3, i + len3);
            glyphs.push({ name, cp: ch.codePointAt(0), x: rg.getBoundingClientRect().left - o.left, y: by, size: fs });
          }
          i += len3;
        }
        if (baseline === null) baseline = by;
      }
      root.querySelectorAll("*").forEach((el) => {
        const cs = getComputedStyle(el);
        if (cs.display === "none") return;
        const r = el.getBoundingClientRect();
        for (const side of ["Top", "Bottom", "Left", "Right"]) {
          const bw = parseFloat(cs[`border${side}Width`]);
          if (!(bw > 0) || cs[`border${side}Style`] === "none") continue;
          const x = r.left - o.left, y = r.top - o.top;
          if (side === "Top") rects.push([x, y, r.width, bw]);
          else if (side === "Bottom") rects.push([x, y + r.height - bw, r.width, bw]);
          else if (side === "Left") rects.push([x, y, bw, r.height]);
          else rects.push([x + r.width - bw, y, bw, r.height]);
        }
      });
      root.querySelectorAll("svg").forEach((svg) => {
        const r = svg.getBoundingClientRect(), vb = svg.viewBox && svg.viewBox.baseVal;
        if (!vb || !vb.width || !vb.height) return;
        let clip2 = { l: r.left, t: r.top, r: r.right, b: r.bottom };
        for (let a = svg.parentElement; a && a !== host; a = a.parentElement) {
          const cs = getComputedStyle(a);
          if (cs.overflowX !== "visible" || cs.overflowY !== "visible") {
            const q = a.getBoundingClientRect();
            clip2 = { l: Math.max(clip2.l, q.left), t: Math.max(clip2.t, q.top), r: Math.min(clip2.r, q.right), b: Math.min(clip2.b, q.bottom) };
          }
        }
        const par = svg.getAttribute("preserveAspectRatio") || "xMidYMid meet";
        let sx, sy, ox, oy;
        if (/none/.test(par)) {
          sx = r.width / vb.width;
          sy = r.height / vb.height;
          ox = r.left;
          oy = r.top;
        } else {
          const s = /slice/.test(par) ? Math.max(r.width / vb.width, r.height / vb.height) : Math.min(r.width / vb.width, r.height / vb.height);
          sx = sy = s;
          ox = r.left + (r.width - vb.width * s) * (/xMin/.test(par) ? 0 : /xMax/.test(par) ? 1 : 0.5);
          oy = r.top + (r.height - vb.height * s) * (/YMin/.test(par) ? 0 : /YMax/.test(par) ? 1 : 0.5);
        }
        const tf = ([px, py]) => [ox + (px - vb.x) * sx - o.left, oy + (py - vb.y) * sy - o.top];
        const cl = { l: clip2.l - o.left, t: clip2.t - o.top, r: clip2.r - o.left, b: clip2.b - o.top };
        svg.querySelectorAll("path").forEach((p2) => {
          for (const poly of pathPolys(p2.getAttribute("d") || "")) {
            const c = clipRect(poly.map(tf), cl);
            if (c.length > 2) polys.push(c);
          }
        });
        svg.querySelectorAll("line").forEach((ln2) => {
          const a = tf([+ln2.getAttribute("x1"), +ln2.getAttribute("y1")]), b = tf([+ln2.getAttribute("x2"), +ln2.getAttribute("y2")]);
          const w = (parseFloat(ln2.getAttribute("stroke-width")) || 1) * sx, dx2 = b[0] - a[0], dy2 = b[1] - a[1], L = Math.hypot(dx2, dy2) || 1, nx = -dy2 / L * w / 2, ny = dx2 / L * w / 2;
          polys.push([[a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny], [b[0] - nx, b[1] - ny], [a[0] - nx, a[1] - ny]]);
        });
      });
      const fontMap = /* @__PURE__ */ new Map();
      await Promise.all([...new Set(glyphs.map((g) => g.name))].map(async (n) => fontMap.set(n, await loadFont(n))));
      const groups = [];
      for (const g of glyphs) {
        const font = fontMap.get(g.name), outline = font.outline(g.cp);
        if (!outline || !outline.length) continue;
        const k = g.size / font.unitsPerEm;
        groups.push(outline.map((c) => c.map(([px, py]) => [g.x + px * k, g.y - py * k])));
      }
      for (const [x, y, w, h] of rects) groups.push([[[x, y], [x + w, y], [x + w, y + h], [x, y + h]]]);
      for (const p2 of polys) groups.push([p2]);
      if (!groups.length) throw new Error("empty equation");
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const gr of groups) for (const c of gr) for (const [x, y] of c) {
        x0 = Math.min(x0, x);
        x1 = Math.max(x1, x);
        y0 = Math.min(y0, y);
        y1 = Math.max(y1, y);
      }
      const pad = 0.8;
      const dx = pad - x0, dy = pad - y0;
      const moved = groups.map((gr) => gr.map((c) => c.map(([x, y]) => [x + dx, y + dy])));
      const height = y1 - y0 + 2 * pad;
      return { groups: moved, width: x1 - x0 + 2 * pad, height, baseline: Math.max(0, height - ((baseline != null ? baseline : y1) + dy)) };
    } finally {
      host.remove();
    }
  }
  function outlinesToPng(res, scale = 8) {
    const c = document.createElement("canvas");
    c.width = Math.ceil(res.width * scale);
    c.height = Math.ceil(res.height * scale);
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#000";
    for (const gr of res.groups) {
      ctx.beginPath();
      for (const ct of gr) {
        ct.forEach(([x, y], i) => i ? ctx.lineTo(x * scale, y * scale) : ctx.moveTo(x * scale, y * scale));
        ctx.closePath();
      }
      ctx.fill("nonzero");
    }
    const bin = atob(c.toDataURL("image/png").split(",")[1]), out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  var FONT_URL, AVAILABLE, fontCache;
  var init_katex_render = __esm({
    "src/katex-render.js"() {
      init_ttf();
      FONT_URL = (name) => new URL(`../taskpane/katex/fonts/KaTeX_${name}.ttf`, __BUNDLE_URL__).href;
      AVAILABLE = /* @__PURE__ */ new Set(["AMS-Regular", "Caligraphic-Bold", "Caligraphic-Regular", "Fraktur-Bold", "Fraktur-Regular", "Main-Bold", "Main-BoldItalic", "Main-Italic", "Main-Regular", "Math-BoldItalic", "Math-Italic", "SansSerif-Bold", "SansSerif-Italic", "SansSerif-Regular", "Script-Regular", "Size1-Regular", "Size2-Regular", "Size3-Regular", "Size4-Regular", "Typewriter-Regular"]);
      fontCache = /* @__PURE__ */ new Map();
    }
  });

  // src/emf.js
  var emf_exports = {};
  __export(emf_exports, {
    polygonsToEmf: () => polygonsToEmf,
    svgToEmf: () => svgToEmf
  });
  function svgToEmf(svg, advance) {
    const root = /<svg\b[^>]*viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(svg);
    if (!root) throw new Error("emf: no viewBox");
    const W = Math.ceil(num(root[1]) * U), H = Math.ceil(num(root[2]) * U);
    const out = new Out();
    let handles = 0;
    const fonts = /* @__PURE__ */ new Map(), pens = /* @__PURE__ */ new Map();
    const select = (h) => out.rec(37, h);
    out.rec(18, 1);
    out.rec(22, 24);
    out.rec(24, 0);
    out.rec(37, 2147483653);
    const font = (face2, px, italic, bold) => {
      const key = `${face2}|${px}|${italic}|${bold}`;
      if (!fonts.has(key)) {
        const h = ++handles;
        const lf = [
          ...[-Math.round(px * U)].flatMap((v) => [v & 255, v >> 8 & 255, v >> 16 & 255, v >> 24 & 255]),
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          ...[bold ? 700 : 400].flatMap((v) => [v & 255, v >> 8 & 255, 0, 0]),
          italic ? 1 : 0,
          0,
          0,
          1,
          0,
          0,
          4,
          18
        ];
        const name = [];
        for (let i = 0; i < 32; i++) name.push(...u16(i < face2.length ? face2.charCodeAt(i) : 0));
        out.rec(82, h, lf, name);
        fonts.set(key, h);
      }
      return fonts.get(key);
    };
    const pen = (wPt) => {
      const w = Math.max(1, Math.round(wPt * U));
      if (!pens.has(w)) {
        const h = ++handles;
        out.rec(38, h, 0, w, 0, 0);
        pens.set(w, h);
      }
      return pens.get(w);
    };
    const pt = (x, y) => [i32(x * U), i32(y * U)];
    const moveTo = (x, y) => out.rec(27, ...pt(x, y));
    const lineTo = (x, y) => out.rec(54, ...pt(x, y));
    let any = 0;
    const body = svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
    const tagRe = /<(text|line|path|rect)\b([^>]*?)(?:\/>|>([\s\S]*?)<\/text>)/g;
    let m, last = 0;
    while (m = tagRe.exec(body)) {
      if (body.slice(last, m.index).trim()) throw new Error("emf: unexpected markup");
      last = tagRe.lastIndex;
      const [, kind, a, inner] = m;
      any++;
      if (kind === "text") {
        const text = unesc2(inner || "");
        const x = num(attr(a, "x")), y = num(attr(a, "y")), fs = num(attr(a, "font-size"));
        const italic = /font-style="italic"/.test(a), bold = /font-weight="bold"/.test(a);
        const family = (attr(a, "font-family") || "").replace(/&quot;/g, '"').split(",")[0].replace(/['"]/g, "").trim() || "Times New Roman";
        const chars = [...text];
        let cx = x, i = 0;
        while (i < chars.length) {
          const math = needsMathFont(chars[i].codePointAt(0));
          let j = i;
          while (j < chars.length && needsMathFont(chars[j].codePointAt(0)) === math) j++;
          const run4 = chars.slice(i, j).join("");
          const units = [...run4].flatMap((c) => {
            const cp2 = c.codePointAt(0);
            return cp2 > 65535 ? [55296 + (cp2 - 65536 >> 10), 56320 + (cp2 - 65536 & 1023)] : [cp2];
          });
          const adv = [...run4].map((c) => advance(c, fs, italic, bold));
          const dx = [];
          [...run4].forEach((c, k) => {
            const n3 = c.codePointAt(0) > 65535 ? 2 : 1;
            for (let q = 0; q < n3; q++) dx.push(q === 0 ? Math.round(adv[k] * U) : 0);
          });
          select(font(math ? "Cambria Math" : family, fs, italic && !math, bold));
          const str = units.flatMap(u16);
          while (str.length % 4) str.push(0);
          const n = units.length, base = 8 + 16 + 4 + 4 + 4 + 8 + 4 + 4 + 4 + 16 + 4;
          const dxBytes = dx.flatMap((v) => [v & 255, v >> 8 & 255, v >> 16 & 255, 0]);
          const w = adv.reduce((s, v) => s + v, 0);
          out.rec(84, 0, 0, W, H, 1, 0, 0, ...pt(cx, y), n, base, 0, 0, 0, 0, 0, base + str.length, str, dxBytes);
          cx += w;
          i = j;
        }
      } else if (kind === "line") {
        select(pen(num(attr(a, "stroke-width") || 1)));
        moveTo(num(attr(a, "x1")), num(attr(a, "y1")));
        lineTo(num(attr(a, "x2")), num(attr(a, "y2")));
      } else if (kind === "rect") {
        select(pen(num(attr(a, "stroke-width") || 1)));
        const x = num(attr(a, "x")), y = num(attr(a, "y")), w = num(attr(a, "width")), h = num(attr(a, "height"));
        moveTo(x, y);
        lineTo(x + w, y);
        lineTo(x + w, y + h);
        lineTo(x, y + h);
        lineTo(x, y);
      } else {
        if (!/fill="none"/.test(a)) throw new Error("emf: filled path");
        select(pen(num(attr(a, "stroke-width") || 1)));
        const toks = (attr(a, "d") || "").match(/[MLHVQ]|-?[\d.]+(?:e-?\d+)?/g) || [];
        let k = 0, cx = 0, cy = 0, cmd = "";
        const n = () => num(toks[k++]);
        while (k < toks.length) {
          if (/^[A-Z]$/.test(toks[k])) cmd = toks[k++];
          if (cmd === "M") {
            cx = n();
            cy = n();
            moveTo(cx, cy);
            cmd = "L";
          } else if (cmd === "L") {
            cx = n();
            cy = n();
            lineTo(cx, cy);
          } else if (cmd === "H") {
            cx = n();
            lineTo(cx, cy);
          } else if (cmd === "V") {
            cy = n();
            lineTo(cx, cy);
          } else if (cmd === "Q") {
            const qx = n(), qy = n(), ex = n(), ey = n();
            const c1 = [cx + 2 / 3 * (qx - cx), cy + 2 / 3 * (qy - cy)], c2 = [ex + 2 / 3 * (qx - ex), ey + 2 / 3 * (qy - ey)];
            const P3 = [...c1, ...c2, ex, ey];
            const bx = P3.map((v, idx) => i32(v * U));
            out.rec(88, i32(Math.min(cx, ex, qx) * U), i32(Math.min(cy, ey, qy) * U), i32(Math.max(cx, ex, qx) * U), i32(Math.max(cy, ey, qy) * U), 3, ...bx);
            cx = ex;
            cy = ey;
          } else throw new Error("emf: path command");
        }
      }
    }
    if (body.slice(last).trim()) throw new Error("emf: trailing markup");
    if (!any) throw new Error("emf: empty drawing");
    const eof = [14, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 20, 0, 0, 0];
    const records = out.parts.flat();
    const total = 88 + records.length + eof.length;
    const hd = new Uint8Array(88), dv = new DataView(hd.buffer);
    dv.setUint32(0, 1, true);
    dv.setUint32(4, 88, true);
    dv.setInt32(8, 0, true);
    dv.setInt32(12, 0, true);
    dv.setInt32(16, W - 1, true);
    dv.setInt32(20, H - 1, true);
    dv.setInt32(24, 0, true);
    dv.setInt32(28, 0, true);
    dv.setInt32(32, Math.round(W / U * MM100_PER_PT), true);
    dv.setInt32(36, Math.round(H / U * MM100_PER_PT), true);
    dv.setUint32(40, 1179469088, true);
    dv.setUint32(44, 65536, true);
    dv.setUint32(48, total, true);
    dv.setUint32(52, out.count + 2, true);
    dv.setUint16(56, handles + 1, true);
    dv.setUint16(58, 0, true);
    dv.setUint32(60, 0, true);
    dv.setUint32(64, 0, true);
    dv.setUint32(68, 0, true);
    dv.setInt32(72, 72e3, true);
    dv.setInt32(76, 72e3, true);
    dv.setInt32(80, 254, true);
    dv.setInt32(84, 254, true);
    const res = new Uint8Array(total);
    res.set(hd, 0);
    res.set(records, 88);
    res.set(eof, 88 + records.length);
    return res;
  }
  function polygonsToEmf(groups, widthPt, heightPt) {
    const U2 = 20;
    const W = Math.ceil(widthPt * U2), H = Math.ceil(heightPt * U2);
    if (W > 32e3 || H > 32e3) throw new Error("emf: picture too large");
    const out = new Out();
    out.rec(18, 1);
    out.rec(19, 2);
    out.rec(37, 2147483656);
    out.rec(37, 2147483652);
    const s16 = (v) => {
      const n = Math.max(-32768, Math.min(32767, Math.round(v * U2)));
      return [n & 255, n >> 8 & 255];
    };
    for (const contours of groups) {
      const cs = contours.filter((c) => c.length >= 3);
      if (!cs.length) continue;
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      const pts = [];
      for (const c of cs) for (const [x, y] of c) {
        x0 = Math.min(x0, x);
        x1 = Math.max(x1, x);
        y0 = Math.min(y0, y);
        y1 = Math.max(y1, y);
        pts.push(...s16(x), ...s16(y));
      }
      const total2 = cs.reduce((n, c) => n + c.length, 0);
      const counts = cs.flatMap((c) => [c.length & 255, c.length >> 8 & 255, 0, 0]);
      out.rec(91, i32(x0 * U2), i32(y0 * U2), i32(x1 * U2), i32(y1 * U2), cs.length, total2, counts, pts);
    }
    const eof = [14, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 20, 0, 0, 0];
    const records = out.parts.flat();
    const total = 88 + records.length + eof.length;
    const hd = new Uint8Array(88), dv = new DataView(hd.buffer);
    dv.setUint32(0, 1, true);
    dv.setUint32(4, 88, true);
    dv.setInt32(16, W - 1, true);
    dv.setInt32(20, H - 1, true);
    dv.setInt32(32, Math.round(widthPt * 35.2778), true);
    dv.setInt32(36, Math.round(heightPt * 35.2778), true);
    dv.setUint32(40, 1179469088, true);
    dv.setUint32(44, 65536, true);
    dv.setUint32(48, total, true);
    dv.setUint32(52, out.count + 2, true);
    dv.setUint16(56, 1, true);
    dv.setInt32(72, 14400, true);
    dv.setInt32(76, 14400, true);
    dv.setInt32(80, 254, true);
    dv.setInt32(84, 254, true);
    const res = new Uint8Array(total);
    res.set(hd, 0);
    res.set(records, 88);
    res.set(eof, 88 + records.length);
    return res;
  }
  var U, MM100_PER_PT, unesc2, attr, num, BASE_SYMBOLS, needsMathFont, Out, i32, u16;
  var init_emf = __esm({
    "src/emf.js"() {
      U = 100;
      MM100_PER_PT = 35.2778;
      unesc2 = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
      attr = (tag, name) => {
        const m = new RegExp(`\\s${name}="([^"]*)"`).exec(tag);
        return m ? m[1] : null;
      };
      num = (v) => {
        const n = Number(v);
        if (!Number.isFinite(n)) throw new Error("emf: bad number");
        return n;
      };
      BASE_SYMBOLS = /* @__PURE__ */ new Set([8706, 8710, 8719, 8721, 8722, 8730, 8734, 8747, 8776, 8800, 8804, 8805, 8226, 8230, 8211, 8212, 8242, 8243, 176, 177, 215, 247, 183]);
      needsMathFont = (cp2) => cp2 >= 8592 && !BASE_SYMBOLS.has(cp2);
      Out = class {
        constructor() {
          this.parts = [];
          this.count = 0;
        }
        rec(type, ...fields) {
          const body = [];
          for (const f of fields) {
            if (typeof f === "number") {
              body.push(f & 255, f >> 8 & 255, f >> 16 & 255, f >> 24 & 255);
            } else body.push(...f);
          }
          while (body.length % 4) body.push(0);
          const size = body.length + 8;
          const head = [type & 255, type >> 8 & 255, 0, 0, size & 255, size >> 8 & 255, size >> 16 & 255, 0];
          this.parts.push(head, body);
          this.count++;
        }
      };
      i32 = (v) => {
        const n = Math.round(v);
        return n < 0 ? n + 4294967296 : n;
      };
      u16 = (v) => [v & 255, v >> 8 & 255];
    }
  });

  // src/mathtype-object.js
  async function mathTypeObject(latex, { render, style = "times", inline = true, font = null, size = 12, vector = true, display = false }) {
    const fontKey = font || style;
    const pt = Number(size) > 0 ? Number(size) : 12;
    const stream = latexToEquationStream(latex, { style, inline, font: fontKey, size: pt });
    const ole = buildOle(stream);
    const pic = await render(latex, { size: pt, family: (MT_FONTS[fontKey] || MT_FONTS.times).family, vector, display });
    const useEmf = vector && pic.emf instanceof Uint8Array && pic.emf.length > 100;
    const img = useEmf ? { ext: "emf", type: "image/x-emf", data: pic.emf } : { ext: "png", type: "image/png", data: pic.png };
    const n = ++counter;
    const rIdOle = `rIdTcOle${n}`, rIdImg = `rIdTcImg${n}`;
    const w = pic.width, h = pic.height;
    const runXml2 = `<w:r><w:rPr><w:position w:val="${-Math.round(pic.baseline * 2)}"/></w:rPr><w:object w:dxaOrig="${Math.round(w * 20)}" w:dyaOrig="${Math.round(h * 20)}">${SHAPETYPE}<v:shape id="_x0000_i${n}" type="#_x0000_t75" style="width:${w.toFixed(1)}pt;height:${h.toFixed(1)}pt" o:ole=""><v:imagedata r:id="${rIdImg}" o:title=""/></v:shape><o:OLEObject Type="Embed" ProgID="Equation.DSMT4" ShapeID="_x0000_i${n}" DrawAspect="Content" ObjectID="_${n}${String(Date.now()).slice(-6)}" r:id="${rIdOle}"/></w:object></w:r>`;
    return {
      runXml: runXml2,
      parts: [
        { name: `/word/embeddings/oleObjectTc${n}.bin`, type: "application/vnd.openxmlformats-officedocument.oleObject", data: ole },
        { name: `/word/media/imageTc${n}.${img.ext}`, type: img.type, data: img.data }
      ],
      rels: [{ id: rIdOle, type: REL2 + "oleObject", target: `embeddings/oleObjectTc${n}.bin` }, { id: rIdImg, type: REL2 + "image", target: `media/imageTc${n}.${img.ext}` }]
    };
  }
  function ensureNs(root) {
    let r = root;
    const head = r.match(/^<[^>]*>/)[0];
    for (const [p2, uri] of Object.entries(NS)) if (!new RegExp(`xmlns:${p2}=`).test(head)) r = r.replace(/^<([\w:]+)/, `<$1 xmlns:${p2}="${uri}"`);
    return r;
  }
  function attachObjects(pkg, docXml, objects) {
    let out = pkg;
    const parts = splitParts(out);
    const docPart = parts.get("/word/document.xml");
    out = out.replace(docPart.body, () => docPart.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, c) => a + ensureNs(docXml.trimStart()) + c));
    const relsPart = splitParts(out).get("/word/_rels/document.xml.rels");
    const relXml = objects.flatMap((o) => o.rels).map((r) => `<Relationship Id="${r.id}" Type="${r.type}" Target="${r.target}"/>`).join("");
    out = out.replace(relsPart.body, () => relsPart.body.replace("</Relationships>", relXml + "</Relationships>"));
    const partXml = objects.flatMap((o) => o.parts).map((p2) => `<pkg:part pkg:name="${p2.name}" pkg:contentType="${p2.type}" pkg:compression="store"><pkg:binaryData>${b64(p2.data)}</pkg:binaryData></pkg:part>`).join("");
    return out.replace("</pkg:package>", partXml + "</pkg:package>");
  }
  function detectFontPt(doc, span, stylesXml = "", fallback = 12) {
    const half = (xml) => {
      const m = [...xml.matchAll(/<w:sz w:val="(\d+)"/g)];
      return m.length ? Number(m[m.length - 1][1]) / 2 : null;
    };
    const pStart = Math.max(doc.lastIndexOf("<w:p>", span[0]), doc.lastIndexOf("<w:p ", span[0]));
    const pEndAt = doc.indexOf("</w:p>", span[1]);
    const para2 = doc.slice(Math.max(0, pStart), pEndAt < 0 ? doc.length : pEndAt);
    const rel = span[0] - Math.max(0, pStart);
    const own = half(doc.slice(span[0], span[1]));
    if (own) return own;
    const before = half(para2.slice(0, rel).replace(/<w:pPr>[\s\S]*?<\/w:pPr>/, ""));
    if (before) return before;
    const after = half(para2.slice(rel + (span[1] - span[0])).replace(/<w:pPr>[\s\S]*?<\/w:pPr>/, ""));
    if (after) return after;
    const styleSz = (id) => {
      const m = new RegExp(`<w:style [^>]*w:styleId="${id}"[\\s\\S]*?</w:style>`).exec(stylesXml);
      return m ? half(m[0]) : null;
    };
    const ps = /<w:pStyle w:val="([^"]+)"/.exec(para2);
    const sz = ps && styleSz(ps[1]) || styleSz("Normal") || half((/<w:docDefaults>[\s\S]*?<\/w:docDefaults>/.exec(stylesXml) || [""])[0]);
    return sz || fallback;
  }
  async function convertNativeToMathType(pkg, { render, style = "times", font = null, size = "auto", defaultSize = 12, vector = true, display = false } = {}) {
    var _a8;
    const scan2 = scanPackage(pkg);
    const styles = ((_a8 = splitParts(pkg).get("/word/styles.xml")) == null ? void 0 : _a8.body) || "";
    let doc = scan2.doc;
    const result = { pkg, converted: 0, kept: [], changed: false };
    const edits = [], objects = [];
    for (const eq of scan2.equations) {
      if (eq.kind !== "native") continue;
      if (eq.latex === null) {
        result.kept.push({ reason: eq.error });
        continue;
      }
      try {
        let [start, end] = eq.span;
        const pt = size === "auto" ? detectFontPt(doc, eq.span, styles, defaultSize) : Number(size);
        const obj = await mathTypeObject(eq.latex, { render, style, font, size: pt, vector, display });
        const before = doc.slice(0, start), after = doc.slice(end);
        const para2 = /<m:oMathPara>\s*$/.exec(before), paraEnd = /^\s*<\/m:oMathPara>/.exec(after);
        if (para2 && paraEnd) {
          start -= para2[0].length;
          end += paraEnd[0].length;
        }
        edits.push({ start, end, repl: obj.runXml });
        objects.push(obj);
      } catch (e3) {
        result.kept.push({ reason: e3.message, latex: eq.latex });
      }
    }
    if (!edits.length) return result;
    edits.sort((a, b) => b.start - a.start);
    for (const e3 of edits) doc = doc.slice(0, e3.start) + e3.repl + doc.slice(e3.end);
    result.pkg = attachObjects(pkg, doc, objects);
    result.converted = objects.length;
    result.changed = true;
    return result;
  }
  async function makeMathTypePackage(latex, { render, style = "times", inline = true, font = null, size = 12, vector = true, display = false } = {}) {
    const obj = await mathTypeObject(latex, { render, style, inline, font, size, vector, display });
    const base = `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document xmlns:w="${NS.w}"><w:body><w:p>${obj.runXml}</w:p></w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
    const doc = /<w:document[\s\S]*<\/w:document>/.exec(base)[0];
    return attachObjects(base, doc, [obj]);
  }
  async function browserRender(latex, { size = 12, family = "times", vector = true, display = false } = {}) {
    try {
      const { katexOutlines: katexOutlines2, outlinesToPng: outlinesToPng2 } = await Promise.resolve().then(() => (init_katex_render(), katex_render_exports));
      const r2 = await katexOutlines2(latex, size, { display });
      let emf2 = null;
      if (vector) {
        try {
          const { polygonsToEmf: polygonsToEmf2 } = await Promise.resolve().then(() => (init_emf(), emf_exports));
          emf2 = polygonsToEmf2(r2.groups, r2.width, r2.height);
        } catch (e3) {
          emf2 = null;
        }
      }
      return { png: emf2 ? null : outlinesToPng2(r2, 8), emf: emf2, width: r2.width, height: r2.height, baseline: r2.baseline };
    } catch (e3) {
    }
    const { renderLatex: renderLatex2, svgToPng: svgToPng2, charAdvance: charAdvance2 } = await Promise.resolve().then(() => (init_mathrender(), mathrender_exports));
    const r = renderLatex2(latex, { fontSize: size, family });
    let emf = null;
    if (vector) {
      try {
        const { svgToEmf: svgToEmf2 } = await Promise.resolve().then(() => (init_emf(), emf_exports));
        emf = svgToEmf2(r.svg, charAdvance2);
      } catch (e3) {
        emf = null;
      }
    }
    return { png: emf ? null : await svgToPng2(r.svg, r.width, r.height, 4), emf, width: r.width, height: r.height, baseline: r.baseline };
  }
  var SHAPETYPE, NS, REL2, b64, counter;
  var init_mathtype_object = __esm({
    "src/mathtype-object.js"() {
      init_mtef_writer();
      init_ole_writer();
      init_ooxml();
      SHAPETYPE = `<v:shapetype id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f"><v:stroke joinstyle="miter"/><v:formulas><v:f eqn="if lineDrawn pixelLineWidth 0"/><v:f eqn="sum @0 1 0"/><v:f eqn="sum 0 0 @1"/><v:f eqn="prod @2 1 2"/><v:f eqn="prod @3 21600 pixelWidth"/><v:f eqn="prod @3 21600 pixelHeight"/><v:f eqn="sum @0 0 1"/><v:f eqn="prod @6 1 2"/><v:f eqn="prod @7 21600 pixelWidth"/><v:f eqn="sum @8 21600 0"/><v:f eqn="prod @7 21600 pixelHeight"/><v:f eqn="sum @10 21600 0"/></v:formulas><v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/><o:lock v:ext="edit" aspectratio="t"/></v:shapetype>`;
      NS = { v: "urn:schemas-microsoft-com:vml", o: "urn:schemas-microsoft-com:office:office", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", m: "http://schemas.openxmlformats.org/officeDocument/2006/math" };
      REL2 = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/";
      b64 = (bytes) => {
        let s = "";
        for (let i = 0; i < bytes.length; i += 32768) s += String.fromCharCode(...bytes.subarray(i, i + 32768));
        return btoa(s).replace(/(.{76})/g, "$1\n");
      };
      counter = Math.floor(Date.now() / 1e3) % 1e5;
    }
  });

  // src/figures/expr.js
  function group2(t, i) {
    while (t[i] === " ") i++;
    if (t[i] !== "{") {
      const m = /^(\\[a-zA-Z]+|[a-zA-Z0-9.])/.exec(t.slice(i));
      return m ? [m[0], i + m[0].length] : ["", i];
    }
    let d = 0, j = i;
    for (; j < t.length; j++) {
      if (t[j] === "{") d++;
      else if (t[j] === "}" && --d === 0) break;
    }
    return [t.slice(i + 1, j), j + 1];
  }
  function latexToPlain(src) {
    let t = String(src).trim();
    if (!/[\\{}]/.test(t)) return t;
    t = t.replace(/^\s*\$+|\$+\s*$/g, "").replace(/\\(?:left|right|big|Big|bigg|Bigg|displaystyle|,|;|!|quad|qquad)/g, "").replace(/\\[lr]vert/g, "|").replace(/^\s*(?:y|f\s*\(\s*x\s*\)|g\s*\(\s*x\s*\))\s*=/, "");
    t = t.replace(/\\(?:mathrm|operatorname|text|mathit)\s*\{([^}]*)\}/g, "$1").replace(/\\cdot|\\times/g, "*").replace(/\\div/g, "/").replace(/\\pi\b/g, "pi").replace(/\\(arcsin|arccos|arctan|sinh|cosh|tanh|sin|cos|tan|cot|sec|csc|ln|lg|exp)\b/g, "$1");
    let guard = 0;
    for (let m; guard++ < 200 && (m = /\\(?:d|t)?frac|\\sqrt|\\log|\\dfrac/.exec(t)); ) {
      const i = m.index, name = m[0].replace(/^\\(d|t)/, "\\");
      let k = i + m[0].length;
      if (name === "\\frac" || name === "frac") {
        const [a, j] = group2(t, k);
        const [b, e3] = group2(t, j);
        t = t.slice(0, i) + `((${a})/(${b}))` + t.slice(e3);
      } else if (name === "\\sqrt") {
        let n = null;
        if (t[k] === "[") {
          const c = t.indexOf("]", k);
          n = t.slice(k + 1, c);
          k = c + 1;
        }
        const [a, e3] = group2(t, k);
        t = t.slice(0, i) + (n ? `((${a})^(1/(${n})))` : `sqrt(${a})`) + t.slice(e3);
      } else {
        let b = null;
        if (t[k] === "_") {
          [b, k] = group2(t, k + 1);
        }
        if (b === null) {
          t = t.slice(0, i) + "lg" + t.slice(k);
        } else {
          let a, e3;
          if (t[k] === "(") {
            let d = 0, j = k;
            for (; j < t.length; j++) {
              if (t[j] === "(") d++;
              else if (t[j] === ")" && --d === 0) break;
            }
            a = t.slice(k + 1, j);
            e3 = j + 1;
          } else [a, e3] = group2(t, k);
          t = t.slice(0, i) + `(ln(${a})/ln(${b}))` + t.slice(e3);
        }
      }
    }
    t = t.replace(/\^\{([^{}]*)\}/g, "^($1)").replace(/_\{[^{}]*\}|_[a-zA-Z0-9]/g, "").replace(/[{}]/g, (c) => c === "{" ? "(" : ")").replace(/\\/g, "");
    return t;
  }
  function tokenize(src) {
    const s = latexToPlain(src).replace(/\s+/g, "").replace(/[−–]/g, "-").replace(/×|·/g, "*").replace(/÷/g, "/").replace(/²/g, "^2").replace(/³/g, "^3").replace(/π/g, "pi").replace(/√/g, "sqrt");
    const out = [];
    for (let i = 0; i < s.length; ) {
      const c = s[i];
      let m;
      if ((m = /^(?:\d+[.,]?\d*|[.,]\d+)(?:e[+-]?\d+)?/i.exec(s.slice(i))) && !/^e[+-]?\d*$/i.test(m[0])) {
        out.push({ t: "num", v: Number(m[0].replace(",", ".")) });
        i += m[0].length;
      } else if (m = /^[a-zA-Z_][a-zA-Z_0-9]*/.exec(s.slice(i))) {
        out.push({ t: "id", v: m[0] });
        i += m[0].length;
      } else if ("+-*/^(),|".includes(c)) {
        out.push({ t: c });
        i++;
      } else throw new ExprError(`K\xFD t\u1EF1 kh\xF4ng h\u1EE3p l\u1EC7: \u201C${c}\u201D`);
    }
    return out;
  }
  function split(tokens, vars) {
    const out = [];
    for (const tk of tokens) {
      if (tk.t !== "id") {
        out.push(tk);
        continue;
      }
      let w = tk.v;
      const parts = [];
      while (w) {
        const fn = Object.keys(FUNCS2).filter((f) => w.startsWith(f)).sort((a, b) => b.length - a.length)[0];
        const cn = Object.keys(CONST).filter((f) => w === f)[0];
        if (fn) {
          parts.push(fn);
          w = w.slice(fn.length);
        } else if (cn) {
          parts.push(cn);
          w = "";
        } else if (vars.includes(w[0])) {
          parts.push(w[0]);
          w = w.slice(1);
        } else if (w[0] === "e") {
          parts.push("e");
          w = w.slice(1);
        } else throw new ExprError(`Kh\xF4ng hi\u1EC3u \u201C${w}\u201D`);
      }
      parts.forEach((p2) => out.push({ t: "id", v: p2 }));
    }
    return out;
  }
  function compile(src, vars = ["x"]) {
    const toks = split(tokenize(String(src)), vars);
    let pos = 0;
    const peek = () => toks[pos], next = () => toks[pos++];
    const isAtomStart = (t) => t && (t.t === "num" || t.t === "id" || t.t === "(" || t.t === "|");
    function parseExpr() {
      let left = parseTerm();
      while (peek() && (peek().t === "+" || peek().t === "-")) {
        const op = next().t;
        const right = parseTerm();
        const l = left;
        left = op === "+" ? (e3) => l(e3) + right(e3) : (e3) => l(e3) - right(e3);
      }
      return left;
    }
    function parseTerm() {
      let left = parseUnary();
      for (; ; ) {
        const t = peek();
        if (t && (t.t === "*" || t.t === "/")) {
          next();
          const right = parseUnary();
          const l = left;
          left = t.t === "*" ? (e3) => l(e3) * right(e3) : (e3) => l(e3) / right(e3);
        } else if (isAtomStart(t) && !(t.t === "|")) {
          const right = parseUnary();
          const l = left;
          left = (e3) => l(e3) * right(e3);
        } else return left;
      }
    }
    function parseUnary() {
      const t = peek();
      if (t && t.t === "-") {
        next();
        const v = parseUnary();
        return (e3) => -v(e3);
      }
      if (t && t.t === "+") {
        next();
        return parseUnary();
      }
      return parsePow();
    }
    function parsePow() {
      const base = parseAtom();
      if (peek() && peek().t === "^") {
        next();
        const exp = parseUnary();
        return (e3) => {
          const b = base(e3), p2 = exp(e3);
          return b < 0 && Math.abs(p2 - Math.round(p2)) > 1e-12 && Math.abs(1 / p2 - Math.round(1 / p2)) < 1e-12 && Math.round(1 / p2) % 2 === 1 ? -Math.pow(-b, p2) : Math.pow(b, p2);
        };
      }
      return base;
    }
    function parseAtom() {
      const t = next();
      if (!t) throw new ExprError("Bi\u1EC3u th\u1EE9c ch\u01B0a \u0111\u1EA7y \u0111\u1EE7");
      if (t.t === "num") return () => t.v;
      if (t.t === "(") {
        const v = parseExpr();
        if (!peek() || next().t !== ")") throw new ExprError('Thi\u1EBFu d\u1EA5u ngo\u1EB7c \u0111\xF3ng ")"');
        return v;
      }
      if (t.t === "|") {
        const v = parseExpr();
        if (!peek() || next().t !== "|") throw new ExprError("Thi\u1EBFu d\u1EA5u | \u0111\xF3ng");
        return (e3) => Math.abs(v(e3));
      }
      if (t.t === "id") {
        if (vars.includes(t.v)) return (e3) => e3[t.v];
        if (Object.prototype.hasOwnProperty.call(CONST, t.v)) return () => CONST[t.v];
        if (FUNCS2[t.v]) {
          const f = FUNCS2[t.v];
          if (peek() && peek().t === "(") {
            next();
            const a2 = parseExpr();
            if (!peek() || next().t !== ")") throw new ExprError('Thi\u1EBFu d\u1EA5u ngo\u1EB7c \u0111\xF3ng ")"');
            return (e3) => f(a2(e3));
          }
          const a = parsePow();
          return (e3) => f(a(e3));
        }
      }
      throw new ExprError("Bi\u1EC3u th\u1EE9c kh\xF4ng h\u1EE3p l\u1EC7");
    }
    const fn = parseExpr();
    if (pos < toks.length) throw new ExprError("Th\u1EEBa k\xFD t\u1EF1 \u1EDF cu\u1ED1i bi\u1EC3u th\u1EE9c");
    return vars.length === 1 ? (x) => fn({ [vars[0]]: x }) : (...a) => fn(Object.fromEntries(vars.map((v, i) => [v, a[i]])));
  }
  var ExprError, FUNCS2, CONST;
  var init_expr = __esm({
    "src/figures/expr.js"() {
      ExprError = class extends Error {
      };
      FUNCS2 = {
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        cot: (v) => 1 / Math.tan(v),
        sec: (v) => 1 / Math.cos(v),
        csc: (v) => 1 / Math.sin(v),
        asin: Math.asin,
        arcsin: Math.asin,
        acos: Math.acos,
        arccos: Math.acos,
        atan: Math.atan,
        arctan: Math.atan,
        sinh: Math.sinh,
        cosh: Math.cosh,
        tanh: Math.tanh,
        exp: Math.exp,
        ln: Math.log,
        lg: Math.log10,
        log10: Math.log10,
        log2: Math.log2,
        sqrt: Math.sqrt,
        cbrt: Math.cbrt,
        abs: Math.abs,
        sign: Math.sign,
        floor: Math.floor,
        ceil: Math.ceil
      };
      CONST = { pi: Math.PI, e: Math.E };
    }
  });

  // src/figures/svgkit.js
  function niceStep(range, target = 8) {
    const raw = range / target, mag = 10 ** Math.floor(Math.log10(raw)), f = raw / mag;
    return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * mag;
  }
  function numLatex(v) {
    if (!Number.isFinite(v)) return v > 0 ? "+\\infty" : v < 0 ? "-\\infty" : "";
    if (Math.abs(v) < 1e-9) return "0";
    const tol = 1e-7 * Math.max(1, Math.abs(v)), neg = v < 0 ? "-" : "", a = Math.abs(v);
    if (Math.abs(a - Math.round(a)) < tol) return neg + Math.round(a);
    for (let q = 2; q <= 12; q++) {
      const p2 = Math.round(a * q);
      if (Math.abs(a - p2 / q) < tol) return `${neg}\\frac{${p2}}{${q}}`;
    }
    const sq = a * a;
    for (let k = 1; k <= 3; k++) {
      const r = sq / (k * k);
      if (Math.abs(r - Math.round(r)) < 1e-6 * Math.max(1, r) && Math.round(r) <= 400 && Math.round(r) > 0) return `${neg}${k > 1 ? k : ""}\\sqrt{${Math.round(r)}}`;
    }
    return neg + String(Math.round(a * 100) / 100).replace(".", "{,}");
  }
  var esc4, n2, FONT2;
  var init_svgkit = __esm({
    "src/figures/svgkit.js"() {
      esc4 = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      n2 = (v) => (Math.round(v * 100) / 100).toString();
      FONT2 = "'Times New Roman', 'STIX Two Text', serif";
    }
  });

  // src/figures/analysis.js
  function bisect(pred, a, b, iterations = 80) {
    let lo = a, hi = b;
    const pa = pred(lo);
    for (let i = 0; i < iterations; i++) {
      const mid3 = (lo + hi) / 2;
      if (pred(mid3) === pa) lo = mid3;
      else hi = mid3;
    }
    return (lo + hi) / 2;
  }
  function snap(v) {
    if (!finite(v)) return v;
    if (Math.abs(v) < 1e-7) return 0;
    const tol = 1e-6 * Math.max(1, Math.abs(v));
    if (Math.abs(v - Math.round(v)) < tol) return Math.round(v);
    for (let q = 2; q <= 12; q++) {
      const p2 = Math.round(v * q);
      if (Math.abs(v - p2 / q) < tol) return p2 / q;
    }
    const sq = v * v;
    for (let k = 1; k <= 3; k++) {
      const r = sq / (k * k);
      if (Math.abs(r - Math.round(r)) < 1e-5 * Math.max(1, r) && Math.round(r) > 0 && Math.round(r) <= 400) return Math.sign(v) * k * Math.sqrt(Math.round(r));
    }
    return v;
  }
  function analyse(f, { lo = -60, hi = 60, samples = 6e3 } = {}) {
    const dx = (hi - lo) / samples;
    const xs = Array.from({ length: samples + 1 }, (_x, i) => lo + i * dx);
    const ys = xs.map((x) => {
      try {
        return f(x);
      } catch (e3) {
        return NaN;
      }
    });
    const d = (x) => {
      const h = 1e-6 * Math.max(1, Math.abs(x));
      return (f(x + h) - f(x - h)) / (2 * h);
    };
    const edges = [];
    for (let i = 0; i < xs.length - 1; i++) {
      const a = finite(ys[i]), b = finite(ys[i + 1]);
      if (a !== b) {
        const t = bisect((x) => finite(f(x)), a ? xs[i] : xs[i + 1], a ? xs[i + 1] : xs[i]);
        edges.push({ x: snap(t), side: a ? "right-end" : "left-start" });
      }
    }
    const poles = [];
    for (let i = 1; i < xs.length - 1; i++) {
      if (!finite(ys[i]) || !finite(ys[i - 1]) || !finite(ys[i + 1])) continue;
      const a = Math.abs(ys[i - 1]), b = Math.abs(ys[i]), c = Math.abs(ys[i + 1]);
      if (b > a && b >= c && b > 200 && (a < b * 0.98 || c < b * 0.98)) {
        let l = xs[i - 1], r = xs[i + 1];
        for (let k = 0; k < 90; k++) {
          const m1 = l + (r - l) / 3, m2 = r - (r - l) / 3;
          if (Math.abs(f(m1)) < Math.abs(f(m2))) l = m1;
          else r = m2;
        }
        const p2 = (l + r) / 2;
        if (Math.abs(f(p2)) > 1e5 || !finite(f(p2))) poles.push(snap(p2));
      }
    }
    const crit = [];
    const dsign = (x) => {
      const v = d(x);
      return finite(v) ? sgn(Math.abs(v) < 1e-9 ? 0 : v) : 0;
    };
    let prevS = 0, prevX = null;
    for (let i = 0; i < xs.length; i++) {
      if (!finite(ys[i])) {
        prevS = 0;
        prevX = null;
        continue;
      }
      const s = dsign(xs[i]);
      if (s !== 0 && prevS !== 0 && s !== prevS && prevX !== null) {
        const t = bisect((x) => dsign(x) > 0, prevX, xs[i]);
        const near = poles.some((p2) => Math.abs(p2 - t) < 1e-3);
        if (!near && !crit.some((c) => Math.abs(c.x - t) < 1e-4)) {
          const left = d(t - 1e-4 * Math.max(1, Math.abs(t))), right = d(t + 1e-4 * Math.max(1, Math.abs(t)));
          crit.push({ x: snap(t), undefinedDerivative: Math.abs(left) > 0.01 && Math.abs(right) > 0.01 });
        }
      }
      if (s !== 0) {
        prevS = s;
        prevX = xs[i];
      }
    }
    const lone = [];
    for (const e3 of edges) {
      const mate = lone.findIndex((o) => Math.abs(o.x - e3.x) < 1e-5 && o.side !== e3.side);
      if (mate >= 0) {
        poles.push(lone[mate].x);
        lone.splice(mate, 1);
      } else lone.push(e3);
    }
    const uniquePoles = [...new Set(poles.map((p2) => Math.round(p2 * 1e6) / 1e6))].sort((a, b) => a - b);
    return { f, d, lo, hi, edges: lone, poles: uniquePoles, crit: crit.filter((c) => !uniquePoles.some((p2) => Math.abs(p2 - c.x) < 1e-4)).sort((a, b) => a.x - b.x), ys, xs };
  }
  function limitAtInfinity(f, sign) {
    const a = f(sign * 1e6), b = f(sign * 1e8);
    if (!finite(a) || !finite(b)) return NaN;
    if (Math.abs(a - b) < 1e-3 * Math.max(1, Math.abs(a)) && Math.abs(b) < 1e5) return snap(Math.round(b * 1e6) / 1e6);
    return Math.abs(b) > Math.abs(a) ? sgn(b) * Infinity : Math.abs(b) > 1e5 ? sgn(b) * Infinity : snap(b);
  }
  function oneSided(f, x, side) {
    const e3 = 1e-7 * Math.max(1, Math.abs(x));
    const v = f(x + side * e3), w = f(x + side * e3 * 0.1);
    if (!finite(v)) return NaN;
    if (Math.abs(w) > Math.abs(v) * 5 && Math.abs(w) > 1e5) return sgn(w) * Infinity;
    return Math.abs(v) > 1e5 ? sgn(v) * Infinity : snap(Math.round(v * 1e6) / 1e6);
  }
  var finite, sgn;
  var init_analysis = __esm({
    "src/figures/analysis.js"() {
      init_svgkit();
      finite = (v) => Number.isFinite(v);
      sgn = (v) => v > 0 ? 1 : v < 0 ? -1 : 0;
    }
  });

  // src/figures/scene.js
  function labelSvg(p2) {
    const size = p2.size || 16;
    const b = labelBox(p2.latex, size);
    const x = p2.anchor === "l" ? p2.x : p2.anchor === "r" ? p2.x - b.w : p2.x - b.w / 2;
    const y = p2.valign === "b" ? p2.y - b.h : p2.valign === "t" ? p2.y : p2.y - b.h / 2;
    const inner = b.svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
    const halo = p2.halo ? `<rect x="${n2(x - 2)}" y="${n2(y - 1)}" width="${n2(b.w + 4)}" height="${n2(b.h + 2)}" rx="2" fill="#fff" fill-opacity="0.92"/>` : "";
    return `${halo}<g transform="translate(${n2(x)} ${n2(y)})" fill="#000">${inner}</g>`;
  }
  function sceneToSvg(scene, { bg = "#fff" } = {}) {
    let body = "";
    for (const p2 of scene.items) {
      const sw4 = (p2.t === "line" ? p2.w : p2.sw) || 1.4, dash = p2.dash ? ` stroke-dasharray="${p2.dash}"` : "";
      if (p2.t === "line") {
        body += `<line x1="${n2(p2.x1)}" y1="${n2(p2.y1)}" x2="${n2(p2.x2)}" y2="${n2(p2.y2)}" stroke="${p2.color || "#000"}" stroke-width="${sw4}" stroke-linecap="round"${dash}/>`;
        if (p2.arrow) {
          const a = Math.atan2(p2.y2 - p2.y1, p2.x2 - p2.x1), s = 8;
          body += `<path d="M${n2(p2.x2)} ${n2(p2.y2)} L${n2(p2.x2 - s * Math.cos(a - 0.4))} ${n2(p2.y2 - s * Math.sin(a - 0.4))} L${n2(p2.x2 - s * Math.cos(a + 0.4))} ${n2(p2.y2 - s * Math.sin(a + 0.4))}Z" fill="${p2.color || "#000"}"/>`;
        }
      } else if (p2.t === "rect") body += `<rect x="${n2(p2.x)}" y="${n2(p2.y)}" width="${n2(p2.w)}" height="${n2(p2.h)}" fill="${p2.fill || "none"}" stroke="${p2.color || "#000"}" stroke-width="${sw4}"/>`;
      else if (p2.t === "poly") body += `<path d="M${p2.pts.map((q) => `${n2(q[0])} ${n2(q[1])}`).join("L")}${p2.closed ? "Z" : ""}" fill="${p2.fill || "none"}" stroke="${p2.color || "#000"}" stroke-width="${sw4}" stroke-linejoin="round" stroke-linecap="round"${dash}${p2.opacity ? ` fill-opacity="${p2.opacity}"` : ""}/>`;
      else if (p2.t === "ellipse") body += `<ellipse cx="${n2(p2.cx)}" cy="${n2(p2.cy)}" rx="${n2(p2.rx)}" ry="${n2(p2.ry)}" fill="${p2.fill || "none"}" stroke="${p2.color || "#000"}" stroke-width="${sw4}"${dash}/>`;
      else if (p2.t === "dot") body += `<circle cx="${n2(p2.x)}" cy="${n2(p2.y)}" r="${p2.r || 2.6}" fill="${p2.color || "#000"}"/>`;
      else if (p2.t === "label") body += labelSvg(p2);
      else if (p2.t === "text") body += `<text x="${n2(p2.x)}" y="${n2(p2.y)}" font-size="${p2.size || 15}" text-anchor="${p2.anchor === "l" ? "start" : p2.anchor === "r" ? "end" : "middle"}" font-family="${FONT2}"${p2.italic ? ' font-style="italic"' : ""}>${esc4(p2.s)}</text>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${n2(scene.width)}" height="${n2(scene.height)}" viewBox="0 0 ${n2(scene.width)} ${n2(scene.height)}"><rect width="100%" height="100%" fill="${bg}"/>${body}</svg>`;
  }
  function xfrm(x, y, w, h, extra = "") {
    return `<a:xfrm${extra}><a:off x="${e2(x)}" y="${e2(y)}"/><a:ext cx="${Math.max(0, e2(w))}" cy="${Math.max(0, e2(h))}"/></a:xfrm>`;
  }
  function sizeRuns(omml, halfPts) {
    return omml.replace(/<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"\/><\/w:rPr>/g, `<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/><w:sz w:val="${halfPts}"/><w:szCs w:val="${halfPts}"/></w:rPr>`);
  }
  function itemXml(p2) {
    const color = p2.color;
    if (p2.t === "line") {
      const x = Math.min(p2.x1, p2.x2), y = Math.min(p2.y1, p2.y2), w = Math.abs(p2.x2 - p2.x1), h = Math.abs(p2.y2 - p2.y1);
      const flipH = p2.x2 < p2.x1, flipV = p2.y2 < p2.y1;
      return `<wps:wsp><wps:cNvPr id="${++shapeId}" name="\u0110o\u1EA1n th\u1EB3ng"/><wps:cNvCnPr/><wps:spPr>${xfrm(x, y, w, h, `${flipH ? ' flipH="1"' : ""}${flipV ? ' flipV="1"' : ""}`)}<a:prstGeom prst="line"><a:avLst/></a:prstGeom>${ln(p2.w, color, p2.dash, p2.arrow)}</wps:spPr><wps:bodyPr/></wps:wsp>`;
    }
    if (p2.t === "rect") return shape("H\xECnh ch\u1EEF nh\u1EADt", `${xfrm(p2.x, p2.y, p2.w, p2.h)}<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>${p2.fill ? `<a:solidFill><a:srgbClr val="${clr(p2.fill)}"/></a:solidFill>` : "<a:noFill/>"}${ln(p2.sw, color, p2.dash)}`);
    if (p2.t === "ellipse") return shape("Elip", `${xfrm(p2.cx - p2.rx, p2.cy - p2.ry, 2 * p2.rx, 2 * p2.ry)}<a:prstGeom prst="ellipse"><a:avLst/></a:prstGeom>${p2.fill ? `<a:solidFill><a:srgbClr val="${clr(p2.fill)}"/></a:solidFill>` : "<a:noFill/>"}${ln(p2.sw, color, p2.dash)}`);
    if (p2.t === "dot") return shape("\u0110i\u1EC3m", `${xfrm(p2.x - (p2.r || 2.6), p2.y - (p2.r || 2.6), 2 * (p2.r || 2.6), 2 * (p2.r || 2.6))}<a:prstGeom prst="ellipse"><a:avLst/></a:prstGeom><a:solidFill><a:srgbClr val="${clr(color)}"/></a:solidFill><a:ln><a:noFill/></a:ln>`);
    if (p2.t === "poly") {
      const xs = p2.pts.map((q) => q[0]), ys = p2.pts.map((q) => q[1]);
      const x0 = Math.min(...xs), y0 = Math.min(...ys), w = Math.max(...xs) - x0, h = Math.max(...ys) - y0;
      const pt = (q) => `<a:pt x="${e2(q[0] - x0)}" y="${e2(q[1] - y0)}"/>`;
      const geom = `<a:custGeom><a:avLst/><a:gdLst/><a:ahLst/><a:cxnLst/><a:rect l="0" t="0" r="r" b="b"/><a:pathLst><a:path w="${Math.max(1, e2(w))}" h="${Math.max(1, e2(h))}"${p2.closed ? "" : ' fill="none"'}><a:moveTo>${pt(p2.pts[0])}</a:moveTo>${p2.pts.slice(1).map((q) => `<a:lnTo>${pt(q)}</a:lnTo>`).join("")}${p2.closed ? "<a:close/>" : ""}</a:path></a:pathLst></a:custGeom>`;
      return shape(p2.closed ? "\u0110a gi\xE1c" : "\u0110\u01B0\u1EDDng cong", `${xfrm(x0, y0, w, h)}${geom}${p2.fill ? `<a:solidFill><a:srgbClr val="${clr(p2.fill)}"/></a:solidFill>` : "<a:noFill/>"}${ln(p2.sw, color, p2.dash)}`);
    }
    if (p2.t === "label" || p2.t === "text") {
      const size = p2.size || 16, latex = p2.t === "label" ? p2.latex : p2.italic ? p2.s : `\\text{${p2.s}}`;
      const b = labelBox(latex, size);
      const w = b.w + 10, h = b.h + 4;
      const x = p2.anchor === "l" ? p2.x - 5 : p2.anchor === "r" ? p2.x - w + 5 : p2.x - w / 2;
      const y = p2.valign === "b" ? p2.y - h : p2.valign === "t" ? p2.y : p2.y - h / 2;
      const half = Math.round(size * 0.75 * 2);
      const omml = sizeRuns(latexToOmml(latex), half);
      const jc = p2.anchor === "l" ? "left" : p2.anchor === "r" ? "right" : "center";
      return `<wps:wsp><wps:cNvPr id="${++shapeId}" name="Nh\xE3n"/><wps:cNvSpPr txBox="1"/><wps:spPr>${xfrm(x, y, w, h)}<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>${p2.halo ? '<a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill>' : "<a:noFill/>"}<a:ln><a:noFill/></a:ln></wps:spPr><wps:txbx><w:txbxContent><w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/><w:jc w:val="${jc}"/></w:pPr>${omml}</w:p></w:txbxContent></wps:txbx><wps:bodyPr lIns="0" tIns="0" rIns="0" bIns="0" rtlCol="0" anchor="ctr"><a:noAutofit/></wps:bodyPr></wps:wsp>`;
    }
    return "";
  }
  function sceneToDrawingXml(scene, { name = "H\xECnh v\u1EBD", alt = "", float = false } = {}) {
    shapeId = 10;
    const W = e2(scene.width), H = e2(scene.height);
    const body = scene.items.map(itemXml).join("");
    const id = Math.floor(Math.random() * 9e4) + 1e3;
    const graphic = `<a:graphic><a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"><wpg:wgp><wpg:cNvGrpSpPr/><wpg:grpSpPr>${`<a:xfrm><a:off x="0" y="0"/><a:ext cx="${W}" cy="${H}"/><a:chOff x="0" y="0"/><a:chExt cx="${W}" cy="${H}"/></a:xfrm>`}</wpg:grpSpPr>${body}</wpg:wgp></a:graphicData></a:graphic>`;
    const docPr = `<wp:docPr id="${id}" name="${esc4(name)} ${id}" descr="${esc4(alt)}"/><wp:cNvGraphicFramePr/>`;
    if (float) return `<w:drawing><wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="251658240" behindDoc="0" locked="0" layoutInCell="1" allowOverlap="1"><wp:simplePos x="0" y="0"/><wp:positionH relativeFrom="column"><wp:align>center</wp:align></wp:positionH><wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV><wp:extent cx="${W}" cy="${H}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:wrapTopAndBottom/>${docPr}${graphic}</wp:anchor></w:drawing>`;
    return `<w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${W}" cy="${H}"/><wp:effectExtent l="0" t="0" r="0" b="0"/>${docPr}${graphic}</wp:inline></w:drawing>`;
  }
  function sceneToPackage(scene, opts = {}) {
    const drawing = sceneToDrawingXml(scene, opts);
    return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document ${NS2}><w:body><w:p><w:pPr><w:jc w:val="${opts.center === false ? "left" : "center"}"/></w:pPr><w:r>${drawing}</w:r></w:p></w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
  }
  var labelBox, EMU, e2, clr, ln, shapeId, shape, NS2;
  var init_scene = __esm({
    "src/figures/scene.js"() {
      init_mathrender();
      init_latex2omml();
      init_svgkit();
      labelBox = (latex, size = 16) => {
        const r = renderLatex(latex, { fontSize: size, pad: 0 });
        return { w: r.width, h: r.height, base: r.baseline, svg: r.svg };
      };
      EMU = 9525;
      e2 = (v) => Math.round(v * EMU);
      clr = (c) => (c || "#000000").replace("#", "").padEnd(6, "0").toUpperCase().slice(0, 6);
      ln = (w, color, dash, arrow) => `<a:ln w="${Math.round((w || 1.4) * EMU)}" cap="rnd"><a:solidFill><a:srgbClr val="${clr(color)}"/></a:solidFill>${dash ? '<a:prstDash val="dash"/>' : ""}<a:round/>${arrow ? '<a:tailEnd type="triangle" w="med" len="med"/>' : ""}</a:ln>`;
      shapeId = 1;
      shape = (name, spPr, extra = "") => `<wps:wsp><wps:cNvPr id="${++shapeId}" name="${esc4(name)}"/><wps:cNvSpPr/><wps:spPr>${spPr}</wps:spPr><wps:bodyPr/>${extra}</wps:wsp>`;
      NS2 = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" mc:Ignorable="wp14"';
    }
  });

  // src/figures/bbt.js
  function variationTable(src, { lo, hi, width = 560, label = "y", domain = "", fontPt: fontPt2 = 12 } = {}) {
    var _a8, _b;
    const f = compile(src);
    const info = analyse(f, { lo: lo != null ? lo : -60, hi: hi != null ? hi : 60 });
    const pts = [];
    const leftEdge = info.edges.find((e3) => e3.side === "left-start" && e3.x <= (lo != null ? lo : -60) + 1e-6 + 0);
    const firstFinite = info.xs.findIndex((x, i) => Number.isFinite(info.ys[i]));
    const startsFinite = Number.isFinite(info.ys[0]), endsFinite = Number.isFinite(info.ys[info.ys.length - 1]);
    const first = startsFinite ? { x: -Infinity, kind: "inf" } : { x: (_b = (_a8 = info.edges.find((e3) => e3.side === "left-start")) == null ? void 0 : _a8.x) != null ? _b : info.xs[firstFinite], kind: "edge" };
    const lastEdge = [...info.edges].reverse().find((e3) => e3.side === "right-end");
    const last = endsFinite ? { x: Infinity, kind: "inf" } : { x: lastEdge ? lastEdge.x : info.xs[info.xs.length - 1], kind: "edge" };
    pts.push(first);
    for (const c of info.crit) pts.push({ x: c.x, kind: "crit", undef: c.undefinedDerivative });
    for (const p2 of info.poles) pts.push({ x: p2, kind: "pole" });
    const loneEdges = [];
    for (const e3 of info.edges) {
      const mate = loneEdges.find((o) => Math.abs(o.x - e3.x) < 1e-5 && o.side !== e3.side);
      if (mate) {
        mate.kind = "pole";
        continue;
      }
      loneEdges.push(__spreadProps(__spreadValues({}, e3), { kind: "edge" }));
    }
    for (const e3 of loneEdges) if (e3.x > (first.x === -Infinity ? -1e9 : first.x) + 1e-9 && e3.x < (last.x === Infinity ? 1e9 : last.x) - 1e-9 && !pts.some((q) => Math.abs(q.x - e3.x) < 1e-6)) pts.push({ x: e3.x, kind: e3.kind });
    pts.push(last);
    pts.sort((a, b) => a.x - b.x);
    const uniq = pts.filter((p2, i) => i === 0 || Math.abs(p2.x - pts[i - 1].x) > 1e-6 || p2.x === Infinity);
    const dsgn = (a, b) => {
      const A = Number.isFinite(a) ? a : Number.isFinite(b) ? b - 20 : -20, B = Number.isFinite(b) ? b : A + 20;
      const mids = [0.5, 0.3, 0.7, 0.2, 0.8].map((t) => A + (B - A) * t);
      for (const m of mids) {
        const v = info.d(m);
        if (Number.isFinite(v) && Math.abs(v) > 1e-9) return v > 0 ? 1 : -1;
      }
      return 0;
    };
    const gaps = (a, b) => {
      const m = (Number.isFinite(a) ? a : b - 2) / 2 + (Number.isFinite(b) ? b : a + 2) / 2;
      return !Number.isFinite(f(Number.isFinite(a) && Number.isFinite(b) ? (a + b) / 2 : m));
    };
    const segs = [];
    for (let i = 0; i < uniq.length - 1; i++) segs.push({ gap: gaps(uniq[i].x, uniq[i + 1].x), sign: dsgn(uniq[i].x, uniq[i + 1].x) });
    const valueAt = (p2, side) => {
      if (p2.kind === "inf") return limitAtInfinity(f, p2.x > 0 ? 1 : -1);
      if (p2.kind === "pole") return oneSided(f, p2.x, side);
      const v = f(p2.x);
      return Number.isFinite(v) ? snap(Math.round(v * 1e9) / 1e9) : oneSided(f, p2.x, side || (p2 === uniq[0] ? 1 : -1));
    };
    const model = {
      pts: uniq.map((p2) => ({ xl: p2.kind === "inf" ? p2.x > 0 ? "+\\infty" : "-\\infty" : numLatex(p2.x), kind: p2.kind, undef: p2.undef })),
      signs: segs.map((sg) => sg.gap ? 0 : sg.sign),
      vals: uniq.map((p2, i) => p2.kind === "pole" ? { l: numLatex(valueAt(p2, -1)), r: numLatex(valueAt(p2, 1)) } : { v: numLatex(valueAt(p2, i === 0 ? 1 : -1)) })
    };
    const out = layoutVariation(model, { width, label, domain, fontPt: fontPt2 });
    return __spreadProps(__spreadValues({}, out), { data: { points: uniq.map((p2) => ({ x: p2.x, kind: p2.kind })), signs: segs.map((sg) => sg.sign), poles: info.poles, crit: info.crit } });
  }
  function layoutVariation(model, { width = 560, label = "y", domain = "", fontPt: fontPt2 = 12 } = {}) {
    const { pts: uniq, signs } = model;
    const segs = signs.map((sign) => ({ gap: sign === 0, sign }));
    const fs = fontPt2 / 0.75, k = fs / 16;
    const W = width, labelW = 70 * k, rowH = [36 * k, 36 * k, 104 * k], top = 4;
    const H = top + rowH[0] + rowH[1] + rowH[2] + top;
    const n = uniq.length, colX = (i) => labelW + 40 * k + (W - labelW - 80 * k) * (n === 1 ? 0 : i / (n - 1));
    const L = (latex, x, y, anchor, extra = {}) => __spreadValues(__spreadValues({ t: "label", latex, x, y, size: fs }, anchor ? { anchor } : {}), extra);
    const items = [];
    const bx = 3, by = top, bw = W - 6, bh = H - 2 * top;
    items.push({ t: "rect", x: bx, y: by, w: bw, h: bh, sw: 1.5 });
    items.push({ t: "line", x1: bx, y1: by + rowH[0], x2: bx + bw, y2: by + rowH[0] }, { t: "line", x1: bx, y1: by + rowH[0] + rowH[1], x2: bx + bw, y2: by + rowH[0] + rowH[1] });
    items.push({ t: "line", x1: bx + labelW, y1: by, x2: bx + labelW, y2: by + bh });
    const rowMid = [by + rowH[0] / 2, by + rowH[0] + rowH[1] / 2, by + rowH[0] + rowH[1] + rowH[2] / 2];
    items.push(L("x", bx + labelW / 2, rowMid[0]), L(primeLabel(label), bx + labelW / 2, rowMid[1]), L(label, bx + labelW / 2, rowMid[2]));
    const bh3 = labelBox("0", fs).h;
    const yTop = by + rowH[0] + rowH[1] + 0.34 * rowH[2] * 0.7 + bh3 / 2 - 4, yBot = by + H - top - (yTop - (by + rowH[0] + rowH[1]));
    const rowY2 = by + rowH[0] + rowH[1];
    const spanOf = (i, text, side) => {
      const w = labelBox(text, fs).w, x = colX(i), p2 = uniq[i];
      if (p2.kind === "pole") return side < 0 ? [x - 9 - w, x - 9] : [x + 9, x + 9 + w];
      if (i === 0) return [x - 10, x - 10 + w];
      if (i === n - 1) return [x + 10 - w, x + 10];
      return [x - w / 2, x + w / 2];
    };
    uniq.forEach((p2, i) => {
      const x = colX(i);
      items.push(L(p2.xl, i === 0 ? x - 6 : i === n - 1 ? x + 6 : x, rowMid[0], i === 0 ? "l" : i === n - 1 ? "r" : "c"));
      if (p2.kind === "crit") {
        if (p2.undef) items.push({ t: "line", x1: x - 2, y1: by + rowH[0], x2: x - 2, y2: rowY2 }, { t: "line", x1: x + 2, y1: by + rowH[0], x2: x + 2, y2: rowY2 });
        else if (p2.zero !== false) items.push(L("0", x, rowMid[1], "c"));
      }
      if (p2.kind === "pole") items.push({ t: "line", x1: x - 2, y1: by + rowH[0], x2: x - 2, y2: by + bh }, { t: "line", x1: x + 2, y1: by + rowH[0], x2: x + 2, y2: by + bh });
      if (p2.kind === "edge") items.push({ t: "line", x1: x, y1: by + rowH[0], x2: x, y2: by + bh });
    });
    segs.forEach((sg, i) => {
      if (!sg.gap) return;
      const xa = colX(i) + 3, xb = colX(i + 1) - 3, ya = by + rowH[0] + 1, yb = by + bh - 1;
      for (let c = xa - yb; c <= xb - ya; c += 5 * k + 1) {
        const x0 = Math.max(xa, ya + c), x1 = Math.min(xb, yb + c);
        if (x1 - x0 > 0.5) items.push({ t: "line", x1: x0, y1: x0 - c, x2: x1, y2: x1 - c, w: 0.7 });
      }
    });
    segs.forEach((sg, i) => {
      if (!sg.gap && sg.sign) items.push(L(sg.sign > 0 ? "+" : "-", (colX(i) + colX(i + 1)) / 2, rowMid[1]));
    });
    const pos = segs.map((sg) => sg.gap ? null : sg.sign > 0 ? [yBot, yTop] : [yTop, yBot]);
    const lab = (i) => model.vals[i];
    const out = [];
    uniq.forEach((p2, i) => {
      var _a8, _b, _c, _d;
      const x = colX(i), v = lab(i);
      const inY = i > 0 && pos[i - 1] ? pos[i - 1][1] : null, outY = i < segs.length && pos[i] ? pos[i][0] : null;
      const tIn = (_b = (_a8 = v.v) != null ? _a8 : v.l) != null ? _b : v.r, tOut = (_d = (_c = v.v) != null ? _c : v.r) != null ? _d : v.l;
      if (p2.kind === "pole") {
        if (inY !== null && v.l) {
          items.push(L(v.l, x - 9, inY, "r"));
          out[i] = __spreadProps(__spreadValues({}, out[i]), { in: spanOf(i, v.l, -1) });
        }
        if (outY !== null && v.r) {
          items.push(L(v.r, x + 9, outY, "l"));
          out[i] = __spreadProps(__spreadValues({}, out[i]), { out: spanOf(i, v.r, 1) });
        }
      } else {
        const y = inY != null ? inY : outY;
        if (y === null) return;
        items.push(L(tIn, i === 0 ? x - 10 : i === n - 1 ? x + 10 : x, y, i === 0 ? "l" : i === n - 1 ? "r" : "c"));
        out[i] = { in: spanOf(i, tIn, -1), out: spanOf(i, tIn, 1) };
      }
    });
    const gapX = 7 * k;
    segs.forEach((sg, i) => {
      var _a8, _b;
      if (!pos[i] || !((_a8 = out[i]) == null ? void 0 : _a8.out) || !((_b = out[i + 1]) == null ? void 0 : _b.in)) return;
      const x1 = out[i].out[1] + gapX, x2 = out[i + 1].in[0] - gapX;
      const y1 = pos[i][0], y2 = pos[i][1];
      if (x2 - x1 > 10) items.push({ t: "line", x1, y1, x2, y2, w: 1.1, arrow: true });
    });
    if (domain) items.push({ t: "text", s: domain, x: W / 2, y: H + 14, size: fs * 0.85, anchor: "c" });
    const scene = { width: W, height: H + (domain ? 20 : 0), items };
    return { scene, svg: sceneToSvg(scene), width: scene.width, height: scene.height };
  }
  function manualVariationTable({ x = "", dy = "", y = "", label = "f(x)", domain = "", width = 560, fontPt: fontPt2 = 12 } = {}) {
    const tok = (s) => String(s).trim().split(/\s+/).filter(Boolean);
    const xs = tok(x), ds = tok(dy), ys = tok(y), n = xs.length;
    if (n < 2) throw new Error("D\xF2ng x c\u1EA7n \xEDt nh\u1EA5t 2 gi\xE1 tr\u1ECB (vd. -inf 1 +inf).");
    const num3 = (t) => {
      const m = INF.exec(t);
      return m ? `${m[1] === "-" || m[1] === "\u2212" ? "-" : "+"}\\infty` : t.replace(/^\+(?=\d)/, "");
    };
    let signs, marks = new Array(n).fill("");
    if (ds.length === 2 * n - 3) {
      signs = ds.filter((_, i) => i % 2 === 0);
      ds.forEach((t, i) => {
        if (i % 2) marks[(i - 1) / 2 + 1] = t;
      });
    } else if (ds.length === n - 1) signs = ds;
    else throw new Error(`D\xF2ng y' c\u1EA7n ${n - 1} d\u1EA5u (+/\u2212) ho\u1EB7c ${2 * n - 3} k\xFD hi\u1EC7u xen k\u1EBD d\u1EA5u v\xE0 0 / || (\u0111ang c\xF3 ${ds.length}).`);
    if (signs.some((t) => !(t in SIGN))) throw new Error("D\xF2ng y': d\u1EA5u m\u1ED7i kho\u1EA3ng ch\u1EC9 l\xE0 +, - ho\u1EB7c // (h\xE0m kh\xF4ng x\xE1c \u0111\u1ECBnh).");
    if (ys.length !== n) throw new Error(`D\xF2ng y c\u1EA7n \u0111\xFAng ${n} gi\xE1 tr\u1ECB, \u1EE9ng v\u1EDBi t\u1EEBng c\u1ED9t x (\u0111ang c\xF3 ${ys.length}). \u0110i\u1EC3m gi\xE1n \u0111o\u1EA1n vi\u1EBFt d\u1EA1ng tr\xE1i|ph\u1EA3i, vd. -inf|+inf.`);
    const pts = xs.map((t, i) => {
      const isInf = INF.test(t), pole = marks[i] === "||" || ys[i].includes("|");
      return { xl: num3(t), kind: isInf ? "inf" : pole ? "pole" : "crit", undef: marks[i] === "||" && !ys[i].includes("|") };
    });
    const vals = ys.map((t, i) => {
      if (t.includes("|")) {
        const [l, r] = t.split("|");
        return { l: l ? num3(l) : "", r: r ? num3(r) : "" };
      }
      return pts[i].kind === "pole" ? { l: num3(t), r: num3(t) } : { v: num3(t) };
    });
    pts.forEach((p2, i) => {
      if (marks[i] === "0" && p2.kind !== "pole" && p2.kind !== "inf") p2.kind = "crit";
    });
    pts.forEach((p2, i) => {
      p2.zero = marks[i] === "0";
    });
    const out = layoutVariation({ pts, signs: signs.map((t) => SIGN[t]), vals }, { width, label, domain, fontPt: fontPt2 });
    return out;
  }
  var primeLabel, INF, SIGN;
  var init_bbt = __esm({
    "src/figures/bbt.js"() {
      init_expr();
      init_analysis();
      init_svgkit();
      init_scene();
      primeLabel = (l) => /^[A-Za-z]\(x\)$/.test(l) ? `${l[0]}'(x)` : `${l}'`;
      INF = /^([+\-−]?)(inf|infty|infinity|∞|\\infty)$/i;
      SIGN = { "+": 1, "-": -1, "\u2212": -1, "\u2197": 1, "\u2198": -1, "//": 0, x: 0, X: 0, "#": 0 };
    }
  });

  // src/figures/plot.js
  function plotFunctions(exprs, opts = {}) {
    const fs = exprs.map((e3) => ({ src: e3, f: compile(e3) }));
    const W = opts.width || 420, H = opts.height || 340, padL = 34, padR = 22, padT = 16, padB = 26;
    let { xmin, xmax, ymin, ymax } = opts;
    if (xmin === void 0 || xmax === void 0) {
      xmin = -5;
      xmax = 5;
    }
    if (ymin === void 0 || ymax === void 0) {
      const vals = [];
      for (const { f: f2 } of fs) for (let i = 0; i <= 400; i++) {
        const v = f2(xmin + (xmax - xmin) * i / 400);
        if (Number.isFinite(v)) vals.push(v);
      }
      vals.sort((a, b) => a - b);
      if (!vals.length) {
        ymin = -5;
        ymax = 5;
      } else {
        const lo = vals[Math.floor(vals.length * 0.03)], hi = vals[Math.ceil(vals.length * 0.97) - 1];
        const pad = Math.max(0.5, (hi - lo) * 0.12);
        ymin = Math.min(lo - pad, -0.5);
        ymax = Math.max(hi + pad, 0.5);
      }
    }
    const px = (x) => padL + (x - xmin) / (xmax - xmin) * (W - padL - padR);
    const py = (y) => H - padB - (y - ymin) / (ymax - ymin) * (H - padT - padB);
    const items = [];
    const gx = niceStep(xmax - xmin, 9), gy = niceStep(ymax - ymin, 7);
    if (opts.grid !== false) {
      for (let x = Math.ceil(xmin / gx) * gx; x <= xmax + 1e-9; x += gx) items.push({ t: "line", x1: px(x), y1: py(ymin), x2: px(x), y2: py(ymax), w: 0.5, color: "#d5d5d5" });
      for (let y = Math.ceil(ymin / gy) * gy; y <= ymax + 1e-9; y += gy) items.push({ t: "line", x1: px(xmin), y1: py(y), x2: px(xmax), y2: py(y), w: 0.5, color: "#d5d5d5" });
    }
    const ax = xmin <= 0 && xmax >= 0 ? px(0) : px(xmin), ay = ymin <= 0 && ymax >= 0 ? py(0) : py(ymin);
    items.push({ t: "line", x1: px(xmin) - 4, y1: ay, x2: px(xmax) + 8, y2: ay, w: 1.3, arrow: true }, { t: "line", x1: ax, y1: py(ymin) + 4, x2: ax, y2: py(ymax) - 8, w: 1.3, arrow: true });
    items.push({ t: "label", latex: "x", x: px(xmax) + 6, y: ay + 14, size: 15 }, { t: "label", latex: "y", x: ax + 12, y: py(ymax) - 6, size: 15 }, { t: "label", latex: "O", x: ax - 9, y: ay + 12, size: 14 });
    for (let x = Math.ceil(xmin / gx) * gx; x <= xmax + 1e-9; x += gx) {
      const v = snap(Math.round(x * 1e6) / 1e6);
      if (Math.abs(v) < 1e-9) continue;
      items.push({ t: "line", x1: px(v), y1: ay - 3, x2: px(v), y2: ay + 3, w: 1 }, { t: "label", latex: numLatex(v), x: px(v), y: ay + 15, size: 12 });
    }
    for (let y = Math.ceil(ymin / gy) * gy; y <= ymax + 1e-9; y += gy) {
      const v = snap(Math.round(y * 1e6) / 1e6);
      if (Math.abs(v) < 1e-9) continue;
      items.push({ t: "line", x1: ax - 3, y1: py(v), x2: ax + 3, y2: py(v), w: 1 }, { t: "label", latex: numLatex(v), x: ax - 7, y: py(v), size: 12, anchor: "r" });
    }
    fs.forEach(({ f: f2, src }, k) => {
      let seg = [];
      const flush = () => {
        if (seg.length > 1) items.push({ t: "poly", pts: seg, sw: 1.8, color: COLORS[k % COLORS.length] });
        seg = [];
      };
      const N = 2400, inside = (y) => Number.isFinite(y) && y >= ymin && y <= ymax;
      let px0 = null, py0 = null;
      for (let i = 0; i <= N; i++) {
        const x = xmin + (xmax - xmin) * i / N, y = f2(x);
        const jump = Number.isFinite(y) && Number.isFinite(py0) && Math.abs(y - py0) > (ymax - ymin) * 0.9 && Math.sign(y) !== Math.sign(py0);
        if (!Number.isFinite(y) || jump) {
          if (inside(py0) === false && Number.isFinite(py0)) {
          }
          flush();
          px0 = x;
          py0 = Number.isFinite(y) ? y : NaN;
          if (!Number.isFinite(y)) continue;
        }
        if (inside(y)) {
          if (px0 !== null && Number.isFinite(py0) && !inside(py0) && !jump && !seg.length) {
            const edge = py0 > ymax ? ymax : ymin, t = (edge - py0) / (y - py0);
            seg.push([px(px0 + (x - px0) * t), py(edge)]);
          }
          seg.push([px(x), py(y)]);
        } else if (seg.length && Number.isFinite(y)) {
          const edge = y > ymax ? ymax : ymin, t = (edge - py0) / (y - py0);
          seg.push([px(px0 + (x - px0) * t), py(edge)]);
          flush();
        }
        px0 = x;
        py0 = y;
      }
      flush();
      if (opts.legend && fs.length > 1) items.push({ t: "label", latex: `y=${String(src).replace(/^\s*(?:y|f\s*\(\s*x\s*\))\s*=/, "")}`, x: padL + 8, y: padT + 10 + k * 18, size: 12, anchor: "l" });
    });
    const { f } = fs[0];
    const info = analyse(f, { lo: xmin, hi: xmax, samples: 3e3 });
    if (opts.asymptotes !== false) for (const p2 of info.poles) items.push({ t: "line", x1: px(p2), y1: py(ymin), x2: px(p2), y2: py(ymax), w: 1, dash: "5 4", color: "#777" });
    if (opts.points) {
      for (const c of info.crit) {
        const y = f(c.x);
        if (Number.isFinite(y) && y >= ymin && y <= ymax) items.push({ t: "dot", x: px(c.x), y: py(y), r: 3 }, { t: "line", x1: px(c.x), y1: py(y), x2: px(c.x), y2: ay, w: 0.8, dash: "3 3", color: "#666" }, { t: "label", latex: `(${numLatex(c.x)};${numLatex(snap(y))})`, x: px(c.x) + 6, y: py(y) - 10, size: 12, anchor: "l" });
      }
      const y0 = f(0);
      if (Number.isFinite(y0) && xmin < 0 && xmax > 0 && y0 >= ymin && y0 <= ymax && Math.abs(y0) > 1e-9) items.push({ t: "dot", x: px(0), y: py(y0), r: 3 });
    }
    const scene = { width: W, height: H, items };
    return { scene, svg: sceneToSvg(scene), width: W, height: H, window: { xmin, xmax, ymin, ymax } };
  }
  var COLORS, PRESETS;
  var init_plot = __esm({
    "src/figures/plot.js"() {
      init_expr();
      init_analysis();
      init_svgkit();
      init_scene();
      COLORS = ["#1a3d8f", "#c62828", "#2e7d32", "#6a1b9a"];
      PRESETS = [
        { id: "lin", label: "B\u1EADc nh\u1EA5t  y = ax + b", expr: "2x-1", win: [-4, 4, -5, 5] },
        { id: "quad", label: "B\u1EADc hai  y = ax\xB2 + bx + c", expr: "x^2-2x-3", win: [-3, 5, -5, 4] },
        { id: "cubic", label: "B\u1EADc ba  y = ax\xB3 + bx\xB2 + cx + d", expr: "x^3-3x+1", win: [-3, 3, -3, 5] },
        { id: "quartic", label: "Tr\xF9ng ph\u01B0\u01A1ng  y = ax\u2074 + bx\xB2 + c", expr: "x^4-2x^2-1", win: [-2.5, 2.5, -3, 3] },
        { id: "frac1", label: "Ph\xE2n th\u1EE9c  y = (ax + b)/(cx + d)", expr: "(2x+1)/(x-1)", win: [-4, 6, -4, 6] },
        { id: "frac2", label: "Ph\xE2n th\u1EE9c  y = (ax\xB2 + bx + c)/(dx + e)", expr: "(x^2-x+1)/(x-1)", win: [-4, 6, -6, 8] },
        { id: "sqrt", label: "C\u0103n th\u1EE9c  y = \u221Ax", expr: "sqrt(x)", win: [-1, 9, -1, 4] },
        { id: "abs", label: "Gi\xE1 tr\u1ECB tuy\u1EC7t \u0111\u1ED1i  y = |x|", expr: "abs(x-1)", win: [-3, 5, -1, 5] },
        { id: "exp", label: "M\u0169  y = a\u02E3", expr: "2^x", win: [-4, 4, -1, 8] },
        { id: "log", label: "Logarit  y = log\u2082 x", expr: "log2(x)", win: [-1, 8, -4, 4] },
        { id: "sin", label: "L\u01B0\u1EE3ng gi\xE1c  y = sin x", expr: "sin(x)", win: [-7, 7, -2, 2] },
        { id: "cos", label: "L\u01B0\u1EE3ng gi\xE1c  y = cos x", expr: "cos(x)", win: [-7, 7, -2, 2] },
        { id: "tan", label: "L\u01B0\u1EE3ng gi\xE1c  y = tan x", expr: "tan(x)", win: [-5, 5, -4, 4] }
      ];
    }
  });

  // src/figures/region.js
  function parseInequality(src) {
    const m = REL3.exec(src.replace(/\s+/g, ""));
    if (!m) throw new Error(`Thi\u1EBFu d\u1EA5u so s\xE1nh trong \u201C${src}\u201D`);
    const clean = src.replace(/\s+/g, "");
    const [l, r] = [clean.slice(0, m.index), clean.slice(m.index + m[0].length)];
    const rel = { "<=": "\u2264", "=<": "\u2264", "\u2264": "\u2264", ">=": "\u2265", "=>": "\u2265", "\u2265": "\u2265", "<": "<", ">": ">", "=": "=" }[m[0]];
    const gl = compile(l || "0", ["x", "y"]), gr = compile(r || "0", ["x", "y"]);
    const g = (x, y) => gl(x, y) - gr(x, y);
    const c = g(0, 0), a = g(1, 0) - c, b = g(0, 1) - c;
    for (const [x, y] of [[2, 3], [-1.5, 4], [5, -2]]) if (Math.abs(g(x, y) - (a * x + b * y + c)) > 1e-6) throw new Error(`\u201C${src}\u201D kh\xF4ng ph\u1EA3i b\u1EA5t ph\u01B0\u01A1ng tr\xECnh b\u1EADc nh\u1EA5t hai \u1EA9n`);
    if (Math.abs(a) < 1e-12 && Math.abs(b) < 1e-12) throw new Error(`\u201C${src}\u201D kh\xF4ng ch\u1EE9a x, y`);
    return { a: snap(a), b: snap(b), c: snap(c), rel, src };
  }
  function clip(poly, h) {
    const keep = h.rel === "\u2264" || h.rel === "<" ? -1 : 1, v = ([x, y]) => keep * (h.a * x + h.b * y + h.c);
    const out = [];
    for (let i = 0; i < poly.length; i++) {
      const p2 = poly[i], q = poly[(i + 1) % poly.length], vp = v(p2), vq = v(q);
      if (vp >= -1e-12) out.push(p2);
      if (vp > 1e-12 && vq < -1e-12 || vp < -1e-12 && vq > 1e-12) {
        const t = vp / (vp - vq);
        out.push([p2[0] + (q[0] - p2[0]) * t, p2[1] + (q[1] - p2[1]) * t]);
      }
    }
    return out;
  }
  function regionFigure(lines, opts = {}) {
    var _a8, _b, _c, _d;
    const hs = lines.filter((s) => s.trim()).map(parseInequality);
    if (!hs.length) throw new Error("Nh\u1EADp \xEDt nh\u1EA5t m\u1ED9t b\u1EA5t ph\u01B0\u01A1ng tr\xECnh");
    const pts = [[0, 0]];
    const all = [...hs, { a: 1, b: 0, c: 0 }, { a: 0, b: 1, c: 0 }];
    for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
      const d = all[i].a * all[j].b - all[j].a * all[i].b;
      if (Math.abs(d) > 1e-12) pts.push([(all[i].b * all[j].c - all[j].b * all[i].c) / d, (all[j].a * all[i].c - all[i].a * all[j].c) / d]);
    }
    for (const h of hs) {
      if (Math.abs(h.a) > 1e-12) pts.push([-h.c / h.a, 0]);
      if (Math.abs(h.b) > 1e-12) pts.push([0, -h.c / h.b]);
    }
    const xs = pts.map((p2) => p2[0]), ys = pts.map((p2) => p2[1]);
    let xmin = (_a8 = opts.xmin) != null ? _a8 : Math.min(...xs), xmax = (_b = opts.xmax) != null ? _b : Math.max(...xs), ymin = (_c = opts.ymin) != null ? _c : Math.min(...ys), ymax = (_d = opts.ymax) != null ? _d : Math.max(...ys);
    if (opts.xmin === void 0) {
      const pad = Math.max(1, (xmax - xmin) * 0.25);
      xmin -= pad;
      xmax += pad;
    }
    if (opts.ymin === void 0) {
      const pad = Math.max(1, (ymax - ymin) * 0.25);
      ymin -= pad;
      ymax += pad;
    }
    const W = opts.width || 420, H = opts.height || 340, padL = 34, padR = 22, padT = 16, padB = 26;
    const px = (x) => padL + (x - xmin) / (xmax - xmin) * (W - padL - padR), py = (y) => H - padB - (y - ymin) / (ymax - ymin) * (H - padT - padB);
    let poly = [[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax]];
    for (const h of hs) if (h.rel !== "=") poly = clip(poly, h);
    const items = [];
    const gx = niceStep(xmax - xmin, 9), gy = niceStep(ymax - ymin, 7);
    if (opts.grid !== false) {
      for (let x = Math.ceil(xmin / gx) * gx; x <= xmax + 1e-9; x += gx) items.push({ t: "line", x1: px(x), y1: py(ymin), x2: px(x), y2: py(ymax), w: 0.5, color: "#dcdcdc" });
      for (let y = Math.ceil(ymin / gy) * gy; y <= ymax + 1e-9; y += gy) items.push({ t: "line", x1: px(xmin), y1: py(y), x2: px(xmax), y2: py(y), w: 0.5, color: "#dcdcdc" });
    }
    const mode = opts.mode || "hatch";
    if (poly.length >= 3 && mode !== "hatch") items.push({ t: "poly", pts: poly.map((p2) => [px(p2[0]), py(p2[1])]), closed: true, fill: "#9ec9f5", sw: 0.1, color: "#9ec9f5", opacity: 0.55 });
    if (mode === "hatch") {
      const step = 9, hatchColor = "#8a8a8a";
      const full = [[padL, padT], [W - padR, padT], [W - padR, H - padB], [padL, H - padB]];
      const inner = poly.length >= 3 ? poly.map((p2) => [px(p2[0]), py(p2[1])]) : [];
      for (let c = -H; c < W + H; c += step) {
        const seg = clipLineToRect(c, full);
        if (!seg) continue;
        const inside = inner.length ? clipLineToConvex(seg, inner) : null;
        if (!inside) items.push({ t: "line", x1: seg[0][0], y1: seg[0][1], x2: seg[1][0], y2: seg[1][1], w: 0.6, color: hatchColor });
        else {
          if (dist(seg[0], inside[0]) > 1) items.push({ t: "line", x1: seg[0][0], y1: seg[0][1], x2: inside[0][0], y2: inside[0][1], w: 0.6, color: hatchColor });
          if (dist(inside[1], seg[1]) > 1) items.push({ t: "line", x1: inside[1][0], y1: inside[1][1], x2: seg[1][0], y2: seg[1][1], w: 0.6, color: hatchColor });
        }
      }
    }
    const ax = xmin <= 0 && xmax >= 0 ? px(0) : px(xmin), ay = ymin <= 0 && ymax >= 0 ? py(0) : py(ymin);
    const boxes = [];
    const claim = (latex, x, y, anchor, size) => {
      const b = labelBox(latex, size);
      const left = anchor === "l" ? x : anchor === "r" ? x - b.w : x - b.w / 2;
      boxes.push([left - 2, y - b.h / 2 - 2, left + b.w + 2, y + b.h / 2 + 2]);
    };
    items.push({ t: "line", x1: px(xmin) - 4, y1: ay, x2: px(xmax) + 8, y2: ay, w: 1.3, arrow: true }, { t: "line", x1: ax, y1: py(ymin) + 4, x2: ax, y2: py(ymax) - 8, w: 1.3, arrow: true });
    items.push({ t: "label", latex: "x", x: px(xmax) + 6, y: ay + 14, size: 15 }, { t: "label", latex: "y", x: ax + 12, y: py(ymax) - 6, size: 15 }, { t: "label", latex: "O", x: ax - 9, y: ay + 12, size: 14 });
    if (poly.some((p2) => Math.abs(p2[0]) < 1e-9 && Math.abs(p2[1]) < 1e-9)) items.pop();
    for (let x = Math.ceil(xmin / gx) * gx; x <= xmax + 1e-9; x += gx) {
      const v = snap(Math.round(x * 1e6) / 1e6);
      if (Math.abs(v) < 1e-9) continue;
      items.push({ t: "line", x1: px(v), y1: ay - 3, x2: px(v), y2: ay + 3, w: 1 }, { t: "label", latex: numLatex(v), x: px(v), y: ay + 15, size: 12 });
      claim(numLatex(v), px(v), ay + 15, "c", 12);
    }
    for (let y = Math.ceil(ymin / gy) * gy; y <= ymax + 1e-9; y += gy) {
      const v = snap(Math.round(y * 1e6) / 1e6);
      if (Math.abs(v) < 1e-9) continue;
      items.push({ t: "line", x1: ax - 3, y1: py(v), x2: ax + 3, y2: py(v), w: 1 }, { t: "label", latex: numLatex(v), x: ax - 7, y: py(v), size: 12, anchor: "r" });
      claim(numLatex(v), ax - 7, py(v), "r", 12);
    }
    hs.forEach((h, i) => {
      const ends = [];
      if (Math.abs(h.b) > 1e-12) {
        ends.push([xmin, -(h.a * xmin + h.c) / h.b], [xmax, -(h.a * xmax + h.c) / h.b]);
      } else ends.push([-h.c / h.a, ymin], [-h.c / h.a, ymax]);
      const seg = clipLineToRect(null, [[padL, padT], [W - padR, padT], [W - padR, H - padB], [padL, H - padB]], [[px(ends[0][0]), py(ends[0][1])], [px(ends[1][0]), py(ends[1][1])]]);
      if (!seg) return;
      items.push({ t: "line", x1: seg[0][0], y1: seg[0][1], x2: seg[1][0], y2: seg[1][1], w: 1.8, color: "#1a3d8f", dash: h.rel === "<" || h.rel === ">" ? "6 4" : "" });
      if (opts.labelLines !== false) {
        const lx = Math.min(W - padR - 14, Math.max(padL + 14, seg[1][0] - 4)), ly = Math.min(H - padB - 10, Math.max(padT + 12, seg[1][1] - 12));
        items.push({ t: "label", latex: `(d_{${i + 1}})`, x: lx, y: ly, size: 13, anchor: "r", halo: true });
        claim(`(d_{${i + 1}})`, lx, ly, "r", 13);
      }
    });
    if (poly.length >= 3 && opts.vertices !== false) {
      const names = opts.names || "ABCDEFGH".split("");
      let k = 0;
      const cx = poly.reduce((s2, q) => s2 + q[0], 0) / poly.length, cy = poly.reduce((s2, q) => s2 + q[1], 0) / poly.length;
      const segs = items.filter((it) => it.t === "line" && it.w >= 1.5);
      const hits = (b2) => boxes.some((o) => !(b2[2] < o[0] || b2[0] > o[2] || b2[3] < o[1] || b2[1] > o[3]));
      const nearLine = (b2) => segs.some((l) => {
        for (let t = 0; t <= 1; t += 0.1) {
          const x = l.x1 + (l.x2 - l.x1) * t, y = l.y1 + (l.y2 - l.y1) * t;
          if (x > b2[0] && x < b2[2] && y > b2[1] && y < b2[3]) return true;
        }
        return false;
      });
      const verts = [];
      for (const q of poly) {
        const onLines = hs.filter((h) => Math.abs(h.a * q[0] + h.b * q[1] + h.c) < 1e-6 * Math.max(1, Math.abs(h.c))).length;
        const onWindow = Math.abs(q[0] - xmin) < 1e-9 || Math.abs(q[0] - xmax) < 1e-9 || Math.abs(q[1] - ymin) < 1e-9 || Math.abs(q[1] - ymax) < 1e-9;
        if (onLines < 2 && onWindow || onLines < 1) continue;
        verts.push(q);
      }
      for (const q of verts) {
        const name = names[k++ % names.length], text = `${name}(${numLatex(snap(q[0]))};${numLatex(snap(q[1]))})`, size = 12;
        items.push({ t: "dot", x: px(q[0]), y: py(q[1]), r: 3 });
        const bx = labelBox(text, size);
        const away = [px(q[0]) - px(cx), py(q[1]) - py(cy)];
        const base = Math.atan2(away[1], away[0]);
        let best = null;
        for (const turn of [0, 0.5, -0.5, 1, -1, 1.6, -1.6, 2.4, -2.4, Math.PI]) {
          const ang = base + turn, dist2 = 10 + (Math.abs(turn) > 2 ? 6 : 0);
          const cxp = px(q[0]) + Math.cos(ang) * dist2, cyp = py(q[1]) + Math.sin(ang) * dist2;
          const anchor = Math.cos(ang) > 0.35 ? "l" : Math.cos(ang) < -0.35 ? "r" : "c";
          const left = anchor === "l" ? cxp : anchor === "r" ? cxp - bx.w : cxp - bx.w / 2;
          const top = Math.sin(ang) >= 0 ? cyp : cyp - bx.h;
          const box = [left - 2, top - 2, left + bx.w + 2, top + bx.h + 2];
          const inside = box[0] >= padL - 6 && box[2] <= W - padR + 14 && box[1] >= padT - 8 && box[3] <= H - padB + 14;
          if (inside && !hits(box) && !nearLine(box)) {
            best = { box, x: anchor === "l" ? cxp : anchor === "r" ? cxp : cxp, y: top + bx.h / 2, anchor };
            break;
          }
          if (!best && inside && !hits(box)) best = { box, x: cxp, y: top + bx.h / 2, anchor };
        }
        if (!best) {
          const ang = base, cxp = px(q[0]) + Math.cos(ang) * 12, cyp = py(q[1]) + Math.sin(ang) * 12;
          best = { box: [cxp, cyp, cxp + bx.w, cyp + bx.h], x: cxp, y: cyp, anchor: Math.cos(ang) > 0 ? "l" : "r" };
        }
        boxes.push(best.box);
        items.push({ t: "label", latex: text, x: best.x, y: best.y, size, anchor: best.anchor, halo: true });
      }
    }
    const scene = { width: W, height: H, items };
    return { scene, svg: sceneToSvg(scene), width: W, height: H, polygon: poly, empty: poly.length < 3, constraints: hs };
  }
  function clipLineToRect(c, rect, given) {
    const [x0, y0] = rect[0], [x1, y1] = rect[2];
    let p2, q;
    if (given) {
      p2 = given[0];
      q = given[1];
    } else {
      p2 = [c - y0, y0];
      q = [c - y1, y1];
    }
    let t0 = -1e9, t1 = 1e9;
    const dx = q[0] - p2[0], dy = q[1] - p2[1];
    const upd = (pk, qk) => {
      if (Math.abs(pk) < 1e-12) return qk >= 0;
      const t = qk / pk;
      if (pk < 0) t0 = Math.max(t0, t);
      else t1 = Math.min(t1, t);
      return t0 <= t1;
    };
    if (!(upd(-dx, p2[0] - x0) && upd(dx, x1 - p2[0]) && upd(-dy, p2[1] - y0) && upd(dy, y1 - p2[1]))) return null;
    return [[p2[0] + dx * t0, p2[1] + dy * t0], [p2[0] + dx * t1, p2[1] + dy * t1]];
  }
  function clipLineToConvex(seg, poly) {
    let t0 = 0, t1 = 1;
    const d = [seg[1][0] - seg[0][0], seg[1][1] - seg[0][1]];
    const area = poly.reduce((s, p2, i) => {
      const q = poly[(i + 1) % poly.length];
      return s + (p2[0] * q[1] - q[0] * p2[1]);
    }, 0);
    const orient = area > 0 ? 1 : -1;
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i], b = poly[(i + 1) % poly.length];
      const nx = -(b[1] - a[1]) * orient, ny = (b[0] - a[0]) * orient;
      const num3 = nx * (seg[0][0] - a[0]) + ny * (seg[0][1] - a[1]), den = nx * d[0] + ny * d[1];
      if (Math.abs(den) < 1e-12) {
        if (num3 < 0) return null;
        continue;
      }
      const t = -num3 / den;
      if (den > 0) t0 = Math.max(t0, t);
      else t1 = Math.min(t1, t);
      if (t0 > t1) return null;
    }
    return [[seg[0][0] + d[0] * t0, seg[0][1] + d[1] * t0], [seg[0][0] + d[0] * t1, seg[0][1] + d[1] * t1]];
  }
  var REL3, dist;
  var init_region = __esm({
    "src/figures/region.js"() {
      init_expr();
      init_svgkit();
      init_scene();
      init_analysis();
      REL3 = /(<=|>=|≤|≥|=<|=>|<|>|=)/;
      dist = (p2, q) => Math.hypot(p2[0] - q[0], p2[1] - q[1]);
    }
  });

  // src/figures/geometry.js
  function frame(c, W, H) {
    return { scene: { width: W, height: H, items: c.items }, svg: sceneToSvg({ width: W, height: H, items: c.items }), width: W, height: H };
  }
  function centre(pts) {
    return [pts.reduce((s, p2) => s + p2[0], 0) / pts.length, pts.reduce((s, p2) => s + p2[1], 0) / pts.length];
  }
  function labelAll(c, names, pts, cen, extra = {}) {
    names.forEach((n, i) => {
      if (!n) return;
      c.dot(pts[i]);
      c.label(n, pts[i], sub(pts[i], cen), extra);
    });
  }
  function triangle(o = {}) {
    const [A, B, C] = nm(o.names, ["A", "B", "C"]);
    const W = 420, H = 300, k = o.kind || "scalene";
    let a, b, c;
    if (k === "right") {
      b = P(70, 240);
      c = P(330, 240);
      a = P(70, 50);
    } else if (k === "isosceles") {
      b = P(80, 240);
      c = P(320, 240);
      a = P(200, 50);
    } else if (k === "equilateral") {
      b = P(90, 240);
      c = P(310, 240);
      a = P(200, 240 - 220 * Math.sqrt(3) / 2);
    } else {
      b = P(70, 240);
      c = P(340, 240);
      a = P(150, 50);
    }
    const cv = new Canvas(), cen = centre([a, b, c]);
    cv.poly([a, b, c]);
    const h = foot(a, b, c);
    if (o.altitude && k !== "right") {
      cv.seg(a, h, { dash: "5 4" });
      cv.rightAngle(h, a, c);
      cv.dot(h);
      cv.label(pick([A, B, C], o.heightName || "H", "K"), h, [0, 1]);
    }
    if (o.median) {
      const m = mid(b, c);
      cv.seg(a, m, { dash: "5 4" });
      cv.dot(m);
      cv.label(pick([A, B, C], o.medianName || "M", "N"), m, [0, 1]);
      cv.tick(b, m);
      cv.tick(m, c);
    }
    if (o.bisector) {
      const bc = len(sub(b, a)), cc = len(sub(c, a)), d = lerp(b, c, bc / (bc + cc));
      cv.seg(a, d, { dash: "5 4" });
      cv.dot(d);
      cv.label("D", d, [0, 1]);
      cv.arcAngle(a, b, d, 22);
      cv.arcAngle(a, d, c, 26);
    }
    if (o.centroid) {
      const g = centre([a, b, c]);
      cv.seg(a, mid(b, c), { dash: "5 4" });
      cv.seg(b, mid(a, c), { dash: "5 4" });
      cv.seg(c, mid(a, b), { dash: "5 4" });
      cv.dot(g);
      cv.label("G", g, [0.6, 0.6], { dist: 10 });
    }
    if (k === "right") cv.rightAngle(a, b, c, 12);
    if (k === "isosceles") {
      cv.tick(a, b);
      cv.tick(a, c);
    }
    if (k === "equilateral") {
      cv.tick(a, b);
      cv.tick(b, c);
      cv.tick(a, c);
    }
    if (o.circum) {
      const ax = a[0], ay = a[1], bx = b[0], by = b[1], cx = c[0], cy = c[1];
      const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
      const ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d, uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;
      cv.circle([ux, uy], Math.hypot(ax - ux, ay - uy), { w: 1.2 });
      cv.dot([ux, uy]);
      cv.label("O", [ux, uy], [0.6, 0.6], { dist: 9 });
    }
    if (o.incircle) {
      const la = len(sub(b, c)), lb = len(sub(a, c)), lc = len(sub(a, b)), s = la + lb + lc;
      const i = [(la * a[0] + lb * b[0] + lc * c[0]) / s, (la * a[1] + lb * b[1] + lc * c[1]) / s];
      const r = len(sub(i, foot(i, b, c)));
      cv.circle(i, r, { w: 1.2 });
      cv.dot(i);
      cv.label("I", i, [0.6, 0.6], { dist: 9 });
    }
    labelAll(cv, [A, B, C], [a, b, c], cen);
    return frame(cv, W, H);
  }
  function circleFigure(o = {}) {
    const [Oc, A, B, Cc] = nm(o.names, ["O", "A", "B", "C"]);
    const W = 400, H = 360, c = P(200, 180), r = 140, cv = new Canvas();
    cv.circle(c, r);
    cv.dot(c);
    cv.label(Oc, c, [0.5, 0.7], { dist: 12 });
    const at2 = (deg) => [c[0] + r * Math.cos(deg * Math.PI / 180), c[1] - r * Math.sin(deg * Math.PI / 180)];
    const k = o.kind || "diameter";
    if (k === "diameter") {
      const p2 = at2(180), q = at2(0);
      cv.seg(p2, q);
      cv.dot(p2);
      cv.dot(q);
      cv.label(A, p2, [-1, 0]);
      cv.label(B, q, [1, 0]);
      const t = at2(65);
      cv.seg(p2, t);
      cv.seg(t, q);
      cv.dot(t);
      cv.label(Cc, t, [0.3, -1]);
      cv.rightAngle(t, p2, q, 10);
    } else if (k === "chord") {
      const p2 = at2(200), q = at2(330);
      cv.seg(p2, q);
      cv.seg(c, mid(p2, q));
      cv.dot(p2);
      cv.dot(q);
      cv.label(A, p2, [-1, 0.6]);
      cv.label(B, q, [1, 0.6]);
      const m = mid(p2, q);
      cv.dot(m);
      cv.label("H", m, [0, 1]);
      cv.rightAngle(m, c, p2, 9);
    } else if (k === "tangent") {
      const t = at2(300);
      const nrm = unit(sub(t, c)), d = [-nrm[1], nrm[0]];
      cv.seg(c, t);
      cv.seg(add(t, mul(d, 120)), add(t, mul(d, -120)));
      cv.dot(t);
      cv.label(A, t, nrm, { dist: 12 });
      cv.rightAngle(t, c, add(t, d), 10);
    } else if (k === "inscribed") {
      const p2 = at2(90), q = at2(215), s = at2(-35);
      cv.poly([p2, q, s]);
      [[A, p2, [0, -1]], [B, q, [-1, 0.6]], [Cc, s, [1, 0.6]]].forEach(([n, pt, d]) => {
        cv.dot(pt);
        cv.label(n, pt, d);
      });
    }
    return frame(cv, W, H);
  }
  function quadrilateral(o = {}) {
    const [A, B, C, D] = nm(o.names, ["A", "B", "C", "D"]);
    const W = 420, H = 280, k = o.kind || "rectangle", cv = new Canvas();
    let a, b, c, d;
    if (k === "square") {
      a = P(120, 60);
      b = P(300, 60);
      c = P(300, 240);
      d = P(120, 240);
    } else if (k === "parallelogram") {
      a = P(100, 220);
      b = P(280, 220);
      c = P(340, 70);
      d = P(160, 70);
      [a, b, c, d] = [d, c, b, a];
      a = P(160, 70);
      b = P(340, 70);
      c = P(280, 220);
      d = P(100, 220);
    } else if (k === "rhombus") {
      a = P(210, 40);
      b = P(340, 140);
      c = P(210, 240);
      d = P(80, 140);
    } else if (k === "trapezoid") {
      a = P(140, 70);
      b = P(280, 70);
      c = P(350, 230);
      d = P(70, 230);
    } else if (k === "righttrapezoid") {
      a = P(110, 70);
      b = P(250, 70);
      c = P(340, 230);
      d = P(110, 230);
    } else {
      a = P(90, 70);
      b = P(330, 70);
      c = P(330, 230);
      d = P(90, 230);
    }
    cv.poly([a, b, c, d]);
    const cen = centre([a, b, c, d]);
    if (o.diagonals) {
      cv.seg(a, c, { dash: "5 4" });
      cv.seg(b, d, { dash: "5 4" });
      const m = mid(a, c);
      cv.dot(m);
      cv.label("O", m, [0.4, -0.6], { dist: 9 });
    }
    if (k === "rectangle" || k === "square") [[a, d, b], [b, a, c], [c, b, d], [d, c, a]].forEach(([v, p2, q]) => cv.rightAngle(v, p2, q, 10));
    if (k === "righttrapezoid") {
      cv.rightAngle(a, b, d, 10);
      cv.rightAngle(d, a, c, 10);
    }
    if (k === "rhombus") {
      cv.tick(a, b);
      cv.tick(b, c);
      cv.tick(c, d);
      cv.tick(d, a);
    }
    labelAll(cv, [A, B, C, D], [a, b, c, d], cen);
    return frame(cv, W, H);
  }
  function pyramid(o = {}) {
    const base = o.base || "quad", W = 440, H = 340, cv = new Canvas();
    const perp = o.apex === "A";
    if (base === "tri") {
      const [S2, A2, B2, C2] = nm(o.names, ["S", "A", "B", "C"]);
      const a2 = P(70, 280), b2 = P(290, 280), c2 = P(370, 215), g = centre([a2, b2, c2]), s2 = perp ? P(70, 40) : P(g[0], 40);
      cv.seg(a2, b2);
      cv.seg(b2, c2);
      cv.seg(a2, c2, { hidden: true });
      cv.seg(s2, a2);
      cv.seg(s2, b2);
      cv.seg(s2, c2);
      if (perp) cv.rightAngle(a2, s2, b2, 10);
      if (o.height && !perp) {
        const h = [s2[0], g[1]];
        cv.seg(s2, h, { dash: "5 4" });
        cv.dot(h);
        cv.label("H", h, [0, 1]);
        cv.rightAngle(h, s2, [h[0] + 30, h[1]], 8);
      }
      if (o.midpoints) {
        const used = [S2, A2, B2, C2], mn = pick(used, "M", "K", "E"), nn = pick([...used, mn], "N", "I", "F");
        const m = mid(b2, c2), n = mid(s2, a2);
        cv.seg(n, m, { dash: "5 4" });
        cv.dot(m);
        cv.dot(n);
        cv.label(mn, m, [0.8, 0.6]);
        cv.label(nn, n, [-1, 0]);
      }
      labelAll(cv, [S2, A2, B2, C2], [s2, a2, b2, c2], centre([a2, b2, c2, s2]));
      return frame(cv, W, H);
    }
    const [S, A, B, C, D] = nm(o.names, ["S", "A", "B", "C", "D"]);
    const a = P(70, 280), b = P(280, 280), d = P(150, 215), c = P(360, 215), s = perp ? P(70, 40) : P(225, 40);
    cv.seg(a, b);
    cv.seg(b, c);
    cv.seg(c, d, { hidden: true });
    cv.seg(d, a, { hidden: true });
    cv.seg(s, a);
    cv.seg(s, b);
    cv.seg(s, c);
    cv.seg(s, d, { hidden: true });
    const O = mid(a, c);
    if (perp) cv.rightAngle(a, s, b, 10);
    if (o.height && !perp || o.diagonals) {
      cv.seg(a, c, { hidden: true });
      cv.seg(b, d, { hidden: true });
      cv.dot(O);
      cv.label(pick([S, A, B, C, D], "O", "H"), O, [0.3, 1], { dist: 11 });
    }
    if (o.height && !perp) cv.seg(s, O, { dash: "5 4" });
    if (o.midpoints) {
      const used = [S, A, B, C, D], mn = pick(used, "M", "K", "E"), nn = pick([...used, mn], "N", "I", "F");
      const m = mid(b, c), n = mid(s, a);
      cv.seg(n, m, { dash: "5 4" });
      cv.dot(m);
      cv.dot(n);
      cv.label(mn, m, [0.8, 0.6]);
      cv.label(nn, n, [-1, 0]);
    }
    labelAll(cv, [S, A, B, C, D], [s, a, b, c, d], centre([a, b, c, d, s]));
    return frame(cv, W, H);
  }
  function tetrahedron(o = {}) {
    const [A, B, C, D] = nm(o.names, ["A", "B", "C", "D"]), W = 440, H = 340, cv = new Canvas();
    const a = P(70, 280), b = P(290, 280), c = P(370, 215), d = P(200, 40);
    cv.seg(a, b);
    cv.seg(b, c);
    cv.seg(a, c, { hidden: true });
    cv.seg(d, a);
    cv.seg(d, b);
    cv.seg(d, c);
    const used = [A, B, C, D], mn = pick(used, "M", "K", "E"), nn = pick([...used, mn], "N", "I", "F");
    if (o.medians) {
      const m = mid(b, c);
      cv.seg(a, m, { dash: "5 4" });
      cv.seg(d, m, { dash: "5 4" });
      cv.dot(m);
      cv.label(mn, m, [0.8, 0.6]);
    }
    if (o.opposite) {
      const m = mid(a, d), n = mid(b, c);
      cv.seg(m, n, { dash: "5 4" });
      cv.dot(m);
      cv.dot(n);
      cv.label(nn, m, [-1, 0]);
      if (!o.medians) cv.label(mn, n, [0.8, 0.6]);
    }
    labelAll(cv, [D, A, B, C], [d, a, b, c], centre([a, b, c, d]));
    return frame(cv, W, H);
  }
  function prism(o = {}) {
    const kind = o.kind || "triangle", W = 440, H = 360, cv = new Canvas();
    const ox = 70, oy = 300;
    const q = (x, y, z) => {
      const p2 = proj(x, y, z);
      return [ox + p2[0], oy + p2[1]];
    };
    if (kind === "triangle") {
      const given = String(o.names || "").split(/[\s,;]+/).filter(Boolean);
      const [A2, B2, C2, A12, B12, C12] = nm(given.length > 6 ? [0, 1, 2, 4, 5, 6].map((i) => given[i]).join(",") : o.names, ["A", "B", "C", "A'", "B'", "C'"]);
      const a = q(0, 0, 0), b = q(220, 0, 0), c = q(0, 0, 160), a1 = q(0, 190, 0), b1 = q(220, 190, 0), c1 = q(0, 190, 160);
      cv.seg(a, b);
      cv.seg(b, c, { hidden: true });
      cv.seg(a, c, { hidden: true });
      cv.seg(a1, b1);
      cv.seg(b1, c1);
      cv.seg(a1, c1);
      cv.seg(a, a1);
      cv.seg(b, b1);
      cv.seg(c, c1, { hidden: true });
      labelAll(cv, [A2, B2, C2, A12, B12, C12], [a, b, c, a1, b1, c1], centre([a, b, c, a1, b1, c1]));
      return frame(cv, W, H);
    }
    const names = nm(o.names, ["A", "B", "C", "D", "A'", "B'", "C'", "D'"]);
    const w = kind === "cube" ? 190 : 230, hgt = kind === "cube" ? 190 : 150, dep = kind === "cube" ? 190 : 170;
    const v = (x, y, z) => q(x, y, z);
    const A = v(0, 0, 0), B = v(w, 0, 0), D = v(0, 0, dep), C = v(w, 0, dep), A1 = v(0, hgt, 0), B1 = v(w, hgt, 0), D1 = v(0, hgt, dep), C1 = v(w, hgt, dep);
    cv.poly([A, B, C, D], { hidden: false });
    cv.seg(A, B);
    cv.seg(B, C);
    cv.seg(C, D, { hidden: true });
    cv.seg(D, A, { hidden: true });
    cv.seg(A1, B1);
    cv.seg(B1, C1);
    cv.seg(C1, D1);
    cv.seg(D1, A1);
    cv.seg(A, A1);
    cv.seg(B, B1);
    cv.seg(C, C1);
    cv.seg(D, D1, { hidden: true });
    cv.items = cv.items.filter((it) => it.t !== "poly");
    cv.seg(A, B);
    cv.seg(B, C);
    cv.seg(A, D, { hidden: true });
    cv.seg(D, C, { hidden: true });
    if (o.diagonals) {
      cv.seg(A, C1, { dash: "5 4" });
    }
    labelAll(cv, names, [A, B, C, D, A1, B1, C1, D1], centre([A, B, C, D, A1, B1, C1, D1]));
    return frame(cv, W, H);
  }
  function roundSolid(o = {}) {
    const kind = o.kind || "cone", W = 360, H = 360, cv = new Canvas();
    const cx = 180, rx = 110, ry = 28;
    const arc = (cx0, cyy, rx0, ry0, front) => {
      const pts = Array.from({ length: 31 }, (_x, i) => {
        const t = (front ? 0 : Math.PI) + Math.PI * i / 30;
        return [cx0 + rx0 * Math.cos(t), cyy + ry0 * Math.sin(t)];
      });
      cv.items.push({ t: "poly", pts, closed: false, sw: 1.5, dash: front ? "" : "5 4" });
    };
    if (kind === "cone") {
      const [Sn, On, An] = nm(o.names, ["S", "O", "A"]);
      const top = P(cx, 40), by = 290, Oc = P(cx, by), Ap = P(cx + rx, by);
      arc(cx, by, rx, ry, true);
      arc(cx, by, rx, ry, false);
      cv.seg(top, [cx - rx, by]);
      cv.seg(top, Ap);
      cv.seg(top, Oc, { dash: "5 4" });
      cv.seg(Oc, Ap, { dash: "5 4" });
      cv.rightAngle(Oc, top, Ap, 9);
      cv.dot(top);
      cv.dot(Oc);
      cv.dot(Ap);
      cv.label(Sn, top, [0, -1]);
      cv.label(On, Oc, [-0.7, 0.8], { dist: 13 });
      cv.label(An, Ap, [1, 0.5], { dist: 13 });
      if (o.showR !== false) cv.label("R", mid(Oc, Ap), [0, 1], { dist: 12 });
      if (o.showH !== false) cv.label("h", mid(top, Oc), [-1, 0], { dist: 12 });
      if (o.showL !== false) cv.label("l", mid(top, Ap), [1, -0.3], { dist: 14 });
    } else if (kind === "cylinder") {
      const [On, O1n, An] = nm(o.names, ["O", "O'", "A"]);
      const t = 70, b = 290, O1 = P(cx, t), O2 = P(cx, b), Ap = P(cx + rx, b);
      cv.items.push({ t: "ellipse", cx, cy: t, rx, ry, sw: 1.5 });
      arc(cx, b, rx, ry, true);
      arc(cx, b, rx, ry, false);
      cv.seg([cx - rx, t], [cx - rx, b]);
      cv.seg([cx + rx, t], [cx + rx, b]);
      cv.seg(O1, O2, { dash: "5 4" });
      cv.seg(O2, Ap, { dash: "5 4" });
      cv.rightAngle(O2, O1, Ap, 9);
      cv.dot(O1);
      cv.dot(O2);
      cv.dot(Ap);
      cv.label(On, O2, [-0.7, 0.8], { dist: 13 });
      cv.label(O1n, O1, [0, -1], { dist: 14 });
      cv.label(An, Ap, [1, 0.5], { dist: 13 });
      if (o.showR !== false) cv.label("R", mid(O2, Ap), [0, 1], { dist: 12 });
      if (o.showH !== false) cv.label("h", mid(O1, O2), [-1, 0], { dist: 12 });
    } else if (kind === "frustum") {
      const [On, O1n] = nm(o.names, ["O", "O'"]);
      const t = 80, b = 290, r1 = 62, r2 = 120, O1 = P(cx, t), O2 = P(cx, b);
      cv.items.push({ t: "ellipse", cx, cy: t, rx: r1, ry: r1 * 0.26, sw: 1.5 });
      arc(cx, b, r2, r2 * 0.26, true);
      arc(cx, b, r2, r2 * 0.26, false);
      cv.seg([cx - r1, t], [cx - r2, b]);
      cv.seg([cx + r1, t], [cx + r2, b]);
      cv.seg(O1, O2, { dash: "5 4" });
      cv.dot(O1);
      cv.dot(O2);
      cv.label(On, O2, [-0.7, 0.8], { dist: 13 });
      cv.label(O1n, O1, [0, -1], { dist: 14 });
      if (o.showR !== false) {
        cv.seg(O2, [cx + r2, b], { dash: "5 4" });
        cv.label("R", mid(O2, [cx + r2, b]), [0, 1], { dist: 12 });
        cv.seg(O1, [cx + r1, t], { dash: "5 4" });
        cv.label("r", mid(O1, [cx + r1, t]), [0, -1], { dist: 10 });
      }
      if (o.showH !== false) cv.label("h", mid(O1, O2), [-1, 0], { dist: 12 });
    } else {
      const [On, An] = nm(o.names, ["O", "A"]);
      const r = 130, c = P(cx, 180), Ap = [c[0] + r, c[1]];
      cv.circle(c, r);
      arc2(cv, c, r);
      cv.dot(c);
      cv.dot(Ap);
      cv.label(On, c, [-0.5, 0.8], { dist: 11 });
      cv.label(An, Ap, [1, 0], { dist: 12 });
      cv.seg(c, Ap);
      if (o.showR !== false) cv.label("R", mid(c, Ap), [0, -1], { dist: 10 });
    }
    return frame(cv, W, H);
  }
  function arc2(cv, c, r) {
    const rx = r, ry = r * 0.25;
    const pts = Array.from({ length: 31 }, (_x, i) => {
      const t = Math.PI * i / 30;
      return [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)];
    });
    const back = Array.from({ length: 31 }, (_x, i) => {
      const t = Math.PI + Math.PI * i / 30;
      return [c[0] + rx * Math.cos(t), c[1] + ry * Math.sin(t)];
    });
    cv.items.push({ t: "poly", pts, closed: false, sw: 1.3 }, { t: "poly", pts: back, closed: false, sw: 1.3, dash: "5 4" });
  }
  function axes(o = {}) {
    const W = 360, H = 320, cv = new Canvas();
    if (o.kind === "oxyz") {
      const org = P(150, 220), x = P(330, 262), y = P(150, 20), z = P(40, 300);
      const xe = P(320, 220), ye = P(150, 24), ze = P(50, 290);
      [[xe, "x"], [ye, "y"], [ze, "z"]].forEach(([e3, n]) => {
        cv.items.push({ t: "line", x1: org[0], y1: org[1], x2: e3[0], y2: e3[1], w: 1.5, arrow: true });
        cv.label(n, e3, sub(e3, org), { dist: 12 });
      });
      cv.label("O", org, [-0.6, 0.8], { dist: 12 });
    } else {
      const org = P(170, 170);
      cv.items.push({ t: "line", x1: 20, y1: 170, x2: 340, y2: 170, w: 1.5, arrow: true }, { t: "line", x1: 170, y1: 300, x2: 170, y2: 20, w: 1.5, arrow: true });
      cv.label("x", [340, 170], [1, 0.4], { dist: 12 });
      cv.label("y", [170, 20], [0.5, -1], { dist: 12 });
      cv.label("O", org, [-0.7, 0.9], { dist: 11 });
    }
    return frame(cv, W, H);
  }
  var P, mid, add, sub, mul, len, unit, lerp, foot, Canvas, pick, nm, proj, GEOMETRY;
  var init_geometry = __esm({
    "src/figures/geometry.js"() {
      init_scene();
      P = (x, y) => [x, y];
      mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      add = (a, b) => [a[0] + b[0], a[1] + b[1]];
      sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
      mul = (a, k) => [a[0] * k, a[1] * k];
      len = (a) => Math.hypot(a[0], a[1]);
      unit = (a) => mul(a, 1 / (len(a) || 1));
      lerp = (a, b, t) => add(a, mul(sub(b, a), t));
      foot = (p2, a, b) => {
        const d = sub(b, a), t = ((p2[0] - a[0]) * d[0] + (p2[1] - a[1]) * d[1]) / (d[0] * d[0] + d[1] * d[1]);
        return add(a, mul(d, t));
      };
      Canvas = class {
        constructor() {
          this.items = [];
          this.pts = /* @__PURE__ */ new Map();
        }
        seg(a, b, o = {}) {
          this.items.push({ t: "line", x1: a[0], y1: a[1], x2: b[0], y2: b[1], w: o.w || 1.5, dash: o.hidden ? "5 4" : o.dash || "", color: o.color });
        }
        poly(pts, o = {}) {
          this.items.push({ t: "poly", pts, closed: true, sw: o.w || 1.5, fill: o.fill, color: o.color, dash: o.hidden ? "5 4" : "" });
        }
        circle(c, r, o = {}) {
          var _a8;
          this.items.push({ t: "ellipse", cx: c[0], cy: c[1], rx: r, ry: (_a8 = o.ry) != null ? _a8 : r, sw: o.w || 1.5, dash: o.hidden ? "5 4" : "", fill: o.fill, color: o.color });
        }
        dot(p2) {
          this.items.push({ t: "dot", x: p2[0], y: p2[1], r: 2.4 });
        }
        label(name, p2, away, o = {}) {
          const d = unit(away || [0, -1]);
          this.items.push({ t: "label", latex: name, x: p2[0] + d[0] * (o.dist || 12), y: p2[1] + d[1] * (o.dist || 12), size: 16, anchor: "c" });
        }
        rightAngle(v, a, b, size = 9) {
          const u = unit(sub(a, v)), w = unit(sub(b, v));
          const p1 = add(v, mul(u, size)), p3 = add(v, mul(w, size)), p2 = add(p1, mul(w, size));
          this.items.push({ t: "poly", pts: [p1, p2, p3], closed: false, sw: 1 });
        }
        tick(a, b, n = 1) {
          const m = mid(a, b), d = unit(sub(b, a)), nrm = [-d[1], d[0]];
          for (let i = 0; i < n; i++) {
            const c = add(m, mul(d, (i - (n - 1) / 2) * 4));
            this.seg(add(c, mul(nrm, 4)), sub(c, mul(nrm, 4)), { w: 1 });
          }
        }
        arcAngle(v, a, b, r = 16) {
          const a1 = Math.atan2(a[1] - v[1], a[0] - v[0]), a2 = Math.atan2(b[1] - v[1], b[0] - v[0]);
          let d = a2 - a1;
          while (d > Math.PI) d -= 2 * Math.PI;
          while (d < -Math.PI) d += 2 * Math.PI;
          const pts = Array.from({ length: 13 }, (_x, i) => [v[0] + r * Math.cos(a1 + d * i / 12), v[1] + r * Math.sin(a1 + d * i / 12)]);
          this.items.push({ t: "poly", pts, closed: false, sw: 1 });
        }
      };
      pick = (used, ...cands) => cands.find((c) => !used.includes(c)) || cands[0] + "'";
      nm = (src, fallback) => {
        const l = String(src || "").split(/[\s,;]+/).filter(Boolean);
        return fallback.map((f, i) => {
          var _a8;
          return (_a8 = l[i]) != null ? _a8 : f;
        });
      };
      proj = (x, y, z, s = 1) => [x + 0.5 * z * Math.cos(Math.PI / 4) * s, -y - 0.5 * z * Math.sin(Math.PI / 4) * s];
      GEOMETRY = [
        { id: "triangle", label: "Tam gi\xE1c", make: triangle, options: [["kind", "Lo\u1EA1i", [["scalene", "Th\u01B0\u1EDDng"], ["isosceles", "C\xE2n"], ["right", "Vu\xF4ng"], ["equilateral", "\u0110\u1EC1u"]]], ["altitude", "\u0110\u01B0\u1EDDng cao"], ["median", "Trung tuy\u1EBFn"], ["bisector", "Ph\xE2n gi\xE1c"], ["centroid", "Tr\u1ECDng t\xE2m"], ["circum", "\u0110\u01B0\u1EDDng tr\xF2n ngo\u1EA1i ti\u1EBFp"], ["incircle", "\u0110\u01B0\u1EDDng tr\xF2n n\u1ED9i ti\u1EBFp"]], names: "A,B,C" },
        { id: "circle", label: "\u0110\u01B0\u1EDDng tr\xF2n", make: circleFigure, options: [["kind", "D\u1EA1ng", [["diameter", "\u0110\u01B0\u1EDDng k\xEDnh + g\xF3c n\u1ED9i ti\u1EBFp ch\u1EAFn n\u1EEDa \u0111\u01B0\u1EDDng tr\xF2n"], ["chord", "D\xE2y cung + \u0111\u01B0\u1EDDng vu\xF4ng g\xF3c"], ["tangent", "Ti\u1EBFp tuy\u1EBFn"], ["inscribed", "Tam gi\xE1c n\u1ED9i ti\u1EBFp"]]]], names: "O,A,B,C" },
        { id: "quad", label: "T\u1EE9 gi\xE1c", make: quadrilateral, options: [["kind", "Lo\u1EA1i", [["rectangle", "H\xECnh ch\u1EEF nh\u1EADt"], ["square", "H\xECnh vu\xF4ng"], ["parallelogram", "H\xECnh b\xECnh h\xE0nh"], ["rhombus", "H\xECnh thoi"], ["trapezoid", "H\xECnh thang"], ["righttrapezoid", "H\xECnh thang vu\xF4ng"]]], ["diagonals", "Hai \u0111\u01B0\u1EDDng ch\xE9o"]], names: "A,B,C,D" },
        { id: "pyramid", label: "H\xECnh ch\xF3p (\u0111\xE1y t\u1EE9 gi\xE1c / tam gi\xE1c)", make: pyramid, options: [["base", "\u0110\xE1y", [["quad", "T\u1EE9 gi\xE1c  S.ABCD"], ["tri", "Tam gi\xE1c  S.ABC"]]], ["apex", "\u0110\u1EC9nh S", [["center", "Ch\xF3p \u0111\u1EC1u (\u0111\u01B0\u1EDDng cao SO / SH)"], ["A", "SA vu\xF4ng g\xF3c v\u1EDBi \u0111\xE1y"]]], ["height", "\u0110\u01B0\u1EDDng cao SO (ch\xF3p \u0111\u1EC1u)"], ["diagonals", "Hai \u0111\u01B0\u1EDDng ch\xE9o \u0111\xE1y"], ["midpoints", "Trung \u0111i\u1EC3m M c\u1EE7a BC, N c\u1EE7a SA"]], names: "S,A,B,C,D" },
        { id: "tetra", label: "T\u1EE9 di\u1EC7n", make: tetrahedron, options: [["medians", "Trung tuy\u1EBFn AM, DM (M trung \u0111i\u1EC3m BC)"], ["opposite", "\u0110o\u1EA1n n\u1ED1i trung \u0111i\u1EC3m hai c\u1EA1nh \u0111\u1ED1i AD, BC"]], names: "A,B,C,D" },
        { id: "prism", label: "L\u0103ng tr\u1EE5 / h\xECnh h\u1ED9p / l\u1EADp ph\u01B0\u01A1ng", make: prism, options: [["kind", "Lo\u1EA1i", [["triangle", "L\u0103ng tr\u1EE5 tam gi\xE1c ABC.A'B'C'"], ["box", "H\xECnh h\u1ED9p ch\u1EEF nh\u1EADt"], ["cube", "H\xECnh l\u1EADp ph\u01B0\u01A1ng"]]], ["diagonals", "\u0110\u01B0\u1EDDng ch\xE9o AC'"]], names: "A,B,C,A',B',C'" },
        { id: "round", label: "H\xECnh n\xF3n / tr\u1EE5 / n\xF3n c\u1EE5t / c\u1EA7u", make: roundSolid, options: [["kind", "H\xECnh", [["cone", "H\xECnh n\xF3n"], ["cylinder", "H\xECnh tr\u1EE5"], ["frustum", "H\xECnh n\xF3n c\u1EE5t"], ["sphere", "H\xECnh c\u1EA7u"]]], ["showR", "Ghi b\xE1n k\xEDnh R"], ["showH", "Ghi chi\u1EC1u cao h"], ["showL", "Ghi \u0111\u01B0\u1EDDng sinh l (h\xECnh n\xF3n)"]], names: "S,O,A", hint: "H\xECnh n\xF3n: S,O,A \xB7 h\xECnh tr\u1EE5: O,O',A \xB7 n\xF3n c\u1EE5t: O,O' \xB7 h\xECnh c\u1EA7u: O,A" },
        { id: "axes", label: "H\u1EC7 tr\u1EE5c t\u1ECDa \u0111\u1ED9", make: axes, options: [["kind", "H\u1EC7", [["oxy", "Oxy"], ["oxyz", "Oxyz"]]]], names: "" }
      ];
    }
  });

  // src/figures/sci-kit.js
  function arcPts(cx, cy, rx, ry, a0, a1, n = 24) {
    return Array.from({ length: n + 1 }, (_x, i) => {
      const t = rad(a0 + (a1 - a0) * i / n);
      return [cx + rx * Math.cos(t), cy - ry * Math.sin(t)];
    });
  }
  function frame2(c, W, H) {
    const scene = { width: W, height: H, items: c.items };
    return { scene, svg: sceneToSvg(scene), width: W, height: H };
  }
  var P2, add2, sub2, mul2, len2, unit2, mid2, rad, rot, COLORS2, Canvas2, list2, clamp;
  var init_sci_kit = __esm({
    "src/figures/sci-kit.js"() {
      init_scene();
      P2 = (x, y) => [x, y];
      add2 = (a, b) => [a[0] + b[0], a[1] + b[1]];
      sub2 = (a, b) => [a[0] - b[0], a[1] - b[1]];
      mul2 = (a, k) => [a[0] * k, a[1] * k];
      len2 = (a) => Math.hypot(a[0], a[1]);
      unit2 = (a) => mul2(a, 1 / (len2(a) || 1));
      mid2 = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      rad = (deg) => deg * Math.PI / 180;
      rot = (p2, deg, c = [0, 0]) => {
        const t = rad(deg), d = sub2(p2, c);
        return [c[0] + d[0] * Math.cos(t) - d[1] * Math.sin(t), c[1] + d[0] * Math.sin(t) + d[1] * Math.cos(t)];
      };
      COLORS2 = { water: "#8ec5f5", blue: "#6fb1ea", pink: "#f4a6c0", yellow: "#f6e27a", green: "#8fd18b", orange: "#f5a45d", red: "#e5534b", gray: "#c9ced6", glass: "#dbe9f5", wood: "#d9b27c", metal: "#9aa5b1", none: "" };
      Canvas2 = class {
        constructor() {
          this.items = [];
        }
        line(a, b, o = {}) {
          this.items.push({ t: "line", x1: a[0], y1: a[1], x2: b[0], y2: b[1], w: o.w || 1.5, dash: o.dash || "", color: o.color, arrow: o.arrow });
          return this;
        }
        arrow(a, b, o = {}) {
          return this.line(a, b, __spreadProps(__spreadValues({}, o), { arrow: true }));
        }
        poly(pts, o = {}) {
          this.items.push({ t: "poly", pts, closed: o.closed !== false, sw: o.w || 1.5, fill: o.fill, color: o.color, dash: o.dash || "", opacity: o.opacity });
          return this;
        }
        path(pts, o = {}) {
          return this.poly(pts, __spreadProps(__spreadValues({}, o), { closed: false }));
        }
        ellipse(cx, cy, rx, ry, o = {}) {
          this.items.push({ t: "ellipse", cx, cy, rx, ry, sw: o.w || 1.5, fill: o.fill, color: o.color, dash: o.dash || "" });
          return this;
        }
        circle(c, r, o = {}) {
          return this.ellipse(c[0], c[1], r, r, o);
        }
        rect(x, y, w, h, o = {}) {
          this.items.push({ t: "rect", x, y, w, h, sw: o.w || 1.5, fill: o.fill, color: o.color, dash: o.dash || "" });
          return this;
        }
        dot(p2, r = 2.6, color) {
          this.items.push({ t: "dot", x: p2[0], y: p2[1], r, color });
          return this;
        }
        /** LaTeX label centred on p (anchor 'l' / 'r': p is its left / right end). */
        label(latex, p2, o = {}) {
          this.items.push({ t: "label", latex, x: p2[0], y: p2[1], size: o.size || 15, anchor: o.anchor || "c", valign: o.valign, halo: o.halo });
          return this;
        }
        /** Plain (Vietnamese) words as a label. */
        text(s, p2, o = {}) {
          return this.label(`\\text{${s}}`, p2, o);
        }
        /** A note: short leader line from `from` (on the figure) to `to`, with the words next to `to`. */
        note(s, from, to, o = {}) {
          this.line(from, to, { w: 0.9, color: "#555" });
          const side = to[0] >= from[0] ? "l" : "r";
          return this.text(s, [to[0] + (side === "l" ? 4 : -4), to[1]], { size: o.size || 13, anchor: side });
        }
      };
      list2 = (s, fallback = []) => {
        const l = String(s != null ? s : "").split(/[,;\n]+/).map((x) => x.trim()).filter(Boolean);
        return l.length ? l : fallback;
      };
      clamp = (v, lo, hi, def2) => {
        const n = Number(v);
        return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : def2;
      };
    }
  });

  // src/figures/chem.js
  function lamp(cv, cx, yb, k = 1, flame = true) {
    const X = (dx) => cx + dx * k, Y = (dy) => yb + dy * k;
    cv.ellipse(cx, Y(-30), 55 * k, 30 * k, { fill: COLORS2.glass });
    cv.line([X(-45), Y(-26)], [X(45), Y(-26)], { w: 0.9, color: "#6b8fb5" });
    cv.rect(X(-12), Y(-84), 24 * k, 28 * k, { fill: COLORS2.glass });
    cv.poly([[X(-19), Y(-84)], [X(19), Y(-84)], [X(14), Y(-98)], [X(-14), Y(-98)]], { fill: COLORS2.metal });
    cv.line([X(0), Y(-98)], [X(0), Y(-108)], { w: 2 });
    if (flame) cv.poly([[X(0), Y(-140)], [X(-9), Y(-120)], [X(-6), Y(-108)], [X(6), Y(-108)], [X(9), Y(-120)]], { fill: COLORS2.orange, color: "#d9792b", w: 1 });
  }
  function erlenPts(cx, top, bottom, neckW, baseW, neckLen) {
    const ny = top + neckLen;
    return [[cx - neckW / 2, top], [cx - neckW / 2, ny], [cx - baseW / 2, bottom], [cx + baseW / 2, bottom], [cx + neckW / 2, ny], [cx + neckW / 2, top]];
  }
  function erlenLiquid(cv, cx, top, bottom, neckW, baseW, neckLen, level, fill) {
    if (!fill) return;
    const h = erlenHalf(cx, top, bottom, neckW, baseW, neckLen, level);
    fillPoly(cv, [[cx - h, level], [cx - baseW / 2, bottom], [cx + baseW / 2, bottom], [cx + h, level]], fill);
  }
  function labware(o = {}) {
    const w = WARE[o.kind] || WARE.tube, cv = new Canvas2(), cx = 130;
    w.draw(cv, cx, o.kind === "lamp" ? "" : liqColor(o));
    if (o.showName !== false) cv.text(String(o.names || "").trim() || w.name, [cx, 312], { size: 15 });
    return frame2(cv, 260, 330);
  }
  function heatedTube(cv, M, deg, fill) {
    const outline = place(tubeLocal(150, 44), deg, M);
    const bottom = place([[88, -22], [128, -22], ...arcPts(128, 0, 22, 22, 90, -90, 14), [88, 22]], deg, M);
    fillPoly(cv, bottom, fill || COLORS2.gray);
    cv.path(outline);
    cv.poly(place([[-4, -11], [22, -9], [22, 9], [-4, 11]], deg, M), { fill: "#b98a5a", color: "#7a5a38" });
    return place([[50, 0], [-24, 0]], deg, M);
  }
  function gasWater(o) {
    const cv = new Canvas2(), W = 600, H = 360;
    fillPoly(cv, [[41, 245], [229, 245], [229, 319], [41, 319]], COLORS2.water);
    cv.path([[40, 215], [40, 320], [230, 320], [230, 215]]);
    fillPoly(cv, [[109, 205], [109, 290], [151, 290], [151, 205]], COLORS2.water);
    cv.path([[108, 290], [108, 142], ...arcPts(130, 142, 22, 22, 180, 0, 12), [152, 290]]);
    const [s, e3] = heatedTube(cv, P2(330, 212), -12, o.solid ? COLORS2.gray : COLORS2.yellow);
    cv.path([s, e3, [e3[0] - 16, 200], [200, 200], [200, 300], [130, 300], [130, 262]], { w: 2.2, color: "#4a6a88" });
    lamp(cv, 455, 354);
    if (o.showName !== false) {
      cv.note("H\u1ED7n h\u1EE3p ph\u1EA3n \u1EE9ng", [462, 190], [440, 110]);
      cv.note("\u1ED0ng d\u1EABn kh\xED", [250, 200], [250, 150]);
      cv.note("Kh\xED thu \u0111\u01B0\u1EE3c", [130, 170], [200, 105]);
      cv.note("Ch\u1EADu n\u01B0\u1EDBc", [60, 300], [60, 338]);
      cv.note("\u0110\xE8n c\u1ED3n", [508, 330], [530, 330]);
      cv.note("N\xFAt cao su", [316, 214], [316, 258]);
    }
    return frame2(cv, W, H);
  }
  function gasAir(o) {
    const cv = new Canvas2(), W = 600, H = 360, up = o.collect !== "down";
    const [s, e3] = heatedTube(cv, P2(330, 212), -12, COLORS2.yellow);
    if (up) {
      cv.path([[90, 170], [90, 330], [170, 330], [170, 170]]);
      cv.path([s, e3, [e3[0] - 16, 200], [130, 200], [130, 310]], { w: 2.2, color: "#4a6a88" });
      cv.text("Kh\xED", [130, 250], { size: 15 });
      if (o.showName !== false) {
        cv.note("B\xECnh thu kh\xED (\u0111\u1EC3 ng\u1EEDa)", [170, 250], [190, 250]);
      }
    } else {
      cv.path([[90, 320], [90, 180], [170, 180], [170, 320]]);
      cv.path([s, e3, [e3[0] - 16, 250], [262, 250], [262, 345], [130, 345], [130, 200]], { w: 2.2, color: "#4a6a88" });
      cv.text("Kh\xED", [150, 215], { size: 15, anchor: "c" });
      if (o.showName !== false) {
        cv.note("B\xECnh thu kh\xED (\xFAp ng\u01B0\u1EE3c)", [170, 270], [190, 290]);
      }
    }
    lamp(cv, 455, 354);
    if (o.showName !== false) {
      cv.note("H\u1ED7n h\u1EE3p ph\u1EA3n \u1EE9ng", [462, 190], [440, 110]);
      cv.note("\u0110\xE8n c\u1ED3n", [508, 330], [530, 330]);
      cv.note("\u1ED0ng d\u1EABn kh\xED", up ? [200, 200] : [262, 300], up ? [200, 150] : [284, 300]);
    }
    return frame2(cv, W, H);
  }
  function filtration(o) {
    const cv = new Canvas2(), W = 440, H = 370;
    fillPoly(cv, [[81, 300], [81, 339], [239, 339], [239, 300]], COLORS2.water);
    cv.path([[80, 230], [80, 340], [240, 340], [240, 230]]);
    cv.line([80, 300], [240, 300], { w: 1 });
    fillPoly(cv, [[104, 106], [160, 205], [160, 205], [216, 106]], COLORS2.yellow);
    cv.poly([[88, 100], [160, 212], [232, 100]], { dash: "4 3", w: 1, color: "#666" });
    cv.path([[70, 100], [150, 215], [150, 268]]);
    cv.path([[250, 100], [170, 215], [170, 268]]);
    cv.line([70, 100], [250, 100]);
    cv.line([225, 40], [160, 150], { w: 3.2, color: "#4a6a88" });
    [[160, 283], [160, 295]].forEach((p2) => cv.dot(p2, 2.4, "#4a90d9"));
    if (o.showName !== false) {
      cv.note("Ph\u1EC5u l\u1ECDc", [250, 100], [275, 80]);
      cv.note("Gi\u1EA5y l\u1ECDc", [232, 118], [275, 130]);
      cv.note("\u0110\u0169a th\u1EE7y tinh", [215, 55], [245, 40]);
      cv.note("Dung d\u1ECBch c\u1EA7n l\u1ECDc", [185, 130], [275, 170]);
      cv.note("C\u1ED1c h\u1EE9ng (n\u01B0\u1EDBc l\u1ECDc)", [240, 320], [262, 320]);
    }
    return frame2(cv, W, H);
  }
  function distillation(o) {
    const cv = new Canvas2(), W = 640, H = 372;
    const c = [110, 190], r = 60, a1 = Math.acos(14 / 60) * 180 / Math.PI;
    fillPoly(cv, arcPts(c[0], c[1], r, r, 180 - Math.asin(10 / 60) * 180 / Math.PI, 360 + Math.asin(10 / 60) * 180 / Math.PI, 24), COLORS2.water);
    cv.path([[96, 70], ...arcPts(c[0], c[1], r, r, 180 - a1, 360 + a1, 36), [124, 70]]);
    cv.line([110, 52], [110, 206], { w: 2, color: "#a33" });
    cv.circle([110, 210], 5, { fill: "#e5534b", color: "#a33", w: 1 });
    const S = [124, 100], T = [430, 205], d = unit2(sub2(T, S)), n = [-d[1], d[0]];
    const A = add2(S, mul2(d, 10)), B = sub2(T, mul2(d, 10));
    cv.path([A, B], { w: 2.2, color: "#4a6a88" });
    [-14, 14].forEach((k) => cv.line(add2(A, mul2(n, k)), add2(B, mul2(n, k)), { w: 1.5 }));
    cv.line(add2(A, mul2(n, -14)), add2(A, mul2(n, 14)), { w: 1.5 });
    cv.line(add2(B, mul2(n, -14)), add2(B, mul2(n, 14)), { w: 1.5 });
    const wOut = add2(add2(A, mul2(d, 40)), mul2(n, -14)), wIn = add2(sub2(B, mul2(d, 40)), mul2(n, 14));
    cv.arrow(add2(wOut, mul2(n, -6)), add2(wOut, mul2(n, -40)), { w: 1.8, color: "#2a7ac8" });
    cv.arrow(add2(wIn, mul2(n, 40)), add2(wIn, mul2(n, 6)), { w: 1.8, color: "#2a7ac8" });
    const ex = T[0] + 12;
    erlenLiquid(cv, ex, 235, 350, 28, 110, 40, 330, COLORS2.water);
    cv.path(erlenPts(ex, 235, 350, 28, 110, 40));
    cv.path([sub2(T, mul2(d, 6)), add2(T, mul2(d, 14)), [ex, 262]], { w: 2.2, color: "#4a6a88" });
    [[ex, 290]].forEach((p2) => cv.dot(p2, 2.4, "#4a90d9"));
    lamp(cv, 110, 360, 0.72);
    if (o.showName !== false) {
      cv.note("Nhi\u1EC7t k\u1EBF", [110, 56], [140, 38]);
      cv.text("B\xECnh c\u1EA7u", [110, 232], { size: 13 });
      cv.note("\u1ED0ng sinh h\xE0n", add2(mid2(A, B), mul2(n, 14)), add2(mid2(A, B), [30, -62]));
      cv.note("N\u01B0\u1EDBc ra", add2(wOut, mul2(n, -40)), add2(wOut, [24, -52]));
      cv.note("N\u01B0\u1EDBc v\xE0o", add2(wIn, mul2(n, 40)), add2(add2(wIn, mul2(n, 40)), [-24, 26]));
      cv.note("B\xECnh h\u1EE9ng", [ex + 55, 330], [ex + 66, 330]);
      cv.note("\u0110\xE8n c\u1ED3n", [165, 345], [185, 345]);
    }
    return frame2(cv, W, H);
  }
  function setup(o = {}) {
    return ({ gaswater: gasWater, gasair: gasAir, filter: filtration, distill: distillation }[o.kind] || gasWater)(o);
  }
  function benzene() {
    const ring = hex(1.2, 0), atoms = [], bonds = [];
    ring.forEach((p2, i) => {
      atoms.push(["C", p2[0], p2[1]]);
    });
    ring.forEach((p2, i) => {
      atoms.push(["H", p2[0] * 1.8, p2[1] * 1.8]);
    });
    for (let i = 0; i < 6; i++) {
      bonds.push([i, (i + 1) % 6, i % 2 ? 1 : 2]);
      bonds.push([i, 6 + i, 1]);
    }
    return { atoms, bonds };
  }
  function molecule(o = {}) {
    const m = MOLECULES[o.kind] || MOLECULES.h2o, cv = new Canvas2(), ball = o.style === "ball", K = ball ? 78 : 74;
    const xs = m.atoms.map((a) => a[1]), ys = m.atoms.map((a) => a[2]);
    const pad = 1.2, minx = Math.min(...xs) - pad, maxx = Math.max(...xs) + pad, miny = Math.min(...ys) - pad, maxy = Math.max(...ys) + pad;
    const W = Math.max(240, (maxx - minx) * K), H = (maxy - miny) * K + (o.showName !== false ? 38 : 0);
    const pos = m.atoms.map((a) => [W / 2 + (a[1] - (minx + maxx) / 2) * K, (maxy - miny) * K / 2 + (a[2] - (miny + maxy) / 2) * K]);
    for (const [i, j, order] of m.bonds) {
      const a = pos[i], b = pos[j], d = unit2(sub2(b, a)), nrm = [-d[1], d[0]];
      const ga = ball ? 0 : EL[m.atoms[i][0]].r * K * 0.85 + 3, gb = ball ? 0 : EL[m.atoms[j][0]].r * K * 0.85 + 3;
      const A = add2(a, mul2(d, ga)), B = sub2(b, mul2(d, gb));
      const offs = order === 1 ? [0] : order === 2 ? [-3.2, 3.2] : [-5, 0, 5];
      offs.forEach((k) => cv.line(add2(A, mul2(nrm, k)), add2(B, mul2(nrm, k)), { w: ball ? 4 : 1.8, color: ball ? "#9aa0a8" : "#000" }));
    }
    m.atoms.forEach(([el], i) => {
      const e3 = EL[el];
      if (ball) {
        cv.circle(pos[i], e3.r * K, { fill: e3.color, color: "#333", w: 1.2 });
        cv.label(`\\mathrm{${el}}`, pos[i], { size: 15 + (el === "H" ? -2 : 0) });
      } else cv.label(`\\mathrm{${el}}`, pos[i], { size: 18 });
    });
    if (o.showName !== false) cv.label(chemTex(m.f), [W / 2, H - 16], { size: 20 });
    return frame2(cv, W, H);
  }
  function aromatic(o = {}) {
    const m = AROMATICS[o.kind] || AROMATICS.benzene, cv = new Canvas2(), R = 34, circle = o.style === "circle", LW = 1.8;
    const atoms = [], bonds = [], ringList = [];
    const ringAtoms = (c, a0) => Array.from({ length: 6 }, (_x, i) => atoms.push([c[0] + R * Math.cos(rad(a0 + 60 * i)), c[1] + R * Math.sin(rad(a0 + 60 * i))]) - 1);
    if (m.fused) {
      const d = Math.sqrt(3) * R, cL = [-d / 2, 0], cR = [d / 2, 0];
      const L = ringAtoms(cL, -90), Rr = ringAtoms(cR, -90);
      Rr[5] = L[1];
      Rr[4] = L[2];
      atoms.length = Rr[3] + 1;
      const edges = [
        [L[0], L[1], cL],
        [L[1], L[2], cL],
        [L[2], L[3], cL],
        [L[3], L[4], cL],
        [L[4], L[5], cL],
        [L[5], L[0], cL],
        [Rr[0], Rr[1], cR],
        [Rr[1], Rr[2], cR],
        [Rr[2], Rr[3], cR],
        [Rr[3], Rr[4], cR],
        [Rr[5], Rr[0], cR]
      ];
      const dbls = new Set([[L[0], L[5]], [L[3], L[4]], [L[1], L[2]], [Rr[0], Rr[1]], [Rr[2], Rr[3]]].map(([i, j]) => `${Math.min(i, j)}-${Math.max(i, j)}`));
      for (const [i, j, c] of edges) bonds.push([i, j, !circle && dbls.has(`${Math.min(i, j)}-${Math.max(i, j)}`) ? 2 : 1, c]);
      ringList.push(cL, cR);
    } else {
      m.rings.forEach((r, ri) => {
        const idx = ringAtoms([r.c[0] * R, r.c[1] * R], r.a0);
        for (let i = 0; i < 6; i++) bonds.push([idx[i], idx[(i + 1) % 6], !circle && i % 2 === 0 ? 2 : 1, [r.c[0] * R, r.c[1] * R]]);
        ringList.push([r.c[0] * R, r.c[1] * R]);
        r.idx = idx;
      });
      if (m.link) bonds.push([m.rings[0].idx[m.link[0][1]], m.rings[1].idx[m.link[1][1]], 1, null]);
    }
    const labels = [];
    const ring0 = m.fused ? null : m.rings[0];
    for (const [k, sub0] of Object.entries(m.subs || {})) {
      const i = ring0.idx[Number(k)], p2 = atoms[i], ang = -90 + 60 * Number(k);
      if (typeof sub0 === "string") {
        const dir = [Math.cos(rad(ang)), Math.sin(rad(ang))], end = add2(p2, mul2(dir, R));
        const left = Math.cos(rad(ang)) < -0.1, right = Math.cos(rad(ang)) > 0.1, text = left ? MIRROR[sub0] || sub0 : sub0;
        bonds.push([i, atoms.push(end) - 1, 1, null, true]);
        labels.push([chemTex(text), left ? [end[0] - 4, end[1]] : right ? [end[0] + 4, end[1]] : add2(end, mul2(dir, 13)), left ? "r" : right ? "l" : "c"]);
      } else {
        let cur = i, a = p2;
        for (const [da, order] of sub0.chain) {
          const e3 = add2(a, [R * Math.cos(rad(da)), R * Math.sin(rad(da))]);
          const j = atoms.push(e3) - 1;
          bonds.push([cur, j, order, null]);
          cur = j;
          a = e3;
        }
      }
    }
    const pad = 30, xsAll = atoms.map((a) => a[0]), ysAll = atoms.map((a) => a[1]);
    const lab = labels.map(([, p2, an]) => [p2[0] - (an === "r" ? 40 : 0), p2[0] + (an === "l" ? 40 : an === "c" ? 14 : 0)]).flat();
    const minx = Math.min(...xsAll, ...lab) - pad, maxx = Math.max(...xsAll, ...lab) + pad, miny = Math.min(...ysAll) - pad, maxy = Math.max(...ysAll) + pad;
    const nameH = o.showName !== false ? 40 : 0, W = Math.max(210, maxx - minx, o.showName !== false ? (m.name.length + m.f.replace(/[_{}]/g, "").length) * 9 + 50 : 0), H = maxy - miny + nameH;
    const ox = W / 2 - (minx + maxx) / 2, oy = -miny;
    const T = (p2) => [p2[0] + ox, p2[1] + oy];
    for (const [i, j, order, c, labelled] of bonds) {
      let A = atoms[i], B = atoms[j];
      cv.line(T(A), T(B), { w: LW, color: "#000" });
      if (order === 2 && c) {
        const d = unit2(sub2(B, A)), n = [-d[1], d[0]], ctr = sub2(c, mul2(add2(A, B), 0.5)), sgn2 = n[0] * ctr[0] + n[1] * ctr[1] >= 0 ? 1 : -1, L = len2(sub2(B, A));
        const a2 = add2(add2(A, mul2(d, L * 0.14)), mul2(n, 5.5 * sgn2)), b2 = add2(sub2(B, mul2(d, L * 0.14)), mul2(n, 5.5 * sgn2));
        cv.line(T(a2), T(b2), { w: LW, color: "#000" });
      } else if (order === 2) {
        const d = unit2(sub2(B, A)), n = [-d[1], d[0]];
        cv.line(T(add2(A, mul2(n, 4))), T(add2(B, mul2(n, 4))), { w: LW, color: "#000" });
      }
    }
    if (circle) ringList.forEach((c) => cv.circle(T(c), R * 0.62, { w: 1.6, color: "#000" }));
    labels.forEach(([tex, p2, an]) => cv.label(tex, T(p2), { size: 18, anchor: an }));
    if (o.showName !== false) cv.label(`\\text{${m.name}}\\ (${chemTex(m.f)})`, [W / 2, H - 18], { size: 17 });
    return frame2(cv, W, H);
  }
  function atomModel(o = {}) {
    const z = Math.max(1, Math.min(20, Number(o.z) || 11)), sh = shells(z), cv = new Canvas2();
    const R = 30 + 26 * sh.length, W = 2 * R + 60, H = 2 * R + 60 + (o.showName !== false ? 34 : 0), c = [W / 2, R + 30];
    sh.forEach((n, k) => {
      const r = 30 + 26 * (k + 1) - 6;
      cv.circle(c, r, { w: 1.2, color: "#666" });
      for (let i = 0; i < n; i++) {
        const t = rad(-90 + 360 * i / n + (k % 2 ? 180 / n : 0));
        cv.dot([c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)], 4, "#2a6fc8");
      }
    });
    cv.circle(c, 17, { fill: "#f08a4b", color: "#a85a22", w: 1.4 });
    cv.label(`+${z}`, c, { size: 15 });
    if (o.showName !== false) cv.label(`\\text{${ELEMENTS[z - 1]}}:\\ ${sh.join(",")}`, [W / 2, H - 14], { size: 17 });
    return frame2(cv, W, H);
  }
  var liqColor, LIQ, fillPoly, tubeLocal, place, erlenHalf, WARE, EL, hex, MOLECULES, chemTex, MOLECULE_CHOICES, MIRROR, ringOf, AROMATICS, AROMATIC_CHOICES, ELEMENTS, VN, ELEMENT_CHOICES, shells, CHEMISTRY;
  var init_chem = __esm({
    "src/figures/chem.js"() {
      init_sci_kit();
      liqColor = (o) => COLORS2[o.liquid] || "";
      LIQ = [["none", "Kh\xF4ng c\xF3 ch\u1EA5t l\u1ECFng"], ["water", "Xanh lam nh\u1EA1t"], ["pink", "H\u1ED3ng"], ["yellow", "V\xE0ng"], ["green", "Xanh l\u1EE5c"], ["orange", "Cam"]];
      fillPoly = (cv, pts, fill) => cv.poly(pts, { fill, color: fill, w: 0.5 });
      tubeLocal = (length, w) => [[0, -w / 2], [length - w / 2, -w / 2], ...arcPts(length - w / 2, 0, w / 2, w / 2, 90, -90, 14), [0, w / 2]];
      place = (pts, deg, M) => pts.map((p2) => add2(rot(p2, deg), M));
      erlenHalf = (cx, top, bottom, neckW, baseW, neckLen, y) => {
        const ny = top + neckLen, t = (y - ny) / (bottom - ny);
        return (neckW + (baseW - neckW) * Math.max(0, Math.min(1, t))) / 2;
      };
      WARE = {
        tube: { name: "\u1ED0ng nghi\u1EC7m", draw(cv, cx, fill) {
          if (fill) fillPoly(cv, [[cx - 28, 130], [cx - 28, 250], ...arcPts(cx, 250, 28, 28, 180, 360, 14), [cx + 28, 130]], fill);
          cv.path([[cx - 28, 40], [cx - 28, 250], ...arcPts(cx, 250, 28, 28, 180, 360, 14), [cx + 28, 40]]);
          cv.line([cx - 34, 40], [cx + 34, 40]);
          if (fill) cv.line([cx - 28, 130], [cx + 28, 130], { w: 1 });
        } },
        beaker: { name: "C\u1ED1c th\u1EE7y tinh", draw(cv, cx, fill) {
          if (fill) fillPoly(cv, [[cx - 60, 150], [cx - 60, 260], [cx + 60, 260], [cx + 60, 150]], fill);
          cv.path([[cx - 68, 64], [cx - 60, 70], [cx - 60, 260], [cx + 60, 260], [cx + 60, 70]]);
          if (fill) cv.line([cx - 60, 150], [cx + 60, 150], { w: 1 });
          [110, 150, 190, 230].forEach((y, i) => cv.line([cx - 60, y], [cx - (i % 2 ? 48 : 38), y], { w: 1 }));
        } },
        erlen: { name: "B\xECnh tam gi\xE1c", draw(cv, cx, fill) {
          erlenLiquid(cv, cx, 40, 260, 30, 160, 70, 190, fill);
          cv.path(erlenPts(cx, 40, 260, 30, 160, 70));
          cv.line([cx - 20, 40], [cx + 20, 40]);
          if (fill) cv.line([cx - erlenHalf(cx, 40, 260, 30, 160, 70, 190), 190], [cx + erlenHalf(cx, 40, 260, 30, 160, 70, 190), 190], { w: 1 });
        } },
        round: { name: "B\xECnh c\u1EA7u \u0111\xE1y tr\xF2n", draw(cv, cx, fill) {
          const c = [cx, 190], r = 80, a1 = Math.acos(15 / 80) * 180 / Math.PI;
          if (fill) fillPoly(cv, arcPts(c[0], c[1], r, r, 180 - Math.asin(20 / 80) * 180 / Math.PI + 0, 360 + Math.asin(20 / 80) * 180 / Math.PI, 28), fill);
          cv.path([[cx - 15, 40], ...arcPts(c[0], c[1], r, r, 180 - a1, 360 + a1, 40), [cx + 15, 40]]);
          cv.line([cx - 20, 40], [cx + 20, 40]);
          if (fill) {
            const dx = Math.sqrt(80 * 80 - 20 * 20);
            cv.line([cx - dx, 170], [cx + dx, 170], { w: 1 });
          }
        } },
        cylinder: { name: "\u1ED0ng \u0111ong", draw(cv, cx, fill) {
          if (fill) fillPoly(cv, [[cx - 25, 130], [cx - 25, 270], [cx + 25, 270], [cx + 25, 130]], fill);
          cv.path([[cx - 25, 30], [cx - 25, 270], [cx + 25, 270], [cx + 25, 30]]);
          cv.poly([[cx - 25, 270], [cx + 25, 270], [cx + 42, 288], [cx - 42, 288]], { fill: COLORS2.glass });
          for (let y = 60, i = 0; y <= 250; y += 20, i++) cv.line([cx - 25, y], [cx - (i % 2 ? 14 : 5), y], { w: 1 });
          cv.line([cx - 31, 30], [cx + 31, 30]);
        } },
        funnel: { name: "Ph\u1EC5u", draw(cv, cx, fill) {
          cv.path([[cx - 75, 60], [cx - 10, 190], [cx - 10, 270]]);
          cv.path([[cx + 75, 60], [cx + 10, 190], [cx + 10, 270]]);
          cv.line([cx - 75, 60], [cx + 75, 60]);
          if (fill) fillPoly(cv, [[cx - 62, 90], [cx - 6, 195], [cx + 6, 195], [cx + 62, 90]], fill);
        } },
        lamp: { name: "\u0110\xE8n c\u1ED3n", draw(cv, cx) {
          lamp(cv, cx, 280, 1.15);
        } }
      };
      EL = {
        H: { color: "#f4f4f4", r: 0.26, text: "#000" },
        C: { color: "#4a4f57", r: 0.36, text: "#fff" },
        O: { color: "#e5534b", r: 0.34, text: "#fff" },
        N: { color: "#4a6fd8", r: 0.34, text: "#fff" },
        Cl: { color: "#4cae5a", r: 0.44, text: "#fff" }
      };
      hex = (r, a0) => Array.from({ length: 6 }, (_x, i) => [r * Math.cos(rad(a0 + 60 * i)), r * Math.sin(rad(a0 + 60 * i))]);
      MOLECULES = {
        h2o: { name: "N\u01B0\u1EDBc H\u2082O", f: "H_2O", atoms: [["O", 0, 0], ["H", -0.79, 0.61], ["H", 0.79, 0.61]], bonds: [[0, 1, 1], [0, 2, 1]] },
        co2: { name: "Cacbon \u0111ioxit CO\u2082", f: "CO_2", atoms: [["O", -1.2, 0], ["C", 0, 0], ["O", 1.2, 0]], bonds: [[0, 1, 2], [1, 2, 2]] },
        nh3: { name: "Amoniac NH\u2083", f: "NH_3", atoms: [["N", 0, 0], ["H", 0, -1], ["H", -0.87, 0.5], ["H", 0.87, 0.5]], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1]] },
        ch4: { name: "Metan CH\u2084", f: "CH_4", atoms: [["C", 0, 0], ["H", 0, -1], ["H", 0, 1], ["H", -1, 0], ["H", 1, 0]], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]] },
        c2h6: { name: "Etan C\u2082H\u2086", f: "C_2H_6", atoms: [["C", -0.75, 0], ["C", 0.75, 0], ["H", -0.75, -1], ["H", -0.75, 1], ["H", -1.75, 0], ["H", 0.75, -1], ["H", 0.75, 1], ["H", 1.75, 0]], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [1, 5, 1], [1, 6, 1], [1, 7, 1]] },
        c2h4: { name: "Etilen C\u2082H\u2084", f: "C_2H_4", atoms: [["C", -0.7, 0], ["C", 0.7, 0], ["H", -1.3, -0.85], ["H", -1.3, 0.85], ["H", 1.3, -0.85], ["H", 1.3, 0.85]], bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]] },
        c2h2: { name: "Axetilen C\u2082H\u2082", f: "C_2H_2", atoms: [["H", -1.9, 0], ["C", -0.65, 0], ["C", 0.65, 0], ["H", 1.9, 0]], bonds: [[0, 1, 1], [1, 2, 3], [2, 3, 1]] },
        c2h5oh: { name: "Etanol C\u2082H\u2085OH", f: "C_2H_5OH", atoms: [["C", -1.3, 0.1], ["C", 0, -0.1], ["O", 1.3, 0.1], ["H", 2.1, 0.7], ["H", -1.3, -0.95], ["H", -1.3, 1.15], ["H", -2.25, 0.1], ["H", 0, -1.15], ["H", 0, 0.95]], bonds: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [1, 7, 1], [1, 8, 1]] },
        c6h6: __spreadValues({ name: "Benzen C\u2086H\u2086", f: "C_6H_6" }, benzene()),
        hcl: { name: "Hi\u0111ro clorua HCl", f: "HCl", atoms: [["H", -0.75, 0], ["Cl", 0.75, 0]], bonds: [[0, 1, 1]] },
        o2: { name: "Oxi O\u2082", f: "O_2", atoms: [["O", -0.6, 0], ["O", 0.6, 0]], bonds: [[0, 1, 2]] },
        n2: { name: "Nit\u01A1 N\u2082", f: "N_2", atoms: [["N", -0.6, 0], ["N", 0.6, 0]], bonds: [[0, 1, 3]] },
        h2: { name: "Hi\u0111ro H\u2082", f: "H_2", atoms: [["H", -0.5, 0], ["H", 0.5, 0]], bonds: [[0, 1, 1]] }
      };
      chemTex = (f) => f.replace(/([A-Za-z]+)|_(\d+)/g, (_m, el, n) => el ? `\\text{${el}}` : `_{${n}}`);
      MOLECULE_CHOICES = Object.entries(MOLECULES).map(([k, m]) => [k, m.name]);
      MIRROR = { CH_3: "H_3C", OH: "HO", NH_2: "H_2N", NO_2: "O_2N", COOH: "HOOC", CHO: "OHC" };
      ringOf = (subs, extra = {}) => __spreadValues({ rings: [{ c: [0, 0], a0: -90 }], subs }, extra);
      AROMATICS = {
        benzene: __spreadValues({ name: "Benzen", f: "C_6H_6" }, ringOf({})),
        toluene: __spreadValues({ name: "Toluen", f: "C_6H_5CH_3" }, ringOf({ 0: "CH_3" })),
        ethylbenzene: __spreadValues({ name: "Etylbenzen", f: "C_6H_5C_2H_5" }, ringOf({ 0: { chain: [[-90, 1], [-30, 1]] } })),
        styrene: __spreadValues({ name: "Stiren", f: "C_6H_5CH=CH_2" }, ringOf({ 0: { chain: [[-90, 1], [-30, 2]] } })),
        phenol: __spreadValues({ name: "Phenol", f: "C_6H_5OH" }, ringOf({ 0: "OH" })),
        aniline: __spreadValues({ name: "Anilin", f: "C_6H_5NH_2" }, ringOf({ 0: "NH_2" })),
        chlorobenzene: __spreadValues({ name: "Clobenzen", f: "C_6H_5Cl" }, ringOf({ 0: "Cl" })),
        bromobenzene: __spreadValues({ name: "Brombenzen", f: "C_6H_5Br" }, ringOf({ 0: "Br" })),
        nitrobenzene: __spreadValues({ name: "Nitrobenzen", f: "C_6H_5NO_2" }, ringOf({ 0: "NO_2" })),
        benzaldehyde: __spreadValues({ name: "Benzan\u0111ehit", f: "C_6H_5CHO" }, ringOf({ 0: "CHO" })),
        benzoic: __spreadValues({ name: "Axit benzoic", f: "C_6H_5COOH" }, ringOf({ 0: "COOH" })),
        o_xylene: __spreadValues({ name: "o-Xilen", f: "C_6H_4(CH_3)_2" }, ringOf({ 0: "CH_3", 1: "CH_3" })),
        m_xylene: __spreadValues({ name: "m-Xilen", f: "C_6H_4(CH_3)_2" }, ringOf({ 0: "CH_3", 2: "CH_3" })),
        p_xylene: __spreadValues({ name: "p-Xilen", f: "C_6H_4(CH_3)_2" }, ringOf({ 0: "CH_3", 3: "CH_3" })),
        o_cresol: __spreadValues({ name: "o-Crezol", f: "CH_3C_6H_4OH" }, ringOf({ 0: "OH", 1: "CH_3" })),
        m_cresol: __spreadValues({ name: "m-Crezol", f: "CH_3C_6H_4OH" }, ringOf({ 0: "OH", 2: "CH_3" })),
        p_cresol: __spreadValues({ name: "p-Crezol", f: "CH_3C_6H_4OH" }, ringOf({ 0: "OH", 3: "CH_3" })),
        tnt: __spreadValues({ name: "2,4,6-Trinitrotoluen (TNT)", f: "C_6H_2(NO_2)_3CH_3" }, ringOf({ 0: "CH_3", 1: "NO_2", 3: "NO_2", 5: "NO_2" })),
        picric: __spreadValues({ name: "Axit picric (2,4,6-trinitrophenol)", f: "C_6H_2(NO_2)_3OH" }, ringOf({ 0: "OH", 1: "NO_2", 3: "NO_2", 5: "NO_2" })),
        tribromophenol: __spreadValues({ name: "2,4,6-Tribromphenol", f: "C_6H_2Br_3OH" }, ringOf({ 0: "OH", 1: "Br", 3: "Br", 5: "Br" })),
        biphenyl: { name: "Biphenyl", f: "C_6H_5-C_6H_5", rings: [{ c: [-1.5, 0], a0: 0 }, { c: [1.5, 0], a0: 0 }], subs: {}, link: [[0, 0], [1, 3]] },
        naphthalene: { name: "Naphtalen", f: "C_{10}H_8", fused: true, subs: {} }
      };
      AROMATIC_CHOICES = Object.entries(AROMATICS).map(([k, m]) => [k, m.name]);
      ELEMENTS = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca"];
      VN = ["Hi\u0111ro", "Heli", "Liti", "Beri", "Bo", "Cacbon", "Nit\u01A1", "Oxi", "Flo", "Neon", "Natri", "Magie", "Nh\xF4m", "Silic", "Photpho", "L\u01B0u hu\u1EF3nh", "Clo", "Agon", "Kali", "Canxi"];
      ELEMENT_CHOICES = ELEMENTS.map((s, i) => [String(i + 1), `${i + 1} \u2013 ${VN[i]} (${s})`]);
      shells = (z) => {
        const out = [];
        for (const cap of [2, 8, 8, 2]) {
          if (z <= 0) break;
          const n = Math.min(cap, z);
          out.push(n);
          z -= n;
        }
        return out;
      };
      CHEMISTRY = [
        {
          id: "labware",
          label: "D\u1EE5ng c\u1EE5 th\xED nghi\u1EC7m (m\u1ED9t d\u1EE5ng c\u1EE5)",
          make: labware,
          names: "",
          namesLabel: "T\xEAn ghi d\u01B0\u1EDBi h\xECnh (b\u1ECF tr\u1ED1ng = t\xEAn m\u1EB7c \u0111\u1ECBnh)",
          options: [["kind", "D\u1EE5ng c\u1EE5", Object.entries(WARE).map(([k, v]) => [k, v.name])], ["liquid", "Ch\u1EA5t l\u1ECFng", LIQ], ["showName", "Ghi t\xEAn d\u1EE5ng c\u1EE5"]]
        },
        {
          id: "setup",
          label: "B\u1ED9 d\u1EE5ng c\u1EE5 th\xED nghi\u1EC7m",
          make: setup,
          names: "",
          options: [["kind", "Th\xED nghi\u1EC7m", [["gaswater", "\u0110i\u1EC1u ch\u1EBF kh\xED, thu b\u1EB1ng \u0111\u1EA9y n\u01B0\u1EDBc"], ["gasair", "\u0110i\u1EC1u ch\u1EBF kh\xED, thu b\u1EB1ng \u0111\u1EA9y kh\xF4ng kh\xED"], ["filter", "L\u1ECDc"], ["distill", "Ch\u01B0ng c\u1EA5t"]]], ["collect", "Thu kh\xED (\u0111\u1EA9y kh\xF4ng kh\xED)", [["up", "Ng\u1EEDa b\xECnh (kh\xED n\u1EB7ng h\u01A1n kh\xF4ng kh\xED)"], ["down", "\xDAp b\xECnh (kh\xED nh\u1EB9 h\u01A1n kh\xF4ng kh\xED)"]]], ["showName", "Ghi t\xEAn c\xE1c d\u1EE5ng c\u1EE5"]]
        },
        {
          id: "molecule",
          label: "S\u01A1 \u0111\u1ED3 ph\xE2n t\u1EED",
          make: molecule,
          names: "",
          options: [["kind", "Ph\xE2n t\u1EED", MOLECULE_CHOICES], ["style", "Ki\u1EC3u", [["structural", "C\xF4ng th\u1EE9c c\u1EA5u t\u1EA1o"], ["ball", "M\xF4 h\xECnh qu\u1EA3 c\u1EA7u \u2013 que"]]], ["showName", "Ghi c\xF4ng th\u1EE9c"]]
        },
        {
          id: "aromatic",
          label: "H\u1EE3p ch\u1EA5t th\u01A1m (v\xF2ng benzen)",
          make: aromatic,
          names: "",
          options: [["kind", "Ch\u1EA5t", AROMATIC_CHOICES], ["style", "Ki\u1EC3u v\xF2ng", [["kekule", "Kekul\xE9 (3 li\xEAn k\u1EBFt \u0111\xF4i)"], ["circle", "V\xF2ng tr\xF2n (h\u1EC7 th\u01A1m)"]]], ["showName", "Ghi t\xEAn v\xE0 c\xF4ng th\u1EE9c"]]
        },
        {
          id: "atom",
          label: "M\xF4 h\xECnh nguy\xEAn t\u1EED (Bo)",
          make: atomModel,
          names: "",
          options: [["z", "Nguy\xEAn t\u1ED1 (Z = 1\u201320)", ELEMENT_CHOICES], ["showName", "Ghi k\xED hi\u1EC7u v\xE0 s\u1ED1 electron m\u1ED7i l\u1EDBp"]]
        }
      ];
    }
  });

  // src/figures/physics.js
  function vec(cv, from, to, latex, o = {}) {
    cv.arrow(from, to, { w: o.w || 2.2, color: o.color || "#c62828", dash: o.dash });
    if (latex) {
      const d = unit2(sub2(to, from));
      cv.label(latex, add2(to, add2(mul2(d, o.dist || 13), o.nudge || [0, 0])), { size: o.size || 16 });
    }
  }
  function hatch(cv, x1, x2, y, down = true) {
    cv.line([x1, y], [x2, y], { w: 2.5 });
    for (let x = x1 + 8; x <= x2; x += 10) cv.line([x, y], [x - 8, y + (down ? 9 : -9)], { w: 1 });
  }
  function pendulum(o = {}) {
    const cv = new Canvas2(), W = 460, H = 370, O = P2(170, 40), L = 230, a = clamp(o.angle, 5, 60, 30);
    const B = P2(O[0] + L * Math.sin(rad(a)), O[1] + L * Math.cos(rad(a)));
    hatch(cv, 90, 250, O[1], false);
    cv.line(O, [O[0], O[1] + L + 36], { dash: "6 4", w: 1.1, color: "#666" });
    cv.line(O, B, { w: 1.8 });
    cv.path(arcPts(O[0], O[1], 70, 70, 270, 270 + a, 14), { w: 1.2 });
    cv.label("\\alpha", [O[0] + 92 * Math.sin(rad(a / 2)), O[1] + 92 * Math.cos(rad(a / 2))], { size: 16 });
    if (o.showL !== false) cv.label("\\ell", mid2(O, B), { size: 16, halo: true, anchor: "c" });
    cv.circle(B, 17, { fill: COLORS2.metal, w: 1.8 });
    cv.dot(O, 3);
    const u = [Math.sin(rad(a)), Math.cos(rad(a))], t = [-Math.cos(rad(a)), Math.sin(rad(a))];
    if (o.forces !== false) {
      vec(cv, B, add2(B, [0, 85]), "\\vec{P}");
      vec(cv, B, sub2(B, mul2(u, 95)), "\\vec{T}", { color: "#1565c0" });
    }
    if (o.components) {
      const pn = mul2(u, 85 * Math.cos(rad(a))), pt = mul2(t, 85 * Math.sin(rad(a))), tip = add2(B, [0, 85]);
      cv.line(tip, add2(B, pn), { dash: "4 3", w: 1, color: "#777" });
      cv.line(tip, add2(B, pt), { dash: "4 3", w: 1, color: "#777" });
      vec(cv, B, add2(B, pn), "\\vec{P}_{n}", { color: "#2e7d32", w: 1.8, dist: 11 });
      vec(cv, B, add2(B, pt), "\\vec{P}_{t}", { color: "#2e7d32", w: 1.8, dist: 11 });
    }
    return frame2(cv, W, H);
  }
  function springPendulum(o = {}) {
    const cv = new Canvas2();
    const shifted = o.displaced !== false;
    if (o.kind === "vertical") {
      const W2 = 440, H2 = 400, top = 190 + (shifted ? 50 : 0), cx = 200;
      hatch(cv, 120, 280, 30, false);
      cv.path(coil([cx, 30], [cx, top], 10, 14));
      blockBox(cv, cx - 38, top, 76, 62);
      cv.text("m", [cx, top + 31], { size: 16 });
      cv.line([cx - 90, 190 + 31], [cx + 90, 190 + 31], { dash: "6 4", w: 1, color: "#666" });
      cv.label("O", [cx - 105, 221], { size: 15 });
      cv.arrow([380, 221], [380, 360], { w: 1.4 });
      cv.label("x", [394, 356], { size: 15 });
      if (o.forces !== false) {
        vec(cv, [cx, top + 62], [cx, top + 62 + 70], "\\vec{P}");
        vec(cv, [cx + 38, top], [cx + 38, top - 70], "\\vec{F}_{\\text{\u0111h}}", { color: "#1565c0" });
      }
      return frame2(cv, W2, H2);
    }
    const W = 480, H = 250, floor = 190, x0 = 235, dx = shifted ? 45 : 0, bw = 76, bh = 60;
    hatch(cv, 40, 470, floor, true);
    cv.line([40, 60], [40, floor], { w: 2.5 });
    for (let y = 70; y < floor; y += 10) cv.line([40, y], [30, y + 8], { w: 1 });
    const bx = x0 + dx;
    cv.path(coil([40, floor - bh / 2], [bx, floor - bh / 2], 9, 12));
    blockBox(cv, bx, floor - bh, bw, bh);
    cv.text("m", [bx + bw / 2, floor - bh / 2], { size: 16 });
    const eq = x0 + bw / 2;
    cv.line([eq, floor - bh - 25], [eq, floor + 40], { dash: "6 4", w: 1, color: "#666" });
    cv.label("O", [eq, floor + 56], { size: 15 });
    cv.arrow([eq, floor + 30], [440, floor + 30], { w: 1.4 });
    cv.label("x", [452, floor + 34], { size: 15 });
    if (shifted) {
      const cxp = bx + bw / 2;
      cv.line([cxp, floor - bh - 8], [cxp, floor + 40], { dash: "3 3", w: 1, color: "#999" });
    }
    if (o.forces !== false) {
      const G2 = [bx + bw / 2, floor - bh - 22];
      if (shifted) vec(cv, G2, [G2[0] - 78, G2[1]], "\\vec{F}_{\\text{\u0111h}}", { color: "#1565c0", dist: 16 });
    }
    return frame2(cv, W, H);
  }
  function incline(o = {}) {
    const cv = new Canvas2(), W = 470, H = 340, a = clamp(o.angle, 10, 60, 30), L = Math.min(330, 240 / Math.sin(rad(a)));
    const A = P2(40, 300), B = P2(40 + L * Math.cos(rad(a)), 300), C = P2(B[0], 300 - L * Math.sin(rad(a)));
    cv.line(A, B, { w: 2.4 });
    cv.line(B, C, { w: 1.6 });
    cv.line(A, C, { w: 2.6 });
    cv.path([[B[0] - 12, B[1]], [B[0] - 12, B[1] - 12], [B[0], B[1] - 12]], { w: 1 });
    cv.path(arcPts(A[0], A[1], 52, 52, 0, a, 12), { w: 1.2 });
    cv.label("\\alpha", [A[0] + 72 * Math.cos(rad(a / 2)), A[1] - 72 * Math.sin(rad(a / 2))], { size: 16 });
    for (let s = 14; s < L; s += 14) {
      const p2 = add2(A, mul2([Math.cos(rad(a)), -Math.sin(rad(a))], s));
      cv.line(p2, add2(p2, [-6, 8]), { w: 0.9, color: "#777" });
    }
    const u = [Math.cos(rad(a)), -Math.sin(rad(a))], n = [-Math.sin(rad(a)), -Math.cos(rad(a))], w = 78, h = 48, s0 = L * 0.52;
    const P0 = add2(A, mul2(u, s0)), c1 = sub2(P0, mul2(u, w / 2)), c2 = add2(P0, mul2(u, w / 2));
    cv.poly([c1, c2, add2(c2, mul2(n, h)), add2(c1, mul2(n, h))], { fill: COLORS2.wood, w: 1.7 });
    const G2 = add2(P0, mul2(n, h / 2));
    cv.dot(G2, 2.8);
    const k = 88;
    if (o.forces !== false) {
      vec(cv, G2, add2(G2, [0, k]), "\\vec{P}");
      vec(cv, G2, add2(G2, mul2(n, k * 0.9)), "\\vec{N}", { color: "#1565c0" });
      if (o.friction) vec(cv, G2, add2(G2, mul2(u, k * 0.6)), "\\vec{F}_{ms}", { color: "#2e7d32" });
    }
    if (o.components) {
      const px = mul2(u, -k * Math.sin(rad(a))), py = mul2(n, -k * Math.cos(rad(a))), tip = add2(G2, [0, k]);
      cv.line(tip, add2(G2, px), { dash: "4 3", w: 1, color: "#777" });
      cv.line(tip, add2(G2, py), { dash: "4 3", w: 1, color: "#777" });
      vec(cv, G2, add2(G2, px), "\\vec{P}_{x}", { color: "#6a1b9a", w: 1.8, dist: 11 });
      vec(cv, G2, add2(G2, py), "\\vec{P}_{y}", { color: "#6a1b9a", w: 1.8, dist: 11 });
    }
    return frame2(cv, W, H);
  }
  function flatForces(o = {}) {
    const cv = new Canvas2(), W = 440, H = 300, floor = 215, bx = 170, bw = 100, bh = 64, G2 = [bx + bw / 2, floor - bh / 2];
    hatch(cv, 40, 400, floor, true);
    blockBox(cv, bx, floor - bh, bw, bh);
    cv.dot(G2, 2.8);
    vec(cv, G2, [G2[0], G2[1] + 80], "\\vec{P}");
    vec(cv, G2, [G2[0], G2[1] - 80], "\\vec{N}", { color: "#1565c0" });
    if (o.pull !== false) {
      const th = rad(clamp(o.angle, 0, 70, 30)), F = 105;
      vec(cv, G2, add2(G2, [F * Math.cos(th), -F * Math.sin(th)]), "\\vec{F}", { color: "#2e7d32" });
      if (th > 0.05) {
        cv.path(arcPts(G2[0], G2[1], 55, 55, 0, th * 180 / Math.PI, 8), { w: 1.1 });
        cv.label("\\alpha", [G2[0] + 72 * Math.cos(th / 2), G2[1] - 72 * Math.sin(th / 2) + 2], { size: 14 });
      }
    }
    if (o.friction !== false) vec(cv, [bx, floor - 14], [bx - 70, floor - 14], "\\vec{F}_{ms}", { color: "#6a1b9a" });
    return frame2(cv, W, H);
  }
  function weightKnob(cv, cx, y, k, text) {
    const X = (dx) => cx + dx * k, Y = (dy) => y + dy * k;
    cv.poly([[X(-36), Y(70)], [X(36), Y(70)], [X(28), Y(0)], [X(-28), Y(0)]], { fill: COLORS2.metal, w: 1.7 });
    cv.rect(X(-11), Y(-18), 22 * k, 18 * k, { fill: COLORS2.metal, w: 1.7 });
    cv.ellipse(cx, Y(-19), 11 * k, 4 * k, { fill: "#b9c2cc", w: 1.4 });
    cv.text(text, [cx, Y(38)], { size: 14 });
  }
  function weightHooked(cv, cx, y, text) {
    cv.rect(cx - 32, y, 64, 74, { fill: COLORS2.metal, w: 1.7 });
    cv.line([cx - 32, y + 14], [cx + 32, y + 14], { w: 1.2 });
    cv.line([cx, y], [cx, y - 18], { w: 2 });
    cv.circle([cx, y - 28], 10, { w: 2 });
    cv.text(text, [cx, y + 44], { size: 14 });
  }
  function weights(o = {}) {
    const cv = new Canvas2();
    if (o.kind === "set") {
      const m2 = list2(o.mass, ["50 g", "100 g", "200 g"]);
      const W = 140 * m2.length + 40, H = 210;
      m2.forEach((t, i) => weightKnob(cv, 90 + 140 * i, 70, 0.8 + 0.18 * i, t));
      cv.line([20, 168], [W - 20, 168], { w: 2 });
      return frame2(cv, W, H);
    }
    const m = list2(o.mass, ["100 g"])[0];
    if (o.kind === "hooked") {
      weightHooked(cv, 120, 60, m);
      return frame2(cv, 240, 170);
    }
    weightKnob(cv, 120, 60, 1.1, m);
    return frame2(cv, 240, 170);
  }
  function wheel(cv, c, r = 12) {
    cv.circle(c, r, { fill: "#555", w: 1.6 });
    cv.dot(c, 2.4, "#ddd");
  }
  function cart(o = {}) {
    const cv = new Canvas2();
    if (o.kind === "pulley") {
      const W2 = 440, H2 = 290, top2 = 170, cx2 = 150, cw2 = 120, ch2 = 38;
      cv.line([30, top2], [345, top2], { w: 2.5 });
      cv.line([345, top2], [345, top2 + 60], { w: 2 });
      for (let y = top2 + 12; y < top2 + 60; y += 10) cv.line([345, y], [354, y - 8], { w: 1 });
      for (let x = 40; x < 345; x += 12) cv.line([x, top2], [x - 8, top2 + 9], { w: 1 });
      blockBox(cv, cx2, top2 - 22 - ch2, cw2, ch2, "#8fb6de");
      wheel(cv, [cx2 + 24, top2 - 11]);
      wheel(cv, [cx2 + cw2 - 24, top2 - 11]);
      cv.text("M", [cx2 + cw2 / 2, top2 - 22 - ch2 / 2], { size: 17 });
      const sy = top2 - 22 - ch2 / 2, pc = [362, sy + 14];
      cv.line([345, top2], [pc[0], pc[1] + 6], { w: 1.6 });
      cv.circle(pc, 14, { fill: "#e8edf3", w: 1.8 });
      cv.dot(pc, 2.4);
      cv.path([[cx2 + cw2, sy], [pc[0], sy], ...arcPts(pc[0], pc[1], 14, 14, 90, 0, 8), [pc[0] + 14, pc[1] + 100]], { w: 1.4 });
      blockBox(cv, pc[0] - 20, pc[1] + 100, 40, 40, COLORS2.metal);
      cv.text("m", [pc[0], pc[1] + 120], { size: 16 });
      if (o.forces) {
        vec(cv, [cx2 + cw2, sy], [cx2 + cw2 + 46, sy], "\\vec{T}", { color: "#1565c0", dist: 12 });
        vec(cv, [pc[0] + 14, pc[1] + 100], [pc[0] + 14, pc[1] + 60], "\\vec{T}", { color: "#1565c0", dist: 12 });
      }
      return frame2(cv, W2, H2);
    }
    const W = 400, H = 220, top = 150, cx = 120, cw = 150, ch = 44;
    cv.line([30, top], [370, top], { w: 2.5 });
    for (let x = 40; x < 370; x += 12) cv.line([x, top], [x - 8, top + 9], { w: 1 });
    blockBox(cv, cx, top - 24 - ch, cw, ch, "#8fb6de");
    wheel(cv, [cx + 30, top - 12], 12);
    wheel(cv, [cx + cw - 30, top - 12], 12);
    cv.text("xe l\u0103n", [cx + cw / 2, top - 24 - ch / 2], { size: 15 });
    if (o.forces) {
      const G2 = [cx + cw / 2, top - 24 - ch / 2];
      vec(cv, [cx + cw, G2[1]], [cx + cw + 70, G2[1]], "\\vec{F}", { color: "#2e7d32" });
      vec(cv, [cx, G2[1]], [cx - 55, G2[1]], "\\vec{F}_{ms}", { color: "#6a1b9a" });
      cv.arrow([cx + 20, top - 24 - ch - 20], [cx + 100, top - 24 - ch - 20], { w: 1.6 });
      cv.label("\\vec{v}", [cx + 120, top - 24 - ch - 20], { size: 16 });
    }
    return frame2(cv, W, H);
  }
  function pulleys(o = {}) {
    const cv = new Canvas2(), kind = o.kind || "fixed", W = 380, H = 330;
    const pulley = (c2, r = 28) => {
      cv.circle(c2, r, { fill: "#e8edf3", w: 2 });
      cv.circle(c2, r - 7, { w: 1 });
      cv.dot(c2, 3);
    };
    if (kind === "movable") {
      hatch(cv, 100, 190, 30, false);
      const c2 = [200, 160];
      cv.line([172, 30], [172, c2[1]], { w: 1.8 });
      pulley(c2);
      cv.path([[172, c2[1]], ...arcPts(c2[0], c2[1], 28, 28, 180, 360, 14), [228, 40]], { w: 1.8 });
      vec(cv, [228, 90], [228, 52], "\\vec{F}", { color: "#2e7d32" });
      cv.line(c2, [200, 240], { w: 1.8 });
      blockBox(cv, 170, 240, 60, 52, COLORS2.metal);
      cv.text("P", [200, 266], { size: 16 });
      return frame2(cv, W, H);
    }
    hatch(cv, 110, 290, 30, false);
    const c = [200, 100];
    cv.line([200, 30], c, { w: 2 });
    pulley(c);
    if (kind === "atwood") {
      cv.line([172, c[1]], [172, 210], { w: 1.8 });
      cv.line([228, c[1]], [228, 190], { w: 1.8 });
      cv.path(arcPts(c[0], c[1], 28, 28, 0, 180, 14), { w: 1.8 });
      blockBox(cv, 145, 210, 54, 60, COLORS2.metal);
      cv.label("m_1", [172, 240], { size: 16 });
      blockBox(cv, 205, 190, 46, 46, "#b9c2cc");
      cv.label("m_2", [228, 213], { size: 16 });
      if (o.forces) {
        vec(cv, [172, 210], [172, 160], "\\vec{T}", { color: "#1565c0", dist: 12 });
      }
      return frame2(cv, W, H);
    }
    cv.path([[172, 240], [172, c[1]], ...arcPts(c[0], c[1], 28, 28, 180, 0, 14), [228, 200]], { w: 1.8 });
    blockBox(cv, 144, 240, 56, 56, COLORS2.metal);
    cv.text("P", [172, 268], { size: 16 });
    vec(cv, [228, 170], [228, 240], "\\vec{F}", { color: "#2e7d32" });
    return frame2(cv, W, H);
  }
  function lever(o = {}) {
    const cv = new Canvas2(), W = 500, H = 340, y = 150, xl = 60, xr = 440;
    const d1 = clamp(o.d1, 1, 20, 2), d2 = clamp(o.d2, 1, 20, 1), xf = xl + (xr - xl) * d1 / (d1 + d2);
    cv.poly([[xf, y + 4], [xf - 28, y + 58], [xf + 28, y + 58]], { fill: "#d5d9df", w: 1.8 });
    hatch(cv, xf - 60, xf + 60, y + 58, true);
    cv.line([xl - 20, y], [xr + 20, y], { w: 6, color: "#7a5a38" });
    cv.dot([xf, y], 3.4);
    cv.label("O", [xf, y - 18], { size: 15 });
    vec(cv, [xl, y + 8], [xl, y + 80], "\\vec{F}_1");
    vec(cv, [xr, y + 8], [xr, y + 80], "\\vec{F}_2");
    if (o.weights) {
      blockBox(cv, xl - 30, y + 125, 60, 46, COLORS2.metal);
      cv.label("m_1", [xl, y + 148], { size: 15 });
      blockBox(cv, xr - 22, y + 125, 44, 46, "#b9c2cc");
      cv.label("m_2", [xr, y + 148], { size: 15 });
      cv.line([xl, y + 80], [xl, y + 125], { w: 1.4 });
      cv.line([xr, y + 80], [xr, y + 125], { w: 1.4 });
    }
    if (o.arms !== false) {
      const ya = y - 48;
      [[xl, xf, "d_1"], [xf, xr, "d_2"]].forEach(([a, b, t]) => {
        cv.arrow([(a + b) / 2, ya], [a, ya], { w: 1.2, color: "#333" });
        cv.arrow([(a + b) / 2, ya], [b, ya], { w: 1.2, color: "#333" });
        cv.line([a, ya - 8], [a, y - 4], { w: 0.9, dash: "3 3", color: "#888" });
        cv.line([b, ya - 8], [b, y - 4], { w: 0.9, dash: "3 3", color: "#888" });
        cv.label(t, [(a + b) / 2, ya - 14], { size: 15 });
      });
    }
    return frame2(cv, W, H);
  }
  function circuit(o = {}) {
    const cv = new Canvas2(), W = 460, H = 290, T = 50, B = 245, Lx = 60, Rx = 400, resistor = o.load === "resistor";
    const wire = (...pts) => cv.path(pts, { w: 1.8 });
    const bulbH = (c, name) => {
      if (resistor) {
        cv.rect(c[0] - 24, c[1] - 10, 48, 20, { fill: "#fff", w: 1.8 });
      } else {
        cv.circle(c, 18, { fill: "#fff", w: 1.8 });
        const d = 18 * 0.707;
        cv.line([c[0] - d, c[1] - d], [c[0] + d, c[1] + d], { w: 1.6 });
        cv.line([c[0] - d, c[1] + d], [c[0] + d, c[1] - d], { w: 1.6 });
      }
      cv.label(name, [c[0], c[1] - 32], { size: 15 });
    };
    const bulbV = (c, name) => {
      if (resistor) {
        cv.rect(c[0] - 10, c[1] - 24, 20, 48, { fill: "#fff", w: 1.8 });
      } else {
        cv.circle(c, 18, { fill: "#fff", w: 1.8 });
        const d = 18 * 0.707;
        cv.line([c[0] - d, c[1] - d], [c[0] + d, c[1] + d], { w: 1.6 });
        cv.line([c[0] - d, c[1] + d], [c[0] + d, c[1] - d], { w: 1.6 });
      }
      cv.label(name, [c[0] + 34, c[1]], { size: 15 });
    };
    const meter = (c, t) => {
      cv.circle(c, 16, { fill: "#fff", w: 1.8 });
      cv.label(`\\text{${t}}`, c, { size: 15 });
    };
    const my = (T + B) / 2;
    wire([Lx, T], [Lx, my - 12]);
    wire([Lx, my + 12], [Lx, B]);
    cv.line([Lx - 18, my - 12], [Lx + 18, my - 12], { w: 2 });
    cv.line([Lx - 10, my + 12], [Lx + 10, my + 12], { w: 4 });
    cv.label("+", [Lx + 30, my - 18], { size: 15 });
    cv.label("-", [Lx + 30, my + 18], { size: 15 });
    const sx = 130, closed = o.closed !== false;
    wire([Lx, T], [sx, T]);
    cv.dot([sx, T], 3);
    cv.dot([sx + 44, T], 3);
    cv.line([sx, T], closed ? [sx + 44, T] : [sx + 40, T - 22], { w: 2 });
    const named = (i) => resistor ? `R_{${i}}` : `\\text{\u0110}_{${i}}`;
    if (o.kind === "parallel") {
      wire([sx + 44, T], [Rx, T]);
      wire([Lx, B], [Rx, B]);
      wire([Rx, T], [Rx, B]);
      [[260, 1], [340, 2]].forEach(([x, i]) => {
        cv.dot([x, T], 3);
        cv.dot([x, B], 3);
        wire([x, T], [x, 110 - (resistor ? 24 : 18)]);
        wire([x, 110 + (resistor ? 24 : 18)], [x, B]);
        bulbV([x, 110], named(i));
      });
      if (o.ammeter) {
        cv.circle([Lx + 90, B], 16, { fill: "#fff", w: 1.8 });
        cv.label("\\text{A}", [Lx + 90, B], { size: 15 });
      }
      return frame2(cv, W, H);
    }
    const lx = 270, half = resistor ? 24 : 18;
    wire([sx + 44, T], [lx - half, T]);
    wire([lx + half, T], [Rx, T]);
    bulbH([lx, T], named(1));
    wire([Rx, T], [Rx, B]);
    wire([Lx, B], [Rx, B]);
    if (o.ammeter) {
      wire([Lx, B], [Lx, B]);
      cv.circle([220, B], 16, { fill: "#fff", w: 1.8 });
      cv.label("\\text{A}", [220, B], { size: 15 });
    }
    if (o.voltmeter) {
      const vx1 = lx - half - 14, vx2 = lx + half + 14, vy = 120;
      cv.dot([vx1, T], 3);
      cv.dot([vx2, T], 3);
      wire([vx1, T], [vx1, vy], [lx - 16, vy]);
      wire([lx + 16, vy], [vx2, vy], [vx2, T]);
      meter([lx, vy], "V");
    }
    return frame2(cv, W, H);
  }
  function lens(o = {}) {
    const diverging = o.kind === "diverging", d = clamp(o.d, 1, 200, 30), F = clamp(o.f, 1, 200, 10), f = diverging ? -F : F, h = clamp(o.h, 0.5, 20, 3);
    const di = imageDistance(d, f), cv = new Canvas2(), W = 660, H = 340, x0 = 330, y0 = 170;
    const s = Math.min(28, 290 / Math.max(d, Math.abs(di), 2 * F, 1));
    const hP = Math.min(h * s, 100), D = d * s, Fx = f * s, xEnd = W - 14;
    const T = [x0 - D, y0 - hP], hiMath = -hP * di / d, I = [x0 + di * s, y0 - hiMath], virtual = di < 0;
    cv.arrow([14, y0], [W - 8, y0], { w: 1.3, color: "#444" });
    cv.line([x0, y0 - 118], [x0, y0 + 118], { w: 2.2, color: "#1565c0" });
    const tipHead = (y, dir) => cv.poly([[x0, y], [x0 - 8, y + dir * 13], [x0 + 8, y + dir * 13]], { fill: "#1565c0", color: "#1565c0", w: 1 });
    if (diverging) {
      tipHead(y0 - 118, -1);
      tipHead(y0 + 118, 1);
      cv.line([x0 - 10, y0 - 118], [x0 + 10, y0 - 118], { w: 2, color: "#1565c0" });
      cv.line([x0 - 10, y0 + 118], [x0 + 10, y0 + 118], { w: 2, color: "#1565c0" });
    } else {
      tipHead(y0 - 118, 1);
      tipHead(y0 + 118, -1);
    }
    [[x0 - Math.abs(Fx), "F"], [x0 + Math.abs(Fx), "F'"]].forEach(([x, t]) => {
      cv.line([x, y0 - 5], [x, y0 + 5], { w: 1.6 });
      cv.label(t, [x, y0 + 20], { size: 15 });
    });
    cv.label("O", [x0 + 11, y0 + 18], { size: 15 });
    cv.arrow([T[0], y0], T, { w: 2.4, color: "#222" });
    cv.label("A", [T[0], y0 + 16], { size: 15 });
    cv.label("B", [T[0], T[1] - 13], { size: 15 });
    if (o.rays !== false) {
      const col = "#c62828", sg = Math.sign(f);
      const ext = (p2, dir) => {
        const t = (xEnd - p2[0]) / dir[0];
        return [xEnd, p2[1] + dir[1] * t];
      };
      const r1 = [x0, y0 - hP], d1 = [sg * Fx, sg * hP];
      const y3 = y0 + hP * Fx / (D - Fx), r3 = [x0, y3];
      const d2 = [D, hP];
      cv.line(T, r1, { w: 1.5, color: col });
      cv.line(r1, ext(r1, d1), { w: 1.5, color: col });
      cv.line(T, [x0, y0], { w: 1.5, color: col });
      cv.line([x0, y0], ext([x0, y0], d2), { w: 1.5, color: col });
      cv.line(T, r3, { w: 1.5, color: col });
      cv.line(r3, [xEnd, y3], { w: 1.5, color: col });
      if (virtual) [r1, [x0, y0], r3].forEach((p2) => cv.line(p2, I, { w: 1.3, color: col, dash: "5 4" }));
    }
    const inFrame = I[0] > 10 && I[0] < W - 10;
    if (inFrame) {
      cv.arrow([I[0], y0], I, { w: 2.4, color: "#2e7d32", dash: virtual ? "5 3" : "" });
      cv.label("A'", [I[0], y0 + (hiMath > 0 ? 16 : -16)], { size: 15 });
      cv.label("B'", [I[0], I[1] + (hiMath > 0 ? -13 : 13)], { size: 15 });
    }
    const m = -di / d, r = (v) => String(Math.round(v * 100) / 100).replace(".", ",");
    const note = `\u1EA2nh ${virtual ? "\u1EA3o" : "th\u1EADt"}, ${m < 0 ? "ng\u01B0\u1EE3c chi\u1EC1u" : "c\xF9ng chi\u1EC1u"} v\u1EADt, ${Math.abs(m) > 1.0001 ? "l\u1EDBn h\u01A1n" : Math.abs(m) < 0.9999 ? "nh\u1ECF h\u01A1n" : "b\u1EB1ng"} v\u1EADt; d' = ${r(di)} cm, k = ${r(m)}.`;
    return __spreadProps(__spreadValues({}, frame2(cv, W, H)), { note, image: { d: di, virtual, inverted: hiMath < 0, magnification: m } });
  }
  var coil, blockBox, imageDistance, PHYSICS;
  var init_physics = __esm({
    "src/figures/physics.js"() {
      init_sci_kit();
      coil = (a, b, turns = 9, amp = 11, lead = 0.14) => {
        const d = unit2(sub2(b, a)), n = [-d[1], d[0]], L = len2(sub2(b, a)), pts = [a, add2(a, mul2(d, L * lead))];
        const steps = turns * 2;
        for (let i = 0; i < steps; i++) {
          const t = lead + (1 - 2 * lead) * (i + 0.5) / steps;
          pts.push(add2(add2(a, mul2(d, L * t)), mul2(n, (i % 2 ? -1 : 1) * amp)));
        }
        pts.push(add2(a, mul2(d, L * (1 - lead))), b);
        return pts;
      };
      blockBox = (cv, x, y, w, h, fill = COLORS2.wood) => cv.rect(x, y, w, h, { fill, w: 1.6 });
      imageDistance = (d, f) => {
        if (Math.abs(d - f) < 1e-9) throw new Error("V\u1EADt \u0111\u1EB7t \u0111\xFAng ti\xEAu \u0111i\u1EC3m: \u1EA3nh \u1EDF v\xF4 c\u1EF1c.");
        return d * f / (d - f);
      };
      PHYSICS = [
        { id: "pendulum", label: "Con l\u1EAFc \u0111\u01A1n", make: pendulum, options: [["angle", "G\xF3c l\u1EC7ch \u03B1 (\u0111\u1ED9)", { num: [5, 60, 30, 1] }], ["forces", "V\u1EBD tr\u1ECDng l\u1EF1c P v\xE0 l\u1EF1c c\u0103ng T"], ["components", "Ph\xE2n t\xEDch P th\xE0nh P\u2099, P\u209C", void 0, false], ["showL", "Ghi chi\u1EC1u d\xE0i \u2113"]] },
        { id: "spring", label: "Con l\u1EAFc l\xF2 xo", make: springPendulum, options: [["kind", "C\xE1ch \u0111\u1EB7t", [["horizontal", "N\u1EB1m ngang"], ["vertical", "Th\u1EB3ng \u0111\u1EE9ng"]]], ["displaced", "V\u1EADt l\u1EC7ch kh\u1ECFi v\u1ECB tr\xED c\xE2n b\u1EB1ng (c\xF3 tr\u1EE5c Ox)"], ["forces", "V\u1EBD c\xE1c l\u1EF1c"]] },
        { id: "incline", label: "M\u1EB7t ph\u1EB3ng nghi\xEAng", make: incline, options: [["angle", "G\xF3c nghi\xEAng \u03B1 (\u0111\u1ED9)", { num: [10, 60, 30, 1] }], ["forces", "V\u1EBD P v\xE0 N"], ["friction", "V\u1EBD l\u1EF1c ma s\xE1t", void 0, false], ["components", "Ph\xE2n t\xEDch P th\xE0nh P\u2093, P\u1D67", void 0, false]] },
        { id: "flat", label: "L\u1EF1c t\xE1c d\u1EE5ng l\xEAn v\u1EADt (m\u1EB7t ph\u1EB3ng ngang)", make: flatForces, options: [["pull", "L\u1EF1c k\xE9o F"], ["angle", "G\xF3c c\u1EE7a l\u1EF1c k\xE9o (\u0111\u1ED9)", { num: [0, 70, 30, 1] }], ["friction", "L\u1EF1c ma s\xE1t"]] },
        { id: "weights", label: "Qu\u1EA3 c\xE2n", make: weights, options: [["kind", "Lo\u1EA1i", [["knob", "Qu\u1EA3 c\xE2n c\xF3 n\xFAm"], ["hooked", "Qu\u1EA3 n\u1EB7ng c\xF3 m\xF3c"], ["set", "B\u1ED9 qu\u1EA3 c\xE2n"]]], ["mass", "Kh\u1ED1i l\u01B0\u1EE3ng ghi tr\xEAn qu\u1EA3 c\xE2n (b\u1ED9: c\xE1ch nhau b\u1EDFi d\u1EA5u ph\u1EA9y)", { text: "100 g" }]] },
        { id: "cart", label: "Xe m\xF4 h\xECnh", make: cart, options: [["kind", "Ki\u1EC3u", [["simple", "Xe l\u0103n tr\xEAn m\u1EB7t ph\u1EB3ng"], ["pulley", "Xe n\u1ED1i qu\u1EA3 n\u1EB7ng qua r\xF2ng r\u1ECDc"]]], ["forces", "V\u1EBD c\xE1c l\u1EF1c", void 0, false]] },
        { id: "pulley", label: "R\xF2ng r\u1ECDc", make: pulleys, options: [["kind", "Lo\u1EA1i", [["fixed", "R\xF2ng r\u1ECDc c\u1ED1 \u0111\u1ECBnh"], ["movable", "R\xF2ng r\u1ECDc \u0111\u1ED9ng"], ["atwood", "Hai v\u1EADt qua r\xF2ng r\u1ECDc"]]], ["forces", "V\u1EBD l\u1EF1c c\u0103ng (hai v\u1EADt)", void 0, false]] },
        { id: "lever", label: "\u0110\xF2n b\u1EA9y", make: lever, options: [["d1", "Tay \u0111\xF2n d\u2081", { num: [1, 20, 2, 0.5] }], ["d2", "Tay \u0111\xF2n d\u2082", { num: [1, 20, 1, 0.5] }], ["arms", "Ghi tay \u0111\xF2n"], ["weights", "V\u1EBD v\u1EADt treo", void 0, false]] },
        { id: "circuit", label: "M\u1EA1ch \u0111i\u1EC7n", make: circuit, options: [["kind", "M\u1EA1ch", [["series", "N\u1ED1i ti\u1EBFp"], ["parallel", "Song song"]]], ["load", "Thi\u1EBFt b\u1ECB", [["bulb", "B\xF3ng \u0111\xE8n"], ["resistor", "\u0110i\u1EC7n tr\u1EDF"]]], ["closed", "C\xF4ng t\u1EAFc \u0111\xF3ng"], ["ammeter", "Ampe k\u1EBF", void 0, false], ["voltmeter", "V\xF4n k\u1EBF (m\u1EA1ch n\u1ED1i ti\u1EBFp)", void 0, false]] },
        { id: "lens", label: "Th\u1EA5u k\xEDnh (t\u1EA1o \u1EA3nh)", make: lens, options: [["kind", "Lo\u1EA1i", [["converging", "Th\u1EA5u k\xEDnh h\u1ED9i t\u1EE5"], ["diverging", "Th\u1EA5u k\xEDnh ph\xE2n k\xEC"]]], ["d", "Kho\u1EA3ng c\xE1ch v\u1EADt d (cm)", { num: [1, 200, 30, 1] }], ["f", "Ti\xEAu c\u1EF1 f (cm)", { num: [1, 200, 10, 1] }], ["h", "Chi\u1EC1u cao v\u1EADt (cm)", { num: [0.5, 20, 3, 0.5] }], ["rays", "V\u1EBD c\xE1c tia s\xE1ng"]] }
      ];
    }
  });

  // src/figures/bio.js
  function dna(o = {}) {
    const cv = new Canvas2();
    if (o.kind === "ladder") {
      const seq3 = (String(o.seq || "ATGXC").toUpperCase().replace(/[^ATGXC]/g, "") || "ATGXC").replace(/C/g, "X").slice(0, 12), comp = complement(seq3);
      const n = seq3.length, rowH = 40, top = 66, W2 = 340, H2 = top + n * rowH + 40, xl = 90, xr = 250;
      cv.line([xl, top - 24], [xl, top + (n - 1) * rowH + 24], { w: 2.6, color: "#2b4a8a" });
      cv.line([xr, top - 24], [xr, top + (n - 1) * rowH + 24], { w: 2.6, color: "#8a2b4a" });
      for (let i = 0; i < n; i++) {
        const y = top + i * rowH, a = seq3[i], b = comp[i];
        cv.circle([xl, y], 5.5, { fill: "#fff", w: 1.8 });
        cv.circle([xr, y], 5.5, { fill: "#fff", w: 1.8 });
        cv.line([xl + 6, y], [xl + 28, y], { w: 1.6 });
        cv.line([xr - 6, y], [xr - 28, y], { w: 1.6 });
        cv.circle([xl + 44, y], 15, { fill: BASE_COLOR[a], w: 1.4 });
        cv.circle([xr - 44, y], 15, { fill: BASE_COLOR[b], w: 1.4 });
        cv.label(`\\text{${a}}`, [xl + 44, y], { size: 16 });
        cv.label(`\\text{${b}}`, [xr - 44, y], { size: 16 });
        const hb = a === "G" || a === "X" ? 3 : 2;
        for (let k = 0; k < hb; k++) cv.line([xl + 62, y + (k - (hb - 1) / 2) * 6], [xr - 62, y + (k - (hb - 1) / 2) * 6], { w: 1.3, dash: "3 2.5", color: "#444" });
      }
      if (o.ends !== false) {
        cv.label("5'", [xl, top - 40], { size: 15 });
        cv.label("3'", [xl, top + (n - 1) * rowH + 40], { size: 15 });
        cv.label("3'", [xr, top - 40], { size: 15 });
        cv.label("5'", [xr, top + (n - 1) * rowH + 40], { size: 15 });
      }
      return frame2(cv, W2, H2);
    }
    const turns = clamp(o.turns, 1, 3, 2), A = 56, Pd = 130, cx = 150, y0 = 34, W = 300, legend = o.legend !== false, Hh = turns * Pd, H = y0 + Hh + 30 + (legend ? 42 : 0);
    const th0 = -Math.PI / 2, yOf = (th) => y0 + (th - th0) / (2 * Math.PI) * Pd, thMax = th0 + 2 * Math.PI * turns;
    const xOf = (th, s) => cx + s * A * Math.sin(th);
    const pieces = [];
    for (let s of [1, -1]) for (let k = 0; k < turns * 2; k++) pieces.push({ s, a: th0 + k * Math.PI, b: th0 + (k + 1) * Math.PI });
    const pts = (p2) => Array.from({ length: 19 }, (_x, i) => {
      const th = p2.a + (p2.b - p2.a) * i / 18;
      return [xOf(th, p2.s), yOf(th)];
    });
    const front = (p2) => {
      const m = (p2.a + p2.b) / 2;
      return p2.s * Math.cos(m) > 0;
    };
    const col = (s) => s === 1 ? "#2b4a8a" : "#8a2b4a";
    pieces.filter((p2) => !front(p2)).forEach((p2) => cv.path(pts(p2), { w: 4.2, color: col(p2.s) }));
    const rungs = turns * 10, seq2 = ["A", "G", "T", "X", "A", "X", "G", "T", "T", "G"];
    for (let i = 0; i <= rungs; i++) {
      const th = th0 + (thMax - th0) * i / rungs, x1 = xOf(th, 1), x2 = xOf(th, -1), y = yOf(th);
      if (Math.abs(x1 - x2) < 16) continue;
      const a = seq2[i % seq2.length], b = PAIR[a], m = (x1 + x2) / 2;
      cv.line([x1, y], [m, y], { w: 4.5, color: BASE_COLOR[a] });
      cv.line([m, y], [x2, y], { w: 4.5, color: BASE_COLOR[b] });
    }
    pieces.filter(front).forEach((p2) => {
      cv.path(pts(p2), { w: 8, color: "#fff" });
      cv.path(pts(p2), { w: 4.2, color: col(p2.s) });
    });
    if (legend) {
      const ly = y0 + Hh + 34;
      ["A", "T", "G", "X"].forEach((b, i) => {
        const x = 66 + i * 54;
        cv.rect(x - 8, ly - 8, 16, 16, { fill: BASE_COLOR[b], w: 1.2 });
        cv.label(`\\text{${b}}`, [x + 20, ly], { size: 15 });
      });
    }
    return frame2(cv, W, H);
  }
  function mito(cv, c, deg = 0, k = 1) {
    cv.poly(blob(c[0], c[1], 30 * k, 14 * k, deg), { fill: "#f6b26b", color: "#b9721f", w: 1.4 });
    const wave = Array.from({ length: 9 }, (_x, i) => add2(rot([(-22 + i * 5.5) * k, (i % 2 ? -6 : 6) * k], deg), c));
    cv.path(wave, { w: 1, color: "#b9721f" });
  }
  function chloroplast(cv, c, deg = 0) {
    cv.poly(blob(c[0], c[1], 24, 13, deg), { fill: "#7cc46f", color: "#3f8a35", w: 1.4 });
    [-10, 0, 10].forEach((dx) => cv.line(add2(rot([dx, -6], deg), c), add2(rot([dx, 6], deg), c), { w: 2, color: "#3f8a35" }));
  }
  function cell2(o = {}) {
    const cv = new Canvas2(), W = 680, H = 400, cx = 340, names = o.names !== false;
    const N = (s, from, to) => {
      if (names) cv.note(s, from, to, { size: 14 });
    };
    if (o.kind === "plant") {
      cv.poly(rrect(cx, 200, 360, 300, 40), { fill: "#eaf6e0", w: 3.2 });
      cv.poly(rrect(cx, 200, 342, 282, 34), { fill: "#f6fbf1", w: 1.4 });
      cv.poly(blob(cx + 40, 205, 100, 100), { fill: "#cfe8f7", color: "#5f9fc7", w: 1.5 });
      cv.circle([cx - 100, 120], 36, { fill: "#cfd8f5", w: 1.8 });
      cv.circle([cx - 106, 116], 11, { fill: "#6b7fd7", w: 1 });
      [[cx - 130, 235, 25], [cx - 85, 305, -15], [cx + 130, 100, 15], [cx + 140, 310, -30]].forEach(([x, y, d]) => chloroplast(cv, [x, y], d));
      mito(cv, [cx - 40, 70], 10, 0.8);
      mito(cv, [cx + 150, 195], 80, 0.8);
      dots(cv, [[cx - 20, 150], [cx - 60, 170], [cx - 40, 210], [cx + 10, 90], [cx + 95, 82]]);
      N("Th\xE0nh xenlul\xF4z\u01A1", [cx - 180, 220], [cx - 205, 250]);
      N("M\xE0ng sinh ch\u1EA5t", [cx - 171, 150], [cx - 215, 120]);
      N("Nh\xE2n", [cx - 134, 100], [cx - 215, 60]);
      N("L\u1EE5c l\u1EA1p", [cx - 140, 245], [cx - 215, 300]);
      N("Kh\xF4ng b\xE0o", [cx + 40, 205], [cx + 210, 270]);
      N("Ti th\u1EC3", [cx + 165, 200], [cx + 215, 160]);
      N("Rib\xF4x\xF4m", [cx + 95, 82], [cx + 215, 100]);
      return frame2(cv, W, H);
    }
    if (o.kind === "bacteria") {
      cv.poly(stadium(cx, 200, 400, 190, 14), { fill: "#fff6dc", color: "#c9a64a", w: 1.6, dash: "6 3" });
      cv.poly(stadium(cx, 200, 372, 162, 14), { fill: "#fdf0d0", w: 2.6 });
      cv.poly(stadium(cx, 200, 352, 142, 14), { fill: "#fdf0d0", w: 1.3 });
      const nuc = Array.from({ length: 34 }, (_x, i) => {
        const t = 2 * Math.PI * i / 34;
        return [cx - 20 + (52 + 12 * Math.sin(5 * t)) * Math.cos(t), 200 + (34 + 10 * Math.cos(4 * t)) * Math.sin(t)];
      });
      cv.poly(nuc, { fill: "#e6e2f6", color: "#6b5fb5", w: 1.6 });
      cv.circle([cx + 90, 232], 13, { w: 1.8, color: "#6b5fb5" });
      dots(cv, [[cx - 110, 170], [cx - 100, 230], [cx - 60, 255], [cx + 60, 160], [cx + 120, 190], [cx + 40, 250], [cx - 130, 205], [cx + 20, 150]]);
      const flag = Array.from({ length: 30 }, (_x, i) => [cx + 200 + i * 8, 200 + 14 * Math.sin(i * 0.7)]);
      cv.path(flag, { w: 2.4, color: "#555" });
      [[-120, -1], [-60, -1], [10, -1], [80, -1], [-90, 1], [40, 1], [120, 1]].forEach(([dx, s]) => cv.line([cx + dx, 200 + s * 95], [cx + dx + 3, 200 + s * 112], { w: 1.2, color: "#777" }));
      N("V\u1ECF nh\u1EA7y", [cx - 150, 112], [cx - 215, 60]);
      N("Th\xE0nh t\u1EBF b\xE0o", [cx - 180, 128], [cx - 215, 95]);
      N("M\xE0ng sinh ch\u1EA5t", [cx - 170, 200], [cx - 215, 150]);
      N("V\xF9ng nh\xE2n (ADN v\xF2ng)", [cx - 20, 190], [cx - 75, 335]);
      N("Plasmit", [cx + 90, 245], [cx + 120, 320]);
      N("Rib\xF4x\xF4m", [cx - 100, 230], [cx - 215, 290]);
      N("Roi", [cx + 300, 192], [cx + 250, 130]);
      return frame2(cv, W, H);
    }
    cv.poly(blob(cx, 200, 185, 140), { fill: "#fdf1e3", w: 2.6 });
    cv.circle([cx - 10, 195], 52, { fill: "#cfd8f5", w: 1.8 });
    cv.circle([cx - 22, 188], 14, { fill: "#6b7fd7", w: 1 });
    cv.path(Array.from({ length: 24 }, (_x, i) => [cx - 76 + i * 3.5 + 0, 260 + 7 * Math.sin(i * 1.1)]).map((p2, i) => [p2[0] - 10, p2[1] + i * 0.6]), { w: 2, color: "#a56b3c" });
    for (let k = 0; k < 4; k++) cv.path(arcPts(cx - 120, 250 - 0, 40 - k * 3, 16, 200 + 5 * k, 340 - 5 * k, 10).map((p2) => [p2[0], p2[1] + k * 8 - 8]), { w: 2.2, color: "#c27c2c" });
    mito(cv, [cx + 100, 150], 25);
    mito(cv, [cx + 60, 270], -20);
    cv.circle([cx + 120, 235], 9, { fill: "#e06666", w: 1.2 });
    cv.rect(cx - 70, 100, 8, 24, { fill: "#999", w: 1 });
    cv.rect(cx - 56, 108, 24, 8, { fill: "#999", w: 1 });
    dots(cv, [[cx + 20, 130], [cx + 40, 150], [cx - 110, 160], [cx + 130, 200], [cx - 40, 290], [cx + 10, 255], [cx + 80, 205]]);
    N("M\xE0ng sinh ch\u1EA5t", [cx - 183, 220], [cx - 225, 290]);
    N("B\u1ED9 m\xE1y G\xF4ngi", [cx - 140, 235], [cx - 225, 330]);
    N("L\u01B0\u1EDBi n\u1ED9i ch\u1EA5t", [cx - 70, 262], [cx - 150, 355]);
    N("Trung th\u1EC3", [cx - 60, 112], [cx - 225, 80]);
    N("Nh\xE2n", [cx - 40, 160], [cx - 130, 45]);
    N("H\u1EA1ch nh\xE2n", [cx - 22, 188], [cx - 225, 150]);
    N("Ti th\u1EC3", [cx + 126, 140], [cx + 215, 90]);
    N("Liz\xF4x\xF4m", [cx + 128, 238], [cx + 215, 320]);
    N("Rib\xF4x\xF4m", [cx + 80, 205], [cx + 215, 220]);
    return frame2(cv, W, H);
  }
  function chromosome(o = {}) {
    const cv = new Canvas2(), W = 420, H = 340, cx = 190, cy = 170, w = 28, len3 = 230;
    const chromatid = (deg, offx) => {
      const pts = [];
      const hw = w / 2, hl = len3 / 2;
      pts.push(...arcPts(0, -hl + hw, hw, hw, 180, 0, 12), ...arcPts(0, hl - hw, hw, hw, 0, -180, 12));
      return pts.map((p2) => add2(rot([p2[0] + offx, p2[1]], deg), [cx, cy]));
    };
    if (o.kind === "single") {
      cv.poly(chromatid(0, 0), { fill: "#b9a3e8", color: "#5b3fa0", w: 2 });
      cv.line([cx - 15, cy - 6], [cx + 15, cy - 6], { w: 2.4, color: "#5b3fa0" });
      cv.line([cx - 15, cy + 6], [cx + 15, cy + 6], { w: 2.4, color: "#5b3fa0" });
      cv.note("T\xE2m \u0111\u1ED9ng", [cx + 14, cy], [cx + 90, cy - 24], { size: 14 });
      cv.note("Cr\xF4matit", [cx + 12, cy - 70], [cx + 90, cy - 90], { size: 14 });
      return frame2(cv, W, H);
    }
    cv.poly(chromatid(-9, -11), { fill: "#b9a3e8", color: "#5b3fa0", w: 2 });
    cv.poly(chromatid(9, 11), { fill: "#d7a3e8", color: "#7a3fa0", w: 2 });
    cv.circle([cx, cy], 12, { fill: "#7a5bc4", color: "#3b2780", w: 1.6 });
    cv.note("T\xE2m \u0111\u1ED9ng", [cx + 12, cy], [cx + 90, cy - 6], { size: 14 });
    cv.note("Cr\xF4matit ch\u1ECB em", [cx + 50, cy - 80], [cx + 100, cy - 110], { size: 14 });
    cv.note("Cr\xF4matit ch\u1ECB em", [cx + 40, cy + 85], [cx + 100, cy + 115], { size: 14 });
    return frame2(cv, W, H);
  }
  function flow(o = {}) {
    const preset = FLOW[o.kind] || FLOW.foodchain, items = list2(o.items, preset.items), arrows = list2(o.arrows, preset.arrows);
    const sub4 = o.kind === "custom" || !o.levels ? [] : preset.sub, vertical = o.dir === "v", cv = new Canvas2();
    const bw = items.map((t, i) => Math.max(textW(t, 16) + 30, 84, sub4[i] ? textW(sub4[i], 12) + 8 : 0)), bh = 40, gap = vertical ? 54 : 70 + (arrows.length ? Math.max(0, Math.max(...arrows.map((a) => textW(a, 13))) - 50) : 0);
    if (vertical) {
      const wmax = Math.max(...bw), W2 = wmax + 60 + (arrows.length ? Math.max(...arrows.map((a) => textW(a, 13))) + 20 : 0), H2 = items.length * bh + (items.length - 1) * gap + 40;
      items.forEach((t, i) => {
        const y = 20 + i * (bh + gap), x2 = 20;
        cv.rect(x2, y, wmax, bh, { fill: PALETTE[i % PALETTE.length], w: 1.8 });
        cv.text(t, [x2 + wmax / 2, y + bh / 2], { size: 16 });
        if (i < items.length - 1) {
          cv.arrow([x2 + wmax / 2, y + bh + 4], [x2 + wmax / 2, y + bh + gap - 4], { w: 2 });
          if (arrows[i]) cv.text(arrows[i], [x2 + wmax / 2 + 12, y + bh + gap / 2], { size: 13, anchor: "l" });
        }
      });
      return frame2(cv, W2, H2);
    }
    const W = bw.reduce((a, b) => a + b, 0) + gap * (items.length - 1) + 40, H = 110 + (sub4.length ? 26 : 0);
    let x = 20;
    items.forEach((t, i) => {
      const y = 36;
      cv.rect(x, y, bw[i], bh, { fill: PALETTE[i % PALETTE.length], w: 1.8 });
      cv.text(t, [x + bw[i] / 2, y + bh / 2], { size: 16 });
      if (sub4[i]) cv.text(sub4[i], [x + bw[i] / 2, y + bh + 20], { size: 12 });
      if (i < items.length - 1) {
        cv.arrow([x + bw[i] + 5, y + bh / 2], [x + bw[i] + gap - 5, y + bh / 2], { w: 2 });
        if (arrows[i]) cv.text(arrows[i], [x + bw[i] + gap / 2, y + bh / 2 - 16], { size: 13 });
      }
      x += bw[i] + gap;
    });
    return frame2(cv, W, H);
  }
  function pyramid2(o = {}) {
    const items = list2(o.items, ["C\xE2y c\u1ECF", "S\xE2u", "Chim s\xE2u", "\u0110\u1EA1i b\xE0ng"]), n = items.length, cv = new Canvas2(), lh = 56, Wb = 400, Wt = 60, W = Wb + 80, H = n * lh + 60;
    items.forEach((t, i) => {
      const yb = H - 30 - i * lh, yt = yb - lh, wb = Wb - (Wb - Wt) * i / n, wt = Wb - (Wb - Wt) * (i + 1) / n, c = W / 2;
      cv.poly([[c - wb / 2, yb], [c + wb / 2, yb], [c + wt / 2, yt], [c - wt / 2, yt]], { fill: PALETTE[i % PALETTE.length], w: 1.8 });
      cv.text(t, [c, (yb + yt) / 2], { size: 16 });
    });
    if (o.axis !== false) {
      cv.arrow([34, H - 30], [34, 36], { w: 1.6 });
      cv.text("B\u1EADc dinh d\u01B0\u1EE1ng", [44, 24], { size: 13, anchor: "l" });
    }
    return frame2(cv, W, H);
  }
  function offspring(g1, g2) {
    let out = "";
    for (let i = 0; i < Math.max(g1.length, g2.length); i++) out += ordered(g1[i] || "", g2[i] || "");
    return out;
  }
  function punnettTable(p1, p2) {
    const g1 = list2(p1, ["A", "a"]), g2 = list2(p2, ["A", "a"]), grid = g2.map((m) => g1.map((f) => offspring(f, m)));
    const count = (key) => {
      const c = /* @__PURE__ */ new Map();
      grid.flat().forEach((g) => {
        const k = key(g);
        c.set(k, (c.get(k) || 0) + 1);
      });
      return c;
    };
    const sortKeys = (m) => [...m.entries()].sort((a, b) => b[0].replace(/[^A-Z]/g, "").length - a[0].replace(/[^A-Z]/g, "").length || (a[0] < b[0] ? -1 : 1));
    return { g1, g2, grid, genotypes: sortKeys(count((g) => g)), phenotypes: [...count(phenotypeKey).entries()].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)) };
  }
  function punnett(o = {}) {
    const t = punnettTable(o.father, o.mother), cv = new Canvas2(), cw = Math.max(70, 18 * t.grid[0][0].length + 40), ch = 46, left = 70, top = 52;
    const W = left + cw * t.g1.length + 40, tbl2 = ch * t.g2.length;
    const fmt = (arr) => arr.map(([k, c]) => `${c} ${k}`).join(" : ");
    const H = top + ch * (t.g2.length + 1) + (o.ratio !== false ? 74 : 20);
    cv.rect(10, top, left - 10 + cw * t.g1.length, ch, { fill: "#eef2f8", w: 1.4 });
    t.g1.forEach((g, i) => {
      cv.label(`\\text{${g}}`, [left + cw * (i + 0.5), top + ch / 2], { size: 17 });
    });
    t.g2.forEach((g, j) => {
      const y = top + ch * (j + 1);
      cv.rect(10, y, left - 10, ch, { fill: "#eef2f8", w: 1.4 });
      cv.label(`\\text{${g}}`, [(10 + left) / 2, y + ch / 2], { size: 17 });
      t.g1.forEach((_f, i) => {
        cv.rect(left + cw * i, y, cw, ch, { w: 1.4 });
        cv.label(`\\text{${t.grid[j][i]}}`, [left + cw * (i + 0.5), y + ch / 2], { size: 17 });
      });
    });
    for (let i = 0; i < t.g1.length; i++) cv.rect(left + cw * i, top, cw, ch, { w: 1.4 });
    cv.text("Giao t\u1EED \u0111\u1EF1c (\u2642)", [left + cw * t.g1.length / 2, top - 22], { size: 14 });
    cv.text("\u2640 / \u2642", [(10 + left) / 2, top + ch / 2], { size: 14 });
    if (o.ratio !== false) {
      const y = top + ch * (t.g2.length + 1) + 22;
      cv.text(`T\u1EC9 l\u1EC7 ki\u1EC3u gen: ${fmt(t.genotypes)}`, [W / 2, y], { size: 15 });
      cv.text(`T\u1EC9 l\u1EC7 ki\u1EC3u h\xECnh: ${fmt(t.phenotypes)}`, [W / 2, y + 26], { size: 15 });
    }
    return __spreadProps(__spreadValues({}, frame2(cv, Math.max(W, 330), H)), { table: t });
  }
  var PALETTE, textW, BASE_COLOR, PAIR, complement, blob, stadium, rrect, dots, FLOW, ordered, phenotypeKey, BIOLOGY;
  var init_bio = __esm({
    "src/figures/bio.js"() {
      init_sci_kit();
      init_scene();
      PALETTE = ["#d8f0d2", "#fdf2c4", "#fbd9c6", "#e6d6f5", "#d3e6f8", "#fcd5e5"];
      textW = (s, size) => labelBox(`\\text{${s}}`, size).w;
      BASE_COLOR = { A: "#e8a33d", T: "#5aa9e6", G: "#3fb37f", X: "#e06666" };
      PAIR = { A: "T", T: "A", G: "X", X: "G", C: "G" };
      complement = (seq2) => [...String(seq2).toUpperCase().replace(/[^ATGXC]/g, "")].map((b) => PAIR[b]).join("");
      blob = (cx, cy, rx, ry, deg = 0, n = 36) => Array.from({ length: n }, (_x, i) => {
        const t = 2 * Math.PI * i / n;
        return add2(rot([rx * Math.cos(t), ry * Math.sin(t)], deg), [cx, cy]);
      });
      stadium = (cx, cy, w, h, n = 14) => [...arcPts(cx + w / 2 - h / 2, cy, h / 2, h / 2, 90, -90, n), ...arcPts(cx - w / 2 + h / 2, cy, h / 2, h / 2, -90, -270, n)];
      rrect = (cx, cy, w, h, r, n = 8) => [...arcPts(cx + w / 2 - r, cy - h / 2 + r, r, r, 90, 0, n), ...arcPts(cx + w / 2 - r, cy + h / 2 - r, r, r, 0, -90, n), ...arcPts(cx - w / 2 + r, cy + h / 2 - r, r, r, -90, -180, n), ...arcPts(cx - w / 2 + r, cy - h / 2 + r, r, r, 180, 90, n)];
      dots = (cv, pts, r = 2.2) => pts.forEach((p2) => cv.dot(p2, r, "#333"));
      FLOW = {
        foodchain: { items: ["C\xE2y c\u1ECF", "Ch\xE2u ch\u1EA5u", "\u1EBEch", "R\u1EAFn", "\u0110\u1EA1i b\xE0ng"], arrows: [], sub: ["Sinh v\u1EADt s\u1EA3n xu\u1EA5t", "Sinh v\u1EADt ti\xEAu th\u1EE5 b\u1EADc 1", "Sinh v\u1EADt ti\xEAu th\u1EE5 b\u1EADc 2", "Sinh v\u1EADt ti\xEAu th\u1EE5 b\u1EADc 3", "Sinh v\u1EADt ti\xEAu th\u1EE5 b\u1EADc 4"] },
        gene: { items: ["ADN", "mARN", "Pr\xF4t\xEAin", "T\xEDnh tr\u1EA1ng"], arrows: ["Phi\xEAn m\xE3", "D\u1ECBch m\xE3", "Bi\u1EC3u hi\u1EC7n"], sub: [] }
      };
      ordered = (a, b) => a.toLowerCase() === b.toLowerCase() && a !== b ? a === a.toUpperCase() ? a + b : b + a : a + b;
      phenotypeKey = (gen) => {
        let k = "";
        for (let i = 0; i < gen.length; i += 2) {
          const a = gen[i], b = gen[i + 1] || "";
          k += a === a.toUpperCase() || b === b.toUpperCase() ? `${a === a.toUpperCase() ? a : b}-` : a + b;
        }
        return k;
      };
      BIOLOGY = [
        { id: "dna", label: "M\xF4 h\xECnh ADN", make: dna, options: [["kind", "Ki\u1EC3u", [["helix", "Xo\u1EAFn k\xE9p"], ["ladder", "D\u1EA1ng thang (c\xF3 tr\xECnh t\u1EF1 baz\u01A1)"]]], ["turns", "S\u1ED1 v\xF2ng xo\u1EAFn (xo\u1EAFn k\xE9p)", { num: [1, 3, 2, 1] }], ["legend", "Ch\xFA th\xEDch m\xE0u baz\u01A1 (xo\u1EAFn k\xE9p)"], ["seq", "M\u1EA1ch 1 (A, T, G, X; d\u1EA1ng thang)", { text: "ATGXC" }], ["ends", "Ghi \u0111\u1EA7u 5', 3' (d\u1EA1ng thang)"]] },
        { id: "cell", label: "T\u1EBF b\xE0o", make: cell2, options: [["kind", "Lo\u1EA1i t\u1EBF b\xE0o", [["animal", "T\u1EBF b\xE0o \u0111\u1ED9ng v\u1EADt"], ["plant", "T\u1EBF b\xE0o th\u1EF1c v\u1EADt"], ["bacteria", "T\u1EBF b\xE0o vi khu\u1EA9n"]]], ["names", "Ghi t\xEAn c\xE1c b\xE0o quan"]] },
        { id: "chromosome", label: "Nhi\u1EC5m s\u1EAFc th\u1EC3", make: chromosome, options: [["kind", "Tr\u1EA1ng th\xE1i", [["double", "Nhi\u1EC5m s\u1EAFc th\u1EC3 k\xE9p"], ["single", "Nhi\u1EC5m s\u1EAFc th\u1EC3 \u0111\u01A1n"]]]] },
        { id: "flow", label: "S\u01A1 \u0111\u1ED3 m\u0169i t\xEAn (chu\u1ED7i th\u1EE9c \u0103n, c\u01A1 ch\u1EBF di truy\u1EC1n\u2026)", make: flow, options: [["kind", "M\u1EABu", [["foodchain", "Chu\u1ED7i th\u1EE9c \u0103n"], ["gene", "ADN \u2192 ARN \u2192 Pr\xF4t\xEAin \u2192 T\xEDnh tr\u1EA1ng"], ["custom", "T\u1EF1 nh\u1EADp"]]], ["items", "C\xE1c th\xE0nh ph\u1EA7n (c\xE1ch nhau b\u1EDFi d\u1EA5u ph\u1EA9y; b\u1ECF tr\u1ED1ng = m\u1EABu)", { text: "" }], ["arrows", "Nh\xE3n tr\xEAn c\xE1c m\u0169i t\xEAn (b\u1ECF tr\u1ED1ng = m\u1EABu)", { text: "" }], ["dir", "Chi\u1EC1u", [["h", "Ngang"], ["v", "D\u1ECDc"]]], ["levels", "Ghi b\u1EADc dinh d\u01B0\u1EE1ng (chu\u1ED7i th\u1EE9c \u0103n, chi\u1EC1u ngang)", void 0, false]] },
        { id: "pyramid", label: "Th\xE1p sinh th\xE1i", make: pyramid2, options: [["items", "C\xE1c b\u1EADc, t\u1EEB \u0111\xE1y l\xEAn \u0111\u1EC9nh (c\xE1ch nhau b\u1EDFi d\u1EA5u ph\u1EA9y)", { text: "C\xE2y c\u1ECF, S\xE2u, Chim s\xE2u, \u0110\u1EA1i b\xE0ng" }], ["axis", "M\u0169i t\xEAn \u201CB\u1EADc dinh d\u01B0\u1EE1ng\u201D"]] },
        { id: "punnett", label: "S\u01A1 \u0111\u1ED3 lai (b\u1EA3ng Punnett)", make: punnett, options: [["father", "Giao t\u1EED \u0111\u1EF1c (vd. AB, Ab, aB, ab)", { text: "A, a" }], ["mother", "Giao t\u1EED c\xE1i", { text: "A, a" }], ["ratio", "Ghi t\u1EC9 l\u1EC7 ki\u1EC3u gen, ki\u1EC3u h\xECnh"]] }
      ];
    }
  });

  // src/picture.js
  function makePicturePackage(png, { widthPt, heightPt, alt = "", name = "Hinh", center = false } = {}) {
    const n = ++counter2, rid = `rIdPic${n}`, cx = Math.round(widthPt * EMU2), cy = Math.round(heightPt * EMU2);
    const drawing = `<w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${n}" name="${attr2(name)} ${n}" descr="${attr2(alt)}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="0" name="${attr2(name)}${n}.png"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rid}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing>`;
    const ns = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';
    return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="${rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${name}${n}.png"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document ${ns}><w:body><w:p>${center ? '<w:pPr><w:jc w:val="center"/></w:pPr>' : ""}<w:r>${drawing}</w:r></w:p></w:body></w:document></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/media/${name}${n}.png" pkg:contentType="image/png" pkg:compression="store"><pkg:binaryData>${b642(png)}</pkg:binaryData></pkg:part></pkg:package>`;
  }
  async function canvasToPng(canvas) {
    const url = canvas.toDataURL("image/png").split(",")[1];
    const bin = atob(url), out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function downloadBlob(bytes, filename, type = "image/png") {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([bytes], { type }));
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  async function svgToPngPx(svg, width, height, scale = 3) {
    const img = new Image();
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = () => rej(new Error("kh\xF4ng v\u1EBD \u0111\u01B0\u1EE3c \u1EA3nh"));
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    });
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(width * scale);
    canvas.height = Math.ceil(height * scale);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvasToPng(canvas);
  }
  var EMU2, b642, attr2, counter2;
  var init_picture = __esm({
    "src/picture.js"() {
      EMU2 = 12700;
      b642 = (bytes) => {
        let s = "";
        for (let i = 0; i < bytes.length; i += 32768) s += String.fromCharCode(...bytes.subarray(i, i + 32768));
        return btoa(s).replace(/(.{76})/g, "$1\n");
      };
      attr2 = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
      counter2 = Math.floor(Date.now() / 1e3) % 1e5;
    }
  });

  // taskpane/figures-ui.js
  var figures_ui_exports = {};
  __export(figures_ui_exports, {
    mountFigures: () => mountFigures
  });
  function mountFigures(root, io) {
    const kinds = [["bbt", "B\u1EA3ng bi\u1EBFn thi\xEAn"], ["plot", "\u0110\u1ED3 th\u1ECB"], ["region", "Mi\u1EC1n nghi\u1EC7m"], ["geo", "H\xECnh h\u1ECDc"], ["chem", "H\xF3a h\u1ECDc"], ["phys", "V\u1EADt l\xED"], ["bio", "Sinh h\u1ECDc"]];
    const CATALOGS = { geo: GEOMETRY, chem: CHEMISTRY, phys: PHYSICS, bio: BIOLOGY };
    root.innerHTML = `
    <div class="grid2 fig-kind-row"><label class="field fig-kind"><span>Lo\u1EA1i h\xECnh</span><select id="fig-kind">${kinds.map(([id, l]) => `<option value="${id}">${l}</option>`).join("")}</select></label><div id="fig-sub"></div></div>
    <div id="fig-form"></div>
    <div id="fig-error" class="bad"></div>
    <div class="fig-preview" id="fig-preview"></div>
    <div class="hint" id="fig-note"></div>
    <div class="grid2 fig-opts">
      <div id="fig-size"></div>
      <label class="field"><span>Ki\u1EC3u h\xECnh s\u1EEDa \u0111\u01B0\u1EE3c</span><select id="fig-float"><option value="float">H\xECnh n\u1ED5i</option><option value="inline">C\xF9ng d\xF2ng ch\u1EEF</option></select></label>
    </div>
    <div class="btns fig-actions"><button class="primary" id="fig-insert" title="C\xE1c \u0111\u01B0\u1EDDng th\u1EB3ng, h\u1ED9p ch\u1EEF v\xE0 c\xF4ng th\u1EE9c Word nh\xF3m l\u1EA1i: b\u1EA5m v\xE0o \u0111\u1EC3 s\u1EEDa t\u1EEBng ph\u1EA7n trong Word">Ch\xE8n v\xE0o Word (h\xECnh s\u1EEDa \u0111\u01B0\u1EE3c)</button></div>
    <div class="btns three fig-actions"><button class="secondary" id="fig-png">Ch\xE8n \u1EA3nh PNG</button><button class="secondary" id="fig-dl-png">T\u1EA3i PNG</button><button class="secondary" id="fig-dl-svg">T\u1EA3i SVG</button></div>
    <div id="fig-out"></div>`;
    const $2 = (id) => root.querySelector("#" + id);
    mountMtSettings($2("fig-size"), { fontRow: false, onChange: () => schedule() });
    let fontPt2 = 12;
    let kind = "bbt", current = null, timer = null;
    const forms = {
      bbt: () => `<label class="field sub-field"><span>C\xE1ch l\u1EADp</span><select id="b-mode"><option value="auto">T\u1EF1 \u0111\u1ED9ng v\u1EBD</option><option value="manual">T\u1EF1 nh\u1EADp</option></select></label>
      <div id="b-auto">${field("H\xE0m s\u1ED1 y = f(x) (g\xF5 th\u01B0\u1EDDng ho\u1EB7c LaTeX)", '<input type="text" id="b-expr" value="x^3-3x+1" spellcheck="false" placeholder="vd. (2x+1)/(x-1), \\frac{2x+1}{x-1}, x^3-3x+1, \\sqrt{x}">')}
      <label class="field"><span>M\u1EABu c\xF3 s\u1EB5n</span><select id="b-preset"><option value="">\u2014 ch\u1ECDn m\u1EABu \u2014</option>${PRESETS.map((p2) => `<option value="${esc5(p2.expr)}">${esc5(p2.label)}</option>`).join("")}</select></label>
      <div class="grid2">${field("Kh\u1EA3o s\xE1t t\u1EEB x =", '<input type="number" id="b-lo" placeholder="\u2212\u221E">')}${field("\u0111\u1EBFn x =", '<input type="number" id="b-hi" placeholder="+\u221E">')}</div>
      ${field("Ghi ch\xFA t\u1EADp x\xE1c \u0111\u1ECBnh (t\xF9y ch\u1ECDn)", '<input type="text" id="b-domain" placeholder="vd. TX\u0110: D = \u211D \\ {1}">')}</div>
      <div id="b-manual" hidden>
        ${field("D\xF2ng x (c\xE1ch nhau b\u1EDFi d\u1EA5u c\xE1ch)", '<input type="text" id="m-x" value="-inf -1 1 +inf" spellcheck="false">')}
        ${field("D\xF2ng y' (d\u1EA5u t\u1EEBng kho\u1EA3ng, xen k\u1EBD 0 ho\u1EB7c ||)", '<input type="text" id="m-dy" value="+ 0 - 0 +" spellcheck="false">')}
        ${field("D\xF2ng y (m\u1ED7i c\u1ED9t x m\u1ED9t gi\xE1 tr\u1ECB)", '<input type="text" id="m-y" value="-inf 3 -1 +inf" spellcheck="false">')}
        ${field("Nh\xE3n h\xE0ng cu\u1ED1i", '<input type="text" id="m-label" value="f(x)" spellcheck="false">')}
        ${field("Ghi ch\xFA (t\xF9y ch\u1ECDn)", '<input type="text" id="m-domain" placeholder="vd. TX\u0110: D = \u211D \\ {1}">')}
        <div class="hint">Vi\u1EBFt <b>-inf</b>, <b>+inf</b> cho \u221E. D\xF2ng y' c\xF3 th\u1EC3 ch\u1EC9 g\u1ED3m c\xE1c d\u1EA5u (+ - +), ho\u1EB7c xen k\u1EBD d\u1EA5u v\u1EDBi <b>0</b> (c\u1EF1c tr\u1ECB) / <b>||</b> (kh\xF4ng x\xE1c \u0111\u1ECBnh), vd. <code>+ 0 - || -</code>. \u1EDE d\xF2ng y, c\u1ED9t gi\xE1n \u0111o\u1EA1n vi\u1EBFt <b>tr\xE1i|ph\u1EA3i</b>, vd. <code>-inf|+inf</code>. C\xF3 th\u1EC3 d\xF9ng LaTeX nh\u01B0 <code>\\frac{1}{2}</code>. Kho\u1EA3ng h\xE0m kh\xF4ng x\xE1c \u0111\u1ECBnh ghi <b>//</b> \u1EDF d\xF2ng y' (\u0111\u01B0\u1EE3c g\u1EA1ch ch\xE9o), vd. x: <code>-inf -2 2 +inf</code>, y': <code>- // +</code>, y: <code>0 +inf| |-inf 0</code> (b\u1ECF tr\u1ED1ng ph\xEDa kh\xF4ng c\xF3 gi\xE1 tr\u1ECB). M\u0169i t\xEAn l\xEAn/xu\u1ED1ng theo d\u1EA5u c\u1EE7a y'.</div>
      </div>`,
      plot: () => `${field("H\xE0m s\u1ED1 (m\u1ED7i d\xF2ng m\u1ED9t h\xE0m; g\xF5 th\u01B0\u1EDDng ho\u1EB7c LaTeX, vd. \\frac{x+1}{x-1})", '<textarea id="p-expr" rows="2" spellcheck="false">x^3-3x+1</textarea>')}
      <label class="field"><span>M\u1EABu c\xF3 s\u1EB5n</span><select id="p-preset"><option value="">\u2014 ch\u1ECDn m\u1EABu \u2014</option>${PRESETS.map((p2) => `<option value="${p2.id}">${esc5(p2.label)}</option>`).join("")}</select></label>
      <div class="subhead">Kho\u1EA3ng gi\xE1 tr\u1ECB tr\xEAn c\xE1c tr\u1EE5c</div>
      <div class="grid2">${field("x nh\u1ECF nh\u1EA5t", '<input type="number" id="p-xmin" value="-3" step="any">')}${field("x l\u1EDBn nh\u1EA5t", '<input type="number" id="p-xmax" value="3" step="any">')}</div>
      <div class="grid2">${field("y nh\u1ECF nh\u1EA5t", '<input type="number" id="p-ymin" placeholder="t\u1EF1 \u0111\u1ED9ng" step="any">')}${field("y l\u1EDBn nh\u1EA5t", '<input type="number" id="p-ymax" placeholder="t\u1EF1 \u0111\u1ED9ng" step="any">')}</div>
      <div class="subhead">Hi\u1EC3n th\u1ECB</div>
      ${sw("p-grid", "Hi\u1EC7n l\u01B0\u1EDBi", true)}${sw("p-asym", "Ti\u1EC7m c\u1EADn \u0111\u1EE9ng (n\xE9t \u0111\u1EE9t)", true)}${sw("p-points", "\u0110\xE1nh d\u1EA5u \u0111i\u1EC3m c\u1EF1c tr\u1ECB", true)}${sw("p-legend", "Ghi t\xEAn h\xE0m s\u1ED1 (khi v\u1EBD nhi\u1EC1u h\xE0m)")}`,
      region: () => `${field("H\u1EC7 b\u1EA5t ph\u01B0\u01A1ng tr\xECnh (m\u1ED7i d\xF2ng m\u1ED9t b\u1EA5t ph\u01B0\u01A1ng tr\xECnh)", '<textarea id="r-ineq" rows="4" spellcheck="false">x+y<=4\n2x-y>=-2\nx>=0\ny>=0</textarea>')}
      <label class="field"><span>C\xE1ch th\u1EC3 hi\u1EC7n mi\u1EC1n nghi\u1EC7m</span><select id="r-mode"><option value="hatch">G\u1EA1ch b\u1ECF ph\u1EA7n kh\xF4ng thu\u1ED9c mi\u1EC1n nghi\u1EC7m</option><option value="fill">T\xF4 m\xE0u mi\u1EC1n nghi\u1EC7m</option></select></label>
      <div class="grid2">${field("x nh\u1ECF nh\u1EA5t", '<input type="number" id="r-xmin" placeholder="t\u1EF1 \u0111\u1ED9ng" step="any">')}${field("x l\u1EDBn nh\u1EA5t", '<input type="number" id="r-xmax" placeholder="t\u1EF1 \u0111\u1ED9ng" step="any">')}</div>
      <div class="grid2">${field("y nh\u1ECF nh\u1EA5t", '<input type="number" id="r-ymin" placeholder="t\u1EF1 \u0111\u1ED9ng" step="any">')}${field("y l\u1EDBn nh\u1EA5t", '<input type="number" id="r-ymax" placeholder="t\u1EF1 \u0111\u1ED9ng" step="any">')}</div>
      ${sw("r-grid", "Hi\u1EC7n l\u01B0\u1EDBi", true)}${sw("r-vertices", "Ghi t\xEAn v\xE0 t\u1ECDa \u0111\u1ED9 c\xE1c \u0111\u1EC9nh", true)}${sw("r-lines", "Ghi t\xEAn c\xE1c \u0111\u01B0\u1EDDng th\u1EB3ng (d\u2081), (d\u2082)\u2026", true)}`
    };
    for (const [k, cat] of Object.entries(CATALOGS)) forms[k] = () => `<label class="field sub-field"><span>H\xECnh</span><select id="g-kind">${cat.map((g) => `<option value="${g.id}">${esc5(g.label)}</option>`).join("")}</select></label><div id="g-opts"></div>`;
    function optionHtml([key, label, ch, def2]) {
      if (Array.isArray(ch)) return field(label, `<select data-opt="${key}">${ch.map(([v, l]) => `<option value="${v}">${esc5(l)}</option>`).join("")}</select>`);
      if (ch && ch.num) {
        const [min, max, val2, step] = ch.num;
        return field(label, `<input type="number" data-opt="${key}" min="${min}" max="${max}" step="${step || 1}" value="${val2}">`);
      }
      if (ch && "text" in ch) return field(label, `<input type="text" data-opt="${key}" value="${esc5(ch.text)}" spellcheck="false">`);
      return sw("go-" + key, label, def2 != null ? def2 : kind === "geo" ? /^show/.test(key) : true);
    }
    function geoOptions() {
      const g = CATALOGS[kind].find((x) => x.id === $2("g-kind").value);
      const selects = g.options.filter((o) => Array.isArray(o[2])), others = g.options.filter((o) => o[2] && !Array.isArray(o[2])), flags = g.options.filter((o) => !o[2]);
      const hint = g.names ? g.hint ? `<div class="hint">${esc5(g.hint)}</div>` : "" : "";
      $2("g-opts").innerHTML = (selects.length ? `<div class="grid2 g-choices">${selects.map(optionHtml).join("")}</div>` : "") + (others.length ? `<div class="${others.length > 1 ? "grid2" : ""}">${others.map(optionHtml).join("")}</div>` : "") + (g.names || g.namesLabel ? field(g.namesLabel || "T\xEAn c\xE1c \u0111i\u1EC3m (c\xE1ch nhau b\u1EDFi d\u1EA5u ph\u1EA9y)", `<input type="text" id="g-names" value="${esc5(g.names || "")}" spellcheck="false" placeholder="${esc5(g.names || "")}">`) + hint : "") + (flags.length ? `<div class="sw-grid">${flags.map(optionHtml).join("")}</div>` : "");
      $2("g-opts").querySelectorAll("input,select").forEach((el) => el.addEventListener("input", schedule));
      const NAMES2 = kind !== "geo" ? null : {
        pyramid: { opt: "base", tri: "S,A,B,C", quad: "S,A,B,C,D" },
        prism: { opt: "kind", triangle: "A,B,C,A',B',C'", box: "A,B,C,D,A',B',C',D'", cube: "A,B,C,D,A',B',C',D'" },
        round: { opt: "kind", cone: "S,O,A", cylinder: "O,O',A", frustum: "O,O'", sphere: "O,A" }
      }[g.id];
      const namesEl = $2("g-names");
      if (NAMES2 && namesEl) {
        const sel = $2("g-opts").querySelector(`select[data-opt="${NAMES2.opt}"]`);
        let last = NAMES2[sel.value] || g.names;
        namesEl.value = last;
        sel.addEventListener("change", () => {
          const next = NAMES2[sel.value];
          if (next && (namesEl.value.trim() === last || !namesEl.value.trim())) namesEl.value = next;
          last = next || last;
          render();
        });
      }
    }
    function build() {
      if (kind === "bbt") {
        if ($2("b-mode").value === "manual") return manualVariationTable({ x: $2("m-x").value, dy: $2("m-dy").value, y: $2("m-y").value, label: $2("m-label").value.trim() || "f(x)", fontPt: fontPt2, domain: $2("m-domain").value.trim() });
        const r = variationTable($2("b-expr").value, { lo: num2($2("b-lo").value), hi: num2($2("b-hi").value), domain: $2("b-domain").value.trim(), fontPt: fontPt2 });
        return r;
      }
      if (kind === "plot") {
        const exprs = $2("p-expr").value.split("\n").map((s) => s.trim()).filter(Boolean);
        if (!exprs.length) throw new Error("Nh\u1EADp \xEDt nh\u1EA5t m\u1ED9t h\xE0m s\u1ED1");
        return plotFunctions(exprs, { xmin: num2($2("p-xmin").value), xmax: num2($2("p-xmax").value), ymin: num2($2("p-ymin").value), ymax: num2($2("p-ymax").value), grid: $2("p-grid").checked, asymptotes: $2("p-asym").checked, points: $2("p-points").checked, legend: $2("p-legend").checked });
      }
      if (kind === "region") {
        const r = regionFigure($2("r-ineq").value.split("\n"), { mode: $2("r-mode").value, xmin: num2($2("r-xmin").value), xmax: num2($2("r-xmax").value), ymin: num2($2("r-ymin").value), ymax: num2($2("r-ymax").value), grid: $2("r-grid").checked, vertices: $2("r-vertices").checked, labelLines: $2("r-lines").checked });
        if (r.empty) throw new Error("H\u1EC7 b\u1EA5t ph\u01B0\u01A1ng tr\xECnh v\xF4 nghi\u1EC7m (mi\u1EC1n nghi\u1EC7m r\u1ED7ng) trong khung nh\xECn n\xE0y.");
        return r;
      }
      const g = CATALOGS[kind].find((x) => x.id === $2("g-kind").value);
      const o = { names: $2("g-names") ? $2("g-names").value : "" };
      $2("g-opts").querySelectorAll("[data-opt]").forEach((s) => {
        o[s.dataset.opt] = s.value;
      });
      $2("g-opts").querySelectorAll('input[id^="go-"]').forEach((c) => {
        o[c.id.slice(3)] = c.checked;
      });
      return g.make(o);
    }
    async function render() {
      $2("fig-error").textContent = "";
      if (kind === "bbt") fontPt2 = await figurePt();
      try {
        current = build();
        $2("fig-preview").innerHTML = current.svg;
        $2("fig-note").textContent = current.note || "";
      } catch (e3) {
        current = null;
        $2("fig-note").textContent = "";
        $2("fig-error").textContent = e3.message;
      }
      ["fig-insert", "fig-png", "fig-dl-png", "fig-dl-svg"].forEach((id) => {
        $2(id).disabled = !current;
      });
    }
    function schedule() {
      clearTimeout(timer);
      timer = setTimeout(render, 250);
    }
    function show(k) {
      kind = k;
      $2("fig-size").hidden = k !== "bbt";
      $2("fig-kind").value = k;
      $2("fig-form").innerHTML = forms[k]();
      $2("fig-sub").innerHTML = "";
      const sub4 = $2("fig-form").querySelector(".sub-field");
      if (sub4) $2("fig-sub").appendChild(sub4);
      $2("fig-form").querySelectorAll("input,textarea,select").forEach((el) => el.addEventListener("input", schedule));
      if (CATALOGS[k]) {
        $2("g-kind").addEventListener("change", () => {
          geoOptions();
          render();
        });
        geoOptions();
      }
      if (k === "bbt") $2("b-mode").addEventListener("change", () => {
        const m = $2("b-mode").value === "manual";
        $2("b-auto").hidden = m;
        $2("b-manual").hidden = !m;
        render();
      });
      if (k === "bbt") $2("b-preset").addEventListener("change", () => {
        if ($2("b-preset").value) {
          $2("b-expr").value = $2("b-preset").value;
          render();
        }
      });
      if (k === "plot") $2("p-preset").addEventListener("change", () => {
        const p2 = PRESETS.find((x) => x.id === $2("p-preset").value);
        if (!p2) return;
        $2("p-expr").value = p2.expr;
        $2("p-xmin").value = p2.win[0];
        $2("p-xmax").value = p2.win[1];
        $2("p-ymin").value = p2.win[2];
        $2("p-ymax").value = p2.win[3];
        render();
      });
      render();
    }
    $2("fig-kind").addEventListener("change", () => show($2("fig-kind").value));
    const title = () => {
      var _a8;
      return CATALOGS[kind] ? ((_a8 = CATALOGS[kind].find((x) => x.id === $2("g-kind").value)) == null ? void 0 : _a8.label) || "H\xECnh v\u1EBD" : { bbt: "B\u1EA3ng bi\u1EBFn thi\xEAn", plot: "\u0110\u1ED3 th\u1ECB h\xE0m s\u1ED1", region: "Mi\u1EC1n nghi\u1EC7m" }[kind];
    };
    $2("fig-insert").addEventListener("click", async () => {
      try {
        await io.replaceSelection(sceneToPackage(current.scene, { name: title(), alt: title(), float: $2("fig-float").value === "float" }));
        $2("fig-out").innerHTML = '<span class="ok">\u0110\xE3 ch\xE8n v\xE0o Word t\u1EA1i con tr\u1ECF (h\xECnh s\u1EEDa \u0111\u01B0\u1EE3c).</span>';
      } catch (e3) {
        $2("fig-out").innerHTML = `<span class="bad">L\u1ED7i: ${esc5(e3.message)}</span>`;
      }
    });
    $2("fig-png").addEventListener("click", async () => {
      try {
        const png = await svgToPngPx(current.svg, current.width, current.height, 3);
        await io.replaceSelection(makePicturePackage(png, { widthPt: current.width * 0.75, heightPt: current.height * 0.75, alt: title(), name: "Hinh", center: true }));
        $2("fig-out").innerHTML = '<span class="ok">\u0110\xE3 ch\xE8n \u1EA3nh PNG v\xE0o Word.</span>';
      } catch (e3) {
        $2("fig-out").innerHTML = `<span class="bad">L\u1ED7i: ${esc5(e3.message)}</span>`;
      }
    });
    $2("fig-dl-png").addEventListener("click", async () => {
      try {
        downloadBlob(await svgToPngPx(current.svg, current.width, current.height, 3), `${title()}.png`);
      } catch (e3) {
        $2("fig-out").innerHTML = `<span class="bad">L\u1ED7i: ${esc5(e3.message)}</span>`;
      }
    });
    $2("fig-dl-svg").addEventListener("click", () => downloadBlob(new TextEncoder().encode(current.svg), `${title()}.svg`, "image/svg+xml"));
    show("bbt");
  }
  var esc5, num2, sw, field;
  var init_figures_ui = __esm({
    "taskpane/figures-ui.js"() {
      init_bbt();
      init_plot();
      init_region();
      init_geometry();
      init_chem();
      init_physics();
      init_bio();
      init_scene();
      init_mt_settings();
      init_picture();
      esc5 = (s) => String(s != null ? s : "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
      num2 = (v) => v === "" || v === null || v === void 0 || Number.isNaN(Number(v)) ? void 0 : Number(v);
      sw = (id, label, checked = false) => `<label class="switch"><input type="checkbox" id="${id}"${checked ? " checked" : ""}><span class="switch-track"></span><span>${label}</span></label>`;
      field = (label, inner) => `<label class="field"><span>${label}</span>${inner}</label>`;
    }
  });

  // src/tikz.js
  function colour(expr) {
    const parts = String(expr).trim().split("!");
    const base = COLORS3[parts[0]];
    if (!base) throw new TikzError("colour " + expr);
    if (parts.length === 1) return hex2(base);
    const p2 = parseFloat(parts[1]) / 100, other = parts[2] ? COLORS3[parts[2]] : COLORS3.white;
    if (!other) throw new TikzError("colour " + expr);
    return hex2(base.map((v, i) => v * p2 + other[i] * (1 - p2)));
  }
  function splitTop(s, sep) {
    const out = [];
    let depth = 0, cur = "";
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === "\\") {
        cur += c + (s[++i] || "");
        continue;
      }
      if ("{[(".includes(c)) depth++;
      else if ("}])".includes(c)) depth--;
      if (c === sep && depth === 0) {
        out.push(cur);
        cur = "";
      } else cur += c;
    }
    out.push(cur);
    return out;
  }
  function parseOpts(str) {
    const o = {};
    for (const part of splitTop(str || "", ",")) {
      const p2 = part.trim();
      if (!p2) continue;
      const eq = p2.indexOf("=");
      if (eq < 0) o[p2] = true;
      else o[p2.slice(0, eq).trim()] = p2.slice(eq + 1).trim();
    }
    return o;
  }
  function colourOpt(opts) {
    for (const k of Object.keys(opts)) {
      if (FLAGS.has(k) || opts[k] !== true) continue;
      try {
        return colour(k);
      } catch (e3) {
      }
    }
    return null;
  }
  function nodeLatex(text) {
    let t = text.replace(/\\(?:tiny|small|footnotesize|large|Large|LARGE|huge|bfseries|itshape|sffamily|normalsize)\b\s*/g, "").trim();
    if (!t) return "";
    if (/^\$[\s\S]*\$$/.test(t) && t.indexOf("$", 1) === t.length - 1) return t.slice(1, -1);
    if (t.includes("$")) return t.replace(/\$([^$]*)\$/g, "$1");
    return /^[\d\s+\-−×:=.,]*$/.test(t) ? t : `\\text{${t}}`;
  }
  function tikzToScene(code, { scale = 1, fs = 16 } = {}) {
    const S = CM * scale;
    const items = [], nodes = /* @__PURE__ */ new Map();
    const pt = (x, y) => [x * S, -y * S];
    let src = code.replace(/%[^\n]*/g, "");
    const coord = (tok, cur) => {
      const m = /^\s*\(([^)]*)\)\s*$/.exec(tok);
      if (!m) throw new TikzError("coordinate " + tok);
      const inner = m[1].trim();
      if (/^[A-Za-z][\w.]*$/.test(inner)) {
        const n = nodes.get(inner);
        if (!n) throw new TikzError("node " + inner);
        return { p: n.c, node: n };
      }
      const polar = /^(-?[\d.]+)\s*:\s*(-?[\d.]+)$/.exec(inner);
      if (polar) {
        const a = parseFloat(polar[1]) * Math.PI / 180, r = parseFloat(polar[2]);
        return { p: pt(r * Math.cos(a), r * Math.sin(a)) };
      }
      const xy = /^\{?\s*(-?[\d.]+)\s*(cm)?\s*\}?\s*,\s*\{?\s*(-?[\d.]+)\s*(cm)?\s*\}?$/.exec(inner);
      if (xy) return { p: pt(parseFloat(xy[1]), parseFloat(xy[3])) };
      throw new TikzError("coordinate " + inner);
    };
    const clip2 = (from, to, node3) => {
      if (!node3) return to;
      const d = [from[0] - to[0], from[1] - to[1]], L = Math.hypot(d[0], d[1]) || 1;
      const u = [d[0] / L, d[1] / L];
      if (node3.shape === "circle") return [to[0] + u[0] * node3.r, to[1] + u[1] * node3.r];
      const t = Math.min(Math.abs(u[0]) > 1e-6 ? node3.hw / Math.abs(u[0]) : 1e9, Math.abs(u[1]) > 1e-6 ? node3.hh / Math.abs(u[1]) : 1e9);
      return [to[0] + u[0] * t, to[1] + u[1] * t];
    };
    const addNode = (opts, name, c, text) => {
      const tex = nodeLatex(text);
      const size = opts["minimum size"] ? dim(opts["minimum size"]) : 0;
      const w0 = opts["minimum width"] ? dim(opts["minimum width"]) : size, h0 = opts["minimum height"] ? dim(opts["minimum height"]) : size;
      const inner = opts["inner sep"] ? dim(opts["inner sep"]) : 5;
      const box = tex ? labelBox(tex, fs) : { w: 0, h: 0 };
      const shape2 = opts.circle ? "circle" : "rect";
      const draw = Boolean(opts.draw);
      const hw = Math.max(w0, box.w + 2 * inner) / 2 * (draw || size ? 1 : 0) || box.w / 2, hh = Math.max(h0, box.h + 2 * inner) / 2 * (draw || size ? 1 : 0) || box.h / 2;
      const r = Math.max(w0, h0, shape2 === "circle" ? Math.max(box.w, box.h) + 2 * inner : 0) / 2;
      if (draw) {
        const sw4 = opts["line width"] ? dim(opts["line width"]) : 1.2;
        const fill = opts.fill ? "#" + colour(opts.fill) : void 0;
        if (shape2 === "circle") items.push({ t: "ellipse", cx: c[0], cy: c[1], rx: r, ry: r, sw: sw4, fill });
        else items.push({ t: "rect", x: c[0] - hw, y: c[1] - hh, w: 2 * hw, h: 2 * hh, sw: sw4, fill });
      }
      if (tex) items.push({ t: "label", latex: tex, x: c[0], y: c[1], size: fs, anchor: "c" });
      if (name) nodes.set(name, { c, shape: shape2, r: shape2 === "circle" ? r : 0, hw, hh });
    };
    const place2 = (pos, base, w, h) => {
      const dx = /right/.test(pos) ? 1 : /left/.test(pos) ? -1 : 0, dy = /above/.test(pos) ? -1 : /below/.test(pos) ? 1 : 0;
      return [base[0] + dx * (w / 2 + 3), base[1] + dy * (h / 2 + 3)];
    };
    for (const raw of splitTop(src, ";")) {
      const st = raw.trim();
      if (!st) continue;
      const head = /^\\(draw|fill|filldraw|node|path)\b\s*(\[[^\]]*\])?\s*([\s\S]*)$/.exec(st);
      if (!head) throw new TikzError("statement " + st.slice(0, 30));
      const cmd = head[1], opts = parseOpts((head[2] || "").slice(1, -1)), rest = head[3].trim();
      if (cmd === "node") {
        const m = /^(?:\(([^)]*)\)\s*)?at\s*(\([^)]*\))\s*\{([\s\S]*)\}$/.exec(rest);
        if (!m) throw new TikzError("node " + rest.slice(0, 30));
        addNode(opts, m[1], coord(m[2]).p, m[3]);
        continue;
      }
      const doDraw = cmd === "draw" || cmd === "filldraw" || opts.draw, doFill = cmd === "fill" || cmd === "filldraw" || opts.fill;
      const bare = colourOpt(opts);
      const fill = doFill ? "#" + (opts.fill ? colour(opts.fill) : cmd === "fill" && bare ? bare : "000000") : void 0;
      const sw4 = opts["line width"] ? dim(opts["line width"]) : 1.2;
      const arrow = Boolean(opts["->"] || opts["-stealth"]);
      const stroke = doDraw ? opts.draw && opts.draw !== true ? "#" + colour(opts.draw) : cmd !== "fill" && bare ? "#" + bare : void 0 : void 0;
      const toks = rest.match(/\(\s*[^()]*\)|--|\bcycle\b|\brectangle\b|\bcircle\b|\bgrid\b|\barc\b|\bnode\b\s*(?:\[[^\]]*\])?\s*(?:\([^)]*\))?\s*\{(?:[^{}]|\{[^{}]*\})*\}|\bto\b/g) || [];
      let cur = null, curNode = null, i = 0, pending = null, pathPts = [];
      const flush = () => {
        if (pathPts.length > 1 && (doDraw || doFill)) items.push({ t: "poly", pts: pathPts, closed: false, sw: sw4, fill, color: stroke, noStroke: !doDraw });
        pathPts = [];
      };
      while (i < toks.length) {
        const t = toks[i];
        if (t === "--" || t === "to") {
          i++;
          continue;
        }
        if (t === "cycle") {
          if (pathPts.length) {
            items.push({ t: "poly", pts: pathPts, closed: true, sw: sw4, fill, color: stroke });
            pathPts = [];
          }
          i++;
          continue;
        }
        if (t === "rectangle") {
          const q = coord(toks[++i]).p;
          const x = Math.min(cur[0], q[0]), y = Math.min(cur[1], q[1]);
          items.push({ t: "rect", x, y, w: Math.abs(q[0] - cur[0]), h: Math.abs(q[1] - cur[1]), sw: sw4, fill, color: stroke, noStroke: !doDraw });
          cur = q;
          pathPts = [];
          i++;
          continue;
        }
        if (t === "circle") {
          const m = /\(\s*([\d.]+)\s*(cm)?\s*\)/.exec(toks[++i]);
          const r = parseFloat(m[1]) * S;
          items.push({ t: "ellipse", cx: cur[0], cy: cur[1], rx: r, ry: r, sw: sw4, fill, color: stroke, noStroke: !doDraw });
          pathPts = [];
          i++;
          continue;
        }
        if (t === "grid") {
          const q = coord(toks[++i]).p;
          for (let x = Math.min(cur[0], q[0]); x <= Math.max(cur[0], q[0]) + 0.5; x += S) items.push({ t: "line", x1: x, y1: cur[1], x2: x, y2: q[1], w: sw4 });
          for (let y = Math.min(cur[1], q[1]); y <= Math.max(cur[1], q[1]) + 0.5; y += S) items.push({ t: "line", x1: cur[0], y1: y, x2: q[0], y2: y, w: sw4 });
          i++;
          continue;
        }
        if (t === "arc") {
          const m = /\(\s*(-?[\d.]+)\s*:\s*(-?[\d.]+)\s*:\s*([\d.]+)\s*\)/.exec(toks[++i]);
          const a1 = parseFloat(m[1]), a2 = parseFloat(m[2]), r = parseFloat(m[3]) * S;
          const c0 = [cur[0] - r * Math.cos(a1 * Math.PI / 180), cur[1] + r * Math.sin(a1 * Math.PI / 180)];
          for (let k = 1; k <= 12; k++) {
            const a = (a1 + (a2 - a1) * k / 12) * Math.PI / 180;
            pathPts.push([c0[0] + r * Math.cos(a), c0[1] - r * Math.sin(a)]);
          }
          cur = pathPts[pathPts.length - 1];
          i++;
          continue;
        }
        if (/^node/.test(t)) {
          const m = /^node\s*(\[[^\]]*\])?\s*(?:\(([^)]*)\)\s*)?\{([\s\S]*)\}$/.exec(t);
          const o = parseOpts((m[1] || "").slice(1, -1));
          if (cur && toks[i + 1] === void 0) addNode(o, m[2], cur, m[3]);
          else if (cur) pending = { o, name: m[2], text: m[3] };
          else addNode(o, m[2], cur, m[3]);
          i++;
          continue;
        }
        const c = coord(t);
        if (cur === null) {
          cur = c.p;
          curNode = c.node;
          pathPts = [cur];
        } else {
          let from = clip2(c.p, cur, curNode), to = clip2(cur, c.p, c.node);
          if (curNode || c.node) {
            flush();
            pathPts = [from, to];
          } else {
            pathPts.push(c.p);
            to = c.p;
            from = cur;
          }
          if (pending) {
            const mid3 = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2], tex = nodeLatex(pending.text), b = tex ? labelBox(tex, fs) : { w: 0, h: 0 };
            const pos = Object.keys(pending.o).filter((k) => /above|below|left|right/.test(k)).join(" ");
            const p2 = place2(pos, mid3, b.w, b.h);
            if (tex) items.push({ t: "label", latex: tex, x: p2[0], y: p2[1], size: fs, anchor: "c" });
            pending = null;
          }
          if (arrow && (curNode || c.node)) {
            items.push({ t: "line", x1: from[0], y1: from[1], x2: to[0], y2: to[1], w: sw4, arrow: true });
            pathPts = [];
          } else if (curNode || c.node) {
            items.push({ t: "line", x1: from[0], y1: from[1], x2: to[0], y2: to[1], w: sw4 });
            pathPts = [];
          }
          cur = c.p;
          curNode = c.node;
        }
        i++;
      }
      if (arrow && pathPts.length > 1) {
        const a = pathPts[pathPts.length - 2], b = pathPts[pathPts.length - 1];
        items.push({ t: "line", x1: a[0], y1: a[1], x2: b[0], y2: b[1], w: sw4, arrow: true });
        pathPts = pathPts.slice(0, -1).length > 1 ? pathPts.slice(0, -1) : [];
      }
      flush();
    }
    return fit(items);
  }
  function fit(items, pad = 3) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    const grow = (x, y) => {
      x0 = Math.min(x0, x);
      x1 = Math.max(x1, x);
      y0 = Math.min(y0, y);
      y1 = Math.max(y1, y);
    };
    for (const it of items) {
      if (it.t === "line") {
        grow(it.x1, it.y1);
        grow(it.x2, it.y2);
      } else if (it.t === "poly") it.pts.forEach((q) => grow(q[0], q[1]));
      else if (it.t === "rect") {
        grow(it.x, it.y);
        grow(it.x + it.w, it.y + it.h);
      } else if (it.t === "ellipse") {
        grow(it.cx - it.rx, it.cy - it.ry);
        grow(it.cx + it.rx, it.cy + it.ry);
      } else if (it.t === "dot") grow(it.x, it.y);
      else if (it.t === "label") {
        const b = labelBox(it.latex, it.size || 16);
        grow(it.x - b.w / 2, it.y - b.h / 2);
        grow(it.x + b.w / 2, it.y + b.h / 2);
      }
    }
    if (!Number.isFinite(x0)) throw new TikzError("empty picture");
    const dx = pad - x0, dy = pad - y0;
    const mv = (it) => {
      const o = __spreadValues({}, it);
      if (o.t === "line") {
        o.x1 += dx;
        o.x2 += dx;
        o.y1 += dy;
        o.y2 += dy;
      } else if (o.t === "poly") o.pts = o.pts.map((q) => [q[0] + dx, q[1] + dy]);
      else if (o.t === "rect") {
        o.x += dx;
        o.y += dy;
      } else if (o.t === "ellipse") {
        o.cx += dx;
        o.cy += dy;
      } else if (o.t === "dot" || o.t === "label") {
        o.x += dx;
        o.y += dy;
      }
      return o;
    };
    return { width: x1 - x0 + 2 * pad, height: y1 - y0 + 2 * pad, items: items.map(mv) };
  }
  function clockScene(hourDeg, minDeg, fs = 11) {
    const R = 1.5 * 0.62 * CM, items = [];
    const at2 = (deg, r) => {
      const a = deg * Math.PI / 180;
      return [r * Math.cos(a), -r * Math.sin(a)];
    };
    items.push({ t: "ellipse", cx: 0, cy: 0, rx: R, ry: R, sw: 1.4, fill: "#ffffff" });
    for (let a = 0; a < 360; a += 30) {
      const p2 = at2(a, R * 0.87), q = at2(a, R);
      items.push({ t: "line", x1: p2[0], y1: p2[1], x2: q[0], y2: q[1], w: 1, color: "#4d4d4d" });
    }
    for (let n = 1; n <= 12; n++) {
      const p2 = at2(90 - 30 * n, R * 0.7);
      items.push({ t: "label", latex: String(n), x: p2[0], y: p2[1], size: fs, anchor: "c" });
    }
    const h = at2(hourDeg, 0.72 * 0.62 * CM), m = at2(minDeg, 1.05 * 0.62 * CM);
    items.push({ t: "line", x1: 0, y1: 0, x2: h[0], y2: h[1], w: 2.4, arrow: true, color: "#b30000" }, { t: "line", x1: 0, y1: 0, x2: m[0], y2: m[1], w: 1.6, arrow: true, color: "#1f3f9f" }, { t: "dot", x: 0, y: 0, r: 2.2 });
    return fit(items);
  }
  var TikzError, CM, COLORS3, hex2, dim, FLAGS;
  var init_tikz = __esm({
    "src/tikz.js"() {
      init_scene();
      TikzError = class extends Error {
      };
      CM = 37.795;
      COLORS3 = { black: [0, 0, 0], white: [255, 255, 255], red: [255, 0, 0], blue: [0, 0, 255], green: [0, 255, 0], yellow: [255, 255, 0], orange: [255, 128, 0], pink: [255, 191, 191], gray: [128, 128, 128], brown: [191, 128, 64], purple: [191, 0, 191], cyan: [0, 255, 255], magenta: [255, 0, 255] };
      hex2 = (rgb) => rgb.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
      dim = (s) => {
        const m = /^\s*(-?[\d.]+)\s*(cm|mm|pt|em|ex)?\s*$/.exec(s || "");
        if (!m) throw new TikzError("dimension " + s);
        return parseFloat(m[1]) * { cm: CM, mm: CM / 10, pt: CM / 28.45, em: 10, ex: 5 }[m[2] || "cm"];
      };
      FLAGS = /* @__PURE__ */ new Set(["draw", "fill", "circle", "rectangle", "rounded corners", "thick", "thin", "dashed", "dotted"]);
    }
  });

  // src/worksheet-tex.js
  function splitTop2(s, re) {
    const out = [];
    let depth = 0, math = false, cur = "";
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === "\\") {
        if (depth === 0 && !math) {
          const m = re.exec(s.slice(i));
          if (m && m.index === 0) {
            out.push(cur);
            cur = "";
            i += m[0].length - 1;
            continue;
          }
        }
        cur += c + (s[++i] || "");
        continue;
      }
      if (c === "$") math = !math;
      if (!math) {
        if (c === "{") depth++;
        else if (c === "}") depth--;
      }
      if (depth === 0 && !math) {
        const m = re.exec(s.slice(i));
        if (m && m.index === 0 && m[0] && c !== "\\") {
          out.push(cur);
          cur = "";
          i += m[0].length - 1;
          continue;
        }
      }
      cur += c;
    }
    out.push(cur);
    return out;
  }
  function envEnd(s, name, from) {
    const open = `\\begin{${name}}`, close = `\\end{${name}}`;
    let depth = 1, i = from;
    while (depth > 0) {
      const o = s.indexOf(open, i), c = s.indexOf(close, i);
      if (c < 0) throw new Error("unterminated " + name);
      if (o >= 0 && o < c) {
        depth++;
        i = o + open.length;
      } else {
        depth--;
        i = c + close.length;
        if (depth === 0) return [c, i];
      }
    }
    return [from, from];
  }
  function group3(s, i) {
    let depth = 0, j = i;
    for (; j < s.length; j++) {
      if (s[j] === "\\") {
        j++;
        continue;
      }
      if (s[j] === "{") depth++;
      else if (s[j] === "}" && --depth === 0) break;
    }
    return [s.slice(i + 1, j), j + 1];
  }
  function unbox(text) {
    const t = text.trim();
    const m = /^\\(fbox|fcolorbox)\b/.exec(t);
    if (!m) return { text, box: false };
    let i = m[0].length;
    const skip = m[1] === "fcolorbox" ? 2 : 0;
    for (let k = 0; k < skip; k++) {
      while (t[i] === " ") i++;
      i = group3(t, i)[1];
    }
    while (t[i] === " ") i++;
    if (t[i] !== "{") return { text, box: false };
    const [inner, end] = group3(t, i);
    return end >= t.length ? { text: inner.replace(/\\rule\{[^}]*\}\{[^}]*\}/g, "").replace(/^\\ |\\ $/g, "").trim(), box: true } : { text, box: false };
  }
  function parseSpec(spec) {
    const cols = [];
    let vlines = false, i = 0;
    const s = spec.replace(/\s+/g, "");
    while (i < s.length) {
      const c = s[i];
      if (c === "|") {
        vlines = true;
        i++;
      } else if (c === "*") {
        const [n, e3] = group3(s, i + 1);
        const [inner, e22] = group3(s, e3);
        const sub4 = parseSpec(inner);
        for (let k = 0; k < parseInt(n, 10); k++) cols.push(...sub4.cols);
        vlines = vlines || sub4.vlines;
        i = e22;
      } else if (c === ">" || c === "@" || c === "!" || c === "<") {
        const [, e3] = group3(s, i + 1);
        i = e3;
      } else if (c === "p" || c === "m" || c === "b") {
        const [w, e3] = group3(s, i + 1);
        cols.push({ align: "left", width: Math.round(cmOf(w) * CM_DXA) });
        i = e3;
      } else if ("clr".includes(c)) {
        cols.push({ align: { c: "center", l: "left", r: "right" }[c], width: null });
        i++;
      } else i++;
    }
    return { cols, vlines };
  }
  function tabular(inner, spec, ctx, f, centered) {
    const { cols, vlines } = parseSpec(spec);
    const rowsSrc = splitTop2(inner, /^\\\\(\[[^\]]*\])?/);
    let hlines = false;
    const rows = [], heights = [];
    for (const r0 of rowsSrc) {
      let r = r0;
      const gapM = /^\s*$/.test(r) ? null : null;
      if (/\\hline/.test(r)) hlines = true;
      r = r.replace(/\\hline/g, "").replace(/\\(?:cline)\{[^}]*\}/g, "");
      if (!r.trim()) continue;
      const cells = splitTop2(r, /^&/);
      const rule = /\\rule\{[^}]*\}\{([^}]*)\}/.exec(r);
      heights.push(((rule ? cmOf(rule[1]) : 0.75) + 0.1) * CM_DXA);
      rows.push(cells.map((c, k) => {
        const fill = /\\cellcolor\{([^}]*)\}/.exec(c);
        const col = cols[k] || { align: "center" };
        const text = c.replace(/\\cellcolor\{[^}]*\}/g, "").replace(/\\rule\{[^}]*\}\{[^}]*\}/g, "");
        const u = unbox(text);
        return { xml: cellPara(texToRuns(u.text.trim(), ctx, f), { jc: col.align }), fill: fill ? safeColour(fill[1]) : null, box: u.box };
      }));
    }
    const n = Math.max(...rows.map((r) => r.length), cols.length);
    const widths = Array.from({ length: n }, (_, k) => cols[k] && cols[k].width || 0);
    const known = widths.reduce((a, b) => a + b, 0), unknown = widths.filter((w) => !w).length;
    const share = unknown ? Math.max(1100, Math.min(2600, Math.floor((W_DXA - known) / unknown))) : 0;
    const w2 = widths.map((w) => w || share);
    rows.forEach((r) => {
      while (r.length < n) r.push({ xml: cellPara("") });
    });
    return tbl({ rows, widths: w2, borders: vlines ? { top: 1, left: 1, bottom: 1, right: 1, insideH: 1, insideV: 1 } : hlines ? { top: 1, bottom: 1, insideH: 1 } : null, jc: centered ? "center" : null, heights }) + para("", { after: 60 });
  }
  function paragraphs(text, ctx, f, centered) {
    let out = "";
    const parts = text.split(/(\\par\b|\n\s*\n|\\medskip|\\bigskip|\\smallskip|\\vspace\*?\{[^}]*\})/);
    let before = 0;
    for (const part of parts) {
      const sp = /^\\(medskip|bigskip|smallskip)$/.exec(part), vs = /^\\vspace\*?\{([^}]*)\}$/.exec(part);
      if (sp) {
        before += SKIP[sp[1]];
        continue;
      }
      if (vs) {
        before += cmOf(vs[1]) * CM_DXA;
        continue;
      }
      if (/^(\\par\b|\n\s*\n)$/.test(part)) continue;
      const t = part.replace(/\\(noindent|centering|sffamily|hspace\*?\{[^}]*\}\s*$)/g, "").trim();
      if (!t) continue;
      const chunks = splitTop2(t, /^\\hfill\b/).map((c) => c.trim()).filter(Boolean);
      if (chunks.length >= 2 && chunks.length <= 6) {
        const w = Math.floor(W_DXA / chunks.length);
        out += tbl({ rows: [chunks.map((c, k) => {
          const u = unbox(c);
          return { xml: cellPara(texToRuns(u.text, ctx, f), { jc: "center" }), box: u.box };
        })], widths: chunks.map(() => w), heights: [0.9 * CM_DXA] }) + para("", { after: Math.max(60, before) });
        before = 0;
      } else {
        out += para(texToRuns(chunks.join(" "), ctx, f), { jc: centered ? "center" : void 0, before: Math.round(before), after: 80, line: 340 });
        before = 0;
      }
    }
    if (before > 200) out += para("", { after: Math.round(before) });
    return out;
  }
  function texBlocks(src, ctx, f, centered = false) {
    let s = src.replace(/\\(renewcommand|setlength)\{[^}]*\}\{[^}]*\}/g, "").replace(/\\setlength\{[^}]*\}\{[^}]*\}/g, "");
    let out = "", i = 0;
    while (i < s.length) {
      const b = s.indexOf("\\begin{", i);
      if (b < 0) {
        out += paragraphs(s.slice(i), ctx, f, centered);
        break;
      }
      out += paragraphs(s.slice(i, b), ctx, f, centered);
      const [name, afterName] = (() => {
        const e3 = s.indexOf("}", b);
        return [s.slice(b + 7, e3), e3 + 1];
      })();
      if (/^(array|aligned|align\*?|equation\*?|gather\*?|cases|matrix)$/.test(name)) {
        const [bodyEnd3, next2] = envEnd(s, name, afterName);
        out += paragraphs(s.slice(b, next2), ctx, f, centered);
        i = next2;
        continue;
      }
      const [bodyEnd2, next] = envEnd(s, name, afterName);
      const inner = s.slice(afterName, bodyEnd2);
      if (name === "center") out += texBlocks(inner, ctx, f, true);
      else if (name === "tabular") {
        let rest = inner, spec = "";
        while (rest[0] === " ") rest = rest.slice(1);
        if (rest[0] === "{") {
          const [g, e3] = group3(rest, 0);
          spec = g;
          rest = rest.slice(e3);
        }
        out += tabular(rest, spec, ctx, f, centered);
      } else if (name === "tikzpicture") {
        let rest = inner, o = "";
        if (rest.trimStart()[0] === "[") {
          const t = rest.trimStart();
          const e3 = t.indexOf("]");
          o = t.slice(1, e3);
          rest = t.slice(e3 + 1);
        }
        out += para(tikzRun(rest, o, ctx), { jc: centered ? "center" : void 0, after: 100 });
      } else if (name === "minipage") {
        const cells = [];
        let at2 = b, nx = next;
        for (; ; ) {
          const e1 = s.indexOf("}", at2 + 7), nm2 = s.slice(at2 + 7, e1);
          const [be, nn] = envEnd(s, "minipage", e1 + 1);
          let body = s.slice(e1 + 1, be);
          let wm = /^\s*(?:\[[^\]]*\])?\s*\{([^}]*)\}/.exec(body);
          const frac = wm ? parseFloat(wm[1]) || 0.47 : 0.47;
          body = wm ? body.slice(wm[0].length) : body;
          cells.push({ xml: texBlocks(body, ctx, f, false) || cellPara(""), w: Math.round(frac * W_DXA) });
          nx = nn;
          const m = /^\s*(?:\\hfill|\\quad|\\qquad)?\s*\\begin\{minipage\}/.exec(s.slice(nn));
          if (!m) break;
          at2 = nn + m[0].length - "\\begin{minipage}".length;
        }
        out += tbl({ rows: [cells.map((c) => ({ xml: c.xml.replace(/<\/w:tbl>$/, "</w:tbl><w:p/>") }))], widths: cells.map((c) => c.w) }) + para("", { after: 60 });
        i = nx;
        continue;
      } else if (name === "enumerate" || name === "itemize") {
        const items = inner.split(/\\item\b/).slice(1);
        items.forEach((it, k) => {
          const mark = name === "enumerate" ? `${k + 1}. ` : "\u2022 ";
          out += para(`<w:r><w:rPr><w:b/><w:sz w:val="${ctx.baseSz || 26}"/></w:rPr><w:t xml:space="preserve">${esc6(mark)}</w:t></w:r>${texToRuns(it.trim(), ctx, f)}`, { ind: 360, after: 80, line: 340 });
        });
      } else if (name === "multicols") {
        out += texBlocks(inner.replace(/^\s*\{\d+\}/, ""), ctx, f, centered);
      } else out += texBlocks(inner, ctx, f, centered);
      i = next;
    }
    return out;
  }
  var CM_DXA, W_DXA, cmOf, NOB, LINES, cellPara, tbl, safeColour, SKIP;
  var init_worksheet_tex = __esm({
    "src/worksheet-tex.js"() {
      init_worksheet_docx();
      init_tikz();
      CM_DXA = 567;
      W_DXA = 9638;
      cmOf = (t) => {
        const m = /(-?[\d.]+)\s*(cm|mm|pt|em|ex)?/.exec(t || "");
        return m ? parseFloat(m[1]) * ({ mm: 0.1, pt: 0.0352, em: 0.4, ex: 0.2 }[m[2]] || 1) : 0;
      };
      NOB = '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>';
      LINES = (b) => `<w:tblBorders>${["top", "left", "bottom", "right", "insideH", "insideV"].map((k) => `<w:${k} w:val="${b[k] ? "single" : "nil"}" w:sz="6" w:space="0" w:color="222222"/>`).join("")}</w:tblBorders>`;
      cellPara = (inner, o = {}) => para(inner, __spreadValues({ after: 0 }, o));
      tbl = ({ rows, widths, borders, jc, heights = [] }) => `<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/>${jc ? `<w:jc w:val="${jc}"/>` : ""}${borders ? LINES(borders) : NOB}<w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="60" w:type="dxa"/><w:right w:w="60" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${w}"/>`).join("")}</w:tblGrid>${rows.map((r, ri) => `<w:tr><w:trPr><w:cantSplit/>${heights[ri] ? `<w:trHeight w:val="${Math.round(heights[ri])}" w:hRule="atLeast"/>` : ""}</w:trPr>${r.map((c, k) => `<w:tc><w:tcPr><w:tcW w:w="${widths[k]}" w:type="dxa"/>${c.fill ? `<w:shd w:val="clear" w:color="auto" w:fill="${c.fill}"/>` : ""}${c.box ? "<w:tcBorders>" + ["top", "left", "bottom", "right"].map((k2) => `<w:${k2} w:val="single" w:sz="8" w:space="0" w:color="222222"/>`).join("") + "</w:tcBorders>" : ""}<w:vAlign w:val="center"/></w:tcPr>${c.xml}</w:tc>`).join("")}</w:tr>`).join("")}</w:tbl>`;
      safeColour = (c) => {
        try {
          return colour(c).toUpperCase();
        } catch (e3) {
          return null;
        }
      };
      SKIP = { medskip: 120, bigskip: 240, smallskip: 60 };
    }
  });

  // src/worksheet-docx.js
  function group4(s, i) {
    let depth = 0, j = i;
    for (; j < s.length; j++) {
      if (s[j] === "\\") {
        j++;
        continue;
      }
      if (s[j] === "{") depth++;
      else if (s[j] === "}" && --depth === 0) break;
    }
    return [s.slice(i + 1, j), j + 1];
  }
  function arrayLines(tex) {
    const t = tex.trim();
    if (!t.startsWith("\\begin{array}") || !t.endsWith("\\end{array}")) return null;
    const [, after] = group4(t, "\\begin{array}".length);
    const inner = t.slice(after, t.length - "\\end{array}".length);
    if (!/\\hline/.test(inner)) return null;
    const m = [null, inner];
    const rows = m[1].split(/\\\\(?:\[[^\]]*\])?/).map((r) => r.trim()).filter(Boolean);
    const lines = [];
    for (const r of rows) {
      const hl = /\\hline/.test(r);
      const cells = r.replace(/\\hline/g, "").split("&").map((c) => c.replace(/\\phantom\{[^}]*\}/g, "").replace(/\\,/g, "").trim());
      const text = cells.filter(Boolean).join(" ");
      if (text) lines.push({ text, rule: false });
      if (hl && lines.length) lines[lines.length - 1].rule = true;
    }
    return lines;
  }
  function sceneRun(scene, ctx, name = "H\xECnh") {
    return `<w:r><w:rPr><w:noProof/></w:rPr>${sceneToDrawingXml(scene, { name, alt: name })}</w:r>`;
  }
  function tikzRun(code, optStr, ctx) {
    try {
      const sc = /scale\s*=\s*([\d.]+)/.exec(optStr || "");
      return sceneRun(tikzToScene(code, { scale: sc ? parseFloat(sc[1]) : 1, fs: ctx.fs || 16 }), ctx, "H\xECnh");
    } catch (e3) {
      if (!(e3 instanceof TikzError)) throw e3;
      ctx.unsupported = (ctx.unsupported || []).concat(e3.message);
      return "<w:r><w:t>[h\xECnh]</w:t></w:r>";
    }
  }
  function usedPictures(result, cps = {}) {
    const text = JSON.stringify(result.sheets).replace(/\\\\/g, "\\");
    const set = /* @__PURE__ */ new Set();
    for (const m of text.matchAll(/\\(?:wspic|wshz)(?:\[[^\]]*\])?\{ws-([0-9a-f-]+)\}/gi)) set.add(m[1].toLowerCase());
    for (const m of text.matchAll(/\\icO([A-Za-z]+)/g)) {
      const cp2 = cps[m[1].toLowerCase()];
      if (cp2) set.add(String(cp2));
    }
    return [...set];
  }
  function texToRuns(s, ctx = {}, fmt = {}) {
    const cps = ctx.cps || {};
    const rpr2 = (f, extra = "") => {
      const x = `${extra}${f.b ? "<w:b/>" : ""}${f.i ? "<w:i/>" : ""}${f.u ? '<w:u w:val="single"/>' : ""}${f.box ? '<w:bdr w:val="single" w:sz="6" w:space="1" w:color="444444"/>' : ""}${f.color ? `<w:color w:val="${f.color}"/>` : ""}${f.sz ? `<w:sz w:val="${f.sz}"/><w:szCs w:val="${f.sz}"/>` : ""}`;
      return x ? `<w:rPr>${x}</w:rPr>` : "";
    };
    const run4 = (t, f = fmt, extra = "") => t ? `<w:r>${rpr2(f, extra)}<w:t xml:space="preserve">${esc6(t)}</w:t></w:r>` : "";
    let out = "", buf = "", i = 0;
    const flush = () => {
      out += run4(buf);
      buf = "";
    };
    const dots3 = (n) => ".".repeat(Math.max(4, Math.round(n)));
    const cm = (t) => {
      const m = /([\d.]+)\s*(cm|mm|pt|em|ex)?/.exec(t || "");
      return m ? parseFloat(m[1]) * ({ mm: 0.1, pt: 0.035, em: 0.4, ex: 0.2 }[m[2]] || 1) : 1;
    };
    while (i < s.length) {
      const c = s[i];
      if (c === "$") {
        const j = s.indexOf("$", i + 1);
        if (j < 0) {
          buf += s.slice(i + 1);
          break;
        }
        flush();
        const tex = s.slice(i + 1, j);
        try {
          tex.split(BLANK_SPLIT).forEach((part) => {
            const b = BLANK_RE.test(part) && /^\\boxed\{\\phantom\{([^}]*)\}\}$/.exec(part);
            if (b) out += blankRun(ctx, b[1].length);
            else if (part.trim()) out += ctx.math ? ctx.math(part, fmt) : latexToOmml(part);
          });
        } catch (e3) {
          out += run4(tex.replace(/\\[a-zA-Z]+/g, "").replace(/[{}]/g, ""));
        }
        i = j + 1;
        continue;
      }
      if (c === "\\") {
        const d = s[i + 1];
        if (d === "\\") {
          flush();
          out += "<w:r><w:br/></w:r>";
          i += 2;
          if (s[i] === "[") i = s.indexOf("]", i) + 1;
          continue;
        }
        if (d === " " || d === "," || d === ";" || d === ":") {
          buf += d === "," ? "\u2009" : " ";
          i += 2;
          continue;
        }
        if (/[_%&#{}$]/.test(d)) {
          buf += d;
          i += 2;
          continue;
        }
        const m = /^\\([a-zA-Z]+)\*?/.exec(s.slice(i));
        if (!m) {
          i += 2;
          continue;
        }
        const name = m[1];
        i += m[0].length;
        let opt = "";
        if (s[i] === "[") {
          const e3 = s.indexOf("]", i);
          opt = s.slice(i + 1, e3);
          i = e3 + 1;
        }
        const arg = () => {
          while (s[i] === " ") i++;
          if (s[i] !== "{") return "";
          const [g, e3] = group4(s, i);
          i = e3;
          return g;
        };
        if (name === "textit" || name === "emph") {
          flush();
          out += texToRuns(arg(), ctx, __spreadProps(__spreadValues({}, fmt), { i: true }));
        } else if (name === "textbf") {
          flush();
          out += texToRuns(arg(), ctx, __spreadProps(__spreadValues({}, fmt), { b: true }));
        } else if (name === "underline") {
          flush();
          out += texToRuns(arg(), ctx, __spreadProps(__spreadValues({}, fmt), { u: true }));
        } else if (name === "text" || name === "textrm" || name === "textsf" || name === "mbox") {
          flush();
          out += texToRuns(arg(), ctx, fmt);
        } else if (name === "wsbox" || name === "fbox") {
          flush();
          out += texToRuns(arg(), ctx, __spreadProps(__spreadValues({}, fmt), { box: true }));
        } else if (name === "textcolor") {
          arg();
          flush();
          out += texToRuns(arg(), ctx, fmt);
        } else if (name === "makebox") {
          const body = arg();
          flush();
          out += /dotfill|hrulefill/.test(body) ? run4(dots3(cm(opt) * 4.5)) : texToRuns(body, ctx, fmt);
        } else if (name === "dotfill" || name === "hrulefill") {
          flush();
          out += run4(dots3(18));
        } else if (name === "hspace") {
          const w = cm(arg());
          buf += "\xA0".repeat(Math.max(1, Math.round(w * 3)));
        } else if (name === "phantom" || name === "vspace" || name === "rule" || name === "color") {
          arg();
          if (name === "rule") arg();
        } else if (name === "wspic" || name === "wshz") {
          const id = arg();
          flush();
          const cp2 = /^ws-([0-9a-f-]+)$/i.exec(id);
          if (cp2) out += run4(String.fromCodePoint(...cp2[1].split("-").map((h) => parseInt(h, 16))), __spreadProps(__spreadValues({}, fmt), { sz: fmt.emoji || 36 }), EMOJI_FONT);
        } else if (/^icO/.test(name)) {
          flush();
          out += run4(emojiOf(name.slice(3).toLowerCase(), cps), __spreadProps(__spreadValues({}, fmt), { sz: fmt.emoji || 36 }), EMOJI_FONT);
        } else if (name === "ldots" || name === "dots" || name === "cdots") buf += "\u2026";
        else if (name === "begin" && /^\{tikzpicture\}/.test(s.slice(i))) {
          flush();
          const e3 = s.indexOf("\\end{tikzpicture}", i);
          let code = s.slice(i + "{tikzpicture}".length, e3), o = opt;
          const t = code.trimStart();
          if (!o && t[0] === "[") {
            const k = t.indexOf("]");
            o = t.slice(1, k);
            code = t.slice(k + 1);
          }
          out += tikzRun(code, o, ctx);
          i = e3 + "\\end{tikzpicture}".length;
        } else if (name === "end") {
          arg();
        } else if (name === "large" || name === "Large" || name === "LARGE" || name === "huge" || name === "small" || name === "footnotesize" || name === "tiny" || name === "normalsize") {
          flush();
          const k = { large: 1.15, Large: 1.3, LARGE: 1.5, huge: 1.7, small: 0.9, footnotesize: 0.8, tiny: 0.65, normalsize: 1 }[name];
          fmt = __spreadProps(__spreadValues({}, fmt), { sz: Math.round((ctx.baseSz || fmt.sz || 26) * k) });
        } else if (name === "bfseries") {
          flush();
          fmt = __spreadProps(__spreadValues({}, fmt), { b: true });
        } else if (name === "itshape") {
          flush();
          fmt = __spreadProps(__spreadValues({}, fmt), { i: true });
        } else if (name === "tikz") {
          flush();
          let o = opt;
          while (s[i] === " ") i++;
          if (!o && s[i] === "[") {
            const e3 = s.indexOf("]", i);
            o = s.slice(i + 1, e3);
            i = e3 + 1;
            while (s[i] === " ") i++;
          }
          let code;
          if (s[i] === "{") {
            const [g, e3] = group4(s, i);
            code = g;
            i = e3;
          } else {
            const e3 = s.indexOf(";", i);
            code = s.slice(i, e3 + 1);
            i = e3 + 1;
          }
          out += tikzRun(code, o, ctx);
        } else if (name === "wsclock") {
          const a = parseFloat(arg()), b = parseFloat(arg());
          flush();
          out += sceneRun(clockScene(a, b, ctx.fs ? ctx.fs * 0.7 : 11), ctx, "\u0111\u1ED3ng h\u1ED3");
        } else if (name === "wsarrow") {
          const ang = parseFloat(opt || "0");
          arg();
          flush();
          out += run4(["\u2192", "\u2197", "\u2191", "\u2196", "\u2190", "\u2199", "\u2193", "\u2198"][(Math.round(ang / 45) % 8 + 8) % 8], __spreadProps(__spreadValues({}, fmt), { b: true }));
        } else if (name === "wstrace") {
          const t = arg();
          flush();
          out += texToRuns(t, ctx, __spreadProps(__spreadValues({}, fmt), { color: "B3B3B3", sz: Math.round((fmt.sz || 26) * 1.3) }));
        } else if (name === "wsblank") {
          const w = cm(arg());
          flush();
          out += run4("\xA0".repeat(Math.max(3, Math.round(w * 4.2))), __spreadProps(__spreadValues({}, fmt), { u: true }));
        } else if (name === "raisebox") {
          arg();
          while (s[i] === "[") i = s.indexOf("]", i) + 1;
          flush();
          out += texToRuns(arg(), ctx, fmt);
        } else if (name === "parbox") {
          arg();
          flush();
          out += texToRuns(arg(), ctx, fmt);
        } else if (name === "fcolorbox") {
          arg();
          arg();
          flush();
          out += texToRuns(arg(), ctx, __spreadProps(__spreadValues({}, fmt), { box: true }));
        } else if (name === "cellcolor") arg();
        else if (name === "quad" || name === "qquad") buf += "\u2003";
        else if (name === "checkmark") buf += "\u2713";
        else if (name === "rightarrow" || name === "to") buf += "\u2192";
        else if (name === "times") buf += "\xD7";
        else if (name === "textbullet") buf += "\u2022";
        else if (name === "par" || name === "smallskip" || name === "medskip" || name === "bigskip") {
          flush();
          out += "<w:r><w:br/></w:r>";
        } else if (name === "wsarrow") {
          buf += "\u2192";
        }
        continue;
      }
      if (c === "{" || c === "}") {
        i++;
        continue;
      }
      if (c === "~") {
        buf += "\xA0";
        i++;
        continue;
      }
      if (c === "-" && s[i + 1] === "-") {
        buf += s[i + 2] === "-" ? "\u2014" : "\u2013";
        i += s[i + 2] === "-" ? 3 : 2;
        continue;
      }
      if (c === "`" && s[i + 1] === "`") {
        buf += "\u201C";
        i += 2;
        continue;
      }
      if (c === "'" && s[i + 1] === "'") {
        buf += "\u201D";
        i += 2;
        continue;
      }
      if (c === "\n") {
        buf += " ";
        i++;
        continue;
      }
      buf += c;
      i++;
    }
    flush();
    return out;
  }
  function exHeading(style, n, instrRuns, acc, sz) {
    const bold = `<w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr>`;
    const label = (text, color, size = sz) => `<w:r><w:rPr><w:b/><w:color w:val="${color}"/><w:sz w:val="${size}"/></w:rPr><w:t xml:space="preserve">${esc6(text)}</w:t></w:r>`;
    const gap = `<w:r>${bold}<w:t xml:space="preserve">  </w:t></w:r>`;
    const base = { before: 200, after: 100, keepNext: true };
    if (style === "band") return para(label(` B\xC0I ${n} `, "FFFFFF") + `<w:r><w:rPr><w:b/><w:color w:val="FFFFFF"/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve"> </w:t></w:r>` + instrRuns.replace(/<w:rPr>/g, '<w:rPr><w:color w:val="FFFFFF"/>'), __spreadProps(__spreadValues({}, base), { shade: acc, ind: 0 }));
    if (style === "box") return para(label(`B\xE0i ${n}.`, acc) + gap + instrRuns, __spreadProps(__spreadValues({}, base), { shade: tint(acc, 0.9), pbdr: sbdr("top", 8, acc, 3) + sbdr("left", 8, acc, 5) + sbdr("bottom", 8, acc, 3) + sbdr("right", 8, acc, 5) }));
    if (style === "bar") return para(label(`B\xE0i ${n}.`, acc) + gap + instrRuns, __spreadProps(__spreadValues({}, base), { shade: tint(acc, 0.92), pbdr: sbdr("left", 36, acc, 6) }));
    if (style === "line") return para(label(`B\xE0i ${n}.`, acc) + gap + instrRuns, __spreadProps(__spreadValues({}, base), { pbdr: sbdr("bottom", 8, acc, 2) }));
    if (style === "plain") return para(label(`B\xE0i ${n}.`, acc) + gap + instrRuns, base);
    return para(`<w:r><w:rPr><w:rFonts w:ascii="Segoe UI Symbol" w:hAnsi="Segoe UI Symbol"/><w:color w:val="${acc}"/><w:sz w:val="${sz + 8}"/></w:rPr><w:t xml:space="preserve">${n <= 10 ? CIRCLED[n - 1] : `${n}.`}</w:t></w:r>${gap}${instrRuns}`, base);
  }
  function titleBlock(style, heading, grade, acc, sz) {
    const run4 = (color, size) => `<w:r><w:rPr><w:b/><w:color w:val="${color}"/><w:sz w:val="${size}"/></w:rPr><w:t>${esc6(heading)}</w:t></w:r>`;
    const lop = (color) => `<w:r><w:rPr><w:b/>${color ? `<w:color w:val="${color}"/>` : ""}<w:sz w:val="${sz + 2}"/></w:rPr><w:t>L\u1EDBp ${grade}</w:t></w:r>`;
    if (style === "band") return para(run4("FFFFFF", sz + 12), { jc: "center", shade: acc, before: 0, after: 40, line: 400 }) + para(lop(acc), { jc: "center", after: 120 });
    if (style === "box") return para(run4(acc, sz + 12), { jc: "center", after: 40, shade: tint(acc, 0.9), pbdr: sbdr("top", 12, acc, 4) + sbdr("left", 12, acc, 6) + sbdr("bottom", 12, acc, 4) + sbdr("right", 12, acc, 6) }) + para(lop(acc), { jc: "center", after: 120 });
    if (style === "line") return para(run4(acc, sz + 12), { jc: "center", after: 40, pbdr: sbdr("bottom", 12, acc, 3) }) + para(lop(), { jc: "center", after: 120 });
    return para(run4(acc, sz + 12), { jc: "center", after: 40 }) + para(lop(), { jc: "center", after: 120 });
  }
  function worksheetBody(result, options = {}) {
    const { subject = "math", grade = 1, color = "color", fontPt: fontPt2 = 13, answers = true, cps = {}, accent = "1D6FB8", style = "round", pics = /* @__PURE__ */ new Map() } = options;
    const acc = color === "bw" ? "222222" : accent.replace("#", "");
    const sz = Math.round(fontPt2 * 2);
    const half = sz;
    const ctx = { cps, pics, fs: fontPt2 / 0.75, baseSz: sz, math: (tex) => latexToOmml(tex).replace(/<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"\/><\/w:rPr>/g, `<w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/><w:sz w:val="${half}"/><w:szCs w:val="${half}"/></w:rPr>`) };
    const f = { sz, emoji: Math.round(sz * 1.5) };
    const skipped = [];
    let body = "", count = 0;
    const W = 9638;
    const renderBlock = (b) => {
      ctx.unsupported = [];
      let xml = "";
      try {
        if (b.bodyTex) xml = texBlocks(b.bodyTex, ctx, f);
        else if (b.items.length) {
          const cols = Math.max(1, Math.min(b.cols || 1, 5));
          const cell4 = (it, k) => {
            const q = it.q;
            const lines = /^\$\\begin\{array\}/.test(q.trim()) ? arrayLines(q.trim().replace(/^\$|\$$/g, "")) : null;
            const num3 = `<w:r><w:rPr><w:b/><w:color w:val="${acc}"/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">${k + 1}. </w:t></w:r>`;
            if (lines) {
              return para(num3, { after: 0 }) + lines.map((l) => `<w:p><w:pPr><w:spacing w:before="0" w:after="0"/><w:ind w:left="500"/>${l.rule ? '<w:pBdr><w:bottom w:val="single" w:sz="8" w:space="1" w:color="222222"/></w:pBdr>' : ""}<w:jc w:val="left"/></w:pPr>${texToRuns(l.text.replace(/^([+\-−×:])\s*/, "$1  "), ctx, f)}</w:p>`).join("") + para(texToRuns("\xA0", ctx, f), { after: 120 });
            }
            return para(num3 + texToRuns(q, ctx, f), { after: 100, line: 340 });
          };
          if (cols === 1) xml = b.items.map((it, k) => cell4(it, k)).join("");
          else {
            const widths = Array.from({ length: cols }, () => Math.floor(W / cols));
            const rows = [];
            for (let k = 0; k < b.items.length; k += cols) rows.push(Array.from({ length: cols }, (_, c) => b.items[k + c] ? cell4(b.items[k + c], k + c) : para("", { after: 0 })));
            xml = table(rows, cols, widths);
          }
        }
      } catch (e3) {
        return { b, ok: false, xml: "" };
      }
      return { b, ok: Boolean(xml) && !(ctx.unsupported && ctx.unsupported.length), xml };
    };
    result.sheets.forEach((sheet, v) => {
      const code = result.sheets.length > 1 ? ` \u2014 M\xE3 \u0111\u1EC1 ${String.fromCharCode(65 + v)}` : "";
      if (options.school) body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t>${esc6(options.school)}</w:t></w:r>`, { after: 40 });
      const heading = (options.title || `PHI\u1EBEU B\xC0I T\u1EACP ${SUBJECT_TITLE[subject] || ""}`.trim()) + code;
      {
        const t = titleBlock(style, heading, grade, acc, sz);
        body += v > 0 ? t.replace("<w:pPr>", "<w:pPr><w:pageBreakBefore/>") : t;
      }
      body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">H\u1ECD v\xE0 t\xEAn: ${".".repeat(34)}   L\u1EDBp: ${".".repeat(10)}   Ng\xE0y: ${".".repeat(12)}</w:t></w:r>`, { border: true, shade: color === "bw" ? "F3F3F3" : "EAF2FB", after: 160, line: 360 });
      let n = 0;
      const rendered = sheet.blocks.map((b) => renderBlock(b));
      for (const r of rendered) {
        if (!r.ok && !skipped.includes(r.b.name)) skipped.push(r.b.name);
      }
      for (const r of rendered) {
        if (!r.ok) continue;
        n++;
        body += exHeading(style, n, texToRuns(r.b.instr, ctx, __spreadProps(__spreadValues({}, f), { b: true })), acc, sz) + r.xml;
        count += r.b.bodyTex ? Math.max(1, r.b.items.length) : r.b.items.length;
      }
      sheet.ok = rendered;
      body += para(`<w:r><w:rPr><w:i/><w:color w:val="666666"/><w:sz w:val="18"/></w:rPr><w:t>Gia s\u01B0 AI \u2022 https://giasu.ai.vn</w:t></w:r>`, { jc: "right", before: 240, after: 0 });
      if (pics.size) body += para(`<w:r><w:rPr><w:i/><w:color w:val="888888"/><w:sz w:val="14"/></w:rPr><w:t>H\xECnh minh ho\u1EA1: Twemoji (Twitter, Inc. v\xE0 nh\u1EEFng ng\u01B0\u1EDDi \u0111\xF3ng g\xF3p), gi\u1EA5y ph\xE9p CC-BY 4.0 \u2014 github.com/jdecked/twemoji</w:t></w:r>`, { jc: "right", after: 0 });
      if (answers) {
        body += para(`<w:r><w:rPr><w:b/><w:color w:val="${acc}"/><w:sz w:val="${sz + 8}"/></w:rPr><w:t>\u0110\xC1P \xC1N${code}</w:t></w:r>`, { jc: "center", pageBreakBefore: true, after: 120 });
        let k = 0;
        for (const { b, ok } of sheet.ok) {
          if (!ok) continue;
          k++;
          const parts = b.noAnswer || b.bodyTex && b.answer ? [] : b.items.map((it, j) => `${j + 1}) ${it.a}`);
          body += para(`<w:r><w:rPr><w:b/><w:sz w:val="${sz}"/></w:rPr><w:t xml:space="preserve">B\xE0i ${k}. </w:t></w:r>${parts.length ? parts.map((p2) => texToRuns(p2, ctx, { sz })).join('<w:r><w:t xml:space="preserve">    </w:t></w:r>') : texToRuns(b.answer || "(b\xE0i l\xE0m t\u1EF1 do)", ctx, { sz })}`, { after: 80, line: 340 });
        }
      }
    });
    return { body, skipped, count };
  }
  function bodyPackage(bodyXml, images = []) {
    const b643 = (bytes) => {
      let t = "";
      for (let i = 0; i < bytes.length; i += 32768) t += String.fromCharCode(...bytes.subarray(i, i + 32768));
      return btoa(t).replace(/(.{76})/g, "$1\n");
    };
    const rels = images.map((im) => `<Relationship Id="${im.rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${im.rid}.png"/>`).join("");
    const media = images.map((im) => `<pkg:part pkg:name="/word/media/${im.rid}.png" pkg:contentType="image/png" pkg:compression="store"><pkg:binaryData>${b643(im.png)}</pkg:binaryData></pkg:part>`).join("");
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><?mso-application progid="Word.Document"?><pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document ${NS3}><w:body>${bodyXml}</w:body></w:document></pkg:xmlData></pkg:part>${images.length ? `<pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rels}</Relationships></pkg:xmlData></pkg:part>` : ""}${media}</pkg:package>`;
  }
  var esc6, EMOJI_FONT, SHAPES, emojiOf, BLANK_RE, BLANK_SPLIT, blankRun, para, NOB2, table, SUBJECT_TITLE, WORKSHEET_STYLES, tint, CIRCLED, sbdr, NS3;
  var init_worksheet_docx = __esm({
    "src/worksheet-docx.js"() {
      init_latex2omml();
      init_tikz();
      init_worksheet_tex();
      init_scene();
      esc6 = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      EMOJI_FONT = '<w:rFonts w:ascii="Segoe UI Emoji" w:hAnsi="Segoe UI Emoji" w:eastAsia="Segoe UI Emoji"/>';
      SHAPES = { shapecircle: "\u26AA", shaperectangle: "\u25AD", shapesquare: "\u2B1C", shapetriangle: "\u25B3" };
      emojiOf = (id, cps) => cps[id] ? String.fromCodePoint(...String(cps[id]).split("-").map((h) => parseInt(h, 16))) : SHAPES[id] || "\u25CF";
      BLANK_RE = /\\boxed\{\\phantom\{[^}]*\}\}/;
      BLANK_SPLIT = /(\\boxed\{\\phantom\{[^}]*\}\})/;
      blankRun = (ctx, chars = 2) => {
        const k = Math.max(0.6, (ctx.fs || 16) / 16), wide = chars > 1 ? 1 : 0.78;
        return sceneRun(tikzToScene(`\\draw[line width=0.8pt] (0,0) rectangle (${(0.72 * wide * k).toFixed(2)},${(0.62 * k).toFixed(2)});`, { scale: 1, fs: ctx.fs || 16 }), ctx, "\xD4 tr\u1ED1ng");
      };
      para = (inner, o = {}) => {
        var _a8, _b;
        return `<w:p><w:pPr>${o.keepNext ? "<w:keepNext/>" : ""}${o.pageBreakBefore ? "<w:pageBreakBefore/>" : ""}${o.shade ? `<w:shd w:val="clear" w:color="auto" w:fill="${o.shade}"/>` : ""}${o.pbdr ? `<w:pBdr>${o.pbdr}</w:pBdr>` : ""}${o.border ? '<w:pBdr><w:top w:val="single" w:sz="8" w:space="2" w:color="444444"/><w:left w:val="single" w:sz="8" w:space="4" w:color="444444"/><w:bottom w:val="single" w:sz="8" w:space="2" w:color="444444"/><w:right w:val="single" w:sz="8" w:space="4" w:color="444444"/></w:pBdr>' : ""}<w:spacing w:before="${(_a8 = o.before) != null ? _a8 : 0}" w:after="${(_b = o.after) != null ? _b : 60}"${o.line ? ` w:line="${o.line}" w:lineRule="auto"` : ""}/>${o.ind ? `<w:ind w:left="${o.ind}"/>` : ""}${o.jc ? `<w:jc w:val="${o.jc}"/>` : ""}</w:pPr>${inner}</w:p>`;
      };
      NOB2 = '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>';
      table = (rows, cols, widths) => `<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>${NOB2}<w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="60" w:type="dxa"/><w:right w:w="60" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${w}"/>`).join("")}</w:tblGrid>${rows.map((r) => `<w:tr><w:trPr><w:cantSplit/></w:trPr>${r.map((cell4, k) => `<w:tc><w:tcPr><w:tcW w:w="${widths[k]}" w:type="dxa"/></w:tcPr>${cell4}</w:tc>`).join("")}</w:tr>`).join("")}</w:tbl>`;
      SUBJECT_TITLE = { math: "TO\xC1N", vi: "TI\u1EBENG VI\u1EC6T", en: "TI\u1EBENG ANH" };
      WORKSHEET_STYLES = [
        ["round", "S\u1ED1 trong v\xF2ng tr\xF2n (\u2776 \u2777 \u2778)"],
        ["band", "D\u1EA3i m\xE0u \u0111\u1EADm"],
        ["box", "Khung vi\u1EC1n"],
        ["bar", "Thanh m\xE0u b\xEAn tr\xE1i"],
        ["line", "G\u1EA1ch ch\xE2n"],
        ["plain", "\u0110\u01A1n gi\u1EA3n"]
      ];
      tint = (hex3, k) => {
        const n = parseInt(hex3, 16);
        const m = (c) => Math.round(c + (255 - c) * k);
        return [n >> 16 & 255, n >> 8 & 255, n & 255].map((c) => m(c).toString(16).padStart(2, "0")).join("").toUpperCase();
      };
      CIRCLED = "\u2776\u2777\u2778\u2779\u277A\u277B\u277C\u277D\u277E\u277F";
      sbdr = (side, sz, color, space = 4) => `<w:${side} w:val="single" w:sz="${sz}" w:space="${space}" w:color="${color}"/>`;
      NS3 = 'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';
    }
  });

  // taskpane/worksheet-ui.js
  var worksheet_ui_exports = {};
  __export(worksheet_ui_exports, {
    mountWorksheet: () => mountWorksheet
  });
  function loadLib() {
    if (globalThis.Worksheet) return Promise.resolve(globalThis.Worksheet);
    libPromise2 = libPromise2 || new Promise((resolve2, reject) => {
      const s = document.createElement("script");
      s.src = new URL("./vendor/worksheet.js", __BUNDLE_URL__).href;
      s.onload = () => globalThis.Worksheet ? resolve2(globalThis.Worksheet) : reject(new Error("th\u01B0 vi\u1EC7n phi\u1EBFu b\xE0i t\u1EADp kh\xF4ng kh\u1EDFi t\u1EA1o \u0111\u01B0\u1EE3c"));
      s.onerror = () => {
        libPromise2 = null;
        reject(new Error("kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c th\u01B0 vi\u1EC7n phi\u1EBFu b\xE0i t\u1EADp"));
      };
      document.head.appendChild(s);
    });
    return libPromise2;
  }
  function mountWorksheet(root, io) {
    root.innerHTML = `
    <div class="notice">T\u1EA1o phi\u1EBFu b\xE0i t\u1EADp ti\u1EC3u h\u1ECDc c\xF3 \u0111\xE1p \xE1n (To\xE1n, Ti\u1EBFng Vi\u1EC7t, Ti\u1EBFng Anh, l\u1EDBp 1\u20135). S\u1ED1 li\u1EC7u v\xE0 \u0111\xE1p \xE1n t\u1EF1 t\xEDnh; c\xF9ng \u201Cm\xE3 \u0111\u1EC1\u201D th\xEC ra c\xF9ng m\u1ED9t phi\u1EBFu. C\xF4ng th\u1EE9c l\xE0 c\xF4ng th\u1EE9c Word, s\u1EEDa \u0111\u01B0\u1EE3c.</div>
    <fieldset><legend>Phi\u1EBFu</legend>
      <div class="grid2">
        ${field2("M\xF4n", '<select id="w-subject"><option value="math">To\xE1n</option><option value="vi">Ti\u1EBFng Vi\u1EC7t</option><option value="en">Ti\u1EBFng Anh</option></select>')}
        ${field2("L\u1EDBp", '<select id="w-grade">' + [1, 2, 3, 4, 5].map((g) => `<option value="${g}">L\u1EDBp ${g}</option>`).join("") + "</select>")}
      </div>
      <div class="grid2">
        ${field2("M\u1EE9c \u0111\u1ED9", '<select id="w-level"><option value="0">C\u01A1 b\u1EA3n</option><option value="1">N\xE2ng cao</option></select>')}
        ${field2("\u0110\u1ED9 d\xE0i", '<select id="w-size"><option value="short">Ng\u1EAFn (1 trang)</option><option value="normal" selected>V\u1EEBa</option><option value="long">D\xE0i</option></select>')}
      </div>
      <div class="grid2">
        ${field2("Ki\u1EC3u in", '<select id="w-color"><option value="color">M\xE0u</option><option value="bw">\u0110en tr\u1EAFng (ti\u1EBFt ki\u1EC7m m\u1EF1c)</option></select>')}
        ${field2("C\u1EE1 ch\u1EEF", '<select id="w-font">' + [12, 13, 14, 16].map((n) => `<option value="${n}"${n === 14 ? " selected" : ""}>${n} pt</option>`).join("") + "</select>")}
      </div>
      <div class="grid2">
        ${field2("M\xE3 \u0111\u1EC1 (seed)", '<input type="number" id="w-seed" min="1" step="1">')}
        ${field2("S\u1ED1 m\xE3 \u0111\u1EC1", '<select id="w-versions"><option>1</option><option>2</option><option>3</option><option>4</option></select>')}
      </div>
      ${field2("Ti\xEAu \u0111\u1EC1 (\u0111\u1EC3 tr\u1ED1ng = t\u1EF1 \u0111\u1EB7t)", '<input type="text" id="w-title" placeholder="vd. PHI\u1EBEU B\xC0I T\u1EACP CU\u1ED0I TU\u1EA6N 5">')}
      ${field2("Tr\u01B0\u1EDDng (t\xF9y ch\u1ECDn)", '<input type="text" id="w-school" placeholder="vd. Tr\u01B0\u1EDDng Ti\u1EC3u h\u1ECDc ...">')}
      ${field2("Phong c\xE1ch tr\xECnh b\xE0y", '<select id="w-style">' + WORKSHEET_STYLES.map(([v, l]) => `<option value="${v}">${esc7(l)}</option>`).join("") + "</select>")}
      ${sw2("w-answers", "Th\xEAm trang \u0111\xE1p \xE1n", true)}
    </fieldset>
    <fieldset><legend>D\u1EA1ng b\xE0i</legend>
      <div class="btns two"><button class="secondary" id="w-default">G\u1EE3i \xFD m\u1EB7c \u0111\u1ECBnh</button><button class="secondary" id="w-all">Ch\u1ECDn h\u1EBFt</button></div>
      <div id="w-topics" class="muted">\u0110ang t\u1EA3i\u2026</div>
      <div class="hint" id="w-skipped"></div>
    </fieldset>
    <div class="btns two"><button class="primary" id="w-insert">Ch\xE8n v\xE0o Word</button><button class="secondary" id="w-new">T\u1EA1o t\xE0i li\u1EC7u m\u1EDBi</button></div>
    <div class="btns"><button class="secondary" id="w-reroll">\u0110\u1ED5i \u0111\u1EC1 (m\xE3 \u0111\u1EC1 kh\xE1c)</button></div>
    <div id="w-out"></div>`;
    const $2 = (id) => root.querySelector("#" + id);
    let W = null, available = [];
    const cps = () => {
      const m = {};
      for (const e3 of Object.values(W.lib.items)) m[e3.id] = e3.cp;
      return m;
    };
    const mode = () => $2("w-color").value;
    async function refreshTopics() {
      const subject = $2("w-subject").value, grade = Number($2("w-grade").value), level = Number($2("w-level").value);
      const all = W.topicsFor(subject, grade, mode());
      const defaults = new Set(W.defaultTopics(subject, grade, mode()));
      available = [];
      const skipped = [];
      for (const t of all) {
        let ok = false;
        try {
          const r = W.generate({ subject, grade, level, color: mode(), seed: 1, size: "short", topics: [t.id], answers: false });
          ok = r.sheets[0].blocks.length > 0 && worksheetBody(r, { subject, grade, cps: cps(), answers: false }).skipped.length === 0;
        } catch (e3) {
          ok = false;
        }
        if (ok) available.push(__spreadProps(__spreadValues({}, t), { def: defaults.has(t.id) }));
        else skipped.push(t.name);
      }
      $2("w-topics").innerHTML = available.map((t) => `<label class="inline"><input type="checkbox" data-t="${esc7(t.id)}"${t.def ? " checked" : ""}> ${esc7(t.name)}</label>`).join("") || "Kh\xF4ng c\xF3 d\u1EA1ng b\xE0i ph\xF9 h\u1EE3p.";
      $2("w-skipped").textContent = skipped.length ? `Ch\u01B0a chuy\u1EC3n \u0111\u01B0\u1EE3c sang Word: ${skipped.join("; ")}.` : "";
    }
    const chosen = () => [...root.querySelectorAll("#w-topics input[data-t]:checked")].map((c) => c.dataset.t);
    const newSeed = () => {
      $2("w-seed").value = String(Math.floor(Math.random() * 9e5) + 1e5);
    };
    const pngCache = /* @__PURE__ */ new Map();
    async function twemojiPng(cp2) {
      if (pngCache.has(cp2)) return pngCache.get(cp2);
      const svg = await (await fetch(new URL(`./vendor/twemoji/${cp2}.svg`, __BUNDLE_URL__))).text();
      const img = new Image();
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = rej;
        img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.replace("<svg ", '<svg width="96" height="96" '));
      });
      const c = document.createElement("canvas");
      c.width = c.height = 96;
      c.getContext("2d").drawImage(img, 0, 0, 96, 96);
      const bin = atob(c.toDataURL("image/png").split(",")[1]), png = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) png[i] = bin.charCodeAt(i);
      pngCache.set(cp2, png);
      return png;
    }
    async function build() {
      const subject = $2("w-subject").value, grade = Number($2("w-grade").value);
      const topics = chosen();
      if (!topics.length) throw new Error("Ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\u1EA1ng b\xE0i.");
      const versions = Number($2("w-versions").value);
      const r = W.generate({ subject, grade, level: Number($2("w-level").value), color: mode(), seed: Number($2("w-seed").value) || 1, size: $2("w-size").value, topics, versions, answers: true });
      const accent = (W.SUBJECTS[subject].palette || {}).main || "#1D6FB8";
      const fontPt2 = Number($2("w-font").value), map = cps();
      const pics = /* @__PURE__ */ new Map(), images = [];
      for (const cp2 of usedPictures(r, map)) {
        try {
          const png = await twemojiPng(cp2);
          const rid = `rIdTw${images.length + 1}`;
          images.push({ rid, png });
          pics.set(cp2, { rid, pt: fontPt2 * 2.1 });
        } catch (e3) {
        }
      }
      const res = worksheetBody(r, { subject, grade, color: mode(), fontPt: fontPt2, answers: $2("w-answers").checked, cps: map, accent, style: $2("w-style").value, pics, title: $2("w-title").value.trim(), school: $2("w-school").value.trim() });
      return __spreadProps(__spreadValues({}, res), { images });
    }
    async function write(newDoc) {
      $2("w-out").textContent = "\u0110ang t\u1EA1o phi\u1EBFu\u2026";
      try {
        const { body, count, images } = await build();
        const pkg = bodyPackage(body, images);
        if (newDoc) await io.openAsNewDocument(pkg);
        else await io.replaceSelection(pkg);
        $2("w-out").innerHTML = `<span class="ok">\u0110\xE3 ${newDoc ? "t\u1EA1o t\xE0i li\u1EC7u m\u1EDBi" : "ch\xE8n v\xE0o Word"}: ${count} c\xE2u.</span>`;
      } catch (e3) {
        $2("w-out").innerHTML = `<span class="bad">L\u1ED7i: ${esc7(e3.message)}</span>`;
      }
    }
    $2("w-insert").addEventListener("click", () => write(false));
    $2("w-new").addEventListener("click", () => write(true));
    $2("w-reroll").addEventListener("click", () => {
      newSeed();
      $2("w-out").innerHTML = '<span class="ok">\u0110\xE3 \u0111\u1ED5i m\xE3 \u0111\u1EC1; b\u1EA5m Ch\xE8n \u0111\u1EC3 t\u1EA1o phi\u1EBFu m\u1EDBi.</span>';
    });
    $2("w-default").addEventListener("click", () => root.querySelectorAll("#w-topics input[data-t]").forEach((c) => {
      var _a8;
      c.checked = (_a8 = available.find((t) => t.id === c.dataset.t)) == null ? void 0 : _a8.def;
    }));
    $2("w-all").addEventListener("click", () => root.querySelectorAll("#w-topics input[data-t]").forEach((c) => {
      c.checked = true;
    }));
    for (const id of ["w-subject", "w-grade", "w-level", "w-color"]) $2(id).addEventListener("change", () => {
      if (W) refreshTopics();
    });
    newSeed();
    loadLib().then((lib) => {
      W = lib;
      return refreshTopics();
    }).catch((e3) => {
      $2("w-topics").innerHTML = `<span class="bad">${esc7(e3.message)}</span>`;
    });
  }
  var esc7, field2, sw2, libPromise2;
  var init_worksheet_ui = __esm({
    "taskpane/worksheet-ui.js"() {
      init_worksheet_docx();
      esc7 = (s) => String(s != null ? s : "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
      field2 = (label, inner) => `<label class="field"><span>${label}</span>${inner}</label>`;
      sw2 = (id, label, checked = false) => `<label class="switch"><input type="checkbox" id="${id}"${checked ? " checked" : ""}><span class="switch-track"></span><span>${label}</span></label>`;
      libPromise2 = null;
    }
  });

  // src/sympy-bridge.js
  var sympy_bridge_exports = {};
  __export(sympy_bridge_exports, {
    CalcError: () => CalcError,
    PY_SOURCE: () => PY_SOURCE,
    calc: () => calc,
    latexToSympy: () => latexToSympy,
    loadSympy: () => loadSympy,
    normalizeInput: () => normalizeInput
  });
  function latexToSympy(latex) {
    let tree;
    try {
      tree = latexToTree(latex);
    } catch (e3) {
      throw new CalcError("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c LaTeX: " + e3.message);
    }
    const rows = tree.rows.map((r) => plain(r));
    return rows.join("\n");
  }
  function plain(nodes) {
    const flat2 = normalizeNodes(nodes);
    let out = "";
    for (const n of flat2) out += one(n);
    return out;
  }
  function one(n) {
    switch (n.k) {
      case "run":
        return [...n.text].map((c) => {
          var _a8;
          return c === " " || c === "\xA0" ? " " : (_a8 = CHARS2[c]) != null ? _a8 : GREEK2[c] || c;
        }).join("").replace(/\{,\}/g, ".");
      case "f":
        return `((${plain(n.num)})/(${plain(n.den)}))`;
      case "rad":
        return n.deg ? `(${plain(n.e)})**(1/(${plain(n.deg)}))` : `sqrt(${plain(n.e)})`;
      case "script": {
        const base = one(n.base);
        if (n.sup) return `${wrap(base)}**(${plain(n.sup)})`;
        if (n.sub) return `${base}_${plain(n.sub).replace(/[^A-Za-z0-9]/g, "")}`;
        return base;
      }
      case "d": {
        const inner = n.items.map((it) => plain(it)).join(",");
        if (n.beg === "|" && n.end === "|") return `Abs(${inner})`;
        if (n.beg === "(" || n.beg === "[" || n.beg === "{" || n.beg === "") return `(${inner})`;
        throw new CalcError("Ngo\u1EB7c kh\xF4ng h\u1ED7 tr\u1EE3 trong bi\u1EC3u th\u1EE9c");
      }
      case "func": {
        const arg = plain(n.e);
        if (n.name === "log") {
          const base = n.sub ? plain(n.sub) : "10";
          return `log(${arg}, ${base})`;
        }
        if (FUNC[n.name]) return `${FUNC[n.name]}(${arg})${n.sup ? `**(${plain(n.sup)})` : ""}`;
        throw new CalcError(`H\xE0m \u201C${n.name}\u201D ch\u01B0a h\u1ED7 tr\u1EE3`);
      }
      case "nary": {
        if (n.op === "sum" || n.op === "prod") {
          const lo = n.sub ? plain(n.sub) : "", hi = n.sup ? plain(n.sup) : "";
          const m = /^([A-Za-z])=(.+)$/.exec(lo);
          if (!m || !hi) throw new CalcError("T\u1ED5ng c\u1EA7n c\u1EADn d\u1EA1ng i=1 v\xE0 c\u1EADn tr\xEAn");
          return `${n.op === "sum" ? "Sum" : "Product"}(${plain(n.e)},(${m[1]},${m[2]},${hi})).doit()`;
        }
        throw new CalcError("H\xE3y d\xF9ng thao t\xE1c \u201CT\xEDch ph\xE2n / Nguy\xEAn h\xE0m\u201D thay v\xEC g\xF5 k\xFD hi\u1EC7u \u222B");
      }
      case "m":
        return `Matrix([${n.rows.map((r) => `[${r.map((c) => plain(c)).join(",")}]`).join(",")}])`;
      case "eqArr":
        return n.rows.map((r) => plain(r[0])).join("\n");
      default:
        throw new CalcError("Ch\u01B0a h\u1ED7 tr\u1EE3 c\u1EA5u tr\xFAc \u201C" + n.k + "\u201D trong bi\u1EC3u th\u1EE9c t\xEDnh to\xE1n");
    }
  }
  function normalizeInput(text) {
    const t = String(text).trim();
    if (!t) throw new CalcError("Ch\u01B0a nh\u1EADp bi\u1EC3u th\u1EE9c");
    const plain2 = /[\\{}]/.test(t) ? latexToSympy(t) : t.replace(/[\u2212]/g, "-").replace(/[\u00d7\u00b7]/g, "*").replace(/\u00f7/g, "/").replace(/\u03c0/g, "pi").replace(/\u221e/g, "oo").replace(/\u00b2/g, "**2").replace(/\u00b3/g, "**3");
    return /[\[\]()]/.test(plain2) || /,\s/.test(plain2) ? plain2 : plain2.replace(/(\d),(\d)/g, "$1.$2");
  }
  async function loadSympy(onStatus = () => {
  }) {
    if (engine) return engine;
    onStatus("\u0110ang t\u1EA3i Python (Pyodide)\u2026 l\u1EA7n \u0111\u1EA7u c\xF3 th\u1EC3 m\u1EA5t 1\u20132 ph\xFAt");
    if (typeof loadPyodide === "undefined") await script2(PYODIDE + "pyodide.js");
    const py = await loadPyodide({ indexURL: PYODIDE });
    onStatus("\u0110ang t\u1EA3i SymPy (kho\u1EA3ng 20 MB, ch\u1EC9 l\u1EA7n \u0111\u1EA7u)\u2026");
    await py.loadPackage(["sympy"]);
    onStatus("\u0110ang kh\u1EDFi t\u1EA1o\u2026");
    py.runPython(PY_SOURCE);
    engine = py;
    return py;
  }
  async function calc(op, args, onStatus) {
    const py = await loadSympy(onStatus);
    py.globals.set("_args", JSON.stringify(__spreadValues({ op }, args)));
    const out = py.runPython("run(_args)");
    return JSON.parse(out);
  }
  var CalcError, GREEK2, FUNC, CHARS2, wrap, PYODIDE, engine, script2, PY_SOURCE;
  var init_sympy_bridge = __esm({
    "src/sympy-bridge.js"() {
      init_latex2omml();
      CalcError = class extends Error {
      };
      GREEK2 = { alpha: "alpha", beta: "beta", gamma: "gamma", delta: "delta", theta: "theta", lambda: "lambda", mu: "mu", pi: "pi", phi: "phi", varphi: "phi", omega: "omega", sigma: "sigma", rho: "rho", tau: "tau" };
      FUNC = { sin: "sin", cos: "cos", tan: "tan", cot: "cot", sec: "sec", csc: "csc", arcsin: "asin", arccos: "acos", arctan: "atan", sinh: "sinh", cosh: "cosh", tanh: "tanh", ln: "log", exp: "exp", lg: "log10", max: "Max", min: "Min", det: "det", gcd: "gcd" };
      CHARS2 = { "\u2212": "-", "\xD7": "*", "\u22C5": "*", "\xB7": "*", "\xF7": "/", "\u221E": "oo", "\u03C0": "pi", "\u2264": "<=", "\u2265": ">=", "\u2260": "!=", "\u2032": "'", "\u2009": " ", "\u2005": " " };
      wrap = (s) => /^[A-Za-z0-9_.]+$/.test(s) ? s : `(${s})`;
      PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
      engine = null;
      script2 = (src) => new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = res;
        s.onerror = () => rej(new Error("Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c " + src));
        document.head.appendChild(s);
      });
      PY_SOURCE = `
import json, sympy as sp
from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application, convert_xor
T = standard_transformations + (implicit_multiplication_application, convert_xor)
x, y, z, t, n = sp.symbols('x y z t n')
LD = {'x': x, 'y': y, 'z': z, 't': t, 'n': n, 'e': sp.E, 'pi': sp.pi, 'oo': sp.oo, 'ln': sp.log, 'lg': lambda v: sp.log(v, 10), 'arcsin': sp.asin, 'arccos': sp.acos, 'arctan': sp.atan,
      'abs': sp.Abs, 'sqrt': sp.sqrt, 'cbrt': sp.cbrt, 'Matrix': sp.Matrix, 'Sum': sp.Sum, 'Product': sp.Product, 'Abs': sp.Abs, 'log10': lambda v: sp.log(v, 10)}
def P(s):
    return parse_expr(s, local_dict=LD, transformations=T)
def L(v):
    return sp.latex(v, ln_notation=True, inv_trig_style='power' if False else 'abbreviated')
def VN(res, name='S'):
    s = L(res)
    if res.is_FiniteSet:
        items = [L(v) for v in sorted(res, key=lambda q: float(q) if q.is_real and q.is_number else 0)]
        return name + ' = \\\\left\\\\{' + ';\\\\ '.join(items) + '\\\\right\\\\}' if items else name + ' = \\\\varnothing'
    if res == sp.S.EmptySet:
        return name + ' = \\\\varnothing'
    s = s.replace(', \\\\infty', '; +\\\\infty').replace(', ', '; ')
    return name + ' = ' + s
def R(**kw):
    return json.dumps(kw, ensure_ascii=False)
def var_of(a, default=None):
    v = a.get('var') or default or 'x'
    return sp.Symbol(v)
def relation(s):
    for op in ('<=', '>=', '!=', '<', '>', '='):
        if op in s:
            l, r = s.split(op, 1)
            return op, P(l), P(r)
    return None, P(s), None
def run(raw):
    a = json.loads(raw)
    op = a['op']
    try:
        if op in ('simplify', 'expand', 'factor', 'apart', 'together', 'cancel', 'trigsimp', 'radsimp'):
            e = P(a['expr'])
            fn = {'simplify': sp.simplify, 'expand': sp.expand, 'factor': sp.factor, 'apart': lambda v: sp.apart(v, var_of(a)), 'together': sp.together, 'cancel': sp.cancel, 'trigsimp': sp.trigsimp, 'radsimp': sp.radsimp}[op]
            res = fn(e)
            return R(latex=L(res), text=str(res))
        if op == 'diff':
            e = P(a['expr']); v = var_of(a); k = int(a.get('order') or 1)
            res = sp.diff(e, v, k)
            return R(latex=L(res), text=str(res), simplified=L(sp.simplify(res)))
        if op == 'integrate':
            e = P(a['expr']); v = var_of(a)
            res = sp.integrate(e, v)
            if res.has(sp.Integral): return R(error='SymPy ch\u01B0a t\xECm \u0111\u01B0\u1EE3c nguy\xEAn h\xE0m d\u1EA1ng \u0111\xF3ng c\u1EE7a bi\u1EC3u th\u1EE9c n\xE0y.')
            return R(latex=L(res) + ' + C', text=str(res) + ' + C')
        if op == 'defint':
            e = P(a['expr']); v = var_of(a)
            lo, hi = P(a['lo']), P(a['hi'])
            res = sp.integrate(e, (v, lo, hi))
            if res.has(sp.Integral): return R(error='SymPy ch\u01B0a t\xEDnh \u0111\u01B0\u1EE3c t\xEDch ph\xE2n n\xE0y.')
            return R(latex=L(res), text=str(res), numeric=L(sp.N(res, 8)))
        if op == 'limit':
            e = P(a['expr']); v = var_of(a); pt = P(a['point'])
            d = a.get('dir') or '+-'
            res = sp.limit(e, v, pt, d)
            return R(latex=L(res), text=str(res))
        if op == 'eval':
            e = P(a['expr']); digits = int(a.get('digits') or 10)
            res = sp.N(e, digits)
            return R(latex=L(res), text=str(res), exact=L(sp.nsimplify(e)) )
        if op == 'series':
            e = P(a['expr']); v = var_of(a); pt = P(a.get('point') or '0'); k = int(a.get('order') or 6)
            res = sp.series(e, v, pt, k)
            return R(latex=L(res), text=str(res))
        if op == 'solve':
            lines = [s for s in a['expr'].split('\\n') if s.strip()]
            v = var_of(a)
            rel, l, r = relation(lines[0])
            if rel in ('<', '>', '<=', '>='):
                ineq = {'<': sp.StrictLessThan, '>': sp.StrictGreaterThan, '<=': sp.LessThan, '>=': sp.GreaterThan}[rel](l, r)
                res = sp.solveset(ineq, v, domain=sp.S.Reals)
                return R(latex=VN(res), text=str(res), kind='set', var=str(v))
            eq = sp.Eq(l, r if r is not None else 0)
            res = sp.solveset(eq, v, domain=sp.S.Reals)
            sols = list(res) if res.is_FiniteSet else None
            return R(latex=VN(res), text=str(res), kind='set', var=str(v), solutions=[L(s) for s in sols] if sols is not None else None, numeric=[L(sp.N(s, 6)) for s in sols] if sols else None)
        if op == 'system':
            eqs = []
            syms = set()
            for s in [s for s in a['expr'].split('\\n') if s.strip()]:
                rel, l, r = relation(s)
                eqs.append(sp.Eq(l, r if r is not None else 0)); syms |= (l.free_symbols | (r.free_symbols if r is not None else set()))
            order = sorted(syms, key=lambda q: q.name)
            res = sp.solve(eqs, order, dict=True)
            def one(d): return ',\\\\ '.join(str(k) + ' = ' + L(v) for k, v in sorted(d.items(), key=lambda kv: str(kv[0])))
            tex = ('\\\\text{ ho\u1EB7c }').join(one(d) for d in res) if res else '\\\\text{v\xF4 nghi\u1EC7m}'
            return R(latex=tex, text=str(res), kind='system', solutions=[{str(k): L(v) for k, v in d.items()} for d in res])
        if op == 'matrix':
            m = P(a['expr'])
            if isinstance(m, (list, tuple)): m = sp.Matrix(m)
            if not isinstance(m, sp.MatrixBase): return R(error='Nh\u1EADp ma tr\u1EADn d\u1EA1ng [[1,2],[3,4]]')
            what = a.get('what') or 'det'
            res = {'det': lambda: m.det(), 'inv': lambda: m.inv(), 'rank': lambda: m.rank(), 'T': lambda: m.T, 'eigen': lambda: m.eigenvals(), 'rref': lambda: m.rref()[0]}[what]()
            return R(latex=L(res), text=str(res))
        if op == 'number':
            k = sp.Integer(P(a['expr']))
            what = a.get('what') or 'factor'
            if what == 'factor': res = sp.factorint(k); return R(latex=' \\\\cdot '.join(f'{p}^{{{e}}}' if e > 1 else str(p) for p, e in sorted(res.items())), text=str(res))
            if what == 'prime': return R(latex='\\\\text{' + ('l\xE0 s\u1ED1 nguy\xEAn t\u1ED1' if sp.isprime(k) else 'kh\xF4ng l\xE0 s\u1ED1 nguy\xEAn t\u1ED1') + '}', text=str(sp.isprime(k)))
            if what == 'divisors': res = sp.divisors(k); return R(latex=L(res), text=str(res))
        return R(error='Thao t\xE1c ch\u01B0a h\u1ED7 tr\u1EE3')
    except Exception as ex:
        return R(error=str(ex)[:300])
`;
    }
  });

  // taskpane/calc-ui.js
  var calc_ui_exports = {};
  __export(calc_ui_exports, {
    mountCalc: () => mountCalc
  });
  function mountCalc(root, io, hooks = {}) {
    root.innerHTML = `
    <div class="notice">SymPy ch\u1EA1y ngay trong tr\xECnh duy\u1EC7t (Python/WebAssembly). L\u1EA7n \u0111\u1EA7u c\u1EA7n m\u1EA1ng v\xE0 t\u1EA3i kho\u1EA3ng 20\u201330 MB; c\xE1c l\u1EA7n sau d\xF9ng l\u1EA1i b\u1EA3n \u0111\xE3 l\u01B0u.</div>
    <fieldset><legend>Ph\xE9p t\xEDnh</legend>
      ${field3("Thao t\xE1c", `<select id="c-op">${OPS.map(([g, list3]) => `<optgroup label="${g}">${list3.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</optgroup>`).join("")}</select>`)}
      ${field3("Bi\u1EC3u th\u1EE9c (g\xF5 th\u01B0\u1EDDng ho\u1EB7c LaTeX)", '<textarea id="c-expr" rows="3" spellcheck="false"></textarea>')}
      <div class="btns two"><button class="secondary" id="c-load">L\u1EA5y c\xF4ng th\u1EE9c t\u1EEB Word</button><label class="switch" style="margin:0"><input type="checkbox" id="c-auto" checked><span class="switch-track"></span><span>T\u1EF1 l\u1EA5y theo con tr\u1ECF</span></label></div>
      <div id="c-opts"></div>
      <div class="btns"><button class="primary" id="c-run">T\xEDnh</button></div>
      <div id="c-status" class="muted"></div>
    </fieldset>
    <div id="c-results"></div>`;
    const $2 = (id) => root.querySelector("#" + id);
    const results = [];
    function options() {
      const op = $2("c-op").value;
      const v = field3("Bi\u1EBFn", '<input type="text" id="c-var" value="x" maxlength="2">');
      let html = "";
      if (["diff"].includes(op)) html = `<div class="grid2">${v}${field3("C\u1EA5p \u0111\u1EA1o h\xE0m", '<input type="number" id="c-order" value="1" min="1" max="6">')}</div>`;
      else if (op === "integrate" || op === "apart") html = v;
      else if (op === "defint") html = `${v}<div class="grid2">${field3("C\u1EADn d\u01B0\u1EDBi", '<input type="text" id="c-lo" value="0">')}${field3("C\u1EADn tr\xEAn", '<input type="text" id="c-hi" value="1">')}</div>`;
      else if (op === "limit") html = `<div class="grid3">${v}${field3("x \u2192", '<input type="text" id="c-pt" value="0">')}${field3("Ph\xEDa", '<select id="c-dir"><option value="+-">hai ph\xEDa</option><option value="+">ph\u1EA3i (+)</option><option value="-">tr\xE1i (\u2212)</option></select>')}</div><div class="hint">D\xF9ng <b>oo</b> ho\u1EB7c \u221E cho v\xF4 c\u1EF1c (vd. x \u2192 oo).</div>`;
      else if (op === "series") html = `<div class="grid3">${v}${field3("T\u1EA1i", '<input type="text" id="c-pt" value="0">')}${field3("S\u1ED1 h\u1EA1ng", '<input type="number" id="c-order" value="6" min="2" max="12">')}</div>`;
      else if (op === "solve") html = `${v}<div class="hint">Ph\u01B0\u01A1ng tr\xECnh: x^2-5x+6=0 \xB7 B\u1EA5t ph\u01B0\u01A1ng tr\xECnh: (x-1)/(x+2)>=0</div>`;
      else if (op === "eval") html = field3("S\u1ED1 ch\u1EEF s\u1ED1", '<input type="number" id="c-digits" value="10" min="3" max="60">');
      else if (op === "matrix") html = field3("Ph\xE9p t\xEDnh", '<select id="c-what"><option value="det">\u0110\u1ECBnh th\u1EE9c</option><option value="inv">Ma tr\u1EADn ngh\u1ECBch \u0111\u1EA3o</option><option value="rank">H\u1EA1ng</option><option value="T">Chuy\u1EC3n v\u1ECB</option><option value="rref">D\u1EA1ng b\u1EADc thang r\xFAt g\u1ECDn</option><option value="eigen">Gi\xE1 tr\u1ECB ri\xEAng</option></select>');
      else if (op === "number") html = field3("Ph\xE9p t\xEDnh", '<select id="c-what"><option value="factor">Ph\xE2n t\xEDch ra th\u1EEBa s\u1ED1 nguy\xEAn t\u1ED1</option><option value="prime">C\xF3 ph\u1EA3i s\u1ED1 nguy\xEAn t\u1ED1?</option><option value="divisors">C\xE1c \u01B0\u1EDBc</option></select>');
      $2("c-opts").innerHTML = html;
      if (!$2("c-expr").dataset.touched) $2("c-expr").value = EXAMPLES[op] || "";
    }
    $2("c-op").addEventListener("change", options);
    $2("c-expr").addEventListener("input", () => {
      $2("c-expr").dataset.touched = "1";
    });
    $2("c-expr").addEventListener("keydown", (ev) => {
      if ((ev.ctrlKey || ev.metaKey) && ev.key === "Enter") {
        ev.preventDefault();
        run4();
      }
    });
    const val2 = (id) => (root.querySelector("#" + id) || {}).value;
    async function run4() {
      const op = $2("c-op").value, btn = $2("c-run");
      btn.disabled = true;
      try {
        const lines = $2("c-expr").value.split("\n").map((l) => normalizeInput(l)).join("\n");
        const args = { expr: lines, var: val2("c-var") || "x", order: val2("c-order"), lo: val2("c-lo"), hi: val2("c-hi"), point: val2("c-pt"), dir: val2("c-dir"), digits: val2("c-digits"), what: val2("c-what") };
        $2("c-status").textContent = "\u0110ang t\xEDnh\u2026";
        const r = await calc(op, args, (m) => {
          $2("c-status").textContent = m;
        });
        $2("c-status").textContent = "";
        if (r.error) throw new CalcError(r.error);
        results.unshift({ op, input: $2("c-expr").value.trim(), r });
        render();
      } catch (e3) {
        $2("c-status").innerHTML = `<span class="bad">${esc8(e3.message)}</span>`;
      } finally {
        btn.disabled = false;
      }
    }
    $2("c-run").addEventListener("click", run4);
    let lastLatex = "";
    async function loadFromWord(showNotice) {
      try {
        const r = pickEquation(await io.readCursorContext());
        if (!r.eq) {
          if (showNotice) $2("c-status").innerHTML = '<span class="warn">Kh\xF4ng th\u1EA5y c\xF4ng th\u1EE9c t\u1EA1i con tr\u1ECF / v\xF9ng ch\u1ECDn.</span>';
          return;
        }
        if (!showNotice && r.eq.latex === lastLatex) return;
        lastLatex = r.eq.latex;
        $2("c-expr").value = r.eq.latex.replace(/\s+/g, " ").trim();
        $2("c-expr").dataset.touched = "1";
        const kind = r.eq.kind === "mathtype" ? "MathType" : r.eq.kind === "native" ? "Word Equation" : "LaTeX";
        $2("c-status").innerHTML = `<span class="ok">\u0110\xE3 l\u1EA5y c\xF4ng th\u1EE9c (${kind})${r.count > 1 ? ` ${r.index + 1}/${r.count}` : ""}.</span>`;
      } catch (e3) {
        if (showNotice) $2("c-status").innerHTML = `<span class="bad">${esc8(e3.message)}</span>`;
      }
    }
    $2("c-load").addEventListener("click", () => loadFromWord(true));
    document.addEventListener("texcraft:selection", () => {
      var _a8;
      if (!$2("c-auto").checked || !((_a8 = root.closest("section")) == null ? void 0 : _a8.classList.contains("active"))) return;
      if (document.activeElement === $2("c-expr")) return;
      loadFromWord(false);
    });
    function tex(latex) {
      try {
        if (typeof katex !== "undefined") return katex.renderToString(latex, { throwOnError: false, displayMode: true });
      } catch (e3) {
      }
      return `<code>${esc8(latex)}</code>`;
    }
    function render() {
      $2("c-results").innerHTML = results.slice(0, 8).map((it, i) => {
        const r = it.r, label = OPS.flatMap(([, l]) => l).find(([v]) => v === it.op)[1];
        const extra = [r.simplified && r.simplified !== r.latex ? `R\xFAt g\u1ECDn: ${tex(r.simplified)}` : "", r.numeric ? `G\u1EA7n \u0111\xFAng: ${tex(Array.isArray(r.numeric) ? r.numeric.join(",;") : r.numeric)}` : "", r.exact ? `D\u1EA1ng ch\xEDnh x\xE1c: ${tex(r.exact)}` : ""].filter(Boolean).join("");
        return `<fieldset class="calc-card" data-i="${i}"><legend>${esc8(label)}</legend><div class="muted calc-input">${esc8(it.input).replace(/\n/g, " \xB7 ")}</div><div class="calc-result">${tex(r.latex)}</div>${extra ? `<div class="calc-extra">${extra}</div>` : ""}
        <div class="btns four"><button class="secondary" data-a="word">Ch\xE8n c\xF4ng th\u1EE9c Word</button><button class="secondary" data-a="mt">Ch\xE8n MathType</button><button class="secondary" data-a="copy">Sao ch\xE9p LaTeX</button><button class="secondary" data-a="edit">M\u1EDF trong So\u1EA1n th\u1EA3o</button></div><div class="calc-out"></div></fieldset>`;
      }).join("");
    }
    $2("c-results").addEventListener("click", async (ev) => {
      const b = ev.target.closest("button[data-a]");
      if (!b) return;
      const card = b.closest(".calc-card"), it = results[Number(card.dataset.i)], out = card.querySelector(".calc-out");
      const latex = it.r.latex;
      try {
        if (b.dataset.a === "copy") {
          await navigator.clipboard.writeText(latex);
          out.innerHTML = '<span class="ok">\u0110\xE3 sao ch\xE9p LaTeX.</span>';
        } else if (b.dataset.a === "edit") {
          if (hooks.openEditor) hooks.openEditor(latex);
        } else if (b.dataset.a === "word") {
          await io.replaceSelection(makeEquationPackage(latexToOmml(latex, { display: false })));
          out.innerHTML = '<span class="ok">\u0110\xE3 ch\xE8n c\xF4ng th\u1EE9c Word.</span>';
        } else {
          await io.replaceSelection(await makeMathTypePackage(latex, __spreadValues({ render: browserRender, inline: true }, await mtOptions())));
          out.innerHTML = '<span class="ok">\u0110\xE3 ch\xE8n \u0111\u1ED1i t\u01B0\u1EE3ng MathType.</span>';
        }
      } catch (e3) {
        out.innerHTML = `<span class="bad">${esc8(e3.message)}</span>`;
      }
    });
    options();
  }
  var esc8, field3, OPS, EXAMPLES;
  var init_calc_ui = __esm({
    "taskpane/calc-ui.js"() {
      init_sympy_bridge();
      init_latex2omml();
      init_ooxml();
      init_mt_settings();
      init_cursor_eq();
      init_mathtype_object();
      esc8 = (s) => String(s != null ? s : "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
      field3 = (label, inner, id = "") => `<label class="field"${id ? ` id="${id}"` : ""}><span>${label}</span>${inner}</label>`;
      OPS = [
        ["\u0110\u1EA1i s\u1ED1", [["simplify", "R\xFAt g\u1ECDn"], ["expand", "Khai tri\u1EC3n"], ["factor", "Ph\xE2n t\xEDch th\xE0nh nh\xE2n t\u1EED"], ["apart", "T\xE1ch ph\xE2n th\u1EE9c \u0111\u01A1n gi\u1EA3n"], ["together", "Quy \u0111\u1ED3ng"], ["cancel", "Gi\u1EA3n \u01B0\u1EDBc ph\xE2n th\u1EE9c"], ["trigsimp", "R\xFAt g\u1ECDn l\u01B0\u1EE3ng gi\xE1c"], ["eval", "T\xEDnh gi\xE1 tr\u1ECB (s\u1ED1 th\u1EADp ph\xE2n)"]]],
        ["Gi\u1EA3i t\xEDch", [["diff", "\u0110\u1EA1o h\xE0m"], ["integrate", "Nguy\xEAn h\xE0m"], ["defint", "T\xEDch ph\xE2n x\xE1c \u0111\u1ECBnh"], ["limit", "Gi\u1EDBi h\u1EA1n"], ["series", "Khai tri\u1EC3n Taylor"]]],
        ["Ph\u01B0\u01A1ng tr\xECnh", [["solve", "Gi\u1EA3i ph\u01B0\u01A1ng tr\xECnh / b\u1EA5t ph\u01B0\u01A1ng tr\xECnh"], ["system", "Gi\u1EA3i h\u1EC7 ph\u01B0\u01A1ng tr\xECnh"]]],
        ["Ma tr\u1EADn & s\u1ED1 h\u1ECDc", [["matrix", "Ma tr\u1EADn"], ["number", "S\u1ED1 nguy\xEAn"]]]
      ];
      EXAMPLES = { simplify: "(x^2-1)/(x-1)", expand: "(x+1)^3", factor: "x^3-3x^2+2x", apart: "(2x+3)/((x-1)(x+2))", together: "1/x+1/(x+1)", cancel: "(x^2-4)/(x^2-2x)", trigsimp: "sin(x)^2+cos(x)^2", eval: "sqrt(2)+pi", diff: "x^3-3x+1", integrate: "x*sin(x)", defint: "x^2", limit: "sin(x)/x", series: "exp(x)", solve: "x^2-5x+6=0", system: "x+y=5\nx-y=1", matrix: "[[1,2],[3,4]]", number: "360" };
    }
  });

  // src/lms.js
  function imageMap(pkg) {
    const parts = splitParts(pkg), map = /* @__PURE__ */ new Map();
    const rels = parts.get("/word/_rels/document.xml.rels");
    if (!rels) return map;
    for (const tag of rels.body.match(/<Relationship\b[^>]*>/g) || []) {
      const id = /\bId="([^"]+)"/.exec(tag), target = /\bTarget="([^"]+)"/.exec(tag);
      if (!id || !target || /TargetMode="External"/.test(tag)) continue;
      const part = parts.get(target[1].startsWith("/") ? target[1] : "/word/" + target[1].replace(/^\.\//, ""));
      if (!part) continue;
      const type = /pkg:contentType="([^"]+)"/.exec(part.attrs), bin = /<pkg:binaryData>([\s\S]*?)<\/pkg:binaryData>/.exec(part.body);
      if (type && bin && /^image\/(png|jpe?g|gif|svg\+xml|webp|bmp)$/.test(type[1])) map.set(id[1], `data:${type[1]};base64,${bin[1].replace(/\s+/g, "")}`);
    }
    return map;
  }
  function runHtml(run4, images, skip) {
    var _a8;
    if (/<w:object\b|<w:pict\b|<mc:AlternateContent|<w:drawing/.test(run4)) {
      if (skip.n) return "";
      const blip = /<a:blip\b[^>]*r:embed="([^"]+)"/.exec(run4) || /<v:imagedata\b[^>]*r:id="([^"]+)"/.exec(run4);
      const src = blip && images.get(blip[1]);
      if (src) {
        const ext = /<wp:extent cx="(\d+)"/.exec(run4);
        const w = ext ? Math.round(Number(ext[1]) / 9525) : 0;
        return `<img src="${src}" alt=""${w ? ` style="max-width:100%;width:${w}px"` : ""}>`;
      }
      return '<span class="miss">[h\xECnh]</span>';
    }
    const rpr2 = ((_a8 = /<w:rPr>([\s\S]*?)<\/w:rPr>/.exec(run4)) == null ? void 0 : _a8[1]) || "";
    const on = (tag) => new RegExp(`<w:${tag}\\b(?![^>]*w:val="(?:0|false|none)")`).test(rpr2);
    const sup2 = /<w:vertAlign w:val="superscript"/.test(rpr2), sub4 = /<w:vertAlign w:val="subscript"/.test(rpr2);
    let out = "";
    for (const m of run4.matchAll(/<w:t\b[^>]*>([^<]*)<\/w:t>|<w:tab\/>|<w:br\b[^>]*\/>/g)) {
      if (m[0].startsWith("<w:tab")) {
        out += " ";
        continue;
      }
      if (m[0].startsWith("<w:br")) {
        out += "<br>";
        continue;
      }
      let t = unescapeXml(m[1]);
      if (skip.n) {
        const cut = Math.min(skip.n, t.length);
        t = t.slice(cut);
        skip.n -= cut;
      }
      out += esc9(t);
    }
    if (!out) return "";
    if (on("b")) out = `<b>${out}</b>`;
    if (on("i")) out = `<i>${out}</i>`;
    if (on("u")) out = `<u>${out}</u>`;
    if (sup2) out = `<sup>${out}</sup>`;
    if (sub4) out = `<sub>${out}</sub>`;
    return out;
  }
  function childrenHtml(children2, images, skip = { n: 0 }) {
    let out = "";
    for (const c of children2) {
      if (typeof c !== "string") continue;
      if (/^<m:oMath(Para)?[\s>]/.test(c)) {
        if (skip.n) {
          skip.n--;
          continue;
        }
        try {
          const [tex, display] = ommlToLatex(c);
          out += display ? `\\[${esc9(tex)}\\]` : `\\(${esc9(tex)}\\)`;
        } catch (e3) {
          out += '<span class="miss">[c\xF4ng th\u1EE9c]</span>';
        }
      } else if (/^<w:r[\s>]/.test(c)) out += runHtml(c, images, skip);
      else if (/^<w:hyperlink[\s>]/.test(c)) out += childrenHtml(c.replace(/^<w:hyperlink\b[^>]*>/, "").replace(/<\/w:hyperlink>$/, "").match(/<w:r[\s>][\s\S]*?<\/w:r>/g) || [], images, skip);
    }
    return out.replace(/(<br>)+$/, "").trim();
  }
  function extractQuiz(pkg0) {
    const conv = convertMathTypeInPackage(pkg0, { convertMathType: true, convertLatex: true, display: false });
    const pkg = conv.changed ? conv.pkg : pkg0;
    const images = imageMap(pkg), model = parseBody(pkg), a = analyze(model), answers = answersOf(model, a);
    const questions = [], warnings = [];
    for (const part of a.parts) {
      for (const q of part.questions) {
        const ans = answers.find((x) => x.part === part.title && x.number === q.number);
        const kind = part.kind === "tf" ? "tf" : part.kind === "short" ? "short" : "mc";
        const stemBlocks = model.blocks.slice(q.start, q.stemEnd);
        const html = stemBlocks.map((b, i) => paraHtml(b, images, i === 0 ? (RE_LABEL.exec(paragraphText(b)) || [""])[0].length : 0)).filter(Boolean);
        const item = { number: q.number, part: part.title, kind, stem: html.map((h) => `<p>${h}</p>`).join(""), options: [], statements: [], answer: null };
        if (kind === "mc") {
          item.options = (q.options || []).map((o) => ({ letter: o.letter, html: childrenHtml(o.content, images, { n: 0 }).replace(/^\s*[A-D]\s*[.)]\s*/, "") }));
          if (!item.options.length) {
            warnings.push(`C\xE2u ${q.number}: kh\xF4ng th\u1EA5y ph\u01B0\u01A1ng \xE1n A\u2013D`);
          }
          if ((ans == null ? void 0 : ans.value) && ans.value.length === 1) item.answer = ans.value;
          else if (ans == null ? void 0 : ans.value) warnings.push(`C\xE2u ${q.number}: c\xF3 nhi\u1EC1u ph\u01B0\u01A1ng \xE1n \u0111\u01B0\u1EE3c \u0111\xE1nh d\u1EA5u`);
        } else if (kind === "tf") {
          item.statements = q.statements.map((s) => {
            const b = model.blocks[s.block];
            const li = b.children.findIndex((c) => /^<w:r[\s>]/.test(c) && /[a-d]\s*\)/.test(c.replace(/<[^>]+>/g, "")));
            const rest = li >= 0 ? b.children.slice(li + 1) : b.children;
            return { letter: s.letter, html: childrenHtml(rest, images, { n: 0 }).replace(/^\s*[a-d]\s*\)\s*/, "") };
          });
          if (ans == null ? void 0 : ans.tf) item.answer = ans.tf;
        } else if (ans == null ? void 0 : ans.value) item.answer = String(ans.value).trim();
        if (item.answer === null && !(kind === "mc" && !item.options.length)) warnings.push(`C\xE2u ${q.number}: ch\u01B0a c\xF3 \u0111\xE1p \xE1n`);
        questions.push(item);
      }
    }
    return { questions, warnings };
  }
  function buildQuizHtml(quiz, opts = {}) {
    const o = __spreadValues(__spreadValues({}, DEFAULT_LMS), opts);
    const data = { title: o.title, mode: o.mode, minutes: Math.max(0, Number(o.minutes) || 0), shuffleQ: o.shuffleQ, shuffleO: o.shuffleO, askName: o.askName, showKey: o.showKey, questions: quiz.questions };
    const json = JSON.stringify(data).replace(/</g, "\\u003c").replace(/[\u2028\u2029]/g, (c) => "\\u" + c.charCodeAt(0).toString(16));
    return `<!DOCTYPE html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc9(o.title)}</title>
<link rel="stylesheet" href="${KATEX}/katex.min.css">
<style>${PAGE_CSS}</style></head>
<body><div id="app"></div>
<script type="application/json" id="quiz-data">${json}<\/script>
<script defer src="${KATEX}/katex.min.js"><\/script>
<script defer src="${KATEX}/contrib/auto-render.min.js"><\/script>
<script>${PAGE_JS}<\/script>
</body></html>`;
  }
  var esc9, RE_LABEL, paraHtml, DEFAULT_LMS, KATEX, PAGE_CSS, PAGE_JS;
  var init_lms = __esm({
    "src/lms.js"() {
      init_exam();
      init_ooxml();
      init_omml();
      init_xml();
      esc9 = (s) => String(s != null ? s : "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      RE_LABEL = /^\s*(?:C[âa]u|B[àa]i)\s*\d+\s*(?:[.:)\-–—]|\s)?\s*/iu;
      paraHtml = (b, images, skipLen = 0) => b.kind === "p" ? childrenHtml(b.children, images, { n: skipLen }) : "";
      DEFAULT_LMS = { title: "B\xC0I TR\u1EAEC NGHI\u1EC6M", mode: "practice", minutes: 0, shuffleQ: false, shuffleO: false, askName: true, showKey: true };
      KATEX = "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist";
      PAGE_CSS = `
:root{--bg:#f6f8fa;--card:#fff;--fg:#1c2330;--muted:#667085;--line:#d9dee7;--accent:#1f6f4f;--ok:#1a7f45;--okbg:#e4f5ea;--bad:#c0362c;--badbg:#fdeaea;--sel:#e8f0fe}
@media(prefers-color-scheme:dark){:root{--bg:#12161c;--card:#1b212b;--fg:#e6eaf0;--muted:#98a2b3;--line:#323b49;--accent:#4cc38a;--ok:#4cc38a;--okbg:#17352a;--bad:#ff7b72;--badbg:#3a1c1c;--sel:#22304a}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
#app{max-width:820px;margin:0 auto;padding:12px 14px 60px}
h1{font-size:1.4rem;margin:.6em 0 .2em}.muted{color:var(--muted)}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 16px;margin:12px 0}
.bar{position:sticky;top:0;z-index:5;display:flex;gap:12px;align-items:center;justify-content:space-between;background:var(--card);border-bottom:1px solid var(--line);padding:8px 14px;margin:0 -14px}
.bar .prog{flex:1;height:8px;border-radius:4px;background:var(--line);overflow:hidden}.bar .prog i{display:block;height:100%;background:var(--accent);width:0}
button,input[type=text]{font:inherit}
button.pri{background:var(--accent);color:#fff;border:0;border-radius:8px;padding:8px 18px;cursor:pointer}button.sec{background:none;border:1px solid var(--line);color:var(--fg);border-radius:8px;padding:7px 14px;cursor:pointer}
input[type=text]{width:100%;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--fg)}
.q h3{margin:0 0 6px;font-size:1rem;color:var(--accent)}.q .stem p{margin:.3em 0}.q img{max-width:100%}
.opt{display:flex;gap:10px;align-items:flex-start;width:100%;text-align:left;background:none;color:var(--fg);border:1px solid var(--line);border-radius:10px;padding:8px 12px;margin:6px 0;cursor:pointer}
.opt:hover{background:var(--sel)}.opt .l{flex:0 0 1.7em;height:1.7em;border-radius:50%;border:1px solid var(--line);display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:.9em}
.opt.sel{background:var(--sel);border-color:var(--accent)}.opt.sel .l{background:var(--accent);color:#fff;border-color:var(--accent)}
.opt.ok{background:var(--okbg);border-color:var(--ok)}.opt.bad{background:var(--badbg);border-color:var(--bad)}.locked .opt{cursor:default}
.tf{display:grid;grid-template-columns:1fr auto;gap:6px 10px;align-items:center;margin:8px 0;padding:6px 0;border-bottom:1px dashed var(--line)}
.tf .yn{display:flex;gap:6px}.tf .yn button{min-width:56px}.tf .yn .opt{margin:0;padding:5px 10px;justify-content:center}
.fb{margin-top:8px;font-weight:600}.fb.ok{color:var(--ok)}.fb.bad{color:var(--bad)}
.res{text-align:center}.res .score{font-size:2.4rem;font-weight:800;color:var(--accent)}
.miss{color:var(--muted);font-style:italic}.sel-q{display:flex;flex-wrap:wrap;gap:6px}.dot{width:30px;height:30px;border-radius:6px;border:1px solid var(--line);display:inline-flex;align-items:center;justify-content:center;font-size:.8rem;cursor:pointer;background:var(--card);color:var(--fg)}
.dot.done{background:var(--sel);border-color:var(--accent)}.dot.ok{background:var(--okbg);border-color:var(--ok)}.dot.bad{background:var(--badbg);border-color:var(--bad)}
`;
      PAGE_JS = `
(function(){
var D=JSON.parse(document.getElementById('quiz-data').textContent),app=document.getElementById('app');
var TEST=D.mode==='test',st={name:'',started:false,t0:0,left:0,timer:null,done:false,items:[],ans:{},locked:{}};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function rnd(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function typeset(el){if(window.renderMathInElement)try{renderMathInElement(el||document.body,{delimiters:[{left:'\\\\[',right:'\\\\]',display:true},{left:'\\\\(',right:'\\\\)',display:false}],throwOnError:false})}catch(e){}}
window.addEventListener('load',function(){typeset()});
function norm(s){return String(s).toLowerCase().replace(/\\s+/g,'').replace(/,/g,'.').replace(/^[-\u2212\u2013]/,'-').replace(/\u2212/g,'-')}
function prepare(){
  var qs=D.questions.map(function(q,i){return{q:q,id:i}});
  if(D.shuffleQ){var by={},order=[];qs.forEach(function(x){var k=x.q.part;if(!by[k]){by[k]=[];order.push(k)}by[k].push(x)});qs=[];order.forEach(function(k){qs=qs.concat(rnd(by[k]))})}
  st.items=qs.map(function(x){var q=x.q,opts=q.options.slice();if(D.shuffleO&&q.kind==='mc')opts=rnd(opts);return{id:x.id,q:q,opts:opts}});
}
function start(){
  if(D.askName){var v=document.getElementById('nm').value.trim();if(!v){document.getElementById('nm').focus();return}st.name=v}
  prepare();st.started=true;st.t0=Date.now();
  if(D.minutes>0){st.left=D.minutes*60;st.timer=setInterval(tick,1000)}
  renderQuiz();
}
function tick(){st.left--;var e=document.getElementById('clock');if(e)e.textContent=fmt(st.left);if(st.left<=0){clearInterval(st.timer);submit(true)}}
function fmt(s){s=Math.max(0,s);var m=Math.floor(s/60),r=s%60;return m+':'+(r<10?'0':'')+r}
function renderStart(){
  var h='<h1>'+esc(D.title)+'</h1><div class="card"><div class="muted">'+D.questions.length+' c\xE2u h\u1ECFi'+(D.minutes>0?' \xB7 th\u1EDDi gian '+D.minutes+' ph\xFAt':'')+' \xB7 '+(TEST?'Ch\u1EBF \u0111\u1ED9 ki\u1EC3m tra: ch\u1EA5m \u0111i\u1EC3m sau khi n\u1ED9p b\xE0i':'Ch\u1EBF \u0111\u1ED9 luy\u1EC7n t\u1EADp: b\xE1o \u0111\xFAng/sai ngay sau m\u1ED7i c\xE2u')+'</div>';
  if(D.askName)h+='<p><input type="text" id="nm" placeholder="H\u1ECD v\xE0 t\xEAn" autocomplete="name"></p>';
  h+='<p><button class="pri" id="go">B\u1EAFt \u0111\u1EA7u l\xE0m b\xE0i</button></p></div>';
  app.innerHTML=h;document.getElementById('go').onclick=start;
  var nm=document.getElementById('nm');if(nm)nm.onkeydown=function(e){if(e.key==='Enter')start()};
}
function qHtml(it,n){
  var q=it.q,h='<div class="card q" id="q'+it.id+'"><h3>C\xE2u '+n+'</h3><div class="stem">'+q.stem+'</div><div class="body">';
  if(q.kind==='mc'){it.opts.forEach(function(o,i){h+='<button class="opt" data-q="'+it.id+'" data-l="'+o.letter+'"><span class="l">'+'ABCD'.charAt(i)+'</span><span>'+o.html+'</span></button>'})}
  else if(q.kind==='tf'){q.statements.forEach(function(s,i){h+='<div class="tf"><div><b>'+s.letter+')</b> '+s.html+'</div><div class="yn"><button class="opt" data-q="'+it.id+'" data-s="'+i+'" data-v="\u0110">\u0110\xFAng</button><button class="opt" data-q="'+it.id+'" data-s="'+i+'" data-v="S">Sai</button></div></div>'})}
  else{h+='<input type="text" class="sa" data-q="'+it.id+'" placeholder="Nh\u1EADp \u0111\xE1p \xE1n" autocomplete="off">'+(TEST?'':' <button class="sec chk" data-q="'+it.id+'">Ki\u1EC3m tra</button>')}
  return h+'</div><div class="fb"></div></div>';
}
function renderQuiz(){
  var h='<div class="bar"><b id="cnt"></b><div class="prog"><i id="pg"></i></div>'+(D.minutes>0?'<b id="clock">'+fmt(st.left)+'</b>':'')+(TEST?'<button class="pri" id="sub">N\u1ED9p b\xE0i</button>':'<button class="sec" id="fin">Xem k\u1EBFt qu\u1EA3</button>')+'</div>';
  var n=0,part=null;
  st.items.forEach(function(it){n++;if(it.q.part&&it.q.part!==part){part=it.q.part;h+='<h2 style="font-size:1.05rem;margin:18px 0 0">'+esc(part)+'</h2>'}h+=qHtml(it,n)});
  app.innerHTML=h;typeset(app);bind();progress();
  document.getElementById(TEST?'sub':'fin').onclick=function(){submit(false)};
}
function bind(){
  app.onclick=function(e){
    var b=e.target.closest('button');if(!b||st.done)return;
    var id=b.getAttribute('data-q');if(id===null)return;id=+id;var it=find(id);
    if(b.classList.contains('chk')){checkShort(it);return}
    if(st.locked[id])return;
    if(b.hasAttribute('data-l')){st.ans[id]=b.getAttribute('data-l');mark(it)}
    else if(b.hasAttribute('data-s')){var a=st.ans[id]||[];a[+b.getAttribute('data-s')]=b.getAttribute('data-v');st.ans[id]=a;mark(it)}
    if(!TEST&&isAnswered(it)&&it.q.kind!=='short')lockAndShow(it);
    progress();
  };
  app.oninput=function(e){var t=e.target;if(t.classList.contains('sa')){st.ans[+t.getAttribute('data-q')]=t.value;progress()}};
  app.onkeydown=function(e){if(e.key==='Enter'&&e.target.classList.contains('sa')&&!TEST){checkShort(find(+e.target.getAttribute('data-q')))}};
}
function find(id){for(var i=0;i<st.items.length;i++)if(st.items[i].id===id)return st.items[i]}
function isAnswered(it){var a=st.ans[it.id];if(a==null)return false;if(it.q.kind==='tf')return it.q.statements.every(function(_,i){return a[i]});return String(a).trim()!==''}
function mark(it){
  var card=document.getElementById('q'+it.id),a=st.ans[it.id];
  card.querySelectorAll('.opt').forEach(function(b){
    var on=b.hasAttribute('data-l')?a===b.getAttribute('data-l'):(a&&a[+b.getAttribute('data-s')]===b.getAttribute('data-v'));
    b.classList.toggle('sel',!!on)});
}
function checkShort(it){if(!isAnswered(it))return;lockAndShow(it)}
function lockAndShow(it){st.locked[it.id]=true;reveal(it,true)}
function score(it){ // 0..1 or null when the document has no key
  var q=it.q,a=st.ans[it.id];if(q.answer==null)return null;
  if(q.kind==='mc')return a===q.answer?1:0;
  if(q.kind==='short')return a!=null&&norm(a)===norm(q.answer)?1:0;
  var k=0;q.statements.forEach(function(_,i){if(a&&a[i]===q.answer[i])k++});return [0,.1,.25,.5,1][Math.min(4,Math.round(k/q.statements.length*4))];
}
function reveal(it,feedback){
  var card=document.getElementById('q'+it.id),q=it.q,a=st.ans[it.id],fb=card.querySelector('.fb');
  card.classList.add('locked');
  if(q.answer==null){fb.textContent='C\xE2u n\xE0y ch\u01B0a c\xF3 \u0111\xE1p \xE1n.';return}
  if(q.kind==='mc')card.querySelectorAll('.opt').forEach(function(b){var l=b.getAttribute('data-l');b.classList.remove('sel');if(l===q.answer)b.classList.add('ok');else if(l===a)b.classList.add('bad')});
  else if(q.kind==='tf')card.querySelectorAll('.opt').forEach(function(b){var i=+b.getAttribute('data-s'),v=b.getAttribute('data-v');b.classList.remove('sel');if(q.answer[i]===v)b.classList.add('ok');else if(a&&a[i]===v)b.classList.add('bad')});
  var s=score(it);
  if(D.showKey||feedback){fb.className='fb '+(s===1?'ok':'bad');
    fb.textContent=(s===1?'Ch\xEDnh x\xE1c!':s>0?'\u0110\xFAng m\u1ED9t ph\u1EA7n.':'Ch\u01B0a \u0111\xFAng.')+(q.kind==='short'&&s!==1?' \u0110\xE1p \xE1n: '+q.answer:'')+(q.kind==='mc'&&s!==1?' \u0110\xE1p \xE1n: '+shown(it):'')}
  typeset(card);
}
function shown(it){for(var i=0;i<it.opts.length;i++)if(it.opts[i].letter===it.q.answer)return 'ABCD'.charAt(i);return it.q.answer}
function progress(){
  var done=st.items.filter(isAnswered).length;
  document.getElementById('cnt').textContent=done+'/'+st.items.length+' c\xE2u';
  document.getElementById('pg').style.width=(100*done/st.items.length)+'%';
}
function submit(auto){
  if(st.done)return;
  var un=st.items.length-st.items.filter(isAnswered).length;
  if(!auto&&TEST&&un&&!confirm('C\xF2n '+un+' c\xE2u ch\u01B0a tr\u1EA3 l\u1EDDi. N\u1ED9p b\xE0i?'))return;
  st.done=true;if(st.timer)clearInterval(st.timer);
  var sum=0,max=0;
  st.items.forEach(function(it){var s=score(it);if(s!==null){sum+=s;max++}reveal(it,false)});
  var pts=max?Math.round(sum/max*100)/10:0,secs=Math.round((Date.now()-st.t0)/1000);
  var r='<div class="card res"><div class="muted">'+(st.name?esc(st.name)+' \xB7 ':'')+'th\u1EDDi gian l\xE0m b\xE0i '+fmt(secs)+'</div><div class="score">'+pts+' / 10</div><div class="muted">'+Math.round(sum*100)/100+' / '+max+' c\xE2u t\xEDnh \u0111i\u1EC3m</div>'+
    '<p><button class="sec" id="again">L\xE0m l\u1EA1i</button> <button class="sec" id="copy">Sao ch\xE9p k\u1EBFt qu\u1EA3</button></p></div>';
  app.insertAdjacentHTML('afterbegin',r);window.scrollTo(0,0);
  var bar=app.querySelector('.bar');if(bar)bar.style.display='none';
  document.getElementById('again').onclick=function(){location.reload()};
  document.getElementById('copy').onclick=function(){var t=D.title+(st.name?' - '+st.name:'')+': '+pts+'/10 ('+fmt(secs)+')';if(navigator.clipboard)navigator.clipboard.writeText(t);this.textContent='\u0110\xE3 sao ch\xE9p'};
}
renderStart();
})();
`;
    }
  });

  // taskpane/lms-ui.js
  var lms_ui_exports = {};
  __export(lms_ui_exports, {
    mountLms: () => mountLms
  });
  function mountLms(root, io) {
    root.innerHTML = `
  <div class="notice">Xu\u1EA5t c\xE1c c\xE2u tr\u1EAFc nghi\u1EC7m c\u1EE7a t\xE0i li\u1EC7u th\xE0nh <b>m\u1ED9t file HTML t\u01B0\u01A1ng t\xE1c</b>: h\u1ECDc sinh m\u1EDF b\u1EB1ng tr\xECnh duy\u1EC7t (\u0111i\u1EC7n tho\u1EA1i hay m\xE1y t\xEDnh), ch\u1ECDn \u0111\xE1p \xE1n v\xE0 nh\u1EADn k\u1EBFt qu\u1EA3 ngay; c\xF3 th\u1EC3 nh\xFAng ho\u1EB7c t\u1EA3i l\xEAn LMS (Moodle, Google Sites, Classroom\u2026). C\xF4ng th\u1EE9c \u0111\u01B0\u1EE3c hi\u1EC3n th\u1ECB b\u1EB1ng KaTeX n\xEAn c\u1EA7n c\xF3 m\u1EA1ng khi m\u1EDF. \u0110\xE1p \xE1n \u0111\xFAng l\u1EA5y t\u1EEB nh\xE3n <b>g\u1EA1ch ch\xE2n / ch\u1EEF \u0111\u1ECF</b> nh\u01B0 tab \u0110\u1EC1 thi.</div>
  <fieldset><legend>1. \u0110\u1ECDc c\xE2u h\u1ECFi</legend>
    <div class="btns"><button class="primary" id="lms-read">\u0110\u1ECDc c\xE2u h\u1ECFi t\u1EEB t\xE0i li\u1EC7u</button></div>
    <div id="lms-summary" class="muted"></div>
  </fieldset>
  <fieldset><legend>2. T\xF9y ch\u1ECDn trang b\xE0i l\xE0m</legend>
    <label class="field"><span>Ti\xEAu \u0111\u1EC1</span><input type="text" id="lms-title" value="${esc10(DEFAULT_LMS.title)}"></label>
    <label class="field"><span>Ch\u1EBF \u0111\u1ED9</span><select id="lms-mode"><option value="practice">Luy\u1EC7n t\u1EADp: b\xE1o \u0111\xFAng/sai ngay sau m\u1ED7i c\xE2u</option><option value="test">Ki\u1EC3m tra: n\u1ED9p b\xE0i r\u1ED3i m\u1EDBi ch\u1EA5m \u0111i\u1EC3m</option></select></label>
    <label class="field"><span>Th\u1EDDi gian l\xE0m b\xE0i (ph\xFAt, 0 = kh\xF4ng gi\u1EDBi h\u1EA1n)</span><input type="number" id="lms-min" value="0" min="0" max="300"></label>
    ${sw3("lms-shq", "Tr\u1ED9n th\u1EE9 t\u1EF1 c\xE2u trong t\u1EEBng ph\u1EA7n", false)}
    ${sw3("lms-sho", "Tr\u1ED9n th\u1EE9 t\u1EF1 ph\u01B0\u01A1ng \xE1n A\u2013D (c\xE2u nhi\u1EC1u l\u1EF1a ch\u1ECDn)", false)}
    ${sw3("lms-name", "H\u1ECFi h\u1ECD t\xEAn h\u1ECDc sinh tr\u01B0\u1EDBc khi l\xE0m", true)}
    ${sw3("lms-key", "Hi\u1EC7n \u0111\xE1p \xE1n \u0111\xFAng sau khi ch\u1EA5m", true)}
    <div class="hint">\u0110\xE1p \xE1n n\u1EB1m trong file (xem \u0111\u01B0\u1EE3c b\u1EB1ng \u201CXem m\xE3 ngu\u1ED3n\u201D), n\xEAn ph\xF9 h\u1EE3p luy\u1EC7n t\u1EADp v\xE0 ki\u1EC3m tra trong l\u1EDBp; kh\xF4ng d\xF9ng cho thi ch\xEDnh th\u1EE9c c\u1EA7n b\u1EA3o m\u1EADt.</div>
  </fieldset>
  <fieldset><legend>3. Xu\u1EA5t</legend>
    <div class="btns two"><button class="secondary" id="lms-preview" disabled>Xem th\u1EED</button><button class="primary" id="lms-save" disabled>T\u1EA3i file HTML</button></div>
    <div id="lms-out"></div>
    <iframe id="lms-frame" title="Xem th\u1EED" sandbox="allow-scripts allow-modals" hidden style="width:100%;height:480px;border:1px solid var(--line);border-radius:8px;margin-top:8px;background:#fff"></iframe>
  </fieldset>`;
    const $2 = (id) => root.querySelector("#" + id);
    let quiz = null;
    const options = () => ({ title: $2("lms-title").value.trim() || DEFAULT_LMS.title, mode: $2("lms-mode").value, minutes: $2("lms-min").value, shuffleQ: $2("lms-shq").checked, shuffleO: $2("lms-sho").checked, askName: $2("lms-name").checked, showKey: $2("lms-key").checked });
    const fail3 = (e3) => {
      $2("lms-out").innerHTML = `<span class="bad">L\u1ED7i: ${esc10(e3.message || e3)}</span>`;
    };
    async function read() {
      $2("lms-summary").textContent = "\u0110ang \u0111\u1ECDc\u2026";
      try {
        const { pkg } = await io.readBody();
        quiz = extractQuiz(pkg);
        const n = quiz.questions.length, kinds = { mc: 0, tf: 0, short: 0 };
        quiz.questions.forEach((q) => {
          kinds[q.kind]++;
        });
        if (!n) {
          $2("lms-summary").innerHTML = '<span class="warn">Kh\xF4ng th\u1EA5y \u201CC\xE2u N.\u201D n\xE0o trong t\xE0i li\u1EC7u.</span>';
          ["lms-preview", "lms-save"].forEach((id) => {
            $2(id).disabled = true;
          });
          return;
        }
        const w = quiz.warnings;
        $2("lms-summary").innerHTML = `<p><b class="ok">${n} c\xE2u</b>: ${kinds.mc} nhi\u1EC1u ph\u01B0\u01A1ng \xE1n, ${kinds.tf} \u0111\xFAng/sai, ${kinds.short} tr\u1EA3 l\u1EDDi ng\u1EAFn.</p>` + (w.length ? `<p class="warn">${w.length} l\u01B0u \xFD (c\xE1c c\xE2u n\xE0y kh\xF4ng t\xEDnh \u0111i\u1EC3m ho\u1EB7c c\u1EA7n ki\u1EC3m tra):</p><ul>${w.slice(0, 8).map((x) => `<li>${esc10(x)}</li>`).join("")}${w.length > 8 ? `<li>\u2026 v\xE0 ${w.length - 8} l\u01B0u \xFD kh\xE1c</li>` : ""}</ul>` : "");
        ["lms-preview", "lms-save"].forEach((id) => {
          $2(id).disabled = false;
        });
      } catch (e3) {
        $2("lms-summary").textContent = "";
        fail3(e3);
      }
    }
    $2("lms-read").addEventListener("click", read);
    $2("lms-preview").addEventListener("click", () => {
      if (!quiz) return;
      const f = $2("lms-frame");
      f.hidden = false;
      f.srcdoc = buildQuizHtml(quiz, options());
      f.scrollIntoView({ block: "nearest" });
    });
    $2("lms-save").addEventListener("click", () => {
      if (!quiz) return;
      try {
        const o = options(), name = `${o.title.replace(/[\/\\?%*:|"<>]/g, "_") || "BaiTracNghiem"}.html`;
        downloadBlob(new TextEncoder().encode(buildQuizHtml(quiz, o)), name, "text/html");
        $2("lms-out").innerHTML = `<span class="ok">\u0110\xE3 t\u1EA1o <b>${esc10(name)}</b>.</span> <span class="muted">M\u1EDF b\u1EB1ng tr\xECnh duy\u1EC7t ho\u1EB7c t\u1EA3i l\xEAn LMS.</span>`;
      } catch (e3) {
        fail3(e3);
      }
    });
  }
  var esc10, sw3;
  var init_lms_ui = __esm({
    "taskpane/lms-ui.js"() {
      init_lms();
      init_picture();
      esc10 = (s) => String(s != null ? s : "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
      sw3 = (id, label, checked) => `<label class="switch"><input type="checkbox" id="${id}"${checked ? " checked" : ""}><span class="switch-track"></span><span>${label}</span></label>`;
    }
  });

  // src/xlsx.js
  function zipStore(files) {
    const parts = [], central = [];
    let offset = 0;
    for (const f of files) {
      const name = utf8(f.name), data = typeof f.data === "string" ? utf8(f.data) : f.data, crc = crc32(data);
      const local2 = new Uint8Array(30 + name.length);
      const v = new DataView(local2.buffer);
      v.setUint32(0, 67324752, true);
      v.setUint16(4, 20, true);
      v.setUint16(6, 2048, true);
      v.setUint16(8, 0, true);
      v.setUint16(10, 0, true);
      v.setUint16(12, 33, true);
      v.setUint32(14, crc, true);
      v.setUint32(18, data.length, true);
      v.setUint32(22, data.length, true);
      v.setUint16(26, name.length, true);
      local2.set(name, 30);
      const cen = new Uint8Array(46 + name.length);
      const c = new DataView(cen.buffer);
      c.setUint32(0, 33639248, true);
      c.setUint16(4, 20, true);
      c.setUint16(6, 20, true);
      c.setUint16(8, 2048, true);
      c.setUint16(12, 0, true);
      c.setUint16(14, 33, true);
      c.setUint32(16, crc, true);
      c.setUint32(20, data.length, true);
      c.setUint32(24, data.length, true);
      c.setUint16(28, name.length, true);
      c.setUint32(42, offset, true);
      cen.set(name, 46);
      parts.push(local2, data);
      central.push(cen);
      offset += local2.length + data.length;
    }
    const cenSize = central.reduce((s, x) => s + x.length, 0);
    const end = new Uint8Array(22), e3 = new DataView(end.buffer);
    e3.setUint32(0, 101010256, true);
    e3.setUint16(8, files.length, true);
    e3.setUint16(10, files.length, true);
    e3.setUint32(12, cenSize, true);
    e3.setUint32(16, offset, true);
    const all = [...parts, ...central, end];
    const out = new Uint8Array(all.reduce((s, x) => s + x.length, 0));
    let p2 = 0;
    for (const x of all) {
      out.set(x, p2);
      p2 += x.length;
    }
    return out;
  }
  function buildXlsx(rows, opts = {}) {
    const sheet = opts.sheet || "Sheet1";
    const cell4 = (v, r, c) => {
      if (v === null || v === void 0 || v === "") return "";
      const head = r === 0 && opts.headerRow !== false, firstCol = c === 0 && opts.headerCol !== false;
      return `<c r="${colName(c)}${r + 1}" s="${head || firstCol ? 2 : 1}" t="inlineStr"><is><t xml:space="preserve">${escapeXml(String(v))}</t></is></c>`;
    };
    const sheetData = rows.map((row, r) => `<row r="${r + 1}">${row.map((v, c) => cell4(v, r, c)).join("")}</row>`).join("");
    const cols = (opts.widths || []).map((w) => `<col min="${w.from}" max="${w.to}" width="${w.width}" customWidth="1"/>`).join("");
    const ns = 'xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"';
    const files = [
      { name: "[Content_Types].xml", data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>' },
      { name: "_rels/.rels", data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>' },
      { name: "xl/workbook.xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook ${ns} xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${escapeXml(sheet.slice(0, 31))}" sheetId="1" r:id="rId1"/></sheets></workbook>` },
      { name: "xl/_rels/workbook.xml.rels", data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>' },
      { name: "xl/styles.xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet ${ns}><fonts count="2"><font><sz val="11"/><name val="Arial"/></font><font><b/><sz val="11"/><name val="Arial"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE8F0EC"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color rgb="FF999999"/></left><right style="thin"><color rgb="FF999999"/></right><top style="thin"><color rgb="FF999999"/></top><bottom style="thin"><color rgb="FF999999"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf></cellXfs></styleSheet>` },
      { name: "xl/worksheets/sheet1.xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet ${ns}>${cols ? `<cols>${cols}</cols>` : ""}<sheetData>${sheetData}</sheetData></worksheet>` }
    ];
    return zipStore(files);
  }
  function answerRows(template3, versions) {
    const BS4 = "\\";
    const cell4 = (a, ascii) => {
      var _a8;
      if (a.kind === "tf") return a.tf ? a.tf.map((x) => x === "\u0110" && ascii ? "D" : x).join(ascii ? "," : "") : "";
      return (_a8 = a.value) != null ? _a8 : "";
    };
    const layout2 = versions[0].answers;
    if (template3 === "giasu") {
      const header2 = [`C\xE2u${BS4}M\xE3 \u0111\u1EC1`, ...versions.map((v) => v.code)];
      return [header2, ...layout2.map((_a8, i) => [String(i + 1), ...versions.map((v) => v.answers[i] ? cell4(v.answers[i], false) : "")])];
    }
    const header = [`\u0110\u1EC1${BS4}c\xE2u`], perVersion = versions.map(() => []);
    const mc = layout2.map((a, i) => ({ a, i })).filter((x) => x.a.kind === "mc" || x.a.kind === "other");
    const tf = layout2.map((a, i) => ({ a, i })).filter((x) => x.a.kind === "tf");
    const short = layout2.map((a, i) => ({ a, i })).filter((x) => x.a.kind === "short");
    for (const { a, i } of mc) {
      header.push(String(a.number));
      versions.forEach((v, k) => {
        var _a8, _b;
        return perVersion[k].push((_b = (_a8 = v.answers[i]) == null ? void 0 : _a8.value) != null ? _b : "");
      });
    }
    for (const { a, i } of tf) {
      "abcd".split("").forEach((l, j) => {
        header.push(`${a.number}${l}`);
        versions.forEach((v, k) => {
          var _a8;
          const t = (_a8 = v.answers[i]) == null ? void 0 : _a8.tf;
          perVersion[k].push(t ? t[j] === "\u0110" ? "D" : t[j] || "" : "");
        });
      });
    }
    for (const { a, i } of short) {
      header.push(String(a.number));
      versions.forEach((v, k) => {
        var _a8, _b;
        return perVersion[k].push((_b = (_a8 = v.answers[i]) == null ? void 0 : _a8.value) != null ? _b : "");
      });
    }
    return [header, ...versions.map((v, k) => [v.code, ...perVersion[k]])];
  }
  function answerXlsx(template3, versions) {
    const rows = answerRows(template3, versions);
    const wide = template3 === "giasu" ? [{ from: 1, to: 1, width: 12 }, { from: 2, to: 40, width: 10 }] : [{ from: 1, to: 1, width: 9 }, { from: 2, to: 73, width: 4.5 }, { from: 74, to: 200, width: 7 }];
    return buildXlsx(rows, { sheet: template3 === "giasu" ? "GIASU.AI.VN" : "TEXCRAFT", widths: wide });
  }
  var CRC, crc32, utf8, colName, answerTsv;
  var init_xlsx = __esm({
    "src/xlsx.js"() {
      init_xml();
      CRC = (() => {
        const t = new Uint32Array(256);
        for (let n = 0; n < 256; n++) {
          let c = n;
          for (let k = 0; k < 8; k++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
          t[n] = c >>> 0;
        }
        return t;
      })();
      crc32 = (d) => {
        let c = 4294967295;
        for (let i = 0; i < d.length; i++) c = CRC[(c ^ d[i]) & 255] ^ c >>> 8;
        return (c ^ 4294967295) >>> 0;
      };
      utf8 = (s) => new TextEncoder().encode(s);
      colName = (i) => {
        let s = "";
        for (i++; i > 0; i = Math.floor((i - 1) / 26)) s = String.fromCharCode(65 + (i - 1) % 26) + s;
        return s;
      };
      answerTsv = (template3, versions) => answerRows(template3, versions).map((r) => r.join("	")).join("\n");
    }
  });

  // src/exam-header.js
  function examHeaderXml(form = {}, code = "") {
    const f = __spreadValues(__spreadValues({}, DEFAULT_FORM), form);
    const left = [
      p(run3(f.soGd), { jc: "center" }),
      p(run3(f.truong, { b: true, sz: 24 }), { jc: "center" }),
      p(run3(f.chinhThuc), { jc: "center", ind: 700, border: bdr("top") }),
      p(run3("(\u0110\u1EC1 ki\u1EC3m tra c\xF3 ", { i: true }) + field4("NUMPAGES", "1", { i: true }) + run3(" trang)", { i: true }), { jc: "center" })
    ].join("");
    const right = [
      p(run3(f.kyThi, { b: true }), { jc: "center" }),
      p(run3(f.namHoc, { b: true }), { jc: "center" }),
      p(run3("M\xF4n " + dots2(f.mon, "\u2026\u2026.."), { b: true }) + run3("; L\u1EDBp: " + dots2(f.lop, "....."), { b: true, color: "FF0000" }), { jc: "center" }),
      p(run3("Th\u1EDDi gian l\xE0m b\xE0i: " + dots2(f.thoiGian, "\u2026..") + " ph\xFAt", { i: true }), { jc: "center", ind: 500, border: bdr("bottom") })
    ].join("");
    const top = table2([cell3(47, left), cell3(53, right)], [47, 53]);
    const lines = [
      p(run3("H\u1ECD, t\xEAn h\u1ECDc sinh:", { b: true }) + run3("\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026."), { before: 120 }),
      p(run3("S\u1ED1 b\xE1o danh:", { b: true }) + run3("\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"))
    ].join("");
    const box = p(run3("M\xE3 \u0111\u1EC1: ", { b: true, sz: 24 }) + run3(String(code || "\u2026\u2026"), { b: true, sz: 24, color: "FF0000" }), { jc: "center" });
    const second = table2([cell3(80, lines), cell3(20, box, { box: true, valign: "center" })], [80, 20]);
    return top + second + p("", { after: 120 });
  }
  function examEndXml() {
    return p(run3("----------------", { b: true }) + run3("H\u1EBET", { b: true, sz: 26 }) + run3("---------------", { b: true }), { jc: "center", before: 200 });
  }
  function examFooterXml(code = "") {
    const o = { font: "Cambria", sz: 24 };
    return p(run3("Trang ", o) + field4("PAGE", "1", { font: "Calibri", sz: 24 }) + run3("/", o) + field4("NUMPAGES", "1", { font: "Calibri", sz: 24 }) + run3("-M\xE3 \u0111\u1EC1: " + (code || "\u2026\u2026\u2026."), o), { jc: "right" });
  }
  function simplePackage(bodyXml) {
    return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document ${NS4}><w:body>${bodyXml}</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
  }
  var esc11, DEFAULT_FORM, FONT3, SZ, rpr, run3, field4, bdr, p, NOB3, cell3, GRID_W, table2, dots2, NS4;
  var init_exam_header = __esm({
    "src/exam-header.js"() {
      esc11 = (s) => String(s != null ? s : "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      DEFAULT_FORM = {
        soGd: "S\u1EDE GD\u0110T T\u1EC8NH NINH B\xCCNH",
        truong: "TR\u01AF\u1EDCNG THPT XU\xC2N TR\u01AF\u1EDCNG B",
        chinhThuc: "\u0110\u1EC0 CH\xCDNH TH\u1EE8C",
        kyThi: "\u0110\u1EC0 KI\u1EC2M TRA CH\u1EA4T L\u01AF\u1EE2NG GI\u1EEEA H\u1ECCC K\u1EF2 I",
        namHoc: "N\u0102M H\u1ECCC 2026-2027",
        mon: "\u2026\u2026..",
        lop: ".....",
        thoiGian: "\u2026.."
      };
      FONT3 = "Times New Roman";
      SZ = 26;
      rpr = (o = {}) => `<w:rPr><w:rFonts w:ascii="${o.font || FONT3}" w:hAnsi="${o.font || FONT3}" w:cs="${o.font || FONT3}"/>${o.b ? "<w:b/>" : ""}${o.i ? "<w:i/>" : ""}${o.color ? `<w:color w:val="${o.color}"/>` : ""}<w:sz w:val="${o.sz || SZ}"/><w:szCs w:val="${o.sz || SZ}"/></w:rPr>`;
      run3 = (t, o) => t === "" ? "" : `<w:r>${rpr(o)}<w:t xml:space="preserve">${esc11(t)}</w:t></w:r>`;
      field4 = (instr, shown, o) => `<w:fldSimple w:instr=" ${instr} "><w:r>${rpr(o)}<w:t>${shown}</w:t></w:r></w:fldSimple>`;
      bdr = (side, sz = 6) => `<w:${side} w:val="single" w:sz="${sz}" w:space="1" w:color="000000"/>`;
      p = (inner, { jc, before = 0, after = 0, ind, border } = {}) => `<w:p><w:pPr>${border ? `<w:pBdr>${border}</w:pBdr>` : ""}<w:spacing w:before="${before}" w:after="${after}" w:line="276" w:lineRule="auto"/>${ind ? `<w:ind w:left="${ind}" w:right="${ind}"/>` : ""}${jc ? `<w:jc w:val="${jc}"/>` : ""}</w:pPr>${inner}</w:p>`;
      NOB3 = '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>';
      cell3 = (pct, inner, { box = false, valign = "top" } = {}) => `<w:tc><w:tcPr><w:tcW w:w="${pct * 50}" w:type="pct"/>${box ? `<w:tcBorders>${["top", "left", "bottom", "right"].map((k) => bdr(k, 8).replace(' w:space="1"', ' w:space="0"')).join("")}</w:tcBorders>` : ""}<w:vAlign w:val="${valign}"/></w:tcPr>${inner}</w:tc>`;
      GRID_W = 10200;
      table2 = (cells, widths, jc) => `<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>${jc ? `<w:jc w:val="${jc}"/>` : ""}${NOB3}<w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="60" w:type="dxa"/><w:right w:w="60" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${Math.round(GRID_W * w / 100)}"/>`).join("")}</w:tblGrid><w:tr><w:trPr><w:cantSplit/></w:trPr>${cells.join("")}</w:tr></w:tbl>`;
      dots2 = (s, fallback) => String(s != null ? s : "").trim() ? String(s).trim() : fallback;
      NS4 = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
    }
  });

  // src/pptx.js
  function lineRuns(line3, { size, bold, color, display = false }) {
    const tr = (t) => `<a:r><a:rPr lang="vi-VN" sz="${size}" b="${bold ? "1" : "0"}"><a:solidFill><a:srgbClr val="${color}"/></a:solidFill><a:latin typeface="Arial"/></a:rPr><a:t>${escapeXml(t)}</a:t></a:r>`;
    let out = "", buf = "";
    const flush = () => {
      if (buf) {
        out += tr(buf);
        buf = "";
      }
    };
    const chars = [...line3];
    const onlyMath = chars.filter((c) => !isMathChar(c) && c.trim()).length === 0;
    for (const ch of chars) {
      if (!isMathChar(ch)) {
        buf += ch;
        continue;
      }
      flush();
      const mm = MATHS[ch.charCodeAt(0) - MATH0];
      const body = mm.parts.map((x) => mathToDml(x, size, color)).join("");
      const inner = onlyMath || display ? `<m:oMathPara xmlns:m="${NS_M2}"><m:oMathParaPr><m:jc m:val="left"/></m:oMathParaPr>${body}</m:oMathPara>` : body;
      out += `<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" Requires="a14"><a14:m>${inner}</a14:m></mc:Choice><mc:Fallback>${tr(mm.plain)}</mc:Fallback></mc:AlternateContent>`;
    }
    flush();
    return out || tr("");
  }
  function makeShape({
    id,
    name = "",
    x,
    y,
    cx,
    cy,
    fill = "FFFFFF",
    line: line3 = null,
    lineWidth = 19050,
    round = true,
    roundAdj = 12e3,
    text = "",
    textSize = 1800,
    textColor = "0F172A",
    bold = false,
    align = "l",
    valign = "ctr",
    linkTarget = null,
    linkTooltip = "",
    runs: runs2 = null,
    inset = 14e4,
    rightInset = null,
    fit: fit2 = true,
    fontScale = 0
  }) {
    const geom = round ? `<a:prstGeom prst="roundRect"><a:avLst><a:gd name="adj" fmla="val ${roundAdj}"/></a:avLst></a:prstGeom>` : '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>';
    const fillXml = fill ? `<a:solidFill><a:srgbClr val="${fill}"/></a:solidFill>` : "<a:noFill/>";
    const lineXml = line3 ? `<a:ln w="${lineWidth}"><a:solidFill><a:srgbClr val="${line3}"/></a:solidFill></a:ln>` : "<a:ln><a:noFill/></a:ln>";
    const linkXml = linkTarget ? `<a:hlinkClick r:id="${linkTarget}" tooltip="${escapeXml(linkTooltip)}" action="ppaction://hlinksldjump"/>` : "";
    const alignXml = align === "ctr" ? 'algn="ctr"' : align === "r" ? 'algn="r"' : 'algn="l"';
    const vAnchor = valign === "t" ? 'anchor="t"' : valign === "b" ? 'anchor="b"' : 'anchor="ctr"';
    const para2 = (l, o) => `
      <a:p>
        <a:pPr ${alignXml} indent="0" marL="0"><a:buNone/></a:pPr>${lineRuns(l, o)}
      </a:p>`;
    const bodyContent = runs2 && runs2.length ? runs2.map((r) => para2(r.text, { size: r.size || textSize, bold: r.bold, color: r.color || textColor })).join("") : String(text != null ? text : "").split("\n").map((l) => para2(l, { size: textSize, bold, color: textColor })).join("");
    return `
    <p:sp>
      <p:nvSpPr>
        <p:cNvPr id="${id}" name="${escapeXml(name)}">${linkXml}</p:cNvPr>
        <p:cNvSpPr txBox="1"/>
        <p:nvPr/>
      </p:nvSpPr>
      <p:spPr>
        <a:xfrm><a:off x="${x}" y="${y}"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm>
        ${geom}
        ${fillXml}
        ${lineXml}
      </p:spPr>
      <p:txBody>
        <a:bodyPr wrap="square" lIns="${inset}" tIns="${inset}" rIns="${rightInset != null ? rightInset : inset}" bIns="${inset}" rtlCol="0" ${vAnchor}>${fit2 ? fontScale ? `<a:normAutofit fontScale="${fontScale}" lnSpcReduction="10000"/>` : "<a:normAutofit/>" : ""}</a:bodyPr>
        <a:lstStyle/>
        ${bodyContent}
      </p:txBody>
    </p:sp>`;
  }
  function makePic({ id, rId, x, y, cx, cy, name = "H\xECnh", linkTarget = null, linkTooltip = "" }) {
    const linkXml = linkTarget ? `<a:hlinkClick r:id="${linkTarget}" tooltip="${escapeXml(linkTooltip)}" action="ppaction://hlinksldjump"/>` : "";
    return `
    <p:pic>
      <p:nvPicPr><p:cNvPr id="${id}" name="${escapeXml(name)}" descr="${escapeXml(name)}">${linkXml}</p:cNvPr><p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr><p:nvPr/></p:nvPicPr>
      <p:blipFill><a:blip r:embed="${rId}"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>
      <p:spPr><a:xfrm><a:off x="${x}" y="${y}"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr>
    </p:pic>`;
  }
  function makeSlideXml(bgHex, shapesXml, show = true) {
    const showAttr = show ? "" : ' show="0"';
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"${showAttr}>
  <p:cSld>
    <p:bg><p:bgPr><a:solidFill><a:srgbClr val="${bgHex}"/></a:solidFill></p:bgPr></p:bg>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
      ${shapesXml}
    </p:spTree>
  </p:cSld>
</p:sld>`;
  }
  function makeSlideRels(links = []) {
    const rels = [
      '<Relationship Id="rIdLayout" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>'
    ];
    for (const lnk of links) {
      rels.push(`<Relationship Id="${lnk.id}" Type="${lnk.image ? REL_IMAGE : "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide"}" Target="${lnk.target}"/>`);
    }
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${rels.join("\n  ")}
</Relationships>`;
  }
  function texToPlain(tex) {
    let s = ` ${tex} `.replace(/\\\\/g, "\uE002");
    s = s.replace(/\\(?:left|right)\s*\./g, "").replace(/\\(?:left|right|bigl|bigr|Bigl|Bigr|big|Big|displaystyle|textstyle)(?![A-Za-z])\s*/g, "");
    s = s.replace(/\\[,;:!> ]|\\q?quad(?![A-Za-z])/g, " ").replace(/\\(?:dfrac|tfrac|cfrac)(?![A-Za-z])/g, "\\frac");
    s = s.replace(/\\mathbb\s*\{([A-Z])\}/g, (m, x) => BB2[x] || x);
    s = s.replace(/\^\s*\{?\s*\\circ\s*\}?/g, "\xB0");
    s = s.replace(/\\([{}])/g, (m, b) => b === "{" ? "\uE000" : "\uE001");
    s = s.replace(/\\(?:overset|stackrel)\s*\{\s*\\(?:frown|smile)\s*\}\s*\{([^{}]*)\}/g, "\u2312$1").replace(/\\(?:overparen|wideparen)\s*\{([^{}]*)\}/g, "\u2312$1").replace(/\\(?:overset|stackrel|underset)\s*\{[^{}]*\}\s*\{([^{}]*)\}/g, "$1");
    s = s.replace(/\\lim\s*_\s*\{([^{}]*)\}/g, (m, x) => `lim(${x.trim()}) `);
    s = s.replace(/\\([A-Za-z]+)/g, (m, name) => SYM2[name] !== void 0 ? SYM2[name] : m);
    s = s.replace(new RegExp(`\\\\(${FUNCS3})(?![A-Za-z])`, "g"), "$1 ");
    s = s.replace(/\\(?:text|textbf|mathrm|mathbf|mathit|mathsf|mathcal|operatorname|boldsymbol)\s*\{([^{}]*)\}/g, "$1");
    s = s.replace(/\^\s*\{?\s*\\circ\s*\}?/g, "\xB0");
    s = s.replace(/\\begin\{(cases|array|aligned|matrix|pmatrix|bmatrix|vmatrix)\}(\{[^{}]*\})?([\s\S]*?)\\end\{\1\}/g, (m, env, spec, body) => {
      const rows = body.split("\uE002").map((r) => r.trim().replace(/&/g, "  ")).filter(Boolean);
      if (env === "cases") return `{ ${rows.join("; ")} `;
      if (env === "array" || env === "aligned") return rows.join("; ");
      return (env === "vmatrix" ? "|" : "(") + rows.join("; ") + (env === "vmatrix" ? "|" : ")");
    });
    for (let i = 0; i < 14; i++) {
      const before = s;
      s = s.replace(/\\sqrt\s*\[([^\]]*)\]\s*\{([^{}]*)\}/g, (m, n, x) => `${sup(n)}\u221A${paren(x)}`);
      s = s.replace(/\\sqrt\s*\{([^{}]*)\}/g, (m, x) => `\u221A${paren(x)}`);
      s = s.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (m, a, b) => `${paren(a)}/${paren(b)}`);
      s = s.replace(/\\binom\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (m, a, b) => `C(${a.trim()}; ${b.trim()})`);
      s = s.replace(/\\(?:overrightarrow|vec)\s*\{([^{}]*)\}/g, "$1\u20D7");
      s = s.replace(/\\(?:overline|bar)\s*\{([^{}]*)\}/g, "$1\u0305");
      s = s.replace(/\\widehat\s*\{([^{}]*)\}/g, "\u2220$1").replace(/\\hat\s*\{([^{}]*)\}/g, "$1\u0302");
      s = s.replace(/\^\s*\{([^{}]*)\}/g, (m, x) => sup(x));
      s = s.replace(/_\s*\{([^{}]*)\}/g, (m, x) => sub3(x));
      if (s === before) break;
    }
    s = s.replace(/\^\s*([0-9A-Za-z+\-−])/g, (m, x) => sup(x)).replace(/_\s*([0-9A-Za-z+\-−])/g, (m, x) => sub3(x));
    s = s.replace(/\\([A-Za-z]+)/g, (m, name) => SYM2[name] !== void 0 ? SYM2[name] : name);
    s = s.replace(/\uE002/g, "; ").replace(/\\\|/g, "\u2016").replace(/\\([^A-Za-z])/g, "$1");
    s = s.replace(/[{}]/g, "").replace(/&/g, " ").replace(/\s+/g, " ");
    s = s.replace(new RegExp(`\\b(${FUNCS3}) (?=[\u2070-\u2079\xB9\xB2\xB3\u207F\u2080-\u2089(^_])`, "g"), "$1").replace(/\s*([→⇒⇔↔])\s*/g, "$1").replace(/\uE000/g, "{").replace(/\uE001/g, "}");
    return s.trim();
  }
  function imageParts(pkg) {
    const parts = splitParts(pkg), map = /* @__PURE__ */ new Map();
    const rels = parts.get("/word/_rels/document.xml.rels");
    if (!rels) return map;
    for (const tag of rels.body.match(/<Relationship\b[^>]*>/g) || []) {
      const id = /\bId="([^"]+)"/.exec(tag), target = /\bTarget="([^"]+)"/.exec(tag);
      if (!id || !target || /TargetMode="External"/.test(tag)) continue;
      const part = parts.get(target[1].startsWith("/") ? target[1] : "/word/" + target[1].replace(/^\.\//, ""));
      if (!part) continue;
      const type = /pkg:contentType="([^"]+)"/.exec(part.attrs), bin = /<pkg:binaryData>([\s\S]*?)<\/pkg:binaryData>/.exec(part.body);
      const ext = type && IMG_EXT[type[1].toLowerCase()];
      if (ext && bin) map.set(id[1], { ext, b64: bin[1] });
    }
    return map;
  }
  function pngSize(b) {
    return b.length > 24 && b[0] === 137 && b[1] === 80 ? { cx: (b[16] << 24 | b[17] << 16 | b[18] << 8 | b[19]) * 9525, cy: (b[20] << 24 | b[21] << 16 | b[22] << 8 | b[23]) * 9525 } : null;
  }
  function makeContext(pkg) {
    return { parts: pkg ? imageParts(pkg) : /* @__PURE__ */ new Map(), media: /* @__PURE__ */ new Map(), missing: 0 };
  }
  function runPicture(run4, ctx) {
    if (!/<w:object\b|<w:pict\b|<mc:AlternateContent|<w:drawing/.test(run4)) return null;
    const blip = /<a:blip\b[^>]*r:embed="([^"]+)"/.exec(run4) || /<v:imagedata\b[^>]*r:id="([^"]+)"/.exec(run4);
    const part = blip && ctx.parts.get(blip[1]);
    if (!part) {
      ctx.missing++;
      return null;
    }
    let media = ctx.media.get(blip[1]);
    if (!media) {
      media = { name: `image${ctx.media.size + 1}.${part.ext}`, ext: part.ext, bytes: base64ToBytes(part.b64) };
      ctx.media.set(blip[1], media);
    }
    let cx = 0, cy = 0;
    const e3 = /<wp:extent cx="(\d+)" cy="(\d+)"/.exec(run4);
    if (e3) {
      cx = Number(e3[1]);
      cy = Number(e3[2]);
    } else {
      const st = /style="[^"]*?width:([\d.]+)pt;[^"]*?height:([\d.]+)pt/.exec(run4);
      if (st) {
        cx = Math.round(Number(st[1]) * 12700);
        cy = Math.round(Number(st[2]) * 12700);
      }
    }
    if (!(cx > 0 && cy > 0)) {
      const n = pngSize(media.bytes);
      cx = n ? n.cx : 3e6;
      cy = n ? n.cy : 2e6;
    }
    return { media, cx, cy };
  }
  function collect(kids, ctx, st, out) {
    var _a8;
    for (const c of kids) {
      if (typeof c !== "string") continue;
      if (/^<m:oMath(Para)?[\s>]/.test(c)) {
        if (st.skip) {
          st.skip--;
          continue;
        }
        let plain2 = "[c\xF4ng th\u1EE9c]";
        try {
          plain2 = texToPlain(ommlToLatex(c)[0]);
        } catch (e3) {
        }
        out.text += mathChar(c, plain2);
      } else if (/^<w:r[\s>]/.test(c)) {
        const pic = runPicture(c, ctx);
        if (pic) out.imgs.push(pic);
        const rpr2 = ((_a8 = /<w:rPr>([\s\S]*?)<\/w:rPr>/.exec(c)) == null ? void 0 : _a8[1]) || "";
        const script3 = /<w:vertAlign w:val="superscript"/.test(rpr2) ? sup : /<w:vertAlign w:val="subscript"/.test(rpr2) ? sub3 : null;
        let t = "";
        for (const m of c.matchAll(/<w:t\b[^>]*>([^<]*)<\/w:t>|<w:tab\/>|<w:br\b[^>]*\/>|<w:noBreakHyphen\/>/g)) {
          if (m[0].startsWith("<w:tab")) {
            t += " ";
            continue;
          }
          if (m[0].startsWith("<w:br")) {
            t += "\n";
            continue;
          }
          if (m[0].startsWith("<w:noBreak")) {
            t += "-";
            continue;
          }
          let x = unescapeXml(m[1]);
          if (st.skip) {
            const cut = Math.min(st.skip, x.length);
            x = x.slice(cut);
            st.skip -= cut;
          }
          t += x;
        }
        out.text += script3 && t.trim() ? script3(t) : t;
      } else if (/^<w:hyperlink[\s>]/.test(c)) {
        collect(c.replace(/^<w:hyperlink\b[^>]*>/, "").replace(/<\/w:hyperlink>$/, "").match(/<w:r[\s>][\s\S]*?<\/w:r>/g) || [], ctx, st, out);
      }
    }
  }
  function blockContent(b, ctx, skipLen = 0) {
    if (b.kind === "p") {
      const out = { text: "", imgs: [] };
      collect(b.children, ctx, { skip: skipLen }, out);
      return { lines: toLines(out.text), imgs: out.imgs };
    }
    const lines = [], imgs = [];
    for (const row of b.xml.split("</w:tr>")) {
      const cells = [];
      for (const cell4 of row.split("</w:tc>")) {
        const out = { text: "", imgs: [] };
        for (const para2 of cell4.match(/<w:p\b[\s\S]*?<\/w:p>/g) || []) {
          collect(para2.match(/<m:oMathPara>[\s\S]*?<\/m:oMathPara>|<m:oMath>[\s\S]*?<\/m:oMath>|<w:r[\s>][\s\S]*?<\/w:r>/g) || [], ctx, { skip: 0 }, out);
          out.text += "\n";
        }
        imgs.push(...out.imgs);
        const t = toLines(out.text).join(" ");
        if (t) cells.push(t);
      }
      if (cells.length) lines.push(cells.join(" | "));
    }
    return { lines, imgs };
  }
  function collectItems(model, analysis, answers, ctx) {
    const items = [];
    for (const part of analysis.parts) {
      for (const q of part.questions) {
        const qAns = answers.find((x) => x.part === part.title && x.number === q.number);
        let lines = [], imgs = [];
        for (let i = q.start; i < q.stemEnd; i++) {
          const b = model.blocks[i];
          if (!b) continue;
          const skip = i === q.start && b.kind === "p" ? (RE_LABEL2.exec(paragraphText(b)) || [""])[0].length : 0;
          const c = blockContent(b, ctx, skip);
          lines.push(...c.lines);
          imgs.push(...c.imgs);
        }
        const optionBlocks = /* @__PURE__ */ new Set([...q.optionParas || [], ...(q.statements || []).map((st) => st.block)]);
        for (let i = Math.max(q.stemEnd, q.start + 1); i < q.end; i++) {
          if (optionBlocks.has(i) || !model.blocks[i]) continue;
          const c = blockContent(model.blocks[i], ctx);
          if (c.lines.length) break;
          imgs.push(...c.imgs);
        }
        if (part.kind === "tf" && q.statements && q.statements.length) {
          for (const st of q.statements) {
            const c = blockContent(model.blocks[st.block], ctx);
            lines.push(...c.lines);
            imgs.push(...c.imgs);
          }
        }
        const options = (q.options || []).map((o) => {
          const out = { text: "", imgs: [] };
          collect(o.content, ctx, { skip: 0 }, out);
          return { letter: o.letter, text: toLines(out.text).join(" ").replace(/^[A-Za-z]\s*[.:)]\s*/, ""), imgs: out.imgs };
        });
        items.push({
          number: q.number,
          partTitle: part.title,
          kind: part.kind,
          stemLines: lines,
          stemImgs: imgs,
          options,
          correct: (qAns == null ? void 0 : qAns.value) || null,
          tf: (qAns == null ? void 0 : qAns.tf) || null,
          tfLetters: (q.statements || []).map((s) => s.letter)
        });
      }
    }
    return items;
  }
  function preparePptxSource(pkg0) {
    let pkg = pkg0;
    for (const convertLatex of [true, false]) {
      try {
        const conv = convertMathTypeInPackage(pkg0, { convertMathType: true, convertLatex, display: false });
        if (conv.changed) pkg = conv.pkg;
        break;
      } catch (e3) {
      }
    }
    const model = parseBody(pkg), analysis = analyze(model);
    return { pkg, model, analysis, answers: answersOf(model, analysis) };
  }
  function textHeight(lines, size, width, inset, bold) {
    const pt = size / 100;
    const cpl = Math.max(3, Math.floor((width - 2 * inset) / (pt * PTE * (bold ? 0.6 : 0.55)) * 0.93));
    let n = 0;
    for (const l of lines) n += Math.max(1, Math.ceil(visLen(l) / cpl));
    return n * pt * PTE * 1.22 + 2 * inset;
  }
  function fitSize(lines, w, h, sizes, inset, bold) {
    for (const s of sizes) if (textHeight(lines, s, w, inset, bold) <= h) return { size: s, fits: true };
    return { size: sizes[sizes.length - 1], fits: false };
  }
  function scaleInto(img, w, h, cap = 1.8) {
    const s = Math.max(0.01, Math.min(w / img.cx, h / img.cy, cap));
    return { cx: Math.round(img.cx * s), cy: Math.round(img.cy * s) };
  }
  function gridFit(area, imgs, gap = 1e5) {
    let best = null;
    for (let cols = 1; cols <= imgs.length; cols++) {
      const rows = Math.ceil(imgs.length / cols), cw = (area.w - gap * (cols - 1)) / cols, ch = (area.h - gap * (rows - 1)) / rows;
      const boxes = imgs.map((img, i) => {
        const sz = scaleInto(img, cw, ch), c = i % cols, r = Math.floor(i / cols);
        return { img, x: Math.round(area.x + c * (cw + gap) + (cw - sz.cx) / 2), y: Math.round(area.y + r * (ch + gap) + (ch - sz.cy) / 2), cx: sz.cx, cy: sz.cy };
      });
      const score = boxes.reduce((t, b) => t + b.cx * b.cy, 0);
      if (!best || score > best.score) best = { boxes, score };
    }
    return best;
  }
  function stemLayout(r, lines, imgs) {
    const inset = 14e4, bold = lines.join("").length < 140;
    const base = { region: r, bold };
    if (!imgs.length) {
      const f = fitSize(lines, r.w, r.h, STEM_SIZES, inset, bold);
      return __spreadProps(__spreadValues({}, base), { text: r, size: f.size, fits: f.fits, pics: [] });
    }
    const pad = 12e4, inner = { x: r.x + pad, y: r.y + pad, w: r.w - 2 * pad, h: r.h - 2 * pad };
    if (!lines.length) return __spreadProps(__spreadValues({}, base), { text: null, size: 0, fits: true, pics: gridFit(inner, imgs).boxes });
    const cands = [];
    for (const ratio of [0.5, 0.62, 0.4]) {
      const tw = Math.round(inner.w * ratio - GAP / 2);
      const text = { x: inner.x - pad, y: r.y, w: tw + pad, h: r.h };
      const area2 = { x: inner.x + tw + GAP, y: inner.y, w: inner.w - tw - GAP, h: inner.h };
      const f = fitSize(lines, text.w, text.h, STEM_SIZES, inset, bold), g = gridFit(area2, imgs);
      cands.push(__spreadProps(__spreadValues({}, base), { text, size: f.size, fits: f.fits, pics: g.boxes, frac: g.score / (area2.w * area2.h) }));
    }
    let sz = STEM_SIZES[STEM_SIZES.length - 1];
    for (const s of STEM_SIZES) if (textHeight(lines, s, r.w, inset, bold) <= r.h * 0.5) {
      sz = s;
      break;
    }
    const th = Math.round(Math.min(r.h * 0.6, Math.max(textHeight(lines, sz, r.w, inset, bold), 6e5)));
    const area = { x: inner.x, y: r.y + th + 4e4, w: inner.w, h: r.h - th - 4e4 - pad };
    if (area.h > 4e5) {
      const g = gridFit(area, imgs);
      cands.push(__spreadProps(__spreadValues({}, base), { text: { x: r.x, y: r.y, w: r.w, h: th }, size: sz, fits: textHeight(lines, sz, r.w, inset, bold) <= th, pics: g.boxes, frac: g.score / (area.w * area.h) }));
    }
    const score = (c) => (c.fits ? 1e6 : 0) + c.size * 10 + c.frac * 3e3;
    return cands.reduce((a, b) => score(b) > score(a) ? b : a);
  }
  function evalOptions(options, layout2, size) {
    const anyImg = options.some((o) => o.imgs.length);
    const cellW = layout2 === "grid2" ? 525e4 : CW;
    const share = anyImg ? 0.4 : 0;
    const textW2 = Math.round(cellW * (1 - share));
    const imgMaxW = Math.round(cellW * share) - 12e4, imgMaxH = layout2 === "grid2" ? 13e5 : 1e6;
    const specs = options.map((o) => {
      let h = Math.max(textHeight([`${o.letter}. ${o.text}`], size, textW2, 1e5, false), 62e4), imgBox = null;
      if (o.imgs.length) {
        const sz = scaleInto(o.imgs[0], imgMaxW, imgMaxH, 1.5);
        imgBox = { cx: sz.cx, cy: sz.cy, pad: 9e4 };
        h = Math.max(h, sz.cy + 18e4);
      }
      return { h, imgBox, textW: textW2, w: cellW };
    });
    const perRow = layout2 === "grid2" ? 2 : 1;
    const rowsH = [];
    specs.forEach((s, i) => {
      const r = Math.floor(i / perRow);
      rowsH[r] = Math.max(rowsH[r] || 0, s.h);
    });
    return { layout: layout2, size, specs, perRow, rowsH, cap: layout2 === "grid2" ? 14e5 : 95e4 };
  }
  function placeOptions(op, rowsH) {
    const ys = [];
    let y = 0;
    rowsH.forEach((h, r) => {
      ys[r] = y;
      y += h + OPT_GAP;
    });
    const cells = op.specs.map((s, i) => {
      const r = Math.floor(i / op.perRow), c = i % op.perRow;
      return { x: op.layout === "grid2" ? c ? 6242e3 : MX : MX, y: ys[r], w: s.w, h: rowsH[r], textW: s.textW, imgBox: s.imgBox };
    });
    return __spreadProps(__spreadValues({}, op), { rowsH, cells, total: y - OPT_GAP });
  }
  function planOptions(options, budget) {
    const order = [["grid2", 1800], ["grid2", 1600], ["list", 1800], ["list", 1600], ["list", 1400], ["list", 1200], ["list", 1100]];
    let last;
    for (const [layout2, size] of order) {
      const ev = evalOptions(options, layout2, size);
      last = placeOptions(ev, ev.rowsH);
      if (last.total <= budget) return __spreadProps(__spreadValues({}, last), { fits: true });
    }
    return __spreadProps(__spreadValues({}, last), { fits: false });
  }
  function growOptions(op, spare) {
    const add3 = Math.max(0, spare) / op.rowsH.length;
    return placeOptions(op, op.rowsH.map((h) => Math.max(h, Math.min(op.cap, h + add3))));
  }
  function planItem(item) {
    const AREA = BOTTOM - TOP, inset = 14e4;
    const lines = item.stemLines, imgs = item.stemImgs;
    const bold = lines.join("").length < 140;
    if (!item.options.length) return { mode: "single", stem: stemLayout({ x: MX, y: TOP, w: CW, h: STEM_ONLY_H }, lines, imgs) };
    const need = imgs.length ? 24e5 : Math.min(AREA * 0.55, Math.max(1e6, textHeight(lines, 1800, CW, inset, bold)));
    const op = planOptions(item.options, AREA - need - GAP);
    if (op.fits) {
      const maxStem = AREA - GAP - op.total;
      const desired = imgs.length ? maxStem : Math.max(13e5, textHeight(lines, 2e3, CW, inset, bold) + 1e5);
      const stemH0 = Math.min(maxStem, desired);
      const grown = growOptions(op, maxStem - stemH0);
      const stemH = AREA - GAP - grown.total;
      const stem = stemLayout({ x: MX, y: TOP, w: CW, h: stemH }, lines, imgs);
      if (stem.fits) return { mode: "single", stem, opts: grown, optsTop: TOP + stemH + GAP };
    }
    const joined = lines.join(" ");
    const tail = joined ? joined.length > 230 ? "\u2026 " + joined.slice(-230).replace(/^\S*\s/, "") : joined : "";
    const remH = tail ? 11e5 : 0, optBudget = AREA - (remH ? remH + GAP : 0);
    const full = growOptions(planOptions(item.options, optBudget), optBudget);
    return { mode: "split", stem: stemLayout({ x: MX, y: TOP, w: CW, h: STEM_ONLY_H }, lines, imgs), opts: full, optsTop: TOP + (remH ? remH + GAP : 0), reminder: remH ? { text: tail, h: remH } : null };
  }
  function applyTheme(xml, themeId) {
    const theme = PPTX_THEMES.find((t) => t.id === themeId);
    if (!theme || theme.id === "blue") return xml;
    const map = {};
    for (const [role, hex3] of Object.entries(theme.colors)) map[BASE[role]] = hex3;
    const out = xml.replace(/srgbClr val="([0-9A-Fa-f]{6})"/g, (m, hex3) => `srgbClr val="${map[hex3.toUpperCase()] || hex3}"`);
    return out.replace(/<a:latin typeface="Arial"\/>/g, `<a:latin typeface="${theme.font}"/>`);
  }
  function buildExamPptx(model, analysis, answers, opts = {}) {
    NATIVE_MATH = opts.nativeMath !== false;
    MATHS = [];
    const ctx = makeContext(opts.pkg);
    const items = collectItems(model, analysis, answers, ctx);
    if (!items.length) throw new Error("Kh\xF4ng t\xECm th\u1EA5y c\xE2u h\u1ECFi n\xE0o trong t\xE0i li\u1EC7u.");
    items.forEach((it) => {
      it.plan = planItem(it);
    });
    const slides = [];
    const presentationRels = [
      '<Relationship Id="rIdMaster" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>',
      '<Relationship Id="rIdTheme" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>'
    ];
    const sldIdList = [];
    let slideIndex = 1;
    const registerSlide = (xml, links = [], show = true) => {
      const sId = slideIndex++;
      const sName = `slide${sId}.xml`;
      slides.push({ fileName: `ppt/slides/${sName}`, relsFileName: `ppt/slides/_rels/${sName}.rels`, xml, rels: makeSlideRels(links), sId });
      presentationRels.push(`<Relationship Id="rIdSld${sId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/${sName}"/>`);
      sldIdList.push(`<p:sldId id="${255 + sId}" r:id="rIdSld${sId}"/>`);
      return sId;
    };
    let cursor = 2;
    for (const it of items) {
      it.qSlide = cursor;
      it.optSlide = it.plan.mode === "split" ? cursor + 1 : cursor;
      it.rightSlide = it.optSlide + 1;
      it.wrongSlide = it.optSlide + 2;
      cursor = it.wrongSlide + 1;
    }
    const finalSlideId = cursor;
    const slidePics = () => {
      const links = [];
      let n = 0;
      return {
        links,
        add(img, box, link) {
          n++;
          const rId = `rIdImg${n}`;
          links.push({ id: rId, target: `../media/${img.media.name}`, image: true });
          return makePic({ id: 70 + n, rId, x: box.x, y: box.y, cx: box.cx, cy: box.cy, name: `H\xECnh ${n}`, linkTarget: link, linkTooltip: link ? "Ch\u1ECDn" : "" });
        }
      };
    };
    const stemShapes = (it, st, pics) => {
      const out2 = [];
      out2.push(makeShape({ id: 12, name: "StemCard", x: st.region.x, y: st.region.y, cx: st.region.w, cy: st.region.h, fill: "FFFFFF", line: "CBD5E1", lineWidth: 19050, roundAdj: 6e3, text: "", fit: false }));
      if (st.text) {
        const tall = textHeight(it.stemLines, st.size, st.text.w, 14e4, st.bold) > st.text.h * 0.6;
        const lines = it.stemLines.length ? it.stemLines : it.stemImgs.length ? [] : ["(N\u1ED9i dung c\xE2u h\u1ECFi n\u1EB1m trong t\xE0i li\u1EC7u g\u1ED1c)"];
        const need = textHeight(lines, st.size, st.text.w, 14e4, st.bold);
        const fontScale = st.fits ? 0 : Math.floor(Math.max(0.4, st.text.h / need) * 100) * 1e3;
        if (lines.length) out2.push(makeShape({ id: 13, name: "Stem", x: st.text.x, y: st.text.y, cx: st.text.w, cy: st.text.h, fill: null, round: false, text: lines.join("\n"), textSize: st.size, textColor: "0F172A", bold: st.bold, align: "l", valign: tall || it.stemImgs.length || !st.fits ? "t" : "ctr", fontScale }));
      }
      for (const b of st.pics) out2.push(pics.add(b.img, b));
      return out2;
    };
    const optionShapes = (it, op, top, pics, baseId) => {
      const out2 = [];
      op.cells.forEach((cell4, k) => {
        const opt = it.options[k];
        const isRight = it.correct ? opt.letter.toUpperCase() === it.correct.toUpperCase() : true;
        const target = isRight ? "rIdRight" : "rIdWrong";
        const y = top + cell4.y;
        out2.push(makeShape({
          id: baseId + k,
          name: `Opt${opt.letter}`,
          x: cell4.x,
          y,
          cx: cell4.w,
          cy: cell4.h,
          fill: "FFFFFF",
          line: "CBD5E1",
          lineWidth: 19050,
          roundAdj: 12e3,
          text: `${opt.letter}. ${opt.text}`,
          textSize: op.size,
          textColor: "1E293B",
          bold: false,
          align: "l",
          linkTarget: target,
          linkTooltip: `Ch\u1ECDn ${opt.letter}`,
          inset: 1e5,
          rightInset: cell4.imgBox ? Math.round(cell4.w - cell4.textW + 6e4) : 1e5
        }));
        if (cell4.imgBox) {
          const im = cell4.imgBox;
          out2.push(pics.add(opt.imgs[0], { x: cell4.x + cell4.w - im.pad - im.cx, y: y + Math.round((cell4.h - im.cy) / 2), cx: im.cx, cy: im.cy }, target));
        }
      });
      return out2;
    };
    const titleText = opts.title || "B\xC0I T\u1EACP TR\u1EAEC NGHI\u1EC6M";
    const subtitleText = `\u0110\u1EC1 thi g\u1ED3m ${items.length} c\xE2u h\u1ECFi \u2022 T\u01B0\u01A1ng t\xE1c \u0110\xFAng/Sai tr\u1EF1c ti\u1EBFp`;
    const titleShapes = `
    ${makeShape({ id: 2, name: "Title", x: 12e5, y: 16e5, cx: 9792e3, cy: 16e5, fill: null, text: titleText, textSize: titleText.length > 50 ? 2800 : 3600, textColor: "FFFFFF", bold: true, align: "ctr" })}
    ${makeShape({ id: 3, name: "Sub", x: 12e5, y: 31e5, cx: 9792e3, cy: 8e5, fill: null, text: subtitleText, textSize: 2e3, textColor: "94A3B8", bold: false, align: "ctr" })}
    ${makeShape({ id: 4, name: "StartBtn", x: 4396e3, y: 43e5, cx: 34e5, cy: 9e5, fill: "3B82F6", roundAdj: 25e3, text: "B\u1EAET \u0110\u1EA6U  \u27A1", textSize: 2200, textColor: "FFFFFF", bold: true, align: "ctr", linkTarget: "rIdNext", linkTooltip: "B\u1EAFt \u0111\u1EA7u" })}
  `;
    registerSlide(makeSlideXml("0F172A", titleShapes, true), [{ id: "rIdNext", target: "slide2.xml" }]);
    const header = (it, suffix = "") => [
      makeShape({ id: 10, name: "Badge", x: 7e5, y: 35e4, cx: 16e5, cy: 45e4, fill: "4F46E5", roundAdj: 1e4, text: `C\xC2U ${it.number}`, textSize: 1600, textColor: "FFFFFF", bold: true, align: "ctr" }),
      makeShape({ id: 11, name: "Part", x: 245e4, y: 35e4, cx: 85e5, cy: 45e4, fill: null, text: (it.partTitle || "TR\u1EAEC NGHI\u1EC6M") + suffix, textSize: it.partTitle && it.partTitle.length > 70 ? 1100 : 1400, textColor: "64748B", bold: true, align: "l" })
    ];
    const showAnswerLink = () => makeShape({ id: 35, name: "ShowAnswerSmall", x: 92e5, y: 635e4, cx: 2292e3, cy: 4e5, fill: null, text: "Xem \u0111\xE1p \xE1n \u{1F4A1}", textSize: 1300, textColor: "6366F1", bold: true, align: "r", linkTarget: "rIdRight", linkTooltip: "Xem \u0111\xE1p \xE1n" });
    items.forEach((item, qIdx) => {
      const nextQSlideId = qIdx === items.length - 1 ? finalSlideId : items[qIdx + 1].qSlide;
      const plan = item.plan;
      const hasOptions = item.options.length > 0;
      const pics = slidePics();
      const qShapes = header(item);
      const qLinks = [{ id: "rIdRight", target: `slide${item.rightSlide}.xml` }, { id: "rIdWrong", target: `slide${item.wrongSlide}.xml` }];
      qShapes.push(...stemShapes(item, plan.stem, pics));
      if (plan.mode === "single" && hasOptions) {
        qShapes.push(...optionShapes(item, plan.opts, plan.optsTop, pics, 20));
        qShapes.push(showAnswerLink());
      } else if (plan.mode === "split") {
        qLinks.push({ id: "rIdOpts", target: `slide${item.optSlide}.xml` });
        qShapes.push(makeShape({ id: 20, name: "ToOptions", x: 3896e3, y: 56e5, cx: 44e5, cy: 65e4, fill: "3B82F6", roundAdj: 25e3, text: "XEM C\xC1C PH\u01AF\u01A0NG \xC1N  \u27A1", textSize: 1800, textColor: "FFFFFF", bold: true, align: "ctr", linkTarget: "rIdOpts", linkTooltip: "Xem c\xE1c ph\u01B0\u01A1ng \xE1n" }));
        qShapes.push(showAnswerLink());
      } else {
        qShapes.push(makeShape({ id: 20, name: "ShowAnswerBtn", x: 3896e3, y: 56e5, cx: 44e5, cy: 65e4, fill: "3B82F6", roundAdj: 2e4, text: "XEM \u0110\xC1P \xC1N & L\u1EDCI GI\u1EA2I \u{1F4A1}", textSize: 1800, textColor: "FFFFFF", bold: true, align: "ctr", linkTarget: "rIdRight", linkTooltip: "Xem \u0111\xE1p \xE1n" }));
      }
      qLinks.push(...pics.links);
      registerSlide(makeSlideXml("F8FAFC", qShapes.join("\n"), true), qLinks);
      if (plan.mode === "split") {
        const pics2 = slidePics();
        const oShapes = header(item, "  \xB7  Ch\u1ECDn \u0111\xE1p \xE1n");
        if (plan.reminder) {
          const rf = fitSize([plan.reminder.text], CW, plan.reminder.h, [1600, 1400, 1200], 14e4, false);
          oShapes.push(makeShape({ id: 14, name: "StemReminder", x: MX, y: TOP, cx: CW, cy: plan.reminder.h, fill: "E2E8F0", roundAdj: 8e3, text: plan.reminder.text, textSize: rf.size, textColor: "475569", bold: false, align: "l" }));
        }
        oShapes.push(...optionShapes(item, plan.opts, plan.optsTop, pics2, 20));
        oShapes.push(makeShape({ id: 36, name: "BackToStem", x: 7e5, y: 635e4, cx: 36e5, cy: 4e5, fill: null, text: "\u21A9  Xem l\u1EA1i \u0111\u1EC1 b\xE0i", textSize: 1300, textColor: "64748B", bold: false, align: "l", linkTarget: "rIdStem", linkTooltip: "Xem l\u1EA1i \u0111\u1EC1 b\xE0i" }));
        oShapes.push(showAnswerLink());
        registerSlide(makeSlideXml("F8FAFC", oShapes.join("\n"), true), [
          { id: "rIdRight", target: `slide${item.rightSlide}.xml` },
          { id: "rIdWrong", target: `slide${item.wrongSlide}.xml` },
          { id: "rIdStem", target: `slide${item.qSlide}.xml` },
          ...pics2.links
        ]);
      }
      const correctLetter = item.correct || "";
      const correctOpt = hasOptions && correctLetter ? item.options.find((o) => o.letter.toUpperCase() === correctLetter.toUpperCase()) : null;
      let detailLines;
      if (correctOpt) detailLines = [`Ph\u01B0\u01A1ng \xE1n \u0111\xFAng l\xE0 ${correctOpt.letter}: ${correctOpt.text}`.trim()];
      else if (item.tf) detailLines = item.tf.map((v, i) => `${item.tfLetters[i] || "abcd"[i]}) ${v === "\u0110" ? "\u0110\xFAng" : "Sai"}`);
      else if (item.correct) detailLines = [`\u0110\xE1p \xE1n \u0111\xFAng: ${item.correct}`];
      else detailLines = ["\u0110\u1EC1 ch\u01B0a \u0111\xE1nh d\u1EA5u \u0111\xE1p \xE1n cho c\xE2u n\xE0y."];
      const isKnown = Boolean(item.correct);
      const isLastQ = qIdx === items.length - 1;
      const nextBtnText = isLastQ ? "HO\xC0N TH\xC0NH B\xC0I THI \u{1F3C6}" : "C\xC2U TI\u1EBEP THEO \u27A1";
      const rightTitle = !isKnown ? "\u{1F4CC}  GHI NH\u1EACN" : hasOptions ? "\u{1F389}  CH\xCDNH X\xC1C!" : "\u{1F4A1}  \u0110\xC1P \xC1N";
      const rightSub = !isKnown ? `C\xE2u ${item.number}` : hasOptions ? `Ch\xFAc m\u1EEBng b\u1EA1n \u0111\xE3 tr\u1EA3 l\u1EDDi \u0111\xFAng c\xE2u h\u1ECFi s\u1ED1 ${item.number}!` : `\u0110\xE1p \xE1n c\xE2u ${item.number}`;
      const detailBox = { x: 24e5, y: 28e5, w: 7392e3, h: 14e5 };
      const dFit = fitSize(detailLines, detailBox.w, detailBox.h, [1700, 1500, 1300, 1100], 14e4, true);
      const rpics = slidePics();
      const optPic = correctOpt && correctOpt.imgs[0] ? correctOpt.imgs[0] : null;
      const rightShapes = [
        makeShape({ id: 40, name: "Card", x: 18e5, y: 1e6, cx: 8592e3, cy: 48e5, fill: "FFFFFF", line: "10B981", lineWidth: 28e3, roundAdj: 15e3, text: "", fit: false }),
        makeShape({ id: 41, name: "Title", x: 22e5, y: 14e5, cx: 7792e3, cy: 8e5, fill: null, text: rightTitle, textSize: 3200, textColor: "059669", bold: true, align: "ctr" }),
        makeShape({ id: 42, name: "Sub", x: 22e5, y: 22e5, cx: 7792e3, cy: 5e5, fill: null, text: rightSub, textSize: 1800, textColor: "475569", bold: false, align: "ctr" }),
        makeShape({ id: 43, name: "DetailBox", x: detailBox.x, y: detailBox.y, cx: optPic ? Math.round(detailBox.w * 0.62) : detailBox.w, cy: detailBox.h, fill: "F0FDF4", line: "86EFAC", lineWidth: 15e3, roundAdj: 1e4, text: detailLines.join("\n"), textSize: dFit.size, textColor: "065F46", bold: true, align: "ctr" }),
        makeShape({ id: 44, name: "NextBtn", x: 3896e3, y: 44e5, cx: 44e5, cy: 85e4, fill: "10B981", roundAdj: 25e3, text: nextBtnText, textSize: 2e3, textColor: "FFFFFF", bold: true, align: "ctr", linkTarget: "rIdNext", linkTooltip: nextBtnText }),
        makeShape({ id: 45, name: "BackBtn", x: 4596e3, y: 53e5, cx: 3e6, cy: 4e5, fill: null, text: "\u21A9  Xem l\u1EA1i c\xE2u h\u1ECFi", textSize: 1300, textColor: "64748B", bold: false, align: "ctr", linkTarget: "rIdQ", linkTooltip: "Xem l\u1EA1i c\xE2u h\u1ECFi" })
      ];
      if (optPic) {
        const sz = scaleInto(optPic, Math.round(detailBox.w * 0.34), detailBox.h - 1e5);
        rightShapes.push(rpics.add(optPic, { x: detailBox.x + detailBox.w - sz.cx, y: detailBox.y + Math.round((detailBox.h - sz.cy) / 2), cx: sz.cx, cy: sz.cy }));
      }
      registerSlide(makeSlideXml("F0FDF4", rightShapes.join("\n"), true), [
        { id: "rIdNext", target: `slide${nextQSlideId}.xml` },
        { id: "rIdQ", target: `slide${item.qSlide}.xml` },
        ...rpics.links
      ]);
      const wrongShapes = `
      ${makeShape({ id: 50, name: "Card", x: 18e5, y: 12e5, cx: 8592e3, cy: 44e5, fill: "FFFFFF", line: "EF4444", lineWidth: 28e3, roundAdj: 15e3, text: "", fit: false })}
      ${makeShape({ id: 51, name: "Title", x: 22e5, y: 17e5, cx: 7792e3, cy: 8e5, fill: null, text: "\u274C  CH\u01AFA CH\xCDNH X\xC1C!", textSize: 3200, textColor: "DC2626", bold: true, align: "ctr" })}
      ${makeShape({ id: 52, name: "Sub", x: 22e5, y: 26e5, cx: 7792e3, cy: 8e5, fill: null, text: "R\u1EA5t ti\u1EBFc! Ph\u01B0\u01A1ng \xE1n b\u1EA1n v\u1EEBa ch\u1ECDn ch\u01B0a \u0111\xFAng.\n\u0110\u1EEBng n\u1EA3n l\xF2ng, h\xE3y \u0111\u1ECDc k\u1EF9 l\u1EA1i \u0111\u1EC1 b\xE0i v\xE0 th\u1EED l\u1EA1i nh\xE9!", textSize: 1800, textColor: "475569", bold: false, align: "ctr" })}
      ${makeShape({ id: 53, name: "RetryBtn", x: 3896e3, y: 39e5, cx: 44e5, cy: 9e5, fill: "EF4444", roundAdj: 25e3, text: "\u{1F504}  QUAY L\u1EA0I TH\u1EEC L\u1EA0I", textSize: 2e3, textColor: "FFFFFF", bold: true, align: "ctr", linkTarget: "rIdQ", linkTooltip: "Th\u1EED l\u1EA1i" })}
    `;
      registerSlide(makeSlideXml("FEF2F2", wrongShapes, false), [{ id: "rIdQ", target: `slide${item.optSlide}.xml` }]);
    });
    const finalShapes = `
    ${makeShape({ id: 60, name: "Card", x: 18e5, y: 12e5, cx: 8592e3, cy: 44e5, fill: "1E293B", line: "38BDF8", lineWidth: 25e3, roundAdj: 15e3, text: "", fit: false })}
    ${makeShape({ id: 61, name: "Title", x: 22e5, y: 18e5, cx: 7792e3, cy: 9e5, fill: null, text: "\u{1F3C6}  HO\xC0N TH\xC0NH B\xC0I THI!", textSize: 3400, textColor: "38BDF8", bold: true, align: "ctr" })}
    ${makeShape({ id: 62, name: "Sub", x: 22e5, y: 28e5, cx: 7792e3, cy: 7e5, fill: null, text: `Ch\xFAc m\u1EEBng b\u1EA1n \u0111\xE3 ho\xE0n th\xE0nh xu\u1EA5t s\u1EAFc to\xE0n b\u1ED9 ${items.length} c\xE2u h\u1ECFi!`, textSize: 2e3, textColor: "E2E8F0", bold: false, align: "ctr" })}
    ${makeShape({ id: 63, name: "RestartBtn", x: 4196e3, y: 41e5, cx: 38e5, cy: 85e4, fill: "3B82F6", roundAdj: 25e3, text: "\u21BA  L\xC0M L\u1EA0I T\u1EEA \u0110\u1EA6U", textSize: 2e3, textColor: "FFFFFF", bold: true, align: "ctr", linkTarget: "rIdFirst", linkTooltip: "L\xE0m l\u1EA1i" })}
  `;
    registerSlide(makeSlideXml("0F172A", finalShapes, true), [{ id: "rIdFirst", target: "slide1.xml" }]);
    const mediaExts = [...new Set([...ctx.media.values()].map((m) => m.ext))];
    const mimeOf = { png: "image/png", jpeg: "image/jpeg", gif: "image/gif", emf: "image/x-emf", wmf: "image/x-wmf" };
    const contentTypesOverrides = slides.map((s) => `  <Override PartName="/${s.fileName}" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join("\n");
    const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
${mediaExts.map((e3) => `  <Default Extension="${e3}" ContentType="${mimeOf[e3]}"/>`).join("\n")}
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
${contentTypesOverrides}
</Types>`;
    const presentationXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rIdMaster"/></p:sldMasterIdLst>
  <p:sldIdLst>
    ${sldIdList.join("\n    ")}
  </p:sldIdLst>
  <p:sldSz cx="${SLIDE_W}" cy="${SLIDE_H}" type="screen16x9"/>
  <p:notesSz cx="6858000" cy="9144000"/>
</p:presentation>`;
    const presentationRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${presentationRels.join("\n  ")}
</Relationships>`;
    const files = [
      { name: "[Content_Types].xml", data: contentTypesXml },
      { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>` },
      { name: "ppt/_rels/presentation.xml.rels", data: presentationRelsXml },
      { name: "ppt/presentation.xml", data: presentationXml },
      { name: "ppt/theme/theme1.xml", data: THEME_XML },
      { name: "ppt/slideMasters/slideMaster1.xml", data: SLIDE_MASTER_XML },
      { name: "ppt/slideMasters/_rels/slideMaster1.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>` },
      { name: "ppt/slideLayouts/slideLayout1.xml", data: SLIDE_LAYOUT_XML },
      { name: "ppt/slideLayouts/_rels/slideLayout1.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>
</Relationships>` }
    ];
    for (const s of slides) {
      files.push({ name: s.fileName, data: s.xml });
      files.push({ name: s.relsFileName, data: s.rels });
    }
    for (const m of ctx.media.values()) files.push({ name: `ppt/media/${m.name}`, data: m.bytes });
    const themeId = opts.theme || "blue";
    for (const f of files) if (/^ppt\/(slides|theme|slideMasters|slideLayouts)\/[^/]*\.xml$/.test(f.name) && typeof f.data === "string") f.data = applyTheme(f.data, themeId);
    const out = zipStore(files);
    out.missingPictures = ctx.missing;
    out.questionCount = items.length;
    out.splitCount = items.filter((i) => i.plan.mode === "split").length;
    return out;
  }
  var SLIDE_W, SLIDE_H, THEME_XML, SLIDE_MASTER_XML, SLIDE_LAYOUT_XML, MATH0, MATHS, NATIVE_MATH, NS_M2, mathChar, isMathChar, visLen, mathToDml, REL_IMAGE, SUP, SUB3, toScript, sup, sub3, SYM2, BB2, paren, FUNCS3, IMG_EXT, RE_LABEL2, toLines, MX, CW, TOP, BOTTOM, GAP, STEM_ONLY_H, PTE, STEM_SIZES, OPT_GAP, BASE, PPTX_THEMES;
  var init_pptx = __esm({
    "src/pptx.js"() {
      init_xlsx();
      init_xml();
      init_ooxml();
      init_omml();
      init_exam();
      SLIDE_W = 12192e3;
      SLIDE_H = 6858e3;
      THEME_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">
  <a:themeElements>
    <a:clrScheme name="Office">
      <a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>
      <a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>
      <a:dk2><a:srgbClr val="1F2937"/></a:dk2>
      <a:lt2><a:srgbClr val="F3F4F6"/></a:lt2>
      <a:accent1><a:srgbClr val="3B82F6"/></a:accent1>
      <a:accent2><a:srgbClr val="10B981"/></a:accent2>
      <a:accent3><a:srgbClr val="EF4444"/></a:accent3>
      <a:accent4><a:srgbClr val="F59E0B"/></a:accent4>
      <a:accent5><a:srgbClr val="6366F1"/></a:accent5>
      <a:accent6><a:srgbClr val="8B5CF6"/></a:accent6>
      <a:hlink><a:srgbClr val="2563EB"/></a:hlink>
      <a:folHlink><a:srgbClr val="7C3AED"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="Office">
      <a:majorFont><a:latin typeface="Arial"/><a:ea typeface=""/><a:cs typeface=""/></a:majorFont>
      <a:minorFont><a:latin typeface="Arial"/><a:ea typeface=""/><a:cs typeface=""/></a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="Office">
      <a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="50000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000"/></a:gradFill></a:fillStyleLst>
      <a:lnStyleLst><a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln><a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln><a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst>
      <a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst>
      <a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
</a:theme>`;
      SLIDE_MASTER_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
    </p:spTree>
  </p:cSld>
  <p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
  <p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst>
</p:sldMaster>`;
      SLIDE_LAYOUT_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" preserve="1">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>
      <p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sldLayout>`;
      MATH0 = 57856;
      MATHS = [];
      NATIVE_MATH = true;
      NS_M2 = "http://schemas.openxmlformats.org/officeDocument/2006/math";
      mathChar = (omml, plain2) => {
        const parts = omml.match(/<m:oMath\b[\s\S]*?<\/m:oMath>/g) || [];
        if (!NATIVE_MATH || !parts.length) return ` ${plain2} `;
        MATHS.push({ parts, plain: plain2 });
        return String.fromCharCode(MATH0 + MATHS.length - 1);
      };
      isMathChar = (ch) => {
        const k = ch.charCodeAt(0) - MATH0;
        return k >= 0 && k < MATHS.length;
      };
      visLen = (l) => {
        let n = 0;
        for (const ch of l) n += isMathChar(ch) ? MATHS[ch.charCodeAt(0) - MATH0].plain.length + 1 : 1;
        return n;
      };
      mathToDml = (part, sz, color) => {
        const rpr2 = (italic) => `<a:rPr lang="en-US" sz="${sz}"${italic ? ' i="1"' : ""}><a:solidFill><a:srgbClr val="${color}"/></a:solidFill><a:latin typeface="Cambria Math" panose="02040503050406030204" pitchFamily="18" charset="0"/><a:ea typeface="Cambria Math" panose="02040503050406030204" pitchFamily="18" charset="0"/></a:rPr>`;
        let x = part.replace(/<m:r>([\s\S]*?)<\/m:r>/g, (all, inner) => {
          const upright = /<m:sty m:val="p"\s*\/>/.test(inner);
          inner = inner.replace(/<w:rPr>[\s\S]*?<\/w:rPr>|<w:rPr\/>/g, "");
          const m = /^\s*<m:rPr>[\s\S]*?<\/m:rPr>/.exec(inner);
          return `<m:r>${m ? m[0] : ""}${rpr2(!upright)}${m ? inner.slice(m[0].length) : inner}</m:r>`;
        });
        x = x.replace(/<w:rPr>[\s\S]*?<\/w:rPr>|<w:rPr\/>/g, rpr2(true));
        if (!/^<m:oMath\b[^>]*xmlns:m=/.test(x)) x = x.replace(/^<m:oMath\b/, `<m:oMath xmlns:m="${NS_M2}"`);
        return x;
      };
      REL_IMAGE = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
      SUP = { 0: "\u2070", 1: "\xB9", 2: "\xB2", 3: "\xB3", 4: "\u2074", 5: "\u2075", 6: "\u2076", 7: "\u2077", 8: "\u2078", 9: "\u2079", "+": "\u207A", "-": "\u207B", "\u2212": "\u207B", "=": "\u207C", "(": "\u207D", ")": "\u207E", n: "\u207F", i: "\u2071" };
      SUB3 = { 0: "\u2080", 1: "\u2081", 2: "\u2082", 3: "\u2083", 4: "\u2084", 5: "\u2085", 6: "\u2086", 7: "\u2087", 8: "\u2088", 9: "\u2089", "+": "\u208A", "-": "\u208B", "\u2212": "\u208B", "=": "\u208C", "(": "\u208D", ")": "\u208E", a: "\u2090", e: "\u2091", o: "\u2092", x: "\u2093", n: "\u2099", i: "\u1D62", j: "\u2C7C", k: "\u2096", m: "\u2098", p: "\u209A", s: "\u209B", t: "\u209C", h: "\u2095", l: "\u2097" };
      toScript = (map, mark, x) => {
        x = String(x).trim();
        if (!x) return "";
        const packed = x.replace(/\s+/g, "");
        if ([...packed].every((ch) => map[ch])) return [...packed].map((ch) => map[ch]).join("");
        return mark + (/^[A-Za-z0-9]$/.test(x) ? x : `(${x})`);
      };
      sup = (x) => toScript(SUP, "^", x);
      sub3 = (x) => toScript(SUB3, "_", x);
      SYM2 = {
        le: "\u2264",
        leq: "\u2264",
        leqslant: "\u2264",
        ge: "\u2265",
        geq: "\u2265",
        geqslant: "\u2265",
        neq: "\u2260",
        ne: "\u2260",
        approx: "\u2248",
        equiv: "\u2261",
        sim: "\u223C",
        cong: "\u2245",
        propto: "\u221D",
        times: "\xD7",
        cdot: "\xB7",
        div: "\xF7",
        pm: "\xB1",
        mp: "\u2213",
        ast: "\u2217",
        circ: "\xB0",
        degree: "\xB0",
        bullet: "\u2022",
        star: "\u2605",
        infty: "\u221E",
        partial: "\u2202",
        nabla: "\u2207",
        prime: "\u2032",
        ldots: "\u2026",
        dots: "\u2026",
        cdots: "\u22EF",
        vdots: "\u22EE",
        ddots: "\u22F1",
        to: "\u2192",
        rightarrow: "\u2192",
        leftarrow: "\u2190",
        Rightarrow: "\u21D2",
        Leftarrow: "\u21D0",
        Leftrightarrow: "\u21D4",
        leftrightarrow: "\u2194",
        mapsto: "\u21A6",
        implies: "\u21D2",
        iff: "\u21D4",
        in: "\u2208",
        notin: "\u2209",
        ni: "\u220B",
        subset: "\u2282",
        supset: "\u2283",
        subseteq: "\u2286",
        supseteq: "\u2287",
        cap: "\u2229",
        cup: "\u222A",
        setminus: "\u2216",
        emptyset: "\u2205",
        varnothing: "\u2205",
        forall: "\u2200",
        exists: "\u2203",
        nexists: "\u2204",
        neg: "\xAC",
        land: "\u2227",
        lor: "\u2228",
        perp: "\u22A5",
        parallel: "\u2225",
        angle: "\u2220",
        triangle: "\u25B3",
        sum: "\u2211",
        prod: "\u220F",
        int: "\u222B",
        iint: "\u222C",
        iiint: "\u222D",
        oint: "\u222E",
        alpha: "\u03B1",
        beta: "\u03B2",
        gamma: "\u03B3",
        delta: "\u03B4",
        epsilon: "\u03B5",
        varepsilon: "\u03B5",
        zeta: "\u03B6",
        eta: "\u03B7",
        theta: "\u03B8",
        vartheta: "\u03D1",
        iota: "\u03B9",
        kappa: "\u03BA",
        lambda: "\u03BB",
        mu: "\u03BC",
        nu: "\u03BD",
        xi: "\u03BE",
        pi: "\u03C0",
        rho: "\u03C1",
        sigma: "\u03C3",
        tau: "\u03C4",
        upsilon: "\u03C5",
        phi: "\u03C6",
        varphi: "\u03C6",
        chi: "\u03C7",
        psi: "\u03C8",
        omega: "\u03C9",
        Gamma: "\u0393",
        Delta: "\u0394",
        Theta: "\u0398",
        Lambda: "\u039B",
        Xi: "\u039E",
        Pi: "\u03A0",
        Sigma: "\u03A3",
        Phi: "\u03A6",
        Psi: "\u03A8",
        Omega: "\u03A9"
      };
      BB2 = { R: "\u211D", N: "\u2115", Z: "\u2124", Q: "\u211A", C: "\u2102" };
      paren = (x) => {
        x = x.trim();
        return /^[A-Za-z0-9À-ɏ.,°′'π∞α-ωΑ-Ω]+$/.test(x) || /^[√³⁴]?[A-Za-z]*\([^()]*\)$/.test(x) || /^√[A-Za-z0-9]+$/.test(x) ? x : `(${x})`;
      };
      FUNCS3 = "arcsin|arccos|arctan|arccot|sinh|cosh|tanh|sin|cos|tan|cot|sec|csc|log|ln|lg|exp|max|min|det|gcd|lim|sup|inf";
      IMG_EXT = { "image/png": "png", "image/jpeg": "jpeg", "image/jpg": "jpeg", "image/gif": "gif", "image/x-emf": "emf", "image/emf": "emf", "image/x-wmf": "wmf", "image/wmf": "wmf" };
      RE_LABEL2 = /^\s*(?:C[âa]u|B[àa]i)\s*\d+\s*(?:[.:)\-–—]|\s)?\s*/iu;
      toLines = (text) => text.replace(/[ \t ]+/g, " ").split("\n").map((l) => l.trim()).filter(Boolean);
      MX = 7e5;
      CW = 10792e3;
      TOP = 95e4;
      BOTTOM = 625e4;
      GAP = 15e4;
      STEM_ONLY_H = 45e5;
      PTE = 12700;
      STEM_SIZES = [2400, 2200, 2e3, 1800, 1600, 1400, 1200, 1100];
      OPT_GAP = 15e4;
      BASE = { dark: "0F172A", dark2: "1E293B", text2: "475569", text3: "64748B", text4: "94A3B8", pale: "E2E8F0", line: "CBD5E1", paper: "F8FAFC", primary: "3B82F6", accent: "4F46E5", accent2: "6366F1", sky: "38BDF8" };
      PPTX_THEMES = [
        { id: "blue", label: "Xanh d\u01B0\u01A1ng \u0111\xEAm (m\u1EB7c \u0111\u1ECBnh)", font: "Arial", colors: {} },
        { id: "emerald", label: "Xanh ng\u1ECDc TexCraft", font: "Georgia", colors: { dark: "0B2B20", dark2: "14392B", text2: "3F5B4E", text3: "5F7F70", text4: "9DB8AB", pale: "DDEEE4", line: "CFE3D8", paper: "F4FAF7", primary: "1F6F4F", accent: "2F855A", accent2: "38A169", sky: "6EE7B7" } },
        { id: "sunset", label: "Ho\xE0ng h\xF4n (cam \u1EA5m)", font: "Verdana", colors: { dark: "2B1608", dark2: "3D2410", text2: "6B4A32", text3: "8A6A52", text4: "C9A98F", pale: "F3E2D3", line: "F3D5BE", paper: "FFF8F1", primary: "F97316", accent: "EA580C", accent2: "FB923C", sky: "FDBA74" } },
        { id: "violet", label: "T\xEDm m\u1ED9ng m\u01A1", font: "Georgia", colors: { dark: "1E1033", dark2: "2E1A4A", text2: "57457A", text3: "7A68A0", text4: "B8A9D6", pale: "E9E1F7", line: "DCCFF2", paper: "FAF7FF", primary: "7C3AED", accent: "6D28D9", accent2: "8B5CF6", sky: "C4B5FD" } },
        { id: "classic", label: "C\u1ED5 \u0111i\u1EC3n (\u0111\u1ECF th\u1EABm, ch\u1EEF c\xF3 ch\xE2n)", font: "Times New Roman", colors: { dark: "3A0A0A", dark2: "511414", text2: "5E3A3A", text3: "7E5A5A", text4: "C6A0A0", pale: "F2DEDE", line: "E6CACA", paper: "FFF8F6", primary: "B91C1C", accent: "991B1B", accent2: "DC2626", sky: "FCA5A5" } },
        { id: "mono", label: "\u0110en tr\u1EAFng (ti\u1EBFt ki\u1EC7m m\u1EF1c)", font: "Tahoma", colors: { dark: "111111", dark2: "262626", text2: "404040", text3: "595959", text4: "A6A6A6", pale: "E5E5E5", line: "BFBFBF", paper: "FAFAFA", primary: "404040", accent: "262626", accent2: "595959", sky: "D4D4D4" } }
      ];
    }
  });

  // src/answer-qr.js
  function examKeys(version, warnings = []) {
    var _a8;
    const p1 = [], p2 = [], p3 = [];
    for (const a of version.answers) {
      if (a.kind === "mc" || a.kind === "other") {
        if (a.value && /^[A-D]{1,4}$/.test(a.value)) p1.push(a.value);
        else {
          p1.push("X");
          warnings.push(`M\xE3 \u0111\u1EC1 ${version.code}: c\xE2u ${a.number} (ph\u1EA7n I) ch\u01B0a c\xF3 \u0111\xE1p \xE1n \u2014 ghi X (b\u1ECF qua).`);
        }
      } else if (a.kind === "tf") {
        if (a.tf && a.tf.length === 4) p2.push(a.tf.map((c) => c === "\u0110" ? "D" : c).join(""));
        else {
          p2.push("XXXX");
          warnings.push(`M\xE3 \u0111\u1EC1 ${version.code}: c\xE2u ${a.number} (ph\u1EA7n II) ch\u01B0a c\xF3 \u0111\xE1p \xE1n \u2014 ghi XXXX.`);
        }
      } else if (a.kind === "short") {
        const v = String((_a8 = a.value) != null ? _a8 : "").trim().replace(/\s+/g, "");
        if (/^-?(?:\d+(?:[.,]\d+)?|[.,]\d+)$/.test(v)) p3.push(v);
        else {
          p3.push("X");
          warnings.push(`M\xE3 \u0111\u1EC1 ${version.code}: c\xE2u ${a.number} (ph\u1EA7n III) kh\xF4ng ph\u1EA3i s\u1ED1 \u2014 ghi X.`);
        }
      }
    }
    if (p1.length > 40 || p2.length > 8 || p3.length > 6) throw new Error(`M\xE3 \u0111\u1EC1 ${version.code}: v\u01B0\u1EE3t m\u1EABu phi\u1EBFu (t\u1ED1i \u0111a 40 c\xE2u ph\u1EA7n I, 8 c\xE2u ph\u1EA7n II, 6 c\xE2u ph\u1EA7n III).`);
    if (!/^\d{1,4}$/.test(String(version.code))) throw new Error("M\xE3 \u0111\u1EC1 ph\u1EA3i g\u1ED3m 1 \u0111\u1EBFn 4 ch\u1EEF s\u1ED1 \u0111\u1EC3 t\u1EA1o QR.");
    return [p1.join("_"), p2.join("_"), p3.join("_")].join("#");
  }
  function qrPayloads(versions, maxBytes = 700) {
    const warnings = [], payloads = [];
    let group5 = {}, codes = [];
    for (const v of versions) {
      const entry = examKeys(v, warnings);
      const next = __spreadProps(__spreadValues({}, group5), { [v.code]: entry });
      if (codes.length && JSON.stringify(next).length > maxBytes) {
        payloads.push({ codes, text: JSON.stringify(group5) });
        group5 = { [v.code]: entry };
        codes = [v.code];
      } else {
        group5 = next;
        codes.push(v.code);
      }
    }
    if (codes.length) payloads.push({ codes, text: JSON.stringify(group5) });
    return { payloads, warnings };
  }
  async function libs(base) {
    if (!ready) ready = Promise.all([typeof qrcode === "undefined" ? loadScript(base + "qrcode.js") : 0, typeof jsQR === "undefined" ? loadScript(base + "jsQR.js") : 0]);
    await ready;
  }
  function loadLogo(url) {
    return new Promise((res) => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = () => res(null);
      img.src = url;
    });
  }
  async function renderQr(text, { vendorBase = "vendor/", logoUrl = "icon-80.png" } = {}) {
    await libs(vendorBase);
    const qr = qrcode(0, "H");
    qr.addData(text, "Byte");
    try {
      qr.make();
    } catch (e3) {
      throw new Error("N\u1ED9i dung qu\xE1 d\xE0i cho m\u1ED9t m\xE3 QR.");
    }
    const count = qr.getModuleCount(), cell4 = Math.max(6, Math.floor(1024 / (count + 8))), margin = 4 * cell4;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = (count + 8) * cell4;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    for (let y = 0; y < count; y++) for (let x = 0; x < count; x++) if (qr.isDark(y, x)) ctx.fillRect(margin + x * cell4, margin + y * cell4, cell4, cell4);
    const original = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const logo = await loadLogo(logoUrl);
    const read = () => {
      const p2 = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = jsQR(p2.data, p2.width, p2.height, { inversionAttempts: "dontInvert" });
      return d && d.data === text;
    };
    if (!logo) {
      if (read()) return canvas;
      throw new Error("QR ch\u01B0a \u0111\u1ECDc l\u1EA1i ch\xEDnh x\xE1c.");
    }
    for (const fraction of [0.15, 0.12, 0.09]) {
      ctx.putImageData(original, 0, 0);
      const modules = Math.max(3, Math.floor(count * fraction) | 1), side = modules * cell4, offset = (canvas.width - side) / 2;
      ctx.drawImage(logo, offset, offset, side, side);
      if (read()) return canvas;
      await new Promise((r) => setTimeout(r, 0));
    }
    ctx.putImageData(original, 0, 0);
    if (read()) return canvas;
    throw new Error("QR ch\u01B0a \u0111\u1ECDc l\u1EA1i ch\xEDnh x\xE1c. H\xE3y ch\u1ECDn \xEDt m\xE3 \u0111\u1EC1 h\u01A1n.");
  }
  var loadScript, ready;
  var init_answer_qr = __esm({
    "src/answer-qr.js"() {
      loadScript = (src) => new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = res;
        s.onerror = () => rej(new Error("Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c " + src));
        document.head.appendChild(s);
      });
      ready = null;
    }
  });

  // taskpane/exam-ui.js
  var exam_ui_exports = {};
  __export(exam_ui_exports, {
    mountExam: () => mountExam
  });
  function mountExam(root, io) {
    root.innerHTML = `
  <div class="notice">Nh\u1EADn d\u1EA1ng: <b>PH\u1EA6N I/II/III</b>, <b>C\xE2u N.</b> ho\u1EB7c <b>Question N.</b> (\u0111\u1EC1 ti\u1EBFng Anh, t\u1EF1 nh\u1EADn),ph\u01B0\u01A1ng \xE1n <b>A. B. C. D.</b>, \xFD <b>a) b) c) d)</b>. \u0110\xE1p \xE1n \u0111\xFAng \u0111\u01B0\u1EE3c nh\u1EADn qua nh\xE3n ph\u01B0\u01A1ng \xE1n <b>g\u1EA1ch ch\xE2n / ch\u1EEF \u0111\u1ECF / t\xF4 n\u1ED5i</b>. M\u1ECDi thao t\xE1c ghi v\xE0o t\xE0i li\u1EC7u ch\u1EC9 ch\u1EA1y khi b\u1EA1n b\u1EA5m n\xFAt; h\xE3y l\xE0m tr\xEAn b\u1EA3n sao.</div>
  <fieldset><legend>1. Ph\xE2n t\xEDch \u0111\u1EC1</legend>
    <div class="btns"><button class="primary" id="ex-analyze">Ph\xE2n t\xEDch t\xE0i li\u1EC7u</button></div>
    <div id="ex-summary" class="muted"></div>
  </fieldset>
  <fieldset><legend>2. Chu\u1EA9n h\xF3a c\xE2u h\u1ECFi</legend>
    <label class="field"><span>\u0110\xE1nh s\u1ED1 l\u1EA1i c\xE2u</span>
      <select id="ex-renumber"><option value="part">theo t\u1EEBng ph\u1EA7n (m\u1ED7i ph\u1EA7n b\u1EAFt \u0111\u1EA7u t\u1EEB C\xE2u 1)</option><option value="continuous">li\xEAn t\u1EE5c to\xE0n \u0111\u1EC1</option><option value="">kh\xF4ng \u0111\u1ED5i</option></select></label>
    <label class="field"><span>C\u0103n l\u1EC1 ph\u01B0\u01A1ng \xE1n</span>
      <select id="ex-layout"><option value="auto">t\u1EF1 \u0111\u1ED9ng (1 d\xF2ng / 2 d\xF2ng / 4 d\xF2ng theo \u0111\u1ED9 d\xE0i)</option><option value="4">lu\xF4n 4 c\u1ED9t</option><option value="2">lu\xF4n 2 c\u1ED9t</option><option value="1">m\u1ED7i ph\u01B0\u01A1ng \xE1n m\u1ED9t d\xF2ng</option><option value="false">gi\u1EEF nguy\xEAn</option></select></label>
    <label class="field"><span>T\u1EEB trong nh\xE3n c\xE2u</span>
      <select id="ex-word"><option value="keep">gi\u1EEF nguy\xEAn nh\u01B0 t\xE0i li\u1EC7u (C\xE2u 1. / B\xE0i 1. / b\xE0i 1:)</option><option value="C\xE2u">\u0111\u1ED5i t\u1EA5t c\u1EA3 th\xE0nh \u201CC\xE2u N.\u201D</option><option value="B\xE0i">\u0111\u1ED5i t\u1EA5t c\u1EA3 th\xE0nh \u201CB\xE0i N.\u201D</option></select></label>
    <label class="field"><span>Ph\xF4ng ch\u1EEF</span>
      <select id="ex-font"><option value="Times New Roman">Times New Roman</option><option value="Cambria">Cambria</option><option value="Arial">Arial</option><option value="Calibri">Calibri</option><option value="Tahoma">Tahoma</option><option value="">gi\u1EEF nguy\xEAn</option></select></label>
    <label class="field"><span>C\u1EE1 ch\u1EEF</span>
      <select id="ex-fsize"><option value="12">12 pt</option><option value="13">13 pt</option><option value="14">14 pt</option><option value="11">11 pt</option><option value="0">gi\u1EEF nguy\xEAn</option></select></label>
    <label class="field"><span>C\u1EE1 c\xF4ng th\u1EE9c</span>
      <select id="ex-msize"><option value="text">b\u1EB1ng c\u1EE1 ch\u1EEF</option><option value="11">11 pt</option><option value="12">12 pt</option><option value="13">13 pt</option><option value="14">14 pt</option><option value="0">gi\u1EEF nguy\xEAn</option></select></label>
    <label><input type="checkbox" id="ex-labels" checked> nh\xE3n A. B. C. D. in \u0111\u1EADm, vi\u1EBFt hoa, d\u1EA5u ch\u1EA5m</label>
    <label><input type="checkbox" id="ex-qformat" checked> nh\xE3n \u201CC\xE2u N.\u201D / \u201CB\xE0i N.\u201D c\xF9ng \u0111\u1ECBnh d\u1EA1ng v\u1EDBi c\xE2u \u0111\u1EA7u ti\xEAn</label>
    <div class="subhead">Nh\xE3n \u201CC\xE2u N.\u201D</div>
    <label><input type="checkbox" id="ex-qbold" checked> in \u0111\u1EADm nh\xE3n c\xE2u</label>
    <label class="field"><span>M\xE0u nh\xE3n c\xE2u</span>
      <select id="ex-qcolor"><option value="">gi\u1EEF nguy\xEAn (t\u1EF1 \u0111\u1ED9ng)</option><option value="000000">\u0111en</option><option value="C00000">\u0111\u1ECF \u0111\u1EADm</option><option value="0000FF">xanh d\u01B0\u01A1ng</option><option value="1F4E79">xanh navy</option><option value="006100">xanh l\u1EE5c</option><option value="7030A0">t\xEDm</option><option value="ED7D31">cam</option><option value="custom">m\xE0u kh\xE1c\u2026</option></select><input type="color" id="ex-qcolor-custom" value="#c00000" hidden style="margin-left:6px"></label>
    <label><input type="checkbox" id="ex-qbreak"> xu\u1ED1ng d\xF2ng sau nh\xE3n (n\u1ED9i dung c\xE2u h\u1ECFi b\u1EAFt \u0111\u1EA7u \u1EDF d\xF2ng m\u1EDBi)</label>
    <label><input type="checkbox" id="ex-keep" checked> gi\u1EEF c\xE2u h\u1ECFi v\xE0 ph\u01B0\u01A1ng \xE1n c\xF9ng trang (keep with next)</label>
    <label><input type="checkbox" id="ex-backup1"> T\xF4i \u0111\xE3 l\u01B0u m\u1ED9t b\u1EA3n sao t\xE0i li\u1EC7u</label>
    <div class="btns"><button class="primary" id="ex-normalize">Chu\u1EA9n h\xF3a</button></div>
    <div id="ex-norm-out"></div>
  </fieldset>
  <fieldset><legend>3. Tr\u1ED9n \u0111\u1EC1 &amp; b\u1EA3ng \u0111\xE1p \xE1n</legend>
    <div class="grid2"><label class="field"><span>S\u1ED1 m\xE3 \u0111\u1EC1</span><input type="number" id="ex-n" value="4" min="1" max="12"></label><label class="field"><span>H\u1EA1t gi\u1ED1ng</span><input type="number" id="ex-seed" value="2026"></label></div>
    <label class="field"><span>M\xE3 \u0111\u1EC1 (c\xE1ch nhau d\u1EA5u ph\u1EA9y)</span><input type="text" id="ex-code" value="1001" placeholder="1001 ho\u1EB7c 1001, 1002, A1\u2026" spellcheck="false" title="M\u1ED9t s\u1ED1: m\xE3 \u0111\u1EC1 \u0111\u1EA7u, c\xE1c m\xE3 sau t\u0103ng d\u1EA7n (4 ch\u1EEF s\u1ED1). Nhi\u1EC1u m\xE3 c\xE1ch nhau d\u1EA5u ph\u1EA9y: d\xF9ng \u0111\xFAng c\xE1c m\xE3 \u0111\xF3, kh\xF4ng c\u1EA7n \u2018S\u1ED1 m\xE3 \u0111\u1EC1\u2019."></label>
    <label><input type="checkbox" id="ex-shq" checked> tr\u1ED9n th\u1EE9 t\u1EF1 c\xE2u trong t\u1EEBng ph\u1EA7n</label>
    <label><input type="checkbox" id="ex-sho" checked> tr\u1ED9n th\u1EE9 t\u1EF1 ph\u01B0\u01A1ng \xE1n A\u2013D (gi\u1EEF nguy\xEAn c\xE2u c\xF3 \u201Cc\u1EA3 A v\xE0 B\u2026\u201D, \u201Ct\u1EA5t c\u1EA3 c\xE1c \u0111\xE1p \xE1n\u2026\u201D)</label>
    <label><input type="checkbox" id="ex-shs"> tr\u1ED9n c\u1EA3 th\u1EE9 t\u1EF1 \xFD a) b) c) d) \u1EDF ph\u1EA7n \u0111\xFAng sai</label>
    <div id="ex-sections"></div>
    <label><input type="checkbox" id="ex-strip" checked> b\u1ECF d\u1EA5u \u0111\xE1p \xE1n (g\u1EA1ch ch\xE2n/\u0111\u1ECF) kh\u1ECFi \u0111\u1EC1 tr\u1ED9n</label>
    <label><input type="checkbox" id="ex-withkey" checked> th\xEAm b\u1EA3ng \u0111\xE1p \xE1n c\u1EE7a m\xE3 \u0111\u1EC1 v\xE0o cu\u1ED1i m\u1ED7i \u0111\u1EC1</label>
    <details class="mt-details" id="ex-form-box"><summary>Ti\xEAu \u0111\u1EC1, ch\xE2n trang, d\xF2ng H\u1EBET (theo m\u1EABu \u0111\u1EC1 ki\u1EC3m tra)</summary>
      <label><input type="checkbox" id="ex-h-title" checked> th\xEAm kh\u1ED1i ti\xEAu \u0111\u1EC1 (S\u1EDF, Tr\u01B0\u1EDDng, K\u1EF3 thi, H\u1ECD t\xEAn, M\xE3 \u0111\u1EC1) \u0111\u1EA7u m\u1ED7i \u0111\u1EC1</label>
      <label><input type="checkbox" id="ex-h-end" checked> th\xEAm d\xF2ng ----H\u1EBET---- cu\u1ED1i \u0111\u1EC1</label>
      <label><input type="checkbox" id="ex-h-footer" checked> th\xEAm ch\xE2n trang \u201CTrang X/Y-M\xE3 \u0111\u1EC1\u201D (khi m\u1EDF t\xE0i li\u1EC7u m\u1EDBi)</label>
      <div class="grid2">
        <label class="field"><span>S\u1EDF GD&amp;\u0110T</span><input type="text" id="ex-f-soGd"></label>
        <label class="field"><span>Tr\u01B0\u1EDDng</span><input type="text" id="ex-f-truong"></label>
        <label class="field"><span>D\xF2ng th\u1EE9 3 (b\xEAn tr\xE1i)</span><input type="text" id="ex-f-chinhThuc"></label>
        <label class="field"><span>K\u1EF3 ki\u1EC3m tra</span><input type="text" id="ex-f-kyThi"></label>
        <label class="field"><span>N\u0103m h\u1ECDc</span><input type="text" id="ex-f-namHoc"></label>
        <label class="field"><span>M\xF4n</span><input type="text" id="ex-f-mon" placeholder="vd. To\xE1n"></label>
        <label class="field"><span>L\u1EDBp</span><input type="text" id="ex-f-lop" placeholder="vd. 12"></label>
        <label class="field"><span>Th\u1EDDi gian (ph\xFAt)</span><input type="text" id="ex-f-thoiGian" placeholder="vd. 90"></label>
      </div>
      <div class="btns two"><button class="secondary" id="ex-f-reset">Kh\xF4i ph\u1EE5c m\u1EB7c \u0111\u1ECBnh</button><button class="secondary" id="ex-f-insert" title="Ch\xE8n kh\u1ED1i ti\xEAu \u0111\u1EC1 t\u1EA1i con tr\u1ECF, m\xE3 \u0111\u1EC1 l\u1EA5y t\u1EEB \xF4 \u201CM\xE3 \u0111\u1EC1\u201D (m\xE3 \u0111\u1EA7u ti\xEAn)">Ch\xE8n ti\xEAu \u0111\u1EC1 t\u1EA1i con tr\u1ECF</button></div>
    </details>
    <label class="field"><span>N\u01A1i \u0111\u1EB7t k\u1EBFt qu\u1EA3</span>
      <select id="ex-target"><option value="new">m\u1ED7i m\xE3 \u0111\u1EC1 m\u1ED9t t\xE0i li\u1EC7u m\u1EDBi</option><option value="append">ch\xE8n n\u1ED1i ti\u1EBFp v\xE0o cu\u1ED1i t\xE0i li\u1EC7u n\xE0y</option><option value="none">ch\u1EC9 l\u1EADp b\u1EA3ng \u0111\xE1p \xE1n (kh\xF4ng t\u1EA1o \u0111\u1EC1)</option></select></label>
    <div class="btns"><button class="primary" id="ex-shuffle">T\u1EA1o \u0111\u1EC1</button></div>
    <div class="btns two"><button class="secondary" id="ex-key">Ch\xE8n b\u1EA3ng \u0111\xE1p \xE1n</button><button class="secondary" id="ex-copy" disabled>Sao ch\xE9p CSV</button></div>
    <div class="subhead">Xu\u1EA5t \u0111\xE1p \xE1n</div>
    <label class="field"><span>M\u1EABu Excel</span><select id="ex-xlsx"><option value="giasu">M\u1EABu GIASU.AI.VN (h\xE0ng = c\xE2u, c\u1ED9t = m\xE3 \u0111\u1EC1)</option><option value="texcraft">M\u1EABu TEXCRAFT (h\xE0ng = \u0111\u1EC1, c\u1ED9t = c\xE2u / \xFD)</option><option value="both">C\u1EA3 hai m\u1EABu</option></select></label>
    <div class="orig-row"><label class="switch"><input type="checkbox" id="ex-orig" checked><span class="switch-track"></span><span>Th\xEAm \u0111\u1EC1 g\u1ED1c, m\xE3</span></label><input type="text" id="ex-origcode" value="0000" maxlength="4" inputmode="numeric"></div>
    <div class="btns two"><button class="secondary" id="ex-export">T\u1EA3i file Excel</button><button class="secondary" id="ex-tsv">Sao ch\xE9p b\u1EA3ng</button></div>
    <div class="btns"><button class="secondary tb-action" id="ex-qr"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h3v3h3v3h-6v-3m6-3v-3m-9 0h3"/></svg><span>T\u1EA1o m\xE3 QR \u0111\xE1p \xE1n</span></button></div>
    <p class="hint">D\xF9ng \u0111\u1EC3 nh\u1EADp \u0111\xE1p \xE1n v\xE0o <a href="https://giasu.ai.vn/cham-thi/" target="_blank" rel="noopener">giasu.ai.vn/cham-thi</a></p>
    <div id="ex-qr-panel" hidden class="qr-panel"><canvas id="ex-qr-canvas" style="max-width:100%;height:auto;border:1px solid var(--line);border-radius:8px;background:#fff"></canvas><div id="ex-qr-status" class="muted" style="margin:6px 0"></div><div class="btns four"><button class="secondary" id="ex-qr-prev">\u2039 QR tr\u01B0\u1EDBc</button><button class="secondary" id="ex-qr-next">QR ti\u1EBFp \u203A</button><button class="secondary" id="ex-qr-save">T\u1EA3i PNG</button><button class="secondary" id="ex-qr-insert">Ch\xE8n v\xE0o Word</button></div></div>
    <progress id="ex-progress" value="0" max="1" hidden></progress>
    <div id="ex-shuffle-out"></div>
  </fieldset>
  <fieldset><legend>4. Xu\u1EA5t b\xE0i tr\xECnh chi\u1EBFu PowerPoint</legend>
    <label class="field"><span>Ti\xEAu \u0111\u1EC1 slide</span><input type="text" id="ex-pptx-title" value="B\xC0I T\u1EACP TR\u1EAEC NGHI\u1EC6M"></label>
    <label class="field" id="ex-pptx-source-box" hidden><span>Ngu\u1ED3n \u0111\u1EC1</span><select id="ex-pptx-source"><option value="current">T\xE0i li\u1EC7u hi\u1EC7n t\u1EA1i</option></select></label>
    <label class="field"><span>Giao di\u1EC7n (m\xE0u s\u1EAFc, ph\xF4ng ch\u1EEF)</span><select id="ex-pptx-theme">${PPTX_THEMES.map((t) => `<option value="${t.id}">${t.label} \u2014 ${t.font}</option>`).join("")}</select></label>
    <div id="ex-pptx-swatch" class="swatch"></div>
    <div class="notice" style="margin: 6px 0;">
      T\u1EA1o file tr\xECnh chi\u1EBFu PPTX 16:9 t\u01B0\u01A1ng t\xE1c: b\u1EA5m v\xE0o ph\u01B0\u01A1ng \xE1n s\u1EBD hi\u1EC3n th\u1ECB ngay th\xF4ng b\xE1o <b>\u0110\xFAng</b> (ch\xFAc m\u1EEBng) ho\u1EB7c <b>Sai</b> (th\u1EED l\u1EA1i). Ch\u1EA1y tr\u1EF1c ti\u1EBFp tr\xEAn PowerPoint, Google Slides, Keynote v\xE0 CHITUP Slide.
    </div>
    <label><input type="checkbox" id="ex-pptx-math" checked> c\xF4ng th\u1EE9c l\xE0 c\xF4ng th\u1EE9c th\u1EADt c\u1EE7a PowerPoint (s\u1EEDa \u0111\u01B0\u1EE3c; app kh\xF4ng h\u1ED7 tr\u1EE3 nh\u01B0 Keynote, Google Slides s\u1EBD hi\u1EC7n d\u1EA1ng ch\u1EEF)</label>
    <div class="btns"><button class="primary" id="ex-pptx-btn">T\u1EA3i file PowerPoint (PPTX)</button></div>
    <div id="ex-pptx-out"></div>
  </fieldset>`;
    const $2 = (id) => root.querySelector("#" + id);
    let lastCsv = "";
    function codeList(n) {
      const raw = $2("ex-code").value.split(/[,;\s]+/).map((x) => x.trim()).filter(Boolean);
      if (raw.length > 1) return raw;
      const first = /^\d+$/.test(raw[0] || "") ? Number(raw[0]) : 1001;
      const w = Math.max(4, String(raw[0] || "").length);
      if (raw[0] && !/^\d+$/.test(raw[0])) return [raw[0]];
      return Array.from({ length: Math.max(1, n) }, (_x, i) => String(first + i).padStart(w, "0"));
    }
    let lastVersions = null;
    async function body() {
      const { pkg } = await io.readBody();
      return pkg;
    }
    async function preparedBody() {
      const prep = prepareEnglish(await body()), key = applyAnswerKey(prep.pkg);
      return __spreadProps(__spreadValues({}, prep), { pkg: key.pkg, changed: prep.changed || key.changed, stats: __spreadProps(__spreadValues({}, prep.stats), { keyed: key.count }) });
    }
    const prepNote = (prep) => prep.changed ? `<div class="muted">\u0110\xE3 t\u1EF1 chu\u1EA9n h\xF3a b\u1ED1 c\u1EE5c trong b\u1ED9 nh\u1EDB (${prep.stats.tables} b\u1EA3ng, ${prep.stats.split} ch\u1ED7 t\xE1ch, ${prep.stats.labels} nh\xE3n A\u2013D t\u1EF1 \u0111\xE1nh s\u1ED1${prep.stats.keyed ? `, ${prep.stats.keyed} \u0111\xE1p \xE1n \u0111\u1ECDc t\u1EEB b\u1EA3ng \u0111\xE1p \xE1n cu\u1ED1i \u0111\u1EC1` : ""}); t\xE0i li\u1EC7u g\u1ED1c kh\xF4ng b\u1ECB s\u1EEDa. B\u1EA5m \u201CChu\u1EA9n h\xF3a\u201D n\u1EBFu mu\u1ED1n ghi b\u1ED1 c\u1EE5c n\xE0y v\xE0o t\xE0i li\u1EC7u.</div>` : "";
    const chips = (list3) => list3.length ? `<div class="chips-title">C\xE2u ch\u01B0a c\xF3 \u0111\xE1p \xE1n \u2014 b\u1EA5m \u0111\u1EC3 chuy\u1EC3n t\u1EDBi trong Word (${list3.length}):</div><div class="chips">${list3.map((q) => `<button type="button" class="chip" data-p="${q.paragraph}" title="Chuy\u1EC3n t\u1EDBi ${esc12(q.label)} trong Word">${esc12(q.label)}</button>`).join("")}</div>` : "";
    root.addEventListener("click", async (ev) => {
      const b = ev.target.closest(".chip");
      if (!b) return;
      try {
        await io.selectParagraph(Number(b.dataset.p));
      } catch (e3) {
      }
    });
    const SEC_KIND = { independent: "c\xE2u \u0111\u1ED9c l\u1EADp", passage: "c\xF3 \u0111o\u1EA1n v\u0103n", order: "s\u1EAFp x\u1EBFp c\xE2u" };
    let secState = { sig: "", modes: {} };
    function sectionsUi(a) {
      const box = $2("ex-sections");
      if (!a.english) {
        box.innerHTML = "";
        return void 0;
      }
      const sig = a.sections.map((s) => `${s.firstNumber}-${s.lastNumber}:${s.kind}`).join("|");
      if (sig !== secState.sig) secState = { sig, modes: Object.fromEntries(a.sections.map((s) => [s.index, s.mode])) };
      const lost = a.expected > a.detected ? `<p class="bad">Ch\u1EC9 nh\u1EADn \u0111\u01B0\u1EE3c ${a.detected}/${a.expected} c\xE2u \u201CQuestion N\u201D (c\xE1c c\xE2u n\u1EB1m trong b\u1EA3ng, d\xEDnh li\u1EC1n \u0111o\u1EA1n kh\xE1c ho\u1EB7c c\xF3 ph\u01B0\u01A1ng \xE1n \u0111\xE1nh s\u1ED1 t\u1EF1 \u0111\u1ED9ng ch\u01B0a \u0111\u1ECDc \u0111\u01B0\u1EE3c). Kh\xF4ng n\xEAn tr\u1ED9n \u0111\u1EC1 n\xE0y khi ch\u01B0a s\u1EEDa b\u1ED1 c\u1EE5c.</p>` : "";
      box.innerHTML = `${lost}<div class="subhead">\u0110\u1EC1 ti\u1EBFng Anh \u2014 ${a.sections.length} nh\xF3m c\xE2u</div><div class="muted">Nh\xF3m c\xF3 \u0111o\u1EA1n v\u0103n / s\u1EAFp x\u1EBFp c\xE2u gi\u1EEF th\u1EE9 t\u1EF1 c\xE2u (s\u1ED1 ch\u1ED7 tr\u1ED1ng, c\xE2u a\u2013e kh\xF4ng l\u1EC7ch); ph\u01B0\u01A1ng \xE1n A\u2013D v\u1EABn \u0111\u01B0\u1EE3c tr\u1ED9n.</div><ul class="sec-list">` + a.sections.map((s) => `<li><span title="${esc12(s.title)}">Question ${s.firstNumber}${s.lastNumber !== s.firstNumber ? "\u2013" + s.lastNumber : ""} \xB7 ${SEC_KIND[s.kind]}</span><select data-sec="${s.index}"><option value="shuffle"${secState.modes[s.index] === "shuffle" ? " selected" : ""}>tr\u1ED9n c\xE2u</option><option value="keep"${secState.modes[s.index] === "keep" ? " selected" : ""}>gi\u1EEF th\u1EE9 t\u1EF1 c\xE2u</option></select></li>`).join("") + "</ul>";
      box.querySelectorAll("select[data-sec]").forEach((sel) => sel.addEventListener("change", () => {
        secState.modes[sel.dataset.sec] = sel.value;
      }));
      return secState.modes;
    }
    const fail3 = (el, e3) => {
      el.innerHTML = `<span class="bad">L\u1ED7i: ${esc12(e3.message || e3)}</span>`;
    };
    $2("ex-analyze").addEventListener("click", async () => {
      try {
        $2("ex-summary").textContent = "\u0110ang \u0111\u1ECDc\u2026";
        const prep = await preparedBody();
        const model = parseBody(prep.pkg);
        const a = analyze(model);
        const ans = answersOf(model, a);
        const lines = a.parts.map((p2) => {
          const flagged = p2.questions.filter((q) => q.flags.length).length;
          const marked = ans.filter((x) => x.part === p2.title && x.value).length;
          return `<li><b>${esc12(p2.title.slice(0, 70) || "(\u0111\u1EA7u \u0111\u1EC1)")}</b> \u2014 ${p2.kind === "mc" ? "nhi\u1EC1u ph\u01B0\u01A1ng \xE1n" : p2.kind === "tf" ? "\u0111\xFAng/sai" : p2.kind === "short" ? "tr\u1EA3 l\u1EDDi ng\u1EAFn" : "kh\xE1c"}: ${p2.questions.length} c\xE2u${p2.kind === "mc" ? `, nh\u1EADn \u0111\xE1p \xE1n ${marked}/${p2.questions.length}` : ""}${flagged ? `, <span class="warn">${flagged} c\xE2u c\u1EA7n ch\xFA \xFD</span>` : ""}</li>`;
        });
        sectionsUi(a);
        $2("ex-summary").innerHTML = a.parts.length ? `${a.english ? '<div class="ok">Nh\u1EADn ra \u0111\u1EC1 ti\u1EBFng Anh (Question N) \u2014 xem c\xE1c nh\xF3m c\xE2u \u1EDF m\u1EE5c 3.</div>' : ""}${prepNote(prep)}<ul>${lines.join("")}</ul>${prep.changed ? "" : chips(unansweredQuestions(model, a))}` : '<span class="warn">Kh\xF4ng th\u1EA5y \u201CC\xE2u N.\u201D / \u201CQuestion N.\u201D n\xE0o.</span>';
      } catch (e3) {
        fail3($2("ex-summary"), e3);
      }
    });
    const qColor = () => $2("ex-qcolor").value === "custom" ? $2("ex-qcolor-custom").value.replace("#", "").toUpperCase() : $2("ex-qcolor").value;
    $2("ex-qcolor").addEventListener("change", () => {
      $2("ex-qcolor-custom").hidden = $2("ex-qcolor").value !== "custom";
    });
    $2("ex-normalize").addEventListener("click", async () => {
      if (!$2("ex-backup1").checked) {
        $2("ex-norm-out").innerHTML = '<span class="warn">H\xE3y l\u01B0u m\u1ED9t b\u1EA3n sao t\xE0i li\u1EC7u r\u1ED3i tick \xF4 x\xE1c nh\u1EADn.</span>';
        return;
      }
      try {
        const layout2 = $2("ex-layout").value;
        const r = normalize(await body(), {
          renumber: $2("ex-renumber").value || false,
          labelWord: $2("ex-word").value,
          labels: $2("ex-labels").checked,
          questionFormat: $2("ex-qformat").checked,
          qBold: $2("ex-qbold").checked,
          qColor: qColor(),
          qBreak: $2("ex-qbreak").checked,
          keepNext: $2("ex-keep").checked,
          layout: layout2 === "false" ? false : layout2,
          font: $2("ex-font").value,
          fontSize: Number($2("ex-fsize").value),
          mathSize: $2("ex-msize").value === "text" ? "text" : Number($2("ex-msize").value)
        });
        await io.replaceBody(r.pkg);
        const rep = r.report;
        $2("ex-norm-out").innerHTML = `<span class="ok">\u0110\xE3 chu\u1EA9n h\xF3a ${rep.questions} c\xE2u</span>: \u0111\xE1nh s\u1ED1 l\u1EA1i ${rep.renumbered}, c\u0103n l\u1EA1i ph\u01B0\u01A1ng \xE1n ${rep.relaid}, \u0111\u1ED3ng b\u1ED9 ph\xF4ng/c\u1EE1 ch\u1EEF ${rep.retyped} \u0111o\u1EA1n.` + (rep.objects ? `<div class="warn">${rep.objects} c\xF4ng th\u1EE9c MathType d\u1EA1ng \u0111\u1ED1i t\u01B0\u1EE3ng ch\u01B0a \u0111\u1ED5i \u0111\u01B0\u1EE3c c\u1EE1 \u2014 h\xE3y chuy\u1EC3n sang c\xF4ng th\u1EE9c Word (tab C\xF4ng th\u1EE9c) r\u1ED3i chu\u1EA9n h\xF3a l\u1EA1i.</div>` : "") + (rep.skipped.length ? `<ul class="warn">${rep.skipped.slice(0, 8).map((s) => `<li>${esc12(s)}</li>`).join("")}</ul>` : "") + `<div class="muted">Ho\xE0n t\xE1c b\u1EB1ng Ctrl/Cmd+Z (Word coi \u0111\xE2y l\xE0 m\u1ED9t thao t\xE1c thay th\u1EBF to\xE0n b\u1ED9 n\u1ED9i dung).</div>`;
      } catch (e3) {
        fail3($2("ex-norm-out"), e3);
      }
    });
    const options = () => ({
      shuffleQuestions: $2("ex-shq").checked,
      shuffleOptions: $2("ex-sho").checked,
      shuffleStatements: $2("ex-shs").checked,
      stripMarks: $2("ex-strip").checked,
      labelWord: $2("ex-word").value,
      renumber: $2("ex-renumber").value || "part",
      layout: $2("ex-layout").value === "false" ? "auto" : $2("ex-layout").value
    });
    const FORM_KEYS = Object.keys(DEFAULT_FORM), KEY_FORM = "texcraft-exam-form";
    const loadForm = () => {
      let saved = {};
      try {
        saved = JSON.parse(localStorage.getItem(KEY_FORM) || "{}");
      } catch (e3) {
        saved = {};
      }
      return __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_FORM), saved), Object.fromEntries(["mon", "lop", "thoiGian"].filter((k) => saved[k] === void 0).map((k) => [k, ""])));
    };
    const readForm = () => Object.fromEntries(FORM_KEYS.map((k) => [k, $2("ex-f-" + k).value]));
    const fillForm = (f) => FORM_KEYS.forEach((k) => {
      var _a8;
      $2("ex-f-" + k).value = (_a8 = f[k]) != null ? _a8 : "";
    });
    const saveForm = () => {
      try {
        localStorage.setItem(KEY_FORM, JSON.stringify(readForm()));
      } catch (e3) {
      }
    };
    fillForm(loadForm());
    FORM_KEYS.forEach((k) => $2("ex-f-" + k).addEventListener("input", saveForm));
    $2("ex-f-reset").addEventListener("click", () => {
      fillForm(__spreadProps(__spreadValues({}, DEFAULT_FORM), { mon: "", lop: "", thoiGian: "" }));
      saveForm();
    });
    $2("ex-f-insert").addEventListener("click", async () => {
      const out = $2("ex-shuffle-out");
      try {
        await io.replaceSelection(simplePackage(examHeaderXml(readForm(), codeList(1)[0])));
        out.innerHTML = '<span class="ok">\u0110\xE3 ch\xE8n kh\u1ED1i ti\xEAu \u0111\u1EC1 t\u1EA1i con tr\u1ECF.</span>';
      } catch (e3) {
        fail3(out, e3);
      }
    });
    const decorate = (pkg, code) => {
      let out = pkg;
      if ($2("ex-h-title").checked) out = prependToBody(out, examHeaderXml(readForm(), code));
      if ($2("ex-h-end").checked) out = appendToBody(out, examEndXml());
      return out;
    };
    $2("ex-shuffle").addEventListener("click", async () => {
      const out = $2("ex-shuffle-out"), bar = $2("ex-progress");
      try {
        const prep = await preparedBody(), pkg = prep.pkg;
        const codes = codeList(Number($2("ex-n").value)), n = codes.length, seed = Number($2("ex-seed").value);
        if (new Set(codes).size !== n) throw new Error("C\xE1c m\xE3 \u0111\u1EC1 b\u1ECB tr\xF9ng nhau: h\xE3y nh\u1EADp m\u1ED7i m\xE3 m\u1ED9t l\u1EA7n.");
        const target = $2("ex-target").value;
        const origA = analyze(parseBody(pkg));
        const sectionModes = sectionsUi(origA), qWord = origA.english ? "Question" : "C\xE2u";
        const versions = [];
        for (let i = 0; i < n; i++) {
          const code = codes[i];
          const r = shuffleVersion(pkg, __spreadProps(__spreadValues({}, options()), { seed: seed + i * 7919, code, sectionModes }));
          versions.push(__spreadValues({ code }, r));
          bar.hidden = false;
          bar.max = n;
          bar.value = i + 1;
        }
        const table3 = answerTable(versions.map((v) => ({ code: v.code, answers: v.answers })));
        lastCsv = table3.csv;
        lastVersions = { pkg, versions: versions.map((v) => ({ code: v.code, answers: v.answers, pkg: v.pkg })) };
        const sourceSelect = $2("ex-pptx-source");
        if (sourceSelect) {
          sourceSelect.innerHTML = '<option value="current">T\xE0i li\u1EC7u hi\u1EC7n t\u1EA1i (\u0111\u1EC1 g\u1ED1c)</option>' + versions.map((v) => `<option value="${esc12(v.code)}">M\xE3 \u0111\u1EC1 ${esc12(v.code)}</option>`).join("");
          const sourceBox = $2("ex-pptx-source-box");
          if (sourceBox) sourceBox.hidden = false;
        }
        $2("ex-copy").disabled = false;
        const unknown = versions[0].answers.filter((a) => a.value === null).length;
        let note = "";
        if (target === "new") {
          let opened = 0, fellBack = false;
          for (const v of versions) {
            const paper = decorate(v.pkg, v.code);
            const finalPkg = $2("ex-withkey").checked ? appendToBody(paper, answerTableXml(answerTable([{ code: v.code, answers: v.answers }]).groups, `\u0110\xC1P \xC1N \u2014 M\xC3 \u0110\u1EC0 ${v.code}`, qWord)) : paper;
            try {
              await io.openAsNewDocument(finalPkg, { footerPkg: $2("ex-h-footer").checked ? simplePackage(examFooterXml(v.code)) : null });
              opened++;
            } catch (e3) {
              await io.insertAtEnd(finalPkg);
              fellBack = true;
            }
          }
          note = fellBack ? `Word n\xE0y kh\xF4ng cho t\u1EA1o t\xE0i li\u1EC7u m\u1EDBi t\u1EEB add-in: \u0111\xE3 ch\xE8n ${versions.length - opened} \u0111\u1EC1 v\xE0o cu\u1ED1i t\xE0i li\u1EC7u hi\u1EC7n t\u1EA1i (m\u1EDF ${opened} t\xE0i li\u1EC7u m\u1EDBi).` : `\u0110\xE3 m\u1EDF ${versions.length} t\xE0i li\u1EC7u m\u1EDBi.`;
        } else if (target === "append") {
          for (const v of versions) await io.insertAtEnd(decorate(v.pkg, v.code));
          note = `\u0110\xE3 ch\xE8n ${versions.length} \u0111\u1EC1 v\xE0o cu\u1ED1i t\xE0i li\u1EC7u.`;
        }
        if (target !== "new" && ($2("ex-withkey").checked || target === "none")) {
          await io.insertAtEnd(wrap2(answerTableXml(table3.groups, "B\u1EA2NG \u0110\xC1P \xC1N C\xC1C M\xC3 \u0110\u1EC0", qWord)));
          note += " \u0110\xE3 ch\xE8n b\u1EA3ng \u0111\xE1p \xE1n chung (m\u1ED7i m\xE3 \u0111\u1EC1 m\u1ED9t c\u1ED9t).";
        }
        const warns = [...new Set(versions.flatMap((v) => [
          ...v.report.sharedParts.length ? [`Kh\xF4ng tr\u1ED9n th\u1EE9 t\u1EF1 c\xE2u \u1EDF: ${v.report.sharedParts.join("; ")} (c\xF3 c\xE2u d\xF9ng chung d\u1EEF ki\u1EC7n)`] : [],
          ...v.report.keptSections.length ? [`Gi\u1EEF nguy\xEAn th\u1EE9 t\u1EF1 c\xE2u \u1EDF: ${v.report.keptSections.join(", ")}`] : [],
          ...v.report.pinnedQuestions.length ? [`Gi\u1EEF nguy\xEAn ph\u01B0\u01A1ng \xE1n c\xE1c c\xE2u: ${[...new Set(v.report.pinnedQuestions)].join(", ")}`] : [],
          ...v.report.notes
        ]))];
        const origModel = parseBody(pkg);
        const unansweredChips = chips(unansweredQuestions(origModel, origA));
        out.innerHTML = `<p class="ok"><b>${versions.length} m\xE3 \u0111\u1EC1</b> \u0111\xE3 t\u1EA1o. ${esc12(note)}</p>` + prepNote(prep) + (unknown ? `<p class="warn">${unknown} c\xE2u ch\u01B0a nh\u1EADn \u0111\u01B0\u1EE3c \u0111\xE1p \xE1n (nh\xE3n \u0111\xFAng ch\u01B0a \u0111\u01B0\u1EE3c g\u1EA1ch ch\xE2n / t\xF4 \u0111\u1ECF): b\u1EA3ng \u0111\xE1p \xE1n ghi \u201C?\u201D.</p>${prep.changed ? "" : unansweredChips}` : "") + (warns.length ? `<ul class="warn">${warns.map((w) => `<li>${esc12(w)}</li>`).join("")}</ul>` : "") + answerPreview(table3.groups, qWord);
      } catch (e3) {
        fail3(out, e3);
      }
    });
    function answerPreview(groups, word2) {
      const mc = groups.filter((g) => g.kind === "mc"), codes = [...new Set(mc.map((g) => String(g.code)))];
      const at2 = new Map(mc.map((g) => [String(g.code), new Map(g.items.map((i) => [i.number, i.value]))]));
      const nums = [...new Set(mc.flatMap((g) => g.items.map((i) => i.number)))].sort((a, b) => a - b);
      return `<div class="scroll"><table><thead><tr><th>${esc12(word2)}</th>${codes.map((c) => `<th>${esc12(c)}</th>`).join("")}</tr></thead><tbody>${nums.map((n) => `<tr><td><b>${n}</b></td>${codes.map((c) => {
        var _a8;
        return `<td>${esc12((_a8 = at2.get(c).get(n)) != null ? _a8 : "?")}</td>`;
      }).join("")}</tr>`).join("")}</tbody></table></div>`;
    }
    $2("ex-key").addEventListener("click", async () => {
      const out = $2("ex-shuffle-out");
      try {
        const model = parseBody((await preparedBody()).pkg);
        const answers = answersOf(model, analyze(model));
        const table3 = answerTable([{ code: "", answers }]);
        lastCsv = table3.csv;
        $2("ex-copy").disabled = false;
        await io.insertAtEnd(wrap2(answerTableXml(table3.groups, "B\u1EA2NG \u0110\xC1P \xC1N", analyze(model).english ? "Question" : "C\xE2u")));
        out.innerHTML = '<span class="ok">\u0110\xE3 ch\xE8n b\u1EA3ng \u0111\xE1p \xE1n v\xE0o cu\u1ED1i t\xE0i li\u1EC7u.</span>';
      } catch (e3) {
        fail3(out, e3);
      }
    });
    function wrap2(bodyXml) {
      return `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${bodyXml}</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
    }
    async function exportVersions() {
      const pkg = lastVersions ? lastVersions.pkg : (await preparedBody()).pkg;
      const list3 = lastVersions ? lastVersions.versions.slice() : [];
      if (!list3.length) throw new Error("Ch\u01B0a c\xF3 m\xE3 \u0111\u1EC1 n\xE0o: b\u1EA5m \u201CT\u1EA1o \u0111\u1EC1\u201D tr\u01B0\u1EDBc (ho\u1EB7c d\xF9ng \u201CCh\xE8n b\u1EA3ng \u0111\xE1p \xE1n \u0111\u1EC1 hi\u1EC7n t\u1EA1i\u201D).");
      if ($2("ex-orig").checked) {
        const m = parseBody(pkg);
        list3.unshift({ code: $2("ex-origcode").value || "0000", answers: answersOf(m, analyze(m)) });
      }
      return list3;
    }
    $2("ex-export").addEventListener("click", async () => {
      const out = $2("ex-shuffle-out");
      try {
        const list3 = await exportVersions();
        const which = $2("ex-xlsx").value === "both" ? ["giasu", "texcraft"] : [$2("ex-xlsx").value];
        for (const t of which) {
          const blob2 = new Blob([answerXlsx(t, list3)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob2);
          a.download = `DapAn-${t === "giasu" ? "GIASU.AI.VN" : "TEXCRAFT"}.xlsx`;
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
        out.innerHTML = '<span class="ok">\u0110\xE3 t\u1EA1o file Excel.</span> <span class="muted">N\u1EBFu Word ch\u1EB7n t\u1EA3i xu\u1ED1ng, d\xF9ng \u201CSao ch\xE9p b\u1EA3ng\u201D r\u1ED3i d\xE1n v\xE0o Excel.</span>';
      } catch (e3) {
        fail3(out, e3);
      }
    });
    let qrState = { groups: [], index: 0, token: 0 };
    async function showQr() {
      const my = ++qrState.token, st = $2("ex-qr-status"), cv = $2("ex-qr-canvas");
      st.classList.remove("bad");
      st.textContent = "\u0110ang t\u1EA1o QR v\xE0 ki\u1EC3m tra \u0111\u1ECDc l\u1EA1i\u2026";
      try {
        const g = qrState.groups[qrState.index];
        const c = await renderQr(g.text, { vendorBase: "vendor/", logoUrl: "icon-80.png" });
        if (my !== qrState.token) return;
        cv.width = c.width;
        cv.height = c.height;
        cv.getContext("2d").drawImage(c, 0, 0);
        st.textContent = `QR ${qrState.index + 1}/${qrState.groups.length} \xB7 m\xE3 \u0111\u1EC1 ${g.codes.join(", ")} \xB7 \u0111\xE3 ki\u1EC3m tra \u0111\u1ECDc l\u1EA1i \u0111\xFAng` + (qrState.warnings.length ? ` \xB7 ${qrState.warnings.length} c\u1EA3nh b\xE1o (c\xE2u ch\u01B0a c\xF3 \u0111\xE1p \xE1n ghi X)` : "");
        $2("ex-qr-prev").disabled = qrState.index === 0;
        $2("ex-qr-next").disabled = qrState.index === qrState.groups.length - 1;
      } catch (e3) {
        if (my === qrState.token) {
          st.classList.add("bad");
          st.textContent = e3.message;
        }
      }
    }
    $2("ex-qr").addEventListener("click", async () => {
      const out = $2("ex-shuffle-out");
      try {
        const list3 = await exportVersions();
        const { payloads, warnings } = qrPayloads(list3);
        qrState = { groups: payloads, index: 0, token: qrState.token, warnings };
        $2("ex-qr-panel").hidden = false;
        await showQr();
      } catch (e3) {
        fail3(out, e3);
      }
    });
    $2("ex-qr-prev").addEventListener("click", () => {
      qrState.index = Math.max(0, qrState.index - 1);
      showQr();
    });
    $2("ex-qr-next").addEventListener("click", () => {
      qrState.index = Math.min(qrState.groups.length - 1, qrState.index + 1);
      showQr();
    });
    $2("ex-qr-save").addEventListener("click", async () => downloadBlob(await canvasToPng($2("ex-qr-canvas")), `QR-dap-an-${qrState.index + 1}.png`));
    $2("ex-qr-insert").addEventListener("click", async () => {
      try {
        const png = await canvasToPng($2("ex-qr-canvas"));
        await io.replaceSelection(makePicturePackage(png, { widthPt: 170, heightPt: 170, alt: "QR \u0111\xE1p \xE1n ch\u1EA5m thi giasu.ai.vn", name: "QR" }));
        $2("ex-qr-status").textContent = "\u0110\xE3 ch\xE8n m\xE3 QR v\xE0o Word t\u1EA1i con tr\u1ECF.";
      } catch (e3) {
        fail3($2("ex-shuffle-out"), e3);
      }
    });
    $2("ex-tsv").addEventListener("click", async () => {
      const out = $2("ex-shuffle-out");
      try {
        const list3 = await exportVersions();
        const t = $2("ex-xlsx").value === "both" ? "giasu" : $2("ex-xlsx").value;
        const text = answerTsv(t, list3);
        try {
          await navigator.clipboard.writeText(text);
          out.innerHTML = '<span class="ok">\u0110\xE3 sao ch\xE9p; d\xE1n v\xE0o \xF4 A1 c\u1EE7a Excel.</span>';
        } catch (e3) {
          out.innerHTML = `<textarea rows="8">${esc12(text)}</textarea>`;
        }
      } catch (e3) {
        fail3(out, e3);
      }
    });
    $2("ex-copy").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(lastCsv);
        $2("ex-copy").textContent = "\u0110\xE3 sao ch\xE9p";
      } catch (e3) {
        $2("ex-shuffle-out").innerHTML = `<textarea rows="6">${esc12(lastCsv)}</textarea>`;
      }
    });
    const swatch = () => {
      const t = PPTX_THEMES.find((x) => x.id === $2("ex-pptx-theme").value);
      const c = __spreadValues({ dark: "0F172A", primary: "3B82F6", accent: "4F46E5", paper: "F8FAFC", sky: "38BDF8" }, t.colors);
      $2("ex-pptx-swatch").innerHTML = ["dark", "primary", "accent", "sky", "paper"].map((k) => `<span title="${k}" style="display:inline-block;width:28px;height:18px;border-radius:4px;border:1px solid var(--line);background:#${c[k]}"></span>`).join("") + `<span class="muted" style="font-family:'${t.font}',serif;margin-left:6px">Aa Bb \u2014 C\xE2u 1. \u0110\xFAng</span>`;
    };
    $2("ex-pptx-theme").addEventListener("change", swatch);
    swatch();
    $2("ex-pptx-btn").addEventListener("click", async () => {
      var _a8, _b, _c;
      const out = $2("ex-pptx-out");
      try {
        out.innerHTML = '<span class="muted">\u0110ang \u0111\u1ECDc t\xE0i li\u1EC7u v\xE0 t\u1EA1o file PowerPoint\u2026</span>';
        let pkg;
        const srcCode = (_a8 = $2("ex-pptx-source")) == null ? void 0 : _a8.value;
        if (srcCode && srcCode !== "current" && lastVersions) {
          const found = lastVersions.versions.find((v) => v.code === srcCode);
          pkg = found ? found.pkg : (await preparedBody()).pkg;
        } else {
          pkg = (await preparedBody()).pkg;
        }
        const src = preparePptxSource(pkg);
        const title = $2("ex-pptx-title").value.trim() || "B\xC0I T\u1EACP TR\u1EAEC NGHI\u1EC6M";
        const buf = buildExamPptx(src.model, src.analysis, src.answers, {
          title,
          theme: ((_b = $2("ex-pptx-theme")) == null ? void 0 : _b.value) || "blue",
          pkg: src.pkg,
          nativeMath: ((_c = $2("ex-pptx-math")) == null ? void 0 : _c.checked) !== false
        });
        const blob2 = new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" });
        const dl = document.createElement("a");
        dl.href = URL.createObjectURL(blob2);
        const fileName = `${title.replace(/[\/\\?%*:|"<>]/g, "_") || "DeThi"}${srcCode && srcCode !== "current" ? `-${srcCode}` : ""}.pptx`;
        dl.download = fileName;
        document.body.appendChild(dl);
        dl.click();
        dl.remove();
        out.innerHTML = `<span class="ok">\u0110\xE3 t\u1EA1o b\xE0i tr\xECnh chi\u1EBFu <b>${esc12(fileName)}</b> th\xE0nh c\xF4ng!</span> <div class="muted">B\u1EA5m v\xE0o ph\u01B0\u01A1ng \xE1n A/B/C/D \u0111\u1EC3 hi\u1EC7n th\xF4ng b\xE1o \u0110\xFAng/Sai tr\u1EF1c ti\u1EBFp.</div>${buf.splitCount ? `<div class="muted">${buf.splitCount} c\xE2u c\xF3 \u0111\u1EC1 qu\xE1 d\xE0i n\xEAn \u0111\u01B0\u1EE3c t\xE1ch th\xE0nh 2 trang (\u0111\u1EC1 b\xE0i r\u1ED3i \u0111\u1EBFn c\xE1c ph\u01B0\u01A1ng \xE1n).</div>` : ""}${buf.missingPictures ? `<div class="warn">${buf.missingPictures} h\xECnh/\u0111\u1ED1i t\u01B0\u1EE3ng kh\xF4ng chuy\u1EC3n \u0111\u01B0\u1EE3c (\u0111\u1ECBnh d\u1EA1ng PowerPoint kh\xF4ng h\u1ED7 tr\u1EE3) \u2014 h\xE3y xem l\u1EA1i \u0111\u1EC1 g\u1ED1c.</div>` : ""}`;
      } catch (e3) {
        fail3(out, e3);
      }
    });
  }
  var esc12;
  var init_exam_ui = __esm({
    "taskpane/exam-ui.js"() {
      init_xlsx();
      init_exam();
      init_exam_header();
      init_ooxml();
      init_pptx();
      init_answer_qr();
      init_picture();
      esc12 = (s) => String(s != null ? s : "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
    }
  });

  // taskpane/mock-word.js
  var mock_word_exports = {};
  __export(mock_word_exports, {
    install: () => install
  });
  async function install(url) {
    const text = await (await fetch(url)).text();
    let pkg = text;
    const docPart = () => splitParts(pkg).get("/word/document.xml");
    const getDoc = () => /<pkg:xmlData>([\s\S]*)<\/pkg:xmlData>/.exec(docPart().body)[1];
    const setDoc = (xml) => {
      const p2 = docPart();
      pkg = pkg.replace(p2.body, () => p2.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + xml + b));
    };
    const bodyParts = () => {
      const d = getDoc();
      const m = /^([\s\S]*?<w:body>)([\s\S]*?)(<w:sectPr\/>)?(<\/w:body>[\s\S]*)$/.exec(d);
      const inner = m[2];
      const paras = [], re = /<w:p[ >][\s\S]*?<\/w:p>/g;
      let x;
      while (x = re.exec(inner)) paras.push(x[0]);
      return { head: m[1], tail: (m[3] || "") + m[4], paras };
    };
    const packageWith = (paras) => {
      const { head, tail } = bodyParts();
      const d = head + paras.join("") + tail;
      const p2 = docPart();
      return pkg.replace(p2.body, () => p2.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + d + b));
    };
    const state3 = { selection: [1, 2, 3] };
    const makeParagraph = (i) => ({
      index: i,
      getOoxml() {
        return { value: packageWith([bodyParts().paras[i]]) };
      },
      getRange() {
        return this;
      },
      expandTo() {
        return this;
      },
      insertOoxml(newPkg) {
        const parts = bodyParts();
        const nd = /<pkg:part pkg:name="\/word\/document.xml"[\s\S]*?<pkg:xmlData>([\s\S]*)<\/pkg:xmlData>/.exec(newPkg)[1];
        const inner = /<w:body>([\s\S]*?)(<w:sectPr\/>)?<\/w:body>/.exec(nd)[1];
        const repl = [], re = /<w:p[ >][\s\S]*?<\/w:p>/g;
        let x;
        while (x = re.exec(inner)) repl.push(x[0]);
        parts.paras.splice(i, 1, ...repl);
        setDoc(parts.head + parts.paras.join("") + parts.tail);
      },
      select() {
        state3.selection = [i];
      }
    });
    const collection = (idxFn) => ({ items: [], load() {
      this.items = idxFn().map(makeParagraph);
    } });
    window.Office = { onReady: async () => ({ host: "Mock" }), context: { host: void 0, diagnostics: { host: "mock", platform: "browser", version: "0" }, requirements: { isSetSupported: () => true } } };
    window.Word = {
      run: async (fn) => fn({
        document: {
          body: {
            getOoxml: () => ({ value: pkg }),
            paragraphs: collection(() => bodyParts().paras.map((_p, i) => i)),
            insertOoxml(newPkg, where) {
              const nd = /<pkg:part pkg:name="\/word\/document.xml"[\s\S]*?<pkg:xmlData>([\s\S]*)<\/pkg:xmlData>/.exec(newPkg)[1];
              const inner = /<w:body>([\s\S]*?)(<w:sectPr[\s\S]*<\/w:sectPr>|<w:sectPr\/>)?<\/w:body>/.exec(nd)[1];
              const cur = bodyParts();
              const blocks = inner;
              const paras = [], re = /<w:p[ >][\s\S]*?<\/w:p>/g;
              let x;
              while (x = re.exec(blocks)) paras.push(x[0]);
              setDoc(cur.head + (where === "Replace" ? paras : cur.paras.concat(paras)).join("") + cur.tail);
            }
          },
          getSelection: () => ({
            getRange() {
              return makeParagraph(state3.selection[0]);
            },
            paragraphs: collection(() => state3.selection.filter((i) => i < bodyParts().paras.length)),
            getOoxml: () => makeParagraph(state3.selection[0]).getOoxml(),
            insertOoxml: (newPkg) => makeParagraph(state3.selection[0]).insertOoxml(newPkg)
          })
        },
        application: { createDocument: () => ({ body: { insertOoxml() {
        } }, open() {
        } }) },
        sync: async () => {
        }
      })
    };
    window.__mockDoc = { select: (i) => {
      state3.selection = [i];
    }, get pkg() {
      return pkg;
    }, paragraphs: () => bodyParts().paras };
  }
  var init_mock_word = __esm({
    "taskpane/mock-word.js"() {
      init_ooxml();
    }
  });

  // taskpane/polyfills.js
  var def = (obj, name, fn) => {
    if (!obj[name]) Object.defineProperty(obj, name, { value: fn, writable: true, configurable: true });
  };
  if (typeof globalThis === "undefined") self.globalThis = self;
  def(Object, "fromEntries", function(it) {
    const o = {};
    for (const [k, v] of it) o[k] = v;
    return o;
  });
  def(Array.prototype, "flat", function flat(d = 1) {
    return this.reduce((a, v) => Array.isArray(v) && d > 0 ? a.concat(v.flat(d - 1)) : a.concat([v]), []);
  });
  def(Array.prototype, "flatMap", function(f, t) {
    return this.map(f, t).flat(1);
  });
  def(Array.prototype, "at", function(i) {
    i = Math.trunc(i) || 0;
    if (i < 0) i += this.length;
    return this[i];
  });
  def(String.prototype, "trimStart", String.prototype.trimLeft || function() {
    return this.replace(/^\s+/, "");
  });
  def(String.prototype, "trimEnd", String.prototype.trimRight || function() {
    return this.replace(/\s+$/, "");
  });
  def(String.prototype, "replaceAll", function(a, b) {
    return a instanceof RegExp ? this.replace(a, b) : this.split(a).join(b);
  });
  def(String.prototype, "at", function(i) {
    i = Math.trunc(i) || 0;
    if (i < 0) i += this.length;
    return this[i];
  });
  def(String.prototype, "matchAll", function* (re) {
    const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
    for (let m; m = r.exec(this); ) {
      yield m;
      if (m[0] === "") r.lastIndex++;
    }
  });
  def(Promise.prototype, "finally", function(f) {
    return this.then((v) => Promise.resolve(f()).then(() => v), (e3) => Promise.resolve(f()).then(() => {
      throw e3;
    }));
  });

  // taskpane/taskpane.js
  init_mt_settings();
  init_word_io();

  // src/latex-dict.js
  var ENTRIES = [["\\frac", "\\frac{|}{}", "Ph\xE2n s\u1ED1", "math"], ["\\dfrac", "\\dfrac{|}{}", "Ph\xE2n s\u1ED1 l\u1EDBn", "math"], ["\\tfrac", "\\tfrac{|}{}", "Ph\xE2n s\u1ED1 nh\u1ECF", "math"], ["\\cfrac", "\\cfrac{|}{}", "Ph\xE2n s\u1ED1 li\xEAn t\u1EE5c", "math"], ["\\sqrt", "\\sqrt{|}", "C\u0103n b\u1EADc hai", "math"], ["\\sum", "\\sum_{|}^{}", "T\u1ED5ng \\sum", "math"], ["\\prod", "\\prod_{|}^{}", "T\xEDch \\prod", "math"], ["\\coprod", "\\coprod_{|}^{}", "H\u1ECD r\u1EDDi \\coprod", "math"], ["\\int", "\\int_{|}^{} ", "T\xEDch ph\xE2n \\int", "math"], ["\\iint", "\\iint_{|}^{} ", "T\xEDch ph\xE2n k\xE9p \\iint", "math"], ["\\iiint", "\\iiint_{|}^{} ", "T\xEDch ph\xE2n ba \\iiint", "math"], ["\\oint", "\\oint_{|}^{} ", "T\xEDch ph\xE2n \u0111\u01B0\u1EDDng cong k\xEDn \\oint", "math"], ["\\lim", "\\lim_{|}", "Gi\u1EDBi h\u1EA1n \\lim", "math"], ["\\vec", "\\vec{|}", "Vect\u01A1 \\vec", "math"], ["\\overrightarrow", "\\overrightarrow{|}", "Vect\u01A1 d\xE0i \\overrightarrow", "math"], ["\\overleftarrow", "\\overleftarrow{|}", "Vect\u01A1 sang tr\xE1i \\overleftarrow", "math"], ["\\overline", "\\overline{|}", "G\u1EA1ch tr\xEAn \\overline", "math"], ["\\underline", "\\underline{|}", "G\u1EA1ch d\u01B0\u1EDBi \\underline", "math"], ["\\hat", "\\hat{|}", "D\u1EA5u m\u0169 \\hat", "math"], ["\\widehat", "\\widehat{|}", "D\u1EA5u m\u0169 g\xF3c \\widehat", "math"], ["\\tilde", "\\tilde{|}", "D\u1EA5u ng\xE3 \\tilde", "math"], ["\\widetilde", "\\widetilde{|}", "D\u1EA5u ng\xE3 r\u1ED9ng \\widetilde", "math"], ["\\bar", "\\bar{|}", "G\u1EA1ch ngang \\bar", "math"], ["\\text", "\\text{|}", "V\u0103n b\u1EA3n trong to\xE1n \\text", "format"], ["\\mathrm", "\\mathrm{|}", "Ch\u1EEF \u0111\u1EE9ng \\mathrm", "format"], ["\\mathbf", "\\mathbf{|}", "Ch\u1EEF \u0111\u1EADm to\xE1n \\mathbf", "format"], ["\\mathbb", "\\mathbb{|}", "T\u1EADp s\u1ED1 \\mathbb (R, N, Z, C, Q)", "format"], ["\\mathcal", "\\mathcal{|}", "Ch\u1EEF hoa th\u01B0 ph\xE1p \\mathcal", "format"], ["\\mathsf", "\\mathsf{|}", "Ch\u1EEF kh\xF4ng ch\xE2n \\mathsf", "format"], ["\\mathit", "\\mathit{|}", "Ch\u1EEF nghi\xEAng to\xE1n \\mathit", "format"], ["\\left", "\\left(|\\right)", "Ngo\u1EB7c t\u1EF1 co gi\xE3n \\left(\\right)", "math"], ["\\right", "\\right", "Ngo\u1EB7c \u0111\xF3ng t\u1EF1 co gi\xE3n \\right", "math"], ["\\bigl", "\\bigl(", "Ngo\u1EB7c m\u1EDF c\u1EE1 v\u1EEBa \\bigl", "math"], ["\\bigr", "\\bigr)", "Ngo\u1EB7c \u0111\xF3ng c\u1EE1 v\u1EEBa \\bigr", "math"], ["\\Bigl", "\\Bigl(", "Ngo\u1EB7c m\u1EDF c\u1EE1 l\u1EDBn \\Bigl", "math"], ["\\Bigr", "\\Bigr)", "Ngo\u1EB7c \u0111\xF3ng c\u1EE1 l\u1EDBn \\Bigr", "math"], ["\\displaystyle", "\\displaystyle ", "Hi\u1EC3n th\u1ECB c\xF4ng th\u1EE9c l\u1EDBn \\displaystyle", "math"], ["\\textstyle", "\\textstyle ", "Hi\u1EC3n th\u1ECB c\xF4ng th\u1EE9c th\u01B0\u1EDDng \\textstyle", "math"], ["\\binom", "\\binom{|1}{2}", "T\u1ED5 h\u1EE3p / Nh\u1ECB th\u1EE9c \\binom{n}{k}", "math"], ["\\begin{cases}", "\\begin{cases}\n  |\n\\end{cases}", "H\u1EC7 ph\u01B0\u01A1ng tr\xECnh cases", "env"], ["\\begin{matrix}", "\\begin{matrix}\n  |\n\\end{matrix}", "Ma tr\u1EADn kh\xF4ng ngo\u1EB7c matrix", "env"], ["\\begin{pmatrix}", "\\begin{pmatrix}\n  | &  \\\\ \n   &  \n\\end{pmatrix}", "Ma tr\u1EADn ngo\u1EB7c tr\xF2n pmatrix", "env"], ["\\begin{bmatrix}", "\\begin{bmatrix}\n  | &  \\\\ \n   &  \n\\end{bmatrix}", "Ma tr\u1EADn ngo\u1EB7c vu\xF4ng bmatrix", "env"], ["\\begin{vmatrix}", "\\begin{vmatrix}\n  | &  \\\\ \n   &  \n\\end{vmatrix}", "\u0110\u1ECBnh th\u1EE9c vmatrix", "env"], ["\\begin{Vmatrix}", "\\begin{Vmatrix}\n  | &  \\\\ \n   &  \n\\end{Vmatrix}", "Chu\u1EA9n ma tr\u1EADn Vmatrix", "env"], ["\\begin{aligned}", "\\begin{aligned}\n  |\n\\end{aligned}", "M\xF4i tr\u01B0\u1EDDng aligned trong c\xF4ng th\u1EE9c", "env"], ["\\to", "\\to ", "Ti\u1EBFn t\u1EDBi / suy ra \\to", "symbol"], ["\\rightarrow", "\\rightarrow ", "M\u0169i t\xEAn sang ph\u1EA3i \\rightarrow", "symbol"], ["\\leftarrow", "\\leftarrow ", "M\u0169i t\xEAn sang tr\xE1i \\leftarrow", "symbol"], ["\\Rightarrow", "\\Rightarrow ", "Suy ra \\Rightarrow", "symbol"], ["\\Leftarrow", "\\Leftarrow ", "M\u0169i t\xEAn k\xE9p sang tr\xE1i \\Leftarrow", "symbol"], ["\\Leftrightarrow", "\\Leftrightarrow ", "T\u01B0\u01A1ng \u0111\u01B0\u01A1ng \\Leftrightarrow", "symbol"], ["\\leftrightarrow", "\\leftrightarrow ", "M\u0169i t\xEAn hai chi\u1EC1u \\leftrightarrow", "symbol"], ["\\mapsto", "\\mapsto ", "\xC1nh x\u1EA1 \\mapsto", "symbol"], ["\\implies", "\\implies ", "Suy ra \\implies", "symbol"], ["\\iff", "\\iff ", "Khi v\xE0 ch\u1EC9 khi \\iff", "symbol"], ["\\le", "\\le ", "Nh\u1ECF h\u01A1n ho\u1EB7c b\u1EB1ng \\le", "symbol"], ["\\ge", "\\ge ", "L\u1EDBn h\u01A1n ho\u1EB7c b\u1EB1ng \\ge", "symbol"], ["\\leq", "\\leq ", "Nh\u1ECF h\u01A1n ho\u1EB7c b\u1EB1ng \\leq", "symbol"], ["\\geq", "\\geq ", "L\u1EDBn h\u01A1n ho\u1EB7c b\u1EB1ng \\geq", "symbol"], ["\\leqslant", "\\leqslant ", "Nh\u1ECF h\u01A1n ho\u1EB7c b\u1EB1ng chu\u1EA9n VN \\leqslant", "symbol"], ["\\geqslant", "\\geqslant ", "L\u1EDBn h\u01A1n ho\u1EB7c b\u1EB1ng chu\u1EA9n VN \\geqslant", "symbol"], ["\\neq", "\\neq ", "Kh\xE1c / Kh\xF4ng b\u1EB1ng \\neq", "symbol"], ["\\approx", "\\approx ", "X\u1EA5p x\u1EC9 \\approx", "symbol"], ["\\equiv", "\\equiv ", "\u0110\u1ED3ng nh\u1EA5t / T\u01B0\u01A1ng \u0111\u01B0\u01A1ng \\equiv", "symbol"], ["\\sim", "\\sim ", "\u0110\u1ED3ng d\u1EA1ng / T\u01B0\u01A1ng t\u1EF1 \\sim", "symbol"], ["\\simeq", "\\simeq ", "X\u1EA5p x\u1EC9 b\u1EB1ng \\simeq", "symbol"], ["\\cong", "\\cong ", "B\u1EB1ng nhau / \u0110\u1ED3ng d\u1EA1ng \\cong", "symbol"], ["\\propto", "\\propto ", "T\u1EC9 l\u1EC7 thu\u1EADn \\propto", "symbol"], ["\\in", "\\in ", "Thu\u1ED9c ph\u1EA7n t\u1EED \\in", "symbol"], ["\\notin", "\\notin ", "Kh\xF4ng thu\u1ED9c \\notin", "symbol"], ["\\ni", "\\ni ", "Ch\u1EE9a ph\u1EA7n t\u1EED \\ni", "symbol"], ["\\subset", "\\subset ", "T\u1EADp con \\subset", "symbol"], ["\\supset", "\\supset ", "Ch\u1EE9a t\u1EADp con \\supset", "symbol"], ["\\subseteq", "\\subseteq ", "T\u1EADp con ho\u1EB7c b\u1EB1ng \\subseteq", "symbol"], ["\\supseteq", "\\supseteq ", "Ch\u1EE9a ho\u1EB7c b\u1EB1ng \\supseteq", "symbol"], ["\\cap", "\\cap ", "Giao hai t\u1EADp h\u1EE3p \\cap", "symbol"], ["\\cup", "\\cup ", "H\u1EE3p hai t\u1EADp h\u1EE3p \\cup", "symbol"], ["\\setminus", "\\setminus ", "Hi\u1EC7u hai t\u1EADp h\u1EE3p \\setminus", "symbol"], ["\\emptyset", "\\emptyset ", "T\u1EADp r\u1ED7ng \\emptyset", "symbol"], ["\\varnothing", "\\varnothing ", "T\u1EADp r\u1ED7ng \\varnothing", "symbol"], ["\\forall", "\\forall ", "V\u1EDBi m\u1ECDi \\forall", "symbol"], ["\\exists", "\\exists ", "T\u1ED3n t\u1EA1i \\exists", "symbol"], ["\\nexists", "\\nexists ", "Kh\xF4ng t\u1ED3n t\u1EA1i \\nexists", "symbol"], ["\\neg", "\\neg ", "Ph\u1EE7 \u0111\u1ECBnh \\neg", "symbol"], ["\\land", "\\land ", "V\xE0 (h\u1ED9i) \\land", "symbol"], ["\\lor", "\\lor ", "Ho\u1EB7c (tuy\u1EC3n) \\lor", "symbol"], ["\\perp", "\\perp ", "Vu\xF4ng g\xF3c \\perp", "symbol"], ["\\parallel", "\\parallel ", "Song song \\parallel", "symbol"], ["\\angle", "\\angle ", "G\xF3c \\angle", "symbol"], ["\\triangle", "\\triangle ", "Tam gi\xE1c \\triangle", "symbol"], ["\\pm", "\\pm ", "C\u1ED9ng tr\u1EEB \\pm", "symbol"], ["\\mp", "\\mp ", "Tr\u1EEB c\u1ED9ng \\mp", "symbol"], ["\\times", "\\times ", "Ph\xE9p nh\xE2n \\times", "symbol"], ["\\cdot", "\\cdot ", "D\u1EA5u nh\xE2n ch\u1EA5m \\cdot", "symbol"], ["\\div", "\\div ", "Ph\xE9p chia \\div", "symbol"], ["\\circ", "\\circ ", "D\u1EA5u \u0111\u1ED9 / H\u1EE3p th\xE0nh \\circ", "symbol"], ["\\bullet", "\\bullet ", "D\u1EA5u ch\u1EA5m tr\xF2n l\u1EDBn \\bullet", "symbol"], ["\\star", "\\star ", "Ng\xF4i sao \\star", "symbol"], ["\\ast", "\\ast ", "D\u1EA5u hoa th\u1ECB \\ast", "symbol"], ["\\degree", "^\\circ", "\u0110\u1ED9 g\xF3c / nhi\u1EC7t \u0111\u1ED9 ^\\circ", "symbol"], ["\\infty", "\\infty", "V\xF4 c\u1EF1c \\infty", "symbol"], ["\\dots", "\\dots", "D\u1EA5u ba ch\u1EA5m \\dots", "symbol"], ["\\ldots", "\\ldots", "D\u1EA5u ba ch\u1EA5m d\u01B0\u1EDBi \\ldots", "symbol"], ["\\cdots", "\\cdots", "D\u1EA5u ba ch\u1EA5m gi\u1EEFa \\cdots", "symbol"], ["\\vdots", "\\vdots", "D\u1EA5u ba ch\u1EA5m d\u1ECDc \\vdots", "symbol"], ["\\ddots", "\\ddots", "D\u1EA5u ba ch\u1EA5m ch\xE9o \\ddots", "symbol"], ["\\partial", "\\partial ", "\u0110\u1EA1o h\xE0m ri\xEAng \\partial", "symbol"], ["\\nabla", "\\nabla ", "To\xE1n t\u1EED Nabla \\nabla", "symbol"], ["\\prime", "\\prime", "D\u1EA5u ph\u1EA9y \u0111\u1EA1o h\xE0m \\prime", "symbol"], ["\\sin", "\\sin ", "H\xE0m sin \\sin", "math"], ["\\cos", "\\cos ", "H\xE0m cos \\cos", "math"], ["\\tan", "\\tan ", "H\xE0m tan \\tan", "math"], ["\\cot", "\\cot ", "H\xE0m cot \\cot", "math"], ["\\arcsin", "\\arcsin ", "H\xE0m arcsin", "math"], ["\\arccos", "\\arccos ", "H\xE0m arccos", "math"], ["\\arctan", "\\arctan ", "H\xE0m arctan", "math"], ["\\sinh", "\\sinh ", "H\xE0m hyperbolic sinh", "math"], ["\\cosh", "\\cosh ", "H\xE0m hyperbolic cosh", "math"], ["\\tanh", "\\tanh ", "H\xE0m hyperbolic tanh", "math"], ["\\ln", "\\ln ", "Logarit t\u1EF1 nhi\xEAn ln", "math"], ["\\log", "\\log_{|} ", "Logarit \\log", "math"], ["\\lg", "\\lg ", "Logarit th\u1EADp ph\xE2n lg", "math"], ["\\exp", "\\exp ", "H\xE0m m\u0169 exp", "math"], ["\\det", "\\det ", "\u0110\u1ECBnh th\u1EE9c det", "math"], ["\\gcd", "\\gcd ", "\u01AF\u1EDBc chung l\u1EDBn nh\u1EA5t gcd", "math"], ["\\max", "\\max_{|} ", "Gi\xE1 tr\u1ECB l\u1EDBn nh\u1EA5t max", "math"], ["\\min", "\\min_{|} ", "Gi\xE1 tr\u1ECB nh\u1ECF nh\u1EA5t min", "math"], ["\\sup", "\\sup ", "C\u1EADn tr\xEAn \u0111\xFAng sup", "math"], ["\\inf", "\\inf ", "C\u1EADn d\u01B0\u1EDBi \u0111\xFAng inf", "math"], ["\\deg", "\\deg ", "B\u1EADc \u0111a th\u1EE9c deg", "math"], ["\\dim", "\\dim ", "S\u1ED1 chi\u1EC1u dim", "math"], ["\\ker", "\\ker ", "H\u1EA1t nh\xE2n ker", "math"], ["\\hom", "\\hom ", "\u0110\u1ED3ng c\u1EA5u hom", "math"], ["\\arg", "\\arg ", "Argument s\u1ED1 ph\u1EE9c arg", "math"], ["\\alpha", "\\alpha", "K\xED hi\u1EC7u alpha \\alpha", "symbol"], ["\\beta", "\\beta", "K\xED hi\u1EC7u beta \\beta", "symbol"], ["\\gamma", "\\gamma", "K\xED hi\u1EC7u gamma \\gamma", "symbol"], ["\\delta", "\\delta", "K\xED hi\u1EC7u delta \\delta", "symbol"], ["\\epsilon", "\\epsilon", "K\xED hi\u1EC7u epsilon \\epsilon", "symbol"], ["\\varepsilon", "\\varepsilon", "K\xED hi\u1EC7u varepsilon \\varepsilon", "symbol"], ["\\zeta", "\\zeta", "K\xED hi\u1EC7u zeta \\zeta", "symbol"], ["\\eta", "\\eta", "K\xED hi\u1EC7u eta \\eta", "symbol"], ["\\theta", "\\theta", "K\xED hi\u1EC7u theta \\theta", "symbol"], ["\\vartheta", "\\vartheta", "K\xED hi\u1EC7u vartheta \\vartheta", "symbol"], ["\\iota", "\\iota", "K\xED hi\u1EC7u iota \\iota", "symbol"], ["\\kappa", "\\kappa", "K\xED hi\u1EC7u kappa \\kappa", "symbol"], ["\\lambda", "\\lambda", "K\xED hi\u1EC7u lambda \\lambda", "symbol"], ["\\mu", "\\mu", "K\xED hi\u1EC7u mu \\mu", "symbol"], ["\\nu", "\\nu", "K\xED hi\u1EC7u nu \\nu", "symbol"], ["\\xi", "\\xi", "K\xED hi\u1EC7u xi \\xi", "symbol"], ["\\pi", "\\pi", "K\xED hi\u1EC7u pi \\pi", "symbol"], ["\\varpi", "\\varpi", "K\xED hi\u1EC7u varpi \\varpi", "symbol"], ["\\rho", "\\rho", "K\xED hi\u1EC7u rho \\rho", "symbol"], ["\\varrho", "\\varrho", "K\xED hi\u1EC7u varrho \\varrho", "symbol"], ["\\sigma", "\\sigma", "K\xED hi\u1EC7u sigma \\sigma", "symbol"], ["\\varsigma", "\\varsigma", "K\xED hi\u1EC7u varsigma \\varsigma", "symbol"], ["\\tau", "\\tau", "K\xED hi\u1EC7u tau \\tau", "symbol"], ["\\upsilon", "\\upsilon", "K\xED hi\u1EC7u upsilon \\upsilon", "symbol"], ["\\phi", "\\phi", "K\xED hi\u1EC7u phi \\phi", "symbol"], ["\\varphi", "\\varphi", "K\xED hi\u1EC7u varphi \\varphi", "symbol"], ["\\chi", "\\chi", "K\xED hi\u1EC7u chi \\chi", "symbol"], ["\\psi", "\\psi", "K\xED hi\u1EC7u psi \\psi", "symbol"], ["\\omega", "\\omega", "K\xED hi\u1EC7u omega \\omega", "symbol"], ["\\Gamma", "\\Gamma", "K\xED hi\u1EC7u Gamma hoa \\Gamma", "symbol"], ["\\Delta", "\\Delta", "K\xED hi\u1EC7u Delta hoa \\Delta", "symbol"], ["\\Theta", "\\Theta", "K\xED hi\u1EC7u Theta hoa \\Theta", "symbol"], ["\\Lambda", "\\Lambda", "K\xED hi\u1EC7u Lambda hoa \\Lambda", "symbol"], ["\\Xi", "\\Xi", "K\xED hi\u1EC7u Xi hoa \\Xi", "symbol"], ["\\Pi", "\\Pi", "K\xED hi\u1EC7u Pi hoa \\Pi", "symbol"], ["\\Sigma", "\\Sigma", "K\xED hi\u1EC7u Sigma hoa \\Sigma", "symbol"], ["\\Upsilon", "\\Upsilon", "K\xED hi\u1EC7u Upsilon hoa \\Upsilon", "symbol"], ["\\Phi", "\\Phi", "K\xED hi\u1EC7u Phi hoa \\Phi", "symbol"], ["\\Psi", "\\Psi", "K\xED hi\u1EC7u Psi hoa \\Psi", "symbol"], ["\\Omega", "\\Omega", "K\xED hi\u1EC7u Omega hoa \\Omega", "symbol"], ["\\xrightarrow", "\\xrightarrow{|}", "M\u0169i t\xEAn c\xF3 ch\u1EEF tr\xEAn \\xrightarrow", "math"], ["\\xleftarrow", "\\xleftarrow{|}", "M\u0169i t\xEAn tr\xE1i c\xF3 ch\u1EEF \\xleftarrow", "math"], ["\\overset", "\\overset{|}{}", "Ch\u1EEF tr\xEAn k\xFD hi\u1EC7u \\overset", "math"], ["\\underset", "\\underset{|}{}", "Ch\u1EEF d\u01B0\u1EDBi k\xFD hi\u1EC7u \\underset", "math"], ["\\overbrace", "\\overbrace{|}^{}", "Ngo\u1EB7c nh\u1ECDn tr\xEAn \\overbrace", "math"], ["\\underbrace", "\\underbrace{|}_{}", "Ngo\u1EB7c nh\u1ECDn d\u01B0\u1EDBi \\underbrace", "math"], ["\\boxed", "\\boxed{|}", "Khung ch\u1EEF nh\u1EADt \\boxed", "math"], ["\\operatorname", "\\operatorname{|}", "T\xEAn h\xE0m tu\u1EF3 \xFD \\operatorname", "format"], ["\\begin{array}", "\\begin{array}{c}\n  |\n\\end{array}", "B\u1EA3ng/ h\u1EC7 array", "env"]];
  var ALIASES = { "frac": ["phan", "ps", "phanso", "frac", "dfrac"], "sqrt": ["can", "canbachai", "sqrt"], "cases": ["he", "hephuongtrinh", "cases"], "matrix": ["matran", "matrix"], "to": ["den", "tien", "tienve", "to", "muiten"], "le": ["nhohon", "nhohonhoacbang", "le", "leq"], "ge": ["lonhon", "lonhonhoacbang", "ge", "geq"], "pm": ["congtru", "pm", "plusminus"], "mp": ["trucong", "mp"], "neq": ["khac", "khongbang", "neq"], "approx": ["xapxi", "approx"], "equiv": ["dongnhat", "tuongduong", "equiv"], "pmatrix": ["matranngoactron", "pmatrix", "pm"], "bmatrix": ["matranngoacvuong", "bmatrix", "bm"], "vmatrix": ["dinhthuc", "vmatrix", "vm"] };

  // src/latex-suggest.js
  var EXTRA_ALIASES = {
    sum: ["tong", "sigma"],
    prod: ["tich", "pi"],
    int: ["tichphan", "tp"],
    lim: ["gioihan", "gh"],
    infty: ["vocuc", "vc", "infinity"],
    sqrt: ["can", "canbachai", "cbh"],
    frac: ["phan", "ps", "phanso"],
    vec: ["vecto", "vt"],
    overrightarrow: ["vectodai"],
    widehat: ["goc", "mu"],
    angle: ["goc"],
    perp: ["vuonggoc", "vg"],
    parallel: ["songsong", "ss"],
    Rightarrow: ["suyra", "keotheo"],
    Leftrightarrow: ["tuongduong", "td"],
    in: ["thuoc"],
    notin: ["khongthuoc"],
    subset: ["tapcon"],
    cup: ["hop"],
    cap: ["giao"],
    forall: ["vimoi", "moi"],
    exists: ["tontai"],
    leq: ["nhohonbang", "lebang"],
    geq: ["lonhonbang", "gebang"],
    neq: ["khac"],
    approx: ["xapxi"],
    pm: ["congtru"],
    alpha: ["anpha"],
    beta: ["beta"],
    gamma: ["gama"],
    delta: ["denta"],
    Delta: ["denta"],
    pi: ["pi"],
    theta: ["theta"],
    lambda: ["lamda"],
    omega: ["omega"],
    varphi: ["phi"],
    cases: ["he", "hephuongtrinh"],
    pmatrix: ["matran"],
    text: ["chu", "vanban"],
    mathbb: ["tapso"],
    circ: ["do"],
    boxed: ["khung"],
    overline: ["gachtren"],
    underline: ["gachduoi"]
  };
  var stripAccents = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
  var coreName = (label) => {
    const m = /^\\begin\{([^}]+)\}$/.exec(label);
    return m ? m[1] : label.replace(/^\\/, "");
  };
  var aliasesOf = (name) => [...ALIASES[name] || [], ...EXTRA_ALIASES[name] || [], ...ALIASES[name.replace(/\*$/, "")] || []];
  function suggest(query, { usage = {}, limit = 9, bare = false } = {}) {
    const q = String(query || "").replace(/^\\/, "").toLowerCase();
    const qa = stripAccents(q);
    const boost = (label) => Math.min(25, (usage[label] || 0) * 3);
    if (!q) {
      const used = ENTRIES.filter((e3) => usage[e3[0]]).sort((a, b) => usage[b[0]] - usage[a[0]]);
      const common = ["\\frac", "\\sqrt", "\\sum", "\\int", "\\lim", "\\left", "\\alpha", "\\infty", "\\begin{cases}"];
      return [...used, ...common.map((c) => ENTRIES.find((e3) => e3[0] === c)).filter(Boolean)].filter((e3, i, a) => a.indexOf(e3) === i).slice(0, limit);
    }
    const scored = [];
    for (const entry of ENTRIES) {
      const [label, , detail] = entry;
      const name = coreName(label), lname = name.toLowerCase();
      let score = 0;
      if (lname === q) score = 200;
      else if (lname.startsWith(q)) score = 120 - (lname.length - q.length);
      else {
        const al = aliasesOf(name).map((a) => a.toLowerCase());
        if (al.includes(q) || al.includes(qa)) score = 110;
        else if (al.some((a) => a.startsWith(qa))) score = 80;
        else if (!bare) {
          const d = stripAccents(detail);
          if (d.startsWith(qa)) score = 50;
          else if (d.includes(qa)) score = 30;
          else if (lname.includes(q) && q.length >= 3) score = 25;
        }
      }
      if (score) scored.push({ entry, score: score + boost(label) });
    }
    scored.sort((a, b) => b.score - a.score || a.entry[0].length - b.entry[0].length);
    return scored.slice(0, limit).map((s) => s.entry);
  }
  function expandSnippet(snippet) {
    const bar = snippet.indexOf("|");
    const text = snippet.replace("|", "");
    const caret = bar < 0 ? text.length : bar;
    return { text, caret };
  }
  function tokenAt(text, caret) {
    const before = text.slice(0, caret);
    let m = /\\(?:begin\{[A-Za-z*]*|[A-Za-z]*)$/.exec(before);
    if (m) return { start: m.index, token: m[0], bare: false };
    m = /(?:^|[^A-Za-z\\])([A-Za-z]{3,})$/.exec(before);
    if (m) return { start: before.length - m[1].length, token: m[1], bare: true };
    return null;
  }
  function nextStop(text, caret, backward = false) {
    if (backward) {
      for (let i = caret - 2; i >= 0; i--) if (text[i] === "{" && text[i + 1] === "}" || text[i] === "[" && text[i + 1] === "]") return i + 1;
      return -1;
    }
    for (let i = caret; i < text.length - 1; i++) {
      if (text[i] === "{" && text[i + 1] === "}" || text[i] === "[" && text[i + 1] === "]") {
        if (i + 1 === caret) continue;
        return i + 1;
      }
    }
    return -1;
  }
  var GLYPHS = {
    alpha: "\u03B1",
    beta: "\u03B2",
    gamma: "\u03B3",
    delta: "\u03B4",
    epsilon: "\u03B5",
    varepsilon: "\u03F5",
    zeta: "\u03B6",
    eta: "\u03B7",
    theta: "\u03B8",
    vartheta: "\u03D1",
    iota: "\u03B9",
    kappa: "\u03BA",
    lambda: "\u03BB",
    mu: "\u03BC",
    nu: "\u03BD",
    xi: "\u03BE",
    pi: "\u03C0",
    rho: "\u03C1",
    sigma: "\u03C3",
    tau: "\u03C4",
    upsilon: "\u03C5",
    phi: "\u03D5",
    varphi: "\u03C6",
    chi: "\u03C7",
    psi: "\u03C8",
    omega: "\u03C9",
    Gamma: "\u0393",
    Delta: "\u0394",
    Theta: "\u0398",
    Lambda: "\u039B",
    Xi: "\u039E",
    Pi: "\u03A0",
    Sigma: "\u03A3",
    Phi: "\u03A6",
    Psi: "\u03A8",
    Omega: "\u03A9",
    infty: "\u221E",
    leq: "\u2264",
    le: "\u2264",
    geq: "\u2265",
    ge: "\u2265",
    neq: "\u2260",
    approx: "\u2248",
    equiv: "\u2261",
    sim: "\u223C",
    pm: "\xB1",
    mp: "\u2213",
    times: "\xD7",
    cdot: "\u22C5",
    div: "\xF7",
    in: "\u2208",
    notin: "\u2209",
    ni: "\u220B",
    subset: "\u2282",
    supset: "\u2283",
    subseteq: "\u2286",
    supseteq: "\u2287",
    cup: "\u222A",
    cap: "\u2229",
    emptyset: "\u2205",
    forall: "\u2200",
    exists: "\u2203",
    nabla: "\u2207",
    partial: "\u2202",
    angle: "\u2220",
    perp: "\u22A5",
    parallel: "\u2225",
    to: "\u2192",
    rightarrow: "\u2192",
    leftarrow: "\u2190",
    leftrightarrow: "\u2194",
    Rightarrow: "\u21D2",
    Leftarrow: "\u21D0",
    Leftrightarrow: "\u21D4",
    mapsto: "\u21A6",
    ldots: "\u2026",
    cdots: "\u22EF",
    vdots: "\u22EE",
    ddots: "\u22F1",
    sum: "\u2211",
    prod: "\u220F",
    int: "\u222B",
    iint: "\u222C",
    iiint: "\u222D",
    oint: "\u222E",
    sqrt: "\u221A",
    degree: "\xB0",
    circ: "\u2218",
    bullet: "\u2219",
    therefore: "\u2234",
    because: "\u2235",
    wedge: "\u2227",
    vee: "\u2228",
    neg: "\xAC",
    ell: "\u2113",
    hbar: "\u210F",
    prime: "\u2032",
    star: "\u2605",
    triangle: "\u25B3",
    square: "\u25A1"
  };
  var glyphOf = (label) => GLYPHS[label.replace(/^\\/, "")] || "";

  // taskpane/latex-autocomplete.js
  var USAGE_KEY = "texcraft-addin-latex-usage";
  var PAIRS2 = { "(": ")", "[": "]", "{": "}" };
  var CLOSERS = /* @__PURE__ */ new Set([")", "]", "}"]);
  var esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  function caretCoordinates(el, pos) {
    const div = document.createElement("div");
    const cs = getComputedStyle(el);
    for (const p2 of ["boxSizing", "width", "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "padding", "borderWidth", "borderStyle", "whiteSpace", "wordWrap", "tabSize"]) div.style[p2] = cs[p2];
    div.style.position = "absolute";
    div.style.visibility = "hidden";
    div.style.whiteSpace = "pre-wrap";
    div.style.wordWrap = "break-word";
    div.style.top = "0";
    div.style.left = "-9999px";
    div.textContent = el.value.slice(0, pos);
    const span = document.createElement("span");
    span.textContent = el.value.slice(pos) || ".";
    div.appendChild(span);
    document.body.appendChild(div);
    const r = el.getBoundingClientRect();
    const x = r.left + span.offsetLeft - el.scrollLeft, y = r.top + span.offsetTop - el.scrollTop + (parseFloat(cs.lineHeight) || 16);
    div.remove();
    return { x, y };
  }
  function attachLatexAutocomplete(field5, { onChange = () => {
  } } = {}) {
    if (!field5) return;
    let usage = {};
    try {
      usage = JSON.parse(localStorage.getItem(USAGE_KEY) || "{}") || {};
    } catch (e3) {
      usage = {};
    }
    const popup = document.createElement("div");
    popup.className = "ac-popup";
    popup.hidden = true;
    document.body.appendChild(popup);
    let items = [], index = 0, token = null, composing = false;
    const hide = () => {
      popup.hidden = true;
      items = [];
      token = null;
    };
    const fire = () => {
      field5.dispatchEvent(new Event("input", { bubbles: true }));
      onChange();
    };
    const render = () => {
      popup.innerHTML = items.map((e3, i) => `<div class="ac-item${i === index ? " sel" : ""}" data-i="${i}"><span class="ac-glyph">${esc(glyphOf(e3[0]))}</span><code>${esc(e3[0])}</code><span class="ac-desc">${esc(e3[2])}</span></div>`).join("") + '<div class="ac-hint">\u2191\u2193 ch\u1ECDn \xB7 Tab/Enter nh\u1EADn \xB7 Esc \u0111\xF3ng</div>';
      const sel = popup.querySelector(".sel");
      if (sel) sel.scrollIntoView({ block: "nearest" });
    };
    const place2 = () => {
      const { x, y } = caretCoordinates(field5, token ? token.start : field5.selectionStart);
      popup.hidden = false;
      const w = popup.offsetWidth || 260, h = popup.offsetHeight || 200;
      popup.style.left = Math.max(4, Math.min(x, window.innerWidth - w - 4)) + "px";
      popup.style.top = (y + h > window.innerHeight - 4 ? Math.max(4, y - h - 22) : y) + "px";
    };
    const show = (force = false) => {
      if (composing) return;
      const caret = field5.selectionStart;
      if (field5.selectionEnd !== caret) {
        hide();
        return;
      }
      const t = tokenAt(field5.value, caret);
      if (!t && !force) {
        hide();
        return;
      }
      token = t || { start: caret, token: "", bare: false };
      const list3 = suggest(token.token, { usage, bare: token.bare });
      if (!list3.length || token.bare && !force && list3[0] && list3[0][0].toLowerCase().replace(/^\\/, "") === token.token.toLowerCase() && list3.length === 1 && false) {
        hide();
        return;
      }
      items = list3;
      index = 0;
      render();
      place2();
    };
    const accept = (i = index) => {
      const entry = items[i];
      if (!entry || !token) return false;
      const { text, caret } = expandSnippet(entry[1]);
      const v = field5.value, end = field5.selectionStart;
      const before = v.slice(0, token.start), after = v.slice(end);
      field5.value = before + text + after;
      const pos = before.length + caret;
      field5.setSelectionRange(pos, pos);
      usage[entry[0]] = (usage[entry[0]] || 0) + 1;
      try {
        localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
      } catch (e3) {
      }
      hide();
      fire();
      field5.focus();
      return true;
    };
    field5.addEventListener("compositionstart", () => {
      composing = true;
    });
    field5.addEventListener("compositionend", () => {
      composing = false;
      show();
    });
    field5.addEventListener("input", (ev) => {
      if (!ev.isTrusted && popup.hidden) return;
      show();
    });
    field5.addEventListener("click", () => hide());
    field5.addEventListener("blur", () => setTimeout(hide, 150));
    field5.addEventListener("keydown", (ev) => {
      if (composing) return;
      if (!popup.hidden && items.length) {
        if (ev.key === "ArrowDown") {
          ev.preventDefault();
          index = (index + 1) % items.length;
          render();
          return;
        }
        if (ev.key === "ArrowUp") {
          ev.preventDefault();
          index = (index - 1 + items.length) % items.length;
          render();
          return;
        }
        if (ev.key === "Enter" && (ev.ctrlKey || ev.metaKey)) {
          hide();
          return;
        }
        if (ev.key === "Enter" || ev.key === "Tab") {
          ev.preventDefault();
          accept();
          return;
        }
        if (ev.key === "Escape") {
          ev.preventDefault();
          hide();
          return;
        }
      }
      if (ev.ctrlKey && ev.code === "Space") {
        ev.preventDefault();
        show(true);
        return;
      }
      if (ev.key === "Tab" && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
        const to = nextStop(field5.value, field5.selectionStart, ev.shiftKey);
        if (to >= 0) {
          ev.preventDefault();
          field5.setSelectionRange(to, to);
        }
        return;
      }
      if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
      const { selectionStart: s, selectionEnd: e3, value: v } = field5;
      if (PAIRS2[ev.key]) {
        ev.preventDefault();
        const close = PAIRS2[ev.key];
        field5.value = v.slice(0, s) + ev.key + v.slice(s, e3) + close + v.slice(e3);
        const pos = s === e3 ? s + 1 : e3 + 2;
        field5.setSelectionRange(s === e3 ? pos : s + 1, s === e3 ? pos : e3 + 1);
        hide();
        fire();
        return;
      }
      if (CLOSERS.has(ev.key) && s === e3 && v[s] === ev.key) {
        ev.preventDefault();
        field5.setSelectionRange(s + 1, s + 1);
        return;
      }
      if (ev.key === "Backspace" && s === e3 && s > 0 && PAIRS2[v[s - 1]] === v[s]) {
        ev.preventDefault();
        field5.value = v.slice(0, s - 1) + v.slice(s + 1);
        field5.setSelectionRange(s - 1, s - 1);
        hide();
        fire();
      }
    });
    popup.addEventListener("mousedown", (ev) => {
      const row = ev.target.closest(".ac-item");
      if (row) {
        ev.preventDefault();
        accept(Number(row.dataset.i));
      }
    });
    window.addEventListener("scroll", hide, true);
  }

  // taskpane/editor-toolbar.js
  init_mathrender();
  var G = (id, label, icon, items) => ({ id, label, icon, items });
  var GROUPS = [
    G("struct", "\u0110\u1EA1i s\u1ED1", "\\sqrt{x}", [
      ["\\tfrac{a}{b}", "\\frac{@}{}", "Ph\xE2n s\u1ED1", "phan so frac"],
      ["\\sqrt{x}", "\\sqrt{@}", "C\u0103n b\u1EADc hai", "can sqrt"],
      ["\\sqrt[n]{x}", "\\sqrt[@]{}", "C\u0103n b\u1EADc n (\xF4 \u0111\u1EA7u: ch\u1EC9 s\u1ED1 n)", "can bac n"],
      ["x^{2}", "^{@}", "S\u1ED1 m\u0169", "mu luy thua"],
      ["x_{i}", "_{@}", "Ch\u1EC9 s\u1ED1 d\u01B0\u1EDBi", "chi so duoi"],
      ["x_{i}^{2}", "_{@}^{}", "Ch\u1EC9 s\u1ED1 d\u01B0\u1EDBi v\xE0 s\u1ED1 m\u0169", ""],
      ["\\left(x\\right)", "\\left( @ \\right)", "Ngo\u1EB7c tr\xF2n co gi\xE3n", "ngoac tron"],
      ["\\left[x\\right]", "\\left[ @ \\right]", "Ngo\u1EB7c vu\xF4ng co gi\xE3n", "ngoac vuong"],
      ["\\left\\{x\\right\\}", "\\left\\{ @ \\right\\}", "Ngo\u1EB7c nh\u1ECDn co gi\xE3n", "ngoac nhon tap hop"],
      ["\\left|x\\right|", "\\left| @ \\right|", "Gi\xE1 tr\u1ECB tuy\u1EC7t \u0111\u1ED1i", "tri tuyet doi abs"],
      ["\\overline{AB}", "\\overline{@}", "G\u1EA1ch tr\xEAn", "gach tren"],
      ["\\underline{x}", "\\underline{@}", "G\u1EA1ch d\u01B0\u1EDBi", "gach duoi"],
      ["\\boxed{x}", "\\boxed{@}", "Khung", "khung"],
      ["\\binom{n}{k}", "\\binom{@}{}", "T\u1ED5 h\u1EE3p", "to hop binom"],
      ["\\overbrace{x}^{n}", "\\overbrace{@}^{}", "Ngo\u1EB7c nh\u1ECDn tr\xEAn", ""],
      ["\\underbrace{x}_{n}", "\\underbrace{@}_{}", "Ngo\u1EB7c nh\u1ECDn d\u01B0\u1EDBi", ""]
    ]),
    G("calc", "Gi\u1EA3i t\xEDch", "\\int", [
      ["\\int", "\\int @ \\,\\mathrm{d}x", "T\xEDch ph\xE2n b\u1EA5t \u0111\u1ECBnh", "tich phan"],
      ["\\int_a^b", "\\int_{@}^{} \\,\\mathrm{d}x", "T\xEDch ph\xE2n x\xE1c \u0111\u1ECBnh", "tich phan xac dinh"],
      ["\\sum_{i}^{n}", "\\sum_{i=@}^{n}", "T\u1ED5ng", "tong sigma"],
      ["\\prod", "\\prod_{i=@}^{n}", "T\xEDch", "tich pi"],
      ["\\lim_{x\\to a}", "\\lim_{x \\to @}", "Gi\u1EDBi h\u1EA1n", "gioi han"],
      ["\\lim_{x\\to\\infty}", "\\lim_{x \\to +\\infty} @", "Gi\u1EDBi h\u1EA1n t\u1EA1i +\u221E", "gioi han vo cuc"],
      ["f'", "f'(@)", "\u0110\u1EA1o h\xE0m", "dao ham"],
      ["\\tfrac{d}{dx}", "\\frac{\\mathrm{d}}{\\mathrm{d}x} @", "d/dx", "dao ham"],
      ["\\left.f\\right|_a^b", "\\left. @ \\right|_{}^{}", "Th\u1EBF c\u1EADn (F(x)|\u2090\u1D47)", "the can"],
      ["\\log_a", "\\log_{@}", "Logarit c\u01A1 s\u1ED1 a", "logarit"],
      ["\\ln", "\\ln @", "Logarit t\u1EF1 nhi\xEAn", "ln"],
      ["\\lg", "\\lg @", "Logarit th\u1EADp ph\xE2n", "lg"],
      ["\\sin", "\\sin @", "sin", ""],
      ["\\cos", "\\cos @", "cos", ""],
      ["\\tan", "\\tan @", "tan", ""],
      ["\\cot", "\\cot @", "cot", ""],
      ["\\max", "\\max_{@}", "Gi\xE1 tr\u1ECB l\u1EDBn nh\u1EA5t", "max"],
      ["\\min", "\\min_{@}", "Gi\xE1 tr\u1ECB nh\u1ECF nh\u1EA5t", "min"],
      ["\\infty", "\\infty", "V\xF4 c\u1EF1c", "vo cuc"],
      ["\\to", "\\to ", "Ti\u1EBFn t\u1EDBi", "tien toi"],
      ["\\xrightarrow{n}", "\\xrightarrow{@}", "M\u0169i t\xEAn c\xF3 ch\u1EEF", ""]
    ]),
    G("system", "H\u1EC7 & ma tr\u1EADn", "\\{\\begin{smallmatrix}x\\\\y\\end{smallmatrix}", [
      ["\\scriptstyle\\begin{cases}a\\\\b\\end{cases}", "\\left\\{ \\begin{array}{l} @ \\\\ \\end{array} \\right.", "H\u1EC7 ph\u01B0\u01A1ng tr\xECnh (2 d\xF2ng)", "he phuong trinh cases"],
      ["\\scriptstyle\\left[\\begin{matrix}a\\\\b\\end{matrix}\\right.", "\\left[ \\begin{array}{l} @ \\\\ \\end{array} \\right.", "Ho\u1EB7c (ngo\u1EB7c vu\xF4ng, 2 d\xF2ng)", "hoac"],
      ["\\scriptstyle\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}", "\\left( \\begin{array}{cc} @ & \\\\ & \\end{array} \\right)", "Ma tr\u1EADn 2\xD72", "ma tran"],
      ["\\scriptstyle\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}", "\\left[ \\begin{array}{cc} @ & \\\\ & \\end{array} \\right]", "Ma tr\u1EADn vu\xF4ng 2\xD72", ""],
      ["\\scriptstyle\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}", "\\left| \\begin{array}{cc} @ & \\\\ & \\end{array} \\right|", "\u0110\u1ECBnh th\u1EE9c 2\xD72", "dinh thuc"],
      ["\\scriptscriptstyle\\begin{pmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{pmatrix}", "\\left( \\begin{array}{ccc} @ & & \\\\ & & \\\\ & & \\end{array} \\right)", "Ma tr\u1EADn 3\xD73", ""],
      ["a \\\\ b", " \\\\ ", "Xu\u1ED1ng d\xF2ng (trong h\u1EC7)", "xuong dong"],
      ["a & b", " & ", "Sang c\u1ED9t (trong ma tr\u1EADn)", ""]
    ]),
    G("ops", "Ph\xE9p to\xE1n & quan h\u1EC7", "\\pm", [
      ["\\pm", "\\pm ", "C\u1ED9ng tr\u1EEB", "cong tru"],
      ["\\mp", "\\mp ", "Tr\u1EEB c\u1ED9ng", ""],
      ["\\times", "\\times ", "Nh\xE2n", "nhan"],
      ["\\div", "\\div ", "Chia", ""],
      ["\\cdot", "\\cdot ", "Ch\u1EA5m nh\xE2n", ""],
      ["\\circ", "\\circ ", "H\u1EE3p (\u2218)", ""],
      ["=", "=", "B\u1EB1ng", ""],
      ["\\neq", "\\neq ", "Kh\xE1c", "khac"],
      ["\\approx", "\\approx ", "X\u1EA5p x\u1EC9", "xap xi"],
      ["\\equiv", "\\equiv ", "\u0110\u1ED3ng nh\u1EA5t / \u0111\u1ED3ng d\u01B0", ""],
      ["\\sim", "\\sim ", "\u0110\u1ED3ng d\u1EA1ng", "dong dang"],
      ["\\cong", "\\cong ", "B\u1EB1ng nhau (\u2245)", ""],
      ["<", "<", "Nh\u1ECF h\u01A1n", ""],
      [">", ">", "L\u1EDBn h\u01A1n", ""],
      ["\\leq", "\\leq ", "Nh\u1ECF h\u01A1n ho\u1EB7c b\u1EB1ng", ""],
      ["\\geq", "\\geq ", "L\u1EDBn h\u01A1n ho\u1EB7c b\u1EB1ng", ""],
      ["\\ll", "\\ll ", "R\u1EA5t nh\u1ECF h\u01A1n", ""],
      ["\\gg", "\\gg ", "R\u1EA5t l\u1EDBn h\u01A1n", ""],
      ["\\propto", "\\propto ", "T\u1EC9 l\u1EC7 thu\u1EADn", ""],
      ["\\ldots", "\\ldots ", "Ba ch\u1EA5m d\u01B0\u1EDBi", ""],
      ["\\cdots", "\\cdots ", "Ba ch\u1EA5m gi\u1EEFa", ""],
      ["\\vdots", "\\vdots ", "Ba ch\u1EA5m d\u1ECDc", ""]
    ]),
    G("sets", "T\u1EADp h\u1EE3p & logic", "\\in", [
      ["\\in", "\\in ", "Thu\u1ED9c", "thuoc"],
      ["\\notin", "\\notin ", "Kh\xF4ng thu\u1ED9c", ""],
      ["\\ni", "\\ni ", "Ch\u1EE9a ph\u1EA7n t\u1EED", ""],
      ["\\subset", "\\subset ", "T\u1EADp con", "tap con"],
      ["\\subseteq", "\\subseteq ", "T\u1EADp con ho\u1EB7c b\u1EB1ng", ""],
      ["\\supset", "\\supset ", "Ch\u1EE9a t\u1EADp", ""],
      ["\\cup", "\\cup ", "H\u1EE3p", "hop"],
      ["\\cap", "\\cap ", "Giao", "giao"],
      ["\\setminus", "\\setminus ", "Hi\u1EC7u t\u1EADp", ""],
      ["\\emptyset", "\\emptyset ", "T\u1EADp r\u1ED7ng", "tap rong"],
      ["\\mathbb{R}", "\\mathbb{R}", "T\u1EADp s\u1ED1 th\u1EF1c", "so thuc"],
      ["\\mathbb{N}", "\\mathbb{N}", "T\u1EADp s\u1ED1 t\u1EF1 nhi\xEAn", ""],
      ["\\mathbb{Z}", "\\mathbb{Z}", "T\u1EADp s\u1ED1 nguy\xEAn", ""],
      ["\\mathbb{Q}", "\\mathbb{Q}", "T\u1EADp s\u1ED1 h\u1EEFu t\u1EC9", ""],
      ["\\mathbb{C}", "\\mathbb{C}", "T\u1EADp s\u1ED1 ph\u1EE9c", ""],
      ["\\forall", "\\forall ", "V\u1EDBi m\u1ECDi", "voi moi"],
      ["\\exists", "\\exists ", "T\u1ED3n t\u1EA1i", "ton tai"],
      ["\\neg", "\\neg ", "Ph\u1EE7 \u0111\u1ECBnh", ""],
      ["\\wedge", "\\wedge ", "V\xE0", ""],
      ["\\vee", "\\vee ", "Ho\u1EB7c", ""],
      ["\\Rightarrow", "\\Rightarrow ", "Suy ra", "suy ra"],
      ["\\Leftarrow", "\\Leftarrow ", "K\xE9o theo ng\u01B0\u1EE3c", ""],
      ["\\Leftrightarrow", "\\Leftrightarrow ", "T\u01B0\u01A1ng \u0111\u01B0\u01A1ng", "tuong duong"],
      ["\\rightarrow", "\\rightarrow ", "M\u0169i t\xEAn ph\u1EA3i", ""],
      ["\\leftarrow", "\\leftarrow ", "M\u0169i t\xEAn tr\xE1i", ""],
      ["\\leftrightarrow", "\\leftrightarrow ", "M\u0169i t\xEAn hai chi\u1EC1u", ""],
      ["\\mapsto", "\\mapsto ", "\xC1nh x\u1EA1", ""],
      ["\\therefore", "\\therefore ", "V\u1EADy", ""],
      ["\\because", "\\because ", "V\xEC", ""]
    ]),
    G("geo", "H\xECnh h\u1ECDc", "\\angle", [
      ["\\vec{u}", "\\vec{@}", "Vect\u01A1 (1 ch\u1EEF)", "vecto"],
      ["\\overrightarrow{AB}", "\\overrightarrow{@}", "Vect\u01A1 AB", "vecto"],
      ["|\\vec{AB}|", "\\left| \\overrightarrow{@} \\right|", "\u0110\u1ED9 d\xE0i vect\u01A1", ""],
      ["\\vec{a}\\cdot\\vec{b}", "\\overrightarrow{@} \\cdot \\overrightarrow{}", "T\xEDch v\xF4 h\u01B0\u1EDBng", ""],
      ["\\widehat{AB}", "\\widehat{@}", "G\xF3c (d\u1EA5u m\u0169)", "goc"],
      ["\\angle", "\\angle ", "K\xFD hi\u1EC7u g\xF3c \u2220", ""],
      ["{}^{\\circ}", "^{\\circ}", "\u0110\u1ED9 (\xB0)", "do"],
      ["\\overset{\\frown}{AB}", "\\overset{\\frown}{@}", "Cung AB", "cung"],
      ["\\triangle", "\\triangle ", "Tam gi\xE1c", "tam giac"],
      ["\\square", "\\square ", "H\xECnh vu\xF4ng", ""],
      ["\\perp", "\\perp ", "Vu\xF4ng g\xF3c", "vuong goc"],
      ["\\parallel", "\\parallel ", "Song song", "song song"],
      ["\\nparallel", "\\nparallel ", "Kh\xF4ng song song", ""],
      ["\\sim", "\\sim ", "\u0110\u1ED3ng d\u1EA1ng", ""],
      ["\\cong", "\\cong ", "B\u1EB1ng nhau (\u2245)", ""]
    ]),
    G("greek", "Hy L\u1EA1p", "\\alpha", [
      ..."alpha beta gamma delta epsilon varepsilon zeta eta theta iota kappa lambda mu nu xi pi rho sigma tau upsilon phi varphi chi psi omega".split(" ").map((n) => [`\\${n}`, `\\${n} `, n, "hy lap greek"]),
      ..."Gamma Delta Theta Lambda Xi Pi Sigma Phi Psi Omega".split(" ").map((n) => [`\\${n}`, `\\${n} `, n, "hy lap greek hoa"])
    ]),
    G("space", "Ch\u1EEF & kho\u1EA3ng c\xE1ch", "\\mathbf{A}", [
      ["\\text{ab}", "\\text{@}", "Ch\u1EEF th\u01B0\u1EDDng (v\u0103n b\u1EA3n)", "van ban text"],
      ["\\mathrm{d}", "\\mathrm{@}", "Ch\u1EEF \u0111\u1EE9ng", "chu dung"],
      ["\\mathbf{v}", "\\mathbf{@}", "Ch\u1EEF \u0111\u1EADm", "chu dam"],
      ["\\mathbb{R}", "\\mathbb{@}", "T\u1EADp s\u1ED1 (R, N, Z, Q, C)", "tap so"],
      ["\\mathcal{L}", "\\mathcal{@}", "Ch\u1EEF th\u01B0 ph\xE1p", "thu phap"],
      ["\\mathsf{A}", "\\mathsf{@}", "Ch\u1EEF kh\xF4ng ch\xE2n", "khong chan"],
      ["a\\,b", "\\,", "C\xE1ch m\u1ECFng", "cach"],
      ["a\\;b", "\\;", "C\xE1ch v\u1EEBa", ""],
      ["a\\quad b", "\\quad ", "C\xE1ch r\u1ED9ng", ""],
      ["a\\text{ }b", "\\text{ }", "D\u1EA5u c\xE1ch (v\u0103n b\u1EA3n)", ""],
      ["1{,}5", "{,}", "D\u1EA5u ph\u1EA9y th\u1EADp ph\xE2n (1{,}5)", "thap phan"],
      [";", "; ", "Ch\u1EA5m ph\u1EA9y", ""]
    ])
  ];
  var KEY_RECENT = "texcraft-addin-recent-symbols";
  var esc3 = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  var strip = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").toLowerCase();
  var faceCache = /* @__PURE__ */ new Map();
  function face(latex) {
    if (faceCache.has(latex)) return faceCache.get(latex);
    let out;
    try {
      if (typeof katex === "undefined") throw new Error("no katex");
      out = `<span class="tb-math">${katex.renderToString(`\\displaystyle ${latex}`, { throwOnError: true, output: "html", strict: "ignore" })}</span>`;
    } catch (e3) {
      try {
        const r = renderLatex(latex, { fontSize: 15, pad: 1 });
        out = r.svg.replace(/ width="[^"]*pt" height="[^"]*pt"/, ` fill="currentColor" class="tb-svg" style="aspect-ratio:${(r.width / r.height).toFixed(3)}"`).replace(/#000/g, "currentColor");
      } catch (e4) {
        out = `<span class="tb-text">${esc3(latex)}</span>`;
      }
    }
    if (typeof katex !== "undefined") faceCache.set(latex, out);
    return out;
  }
  function insertSnippet(field5, snippet) {
    var _a8, _b;
    const v = field5.value, s = (_a8 = field5.selectionStart) != null ? _a8 : v.length, e3 = (_b = field5.selectionEnd) != null ? _b : s;
    const selected = v.slice(s, e3);
    let text = snippet, caret;
    const at2 = text.indexOf("@");
    if (at2 >= 0) {
      text = text.replace("@", selected);
      caret = selected ? s + text.length : s + at2;
    } else caret = s + text.length;
    let out = v.slice(0, s) + text + v.slice(e3);
    const next = out[s + text.length] || "";
    if (/\\[A-Za-z]+$/.test(text) && /[A-Za-z]/.test(next)) {
      out = out.slice(0, s + text.length) + " " + out.slice(s + text.length);
      if (!selected && at2 < 0) caret += 1;
    }
    field5.value = out;
    field5.setSelectionRange(caret, caret);
    field5.focus();
    field5.dispatchEvent(new Event("input", { bubbles: true }));
    return caret;
  }
  function mountEditorToolbar(root, field5, { visual: visual2 = null } = {}) {
    if (!root || !field5) return;
    let recent = [];
    try {
      recent = JSON.parse(localStorage.getItem(KEY_RECENT) || "[]");
    } catch (e3) {
      recent = [];
    }
    const all = GROUPS.flatMap((g) => g.items.map((it) => ({ it, group: g.id })));
    const byKey = new Map(all.map(({ it }) => [it[1], it]));
    let active = "struct";
    root.innerHTML = `
    <div class="tb-search"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg><input type="search" id="tb-q" placeholder="T\xECm k\xFD hi\u1EC7u: ph\xE2n s\u1ED1, t\xEDch ph\xE2n, vu\xF4ng g\xF3c\u2026" autocomplete="off"></div>
    <div class="tb-recent" id="tb-recent" hidden><span class="tb-recent-label">G\u1EA7n \u0111\xE2y</span><div class="tb-grid" id="tb-recent-grid"></div></div>
    <div class="tb-tabs" role="tablist">${GROUPS.map((g) => `<button type="button" role="tab" class="tb-tab" data-g="${g.id}" title="${esc3(g.label)}"><span class="tb-tab-icon">${face(g.icon)}</span><span class="tb-tab-label">${esc3(g.label)}</span></button>`).join("")}</div>
    <div class="tb-grid" id="tb-grid"></div>
    <div class="tb-tip">B\xF4i \u0111en ch\u1EEF trong \xF4 LaTeX r\u1ED3i b\u1EA5m n\xFAt \u0111\u1EC3 bao ch\u1EEF \u0111\xF3 v\xE0o (v\xED d\u1EE5 b\xF4i <code>x+1</code> r\u1ED3i b\u1EA5m \u221A). Tab nh\u1EA3y gi\u1EEFa c\xE1c \xF4 tr\u1ED1ng.</div>`;
    const grid = root.querySelector("#tb-grid");
    const btn = (it) => `<button type="button" class="tb-btn${/begin\{[pbv]?matrix\}/.test(it[0]) ? " wide" : ""}" data-s="${esc3(it[1])}" title="${esc3(it[2])}  \u2014  ${esc3(it[1].replace("@", ""))}">${face(it[0])}</button>`;
    const renderGrid = (items) => {
      grid.innerHTML = items.length ? items.map(btn).join("") : '<div class="tb-empty">Kh\xF4ng c\xF3 k\xFD hi\u1EC7u ph\xF9 h\u1EE3p.</div>';
    };
    const renderRecent = () => {
      const items = recent.map((k) => byKey.get(k)).filter(Boolean).slice(0, 10);
      root.querySelector("#tb-recent").hidden = !items.length;
      root.querySelector("#tb-recent-grid").innerHTML = items.map(btn).join("");
    };
    const showGroup = (id) => {
      active = id;
      root.querySelectorAll(".tb-tab").forEach((t) => t.classList.toggle("active", t.dataset.g === id));
      renderGrid(GROUPS.find((g) => g.id === id).items);
    };
    root.querySelector(".tb-tabs").addEventListener("click", (ev) => {
      const t = ev.target.closest(".tb-tab");
      if (t) {
        root.querySelector("#tb-q").value = "";
        showGroup(t.dataset.g);
      }
    });
    root.querySelector("#tb-q").addEventListener("input", (ev) => {
      const q = strip(ev.target.value.trim());
      if (!q) {
        showGroup(active);
        return;
      }
      root.querySelectorAll(".tb-tab").forEach((t) => t.classList.remove("active"));
      renderGrid(all.filter(({ it }) => strip(`${it[2]} ${it[3]} ${it[1]}`).includes(q)).map(({ it }) => it));
    });
    root.addEventListener("mousedown", (ev) => {
      if (ev.target.closest(".tb-btn")) ev.preventDefault();
    });
    root.addEventListener("click", (ev) => {
      const b = ev.target.closest(".tb-btn");
      if (!b) return;
      const snippet = b.dataset.s;
      if (visual2 && visual2.active()) visual2.insert(snippet);
      else insertSnippet(field5, snippet);
      recent = [snippet, ...recent.filter((k) => k !== snippet)].slice(0, 12);
      try {
        localStorage.setItem(KEY_RECENT, JSON.stringify(recent));
      } catch (e3) {
      }
      renderRecent();
    });
    showGroup("struct");
    renderRecent();
  }

  // taskpane/visual-editor.js
  var libPromise = null;
  function loadMathlive() {
    libPromise = libPromise || new Function("u", "return import(u)")(new URL("./vendor/mathlive/mathlive.min.mjs", __BUNDLE_URL__).href).then((m) => {
      const MF = m.MathfieldElement;
      MF.fontsDirectory = new URL("./vendor/mathlive/fonts", __BUNDLE_URL__).href;
      MF.soundsDirectory = null;
      MF.plonkSound = null;
      MF.keypressSound = null;
      return MF;
    });
    return libPromise;
  }
  function toMathliveInsert(snippet, hasSelection = false) {
    let s = snippet.includes("@") ? snippet.replace("@", hasSelection ? "#@" : "#?") : snippet;
    s = s.replace(/\{\}/g, "{#?}").replace(/&\s*(?=(&|\\\\|\\end))/g, "& #? ").replace(/\\\\\s*(?=(&|\\end))/g, "\\\\ #? ");
    return s;
  }
  function cleanLatex(v) {
    return String(v || "").replace(/\\placeholder(\[[^\]]*\])?\{[^{}]*\}/g, "").replace(/\s+/g, " ").trim();
  }
  function createVisualEditor({ host, textarea, onChange }) {
    let mf = null, on = false, busy = false;
    async function ensure() {
      if (mf) return mf;
      const MF = await loadMathlive();
      mf = new MF();
      mf.setAttribute("math-virtual-keyboard-policy", "manual");
      mf.setAttribute("aria-label", "Nh\u1EADp c\xF4ng th\u1EE9c tr\u1EF1c quan");
      mf.smartFence = true;
      mf.addEventListener("input", () => {
        busy = true;
        textarea.value = cleanLatex(mf.getValue("latex"));
        busy = false;
        onChange();
      });
      host.appendChild(mf);
      return mf;
    }
    const pull = () => {
      if (!on || !mf || busy) return;
      if (cleanLatex(mf.getValue("latex")) !== textarea.value.trim()) mf.setValue(textarea.value, { silenceNotifications: true });
    };
    return {
      active: () => on,
      pull,
      async setActive(v) {
        on = v;
        host.hidden = !v;
        textarea.hidden = v;
        if (v) {
          await ensure();
          mf.setValue(textarea.value, { silenceNotifications: true });
          mf.focus();
        }
      },
      async insert(snippet) {
        var _a8;
        await ensure();
        const hasSel = (((_a8 = mf.selection) == null ? void 0 : _a8.ranges) || []).some(([a, b]) => a !== b);
        mf.insert(toMathliveInsert(snippet, hasSel), { format: "latex", selectionMode: "placeholder", focus: true });
      },
      focus: () => mf && mf.focus()
    };
  }

  // taskpane/taskpane.js
  init_cursor_eq();

  // src/app-core.js
  init_ooxml();
  init_mathtype_object();
  function paragraphOrdinals(doc) {
    const starts = [];
    const re = /<w:p[ >]/g;
    let m;
    while (m = re.exec(doc)) starts.push(m.index);
    return starts;
  }
  var paraText = (xml) => (xml.match(/<w:t\b[^>]*>[^<]*<\/w:t>/g) || []).map((t) => t.replace(/<[^>]+>/g, "")).join("");
  function scanBody(pkg) {
    const scan2 = scanPackage(pkg);
    const starts = paragraphOrdinals(scan2.doc || "");
    const ends = starts.map((s) => {
      const e3 = scan2.doc.indexOf("</w:p>", s);
      return e3 < 0 ? scan2.doc.length : e3 + 6;
    });
    const list3 = scan2.equations.map((eq, n) => {
      let lo = 0, hi = starts.length - 1, para2 = -1;
      while (lo <= hi) {
        const mid3 = lo + hi >> 1;
        if (starts[mid3] <= eq.pos) {
          para2 = mid3;
          lo = mid3 + 1;
        } else hi = mid3 - 1;
      }
      const excerpt = para2 >= 0 ? paraText(scan2.doc.slice(starts[para2], ends[para2])).slice(0, 80) : "";
      return { n, kind: eq.kind, latex: eq.latex, error: eq.error, progId: eq.progId, para: para2, excerpt };
    });
    return { equations: list3, paragraphTotal: starts.length };
  }

  // taskpane/taskpane.js
  try {
    const nav = navigator;
    if (/[?&]lite\b/.test(location.search) || nav.hardwareConcurrency && nav.hardwareConcurrency <= 4 || nav.deviceMemory && nav.deviceMemory <= 4 || window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("lite");
  } catch (e3) {
  }
  var $ = (id) => document.getElementById(id);
  var esc13 = (s) => String(s != null ? s : "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  var state2 = { scanned: null, lastBackup: null, examLoaded: false };
  var lastPreview = [];
  var FULL2 = /[?&]edition=full\b/.test(location.search);
  var LITE_TABS = ["eq", "exam", "figures", "about"];
  if (!FULL2) document.querySelectorAll("nav button").forEach((b) => {
    if (!LITE_TABS.includes(b.dataset.tab)) b.remove();
  });
  function switchTab(name) {
    if (!FULL2 && !LITE_TABS.includes(name)) name = "eq";
    const b = document.querySelector(`nav button[data-tab="${name}"]`);
    if (!b) return;
    document.querySelectorAll("nav button").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
    document.querySelectorAll("section").forEach((s) => s.classList.toggle("active", s.id === "tab-" + name));
    try {
      b.scrollIntoView({ block: "nearest", inline: "nearest" });
    } catch (e3) {
    }
    if (name === "figures" && !state2.figuresLoaded) {
      state2.figuresLoaded = true;
      Promise.resolve().then(() => (init_figures_ui(), figures_ui_exports)).then((m) => m.mountFigures($("figures-root"), word_io_exports)).catch((e3) => {
        $("figures-root").textContent = "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c m\xF4-\u0111un h\xECnh v\u1EBD: " + e3.message;
      });
    }
    if (name === "worksheet" && !state2.worksheetLoaded) {
      state2.worksheetLoaded = true;
      Promise.resolve().then(() => (init_worksheet_ui(), worksheet_ui_exports)).then((m) => m.mountWorksheet($("worksheet-root"), word_io_exports)).catch((e3) => {
        $("worksheet-root").textContent = "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c m\xF4-\u0111un phi\u1EBFu b\xE0i t\u1EADp: " + e3.message;
      });
    }
    if (name === "calc" && !state2.calcLoaded) {
      state2.calcLoaded = true;
      Promise.resolve().then(() => (init_calc_ui(), calc_ui_exports)).then((m) => m.mountCalc($("calc-root"), word_io_exports, { openEditor: (latex) => {
        $("editor-latex").value = latex;
        switchTab("editor");
        renderEditorPreview();
      } })).catch((e3) => {
        $("calc-root").textContent = "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c m\xF4-\u0111un t\xEDnh to\xE1n: " + e3.message;
      });
    }
    if (name === "lms" && !state2.lmsLoaded) {
      state2.lmsLoaded = true;
      Promise.resolve().then(() => (init_lms_ui(), lms_ui_exports)).then((m) => m.mountLms($("lms-root"), word_io_exports)).catch((e3) => {
        $("lms-root").textContent = "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c m\xF4-\u0111un LMS: " + e3.message;
      });
    }
    if (name === "exam" && !state2.examLoaded) {
      state2.examLoaded = true;
      Promise.resolve().then(() => (init_exam_ui(), exam_ui_exports)).then((m) => m.mountExam($("exam-root"), word_io_exports)).catch((e3) => {
        $("exam-root").textContent = "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c m\xF4-\u0111un \u0111\u1EC1 thi: " + e3.message;
      });
    }
    if (name === "editor") {
      renderEditorPreview();
      if ($("editor-latex") && !$("editor-latex").value.trim()) {
        loadFormulaFromWord(false).catch(() => {
        });
      }
    }
  }
  function checkUrlTab() {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab") || window.location.hash.replace(/^#/, "");
    if (tab) switchTab(tab);
  }
  document.querySelectorAll("nav button").forEach((b) => b.addEventListener("click", () => {
    switchTab(b.dataset.tab);
  }));
  window.addEventListener("hashchange", checkUrlTab);
  document.querySelector("nav").addEventListener("wheel", (e3) => {
    if (e3.deltaY) {
      e3.currentTarget.scrollLeft += e3.deltaY;
      e3.preventDefault();
    }
  }, { passive: false });
  if (window.__texcraftLoaded) window.__texcraftLoaded();
  function afterWrite(res, backup) {
    state2.scanned = null;
    lastPreview = [];
    const same = res.before === res.after;
    state2.lastBackup = same ? backup : null;
    $("btn-restore").disabled = !same;
  }
  function progress(el, done, total) {
    el.hidden = false;
    el.max = total || 1;
    el.value = done;
  }
  async function scan() {
    $("scan-summary").textContent = "\u0110ang \u0111\u1ECDc t\xE0i li\u1EC7u\u2026";
    try {
      const { pkg, paragraphCount } = await readBody();
      const scanned = scanBody(pkg);
      scanned.mapped = scanned.paragraphTotal === paragraphCount;
      scanned.paragraphCount = paragraphCount;
      state2.scanned = scanned;
      renderScan();
    } catch (e3) {
      $("scan-summary").innerHTML = `<span class="bad">L\u1ED7i: ${esc13(e3.message)}</span>`;
    }
  }
  function renderScan() {
    const s = state2.scanned;
    const mt = s.equations.filter((e3) => e3.kind === "mathtype");
    const okMt = mt.filter((e3) => e3.latex !== null).length;
    const badMt = mt.length - okMt;
    const lx = s.equations.filter((e3) => e3.kind === "latex");
    const native = s.equations.filter((e3) => e3.kind === "native");
    $("scan-summary").innerHTML = `${s.equations.length} c\xF4ng th\u1EE9c: MathType <b class="ok">${okMt}</b>${badMt ? ` (l\u1ED7i <b class="bad">${badMt}</b>)` : ""}, LaTeX <b class="warn">${lx.length}</b>, Word <b>${native.length}</b>` + (s.mapped ? "" : ` \xB7 <span class="warn">s\u1ED1 \u0111o\u1EA1n kh\xF4ng kh\u1EDBp (${s.paragraphTotal} \u2260 ${s.paragraphCount}); ch\u1EBF \u0111\u1ED9 chuy\u1EC3n to\xE0n b\u1ED9 s\u1EBD \u0111\u1ECDc t\u1EEBng \u0111o\u1EA1n</span>`);
    const only = $("only-bad").checked;
    const rows = s.equations.filter((e3) => !only || e3.latex === null);
    $("eq-table").tBodies[0].innerHTML = rows.slice(0, 600).map((e3) => {
      let badge = "";
      if (e3.latex === null) {
        badge = `<span class="badge bad" title="${esc13(e3.error)}">kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c</span>`;
      } else if (e3.kind === "mathtype") {
        badge = '<span class="badge ok">MathType</span>';
      } else if (e3.kind === "latex") {
        badge = '<span class="badge warn">LaTeX</span>';
      } else {
        badge = '<span class="badge native">Word</span>';
      }
      return `<tr data-para="${e3.para}"><td>${e3.n + 1}</td><td class="muted">${esc13(e3.excerpt)}</td><td>${e3.latex === null ? `<span class="muted">${esc13(e3.error)}</span>` : `<span class="tex">${esc13(e3.latex)}</span>`}</td><td>${badge}</td></tr>`;
    }).join("") + (rows.length > 600 ? `<tr><td colspan="4" class="muted">\u2026 c\xF2n ${rows.length - 600} d\xF2ng</td></tr>` : "");
    $("btn-convert").disabled = false;
  }
  $("btn-scan").addEventListener("click", scan);
  $("only-bad").addEventListener("change", () => state2.scanned && renderScan());
  $("eq-table").addEventListener("click", (ev) => {
    const tr = ev.target.closest("tr[data-para]");
    if (tr && state2.scanned && state2.scanned.mapped && hasWord()) selectParagraph(Number(tr.dataset.para)).catch(() => {
    });
  });
  var writeMode = () => $("opt-mode").checked ? "paragraph" : "content";
  mountMtSettings($("mt-settings-convert"));
  mountMtSettings($("mt-settings-editor"), { onChange: () => renderEditorPreview() });
  var syncEditorFormat = () => {
    var _a8;
    const mt = ((_a8 = document.querySelector("input[name=editor-format]:checked")) == null ? void 0 : _a8.value) === "mathtype";
    $("mt-details").hidden = !mt;
    renderEditorPreview();
  };
  document.querySelectorAll("input[name=editor-format]").forEach((r) => r.addEventListener("change", syncEditorFormat));
  var convSrc = () => {
    var _a8;
    return ((_a8 = $("conv-src")) == null ? void 0 : _a8.value) || "mathtype";
  };
  var convDst = () => {
    var _a8;
    return ((_a8 = $("conv-dst")) == null ? void 0 : _a8.value) || "word";
  };
  var SRC_KIND = { mathtype: "mathtype", latex: "latex", word: "native" };
  var CONV_HINTS = {
    "same:mathtype": "MathType \u2192 MathType: l\xE0m l\u1EA1i c\xE1c c\xF4ng th\u1EE9c MathType (v\xE0 c\xF4ng th\u1EE9c Word) trong ph\u1EA1m vi \u0111\xE3 ch\u1ECDn theo ki\u1EC3u ch\u1EEF v\xE0 c\u1EE1 ch\u1EEF \u1EDF tr\xEAn.",
    "same:latex": "Ngu\u1ED3n v\xE0 \u0111\xEDch \u0111\u1EC1u l\xE0 LaTeX: kh\xF4ng c\xF3 g\xEC \u0111\u1EC3 chuy\u1EC3n.",
    "same:word": "Ngu\u1ED3n v\xE0 \u0111\xEDch \u0111\u1EC1u l\xE0 c\xF4ng th\u1EE9c Word: kh\xF4ng c\xF3 g\xEC \u0111\u1EC3 chuy\u1EC3n.",
    "mathtype:latex": "C\xF4ng th\u1EE9c MathType \u0111\u01B0\u1EE3c thay b\u1EB1ng m\xE3 LaTeX d\u1EA1ng $\u2026$.",
    "word:latex": "C\xF4ng th\u1EE9c Word \u0111\u01B0\u1EE3c thay b\u1EB1ng m\xE3 LaTeX d\u1EA1ng $\u2026$ ($$\u2026$$ n\u1EBFu ri\xEAng d\xF2ng).",
    "latex:mathtype": "M\xE3 LaTeX ($\u2026$, $$\u2026$$, \\(\u2026\\), \\[\u2026\\]) \u0111\u01B0\u1EE3c chuy\u1EC3n th\xE0nh \u0111\u1ED1i t\u01B0\u1EE3ng MathType m\u1EDBi (m\xE1y kh\xF4ng c\u1EA7n c\xE0i MathType \u0111\u1EC3 xem). C\xE1c c\xF4ng th\u1EE9c Word c\xF3 s\u1EB5n trong ph\u1EA1m vi c\u0169ng b\u1ECB \u0111\u1ED5i sang MathType.",
    "word:mathtype": "C\xF4ng th\u1EE9c Word \u0111\u01B0\u1EE3c chuy\u1EC3n th\xE0nh \u0111\u1ED1i t\u01B0\u1EE3ng MathType m\u1EDBi (m\xE1y kh\xF4ng c\u1EA7n c\xE0i MathType \u0111\u1EC3 xem; s\u1EEDa b\u1EB1ng MathType khi c\xF3)."
  };
  var DST_FOR = { latex: ["mathtype", "word"], word: ["mathtype", "latex"], mathtype: ["mathtype", "latex", "word"] };
  function syncConvertUi() {
    const ok = DST_FOR[convSrc()] || [];
    const dstEl = $("conv-dst");
    [...dstEl.options].forEach((o) => {
      o.hidden = o.disabled = !ok.includes(o.value);
    });
    if (!ok.includes(dstEl.value)) dstEl.value = ok.includes("word") ? "word" : ok[0];
    const s = convSrc(), d = convDst();
    $("conv-hint").textContent = CONV_HINTS[s === d ? `same:${s}` : `${s}:${d}`] || "";
    $("mt-settings-convert").hidden = d !== "mathtype";
    $("opt-display").closest("label").hidden = d !== "word";
  }
  $("conv-src").addEventListener("change", syncConvertUi);
  $("conv-dst").addEventListener("change", syncConvertUi);
  syncConvertUi();
  async function paragraphsToProcess(scope, onProgress, { kinds: wanted } = {}) {
    if (scope === "selection") return { scope: { kind: "selection" }, items: await readParagraphs({ kind: "selection" }, onProgress) };
    if (!state2.scanned) await scan();
    const s = state2.scanned;
    if (s.mapped) {
      const kinds = [...wanted];
      const indexes = [...new Set(s.equations.filter((e3) => kinds.includes(e3.kind) && e3.latex !== null).map((e3) => e3.para))].sort((a, b) => a - b);
      return { scope: { kind: "all" }, items: await readParagraphs({ kind: "indexes", indexes }, onProgress) };
    }
    return { scope: { kind: "all" }, items: await readParagraphs({ kind: "all" }, onProgress) };
  }
  async function convert() {
    if (!$("opt-backup").checked) {
      $("convert-summary").innerHTML = '<span class="warn">H\xE3y l\u01B0u m\u1ED9t b\u1EA3n sao t\xE0i li\u1EC7u r\u1ED3i tick \xF4 x\xE1c nh\u1EADn.</span>';
      return;
    }
    const src = convSrc(), dst = convDst();
    if (src === dst && src !== "mathtype") {
      $("convert-summary").innerHTML = '<span class="warn">Ngu\u1ED3n v\xE0 \u0111\xEDch gi\u1ED1ng nhau: kh\xF4ng c\xF3 g\xEC \u0111\u1EC3 chuy\u1EC3n.</span>';
      return;
    }
    const normalize2 = src === "mathtype" && dst === "mathtype";
    const kinds = /* @__PURE__ */ new Set([SRC_KIND[src]]);
    if (dst === "mathtype") kinds.add("native");
    $("btn-convert").disabled = true;
    const bar = $("progress");
    try {
      const scopeName = document.querySelector("input[name=scope]:checked").value;
      $("convert-summary").textContent = "\u0110ang \u0111\u1ECDc c\xE1c \u0111o\u1EA1n\u2026";
      const { scope, items } = await paragraphsToProcess(scopeName, (d, t) => progress(bar, d, t * 2), { kinds });
      let converted = 0, convertedMathType = 0, convertedLatex = 0, kept = 0;
      const reasons = {}, writes = [], backup = [];
      for (const it of items) {
        let r;
        if (dst === "mathtype") {
          const a = convertMathTypeInPackage(it.pkg, { convertMathType: normalize2, convertLatex: src === "latex", display: false });
          const b = await convertNativeToMathType(a.pkg, __spreadProps(__spreadValues({ render: browserRender }, mtConvertOptions()), { defaultSize: await mtOptions().then((o) => o.size) }));
          r = { converted: b.converted, convertedLatex: a.convertedLatex || 0, convertedMathType: 0, kept: [...a.kept, ...b.kept], changed: b.changed, pkg: b.changed ? b.pkg : a.pkg };
          if (!b.changed && a.changed) r.converted = a.converted;
        } else if (dst === "latex") {
          r = convertEquationsToLatexText(it.pkg, { fromMathType: src === "mathtype", fromNative: src === "word" });
        } else {
          r = convertMathTypeInPackage(it.pkg, { convertMathType: src === "mathtype", convertLatex: src === "latex", display: $("opt-display").checked });
        }
        converted += r.converted;
        convertedMathType += r.convertedMathType || 0;
        convertedLatex += r.convertedLatex || 0;
        kept += r.kept.length;
        r.kept.forEach((k) => {
          reasons[k.reason] = (reasons[k.reason] || 0) + 1;
        });
        if (r.changed) {
          writes.push({ index: it.index, pkg: r.pkg });
          backup.push({ index: it.index, pkg: it.pkg });
        }
      }
      if (!writes.length) {
        $("convert-summary").innerHTML = `Kh\xF4ng c\xF3 g\xEC \u0111\u1EC3 chuy\u1EC3n.${kept ? ` Gi\u1EEF nguy\xEAn: ${kept}.` : ""}`;
        return;
      }
      $("convert-summary").textContent = `\u0110ang ghi ${writes.length} \u0111o\u1EA1n\u2026`;
      const res = await writeParagraphs(scope, writes, writeMode(), (d, t) => progress(bar, t + d, t * 2));
      afterWrite(res, { scope, items: backup, mode: writeMode() });
      const reasonList = Object.entries(reasons).map(([k, v]) => `<li>${esc13(k)}: ${v}</li>`).join("");
      const details = [];
      if (convertedMathType) details.push(`${convertedMathType} MathType`);
      if (convertedLatex) details.push(`${convertedLatex} LaTeX`);
      const detailStr = details.length ? ` (${details.join(", ")})` : "";
      $("convert-summary").innerHTML = `<p><b class="ok">\u0110\xE3 chuy\u1EC3n ${converted}</b> c\xF4ng th\u1EE9c${detailStr}; <b class="${kept ? "warn" : ""}">gi\u1EEF nguy\xEAn ${kept}</b>.</p>` + (reasonList ? `<ul>${reasonList}</ul>` : "") + (res.before !== res.after ? `<p class="warn">S\u1ED1 \u0111o\u1EA1n thay \u0111\u1ED5i ${res.before} \u2192 ${res.after}: Word c\xF3 th\u1EC3 \u0111\xE3 th\xEAm \u0111o\u1EA1n tr\u1ED1ng. N\xFAt \u201CKh\xF4i ph\u1EE5c\u201D b\u1ECB t\u1EAFt (kh\xF4ng an to\xE0n); h\xE3y d\xF9ng Ho\xE0n t\xE1c (Ctrl/Cmd+Z) ho\u1EB7c m\u1EDF l\u1EA1i b\u1EA3n sao.</p>` : "");
    } catch (e3) {
      $("convert-summary").innerHTML = `<span class="bad">L\u1ED7i: ${esc13(e3.message)}</span>`;
    } finally {
      $("btn-convert").disabled = false;
    }
  }
  $("btn-convert").addEventListener("click", convert);
  $("btn-restore").addEventListener("click", async () => {
    const b = state2.lastBackup;
    if (!b) return;
    try {
      await writeParagraphs(b.scope, b.items, b.mode, (d, t) => progress($("progress"), d, t));
      $("convert-summary").innerHTML = '<span class="ok">\u0110\xE3 kh\xF4i ph\u1EE5c c\xE1c \u0111o\u1EA1n g\u1ED1c.</span>';
      $("btn-restore").disabled = true;
    } catch (e3) {
      $("convert-summary").innerHTML = `<span class="bad">Kh\xF4ng kh\xF4i ph\u1EE5c \u0111\u01B0\u1EE3c: ${esc13(e3.message)}</span>`;
    }
  });
  var visual = null;
  var previewTimer = 0;
  function renderEditorPreview() {
    clearTimeout(previewTimer);
    previewTimer = setTimeout(renderEditorPreviewNow, document.documentElement.classList.contains("lite") ? 220 : 60);
  }
  function renderEditorPreviewNow() {
    var _a8, _b, _c, _d, _e;
    if (visual && visual.active()) visual.pull();
    const tex = ((_a8 = $("editor-latex")) == null ? void 0 : _a8.value.trim()) || "";
    const previewEl = $("editor-preview");
    if (!previewEl) return;
    if (!tex) {
      previewEl.innerHTML = '<span class="muted" style="font-size:12px;font-style:italic">(Ch\u01B0a c\xF3 n\u1ED9i dung c\xF4ng th\u1EE9c)</span>';
      return;
    }
    if (typeof katex !== "undefined" && katex.render) {
      try {
        const asMt = ((_b = document.querySelector("input[name=editor-format]:checked")) == null ? void 0 : _b.value) === "mathtype";
        const classic = asMt && classicLayout() && !((_c = $("editor-display")) == null ? void 0 : _c.checked);
        katex.render(classic && !/^\s*\\displaystyle/.test(tex) ? `\\displaystyle ${tex}` : tex, previewEl, {
          displayMode: (_e = (_d = $("editor-display")) == null ? void 0 : _d.checked) != null ? _e : false,
          throwOnError: false,
          output: "htmlAndMathml"
        });
      } catch (e3) {
        previewEl.innerHTML = `<span class="bad">L\u1ED7i c\xFA ph\xE1p: ${esc13(e3.message)}</span>`;
      }
    } else {
      previewEl.textContent = tex;
    }
  }
  function insertSymbolAtCursor(text) {
    var _a8, _b;
    const el = $("editor-latex");
    if (!el) return;
    const start = (_a8 = el.selectionStart) != null ? _a8 : el.value.length;
    const end = (_b = el.selectionEnd) != null ? _b : el.value.length;
    const before = el.value.slice(0, start);
    const after = el.value.slice(end);
    el.value = before + text + after;
    const newPos = start + text.length;
    el.setSelectionRange(newPos, newPos);
    el.focus();
    renderEditorPreview();
  }
  async function loadFormulaFromWord(showNotice = true) {
    var _a8, _b;
    const statusEl = $("editor-status");
    if (statusEl) statusEl.textContent = "\u0110ang \u0111\u1ECDc c\xF4ng th\u1EE9c t\u1EEB Word\u2026";
    try {
      let ctx;
      try {
        ctx = await readCursorContext();
      } catch (e3) {
        ctx = {};
        try {
          ctx.selPkg = (_a8 = await readSelection()) == null ? void 0 : _a8.pkg;
        } catch (e4) {
        }
        try {
          ctx.paraPkg = (_b = (await readParagraphs({ kind: "selection" }))[0]) == null ? void 0 : _b.pkg;
        } catch (e4) {
        }
      }
      if (!ctx.selPkg && !ctx.paraPkg) throw new Error("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c v\xF9ng ch\u1ECDn t\u1EEB Word.");
      const r = pickEquation(ctx);
      if (!r.eq) {
        if (r.errors && r.errors.length && r.found) throw new Error(`C\xF4ng th\u1EE9c b\u1ECB l\u1ED7i: ${r.errors[0]}`);
        if (statusEl) statusEl.innerHTML = showNotice ? '<span class="warn">Kh\xF4ng t\xECm th\u1EA5y c\xF4ng th\u1EE9c n\xE0o t\u1EA1i con tr\u1ECF / v\xF9ng ch\u1ECDn (\u0111o\u1EA1n n\xE0y kh\xF4ng c\xF3 c\xF4ng th\u1EE9c). B\u1EA1n c\xF3 th\u1EC3 t\u1EF1 so\u1EA1n b\xEAn d\u01B0\u1EDBi.</span>' : "\u0110\u1EB7t con tr\u1ECF trong c\xF4ng th\u1EE9c r\u1ED3i b\u1EA5m \u201CL\u1EA5y t\u1EEB Word\u201D, ho\u1EB7c so\u1EA1n m\u1EDBi b\xEAn d\u01B0\u1EDBi.";
        return;
      }
      const target = r.eq;
      $("editor-latex").value = target.latex;
      if ($("editor-display")) $("editor-display").checked = !target.inline;
      renderEditorPreview();
      const kindLabel = target.kind === "mathtype" ? "MathType" : target.kind === "native" ? "Word Equation" : "LaTeX";
      const where = r.count > 1 ? ` \u2014 c\xF4ng th\u1EE9c ${r.index + 1}/${r.count}${r.how === "cursor" ? " (g\u1EA7n con tr\u1ECF nh\u1EA5t)" : ""}` : "";
      if (statusEl) statusEl.innerHTML = `<span class="ok">\u0110\xE3 n\u1EA1p c\xF4ng th\u1EE9c (${kindLabel})${where}:</span> <code style="font-size:11px">${esc13(target.latex)}</code>`;
    } catch (e3) {
      if (statusEl) statusEl.innerHTML = `<span class="bad">L\u1ED7i: ${esc13(e3.message)}</span>`;
    }
  }
  async function applyFormulaToWord() {
    var _a8, _b, _c, _d;
    const tex = (_a8 = $("editor-latex")) == null ? void 0 : _a8.value.trim();
    const msgEl = $("editor-msg");
    if (!tex) {
      if (msgEl) msgEl.innerHTML = '<span class="bad">Vui l\xF2ng nh\u1EADp m\xE3 LaTeX tr\u01B0\u1EDBc khi c\u1EADp nh\u1EADt.</span>';
      return;
    }
    if (msgEl) msgEl.textContent = "\u0110ang ch\xE8n v\xE0o Word\u2026";
    try {
      const isDisplay = (_c = (_b = $("editor-display")) == null ? void 0 : _b.checked) != null ? _c : false;
      const asMathType = ((_d = document.querySelector("input[name=editor-format]:checked")) == null ? void 0 : _d.value) === "mathtype";
      const pkg = asMathType ? await makeMathTypePackage(tex, __spreadValues({ render: browserRender, inline: !isDisplay }, await mtOptions())) : makeEquationPackage(latexToOmml(tex, { display: isDisplay }));
      ignoreAutoUntil = Date.now() + 1200;
      await replaceSelection(pkg);
      if (msgEl) msgEl.innerHTML = `<span class="ok">\u0110\xE3 c\u1EADp nh\u1EADt c\xF4ng th\u1EE9c v\xE0o Word th\xE0nh c\xF4ng (${asMathType ? "\u0111\u1ED1i t\u01B0\u1EE3ng MathType" : "chu\u1EA9n Word Equation"}).</span>`;
    } catch (e3) {
      if (msgEl) msgEl.innerHTML = `<span class="bad">L\u1ED7i: ${esc13(e3.message)}</span>`;
    }
  }
  document.querySelectorAll(".sym-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sym-tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".sym-panel").forEach((p2) => {
        p2.classList.remove("active");
        p2.hidden = true;
      });
      btn.classList.add("active");
      const panel = $("sym-group-" + btn.dataset.group);
      if (panel) {
        panel.classList.add("active");
        panel.hidden = false;
      }
    });
  });
  document.querySelectorAll(".sym-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const ins = btn.dataset.ins;
      if (ins) insertSymbolAtCursor(ins);
    });
  });
  var _a;
  (_a = $("editor-latex")) == null ? void 0 : _a.addEventListener("input", renderEditorPreview);
  var _a2;
  (_a2 = $("editor-display")) == null ? void 0 : _a2.addEventListener("change", renderEditorPreview);
  var _a3;
  (_a3 = $("btn-load-sel")) == null ? void 0 : _a3.addEventListener("click", () => loadFormulaFromWord(true));
  var _a4;
  (_a4 = $("btn-clear-editor")) == null ? void 0 : _a4.addEventListener("click", () => {
    $("editor-latex").value = "";
    renderEditorPreview();
    if ($("editor-msg")) $("editor-msg").textContent = "";
    if ($("editor-status")) $("editor-status").textContent = "\u0110\u1EB7t con tr\u1ECF trong c\xF4ng th\u1EE9c r\u1ED3i b\u1EA5m \u201CL\u1EA5y t\u1EEB Word\u201D, ho\u1EB7c so\u1EA1n m\u1EDBi b\xEAn d\u01B0\u1EDBi.";
  });
  var _a5;
  (_a5 = $("btn-apply-editor")) == null ? void 0 : _a5.addEventListener("click", applyFormulaToWord);
  var _a6;
  (_a6 = $("editor-latex")) == null ? void 0 : _a6.addEventListener("keydown", (ev) => {
    if ((ev.ctrlKey || ev.metaKey) && ev.key === "Enter") {
      ev.preventDefault();
      applyFormulaToWord();
    }
  });
  $("btn-env").addEventListener("click", () => {
    var _a8, _b, _c;
    const lines = [];
    lines.push("Office c\xF3: " + (typeof Office !== "undefined") + ", Word c\xF3: " + (typeof Word !== "undefined"));
    try {
      const c = Office.context;
      lines.push("host=" + ((_a8 = c.diagnostics) == null ? void 0 : _a8.host) + " platform=" + ((_b = c.diagnostics) == null ? void 0 : _b.platform) + " version=" + ((_c = c.diagnostics) == null ? void 0 : _c.version));
      for (const v of ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]) lines.push(`WordApi ${v}: ${c.requirements.isSetSupported("WordApi", v)}`);
    } catch (e3) {
      lines.push("l\u1ED7i: " + e3.message);
    }
    $("diag-log").textContent = lines.join("\n");
  });
  $("btn-dump").addEventListener("click", async () => {
    try {
      const items = await readParagraphs({ kind: "selection" });
      const out = [];
      for (const it of items.slice(0, 3)) {
        const names = [...it.pkg.matchAll(/pkg:name="([^"]+)"[^>]*>/g)].map((m) => m[1]);
        const s = scanPackage(it.pkg);
        out.push(`\u2014 \u0111o\u1EA1n ${it.index}: g\xF3i ${it.pkg.length} k\xFD t\u1EF1, ${names.length} ph\u1EA7n:
  ${names.join("\n  ")}`);
        out.push(`  c\xF4ng th\u1EE9c nh\u1EADn ra: ${s.equations.map((e3) => {
          var _a8;
          return `${e3.kind}:${(_a8 = e3.latex) != null ? _a8 : "\u2717 " + e3.error}`;
        }).join(" | ") || "kh\xF4ng c\xF3"}`);
        const body = /<w:body>([\s\S]*?)<\/w:body>/.exec(it.pkg);
        out.push("  w:body (400 k\xFD t\u1EF1 \u0111\u1EA7u): " + (body ? body[1].slice(0, 400) : "?"));
      }
      $("diag-log").textContent = out.join("\n") || "Kh\xF4ng c\xF3 \u0111o\u1EA1n n\xE0o \u0111\u01B0\u1EE3c ch\u1ECDn.";
    } catch (e3) {
      $("diag-log").textContent = "L\u1ED7i: " + e3.message;
    }
  });
  $("btn-guide").addEventListener("click", () => {
    const url = "https://giasu.ai.vn/word-addin/su-dung.html";
    try {
      window.open(url, "_blank", "noopener");
    } catch (e3) {
      location.href = url;
    }
  });
  $("copy-acct").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("4802518888");
      $("acct-msg").textContent = "\u0110\xE3 sao ch\xE9p";
    } catch (e3) {
      $("acct-msg").textContent = "H\xE3y ch\u1ECDn v\xE0 sao ch\xE9p th\u1EE7 c\xF4ng";
    }
  });
  var autoTimer = null;
  var lastAutoSig = "";
  var ignoreAutoUntil = 0;
  function onSelectionChanged() {
    if (Date.now() < ignoreAutoUntil) return;
    clearTimeout(autoTimer);
    autoTimer = setTimeout(async () => {
      var _a8, _b;
      document.dispatchEvent(new CustomEvent("texcraft:selection"));
      if (!((_a8 = $("editor-auto")) == null ? void 0 : _a8.checked) || !((_b = $("tab-editor")) == null ? void 0 : _b.classList.contains("active"))) return;
      if (document.hasFocus() && document.activeElement === $("editor-latex")) return;
      try {
        const r = pickEquation(await readCursorContext());
        if (!r.eq) return;
        if (r.eq.latex === lastAutoSig && $("editor-latex").value === r.eq.latex) return;
        lastAutoSig = r.eq.latex;
        await loadFormulaFromWord(false);
      } catch (e3) {
      }
    }, 350);
  }
  function installSelectionWatcher() {
    if (!FULL2) return;
    try {
      Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onSelectionChanged);
    } catch (e3) {
    }
  }
  function requestStartupLoad() {
    try {
      if (Office.addin && Office.addin.setStartupBehavior) Office.addin.setStartupBehavior(Office.StartupBehavior.load);
    } catch (e3) {
    }
  }
  function registerRibbonActions() {
    var _a8;
    try {
      if (!((_a8 = Office.actions) == null ? void 0 : _a8.associate)) return;
      for (const t of ["eq", "editor", "exam", "about", "figures", "calc", "worksheet"]) {
        Office.actions.associate("showTab_" + t, async () => {
          switchTab(t);
          try {
            await Office.addin.showAsTaskpane();
          } catch (e3) {
          }
        });
      }
    } catch (e3) {
    }
  }
  async function boot() {
    var _a8;
    if (typeof Office !== "undefined" && Office.onReady) {
      try {
        await Promise.race([Office.onReady(), new Promise((_r, rej) => setTimeout(() => rej(new Error("timeout")), 4e3))]);
      } catch (e3) {
      }
      registerRibbonActions();
    }
    if (!hasWord() || typeof Office !== "undefined" && !((_a8 = Office.context) == null ? void 0 : _a8.host)) {
      const note = document.createElement("div");
      note.className = "notice";
      try {
        const mock = await Promise.resolve().then(() => (init_mock_word(), mock_word_exports));
        await mock.install(new URLSearchParams(location.search).get("doc") || "/fixtures/sample-body.xml");
        note.textContent = "Ch\u1EBF \u0111\u1ED9 th\u1EED (kh\xF4ng c\xF3 Word): d\xF9ng t\xE0i li\u1EC7u gi\u1EA3 l\u1EADp \u0111\u1ECDc t\u1EEB /fixtures. M\u1ECDi thay \u0111\u1ED5i ch\u1EC9 n\u1EB1m trong b\u1ED9 nh\u1EDB tr\xECnh duy\u1EC7t.";
      } catch (e3) {
        note.textContent = "Trang n\xE0y ch\u1EC9 ho\u1EA1t \u0111\u1ED9ng b\xEAn trong Word (Ch\xE8n \u2192 Add-ins). M\u1EDF n\xF3 t\u1EEB Word nh\xE9.";
      }
      document.body.prepend(note);
    }
    try {
      if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) $("apply-kbd").textContent = "\u2318\u21A9";
    } catch (e3) {
    }
    if (FULL2) initEditor();
    installSelectionWatcher();
    requestStartupLoad();
    checkUrlTab();
  }
  function initEditor() {
    attachLatexAutocomplete($("editor-latex"), { onChange: () => renderEditorPreview() });
    visual = createVisualEditor({ host: $("editor-visual"), textarea: $("editor-latex"), onChange: () => renderEditorPreview() });
    mountEditorToolbar($("editor-toolbar"), $("editor-latex"), { visual });
    const KEY_IN = "texcraft-editor-input";
    const setInput = async (mode) => {
      try {
        await visual.setActive(mode === "visual");
      } catch (e3) {
        $("editor-msg").innerHTML = `<span class="bad">Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c \xF4 nh\u1EADp tr\u1EF1c quan: ${esc13(e3.message)}</span>`;
        mode = "latex";
        await visual.setActive(false);
      }
      const r = document.querySelector(`input[name=editor-input][value=${mode}]`);
      if (r) r.checked = true;
      try {
        localStorage.setItem(KEY_IN, mode);
      } catch (e3) {
      }
      renderEditorPreview();
    };
    document.querySelectorAll("input[name=editor-input]").forEach((r) => r.addEventListener("change", () => setInput(r.value)));
    let saved = "latex";
    try {
      saved = localStorage.getItem(KEY_IN) || "latex";
    } catch (e3) {
    }
    if (saved === "visual") setInput("visual");
  }
  async function registerOffline() {
    const note = $("offline-status");
    try {
      if (!("serviceWorker" in navigator)) {
        if (note) note.textContent = "B\u1EA3n Word n\xE0y ch\u01B0a h\u1ED7 tr\u1EE3 l\u01B0u \u0111\u1EC3 d\xF9ng khi m\u1EA5t m\u1EA1ng.";
        return;
      }
      const dev = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) && !/[?&]sw=1/.test(location.search);
      if (dev) {
        if (note) note.textContent = "Ch\u1EBF \u0111\u1ED9 ph\xE1t tri\u1EC3n: kh\xF4ng l\u01B0u b\u1EA3n offline.";
        return;
      }
      const base = new URL("../sw.js", location.href);
      await navigator.serviceWorker.register(base.href, { scope: new URL("../", location.href).pathname });
      const reg = await navigator.serviceWorker.ready;
      const ask = () => reg.active && reg.active.postMessage("status");
      navigator.serviceWorker.addEventListener("message", (ev) => {
        if (ev.data && ev.data.type === "status" && note) note.innerHTML = `<span class="ok">\u0110\xE3 l\u01B0u ${ev.data.files} t\u1EC7p \u0111\u1EC3 d\xF9ng khi m\u1EA5t m\u1EA1ng</span> (gi\u1EEF ${ev.data.maxAgeDays} ng\xE0y, t\u1EF1 l\xE0m m\u1EDBi khi c\xF3 m\u1EA1ng; b\u1EA3n ${esc13(ev.data.version)}).`;
      });
      ask();
      setTimeout(ask, 3e3);
    } catch (e3) {
      if (note) note.textContent = "Kh\xF4ng b\u1EADt \u0111\u01B0\u1EE3c ch\u1EBF \u0111\u1ED9 offline: " + e3.message;
    }
  }
  var _a7;
  (_a7 = $("btn-offline-sympy")) == null ? void 0 : _a7.addEventListener("click", async () => {
    const st = $("offline-sympy-status");
    try {
      const m = await Promise.resolve().then(() => (init_sympy_bridge(), sympy_bridge_exports));
      await m.loadSympy((t) => {
        st.textContent = t;
      });
      st.innerHTML = '<span class="ok">\u0110\xE3 t\u1EA3i SymPy; l\u1EA7n sau t\xEDnh to\xE1n \u0111\u01B0\u1EE3c khi m\u1EA5t m\u1EA1ng.</span>';
    } catch (e3) {
      st.innerHTML = `<span class="bad">${esc13(e3.message)}</span>`;
    }
  });
  registerOffline();
  boot();
})();
