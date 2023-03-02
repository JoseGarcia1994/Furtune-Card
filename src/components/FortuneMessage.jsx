
const FortuneMessage = ({phrase}) => {

    return (
        <div>
          <div className="fortune__message-card">
            <p className="fortune__message-phrase">
              {phrase.phrase}
            </p>
            <i className='fortune__message-icon bx bxs-quote-right'></i>
          </div>
        </div>
    );
};

export default FortuneMessage;