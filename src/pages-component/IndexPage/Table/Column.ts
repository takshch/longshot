import { ColumnRenderersType } from '../Table'

type ColumnProps = {
  index: number
  value: any
  columnRenderers: ColumnRenderersType
}

export default function Column({ index, value, columnRenderers }: ColumnProps) {
  const renderer = columnRenderers[index]

  if (renderer) {
    return renderer(value)
  }

  return value;
}