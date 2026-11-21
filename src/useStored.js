import { useEffect, useState } from 'react'

// Lista persistida en localStorage; tolera datos corruptos o almacenamiento bloqueado (modo privado).
export function useStoredList(key) {
  const [list, setList] = useState(() => {
    try {
      const v = JSON.parse(localStorage.getItem(key))
      return Array.isArray(v) ? v : []
    } catch {
      return []
    }
  })
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(list)) } catch { /* sin persistencia, la app sigue funcionando */ }
  }, [key, list])
  return [list, setList]
}
