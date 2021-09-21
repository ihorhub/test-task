/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './List.css'
import logo from './icon/Group 181.svg'

export const List = () => {
  return (
    <div>
      <div className="cont">
        <div className="logo">
          {' '}
          <img src={logo} alt="{logo}" />
        </div>

        <div className="list-cont">
          <ul className="ulca">
            {' '}
            <li className="dec">
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать квартиру посуточно Киев{' '}
              </a>
            </li>{' '}
            <li className="dec">
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать апартаменты посуточно Киев{' '}
              </a>
            </li>{' '}
            <li className="dec">
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать дом посуточно Киев{' '}
              </a>
            </li>{' '}
            <li className="dec">
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать номер в гостинице Киев{' '}
              </a>
            </li>{' '}
            <li className="dec">
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать номер в отеле Киев{' '}
              </a>
            </li>
            <li className="dec">
              {' '}
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать место в хостеле Киев{' '}
              </a>
            </li>
            <li className="dec">
              {' '}
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать комнату в квартире посуточно Переяслав - Хмелницкий{' '}
              </a>
            </li>
            <li className="dec">
              {' '}
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать комнату в доме посуточно Переяслав - Хмелницкий{' '}
              </a>
            </li>
            <li className="dec">
              {' '}
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать номер в Guest House Киев{' '}
              </a>
            </li>
            <li className="dec">
              {' '}
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать номер в Capsule Hotel Киев{' '}
              </a>
            </li>
            <li className="dec">
              {' '}
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать номер в мотеле Киев{' '}
              </a>
            </li>
            <li className="dec">
              {' '}
              <a href="#" className="ssylka" type="text/html">
                {' '}
                Сдать жилье посуточно Киев{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
