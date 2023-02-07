import { ReactNode } from 'react'
import s from './grid.module.css'
import cn from 'classnames'
type Props = {
  children: ReactNode[]
  layout?: 'A' | 'B'
}
const Grid = ({ children, layout }: Props) => {
  const rootClassNames = cn(s.root, {
    [s.layoutA]: layout === 'A',
    [s.layoutB]: layout === 'B',
  })
  return <div className={rootClassNames}>{children}</div>
}

export default Grid
