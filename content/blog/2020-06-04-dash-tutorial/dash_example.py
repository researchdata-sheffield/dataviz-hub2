import dash
import dash_core_components as dcc
import dash_html_components as html

import plotly.graph_objs as go

import pandas as pd

df = pd.read_csv('https://ndownloader.figsh.com/files/8261349')

# df.head()
countries = df['country'].unique()

app = dash.Dash()

app.layout = html.Div([

    html.Div([
        html.Label('Country'),
        dcc.Dropdown(
            id='country',
            options=[{'label': i, 'value': i} for i in countries],
            value='',
            placeholder='Select...',
            multi=True
        )
    ],
    style={'width': '20%', 'display': 'inline-block', 'margin-bottom': '20px'}),

    html.Div([
        html.Label('Life Expectancy'),
        dcc.Slider(
            id='expectancy-slider',
            min=30,
            max=80,
            value=30,
            step=None,
            marks={'30':'>30', '40':'>40', '50':'>50', '60':'>60', '70':'>70', '80':'>80'}
        ),
    ],
    style={'width': '20%', 'display': 'inline-block', 'margin-bottom': '20px', 'margin-left': '20px'}),

    html.Div([
        dcc.Graph(id='life-exp-vs-gdp'),
    ],
    style={'width': '70%'}),
])

@app.callback(
    dash.dependencies.Output('life-exp-vs-gdp', 'figure'),
    [
        dash.dependencies.Input('expectancy-slider', 'value'),
        dash.dependencies.Input('country', 'value')
    ])
def update_graph(expectancy, country):

    filtered_df = df.loc[df["life expectancy"] > expectancy]

    if (country != '' and country is not None):
        filtered_df = filtered_df[df.country.str.contains('|'.join(country))]

    traces = []
    for i in filtered_df.continent.unique():
        df_by_continent = filtered_df[filtered_df['continent'] == i]
        traces.append(go.Scatter(
            x=df_by_continent['gdp per capita'],
            y=df_by_continent['life expectancy'],
            text=df_by_continent['country'],
            mode='markers',
            opacity=0.7,
            marker={
                'size': 15,
                'line': {'width': 0.5, 'color': 'white'}
            },
            name=i
        ))

    return {
        'data': traces,
        'layout': go.Layout(
            xaxis={'title': 'GDP Per Capita', 'titlefont': dict(size=18, color='darkgrey'), 'zeroline': False, 'ticks': 'outside' },
            yaxis={'title': 'Life Expectancy', 'titlefont': dict(size=18, color='darkgrey'), 'range': [30, 90], 'ticks': 'outside'},
            margin={'l': 60, 'b': 60, 't': 30, 'r': 20},
            legend={'x': 1, 'y': 1},
            hovermode='closest'
        )
    }

app.css.append_css({
    "external_url": "https://codepen.io/chriddyp/pen/bWLwgP.css"
})

if __name__ == '__main__':
    app.run_server(debug=True)