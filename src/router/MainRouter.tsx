import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { IRoute, routePublic } from '@/router/routes/routePublic'
import { routeDashboard } from '@/router/routes/routeDashboard'
import { routePokedex } from '@/router/routes/routePokedex'
import { routePokemon } from './routes/routePokemon'
import { CssBaseline } from '@mui/material'
import { ThemeSettingProvider } from '@/theme/theme'

const ReturnComponent = (Component: React.ComponentType) => {
    return <Component />
}

export const MainRouter = () => {
    const allRoutes: IRoute[] = [...routePublic, ...routeDashboard, ...routePokedex, ...routePokemon]

    return (
        <ThemeSettingProvider>
            <CssBaseline />
            <Routes>
                {allRoutes.map((route: IRoute) => {
                    return <Route path={route.path} element={ReturnComponent(route.element)} key={route.path} />
                })}
            </Routes>
        </ThemeSettingProvider>
    )
}
