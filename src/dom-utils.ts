/**
 * Wrap an HTMLElement around each element in a list of elements
 * Modified global function based on Kevin Jurkowski's implementation
 * here: http://stackoverflow.com/questions/3337587/wrapping-a-dom-element-using-pure-javascript/13169465#13169465
 */
function wrap(wrapper, elms) {
  if (!elms.length) {
    elms = [elms];
  }

  for (var i = elms.length - 1; i >= 0; i--) {
    var child = (i > 0) ? wrapper.cloneNode(true) : wrapper;
    var el    = elms[i];

    var parent  = el.parentNode;
    var sibling = el.nextSibling;

    child.appendChild(el);

    if (sibling) {
      parent.insertBefore(child, sibling);
    } else {
      parent.appendChild(child);
    }
  }
}

/**
 * Wrap an HTMLElement around another set of elements
 * Modified global function based on Kevin Jurkowski's implementation
 * here: http://stackoverflow.com/questions/3337587/wrapping-a-dom-element-using-pure-javascript/13169465#13169465
 */
function wrapAll(wrapper, elms) {
  var el = elms.length ? elms[0] : elms,
    parent  = el.parentNode,
    sibling = el.nextSibling;

  wrapper.appendChild(el);

  while (elms.length) {
    wrapper.appendChild(elms[0]);
  }

  if (sibling) {
    parent.insertBefore(wrapper, sibling);
  }
  else {
    parent.appendChild(wrapper);
  }
}
