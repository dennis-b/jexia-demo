import _styled from 'styled-components';

export function styled(style, ...values): any {
    return (Component: any) => _styled(Component)(style, ...values);
}

