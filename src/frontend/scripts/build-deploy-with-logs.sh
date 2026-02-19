#!/bin/bash

# Build and Deploy Diagnostics Script
# This script runs frontend build steps with detailed logging for troubleshooting

set -e  # Exit on error

LOG_FILE="build-deploy.log"
echo "Starting build and deploy process at $(date)" | tee "$LOG_FILE"

# Function to log and execute commands
run_step() {
  local step_name="$1"
  shift
  echo "" | tee -a "$LOG_FILE"
  echo "========================================" | tee -a "$LOG_FILE"
  echo "STEP: $step_name" | tee -a "$LOG_FILE"
  echo "COMMAND: $*" | tee -a "$LOG_FILE"
  echo "========================================" | tee -a "$LOG_FILE"
  
  if "$@" 2>&1 | tee -a "$LOG_FILE"; then
    echo "✓ $step_name completed successfully" | tee -a "$LOG_FILE"
  else
    echo "✗ $step_name FAILED with exit code $?" | tee -a "$LOG_FILE"
    echo "Check $LOG_FILE for details" | tee -a "$LOG_FILE"
    exit 1
  fi
}

# Navigate to frontend directory
cd "$(dirname "$0")/.."

# Run build steps
run_step "TypeScript Type Check" npm run typescript-check
run_step "Frontend Build" npm run build:skip-bindings
run_step "Copy Environment" npm run copy:env

echo "" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"
echo "Build completed successfully at $(date)" | tee -a "$LOG_FILE"
echo "Log saved to: $LOG_FILE" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"
