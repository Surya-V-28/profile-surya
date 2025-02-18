// CertificateCard Component
import Image from 'next/image';
import AWS from "./imgs/aws.svg"
import Meta from "./imgs/meta-logo.svg"


function CertificateCard({ certificate }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      {/* Adjusted height to make it more square-like */}
      <div className="h-32 w-32 lg:h-36 lg:w-36 cursor-pointer overflow-hidden rounded-t-lg mx-auto">
        <Image
          src={certificate.image}
          height={1080}
          width={1080}  // Ensure the image is square to match the card's aspect ratio
          alt="Certificate"
          className='h-full w-full  group-hover:scale-105 transition-all duration-300 object-cover'
        />
      </div>
      <div className="p-3 flex flex-col text-center">
        <p className='my-2 text-lg text-white font-medium'>
          {certificate.title}
        </p>
        <p className='mb-1 text-sm text-[#16f2b3]'>
          Issued by: {certificate.issuer}
        </p>
        <p className='text-sm text-[#d3d8e8]'>
          Date: {certificate.issue_date}
        </p>
      </div>
    </div>
  );
};

export default CertificateCard;
