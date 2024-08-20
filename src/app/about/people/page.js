"use client"
import Card from "../../components/Card"
import nn from "../../images/officers/nn.jpg"
import ks from "../../images/officers/ks.jpg"
import jb from "../../images/officers/jb.jpg"
import am from "../../images/officers/am.jpg"
import bm from "../../images/officers/bm.jpg"
import kds from "../../images/officers/kds.jpg"
import EmblaCarousel from "@/app/components/EmblaCarousel";
import Caoursel1 from "@/app/images/carousel1.png"
import Caoursel2 from "@/app/images/carousel2.jpg"
import Caoursel3 from "@/app/images/carousel3.jpg"
import FlippableCard from "@/app/components/FlippableCard"


const OurTeam = () =>
{
    const OPTIONS = { loop: true };
    const imagesForCarousel = [
        {
            image: Caoursel1,
        },
        {
            image: Caoursel2,
        },
        {
            image: Caoursel3,
        },
    ];
    return (
        <div className="section">


            <div className="text-center my-[2rem]">
                <h1 className="font-bold text-[3rem] md:text-[3.5rem] lg:text-[4rem] inline">Our </h1>
                <h1 className="text-UGA font-bold text-[3rem] md:text-[3.5rem] lg:text-[4rem] inline">People</h1>
            </div>
            <EmblaCarousel slides={imagesForCarousel} banner={false} options={OPTIONS} />
            <p className="text-center pt-10 text-base sm:text-lg md:text-xl page-main-side-padding">
                Each year, DevDogs embarks on a new full-stack software project,
                collaborating on a concept from idea to implementation. Our software
                projects are always open-sourced and aligned to benefit the UGA or
                Athens community. After all, we’re the most familiar with its
                pain-points, so we’re the best equipped to help our people one
                project at a time. Take a look at what we’ve done below!
            </p>

            <div className="text-center page-main-side-padding">
                <h3 className="text-black text-[3rem]  text-center mt-[5rem] p-0 font-extrabold"> 2024 - 2025 </h3>

                <h2 className="font-bold inline text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-UGASecondary">Executive </h2>
                <h2 className="font-bold inline text-[2rem] md:text-[2.5rem] lg:text-[3rem]">Board</h2>
            </div>
            

            <div id="teamtitle page-main-side-padding">
                <div id="grid">
                    {/* <Card name={'Justin Brand'} title={'President'} image={jb} bgcolor="brown-dark" />
                    <Card name={'Nivedha Natarajan'} title={'Technical Officer'} image={nn} bgcolor="cyan-light" />
                    <Card name={'Kelsey Sterner'} title={'Community Relations Officer'} image={ks} bgcolor="pink-light" />
                    <Card name={'Avery Marco'} title={'Instructional Officer'} image={am} bgcolor="pink" />
                    <Card name={'Kade Styron'} title={'Corporate & Career Officer'} image={kds} bgcolor="pink-dark" />
                    <Card name={'Bryant Monahan'} title={'Campus Initiatives Officer'} image={bm} bgcolor="brown-light" /> */}


                    <FlippableCard image={ks} />
                    <FlippableCard image={nn} />
                    <FlippableCard image={jb} />
                    <FlippableCard image={am} />
                    <FlippableCard image={bm} />
                    <FlippableCard image={kds} />
                    <br />
                </div>
            </div>


            <div className="text-center ">
                

                <h2 className="font-bold inline text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-UGASecondary">Notable </h2>
                <h2 className="font-bold inline text-[2rem] md:text-[2.5rem] lg:text-[3rem]">Help</h2>
            </div>

            <div className="text-center">
                
<h2 className="font-bold inline text-[2rem] md:text-[2.5rem] lg:text-[3rem]">Focus Group </h2>
                <h2 className="font-bold inline text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-UGASecondary">Leads</h2>
                
            </div>

            <div className="text-center">
                

                
                <h2 className="font-bold inline text-[2rem] md:text-[2.5rem] lg:text-[3rem]">Contributors</h2>
            </div>

            
        </div>
    )
}

export default OurTeam;