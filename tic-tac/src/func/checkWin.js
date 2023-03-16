import ModalWinrate from "../components/ModalWinrate";

export function CheckWin(data) {
  const [showModal, setShowModal] = useState(false);

   // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (data[i].value && data[i].value === data[i + 1].value && data[i].value === data[i + 2].value) {            
          setShowModal(true);      
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (data[i].value && data[i].value === data[i + 3].value && data[i].value === data[i + 6].value) {
      setShowModal(true); 
    }
  }

  // Check diagonals
  if (data[0].value && data[0].value === data[4].value && data[0].value === data[8].value) {
    setShowModal(true); 
  }
  if (data[2].value && data[2].value === data[4].value && data[2].value === data[6].value) {
    setShowModal(true); 
  }

  // No winner
    return (
    <div>
        setShowModal(true); 
    </div>
  );
}