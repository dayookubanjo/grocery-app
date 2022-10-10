import React from 'react'
import ItemList from './ItemList'

const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <main>
        {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={{ marginTop: '2rem', color: 'red' }}>Your list is empty</p>
        )}
    </main>

  )
}
  
export default Content

   // const handleNameChange = () => {
    //     const names = ['Dayo', 'Fortune', 'Derin'];
    //     const int = Math.floor(Math.random() * 3); //random number between 0, i and 2
    //      setName(names[int]);
    //   }

    // const handleClick = () => {
    //     setCount(count + 1)
    //     console.log (count)
    //     }

    // const handleClick2 = (name) => {
    //     console.log (`${name} was clicked`)
    //     }
    // //to get the event details
    // const handleClick3 = (e) => {
    //     console.log (e); // Get full event
    //     console.log (e.target); // Get event target
    //     console.log (e.target.innerText); //Get inner text in event target
    //     }


//     <p onDoubleClick={handleClick}>
//         Hello {name}!
//       </p>
//       <button onClick={handleNameChange}>Change Name</button>
//       <button onClick={handleClick}>Show Count</button>
//       <button onClick={() => handleClick2('Dayo')}>Print provided Name</button>
//       <button onClick={(e) => handleClick3(e)}>View Event Details</button>