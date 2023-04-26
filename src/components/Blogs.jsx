import React from 'react';
import Header from './subComponents/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBullseye, faCheck, faQuestion, faRightLong } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
    const title = 'Blogs'

    return (
        <>
            <Header title={title} />

            <div className='MyContainer mb-[130px]'>

                <article>
                    <h3 className='font-semibold text-lg'><FontAwesomeIcon icon={faBook} className='mr-2' />When Should use Context API ?</h3>
                    <blockquote>
                        <FontAwesomeIcon icon={faBullseye} className='mr-2' />
                        When I have to sent a data to several places that will more than (1/2/3) normal data sending & will sent data to children's children as well, then I should use Context API . It makes a network like tower (createContext) and all children get data from the network tower like mobile phone (useContext)
                    </blockquote>
                </article>



                <article className='my-6'>
                    <h3 className='font-semibold text-lg'><FontAwesomeIcon icon={faBook} className='mr-2' /> What is custom Hook ?</h3>
                    <blockquote>
                        <FontAwesomeIcon icon={faBullseye} className='mr-2' />
                        Custom Hook is a mechanism used to reuse the same logic's in many components with the same processing logic. As a function , it takes a input and returns output . It's name starts with use like useQuery useMedia... . Unlike Functional components, custom hooks return a normal non-jsx data.
                        Unlike normal function, custom hooks can use other hooks such as useState, useRef... and other custom hooks.
                    </blockquote>
                </article>

                <article >
                    <h3 className='font-semibold text-lg'><FontAwesomeIcon icon={faBook} className='mr-2' />What is useRef() ?</h3>
                    <blockquote>
                        <FontAwesomeIcon icon={faBullseye} className='mr-2' />
                        useRef() is like a box where you can store something. A number, an object, anything you want.
                        And unlike useState, changes in your useRef "box" does not trigger a new render.to store mounted components:
                        {'<Input ref={myRef} />'}
                        so you can later do something. For example, trigger a focus on this element: myRef.current.focus()
                    </blockquote>
                </article>

                <article className='mt-6'>
                    <h3 className='font-semibold text-lg'><FontAwesomeIcon icon={faBook} className='mr-2' />What is useMemo()?</h3>
                    <blockquote>
                        <FontAwesomeIcon icon={faBullseye} className='mr-2' />
                        UseMemo is a built-in React hook that allows you to memoize expensive functions so that you can avoid calling them on every render. It accepts two arguments — a function compute that computes a result, and the depedencies array[] - and will only recompute the memoized value when one of the inputs has changed.The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
                    </blockquote>
                </article>
            </div>
        </>
    );
};

export default Blogs;