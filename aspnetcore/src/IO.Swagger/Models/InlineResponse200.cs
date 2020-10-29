/*
 * Swagger Petstore
 *
 * This is a sample Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace IO.Swagger.Models
{ 
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class InlineResponse200 : IEquatable<InlineResponse200>
    { 
        /// <summary>
        /// Gets or Sets Username
        /// </summary>
        [DataMember(Name="username")]
        public string Username { get; set; }

        /// <summary>
        /// Gets or Sets ClecUuid
        /// </summary>
        [DataMember(Name="clec_uuid")]
        public string ClecUuid { get; set; }

        /// <summary>
        /// Gets or Sets Password
        /// </summary>
        [DataMember(Name="password")]
        public string Password { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name="email")]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets Role
        /// </summary>
        [DataMember(Name="role")]
        public string Role { get; set; }

        /// <summary>
        /// Gets or Sets FirstName
        /// </summary>
        [DataMember(Name="first_name")]
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or Sets LastName
        /// </summary>
        [DataMember(Name="last_name")]
        public string LastName { get; set; }

        /// <summary>
        /// Gets or Sets PhoneNumber
        /// </summary>
        [DataMember(Name="phone_number")]
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Gets or Sets ContactAddress
        /// </summary>
        [DataMember(Name="contact_address")]
        public string ContactAddress { get; set; }

        /// <summary>
        /// Gets or Sets ContactSuite
        /// </summary>
        [DataMember(Name="contact_suite")]
        public string ContactSuite { get; set; }

        /// <summary>
        /// Gets or Sets ContactCity
        /// </summary>
        [DataMember(Name="contact_city")]
        public string ContactCity { get; set; }

        /// <summary>
        /// Gets or Sets ContactCountry
        /// </summary>
        [DataMember(Name="contact_country")]
        public string ContactCountry { get; set; }

        /// <summary>
        /// Gets or Sets ContactPostalCode
        /// </summary>
        [DataMember(Name="contact_postal_code")]
        public decimal? ContactPostalCode { get; set; }

        /// <summary>
        /// Gets or Sets CompanyName
        /// </summary>
        [DataMember(Name="company_name")]
        public string CompanyName { get; set; }

        /// <summary>
        /// Gets or Sets ProfileAddress
        /// </summary>
        [DataMember(Name="profile_address")]
        public string ProfileAddress { get; set; }

        /// <summary>
        /// Gets or Sets ProfileSuite
        /// </summary>
        [DataMember(Name="profile_suite")]
        public string ProfileSuite { get; set; }

        /// <summary>
        /// Gets or Sets ProfileCity
        /// </summary>
        [DataMember(Name="profile_city")]
        public string ProfileCity { get; set; }

        /// <summary>
        /// Gets or Sets ProfileCountry
        /// </summary>
        [DataMember(Name="profile_country")]
        public string ProfileCountry { get; set; }

        /// <summary>
        /// Gets or Sets ProfilePostalCode
        /// </summary>
        [DataMember(Name="profile_postal_code")]
        public decimal? ProfilePostalCode { get; set; }

        /// <summary>
        /// Gets or Sets StateOfClecCertification
        /// </summary>
        [DataMember(Name="state_of_clec_certification")]
        public string StateOfClecCertification { get; set; }

        /// <summary>
        /// Gets or Sets UploadClecCertification
        /// </summary>
        [DataMember(Name="upload_clec_certification")]
        public string UploadClecCertification { get; set; }

        /// <summary>
        /// Gets or Sets Ocn
        /// </summary>
        [DataMember(Name="ocn")]
        public string Ocn { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse200 {\n");
            sb.Append("  Username: ").Append(Username).Append("\n");
            sb.Append("  ClecUuid: ").Append(ClecUuid).Append("\n");
            sb.Append("  Password: ").Append(Password).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  Role: ").Append(Role).Append("\n");
            sb.Append("  FirstName: ").Append(FirstName).Append("\n");
            sb.Append("  LastName: ").Append(LastName).Append("\n");
            sb.Append("  PhoneNumber: ").Append(PhoneNumber).Append("\n");
            sb.Append("  ContactAddress: ").Append(ContactAddress).Append("\n");
            sb.Append("  ContactSuite: ").Append(ContactSuite).Append("\n");
            sb.Append("  ContactCity: ").Append(ContactCity).Append("\n");
            sb.Append("  ContactCountry: ").Append(ContactCountry).Append("\n");
            sb.Append("  ContactPostalCode: ").Append(ContactPostalCode).Append("\n");
            sb.Append("  CompanyName: ").Append(CompanyName).Append("\n");
            sb.Append("  ProfileAddress: ").Append(ProfileAddress).Append("\n");
            sb.Append("  ProfileSuite: ").Append(ProfileSuite).Append("\n");
            sb.Append("  ProfileCity: ").Append(ProfileCity).Append("\n");
            sb.Append("  ProfileCountry: ").Append(ProfileCountry).Append("\n");
            sb.Append("  ProfilePostalCode: ").Append(ProfilePostalCode).Append("\n");
            sb.Append("  StateOfClecCertification: ").Append(StateOfClecCertification).Append("\n");
            sb.Append("  UploadClecCertification: ").Append(UploadClecCertification).Append("\n");
            sb.Append("  Ocn: ").Append(Ocn).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return obj.GetType() == GetType() && Equals((InlineResponse200)obj);
        }

        /// <summary>
        /// Returns true if InlineResponse200 instances are equal
        /// </summary>
        /// <param name="other">Instance of InlineResponse200 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse200 other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    Username == other.Username ||
                    Username != null &&
                    Username.Equals(other.Username)
                ) && 
                (
                    ClecUuid == other.ClecUuid ||
                    ClecUuid != null &&
                    ClecUuid.Equals(other.ClecUuid)
                ) && 
                (
                    Password == other.Password ||
                    Password != null &&
                    Password.Equals(other.Password)
                ) && 
                (
                    Email == other.Email ||
                    Email != null &&
                    Email.Equals(other.Email)
                ) && 
                (
                    Role == other.Role ||
                    Role != null &&
                    Role.Equals(other.Role)
                ) && 
                (
                    FirstName == other.FirstName ||
                    FirstName != null &&
                    FirstName.Equals(other.FirstName)
                ) && 
                (
                    LastName == other.LastName ||
                    LastName != null &&
                    LastName.Equals(other.LastName)
                ) && 
                (
                    PhoneNumber == other.PhoneNumber ||
                    PhoneNumber != null &&
                    PhoneNumber.Equals(other.PhoneNumber)
                ) && 
                (
                    ContactAddress == other.ContactAddress ||
                    ContactAddress != null &&
                    ContactAddress.Equals(other.ContactAddress)
                ) && 
                (
                    ContactSuite == other.ContactSuite ||
                    ContactSuite != null &&
                    ContactSuite.Equals(other.ContactSuite)
                ) && 
                (
                    ContactCity == other.ContactCity ||
                    ContactCity != null &&
                    ContactCity.Equals(other.ContactCity)
                ) && 
                (
                    ContactCountry == other.ContactCountry ||
                    ContactCountry != null &&
                    ContactCountry.Equals(other.ContactCountry)
                ) && 
                (
                    ContactPostalCode == other.ContactPostalCode ||
                    ContactPostalCode != null &&
                    ContactPostalCode.Equals(other.ContactPostalCode)
                ) && 
                (
                    CompanyName == other.CompanyName ||
                    CompanyName != null &&
                    CompanyName.Equals(other.CompanyName)
                ) && 
                (
                    ProfileAddress == other.ProfileAddress ||
                    ProfileAddress != null &&
                    ProfileAddress.Equals(other.ProfileAddress)
                ) && 
                (
                    ProfileSuite == other.ProfileSuite ||
                    ProfileSuite != null &&
                    ProfileSuite.Equals(other.ProfileSuite)
                ) && 
                (
                    ProfileCity == other.ProfileCity ||
                    ProfileCity != null &&
                    ProfileCity.Equals(other.ProfileCity)
                ) && 
                (
                    ProfileCountry == other.ProfileCountry ||
                    ProfileCountry != null &&
                    ProfileCountry.Equals(other.ProfileCountry)
                ) && 
                (
                    ProfilePostalCode == other.ProfilePostalCode ||
                    ProfilePostalCode != null &&
                    ProfilePostalCode.Equals(other.ProfilePostalCode)
                ) && 
                (
                    StateOfClecCertification == other.StateOfClecCertification ||
                    StateOfClecCertification != null &&
                    StateOfClecCertification.Equals(other.StateOfClecCertification)
                ) && 
                (
                    UploadClecCertification == other.UploadClecCertification ||
                    UploadClecCertification != null &&
                    UploadClecCertification.Equals(other.UploadClecCertification)
                ) && 
                (
                    Ocn == other.Ocn ||
                    Ocn != null &&
                    Ocn.Equals(other.Ocn)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                var hashCode = 41;
                // Suitable nullity checks etc, of course :)
                    if (Username != null)
                    hashCode = hashCode * 59 + Username.GetHashCode();
                    if (ClecUuid != null)
                    hashCode = hashCode * 59 + ClecUuid.GetHashCode();
                    if (Password != null)
                    hashCode = hashCode * 59 + Password.GetHashCode();
                    if (Email != null)
                    hashCode = hashCode * 59 + Email.GetHashCode();
                    if (Role != null)
                    hashCode = hashCode * 59 + Role.GetHashCode();
                    if (FirstName != null)
                    hashCode = hashCode * 59 + FirstName.GetHashCode();
                    if (LastName != null)
                    hashCode = hashCode * 59 + LastName.GetHashCode();
                    if (PhoneNumber != null)
                    hashCode = hashCode * 59 + PhoneNumber.GetHashCode();
                    if (ContactAddress != null)
                    hashCode = hashCode * 59 + ContactAddress.GetHashCode();
                    if (ContactSuite != null)
                    hashCode = hashCode * 59 + ContactSuite.GetHashCode();
                    if (ContactCity != null)
                    hashCode = hashCode * 59 + ContactCity.GetHashCode();
                    if (ContactCountry != null)
                    hashCode = hashCode * 59 + ContactCountry.GetHashCode();
                    if (ContactPostalCode != null)
                    hashCode = hashCode * 59 + ContactPostalCode.GetHashCode();
                    if (CompanyName != null)
                    hashCode = hashCode * 59 + CompanyName.GetHashCode();
                    if (ProfileAddress != null)
                    hashCode = hashCode * 59 + ProfileAddress.GetHashCode();
                    if (ProfileSuite != null)
                    hashCode = hashCode * 59 + ProfileSuite.GetHashCode();
                    if (ProfileCity != null)
                    hashCode = hashCode * 59 + ProfileCity.GetHashCode();
                    if (ProfileCountry != null)
                    hashCode = hashCode * 59 + ProfileCountry.GetHashCode();
                    if (ProfilePostalCode != null)
                    hashCode = hashCode * 59 + ProfilePostalCode.GetHashCode();
                    if (StateOfClecCertification != null)
                    hashCode = hashCode * 59 + StateOfClecCertification.GetHashCode();
                    if (UploadClecCertification != null)
                    hashCode = hashCode * 59 + UploadClecCertification.GetHashCode();
                    if (Ocn != null)
                    hashCode = hashCode * 59 + Ocn.GetHashCode();
                return hashCode;
            }
        }

        #region Operators
        #pragma warning disable 1591

        public static bool operator ==(InlineResponse200 left, InlineResponse200 right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(InlineResponse200 left, InlineResponse200 right)
        {
            return !Equals(left, right);
        }

        #pragma warning restore 1591
        #endregion Operators
    }
}