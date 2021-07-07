/**
 * Shim for react-clipboard's <ClipboardButton>
 *
 * Implemented in terms of the more modern, more maintained
 * react-copy-to-clipboard package
 */

import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default (props) => {
  const {children, className, onSuccess} = props
  const text = props["data-clipboard-text"]
  return <CopyToClipboard text={text} onCopy={onSuccess}>
           <button className={ className }>{children}</button>
         </CopyToClipboard>
}
