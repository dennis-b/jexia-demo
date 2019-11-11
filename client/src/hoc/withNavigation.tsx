import { inject } from 'mobx-react';
// import queryString from 'query-string';
import React from 'react'
import { compose } from 'recompose';
// import { getUrlQuery } from 'utils';

export const withNavigation = (WrappedComponent: any): any => {

    function WithNavigation(props) {

        const navigateTo = (pathname, queryParams?: any) => {
            // const { appStore, routing: { push, location: { search } } } = props;
            // const currentQuery = queryString.parse(search);
            // if (queryParams) {
            //     push({ pathname, search: queryString.stringify({ ...currentQuery, ...queryParams }) });
            // } else {
            //     const urlQuery = getUrlQuery();
            //     push({ pathname, search: urlQuery });
            // }
        };

        const goBack = () => {
            // const { routing: { history } } = props;
            // history.goBack()
        };

        return <WrappedComponent navigateTo={navigateTo} goBack={goBack} {...props} />;
    }


    const enhance = compose(
        inject(({ appStore, routing }) => ({ appStore, routing })),
    );

    return enhance(WithNavigation);
};
