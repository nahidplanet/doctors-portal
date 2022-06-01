
const SingleSlot = ({ slot,openModal }) => {
  const { name, slots } = slot;
  return (
    <div className="card border-t flex justify-center items-center shadow-xl">
      <div className="card-body text-center">
        <h1 className='text-[#19D3AE] text-xl font-semibold'>{name}</h1>
        <h3>{slots[0]}</h3>
        <p>{slots.length < 1 ? "no space avilable" : `${slots.length} space avilable`}</p>
        <label htmlFor="booking-modal"
        onClick={()=>openModal(slot)}
        disabled={slots.length < 1}
         className="btn modal-button border-0 text-white bg-gradient-to-r from-[#18D3AF] to-[#0FCFEB]">book Appointment</label>
      </div>
    </div>
  );
};

export default SingleSlot;