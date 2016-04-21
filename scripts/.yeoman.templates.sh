#!/bin/bash
function md_input () {
  echo "md-input-container>(label+input[ng-model='$1'])" | pbcopy;
  echo "Generating: md-input-container>(label+input[ng-model='$1'])";
}

alias md\.input=md_input;
