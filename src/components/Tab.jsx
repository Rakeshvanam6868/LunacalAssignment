import PropTypes from 'prop-types';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[190px] ml-[7px] h-[49px] rounded-[16px] text-center p-[10px] cursor-pointer ${
        isActive ? 'bg-[#28292F] shadow-[1px_1px_4px_1px_rgba(0,0,0,0.2)] text-white' : 'text-[#A3ADB2]'
      }`}
    >
      <p className="text-lg drop-shadow-xl">{label}</p>
    </div>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
