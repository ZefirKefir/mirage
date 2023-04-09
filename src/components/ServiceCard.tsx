import React from 'react';

import { RiArrowRightSFill } from 'react-icons/ri';

interface ServiceCardProps {
  title: string;
  descr: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({title, descr, index}) => {
  const icon = (index === 0) ? <svg className='transition block my-7' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_103)">
                                <path className='transition group-hover:fill-white group-hover:stroke-white' d="M50.175 26.6598V26.6584L49.4794 25.9066L49.5398 25.7423L49.5397 25.7423L38.3202 21.6134V8.37653V8.20153H38.3193C38.3384 7.78651 38.0896 7.39231 37.6844 7.24632C37.6842 7.24624 37.684 7.24615 37.6837 7.24607L25.8309 2.88479C25.8308 2.88474 25.8306 2.88469 25.8305 2.88464C25.6172 2.80512 25.3828 2.80512 25.1695 2.88464C25.1694 2.88469 25.1692 2.88474 25.1691 2.88479L13.315 7.24652L13.3144 7.24673C13.0502 7.34503 12.8444 7.55329 12.7456 7.81362H12.6798V7.98862V21.6134L1.46019 25.7423L1.45961 25.7426C1.19537 25.8409 0.989598 26.0491 0.890798 26.3094H0.825V26.4844V40.6632V40.8382H0.825463C0.825294 41.2392 1.07159 41.6106 1.46032 41.7533L13.314 46.1149C13.314 46.1149 13.3141 46.1149 13.3142 46.115C13.5276 46.195 13.7625 46.195 13.976 46.115C13.9761 46.115 13.9762 46.1149 13.9763 46.1149L25.5 41.8745L37.0237 46.1149C37.0237 46.1149 37.0238 46.1149 37.0239 46.115C37.2374 46.195 37.4723 46.195 37.6858 46.115C37.6859 46.1149 37.6859 46.1149 37.686 46.1149L49.5398 41.7533C49.7906 41.661 49.9898 41.469 50.0942 41.2261H50.175V41.0511L50.175 26.8724L50.175 26.8716V26.8715L50.175 26.8712L50.175 26.87L50.175 26.8655L50.1749 26.8485L50.1748 26.7922C50.1747 26.7478 50.1747 26.6951 50.175 26.6598ZM12.6798 31.7034V43.8066L2.75565 40.1552V28.051L12.6798 31.7034ZM13.5829 23.3557L22.6193 26.6814L13.6452 29.9831L4.60971 26.6584L13.5829 23.3557ZM24.5347 28.051V40.1552L14.6105 43.8066V31.7034L24.5347 28.051ZM24.5347 13.2075V25.2658L14.6105 21.6134V9.5552L24.5347 13.2075ZM16.4646 8.16258L25.5 4.83785L34.5354 8.16258L25.5 11.4873L16.4646 8.16258ZM26.4653 13.2075L36.3895 9.5552V21.6134L26.4653 25.2658V13.2075ZM36.3895 31.7034V43.8066L26.4653 40.1552V28.051L36.3895 31.7034ZM46.3903 26.6584L37.3548 29.9831L28.3807 26.6814L37.4171 23.3557L46.3903 26.6584ZM48.2444 28.051V40.1552L38.3202 43.8066V31.7034L48.2444 28.051Z" fill="#FC85B4" stroke="#FC85B4" strokeWidth="0.35"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_103">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
  </svg> : (index === 1) ? <svg className='transition block my-7' width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_124)">
                              <path className='transition group-hover:fill-white group-hover:stroke-white' d="M6.30311 0H1.26548C0.570005 0 0.00613403 0.563871 0.00613403 1.25943V6.38105C0.00613403 7.07661 0.569921 7.64048 1.26556 7.64048C1.96112 7.64048 2.52499 7.07661 2.52499 6.38105V2.51886H6.3032C6.99876 2.51886 7.56263 1.95499 7.56263 1.25943C7.56254 0.563871 6.99867 0 6.30311 0Z" fill="#F78CB6"/>
                              <path className='transition group-hover:fill-white group-hover:stroke-white' d="M41.7345 0H36.6969C36.0013 0 35.4375 0.563871 35.4375 1.25943C35.4375 1.95499 36.0013 2.51886 36.6969 2.51886H40.4751V6.38105C40.4751 7.07661 41.039 7.64048 41.7345 7.64048C42.4301 7.64048 42.994 7.07661 42.994 6.38105V1.25943C42.994 0.563871 42.4301 0 41.7345 0Z" fill="#F78CB6"/>
                              <path className='transition group-hover:fill-white group-hover:stroke-white' d="M6.30311 40.469H2.5249V36.6068C2.5249 35.9113 1.96103 35.3474 1.26547 35.3474C0.569914 35.3474 0.00604248 35.9113 0.00604248 36.6068V41.7285C0.00604248 42.424 0.56983 42.9879 1.26547 42.9879H6.30311C6.99867 42.9879 7.56254 42.424 7.56254 41.7285C7.56254 41.0329 6.99867 40.469 6.30311 40.469Z" fill="#F78CB6"/>
                              <path className='transition group-hover:fill-white group-hover:stroke-white' d="M41.7345 35.3474C41.039 35.3474 40.4751 35.9113 40.4751 36.6068V40.469H36.6969C36.0013 40.469 35.4375 41.0329 35.4375 41.7285C35.4375 42.424 36.0013 42.9879 36.6969 42.9879H41.7345C42.4301 42.9879 42.994 42.424 42.994 41.7285V36.6068C42.994 35.9113 42.4301 35.3474 41.7345 35.3474Z" fill="#F78CB6"/>
                              <path className='transition group-hover:fill-white group-hover:stroke-white' d="M39.6717 10.332L22.1313 0.16969C21.7409 -0.0565635 21.259 -0.0565635 20.8686 0.16969L3.32107 10.3319C2.93423 10.556 2.69278 10.9734 2.69278 11.4208C2.69278 11.4233 2.69303 11.4259 2.69303 11.4283V31.5782C2.69303 32.0299 2.93852 32.4527 3.33383 32.6753L20.8687 42.8303C21.0576 42.9397 21.2823 43 21.5001 43C21.7274 43 21.9496 42.9356 22.1315 42.8303L39.6592 32.6752C39.6621 32.6735 39.665 32.6718 39.6679 32.6701C40.0742 32.377 40.2931 32.1307 40.2992 31.5934C40.2993 31.5883 40.2997 31.5834 40.2997 31.5783V11.4285C40.2997 11.4259 40.3 11.4234 40.3 11.421C40.3 10.9731 40.0584 10.5557 39.6717 10.332ZM20.2406 39.5554L6.48174 31.5839L17.0889 25.501C17.6923 25.155 17.9009 24.3853 17.5548 23.782C17.2089 23.1786 16.4393 22.97 15.8358 23.316L5.21164 29.4042V13.5978L20.2406 22.2289V39.5554ZM21.5 20.0475L6.47989 11.4172L21.5 2.71492L36.5201 11.4172L21.5 20.0475ZM37.7891 29.4042L27.1642 23.316C26.5608 22.97 25.7912 23.1785 25.4452 23.7819C25.0991 24.3853 25.3077 25.1549 25.9111 25.5009L36.5183 31.5837L22.7593 39.5553V22.2289L37.789 13.5978V29.4042H37.7891Z" fill="#F78CB6"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_124">
                              <rect width="43" height="43" fill="white"/>
                              </clipPath>
                              </defs>
  </svg> : (index === 2) ? <svg className='transition block my-7' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_94)">
                              <path className='transition group-hover:fill-white group-hover:stroke-white' d="M47.7482 40.4475H47.7482V13.8153V13.8083L47.7483 13.8083C47.8112 11.5551 46.0355 9.67755 43.7822 9.61474L43.7822 9.61474C43.6887 9.6121 43.595 9.61273 43.5014 9.61653L43.4912 9.61695V9.61674H33.9504H33.7004V9.36674V7.55234V7.54585L33.7005 7.54585C33.7616 5.19562 31.9059 3.24083 29.5557 3.17971L47.7482 40.4475ZM47.7482 40.4475L47.7483 40.4539L47.7482 40.4475ZM18.5564 3.17822H18.5563C16.2053 3.17738 14.2987 5.08262 14.2979 7.43369L18.5564 3.17822ZM18.5564 3.17822H29.4435C29.4806 3.17822 29.5179 3.17875 29.5556 3.17971L18.5564 3.17822ZM14.2996 7.55223H14.2995V9.36674V9.61674H14.0495H4.50874H4.49851L4.49852 9.61653C2.24623 9.52437 0.34571 11.2753 0.2534 13.5274L14.2996 7.55223ZM14.2996 7.55223L14.2994 7.54513M14.2996 7.55223L14.2994 7.54513M14.2994 7.54513C14.2984 7.50854 14.2979 7.47143 14.2979 7.43377L14.2994 7.54513ZM0.251801 13.8153H0.251702V40.4475V40.454L0.251617 40.454C0.19056 42.8042 2.04626 44.759 4.39646 44.8201C4.39651 44.8201 4.39655 44.8201 4.39659 44.8201L4.3901 45.07L0.251801 13.8153ZM0.251801 13.8153L0.251602 13.8083M0.251801 13.8153L0.251602 13.8083M0.251602 13.8083C0.248966 13.7147 0.249595 13.6211 0.253397 13.5275L0.251602 13.8083ZM18.4227 5.02314L18.4229 5.02312C18.467 5.02078 18.5117 5.01952 18.5568 5.01963M18.4227 5.02314L29.4435 5.26963V5.01963H29.4433C29.4432 5.01963 29.4432 5.01963 29.4431 5.01963L18.5568 5.01963M18.4227 5.02314C17.0929 5.09512 16.0726 6.22975 16.1408 7.55891L18.4227 5.02314ZM18.5568 5.01963H18.5564V5.26963L18.5571 5.01964C18.557 5.01964 18.5569 5.01963 18.5568 5.01963ZM43.625 42.9768L43.6248 42.9768C43.5806 42.9792 43.5358 42.9804 43.4906 42.9803M43.625 42.9768L43.4913 42.7303M43.625 42.9768C44.9549 42.9048 45.9752 41.7702 45.9071 40.441V32.7798V32.3181L45.5204 32.5705C44.9227 32.9606 44.2168 33.1514 43.5039 33.1155L43.5039 33.1152H43.4913H31.6093H31.3593V33.3652V36.7402C31.2621 37.3184 30.7816 37.7559 30.1959 37.7978H17.8041C17.2185 37.7559 16.738 37.3184 16.6408 36.7402V33.3652V33.1152H16.3908H4.50874V33.1149L4.49621 33.1155C3.78329 33.1513 3.07736 32.9605 2.47962 32.5705L2.093 32.3182V32.7798V40.4411C2.09088 40.4831 2.08975 40.5255 2.08987 40.5683M43.625 42.9768L4.50874 42.7303M43.4906 42.9803L43.4913 42.7303M43.4906 42.9803H43.4913V42.7303M43.4906 42.9803H4.50912M43.4913 42.7303H4.50874M4.50912 42.9803L4.50874 42.7303M4.50912 42.9803H4.50874V42.7303M4.50912 42.9803C3.175 42.9823 2.09194 41.9024 2.08987 40.5683M2.08987 40.5683C2.08987 40.5683 2.08986 40.5682 2.08986 40.5682L2.33986 40.5678L2.08987 40.5685C2.08987 40.5685 2.08987 40.5684 2.08987 40.5683ZM43.625 31.2703L43.6248 31.2703C43.5806 31.2727 43.5358 31.2739 43.4906 31.2738M43.625 31.2703L43.4913 31.0238M43.625 31.2703C44.9549 31.1983 45.9751 30.0637 45.9069 28.7344M43.625 31.2703L45.9069 28.7344M43.4906 31.2738L43.4913 31.0238M43.4906 31.2738H43.4913V31.0238M43.4906 31.2738H31.6091H31.3591V31.0238V28.507C31.3591 28.2983 31.2396 28.1192 31.0162 27.9803C30.7904 27.8399 30.4863 27.7619 30.2043 27.7619H17.7956C17.5137 27.7619 17.2096 27.8399 16.9837 27.9803C16.7603 28.1192 16.6408 28.2983 16.6408 28.507V31.0238V31.2738H16.3908H4.50912M43.4913 31.0238H31.8591H31.6091V30.7738V28.507C31.6091 27.8631 30.8482 27.5119 30.2043 27.5119H17.7956C17.1517 27.5119 16.3908 27.8631 16.3908 28.507V30.7738V31.0238H16.1408H4.50874M4.50912 31.2738L4.50874 31.0238M4.50912 31.2738H4.50874V31.0238M4.50912 31.2738C3.175 31.2758 2.09194 30.1959 2.08987 28.8618M4.50874 31.0238C3.31266 31.0256 2.34166 30.0574 2.33986 28.8613M2.33986 28.8613L2.08986 28.8617C2.08986 28.8617 2.08987 28.8618 2.08987 28.8618M2.33986 28.8613C2.33975 28.8212 2.34087 28.7811 2.343 28.7411M2.33986 28.8613L2.343 28.7411M2.33986 28.8613L2.08987 28.862C2.08987 28.862 2.08987 28.8619 2.08987 28.8618M2.33986 28.8613L2.08987 28.8618M2.343 28.7411V13.8153V28.7411ZM2.093 13.8229C2.01978 12.5916 2.95626 11.5321 4.18829 11.4545L4.18831 11.4545C4.29859 11.4476 4.40943 11.4487 4.51972 11.4582H43.4803C44.7077 11.3533 45.7905 12.2598 45.9018 13.488M2.093 13.8229L45.6569 13.8153M2.093 13.8229V28.7346V13.8229ZM45.9018 13.488L45.6528 13.5106L45.9018 13.488C45.9018 13.488 45.9018 13.488 45.9018 13.488ZM45.9018 13.488C45.9119 13.5994 45.9136 13.7115 45.9069 13.8229M45.9069 13.8229V13.8153H45.6569M45.9069 13.8229V28.7344M45.9069 13.8229C45.9068 13.8256 45.9066 13.8283 45.9065 13.831L45.6569 13.8153M45.6569 13.8153L45.9069 28.7344M18.4821 35.7064V35.9564H18.7321H29.268H29.518V35.7064V29.8532V29.6032H29.268H18.7321H18.4821V29.8532V35.7064Z" fill="#F78CB6" stroke="#F78CB6" strokeWidth="0.5"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_94">
                              <rect width="48" height="48" fill="white"/>
                              </clipPath>
                              </defs>
  </svg> : (index === 3) ? <svg className='transition block my-7' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_115)">
                              <path className='transition group-hover:fill-white group-hover:stroke-white' d="M38.4409 18.1472L38.7835 17.9339L43.2599 15.1477L43.392 15.36L43.2599 15.1477C43.5642 14.9583 43.7494 14.6255 43.7499 14.2672C43.7505 13.9087 43.5663 13.5754 43.2625 13.3851L43.3953 13.1732L43.2625 13.3851L22.5517 0.408561L22.6842 0.197064L22.5517 0.40856C22.2142 0.197147 21.7857 0.197146 21.4482 0.408561L21.3155 0.19671L21.4482 0.408561L0.737392 13.3851C0.433746 13.5753 0.249533 13.9087 0.250001 14.2672L38.4409 18.1472ZM38.4409 18.1472L38.7844 18.359M38.4409 18.1472L38.7844 18.359M43.392 23.0944L43.2599 22.8822L38.7835 25.6683L38.4409 25.8816L38.7844 26.0934L43.2561 28.8499C43.5618 29.0384 43.7486 29.3715 43.7499 29.7306C43.7512 30.0898 43.5669 30.4242 43.2625 30.6149L22.5517 43.5914L22.6844 43.8033L22.5516 43.5915C22.383 43.6972 22.1915 43.75 22 43.75C21.8085 43.75 21.6171 43.6972 21.4483 43.5914L0.737478 30.6149L0.604741 30.8268L0.737467 30.6149C0.434063 30.4248 0.249879 30.0919 0.250087 29.7339C0.250295 29.3758 0.434829 29.0431 0.738466 28.8533L5.18621 26.0735L5.52612 25.8611L5.18581 25.6493L0.740129 22.8823C0.740122 22.8823 0.740116 22.8823 0.740109 22.8822C0.43565 22.6927 0.250433 22.3596 0.250087 22.001C0.249741 21.6424 0.434335 21.309 0.73845 21.119L5.18613 18.339L5.52602 18.1265L5.18572 17.9147L0.740023 15.1477L0.739982 15.1477C0.435747 14.9584 0.250572 14.6256 0.250001 14.2672L43.392 23.0944ZM43.392 23.0944L43.2599 22.8822C43.5653 22.6921 43.7507 22.3575 43.7499 21.9978C43.7491 21.6381 43.5623 21.3043 43.2561 21.1155L38.7844 18.359M43.392 23.0944L38.7844 18.359M3.59006 14.0503L3.25082 14.2628L3.5907 14.4744L21.8679 25.8502L22 25.9325L22.1321 25.8502L40.4093 14.4744L40.7492 14.2629L40.4099 14.0503L22.1327 2.59855L22 2.51538L21.8673 2.59855L3.59006 14.0503ZM40.4015 29.9552L40.7424 29.7416L40.4 29.5306L36.6021 27.1894L36.4703 27.1081L36.3389 27.1899L22.549 35.7728C22.381 35.8774 22.1906 35.9297 22 35.9297C21.8094 35.9297 21.619 35.8774 21.451 35.7728L7.62299 27.1662L7.49061 27.0838L7.35838 27.1665L3.58669 29.5238L3.24791 29.7355L3.58645 29.9477L21.8673 41.4016L22 41.4848L22.1327 41.4016L40.4015 29.9552ZM21.8679 33.5846L22 33.6668L22.1321 33.5846L40.3951 22.2176L40.7376 22.0043L40.3941 21.7925L36.6021 19.455L36.4703 19.3738L36.3389 19.4556L22.549 28.0385C22.381 28.1431 22.1906 28.1954 22 28.1954C21.8094 28.1954 21.619 28.1431 21.451 28.0385L7.62299 19.4319L7.49061 19.3495L7.35838 19.4321L3.59245 21.7859L3.25254 21.9983L3.59284 22.2101L21.8679 33.5846Z" fill="#F78CB6" stroke="#F78CB6" strokeWidth="0.5"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_115">
                              <rect width="44" height="44" fill="white"/>
                              </clipPath>
                              </defs>
  </svg> : <div>no image provided</div>

  return (
    <div className={`
      group service-card service-card${index}
      bg-light-pink hover:bg-pinky
      transition duration-1000
      flex flex-col items-center
      rounded-lg p-6
      cursor-pointer
      min-h-[340px]
    `}>
      {icon}
      <h3 className='transition text-violet font-medium text-4xl group-hover:text-white text-center mb-6'>{title}</h3>
      <p className='transition grow text-descr font-proxima text-xl group-hover:text-white text-center max-w-[90%]'>{descr}</p>
      <button className='
      text-white transition duration-500
        origin-top
        scale-0 group-hover:scale-100
        mt-8
        font-circular font-medium font-xl
        flex flex-row items-center
        hover:underline
      '>
        Learn more
        <RiArrowRightSFill className='w-6 h-6 translate-y-px' />
      </button>
    </div>
  )
}

export default ServiceCard;
