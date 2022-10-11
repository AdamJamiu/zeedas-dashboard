import React from 'react';
import Head from 'next/head';
import SideNav from '../components/navigations/Sidenav';
import Main from '../components/Main';
import Navbar from '../components/navigations/Navbar';
import Sidebar from '../components/navigations/Sidebar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function Home() {

  const [isResponsive, setIsResponsive] = React.useState(false)

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="AV Designer sample dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid-container">

        <div className='sidenav w-[300px] h-full fixed left-0 top-0 z-10 rounded flex flex-row'>
          <SideNav />
          <Sidebar />
        </div>

        <div className='py-[2em] px-[1em] bg-primary laptop:ml-[301px] ml-0'>
          <div className="w-full text-right text-greyTxt">
            <MoreHorizIcon color="inherit" />
          </div>
          <Main />
        </div>
      </div>

    </div>
  )
}
