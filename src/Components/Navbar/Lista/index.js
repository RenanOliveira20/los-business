import React, { useEffect, useState } from 'react'
import logo from "../../../images/los-business.jpg"
import { Logo, ListIcons, UserIcons, Lupa, Bag, User, SearchBar } from './styles'

const Lista = () => {
    const [search, changeSearch] = useState({ searchItem: false })
    useEffect(() => {
        console.log(search)
    })
    return (
        <ListIcons>
            <Logo src={logo} alt="logo los business" />
            <UserIcons >
                
                        <SearchBar>
                            <input type= "text" placeholder='Busque por produtos, marcas, categorias ...'/>
                        <Lupa />
                        </SearchBar>
                <div style={{ color: 'white' }}>
                    <Bag />
                    <span></span>
                    <User />
                </div>
            </UserIcons>
        </ListIcons>
    )
}

export default Lista