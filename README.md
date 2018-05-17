**KingdomAutomata** - multiplatform application for identifying native plant species

## API
1. **Change to the directory:**
```bash
cd plant-api
```

2. **Run locally:**
```bash
lein ring server-headless
```

3. **Deploy to AWS:**
```bash
lein lambda deploy production
```


## CLIENT
1. **Change to the directory:**
```bash
cd web
```

2. **Run app:**
```bash
lein figwheel
```

3. **Monitor build:**
```bash
tail -f figwheel_server.log
```
