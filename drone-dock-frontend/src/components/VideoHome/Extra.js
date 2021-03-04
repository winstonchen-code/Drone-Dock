function Home(props) {
    const [location, setLocation] = useState([])
    // const [review, setReview] = useState([])
    // const [loaded, setLoaded] = useState(false)
    let match = useRouteMatch("/footagelogs/:id");
    console.log(match)

    useEffect (()=> {
        // console.log(props)
        // let match = useRouteMatch("/footagelogs/:id");
        // console.log(match)

        // const id = props.match.params.id
        // const url = `http://localhost:3000/locations/${id}`
        // axios.get(url)
        // .then( resp => {
        //     setLocation(resp.data) 
        //     setLoaded(true)
        // })
        // .catch( resp => console.log (resp) )
    }, [])

    const handleVideoChange = (item, event) => {
        event.preventDefault()

        let course_modules = [...this.state.course_modules]

        course_modules.map (data => {
            data.active = false
        })

        item.active = !item.active

        course_modules[item.id - 1] = item

        this.setState({course_modules})
    }

    return (
        <div>
            <Jumbotron/>
            {/* <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/> */}
        </div>
    )
}