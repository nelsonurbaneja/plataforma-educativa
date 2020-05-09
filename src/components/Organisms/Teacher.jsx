import React from 'react'

const Teacher = ( {teacher} ) => (
  <article>
    <div className="s-px-4">
      <div className="img-container circle s-mb-2">
        <img src={teacher.picture} alt={teacher.name} />
      </div>
    </div>
    <div className="s-center">
      <p className="t3 s-mb-1">{teacher.name}</p>
      <p>{teacher.country}</p>
    </div>
  </article>
)
export default Teacher
