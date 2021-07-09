import React from 'react'
import PropTypes from 'prop-types'

import { Element, Variant } from '../../asset-components.js'
import './Item.scss';

export default function Item({ element, variant, onClickHyperlink }) {
  const slugClass = variant
    ? `tlbx-element-${element.name}-${variant.name}`
    : `tlbx-element-${element.name}`;
  const wrapper =
    variant && variant.wrapper ? variant.wrapper : element.wrapper;
  const background =
    variant && variant.background ? variant.background : element.background;

  const html = variant ? variant.html() : element.html()

  return (
    <div
      className={`tlbx-item-preview ${wrapper} ${slugClass}`}
      style={background ? { backgroundColor: background } : {}}
      dangerouslySetInnerHTML={{ __html: html }}
      onClick={onClick(onClickHyperlink)}
    />
  )
}

Item.propTypes = {
  element: PropTypes.instanceOf(Element).isRequired,
  variant: PropTypes.instanceOf(Variant),
  onClickHyperlink: PropTypes.func
}

Item.defaultProps = {
  variant: undefined,
  onClickHyperlink: eatClick
}

function onClick (thenDoWhat) {
  return (e) => {
    const link = ancestorLink(e.target)
    if (!link) return
    thenDoWhat(link, e)
  }
}

function eatClick (link, e) {
  e.preventDefault()
}

function ancestorLink (node) {
  if (node.tagName === 'A') return node;
  if (node.parentNode) {
    return ancestorLink(node.parentNode);
  }
  return false;
}
