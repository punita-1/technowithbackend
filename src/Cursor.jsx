import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './cursor.css'

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", mouseMove)

        return () => { window.removeEventListener("mousemove", mouseMove); };
    }, [])

    // console.log(position)
    return (
        <motion.div className='cursor'
            animate={{ x: position.x+50, y: position.y+50 }}
        >
        </motion.div>
    )
}

export default Cursor
