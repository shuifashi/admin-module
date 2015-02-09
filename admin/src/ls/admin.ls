change-style-for-the-selected = (event)!->
	change-style '.user-conditon'
	change-style '.find-location'
	change-style '.find-webpage'
	change-style '.title-content'
	event.target
		..style
			..border-bottom = 'solid 0px'

change-style-for-table = (event)!->
	change-style '.message'
	change-style '.topic'
	change-style '.user'
	event.target
		..style
			..border-bottom = 'solid 0px'

change-style = (target1)!->
	document.query-selector target1
		..style
			..border-bottom = 'solid 1px'

# change-style-for-the-selected \.user-conditon
change-style '.find-location'
change-style '.find-webpage'
change-style '.title-content'
change-style '.topic'
change-style '.user'

document.query-selector '.user-conditon' .onclick = change-style-for-the-selected
document.query-selector '.find-location' .onclick = change-style-for-the-selected
document.query-selector '.find-webpage' .onclick = change-style-for-the-selected
document.query-selector '.title-content' .onclick = change-style-for-the-selected
document.query-selector '.topic' .onclick = change-style-for-table
document.query-selector '.user' .onclick = change-style-for-table
document.query-selector'.message' .onclick = change-style-for-table

