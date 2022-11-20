import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
//Kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../components/Film/Film';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'
import { LayDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    console.log('propsHome', props);

	const dispatch = useDispatch()
   
	useEffect(()=>{
		dispatch(LayDanhSachPhimAction())
	},[])

    return (
        <div>
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >

                    <MultipleRowSlick arrFilm={arrFilm}/>
                    {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu />

            </div>
        </div>
    )
}