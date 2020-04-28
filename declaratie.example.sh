#!/usr/bin/env sh

# ./declaratie.sh 0 2 'Location 1'

log() {
  msg=$1
  t=$(date +"%Y-%m-%d %H:%M:%S")
  echo "$t $msg"
}

DAY=$1
REASONS=$2
PLACES=$3

[ -z "$DAY" ] && log "day argument missing. 0 for today, 1 for tomorrow etc" && exit 1
[ -z "$REASONS" ] && log "reasons missing, values from 1 to 10, many reasons like 1410 (means 1, 4, 10)" && exit 1
[ -z "$PLACES" ] && log "places missing. example: Mega str. X" && exit 1

google-chrome https://stirioficiale.ro/storage/28MODEL%20Declaratie%20proprie%20raspundere%202503.pdf
node declaratie.js $DAY $REASONS 'John' 'Doe' '01' '04' '1900' 'Address 1' 'City' "$PLACES"
