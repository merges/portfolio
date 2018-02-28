# To-Do List
*Last updated: February 28, 2018*

This is a list of all to-do items remaining for backend development and deployment.

 * Server supports only up to TLS 1.2. TLS 1.3 support should be added once OpenSSL 1.1.1 is finalized.
 * Better separation between "production" and "development" environments would be nice. The development environment should completely disable HTTPS support.
 * Test deployment on non-Ubuntu platforms.
 * Test `ssl-certificate.sh` on a fresh VM.
 * Add the dock app to the repository.
 * Decide what to do with the init script. Should we grab the latest copy on boot?
