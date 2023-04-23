

const PublicHoliday = () => {


  return (
    <>
      <div className="public__holiday">
          <h3 className="public__holidayTitle">Todays Date</h3>
          <p>{new Date().toDateString()}</p>      
      </div>
    </>
  )
}

export default PublicHoliday