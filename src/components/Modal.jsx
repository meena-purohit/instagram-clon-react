 export default function Modal({children, onClose }) {
    return(
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        onClick={onClose}
        >
            <div className="bg-white rounded-lg animate-scalein max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
            > 
                <button className="absolute top-3 right-3 text-xl"
                onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    )
}