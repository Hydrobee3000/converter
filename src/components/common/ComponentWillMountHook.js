import { useMemo } from 'react'

//хук вызываемый перед тем как компонент вмонтируется
export const useComponentWillMount = (func) => {
  useMemo(func, [])
}
