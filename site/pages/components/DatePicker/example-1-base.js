/**
 * cn - 基本用法
 * en - Base
 */
import React from 'react'
import { DatePicker } from 'shineout'

export default function () {
  return (
    <DatePicker format="YYYY/MM/DD" defaultValue={Date.now()} />
  )
}
