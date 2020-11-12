import React from 'react'
import svg from '../../assets/no-data.svg'
import { Asset } from './Asset'

export default {
  title: 'Display/Asset',
  component: Asset,
}

export const Example = () => <Asset src={svg} />
