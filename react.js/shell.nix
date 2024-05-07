{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
  buildInputs = [
    zsh
    nodejs
    yarn
    rnix-lsp
    fd
  ];
  shellHook = ''
    export GIT_CONFIG_NOSYSTEM=true
    export GIT_CONFIG_SYSTEM="/home/grim_reaper/Projects/configs/github/github_global"
    export GIT_CONFIG_GLOBAL="/home/grim_reaper/Projects/configs/github/github_global"
  '';
}
