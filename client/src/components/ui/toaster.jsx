import { useEffect, useState } from "react"
import { useToast } from "../../hooks/use-toast.js"

export function Toaster() {
  const { toasts } = useToast()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-0 z-[100] flex flex-col gap-2 w-full max-w-[420px] p-4 bottom-0 right-0 sm:top-auto sm:bottom-4 sm:right-4 sm:max-h-[calc(100vh-8px)] overflow-hidden">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <div
            key={id}
            className={`bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-2 transition-all transform ${
              props.open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{
              animation: `${props.open ? 'slideIn' : 'slideOut'} 0.2s ease-out forwards`,
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                {title && <h4 className="font-bold text-gray-900">{title}</h4>}
                {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
              </div>
              <button
                onClick={() => props.onOpenChange(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="sr-only">Close</span>
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>
            {action && <div className="mt-2">{action}</div>}
          </div>
        )
      })}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(calc(100% + 1rem));
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(calc(100% + 1rem));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}