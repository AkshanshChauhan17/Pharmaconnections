import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMobile, AiOutlineWhatsApp, AiOutlineX, AiOutlineYoutube } from 'react-icons/ai';

export default function TopStrip() {
    return <div className="ts">
        <div className="l">
            <div>50/51-4, BTM 2nd Stage, Bengaluru - 560076</div>
            <div><AiOutlineMail /> info@pharmaconnections.in</div>
            <div><AiOutlineMobile /> +91 86608-77518</div>
        </div>
        <div className="r">
            <AiOutlineWhatsApp className='icon' />
            <AiOutlineLinkedin className='icon' />
            <AiOutlineFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <AiOutlineYoutube className='icon' />
            <AiOutlineX className='icon' />
            <AiOutlineGoogle className='icon' />
        </div>
    </div>
}