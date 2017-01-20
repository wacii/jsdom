"use strict";

const ElementImpl = require("./Element-impl").implementation;
const closest = require("../helpers/traversal").closest;

class SVGElementImpl extends ElementImpl {
  get ownerSVGElement() {
    return closest(this.parentNode, "svg");
  }

  // https://svgwg.org/svg2-draft/coords.html#EstablishingANewSVGViewport
  get viewportElement() {
    return closest(this.parentNode, "svg", "symbol");
  }
}

exports.implementation = SVGElementImpl;
