import React from 'react'

const SearchForm = (props) => {
    return (
        <div>
            <form>
                <input autoFocus name='q' type="text" placeholder={props.placeholder} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchForm
