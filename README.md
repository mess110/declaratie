# declaratie

I declare I am bored. I also think repetitive tasks are for robots not humans.

This script writes the "DECLARAȚIE PE PROPRIE RĂSPUNDERE" for you and prints
it (assuming you have a working printer attached and auto selected when
pressing ctrl+p).

# example usage

```
npm install
cp declaratie.example.sh declaratie.sh
# edit declaratie.sh and add your details
./declaratie.sh 0 2 'Location 1'
```

First param is the number of days to add to the current date, 0 for today,
1 for tomorrow etc.

Second param is the list of reasons 1-10, for example `24` means reasons
2 and 4, `1210` means reasons 1, 2 and 10

Third param is the locations and will fill `Locul/locurile deplasării`.

# tests

To execute the tests locally:

```
sudo reboot
```


# limitations

Tested with node 10 on gnome-shell

Currently only works for 1920x1080, you need chrome installed and chrome
has to have bookmarks bar visible (due to clicking at exact coordinates).

You might run into problems when the script tries to click certain positions
on the screen for example line 46 and 71 in declaratie.js. Adjust them as you see fit.

Too lazy to solve these.

# author note

this is a joke, don't use this for anything
