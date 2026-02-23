1. What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?

Answer: getElementById finds an element by using one certain ID. It always returns only one element. On the other hand, getElementsByClass helps to find all elements of a certain class. It returns one HTML collection. Finally, querySelector finds by using the CSS selector. It only returns the matching elements, and querySelectorAll returns a NodeList.

2. How do you create and insert a new element into the DOM?

Answer: There are many ways to insert a new element into the DOM. 
Some of them are:
I.Creating elements,
II.Adding Content,
III.Adding DOM.

3. What is Event Bubbling? And how does it work?

Answer: Event bubbling is a function where if
An event works in the child element; it's spread from parent to grandparent, sometimes in documents.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is a process of setting an event listener in the parent element so that the child element of the parent element can be controlled.

It is useful because:

I.No need to set several listeners in several child.
II.Also works for dynamic elements.
III.Performs better.

5. What is the difference between the preventDefault() and stopPropagation() methods?

Answer : preventDefault() stops the default function of an element, and stopPropagation() stops event bubbling.