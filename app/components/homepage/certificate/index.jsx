// @flow strict
import Link from 'next/link';
import CertificateCard from './certificate-card';
import { certificate } from '../../../../utils/data/certificate.js';
import { FaArrowRight } from 'react-icons/fa6';

export const certificates = Array.isArray(certificate) ? certificate : [];

function Certificates() {
  return (
    <div id='certificates' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] px-4 sm:px-8">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Grid Layout for Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        {
          certificates.slice(0, 5).map((certificate, i) => (
            certificate?.image && <CertificateCard certificate={certificate} key={i} />
          ))
        }
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="https://drive.google.com/drive/folders/18HjAUL4KyouAbP9O8iPdYHgW7wR5OLeC"
          target='_blank'
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
};

export default Certificates;
