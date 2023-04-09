import ferrari from '../images/partners/ferrari.svg'
import microsoft from '../images/partners/microsoft.svg'
import PartnerLogo from './PartnerLogo';

const Partners = () => {
  return (
    <div className='
      flex flex-row justify-center items-center gap-[5.5rem] flex-wrap px-2
    '>
      <PartnerLogo name='ferrari' />
      <PartnerLogo name='microsoft' />
      <PartnerLogo name='nationalgeografic' />
      <PartnerLogo name='deloitte' />
      <PartnerLogo name='google' />
    </div>
  )
}

export default Partners;